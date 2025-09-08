import React, { useMemo, useRef, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  Platform,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';
import NeomorphBox from '@/components/ui/NeomorphBox'; // ★追加
import useQuestionData from '@/components/questioncomp/useQuestionData';
import { router } from 'expo-router';
import TapIndicator from '@/components/ui/TapIndicator';
import CardDesign from '@/components/ui/CardDesign';


// --- Lockable Lottie wrapper: show only when active; reset when inactive ---
const LockableLottie: React.FC<{
  active: boolean;
  source: any;
  style?: any;
  autoPlay?: boolean;
  loop?: boolean;
}> = ({ active, source, style, autoPlay = true, loop = true }) => {
  const ref = React.useRef<LottieView | null>(null);

  React.useEffect(() => {
    if (!active) {
      try { ref.current?.reset?.(); } catch {}
    }
  }, [active]);

  if (!active) return null;
  return (
    <LottieView ref={ref} source={source} style={style} autoPlay={autoPlay} loop={loop} />
  );
};
// --- Daily limit key helpers (canonicalize + migrate) ---
const sanitizeLevelKey = (lvl: string) =>
  String(lvl ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/\./g, '_');

const dailyLimitKey = (lvl: string) => `@max_daily_limit_${sanitizeLevelKey(lvl)}`;

// Try legacy variants and migrate to canonical if found
const readDailyLimitAnyKey = async (lvl: string) => {
  const canon = dailyLimitKey(lvl);
  const variants = Array.from(new Set([
    canon,
    // legacy patterns that might exist in the wild
    `@max_daily_limit_${String(lvl).replace(/\./g, '_')}`,
    `@max_daily_limit_${String(lvl).replace(/_/g, '.')}`,
    `@max_daily_limit_${String(lvl)}`,
    `@max_daily_limit_${String(lvl).toLowerCase()}`,
    `@max_daily_limit_${String(lvl).toLowerCase().replace(/\s+/g, '_')}`,
  ]));

  for (const k of variants) {
    try {
      const raw = await AsyncStorage.getItem(k);
      if (raw != null) {
        // migrate if needed
        if (k !== canon) {
          await AsyncStorage.setItem(canon, raw);
          await AsyncStorage.removeItem(k);
        }
        return { key: canon, raw } as const;
      }
    } catch (e) {
      console.warn('readDailyLimitAnyKey error for', k, e);
    }
  }
  return { key: canon, raw: null } as const;
};

// Custom easing: starts gently, accelerates mid-way, then slows extra hard near the end

// Monotonic decelerating easing (always slowing): small start speed, keeps slowing
const easeMonotoneSlow = (t: number) => {
  const clamped = Math.max(0, Math.min(1, t));
  return 1 - Math.pow(1 - clamped, 6); // 5乗 ease-out（必要なら 4〜6 で微調整）
};

// ---- helpers ----
const normalizePace = (p?: Pace): Pace => ({
  dailySolved: Number(p?.dailySolved ?? 0),
  accuracy: Math.max(0, Math.min(1, Number(p?.accuracy ?? 0.6))),
  streakDays: Math.max(0, Math.floor(Number(p?.streakDays ?? 0))),
});

 
 

// ====== 推定ロジック（簡易版・置き換え可） ======
export type Pace = { dailySolved: number; accuracy: number; streakDays: number };

export function estimateMultiplier(p: Pace) {
  const base = 1.6 + (p.accuracy - 0.6) * 1.2 + Math.min(p.streakDays, 30) * 0.02;
  return Math.max(1.1, Math.min(4.5, base));
}
export function estimateTimeSaveHours(p: Pace) {
  const hr = p.dailySolved * 0.12 * Math.min(p.streakDays / 10, 3);
  return Math.max(4, Math.min(80, hr));
}
export function estimateScoreGain(p: Pace) {
  const gain = 40 + p.dailySolved * 0.8 + (p.accuracy - 0.6) * 220 + Math.min(p.streakDays, 20) * 2.5;
  return Math.max(20, Math.min(180, Math.round(gain)));
}

// ====== 開封コンポーネント ======
type Stage = 'LOCKED' | 'REVEALED';
type GradientTuple = readonly [string, string, ...string[]];
type RevealTheme = {
  gradientColors: GradientTuple;           // 背景グラデ（2色以上のタプル）
  valueColor: string;                 // 中央の数値色
  valueFontSize: number;              // 数値フォントサイズ
  bottomTitleColor: string;           // 下部タイトル色
  bottomTitleFontSize: number;        // 下部タイトルサイズ
  chartPrimaryColor: string;          // チャート: ベース色
  chartAccentColor: string;           // チャート: アクセント色
};
const DEFAULT_THEME: RevealTheme = {
  gradientColors: ["#FFB800", "#FF7A00", "#FF00A8"] as const,
  valueColor: '#FFFFFF',
  valueFontSize: 66,
  bottomTitleColor: '#EAF1FF',
  bottomTitleFontSize: 22,
  chartPrimaryColor: '#4570D9',
  chartAccentColor: '#FF7A00',
};
type RevealProps = {
  lockedTitle: string; // 例: "目標達成の見込み"
  revealedTitle: string; // 例: "あなたの学習ペースの場合、達成確率は3.6倍"
  analyzingHint?: string; // 例: "あなたの学習ペースを解析中…"
  note?: string; // 開封後の短い補足
  value: number; // 例: 3.6
  format: (v: number) => string; // 例: (v) => `${v.toFixed(1)}倍`
  holdToRevealMs?: number; // デフォ 420ms
  analysisMinMs?: number; // デフォ 650ms
  allowTapReveal?: boolean; // デフォ true
  onRevealed?: () => void; // トラッキング等
  headline?: string; // カード外に大きく表示する見出し（例: 継続状況）
  bindPressHandlers?: (
    h: {
      onPressIn: () => void;
      onPressOut: () => void;
      onPress: () => void;
      attachExternalProgress?: (v: Animated.Value) => void;
      forceReveal?: () => void;
    }
  ) => void;
  level?: string; // 対応する級（例: '1', '1.5', '2', '2.5', '3'）
  suffixSmall?: string;   // 例: "/年" を小さく描画
  suffixScale?: number;
  // Chart customization:
  chartMode?: 'pct' | 'days' | 'price';
  baselineDays?: number;
  appDays?: number;
  baselinePrice?: number; // 単語帳の価格（円）
  appPrice?: number;      // アプリの価格（円）
  theme?: Partial<RevealTheme>;
  active?: boolean;
};

// ====== UI Subcomponents (for simplicity) ======
// 置き換え
const HeaderBlock: React.FC<{
  stage: Stage;
  title: string;
  note?: string;
  analyzingHint: string;
  pressing: boolean;
  headline?: string;
}> = ({ stage, title, headline }) => {
  if (stage === 'LOCKED') {
    return (
      <>
        {headline && <Text style={revealStyles.headline}>{headline}</Text>}
        <View style={revealStyles.header}>
          <Text style={revealStyles.lockedTeaser}>{title}</Text>
          <LinearGradient
            colors={[ '#2D6BFF', '#00C2FF' ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={revealStyles.titleUnderline}
          />
        </View>
      </>
    );
  }

  return (
    <>
      {headline && <Text style={revealStyles.headline}>{headline}</Text>}
      <View style={revealStyles.header}>
        <Text style={revealStyles.title}>{title}</Text>
        <LinearGradient
          colors={["#FFB800", "#FF7A00", "#FF00A8"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}        />
      </View>
    </>
  );
};



const BackgroundLocked: React.FC<{ stripeX: Animated.Value; pressing?: boolean }> = ({ pressing }) => (
  <View pointerEvents="none" style={revealStyles.lockedBg}>
    {/* 中央：通常は🔒、長押し中のみ「計測中」 */}
    <View style={revealStyles.lockCenter}>
      {pressing ? (
        <Text
          style={[
            revealStyles.lockCenterText,
            revealStyles.lockCenterAnalyzingText,
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.6}
        >
          計測中
        </Text>
      ) : (
        <Ionicons name="lock-closed" size={48} color="#fff" style={[revealStyles.lockCenterText, revealStyles.lockIconText]} />
      )}
    </View>
  </View>
);
const BackgroundRevealed: React.FC<{ colors: GradientTuple }> = ({ colors }) => (
  <View pointerEvents="none" style={revealStyles.revealedBg}>
    <LinearGradient
      colors={colors}            // ← ここが tuple になったので型OK
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      style={StyleSheet.absoluteFill}
    />
    <LinearGradient
      colors={['rgba(255,255,255,0.18)', 'rgba(255,255,255,0)'] as const}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      style={revealStyles.revealedSheen}
    />
  </View>
);


const RevealCard: React.FC<RevealProps> = ({
  lockedTitle,
  revealedTitle,
  analyzingHint = '解析中…',
  note,
  value,
  format,
  holdToRevealMs = 1200,
  allowTapReveal = false,
  onRevealed,
  headline,
  bindPressHandlers,
  suffixSmall,
  suffixScale,
  chartMode,
  baselineDays,
  appDays,
  baselinePrice,
  appPrice,
  theme,
  active = true,
}) => {
  const mergedTheme: RevealTheme = { ...DEFAULT_THEME, ...(theme || {}) };
  const [stage, setStage] = useState<Stage>('LOCKED');
  const blurAnim = useRef(new Animated.Value(1)).current; // 1→0
  const countAnim = useRef(new Animated.Value(0)).current; // 0→1
  const glowOpacity = useRef(new Animated.Value(0)).current; // 0→1→0
  const shineX = useRef(new Animated.Value(-180)).current; // 左→右
  const openAnim = useRef(new Animated.Value(0)).current; // 0->1 for reveal pop

  const pressScale = useRef(new Animated.Value(1)).current; // 1 -> 0.98

  const pulse = useRef(new Animated.Value(0)).current; // 0..1 (halo)
  // Animation loop refs for pulse and stripe
  const pulseLoopRef = useRef<Animated.CompositeAnimation | null>(null);
  const [pressing, setPressing] = useState(false);
  const [showSuccessLottie, setShowSuccessLottie] = useState(false);

  const holdProgress = useRef(new Animated.Value(0)).current; // 0..1
  const holdAnimRef = useRef<Animated.CompositeAnimation | null>(null);
  const externalProgressRef = React.useRef<Animated.Value | null>(null);

  // --- Haptics tracking for hold milestones ---
  const holdHapticsLastRef = useRef(0); // last progress milestone (legacy)
  const holdHapticsLastTickTs = useRef(0); // last haptic timestamp (ms)
  const holdProgressListenerRef = useRef<string | null>(null);
  const clearHoldHapticsListener = () => {
    if (holdProgressListenerRef.current) {
      holdProgress.removeListener(holdProgressListenerRef.current);
      holdProgressListenerRef.current = null;
    }
    holdHapticsLastRef.current = 0;
    holdHapticsLastTickTs.current = 0;
  };
  // Cleanup function for haptics (to be used in effects)
  const cleanupHoldHaptics = clearHoldHapticsListener;

  const stripeX = useRef(new Animated.Value(0)).current; // locked sheen translateX
  const stripeLoopRef = useRef<Animated.CompositeAnimation | null>(null);

  // 数値の進捗（0..1）をそのまま使う
  const displayProgress = countAnim; // 0..1

  // 長押しタイマー
const startAnalyzing = () => {
  if (stage !== 'LOCKED') return;
  beginReveal();   // 直接REVEALEDに遷移
};

  const beginReveal = () => {
    if (stage === 'REVEALED') return;
    setStage('REVEALED');
    setShowSuccessLottie(true);
    setTimeout(() => setShowSuccessLottie(false), 1200);

    // trigger small pop animation + Lottie
    openAnim.setValue(0);
    Animated.spring(openAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 6,
      tension: 80,
    }).start();

    Animated.timing(blurAnim, {
      toValue: 0,
      duration: 320,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();

    countAnim.setValue(0);
    Animated.timing(countAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: false,
      easing: Easing.out(Easing.quad),
    }).start();

    glowOpacity.setValue(0);
    Animated.sequence([
      Animated.timing(glowOpacity, { toValue: 1, duration: 160, useNativeDriver: true }),
      Animated.timing(glowOpacity, { toValue: 0, duration: 300, useNativeDriver: true }),
    ]).start();

    shineX.setValue(-180);
    Animated.timing(shineX, {
      toValue: 260,
      duration: 620,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onRevealed?.();
  };

  React.useEffect(() => {
    if (active && stage === 'LOCKED') {
      pulse.setValue(0);
      if (!pulseLoopRef.current) {
        pulseLoopRef.current = Animated.loop(
          Animated.sequence([
            Animated.timing(pulse, { toValue: 1, duration: 1200, useNativeDriver: true }),
            Animated.timing(pulse, { toValue: 0, duration: 1200, useNativeDriver: true }),
          ])
        );
      }
      pulseLoopRef.current.start();
      return () => {
        pulseLoopRef.current?.stop?.();
      };
    }
  }, [stage, pulse, active]);
  // Cleanup haptics listeners/timeouts on unmount
  React.useEffect(() => {
    return () => {
      // ensure haptics listeners/timeouts are cleared when unmounting
      if (typeof cleanupHoldHaptics === 'function') {
        cleanupHoldHaptics();
      }
    };
  }, []);
  // Cleanup haptics listeners/timeouts whenever stage flips to REVEALED (safety)
  React.useEffect(() => {
    if (stage === 'REVEALED') {
      // safety: in case any listener still alive
      cleanupHoldHaptics?.();
    }
  }, [stage]);

  React.useEffect(() => {
    if (active && stage === 'LOCKED') {
      stripeX.setValue(-60);
      if (!stripeLoopRef.current) {
        stripeLoopRef.current = Animated.loop(
          Animated.timing(stripeX, { toValue: 60, duration: 1400, useNativeDriver: true, easing: Easing.linear })
        );
      }
      stripeLoopRef.current.start();
      return () => {
        stripeLoopRef.current?.stop?.();
      };
    }
  }, [stage, stripeX, active]);

  const handlePressIn = () => {
    setPressing(true);
    Animated.spring(pressScale, { toValue: 0.98, useNativeDriver: true, speed: 18, bounciness: 6 }).start();

    // immediate haptic
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // start filling gauge
    holdProgress.setValue(0);
    holdAnimRef.current?.stop?.();

    // time-based cadence: weak ticks that accelerate as progress grows
    clearHoldHapticsListener();
    holdProgressListenerRef.current = holdProgress.addListener(({ value }) => {
      const t = Math.max(0, Math.min(1, Number(value) || 0));
      const now = Date.now();
      // Much stronger deceleration: start very fast (~14Hz) → end very slow (~0.8Hz)
      const maxHz = 6;
      const minHz = 0.5;
      const hz = minHz + (maxHz - minHz) * Math.pow(1 - t, 4); // quartic ease-out
      const interval = 1000 / hz; // ms per tick
      if (now - holdHapticsLastTickTs.current >= interval - 2) {
        holdHapticsLastTickTs.current = now;
        // keep feedback light; occasionally add Light impact at early stage only
        if (t < 0.35 && Math.random() < 0.2) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        } else {
          Haptics.selectionAsync();
        }
      }
    });

    if (!externalProgressRef.current) {
      holdAnimRef.current = Animated.timing(holdProgress, {
        toValue: 1,
        duration: Math.round(holdToRevealMs * 0.99),
        useNativeDriver: false,
        easing: easeMonotoneSlow,
      });
      holdAnimRef.current.start(({ finished }) => {
        clearHoldHapticsListener();
        if (finished) startAnalyzing();
      });
    }
  };

  const handlePressOut = () => {
    setPressing(false);
    Animated.spring(pressScale, { toValue: 1, useNativeDriver: true }).start();
    holdAnimRef.current?.stop?.();
    holdProgress.setValue(0);
    clearHoldHapticsListener();
  };
  const handlePress = () => {
    if (allowTapReveal) startAnalyzing();
  };

  React.useEffect(() => {
    const cleanups: Array<() => void> = [];
    bindPressHandlers?.({
      onPressIn: handlePressIn,
      onPressOut: handlePressOut,
      onPress: handlePress,
      attachExternalProgress: (v: Animated.Value) => {
        externalProgressRef.current = v;
        holdProgress.setValue(0);
        const REVEAL_THRESHOLD = 0.99; // reveal a bit early for snappier feel
        const id = v.addListener(({ value }) => {
          const t = Math.max(0, Math.min(1, Number(value) || 0));
          holdProgress.setValue(t);
          if (t >= REVEAL_THRESHOLD) {
            clearHoldHapticsListener();
            startAnalyzing();
          }
        });
        cleanups.push(() => v.removeListener(id));
      },
      forceReveal: () => startAnalyzing(),
    });
    return () => {
      externalProgressRef.current = null;
      cleanups.forEach((fn) => fn());
    };
  }, [bindPressHandlers]);

  // Helper to render bottom-of-card revealedTitle with rich emphasis on 価格、日数、時間
  const renderRichTitle = (title: string) => {
    const baseSize = mergedTheme.bottomTitleFontSize ?? 22;
    // Targets: ¥12,345 / 123日 / 123時間
    const pattern = /(?:¥[0-9,]+|[0-9]+日|[0-9]+時間)/g;
    const parts = String(title).split(pattern);
    const matches = String(title).match(pattern) || [];

    const nodes: React.ReactNode[] = [];
    for (let i = 0; i < parts.length; i++) {
      // normal text
      nodes.push(
        <Text key={`p-${i}`} style={[revealStyles.bottomTitle, { color: mergedTheme.bottomTitleColor, fontSize: baseSize }]}>
          {parts[i]}
        </Text>
      );
      // emphasized match after each part except the last
      if (i < matches.length) {
        const m = matches[i];
        nodes.push(
          <Text
            key={`m-${i}`}
            style={[
              revealStyles.bottomTitle,
              {
                color: mergedTheme.bottomTitleColor,
                fontSize: Math.round(baseSize * 1.28),
                fontWeight: '900',
                textShadowColor: 'rgba(0,0,0,0.25)',
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 2,
              },
            ]}
          >
            {m}
          </Text>
        );
      }
    }

    return (
      <Text numberOfLines={2} style={{ textAlign: 'center' }}>
        {nodes}
      </Text>
    );
  };

  return (
    <View style={revealStyles.container}>
      {/* Pulsing halo */}
      {/* (removed for simplified locked state) */}

      <HeaderBlock stage={stage} title={lockedTitle} note={note} analyzingHint={analyzingHint} pressing={pressing} headline={headline} />

      {stage === 'LOCKED' ? (
        (() => {
          // Use cardWidth and cardHeight for NeomorphBox
          const cardWidth: number = Dimensions.get('window').width * 0.8;
          const cardHeight: number = cardWidth / 1.3;
          return (
            <NeomorphBox
              width={cardWidth}
              height={cardHeight}
            >
              <Animated.View
                style={[
                  revealStyles.cardInner,
                  {
                    transform: [
                      { perspective: 800 },
                      { scale: pressScale },
                    ],
                  },
                ]}
              >
                <BackgroundLocked stripeX={stripeX} pressing={pressing} />

                {/* Reserve space with invisible content to match revealed layout height */}
                <View style={{ opacity: 0 }} pointerEvents="none">
                  <Text style={revealStyles.value}>0</Text>
                  <View style={{ marginTop: 8 }}>
                    <ComparisonChart show={false} active={false} width={Dimensions.get('window').width * 0.7} height={88} />
                  </View>
                </View>

                <Animated.View style={[revealStyles.glow, { opacity: glowOpacity }]} />
              </Animated.View>
            </NeomorphBox>
          );
        })()
      ) : (
        (() => {
          const cardWidth: number = Dimensions.get('window').width * 0.8;
          const cardHeight: number = cardWidth / 1.3;
          return (
            <NeomorphBox width={cardWidth} height={cardHeight}>
              <Animated.View
                style={[
                  revealStyles.cardInner,
                  {
                    transform: [
                      { perspective: 800 },
                      { scale: pressScale },
                    ],
                  },
                ]}
              >
                {/* Purchase mini-card overlay (top of card) */}
                <BackgroundRevealed colors={mergedTheme.gradientColors} />

                {/* Value / chart area */}
                <>
                  <AnimatedNumberText
                    progress={displayProgress}
                    target={value}
                    format={format}
                    style={[revealStyles.value, { color: mergedTheme.valueColor, fontSize: mergedTheme.valueFontSize }]}
                    suffixSmall={suffixSmall}
                    suffixScale={suffixScale}
                  />
                  <Animated.View
                    pointerEvents="none"
                    style={{
                      marginTop: 8,
                      opacity: openAnim.interpolate({ inputRange: [0, 0.65, 1], outputRange: [0, 0, 1] }),
                      transform: [{ translateY: openAnim.interpolate({ inputRange: [0, 1], outputRange: [6, 0] }) }],
                    }}
                  >
                  {chartMode && (
                    <ComparisonChart
                      show={true}
                      active={active}
                      width={Dimensions.get('window').width * 0.7}
                      height={88}
                      mode={chartMode}
                      purchasedPct={chartMode === 'pct' ? 0.82 : undefined}
                      freePct={chartMode === 'pct' ? 0.14 : undefined}
                      baselineDays={chartMode === 'days' ? baselineDays : undefined}
                      appDays={chartMode === 'days' ? appDays : undefined}
                      baselinePrice={chartMode === 'price' ? baselinePrice : undefined}
                      appPrice={chartMode === 'price' ? appPrice : undefined}
                      primaryColor={mergedTheme.chartPrimaryColor}
                      accentColor={mergedTheme.chartAccentColor}
                    />
                  )}
                  </Animated.View>
                </>

                {/* Bottom-of-card revealedTitle */}
                {/* Bottom-of-card revealedTitle (rich) */}
                {renderRichTitle(revealedTitle)}

                <Animated.View style={[revealStyles.glow, { opacity: glowOpacity }]} />
                <Animated.View style={[revealStyles.shine, { transform: [{ translateX: shineX }] }]}> 
                  <LinearGradient
                    colors={[ 'rgba(255,255,255,0)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0)' ]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    style={StyleSheet.absoluteFill}
                  />
                </Animated.View>
              </Animated.View>
            </NeomorphBox>
          );
        })()
      )}
      {/* Open reveal pop + confetti */}
      {showSuccessLottie && (
        <Animated.View
          pointerEvents="none"
          style={{
            position: 'absolute',
            left: '50%',
            top: '40%',
            marginLeft: -120,
            width: 240,
            height: 240,
            alignItems: 'center',
            justifyContent: 'center',
            transform: [{ scale: openAnim.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1.06] }) }],
            opacity: openAnim,
          }}
        >
          <LockableLottie
            active={showSuccessLottie}
            source={require('../../assets/lottie/Success.json')}
            style={{ width: 240, height: 240 }}
            autoPlay
            loop={false}
          />
        </Animated.View>
      )}
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityRole="button"
        accessibilityLabel="開封"
        style={StyleSheet.absoluteFill}
      />
    </View>
  );
};
const AnimatedNumberText: React.FC<{
  progress: Animated.Value;
  target: number;
  format: (v: number) => string;
  style?: any;
  suffixSmall?: string;
  suffixScale?: number;
}> = ({ progress, target, format, style, suffixSmall, suffixScale }) => {
  const [text, setText] = useState(format(0));
  const lastValueRef = useRef(0);
  const lastEmitTsRef = useRef(0);
  const MIN_STEP = 0.5;   // 値がこれ以上変わったら更新
  const MIN_MS = 80;      // もしくは最低でもこの間隔で更新

  React.useEffect(() => {
    const id = progress.addListener(({ value }) => {
      const v = Number(value);
      const clamped = Math.max(0, Math.min(1, isNaN(v) ? 0 : v));
      const current = clamped * target;

      const now = Date.now();
      const dv = Math.abs(current - lastValueRef.current);
      const dt = now - lastEmitTsRef.current;

      if (dv >= MIN_STEP || dt >= MIN_MS) {
        lastValueRef.current = current;
        lastEmitTsRef.current = now;
        setText(format(current));
      }
    });
    return () => progress.removeListener(id);
  }, [progress, target, format]);

  const flat = StyleSheet.flatten(style) || {};
  const baseSize = typeof flat.fontSize === 'number' ? flat.fontSize : 16;

  // Render as separate pieces: number + "時間" + suffixSmall
  if (typeof text === 'string') {
    const unit = '時間';
    const hasUnit = text.includes(unit);
    const hasSuffix = !!suffixSmall && text.endsWith(String(suffixSmall));

    if (hasUnit && hasSuffix) {
      const idxUnit = text.indexOf(unit);
      const mainNumber = text.slice(0, idxUnit);         // e.g., "48"
      const unitText = unit;                              // "時間"
      const suffixText = String(suffixSmall);             // e.g., "/年"

      return (
        <Text style={style} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.7}>
          <Text style={style}>{mainNumber}</Text>
          <Text style={style}>{unitText}</Text>
          <Text
            style={{
              fontSize: baseSize * (suffixScale ?? 0.6),
              fontWeight: '600',
              color: StyleSheet.flatten(style)?.color || '#fff',
            }}
          >
            {suffixText}
          </Text>
        </Text>
      );
    }

    // Fallback: if only suffixSmall matches, keep previous smaller-suffix behavior
    if (hasSuffix) {
      const main = text.slice(0, -String(suffixSmall).length);
      return (
        <Text style={style} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.7}>
          {main}
          <Text
            style={{
              fontSize: baseSize * (suffixScale ?? 0.6),
              fontWeight: '600',
              color: StyleSheet.flatten(style)?.color || '#fff',
            }}
          >
            {suffixSmall}
          </Text>
        </Text>
      );
    }
  }

  return (
    <Text style={style} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.7}>
      {text}
    </Text>
  );
};

// Simple animated comparison chart: two polylines (purchased vs not purchased)
type ComparisonChartProps = {
  show: boolean;
  width?: number;
  height?: number;
  mode?: 'pct' | 'days' | 'price';
  purchasedPct?: number;
  freePct?: number;
  baselineDays?: number;
  appDays?: number;
  baselinePrice?: number;
  appPrice?: number;
  primaryColor?: string;
  accentColor?: string;
  active?: boolean;
};
const ComparisonChart: React.FC<ComparisonChartProps> = ({
  show,
  width = 220,
  height = 88,
  mode = 'pct',
  purchasedPct = 0.82,
  freePct = 0.14,
  baselineDays,
  appDays,
  baselinePrice,
  appPrice,
  primaryColor = '#4570D9',
  accentColor = '#FF7A00',
  active = true,
}) => {
  const anim = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    if (show && active) {
      Animated.timing(anim, { toValue: 1, duration: 700, useNativeDriver: true }).start();
    } else {
      anim.stopAnimation?.(() => {});
      anim.setValue(0);
    }
  }, [show, active]);

  const opacity = anim.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
  const maxInner = Math.max(40, width - 140);

  if (mode === 'days' && typeof baselineDays === 'number' && typeof appDays === 'number') {
    const maxVal = Math.max(baselineDays, appDays, 1);
    const baselineTargetW = (baselineDays / maxVal) * maxInner;
    const appTargetW = (appDays / maxVal) * maxInner;
    const baselineTx = anim.interpolate({ inputRange: [0, 1], outputRange: [-baselineTargetW, 0] });
    const appTx = anim.interpolate({ inputRange: [0, 1], outputRange: [-appTargetW, 0] });
    return (
      <Animated.View style={[{ width, height: height + 18, opacity, paddingVertical: 6 },]} pointerEvents="none">
        {/* Row: Baseline (単語帳) */}
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 8 }}>
          <Text style={{ width: 72, fontSize: 13, fontWeight: '700', color: '#081026' }}>単語帳</Text>
          <View style={{ flex: 1, height: 12, backgroundColor: '#F1F4FB', borderRadius: 8, overflow: 'hidden' }}>
            <Animated.View style={{ width: baselineTargetW, height: 12, backgroundColor: primaryColor, transform: [{ translateX: baselineTx as any }] }} />
          </View>
          <Text style={{ width: 48, textAlign: 'right', fontSize: 13, fontWeight: '800', color: '#081026' }}>
            ~{Math.round(baselineDays)}日
          </Text>
        </View>
        {/* Row: App (アプリ) */}
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <Text style={{ width: 72, fontSize: 13, fontWeight: '700', color: '#081026' }}>アプリ</Text>
          <View style={{ flex: 1, height: 12, backgroundColor: '#F1F4FB', borderRadius: 8, overflow: 'hidden' }}>
            <Animated.View style={{ width: appTargetW, height: 12, backgroundColor: accentColor, transform: [{ translateX: appTx as any }] }} />
          </View>
          <Text style={{ width: 48, textAlign: 'right', fontSize: 13, fontWeight: '800', color: '#081026' }}>
            ~{Math.round(appDays)}日
          </Text>
        </View>
      </Animated.View>
    );
  }

  if (mode === 'price' && typeof baselinePrice === 'number' && typeof appPrice === 'number') {
    const maxVal = Math.max(baselinePrice, appPrice, 1);
    const baselineTargetW = (baselinePrice / maxVal) * maxInner;
    const appTargetW = (appPrice / maxVal) * maxInner;
    const baselineTx = anim.interpolate({ inputRange: [0, 1], outputRange: [-baselineTargetW, 0] });
    const appTx = anim.interpolate({ inputRange: [0, 1], outputRange: [-appTargetW, 0] });
    return (
      <Animated.View style={[{ width, height: height + 18, opacity, paddingVertical: 6 }]} pointerEvents="none">
        {/* Row: Baseline (単語帳) */}
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 8 }}>
          <Text style={{ width: 72, fontSize: 18, fontWeight: '700', color: '#ffffffff' }}>単語帳</Text>
          <View style={{ flex: 1, height: 12, backgroundColor: '#F1F4FB', borderRadius: 8, overflow: 'hidden' }}>
            <Animated.View style={{ width: baselineTargetW, height: 12, backgroundColor: primaryColor, transform: [{ translateX: baselineTx as any }] }} />
          </View>
          <Text style={{ width: 72, textAlign: 'right', fontSize: 13, fontWeight: '800', color: '#ffffffff' }}>
            ¥{Math.round(baselinePrice).toLocaleString()}
          </Text>
        </View>
        {/* Row: App (アプリ) */}
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <Text style={{ width: 72, fontSize: 18, fontWeight: '700', color: '#11ff00ff' }}>アプリ</Text>
          <View style={{ flex: 1, height: 12, backgroundColor: '#F1F4FB', borderRadius: 8, overflow: 'hidden' }}>
            <Animated.View style={{ width: appTargetW, height: 12, backgroundColor: accentColor, transform: [{ translateX: appTx as any }] }} />
          </View>
          <Text style={{ width: 72, textAlign: 'right', fontSize: 13, fontWeight: '800', color: '#ffffffff' }}>
            ¥{Math.round(appPrice).toLocaleString()}
          </Text>
        </View>
      </Animated.View>
    );
  }

  // Default: pct mode
  return (
    <Animated.View style={[{ width, height: height + 18, opacity, paddingVertical: 6 },]} pointerEvents="none">
      {/* Row: Purchased */}
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 8 }}>
        <Text style={{ width: 72, fontSize: 13, fontWeight: '700', color: '#081026' }}>有料</Text>
        <View style={{ flex: 1, height: 12, backgroundColor: '#F1F4FB', borderRadius: 8, overflow: 'hidden' }}>
          {(() => {
            const w = Math.max(0, Math.min(1, purchasedPct)) * maxInner;
            const tx = anim.interpolate({ inputRange: [0, 1], outputRange: [-w, 0] });
            return <Animated.View style={{ width: w, height: 12, backgroundColor: primaryColor, transform: [{ translateX: tx as any }] }} />;
          })()}
        </View>
        <Text style={{ width: 48, textAlign: 'right', fontSize: 13, fontWeight: '800', color: '#081026' }}>~{Math.round(purchasedPct * 100)}%</Text>
      </View>
      {/* Row: Free */}
      <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
        <Text style={{ width: 72, fontSize: 13, fontWeight: '700', color: '#081026' }}>無料</Text>
        <View style={{ flex: 1, height: 12, backgroundColor: '#F1F4FB', borderRadius: 8, overflow: 'hidden' }}>
          {(() => {
            const w = Math.max(0, Math.min(1, freePct)) * maxInner;
            const tx = anim.interpolate({ inputRange: [0, 1], outputRange: [-w, 0] });
            return <Animated.View style={{ width: w, height: 12, backgroundColor: accentColor, transform: [{ translateX: tx as any }] }} />;
          })()}
        </View>
        <Text style={{ width: 48, textAlign: 'right', fontSize: 13, fontWeight: '800', color: '#081026' }}>~{Math.round(freePct * 100)}%</Text>
      </View>
    </Animated.View>
  );
};

