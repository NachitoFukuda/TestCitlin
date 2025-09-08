import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'expo-router';
import {View,Text,StyleSheet,TouchableOpacity,Animated,Easing,Dimensions,Linking,Alert,} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import TapIndicator from '../ui/TapIndicator';
import NeomorphBox from '../ui/NeomorphBox';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardDesign from '../ui/CardDesign';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
const PRIVACY_POLICY_URL = "https://citlin.sakura.ne.jp/";



// Component
const DailyLimitScreen: React.FC<{ level: string }> = ({ level }) => {
  const router = useRouter();
  const isFocused = useIsFocused();
  const hasPressedRef = useRef(false);
  const pressBottomButton = () => {
    if (hasPressedRef.current) return;
    hasPressedRef.current = true;
    handleFinish();
  };
  const handleFinish = async () => {
    // Replace to prevent stacking routes across root Stack -> Tabs
    router.replace('/UpsellRevealCarousel');
  };
// EULA・プライバシーポリシーリンク
const handleOpenEULA = () => {
  Linking.openURL(EULA_URL).catch((err) => {
    Alert.alert('エラー', `EULAページを開けませんでした:\n${String(err)}`);
  });
};

const handleOpenPrivacyPolicy = () => {
  Linking.openURL(PRIVACY_POLICY_URL).catch((err) => {
    Alert.alert('エラー', `プライバシーポリシーページを開けませんでした:\n${String(err)}`);
  });
};
  // Rewards / history state omitted (unchanged)
  const [totalC, setTotalC] = useState(0);
  const [Alldays, setAlldays] = useState<number | undefined>(undefined);
  const STORAGE_KEY_LEVEL = `correctData_${level}`;

  useEffect(() => {
    const loadCorrectData = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY_LEVEL);
        const parsed: Record<string, { C?: number }> = stored ? JSON.parse(stored) : {};
        const total = Object.values(parsed).reduce((sum, item) => sum + (item?.C || 0), 0);
        setTotalC(total);
      } catch (e) {
        console.error('correctDataの読み込みに失敗しました:', e);
      }
    };
    loadCorrectData();
  }, [STORAGE_KEY_LEVEL]);

  useEffect(() => {
    const loadDeadlineDays = async () => {
      try {
        const storedDeadline = await AsyncStorage.getItem('@deadline_days');
        if (storedDeadline) {
          const parsed: { days?: number; savedAt?: string } = JSON.parse(storedDeadline);
          setAlldays(parsed?.days);
        }
      } catch (e) {
        console.error('deadline_daysの読み込みに失敗しました:', e);
      }
    };
    loadDeadlineDays();
  }, []);


  // Bottom button 5s gauge & countdown
  const DURATION_MS = 5000;
  const progressAnim = useRef(new Animated.Value(0)).current; // 0 -> 1
  const [remainingSec, setRemainingSec] = useState(5);
  const [trackWidth, setTrackWidth] = useState(0);
  // Refs to manage countdown state and interval
  const countdownStoppedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Stylish button press animation
  const pressScale = useRef(new Animated.Value(1)).current;
  const handlePressIn = () => {
    Animated.spring(pressScale, {
      toValue: 0.98,
      useNativeDriver: true,
      friction: 7,
      tension: 160,
    }).start();
  };
  const handlePressOut = () => {
    Animated.spring(pressScale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 7,
      tension: 160,
    }).start();
  };

  useEffect(() => {
    // If screen not focused, ensure everything is stopped
    if (!isFocused) {
      progressAnim.stopAnimation();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    countdownStoppedRef.current = false;
    const start = Date.now();

    // Linear progress fill over 5s (native driver)
    const anim = Animated.timing(progressAnim, {
      toValue: 1,
      duration: DURATION_MS,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    anim.start(({ finished }) => {
      if (finished && !countdownStoppedRef.current) {
        pressBottomButton();
      }
    });

    // Update text every 1000ms to reduce re-render frequency
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const left = Math.max(0, DURATION_MS - elapsed);
      setRemainingSec(Math.ceil(left / 1000));
    }, 1000);

    return () => {
      progressAnim.stopAnimation();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isFocused]);

  // Helper to stop countdown and animation (called on card tap)
  const stopCountdown = () => {
    if (countdownStoppedRef.current) return;
    countdownStoppedRef.current = true;
    progressAnim.stopAnimation();
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Animation values
  const tiltProgress1 = useRef(new Animated.Value(0)).current;
  const tiltProgress2 = useRef(new Animated.Value(0)).current;
  const [showIndicator1, setShowIndicator1] = useState(true);
  const [showIndicator2, setShowIndicator2] = useState(true);

  const handleTiltPress1 = () => {
    stopCountdown();
    setShowIndicator1(false);
    setShowIndicator2(true);
    Animated.parallel([
      Animated.timing(tiltProgress1, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(tiltProgress2, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleTiltPress2 = () => {
    stopCountdown();
    setShowIndicator2(false);
    setShowIndicator1(true);
    Animated.parallel([
      Animated.timing(tiltProgress2, {
        toValue: 1,
        duration: 600,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
      Animated.timing(tiltProgress1, {
        toValue: 0,
        duration: 600,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Derived animation values
  const rotateX1 = tiltProgress1.interpolate({ inputRange: [0, 1], outputRange: ['40deg', '0deg'] });
  const rotateZ1 = tiltProgress1.interpolate({ inputRange: [0, 1], outputRange: ['24deg', '0deg'] });
  const translateY1 = tiltProgress1.interpolate({ inputRange: [0, 1], outputRange: [-24, 0] });
  const dimOpacity1 = tiltProgress2.interpolate({ inputRange: [0, 1], outputRange: [1, 0.6] });

  const rotateX2 = tiltProgress2.interpolate({ inputRange: [0, 1], outputRange: ['40deg', '0deg'] });
  const rotateZ2 = tiltProgress2.interpolate({ inputRange: [0, 1], outputRange: ['24deg', '0deg'] });
  const translateY2 = tiltProgress2.interpolate({ inputRange: [0, 1], outputRange: [-24, 0] });
  const dimOpacity2 = tiltProgress1.interpolate({ inputRange: [0, 1], outputRange: [1, 0.6] });

  return (
    <View style={styles.container}>
      {/* Top-right finish button */}
      {/* All‑Access VIP Card (upper) */}
      <TouchableOpacity style={styles.purchaseCardButton} onPress={handleTiltPress2}>
        {showIndicator2 && (
          <TapIndicator
            size={250}
            color="#fff"
            strokeWidth={20}
            duration={2000}
            style={styles.indicatorOverlayFlat}
          />
        )}
        <Animated.View
          style={[
            styles.cardWrapper,
            {
              transform: [
                { perspective: 800 },
                { rotateX: rotateX2 },
                { rotate: rotateZ2 },
                { translateY: translateY2 },
              ],
            },
          ]}
          pointerEvents="none"
          collapsable={false}
        >
            <CardDesign level="All Level" />
        </Animated.View>
      </TouchableOpacity>

      {/* Level‑specific card (lower) */}
      <TouchableOpacity style={styles.purchaseCardButton} onPress={handleTiltPress1} activeOpacity={0.9}>
        {showIndicator1 && (
          <TapIndicator
            size={250}
            color="#fff"
            strokeWidth={20}
            duration={2000}
            style={styles.indicatorOverlayFlat}
          />
        )}
        <Animated.View
          style={[
            styles.cardWrapper,
            {
              transform: [
                { perspective: 800 },
                { rotateX: rotateX1 },
                { rotate: rotateZ1 },
                { translateY: translateY1 },
              ],
            },
          ]}
          pointerEvents="none"
          collapsable={false}
        >
          <Animated.View style={{ opacity: dimOpacity1, width: '100%', alignItems: 'center' }}>
            <CardDesign level={level}  />
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>

      {/* Links */}
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={handleOpenEULA} style={styles.linkButton}>
          <Text style={styles.linkText}>EULA</Text>
        </TouchableOpacity>
        <Text style={styles.linkSeparator}>|</Text>
        <TouchableOpacity onPress={handleOpenPrivacyPolicy} style={styles.linkButton}>
          <Text style={styles.linkText}>プライバシーポリシー</Text>
        </TouchableOpacity>
      </View>

      {/* Finish button (stylish, fixed to bottom) */}
      <Animated.View style={[styles.bottomButtonWrapper, { transform: [{ scale: pressScale }] }] }>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={pressBottomButton}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          activeOpacity={0.9}
          disabled={false}
        >
          <NeomorphBox width={SCREEN_WIDTH * 0.85} height={64} style={styles.bottomNeo}>
            {/* Layered gradient background with glossy highlight */}
            <LinearGradient
              colors={[ '#10141E', '#171C29' ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.buttonBg}
            >
              <LinearGradient
                colors={[ '#FFFFFF33', '#FFFFFF14', 'transparent' ]}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 0.9, y: 1 }}
                style={styles.buttonGloss}
              />

              <View style={styles.buttonRow}>
                <Ionicons name="play" size={20} color="#E6EAF2" style={{ marginRight: 8 }} />
                <Text style={styles.buttonTextPrimary}>動画を見て学習を再開</Text>
                <View style={styles.countdownPill}>
                  <Text style={styles.countdownPillText}>{remainingSec}s</Text>
                </View>
              </View>

              {/* Progress gauge (5s) with gradient fill */}
              <View
                style={styles.progressTrack}
                pointerEvents="none"
                onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}
              >
                <Animated.View
                  style={[
                    styles.progressFill,
                    {
                      width: trackWidth || 1,
                      transform: [
                        {
                          translateX: progressAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-(trackWidth || 0), 0],
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  <LinearGradient
                    colors={[ '#67D1FF', '#6AA6FF' ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={StyleSheet.absoluteFillObject}
                  />
                </Animated.View>
              </View>
            </LinearGradient>
          </NeomorphBox>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

// Styles unchanged except for VIP styling (vipTopRight etc.)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#E3E5F2',
  },
  cardWrapper: {
    width: '90%',
    aspectRatio: 1.6,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#010',
    shadowOpacity: 0.25, // reduced from 0.6
    shadowOffset: { width: 6, height: 12 }, // reduced from { width: 20, height: 48 }
    shadowRadius: 6, // reduced from 12
    elevation: 4, // reduced from 8
  },
  // style definitions for circles remain but are not used in this design
  bottomButtonWrapper: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
    alignItems: 'center',
    zIndex: 1000,
  },
  bottomButton: {
    width: '100%',
    alignItems: 'center',
  },
  buttonBg: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 18,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  buttonGloss: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '55%',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    opacity: 0.6,
  },
  buttonTextPrimary: {
    color: '#E6EAF2',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  countdownPill: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: 'rgba(230, 234, 242, 0.16)',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(230,234,242,0.28)',
  },
  countdownPillText: {
    color: '#E6EAF2',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  purchaseCardButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  indicatorOverlayFlat: {
    position: 'absolute',
    zIndex: 9999,
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -125 },
      { translateY: -125 },
      { rotateX: '40deg' },
      { rotate: '24deg' },
    ],
    pointerEvents: 'none',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  linkButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  linkText: {
    color: '#4169e1',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  linkSeparator: {
    color: '#666',
    marginHorizontal: 8,
  },
  topRightFinishButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  progressTrack: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 8,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#D7DBE6', // subtle track
    overflow: 'hidden',
  },
  progressFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 4,
    backgroundColor: '#6AA6FF', // fill color
  },
  bottomNeo: {
    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 12 },
    // Android elevation
    elevation: 12,
    // keep the same rounding as the inner gradient container
    borderRadius: 18,
    backgroundColor: 'transparent',
  },
});

export default DailyLimitScreen;
