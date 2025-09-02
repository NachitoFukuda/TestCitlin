import React, { useState, useEffect, useCallback } from 'react';
import LottieView from 'lottie-react-native';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Stop, Circle } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import useQuestionData from '../questioncomp/useQuestionData';
import { rdb, auth } from '../../firebaseConfig';
import NeomorphBox from '../ui/NeomorphBox';
import { BlurView } from 'expo-blur';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const GENERATED_KEY = '@generated_data';


// Agent text typewriter speed (ms per character)
const AGENT_TYPE_SPEED = 45; // slower than previous 18ms

const BASE_TEXT_COLOR = '#787878ff'; // neutral gray for primary text

// Default Lottie animation fallback
// eslint-disable-next-line @typescript-eslint/no-var-requires
const DEFAULT_ANIMATION_SOURCE: any = require('../../assets/lottie/LoaderCat.json');

// Calculate a progress ratio (0.0–1.0) given counts and goal
function calculatePercent(counts: number, goal: number): number {
  return goal > 0 ? Math.min(1, counts / goal) : 0;
}
const safeGetData = async (key: string, defaultValue: any) => {
    try {
      const json = await AsyncStorage.getItem(key);
      if (!json) return defaultValue;
      return JSON.parse(json);
    } catch (error) {
      return defaultValue;
    }
  };
// Format a ratio as a percentage string, e.g., 0.75 -> "75%"
function formatPercent(p: number): string {
  return `${Math.round(p * 100)}%`;
}

interface HometopcardProps {
  fromShop?: boolean;
  animationSource?: any; // Lottie source (require(...) or { uri })
}