const revealStyles = StyleSheet.create({
  holdBarTrack: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  holdBarFill: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff',
    opacity: 0.55,
    width: '0%',
  },
  container: { position: 'relative', width: Dimensions.get('window').width, alignItems: 'center', justifyContent: 'center', paddingVertical: 12 },
  header: { width: '92%', alignItems: 'center', marginBottom: 10 },
  card: {
    width: '92%',
    overflow: 'hidden',
    borderRadius: 22,
    paddingVertical: 38,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#D7DBE8',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  cardInner: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
    paddingVertical: 38,
    paddingHorizontal: 24,
    alignItems: 'center',
    overflow: 'hidden',
  },
  headline: {
    color: '#081026',
    fontSize: 30,
    fontFamily: 'PoiretOne-Regular',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 1.6,
    textTransform: 'uppercase',
    opacity: 1,
    textShadowColor: 'rgba(0,0,0,0.08)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  title: {
    color: '#081026',
    fontSize: 24,
    marginBottom: 6,
    textAlign: 'center',
    fontWeight: '900',
    fontFamily: 'SpaceMono-Regular',
    opacity: 1,
    textShadowOffset: { width: 0, height: 1 },
  },
  subtitle: {
    color: '#24324A',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '900',
    letterSpacing: 0.6,
    textShadowColor: 'rgba(0,0,0,0.06)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  bottomTitle: {
    color: '#EAF1FF',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
    letterSpacing: 0.3,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  lockedTeaser: {
    color: '#081026',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 6,
    fontWeight: '300',
    letterSpacing: 0.8,
    textShadowColor: 'rgba(0,0,0,0.06)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 66,
    fontWeight: '900',
    fontFamily: 'SpaceMono-Regular',
    letterSpacing: 0.8,
    textShadowColor: 'rgba(3,10,25,0.5)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 10,
  },
  titleUnderline: {
    width: 84,
    height: 4,
    borderRadius: 999,
    marginTop: 6,
  },
  revealedHalo: { position: 'absolute', top: -10, bottom: -10, left: -10, right: -10, borderRadius: 15, overflow: 'hidden' },
  lockedBg: { ...StyleSheet.absoluteFillObject, borderRadius: 15, overflow: 'hidden' },
  lockedSheen: { position: 'absolute', top: -60, bottom: -60, left: '-30%', right: '-30%', transform: [{ rotate: '-20deg' }] },
  revealedBg: { ...StyleSheet.absoluteFillObject, borderRadius: 15, overflow: 'hidden' },
  revealedSheen: { position: 'absolute', top: 0, left: 0, right: 0, height: '50%', borderTopLeftRadius: 22, borderTopRightRadius: 22 },
  note: { color: '#c7ccd4', fontSize: 15, marginTop: 10, textAlign: 'center' },
  /* sleek small note */
  noteSmall: { color: '#8b95a6', fontSize: 12, marginTop: 8, textAlign: 'center', fontWeight: '600' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.45)' },
  helper: { position: 'absolute', bottom: 12, color: '#9aa1ac', fontSize: 13 },
  helperTop: { color: '#9aa1ac', fontSize: 13, marginTop: 4 },
  glow: { position: 'absolute', top: 0, left: 0, right: 0, height: 6, backgroundColor: 'rgba(255,255,255,0.22)' },
  shine: { position: 'absolute', top: 0, bottom: 0, width: 140 },
  halo: { position: 'absolute', top: -8, bottom: -8, left: -8, right: -8, borderRadius: 15, overflow: 'hidden' },
  badge: { position: 'absolute', top: 10, paddingVertical: Platform.select({ ios: 6, android: 4 }), paddingHorizontal: 10, borderRadius: 999, overflow: 'hidden', backgroundColor: 'transparent' },
  badgeTop: { marginTop: 4, paddingVertical: Platform.select({ ios: 6, android: 4 }), paddingHorizontal: 10, borderRadius: 999, overflow: 'hidden' },
  badgeBg: { ...StyleSheet.absoluteFillObject, borderRadius: 999, opacity: 0.9 },
  badgeText: { color: '#fff', fontSize: 13, fontWeight: '800' },
  lockBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 18,
    overflow: 'hidden',
  },
  lockBadgeText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '900',
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  lockBadgeBg: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
    opacity: 0.95,
  },
  openBtn: {
    marginTop: 16,
    width: '92%',
    borderRadius: 14,
    overflow: 'hidden',
    minHeight: 48,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    // elevated shadow
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  openBtnBg: { ...StyleSheet.absoluteFillObject, opacity: 1, borderRadius: 14 },
  openBtnText: { color: '#fff', fontWeight: '900', fontSize: 16, letterSpacing: 0.3 },
  helperLarge: { fontSize: 15, fontWeight: '800', color: '#E6ECF7' },
  bigSpinner: {
    position: 'absolute',
    width: 180,
    height: 180,
    top: '50%',
    left: '50%',
    marginLeft: -90,
    marginTop: -100,
    borderRadius: 180,
    opacity: 0.9,
  },
  bigSpinnerRing: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 180,
    borderWidth: 6,
    borderColor: 'rgba(255,255,255,0.12)',
    borderTopColor: 'rgba(45,107,255,0.85)',
    borderRightColor: 'rgba(0,194,255,0.75)',
    borderBottomColor: 'rgba(255,255,255,0.12)',
    borderLeftColor: 'rgba(255,255,255,0.12)'
  },
  lockedSpotlight: {
    position: 'absolute',
    left: '50%',
    top: '46%',
    width: 260,
    height: 260,
    marginLeft: -130,
    marginTop: -130,
    borderRadius: 130,
    backgroundColor: 'rgba(255,255,255,0.06)',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 10 },
  },
  lockedGlass: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 22,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.08)'
  },
  lockedBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 22,
    opacity: 0.25,
  },
  lockedCornerTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 140,
    height: 140,
    borderTopLeftRadius: 22,
    overflow: 'hidden',
  },
  lockedCornerBottom: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 140,
    height: 140,
    borderBottomRightRadius: 22,
    overflow: 'hidden',
  },
  lockCenter: {
    position: 'absolute',
    top: '50%',
    left: 16,
    right: 16,
    marginLeft: 0,
    marginTop: -40,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockCenterText: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  lockCenterAnalyzingText: {
    color: '#666',
  },
  lockIconText: {
    fontSize: 64,
    lineHeight: 66,
  },
  analyzingWrap: { position: 'absolute', top: '50%', left: '50%', marginLeft: -44, marginTop: -52, alignItems: 'center', justifyContent: 'center' },
  analyzingText: { marginTop: 10, color: '#EAF1FF', fontSize: 12, fontWeight: '800', letterSpacing: 0.4 },
  purchaseCardWrap: {
    position: 'absolute',
    top: 10,
    left: 12,
    right: 12,
    alignItems: 'center',
    zIndex: 30,
  },
  purchaseCard: {
    minWidth: 220,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  purchaseCardBg: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 14,
    opacity: 1,
  },
  purchaseCardTitle: {
    color: '#EAF1FF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.6,
  },
  purchaseCardCta: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 2,
    opacity: 0.95,
  },
});

// ====== カルーセル本体 ======
const { width, } = Dimensions.get('window');

type UpsellProps = {
  pace?: Pace;
  priceMonthly: number; // 例: 980
  onUpgradePress: () => void;
  allowTapReveal?: boolean;
  onCardRevealed?: (index: number) => void; // 分析用
  level?: string; // 対応する級
  onFinalCardTap?: (which: 'main' | 'all', level: string) => void; // ← 追加: どちらの最終カードが押されたか
};


export const UpsellRevealCarousel: React.FC<UpsellProps> = ({
  pace,
  onUpgradePress,
  allowTapReveal = false,
  onCardRevealed,
  level,
  priceMonthly,
  onFinalCardTap,
}) => {
  // Swipe lock state: require reveal before advancing
  const listRef = useRef<ScrollView | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealedFlags, setRevealedFlags] = useState<boolean[]>([false, false, false, false]);
  const [showIndicatorMain, setShowIndicatorMain] = useState(true);
  const [showIndicatorAll, setShowIndicatorAll] = useState(true);
  const pressHandlersRef = useRef<
    Array<{
      onPressIn: () => void;
      onPressOut: () => void;
      onPress: () => void;
      attachExternalProgress?: (v: Animated.Value) => void;
      forceReveal?: () => void;
    }>
  >([]);
  const [ctaHeight, setCtaHeight] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState<string | undefined>(undefined);
  const [levelsLoaded, setLevelsLoaded] = useState(false);