const Hometopcard: React.FC<HometopcardProps> = ({
  fromShop,
  animationSource,
}) => {
  // Lottie overlay ref
  const confettiRef = React.useRef<LottieView>(null);
  // Prefer prop animation, fallback to default LoaderCat
  const effectiveAnimationSource = animationSource ?? DEFAULT_ANIMATION_SOURCE;
  // Mapping for display of levels
  const [NickName, setNickName] = useState<string>('匿名');

  // Agent character speaking state
  const [agentMsg, setAgentMsg] = useState<string>('');
  const [shownAgentMsg, setShownAgentMsg] = useState<string>('');

  // Imperative helper to make the agent speak with typewriter effect
  const say = useCallback((msg: string, speed: number = AGENT_TYPE_SPEED) => {
    setAgentMsg(msg);
    setShownAgentMsg('');
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShownAgentMsg(prev => (msg.slice(0, i)));
      if (i >= msg.length) clearInterval(id);
    }, speed);
    // ensure cleanup on unmount
    return () => clearInterval(id);
  }, []);

  const scaleFactor = fromShop ? 0.5 : 1;
  // State for selected level display
  const [displayLevel, setDisplayLevel] = useState<string>('');
  const [counts, setCounts] = useState<number>(0);
  const [todayGoal, setTodayGoal] = useState<number>(0);
  const [dayCount, setDayCount] = useState<number>(1);

  // Soft pulsing glow for the gauge (must be inside component)
  const glowOpacity = React.useRef(new Animated.Value(0.25)).current;
  const glowScale = React.useRef(new Animated.Value(1)).current;
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(glowOpacity, { toValue: 0.5, duration: 1600, useNativeDriver: false }),
          Animated.timing(glowScale, { toValue: 1.06, duration: 1600, useNativeDriver: false }),
        ]),
        Animated.parallel([
          Animated.timing(glowOpacity, { toValue: 0.25, duration: 1600, useNativeDriver: false }),
          Animated.timing(glowScale, { toValue: 1.0, duration: 1600, useNativeDriver: false }),
        ])
      ])
    );
    loop.start();
    return () => loop.stop();
  }, []);
  const defoltscreenWidth = Dimensions.get('window').width;
  const screenWidth =fromShop ? defoltscreenWidth *0.5 : defoltscreenWidth ;
  const screenHight =fromShop ? screenWidth *0.5 : screenWidth *0.5;
  const size =fromShop ?screenWidth *0.3 : screenWidth * 0.3;
  const strokeWidth =fromShop ? 12 : 25;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // Compute progress ratio based on actual counts and goal
  // Use fetched values for counts and todayGoal
  // counts and todayGoal are loaded in useFocusEffect
  const progress: number = calculatePercent(counts, todayGoal);

  // Animated progress value
  const progressAnim = React.useRef(new Animated.Value(0)).current;

  // Interpolate strokeDashoffset from full circumference to zero
  const dashOffset = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
    const iconRef = dbRef(rdb, `users/${user.uid}/nickname`);
    const unsubscribe = onValue(iconRef, snapshot => {
      const val = snapshot.val();
      if (typeof val === 'string') {
        setNickName(val as React.ComponentProps<typeof Ionicons>['name']);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Dynamic gauge color: red (0%) to green (100%)
  const hue = Math.round(progress * 120); // 0 = red, 120 = green
  const strokeColor = `hsl(${hue}, 100%, 75%)`; // lighter color
  const { level } = useQuestionData();
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');

  // Load and set nickname from AsyncStorage
  const [nickname, setNickname] = useState<string>('');
useFocusEffect(
  useCallback(() => {
      // Reload nickname when screen is focused
      AsyncStorage.getItem('@nickname').then(value => {
        if (value) setNickname(value);
      });
      // Reload selected level when screen is focused
      AsyncStorage.getItem('@selected_levels').then(value => {
        if (value) {
          const level = JSON.parse(value)[0];          // Fetch today's correct count from RTDB
          const sanitizedLevel = level;
          const auth = getAuth();
          const db = getDatabase();
          const uid = auth.currentUser?.uid;
          const today = new Date();
          const yyyy = today.getFullYear();
          const mm = String(today.getMonth() + 1).padStart(2, '0');
          const dd = String(today.getDate()).padStart(2, '0');
          const todayKey = `${yyyy}-${mm}-${dd}`;
          const correctRef = dbRef(db, `users/${uid}/dailyCorrect_${sanitizedLevel}/${todayKey}`);
          const unsubCount = onValue(correctRef, snap => {
            const raw = snap.val();
            const divided = typeof raw === 'number' ? raw / 2 : 0;
            // Truncate to integer (floor)
            const truncated = Math.floor(divided);
            setCounts(truncated);
          });
          // Subscribe to today's goal count from RTDB (use dailyCorrect_ instead of dailyGoal_)
          const goalRef = dbRef(db, `users/${uid}/dailyGoal_${sanitizedLevel}/${todayKey}`);
          const unsubGoal = onValue(goalRef, snapGoal => {
            const goalVal = snapGoal.val() || 0;
            setTodayGoal(goalVal/2);
          });
          // Also load today's goal from local generated data and apply to counts
          (async () => {
            const generatedData = await safeGetData(GENERATED_KEY, []);
            let entry = 0;
            if (Array.isArray(generatedData)) {
              const entrytoday = generatedData.find((item: any) => item.id === dayCount);
              const totalToday = Array.isArray(entrytoday?.result)
                ? entrytoday.result.reduce((sum: number, val: number) => sum + val, 0)
                : 0;
              const yesterdays = generatedData.find((item: any) => item.id === dayCount - 1)
                || { result: [0, 0, 0, 0, 0] };
              const totalYesterday = Array.isArray(yesterdays.result)
                ? yesterdays.result.reduce((sum: number, val: number) => sum + val, 0)
                : 0;
              entry = totalToday - totalYesterday;
            } else if (typeof generatedData === 'object') {
              entry = generatedData[dayCount] || 0;
            }
            setTodayGoal(entry);
          })();
          return () => {
            unsubCount();
            unsubGoal();
          };
        }
      });
  }, [sanitizedLevel])
);


  useEffect(() => {
    const loadDeadlineDays = async () => {
      try {
        const deadlineData = await safeGetData('@deadline_days', null);
        if (deadlineData?.savedAt) {
          const savedDate = new Date(deadlineData.savedAt);
          savedDate.setHours(0, 0, 0, 0);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const diffTime = today.getTime() - savedDate.getTime();
          const dayCount = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
          setDayCount(dayCount);
        }
      } catch (error) {
        console.log('[StreakProgressCard] Error in loadDeadlineDays:', error);
      }
    };
    loadDeadlineDays();
  }, []);

  useEffect(() => {
    // Only animate when both counts and todayGoal are non-zero
    if (todayGoal > 0) {
      // Compute new progress
      const newProgress = calculatePercent(counts, todayGoal);
      // Reset animated value to zero before animating
      progressAnim.setValue(0);
      Animated.timing(progressAnim, {
        toValue: newProgress,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [counts, todayGoal]);

useEffect(() => {
  if (todayGoal <= 0) return;
  const remain = Math.max(0, Math.ceil(todayGoal - counts));
  const namePrefix = NickName ? `${NickName}さん ` : '';
  const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

  if (progress >= 1) {
    const successMsgs = [
      `${namePrefix}今日の目標クリア！さすが！`,
      `${namePrefix}完璧！今日のノルマ突破だよ！`,
      `${namePrefix}達成おめでとう！この勢いで続けよう！`,
      `${namePrefix}ミッションコンプリート！いい流れ！`,
      `${namePrefix}素晴らしい！今日のタスクは全部終了！`,
      `${namePrefix}最高！キミの努力、見てたよ！`
    ];
    say(pick(successMsgs));
  } else if (counts === 0) {
    const startMsgs = [
      `${namePrefix}今日も1問から始めよっ。タップでスタート！`,
      `${namePrefix}まずは軽く1問いこう！`,
      `${namePrefix}はじめの一歩、いってみよ！`,
      `${namePrefix}準備OK？最初の1問でエンジンかけよう！`,
      `${namePrefix}ウォームアップしよ。最初はサクッと！`,
      `${namePrefix}スタート合図！押したら始まるよ！`
    ];
    say(pick(startMsgs));
  } else {
    const progressMsgs = [
      `${namePrefix}目標達成まであと${remain}単語だよ！いける！`,
      `${namePrefix}ゴールまで${remain}単語。このペースでOK！`,
      `${namePrefix}残り${remain}単語。キリのいいところまでいこう！`,
      `${namePrefix}あと${remain}単語！集中モードで仕上げよう！`,
      `${namePrefix}もう少し！${remain}単語やれば到達！`,
      `${namePrefix}ナイス進捗！残りは${remain}単語だよ！`
    ];
    say(pick(progressMsgs));
  }
}, [counts, todayGoal, progress, say]);

  return (
    <View style={styles.centerWrapper}>
      <View style={[styles.cardOverlayWrap, { width: screenWidth * 0.9, height: screenHight * 0.9 }]}>
        <NeomorphBox
          width={screenWidth * 0.9}
          height={screenHight * 0.9}
        >
          {/* Pastel gradient backdrop for AI-ish feel */}
          <LinearGradient
            colors={['#c2e7ffff', '#e3e1ffff', '#e4e1fdff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.pastelBackdrop}
          />
          {/* Left-side 3D line background image */}
          <Image
            source={require('../../assets/images/3dline.png')}
            style={[styles.leftBgImage, { width: size * 1.8, height: size * 1.8 }]}
            resizeMode="contain"
            accessible={false}
          />

          {/* Gauge and other inner content */}
          <View style={[
            {
              position: 'absolute',
              right: 16,
              top: fromShop ? 12 : 24,
            }
          ]}>
            {/* Soft pulsing glow behind the gauge */}
            <Animated.View
              style={[
                styles.gaugeGlow,
                {
                  opacity: glowOpacity,
                  transform: [{ scale: glowScale }],
                  width: size,
                  height: size,
                  borderRadius: size / 2,
                }
              ]}
            />
            <Svg width={size} height={size}>
              <Defs>
                <SvgLinearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#FFB3BA" />
                  <Stop offset="14.3%" stopColor="#FFDFBA" />
                  <Stop offset="28.6%" stopColor="#FFFFBA" />
                  <Stop offset="42.9%" stopColor="#BAFFC9" />
                  <Stop offset="57.2%" stopColor="#BAE1FF" />
                  <Stop offset="71.5%" stopColor="#E0BBE4" />
                  <Stop offset="85.8%" stopColor="#FFDFD6" />
                  <Stop offset="100%" stopColor="#FFB3BA" />
                </SvgLinearGradient>
                <SvgLinearGradient id="pastelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#A5F3FC" />
                  <Stop offset="50%" stopColor="#C7D2FE" />
                  <Stop offset="100%" stopColor="#FBCFE8" />
                </SvgLinearGradient>
              </Defs>
              {/* Background circle */}
              <Circle
                stroke="#D1D6E3"
                fill="none"
                cx={size/2}
                cy={size/2}
                r={radius}
                strokeWidth={strokeWidth}
              />
              <AnimatedCircle
                stroke="url(#gaugeContrast)"
                fill="none"
                cx={size/2}
                cy={size/2}
                r={radius}
                strokeWidth={strokeWidth * 1.6}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                rotation="-90"
                origin={`${size/2}, ${size/2}`}
                opacity={0.25}
              />
              {/* Progress circle */}
              <AnimatedCircle
                stroke={progress === 1 ? 'url(#rainbowGradient)' : 'url(#gaugeContrast)'}
                fill="none"
                cx={size/2}
                cy={size/2}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={dashOffset}
                strokeLinecap="round"
                rotation="-90"
                origin={`${size/2}, ${size/2}`}
              />
            </Svg>
            {/* Label under gauge */}
            <Text style={{
              position: 'absolute',
              top: size + 8 * scaleFactor,
              width: size,
              textAlign: 'center',
              color: BASE_TEXT_COLOR,
              fontSize: 16 * scaleFactor,
            }}>
              今日の目標
            </Text>
            {/* Percentage text overlay */}
            <View style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{ fontSize: size * 0.2 * scaleFactor, fontWeight: 'bold', color: BASE_TEXT_COLOR, fontFamily: 'Avenir-Heavy' }}>
                {Math.round(progress * 100)}%
              </Text>
            </View>
          </View>
        </NeomorphBox>

        {/* Agent character speech bubble — now OUTSIDE the card */}
        <BlurView intensity={30} tint="light" style={[styles.agentGlass, { right: size + 24 }]}>
          <LinearGradient
            colors={['rgba(255,255,255,0.5)', 'rgba(255,255,255,0.1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.agentGlassHighlight}
          />
          <Text
            style={styles.agentText}
            numberOfLines={7}
            ellipsizeMode="tail"
          >
            {shownAgentMsg || agentMsg}
          </Text>
        </BlurView>

        {/* Lottie overlay outside (above) the glass text container */}
        {effectiveAnimationSource && (
          <View
            style={[
              styles.lottieOutsideGlass,
              { right: size + 24, height: 72, width: size * 0.9 }
            ]}
          >
            <LottieView
              ref={confettiRef}
              source={effectiveAnimationSource}
              autoPlay
              loop
              style={StyleSheet.absoluteFillObject}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3E5F2',
  },
  usernameContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  centerWrapper: {
    flex: 1,
    justifyContent: 'flex-end', // move content to bottom
    alignItems: 'center',
    paddingBottom: 24, // add a little bottom spacing
  },
  agentText: {
    fontSize: 18,
    lineHeight: 18,
    color: '#222', 
    fontWeight: '600',
  },
  pastelBackdrop: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
    opacity: 0.55,
  },
  gaugeGlow: {
    position: 'absolute',
    backgroundColor: '#D6E6FF',
    // soft neumorph-like shadow to blend with box
    shadowColor: '#A3B1C6',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 6,
  },
  agentGlass: {
    position: 'absolute',
    top: 16,
    left: 24,
    // right is set dynamically in JSX as { right: size + 24 }
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.4)',
    shadowColor: '#ffffffff',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 9,
    zIndex: 999,
  },
agentGlassHighlight: {
  ...StyleSheet.absoluteFillObject,
  borderRadius: 14,
},
  leftBgImage: {
    position: 'absolute',
    left: 8,
    opacity: 0.9,
    transform: [{ rotate: '-10deg' }],
    zIndex: 1,
  },
  cardOverlayWrap: {
    position: 'relative',
    borderRadius: 16,
  },
  lottieOutsideGlass: {
    position: 'absolute',
    // Place it slightly above the glass bubble (glass is top: 16)
    bottom: 0,
    left: 24,
    zIndex: 1002,
    elevation: 1002,
    overflow: 'visible',
  },
});


export default Hometopcard;