const { level: levelFromQuestion } = useQuestionData();
  const effectiveLevel = (levelFromQuestion ?? selectedLevel ?? level ?? 'All Level');

  // Top purchase card (CardDesign) tilt & press animation
  const previewTilt = useRef(new Animated.Value(1)).current; // 1=tilted, 0=facing front
  const previewPressedScale = useRef(new Animated.Value(1)).current;
  const previewTiltedRef = useRef(true);
  const [previewHeight, setPreviewHeight] = useState(0);
  // Drop-in animation for the preview card when reaching the final page
  const previewDrop = useRef(new Animated.Value(0)).current; // 0 = top, 1 = center
  // Final page nudge text opacity
  const finalTextOpacity = useRef(new Animated.Value(0)).current;
  // Final page: All Level card appears later (fade + slide-up)
  const [showAllLevel, setShowAllLevel] = useState(false);
  const allLevelOpacity = useRef(new Animated.Value(0)).current;
  const allLevelTranslateY = useRef(new Animated.Value(20)).current; // start slightly below
  // TapIndicator visibility for the top purchase card
  const [showIndicator2, setShowIndicator2] = useState(false);
  const indicatorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Animation ref for hold-to-reveal (for consistency)
  const holdAnimRef = useRef<Animated.CompositeAnimation | null>(null);

  // Show a looping tap hint while the preview card is tilted
  const [showTiltHint, setShowTiltHint] = useState(true);
  const showTiltHintRef = useRef<boolean>(true);
  React.useEffect(() => {
    const THRESH = 0.02; // tilt threshold
    const id = previewTilt.addListener(({ value }) => {
      const next = (Number(value) || 0) > THRESH;
      if (showTiltHintRef.current !== next) {
        showTiltHintRef.current = next;
        setShowTiltHint(next);
      }
    });
    return () => previewTilt.removeListener(id);
  }, [previewTilt]);

  const previewRotateX = previewTilt.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '40deg'] });
  const previewRotateZ = previewTilt.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '-14deg'] });
  const previewTranslateY = previewTilt.interpolate({ inputRange: [0, 1], outputRange: [0, -16] });
  // Dim opacity while tilted (1 -> 0.6)
  const previewDimOpacity = previewTilt.interpolate({ inputRange: [0, 1], outputRange: [1, 0.6] });

  const onPreviewPressIn = () => {
    if (previewTiltedRef.current) {
      previewTiltedRef.current = false;
      Animated.timing(previewTilt, { toValue: 0, duration: 600, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start();
    }
    // show tap indicator briefly
    setShowIndicator2(true);
    if (indicatorTimeoutRef.current) clearTimeout(indicatorTimeoutRef.current);
    indicatorTimeoutRef.current = setTimeout(() => setShowIndicator2(false), 1600);

    Animated.spring(previewPressedScale, { toValue: 0.98, useNativeDriver: true, speed: 18, bounciness: 6 }).start();
  };
  const onPreviewPressOut = () => {
    if (indicatorTimeoutRef.current) clearTimeout(indicatorTimeoutRef.current);
    indicatorTimeoutRef.current = setTimeout(() => setShowIndicator2(false), 200);
    Animated.spring(previewPressedScale, { toValue: 1, useNativeDriver: true }).start();
  };

  // --- Loading overlay (final page card tap) ---
  const [loadingOverlay, setLoadingOverlay] = useState(false);
  const loadingOpacity = useRef(new Animated.Value(0)).current;
  // Track timeout for loading overlay
  const loadingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showLoadingOverlay = (ms: number = 1200) => {
    setLoadingOverlay(true);
    loadingOpacity.setValue(0);
    Animated.timing(loadingOpacity, { toValue: 1, duration: 180, useNativeDriver: true }).start(() => {
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = setTimeout(() => {
        Animated.timing(loadingOpacity, { toValue: 0, duration: 180, useNativeDriver: true }).start(() => {
          setLoadingOverlay(false);
        });
      }, ms);
    });
  };
  // --- Final page: per-card tap handlers ---
  // Cleanup indicator timeout on unmount
  React.useEffect(() => {
    return () => {
      if (indicatorTimeoutRef.current) clearTimeout(indicatorTimeoutRef.current);
    };
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem('@selected_levels');
        let lv: string | undefined;
        if (raw) {
          try {
            const parsed = JSON.parse(raw);
            lv = typeof parsed === 'string' ? parsed : (parsed?.level as string | undefined);
          } catch {
            lv = raw;
          }
        }
        // if nothing found, fallback to All Level
        setSelectedLevel((typeof lv === 'string' && lv.trim().length > 0) ? lv.trim() : 'All Level');
      } catch (e) {
        console.warn('[UpsellRevealCarousel] Failed to load @selected_levels:', e);
        setSelectedLevel('All Level');
      } finally {
        setLevelsLoaded(true);
      }
    })();
  }, []);
  const btnHoldProgress = useRef(new Animated.Value(0)).current; // 0..1 for footer button
  const btnHoldAnimRef = useRef<Animated.CompositeAnimation | null>(null);
  const holdMsFooter = 1200; // match RevealCard default

  // --- Footer haptics tracking ---
  const footerHapticsLastRef = useRef(0); // legacy progress milestone
  const footerHapticsLastTickTs = useRef(0); // ms timestamp
  const footerProgressListenerRef = useRef<string | null>(null);
  const clearFooterHapticsListener = () => {
    if (footerProgressListenerRef.current) {
      btnHoldProgress.removeListener(footerProgressListenerRef.current as string);
      footerProgressListenerRef.current = null;
    }
    footerHapticsLastRef.current = 0;
    footerHapticsLastTickTs.current = 0;
  };

  // circular ring gauge around footer button
  const ringSize = 136; // larger than the 112px button
  const ringStroke = 6;
  const r = (ringSize - ringStroke) / 2;



  // swipe hint (shown after reveal)
  const swipeHintOpacity = useRef(new Animated.Value(0)).current;

  // --- Footer button: subtle long-press animation (scale + glow) ---
  const footerHoldPulse = useRef(new Animated.Value(0)).current; // 0..1
  const footerPulseLoopRef = useRef<Animated.CompositeAnimation | null>(null);

  const snapToIndex = (index: number) => {
    listRef.current?.scrollTo({ x: width * index, y: 0, animated: true });
  };

  const handleMomentumEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const x = e.nativeEvent.contentOffset.x;
    const target = Math.round(x / width);

    // Block going backward: once advanced, you cannot return
    if (target < currentIndex) {
      snapToIndex(currentIndex);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      return;
    }

    // Block going forward if current card not revealed yet
    if (target > currentIndex && !revealedFlags[currentIndex]) {
      snapToIndex(currentIndex);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      return;
    }

    setCurrentIndex(target);
  };

  const safePace = useMemo(() => {
    const np = normalizePace(pace);
    if (!pace) {
      console.warn("[UpsellRevealCarousel] 'pace' was undefined. Falling back to defaults:", np);
    }
    return np;
  }, [pace]);

  // --- Days saved vs. paper wordbook (FSRS efficiency considered by `mult`) ---
  const levelWordCountMap = useMemo<Record<string, number>>(
    () => {
      // Support both dot and underscore notations
      const countsDot: Record<string, number> = {
        '3': 1000,
        '2.5': 1220,
        '2': 2300,
        '1.5': 3400,
        '1': 4280,
      };
      const countsUnderscore: Record<string, number> = {
        '3': countsDot['3'],
        '2_5': countsDot['2.5'],
        '2': countsDot['2'],
        '1_5': countsDot['1.5'],
        '1': countsDot['1'],
      };
      const total = Object.values(countsDot).reduce((a, b) => a + b, 0);
      return { ...countsDot, ...countsUnderscore, 'All Level': total };
    },
    []
  );
  const mult = useMemo(() => estimateMultiplier(safePace), [safePace]);
  // Define level keys before they are used
  const levelKey = String(effectiveLevel);
  const normKey1 = levelKey.replace('.', '_');
  const normKey2 = levelKey.replace('_', '.');

  
  // 級ごとの単語数を係数化して、節約時間に反映（重い級ほど時間節約が大きく出る）
  const levelWordsForFactor = ((): number => {
    // 元のマップを再利用しつつ、"All Level" の合計は係数計算には使わない
    const direct = levelWordCountMap[levelKey];
    const n1 = levelWordCountMap[normKey1];
    const n2 = levelWordCountMap[normKey2];
    const picked = typeof direct === 'number' ? direct : (typeof n1 === 'number' ? n1 : (typeof n2 === 'number' ? n2 : 2000));
    // "All Level" は中立係数扱いにしたいので平均近辺に丸める
    if (levelKey === 'All Level') return 2440; // 平均に合わせる
    return picked;
  })();

  // 英検級ごとの平均語彙量（3, 2.5, 2, 1.5, 1 の平均）
  const AVG_LEVEL_WORDS = 2440; // (1000 + 1220 + 2300 + 3400 + 4280) / 5
  const levelFactor = useMemo(() => {
    const raw = levelWordsForFactor / AVG_LEVEL_WORDS;
    // 過度に振れないようクランプ（±約1.5倍まで）
    return Math.max(0.8, Math.min(1.5, raw));
  }, [levelWordsForFactor]);

  const save = useMemo(() => estimateTimeSaveHours(safePace) * levelFactor, [safePace, levelFactor]);
  const annualHours = useMemo(() => Math.round(save * 12), [save]);

  const totalWords =
    levelWordCountMap[levelKey] ??
    levelWordCountMap[normKey1] ??
    levelWordCountMap[normKey2] ??
    levelWordCountMap['All Level'] ??
    2000;
  const appDaily = Math.max(1, Number(safePace.dailySolved) || 20); // words/day in this app (no ads)
  // Interpret `mult` as speed-up vs paper wordbook: baseline effective daily = appDaily / mult
  const baselineDays = (totalWords * mult) / appDaily;
  const appDays = totalWords / appDaily;
  const daysSaved = Math.max(0, baselineDays - appDays);

  // --- Price difference vs. wordbook (monthly & yearly) ---
  const levelPriceMap: Record<string, string> = {
    '1': '¥1,980',   // 英検1級 でる順パス単 5訂版（税込）
    '1.5': '¥1,815', // 英検準1級 でる順パス単 5訂版（税込）
    '1_5': '¥1,815',
    '2': '¥1,485',   // 英検2級 でる順パス単 5訂版（税込）
    '2.5': '¥1,375', // 英検準2級 でる順パス単 5訂版（税込）
    '2_5': '¥1,375',
    '3': '¥1,265',   // 英検3級 でる順パス単 5訂版（税込）
    'All Level': '¥0',
  };
  const appPriceMap: Record<string, string> = {
    '1': '¥1,100',
    '1.5': '¥900',
    '1_5': '¥900',
    '2': '¥700',
    '2.5': '¥500',
    '2_5': '¥500',
    '3': '¥300',
  };
  const appPriceStr =
    appPriceMap[levelKey] ??
    appPriceMap[normKey1] ??
    appPriceMap[normKey2] ??
    '¥0';
  const parseYen = (s?: string) => {
    if (!s) return 0;
    const n = Number(String(s).replace(/[^0-9]/g, ''));
    return isNaN(n) ? 0 : n;
  };
  const levelPriceStr =
    levelPriceMap[levelKey] ??
    levelPriceMap[normKey1] ??
    levelPriceMap[normKey2] ??
    levelPriceMap['All Level'];
  const wordbookPriceMonthly = parseYen(levelPriceStr);
  const appPriceMonthly = parseYen(appPriceStr); // 自社アプリの級別価格を使用
  const wordbookPriceLabel = `単語帳の相場: ¥${wordbookPriceMonthly.toLocaleString()}`;

  // 1日あたりのコストでの訴求（価格 ÷ 削減日数）
  const pricePerDayYen = daysSaved > 0 ? Math.round(appPriceMonthly / daysSaved) : 0;
  const pricePerDayLabel = `1日あたり¥${pricePerDayYen.toLocaleString()}で${Math.round(daysSaved)}日削減`;

  // 最後の一押しコピー（ダイナミック）

  const PAGES_HEADLINE = "↑を購入すると...？";
const pages = React.useMemo<Array<{ key: string; render: () => JSX.Element }>>(
  () => [
    {
      key: 'continuation',
      render: () => (
        <RevealCard
          active={currentIndex === 0}
          headline={PAGES_HEADLINE}
          lockedTitle="開封して年間の節約時間をチェック"
          revealedTitle={`${appPriceStr}で、あなたの${annualHours}時間を買いましょう！`}
          value={annualHours}
          format={(v) => `${Math.round(v)}時間/年`}
          suffixSmall="/年"
          suffixScale={0.4}
          // chartMode を渡さない → グラフは非表示
          allowTapReveal={allowTapReveal}
          onRevealed={() => {
            setRevealedFlags((p) => { const n = [...p]; n[0] = true; return n; });
            onCardRevealed?.(0);
          }}
          bindPressHandlers={(h) => { pressHandlersRef.current[0] = h; }}
          level={effectiveLevel}
          theme={{
            gradientColors: ['#2D6BFF', '#00C2FF'] as const,
            bottomTitleFontSize: 20,
            chartPrimaryColor: '#2D6BFF',
            chartAccentColor: '#00C2FF',
          }}
        />
      ),
    },
    {
      key: 'multiplier',
      render: () => (
        <>
          <RevealCard
            active={currentIndex === 1}
            headline={PAGES_HEADLINE}
            // Remove headline so it doesn't double the caption
            lockedTitle="開封して節約日数をチェック"
            revealedTitle={`${pricePerDayLabel}！`}
            value={daysSaved}
            format={(v) => `${Math.round(v)}日早く完了`}
            allowTapReveal={allowTapReveal}
            onRevealed={() => {
              setRevealedFlags((p) => { const n = [...p]; n[1] = true; return n; });
              onCardRevealed?.(1);
            }}
            bindPressHandlers={(h) => { pressHandlersRef.current[1] = h; }}
            level={effectiveLevel}
            theme={{
              // Neon-cool gradient (teal → violet → pink)
              gradientColors: ['#0EA5E9', '#7C3AED', '#EC4899'] as const,
              // Stronger headline number & readable caption
              valueColor: '#FFFFFF',
              valueFontSize: 72,
              bottomTitleColor: '#EAF1FF',
              bottomTitleFontSize: 24,
              // If a chart is shown here in the future, keep colors consistent
              chartPrimaryColor: '#0EA5E9',
              chartAccentColor: '#7C3AED',
            }}
          />
        </>
      ),
    },
    {
      key: 'timesave',
      render: () => (
        <RevealCard
          active={currentIndex === 2}
          headline={PAGES_HEADLINE}
          lockedTitle="開封してアプリの価格をチェック"
          revealedTitle={``}
          value={appPriceMonthly}
          format={(v) => `アプリ価格 ${appPriceStr}`}
          allowTapReveal={allowTapReveal}
          onRevealed={() => {
            setRevealedFlags((p) => { const n = [...p]; n[2] = true; return n; });
            onCardRevealed?.(2);
          }}
          bindPressHandlers={(h) => { pressHandlersRef.current[2] = h; }}
          level={effectiveLevel}
          note={wordbookPriceLabel}
          chartMode="price"
          baselinePrice={wordbookPriceMonthly}
          appPrice={appPriceMonthly}
          theme={{
            gradientColors: ['#2563EB', '#8744fcff'] as const,
            bottomTitleFontSize: 22,
            chartPrimaryColor: '#1a943cff',
            chartAccentColor: '#25eb85ff',
          }}
        />
      ),
    },
    {
      key: 'final',
      render: () => (
        <View style={{ height: 0 }} />
      ),
    },
  ],
  [
    effectiveLevel,
    appPriceStr,
    annualHours,
    daysSaved,
    appPriceMonthly,
    wordbookPriceMonthly,
    allowTapReveal,
    onCardRevealed,
    currentIndex,
  ]
);
// (duplicate LockableLottie removed – defined at top of file)

  // Gate rendering: only render up to the first unrevealed page (inclusive)
  const firstUnreveal = revealedFlags.findIndex((f) => !f);
  const renderCount = firstUnreveal === -1 ? pages.length : firstUnreveal + 1;
  const gatedPages = pages.slice(0, renderCount);

  const currentPageKey = gatedPages[currentIndex]?.key;
  const isFinalPage = currentPageKey === 'final';

  React.useEffect(() => {
    if (isFinalPage) {
      setShowIndicatorMain(true);
      setShowIndicatorAll(true);
      // stop tilt and bring card to front-facing first
      if (previewTiltedRef.current) {
        previewTiltedRef.current = false;
        Animated.timing(previewTilt, {
          toValue: 0,
          duration: 600,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }).start();
      }
      // reset final overlays
      finalTextOpacity.setValue(0);
      setShowAllLevel(false);
      allLevelOpacity.setValue(0);
      allLevelTranslateY.setValue(20);

      Animated.timing(previewDrop, {
        toValue: 1,
        duration: 1200,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start(() => {
        // 1) fade-in the final nudge text
        Animated.timing(finalTextOpacity, {
          toValue: 1,
          duration: 650,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }).start();
        // 2) then reveal All Level card with fade + slide-up
        setShowAllLevel(true);
        Animated.parallel([
          Animated.timing(allLevelOpacity, {
            toValue: 1,
            duration: 550,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
          Animated.timing(allLevelTranslateY, {
            toValue: 0,
            duration: 550,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
          }),
        ]).start();
      });
    } else {
      setShowIndicatorMain(false);
      setShowIndicatorAll(false);
      Animated.timing(previewDrop, {
        toValue: 0,
        duration: 500,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }).start();
      // hide overlays quickly when leaving final page
      Animated.timing(finalTextOpacity, {
        toValue: 0,
        duration: 180,
        useNativeDriver: true,
      }).start();
      setShowAllLevel(false);
      allLevelOpacity.setValue(0);
      allLevelTranslateY.setValue(20);
      // Clear loading overlay timeout if pending (avoid running after navigation)
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
        loadingTimeoutRef.current = null;
      }
    }
  }, [isFinalPage]);
const [gaugeWidth, setGaugeWidth] = useState(0);
  // Always show swipe hint whenever the footer button is hidden (card revealed)
  // --- Edge gradient opacity for right edge hint ---
  const edgeGradOpacity = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    const revealed = revealedFlags[currentIndex];
    const to = revealed ? 1 : 0;
    Animated.parallel([
      Animated.timing(swipeHintOpacity, { toValue: to, duration: 280, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
      Animated.timing(edgeGradOpacity,  { toValue: to, duration: 280, easing: Easing.out(Easing.cubic), useNativeDriver: true }),
    ]).start();
  }, [revealedFlags, currentIndex]);

  // Reset footer hold gauge whenever the footer button is (re)shown or page changes
  React.useEffect(() => {
   btnHoldAnimRef.current?.stop?.();
    clearFooterHapticsListener();
    // フッター表示時のみ値を0に
    if (!revealedFlags[currentIndex]) {
      btnHoldProgress.setValue(0);
    }
    return () => {
      // アンマウント/ページ切替のどちらでも確実に止める
      btnHoldAnimRef.current?.stop?.();
      clearFooterHapticsListener();
    };
  }, [currentIndex, revealedFlags[currentIndex]]);

  // One-time mount reset so the gauge always starts at 0 when the carousel first renders
  React.useEffect(() => {
    btnHoldProgress.setValue(0);
  }, []);
  return (
    <View style={styles.wrap as ViewStyle}>
      {/* Loading overlay when a final card is tapped */}
      {loadingOverlay && (
        <Animated.View
          pointerEvents="auto"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(0,0,0,0.35)',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              opacity: loadingOpacity,
            },
          ]}
        >
          <View style={{ backgroundColor: 'rgba(255,255,255,0.95)', paddingVertical: 18, paddingHorizontal: 20, borderRadius: 14, alignItems: 'center', minWidth: 180 }}>
            <ActivityIndicator size="large" />
            <Text style={{ marginTop: 10, fontWeight: '800', color: '#081026' }}>処理中...</Text>
          </View>
        </Animated.View>
      )}
      {/* Top: CardDesign preview (render AFTER level loaded) */}
      {levelsLoaded && (() => {
        const dropTarget = Math.max(0, (Dimensions.get('window').height * 0.5) - (previewHeight * 0.5) - 40);
        const dropY = previewDrop.interpolate({ inputRange: [0, 1], outputRange: [0, dropTarget] });
        const previewZoom = previewDrop.interpolate({ inputRange: [0, 1], outputRange: [1, 1.06] });
        return (
          <Animated.View
            style={[styles.cardPreviewWrap, { zIndex: 10, transform: [{ translateY: dropY }] }]}
            onLayout={(e) => setPreviewHeight(e.nativeEvent.layout.height)}
            pointerEvents="box-none"
          >
            {isFinalPage ? (
              <Animated.View
                style={[
                  styles.cardPreviewScaler,
                  {
                    opacity: 1,
                    transform: [
                      { perspective: 800 },
                      { rotateX: previewRotateX },
                      { rotateZ: previewRotateZ },
                      { translateY: previewTranslateY },
                      { scale: previewZoom },
                      { scale: previewPressedScale },
                    ],
                  },
                ]}
                pointerEvents="auto"
              >
                <View style={{ padding: 24, alignItems: 'center' }}>
                  {/* final page: give touches only to children */}
                  <Pressable
                    hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                    style={{ borderRadius: 24, overflow: 'hidden', position: 'relative' }}
                    pointerEvents="auto"
                    collapsable={false}
                    onStartShouldSetResponder={() => true}
                    onPressIn={() => {
                      console.log('上段カード (effectiveLevel) がタップされました');
                      setShowIndicatorMain(false);
                    }}
                  >
                    <View pointerEvents="none">
                      <CardDesign level={effectiveLevel} />
                    </View>
                    {/* ★ 追加: タップインジケーター */}
                    {showIndicatorMain && (
                      <TapIndicator
                        size={250}
                        color="#fff"
                        strokeWidth={20}
                        duration={2000}
                        style={styles.indicatorOverlayFlat}
                      />
                    )}
                  
                  </Pressable>
                  {showAllLevel && (
                    <Animated.View
                      style={{
                        opacity: allLevelOpacity,
                        transform: [{ translateY: allLevelTranslateY }],
                        marginTop: 36,
                      }}
                    >
                      <Pressable
                        hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
                        style={{ borderRadius: 24, overflow: 'hidden', position: 'relative' }}
                        pointerEvents="auto"
                        collapsable={false}
                        onStartShouldSetResponder={() => true}
                        onPressIn={() => {
                          console.log('下部 (All Level) がタップされました');
                          setShowIndicatorMain(false);
                        }}
                         onPressOut={onPreviewPressOut}
                      >
                        <View pointerEvents="none">
                          <CardDesign level="All Level" />
                        </View>
                        {/* ★ 追加: タップインジケーター（All Level 側にも） */}
                        {showIndicator2 && (
                          <TapIndicator
                            size={250}
                            color="#fff"
                            strokeWidth={20}
                            duration={2000}
                            style={styles.indicatorOverlayFlat}
                          />
                        )}
                      </Pressable>
                    </Animated.View>
                  )}
                </View>
                {/* Keep indicators */}
              </Animated.View>
            ) : (
              <Pressable
                  onPressIn={() => {
                    console.log('上段カード (effectiveLevel) がタップされました');
                    setShowIndicatorMain(false);
                  }}
                 onPressOut={onPreviewPressOut}
                onPress={() => {
                  if (previewTiltedRef.current) {
                    previewTiltedRef.current = false;
                    Animated.timing(previewTilt, { toValue: 0, duration: 600, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start();
                  }
                }}
                style={{ borderRadius: 24 }}
                hitSlop={8}
                pointerEvents="auto"
              >
                <Animated.View
                  style={[
                    styles.cardPreviewScaler,
                    {
                      opacity: 1,
                      transform: [
                        { perspective: 800 },
                        { rotateX: previewRotateX },
                        { rotateZ: previewRotateZ },
                        { translateY: previewTranslateY },
                        { scale: previewZoom },
                        { scale: previewPressedScale },
                      ],
                    },
                  ]}
                  pointerEvents="none"
                >
                  <View style={{ padding: 24, alignItems: 'center' }}>
                    <CardDesign level={effectiveLevel} />
                  </View>
                </Animated.View>
              </Pressable>
            )}
          </Animated.View>
        );
      })()}

  {/* Right-edge gradient when swipe-Lottie is shown (card revealed) */}
  {revealedFlags[currentIndex] && (
    <Animated.View pointerEvents="none" style={[styles.edgeHintWrap, { opacity: edgeGradOpacity }]}>
      <LinearGradient
        colors={[ 'transparent', 'rgba(45,107,255,0.18)' ]}
        start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
        style={styles.edgeHintGrad}
      />
    </Animated.View>
  )}
  {/* The following React.useEffect should not be inside JSX. Move it out. */}
      {/* Global long-press layer: anywhere except footer triggers the current card */}
      {!revealedFlags[currentIndex] && !isFinalPage && (
        <Pressable
          onPressIn={() => pressHandlersRef.current[currentIndex]?.onPressIn?.()}
          onPressOut={() => pressHandlersRef.current[currentIndex]?.onPressOut?.()}
          style={[styles.fullscreenPress, { bottom: ctaHeight, top: previewHeight }]}
        />
      )}
      <ScrollView
        ref={listRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumEnd}

        style={{ flex: 1, marginTop: 0  }}
      >
        {gatedPages.map((page, index) => (
          <View key={page.key} style={{ width, alignItems: 'center' }}>
            {page.render()}
          </View>
        ))}
      </ScrollView>

      {isFinalPage && (
        <View style={styles.bottomOpenWrap}>
          <Pressable
            onPress={async () => {
              try {
                const today = new Date().toISOString().split('T')[0];
                const { key: MAX_DAILY_LIMIT_KEY_LEVEL, raw: prevRaw } = await readDailyLimitAnyKey(String(effectiveLevel));


                // Parse legacy formats: {date,value} JSON or plain number
                let prevValue: number | null = null;
                let prevDate: string | null = null;
                if (prevRaw) {
                  try {
                    const parsed = JSON.parse(prevRaw);
                    if (parsed && typeof parsed === 'object') {
                      prevDate = parsed.date;
                      if (parsed.date === today && typeof parsed.value === 'number') {
                        prevValue = parsed.value;
                      }
                    }
                  } catch {
                    const asNum = parseInt(String(prevRaw), 10);
                    if (!Number.isNaN(asNum)) prevValue = asNum;
                  }
                }

                // Raise max: increment depends on base value
                const base = (prevValue ?? 10);
                let increment = 1;
                if (base >= 20) {
                  increment = 5;
                } else if (base >= 10) {
                  increment = 6;
                }
                const nextValue = base + increment;
                const payload = { date: today, value: nextValue };
                await AsyncStorage.setItem(MAX_DAILY_LIMIT_KEY_LEVEL, JSON.stringify(payload));
              } catch (err) {
                console.error('❌ エラー in MAX上限 引き上げ処理:', err);
              } finally {
                // Ensure navigation even if storage fails
                router.replace('/question');
              }
            }}
            accessibilityRole="button"
            style={{ alignSelf: 'stretch', marginHorizontal: 20, marginTop: 0 }}
            hitSlop={8}
          >
            <NeomorphBox
              width={Dimensions.get('window').width - 40}
              height={60}
            >
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 16, fontWeight: '900', letterSpacing: 0.4, color: '#666' }}>閉じる</Text>
              </View>
            </NeomorphBox>
          </Pressable>
        </View>
      )}

    {/* Global bottom open button */}
    {!revealedFlags[currentIndex] && !isFinalPage && (
      <View style={styles.bottomOpenWrap} onLayout={(e) => setCtaHeight(e.nativeEvent.layout.height)}>
        <Pressable
          onPressIn={() => {
            // delegate to card
            pressHandlersRef.current[currentIndex]?.onPressIn?.();

            // start footer pulse
            footerHoldPulse.setValue(0);
            footerPulseLoopRef.current?.stop?.();
            footerPulseLoopRef.current = Animated.loop(
              Animated.sequence([
                Animated.timing(footerHoldPulse, { toValue: 1, duration: 420, useNativeDriver: true }),
                Animated.timing(footerHoldPulse, { toValue: 0, duration: 420, useNativeDriver: true }),
              ])
            );
            footerPulseLoopRef.current.start();

            // immediate haptic on footer press
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

            // time-based cadence: weak ticks that accelerate with progress
            clearFooterHapticsListener();
            footerProgressListenerRef.current = btnHoldProgress.addListener(({ value }) => {
              const t = Math.max(0, Math.min(1, Number(value) || 0));
              const now = Date.now();
              // Much stronger deceleration: ~14Hz → ~0.8Hz using quartic ease-out
              const maxHz = 6;
              const minHz = 0.5;
              const hz = minHz + (maxHz - minHz) * Math.pow(1 - t, 4);
              const interval = 1000 / hz;
              if (now - footerHapticsLastTickTs.current >= interval - 2) {
                footerHapticsLastTickTs.current = now;
                if (t < 0.35 && Math.random() < 0.2) {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                } else {
                  Haptics.selectionAsync();
                }
              }
            });

            // start footer hold gauge progress
            btnHoldAnimRef.current?.stop?.();
            btnHoldProgress.setValue(0);
            btnHoldAnimRef.current = Animated.timing(btnHoldProgress, {
              toValue: 1,
              duration: holdMsFooter,
              useNativeDriver: true,
              easing: easeMonotoneSlow,
            });
            // Link footer gauge progress to current card to keep timing exactly in sync
            pressHandlersRef.current[currentIndex]?.attachExternalProgress?.(btnHoldProgress);
            btnHoldAnimRef.current.start();
          }}
          onPressOut={() => {
            // delegate to card
            pressHandlersRef.current[currentIndex]?.onPressOut?.();

            // stop footer pulse
            footerPulseLoopRef.current?.stop?.();
            footerHoldPulse.setValue(0);

            // reset footer hold gauge
            btnHoldAnimRef.current?.stop?.();
            btnHoldProgress.setValue(0);

            clearFooterHapticsListener();
          }}
          onPress={() => pressHandlersRef.current[currentIndex]?.onPress?.()}
          accessibilityRole="button"
          hitSlop={8}
          style={{ alignSelf: 'stretch', marginHorizontal: 20 }}
        >
          <NeomorphBox
            width={Dimensions.get('window').width - 40}
            height={65}
          >
              {/* label */}
              <Text style={[styles.neoFooterText, { color: '#666' }]}>長押しで確認</Text>
              {/* gauge under label */}
              <View style={styles.neoGaugeTrack} onLayout={(e) => setGaugeWidth(e.nativeEvent.layout.width)}>
                <Animated.View
                  style={[
                    styles.neoGaugeFill,
                    {
                      width: gaugeWidth || 1,
                      transform: [{
                        translateX: btnHoldProgress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-(gaugeWidth || 0), 0],
                        }) as any,
                      }],
                    },
                  ]}
                >
                  <LinearGradient
                    colors={['#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={StyleSheet.absoluteFill}
                  />
                </Animated.View>
              </View>
          </NeomorphBox>
        </Pressable>
      </View>
    )}

      {/* Swipe hint when revealed: encourage swipe to proceed */}
        {revealedFlags[currentIndex] && !isFinalPage && (
          <Animated.View pointerEvents="none" style={[styles.swipeHint, { left: 0, right: 0, bottom: 60, alignItems: 'center', justifyContent: 'center' }]}>
            <Animated.View style={{ opacity: swipeHintOpacity }}>
              <View style={styles.swipeHintBubble}>
                <LockableLottie
                  active={revealedFlags[currentIndex] && !isFinalPage}
                  source={require('../../assets/lottie/scroll.json')}
                  style={[styles.swipeLottie, { transform: [{ rotate: '90deg' }] }]}
                  autoPlay
                  loop
                />
              </View>
            </Animated.View>
          </Animated.View>
        )}
  </View>
  );
};

const styles = StyleSheet.create({
  neoCard: {
    borderRadius: 22,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    // iOS shadow for neumorphism look
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    // Android elevation
    elevation: 12,
  },
  wrap: { position: 'relative', width: Dimensions.get('window').width, height: Dimensions.get('window').height, backgroundColor: '#E3E5F2', paddingTop: 0 },
  holdLabelWrap: { 
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 28, 
    alignItems: 'center',
    zIndex: 21,
  },
holdLabel: {
  color: '#DDE6FF',
  fontSize: 12,
  fontWeight: '800',
  textShadowColor: 'rgba(0,0,0,0.35)',
  textShadowOffset: { width: 0, height: 1 },
  textShadowRadius: 2,
},
  ctaTitle: { color: '#E8EBF1', fontSize: 18, fontWeight: '800' },
  ctaText: { color: '#B6BCC7', fontSize: 13, marginTop: 4 },
  benefitsRow: { flexDirection: 'row', marginTop: 6, flexWrap: 'wrap' },
  benefit: { color: '#97A0AE', fontSize: 13, marginRight: 12, marginTop: 2 },
  ctaBtnText: { color: '#fff', fontWeight: '800', fontSize: 15 },
  // Added missing style keys referenced in JSX
  cardPreviewWrap: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  cardPreviewScaler: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Bottom area wrapper for CTA / final controls
  bottomOpenWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    alignItems: 'center',
    zIndex: 20,
  },
  // New style for TapIndicator overlay used in the preview cards
  indicatorOverlayFlat: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  edgeHintGrad: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  fullscreenPress: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  swipeHint: {
    position: 'absolute',
  },
  swipeHintBubble: {
    backgroundColor: 'rgba(0,0,0,0.12)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  swipeLottie: {
    width: 48,
    height: 48,
  },
  edgeHintWrap: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  neoFooterText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  neoGaugeTrack: {
    height: 8,
    borderRadius: 6,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.08)',
    alignSelf: 'stretch',
    marginTop: 6,
  },
  neoGaugeFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
});

export default UpsellRevealCarousel;
