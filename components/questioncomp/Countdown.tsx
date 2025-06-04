import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Animated, Text } from 'react-native';
import * as Haptics from 'expo-haptics';
import Svg, { Text as SvgText, Defs, Stop, LinearGradient } from 'react-native-svg';
import LottieView from 'lottie-react-native';

interface CountdownProps {
  count: number;
  forceTheme?: 'light' | 'dark';
}

const Countdown: React.FC<CountdownProps> = ({
  count: initialCount,
  forceTheme = 'light', // デフォルトは 'light'
}) => {
  const [count, setCount] = useState(initialCount);
  const [showCircle, setShowCircle] = useState(false);
  const circleScale = useRef(new Animated.Value(0)).current;

  const { width, height } = Dimensions.get('window');
  const diagonal = Math.sqrt(width * width + height * height);
  const circleSize = diagonal * 1.5;

  // forceTheme に応じて円の色を変更
  const circleColor = forceTheme === 'dark' ? '#303030' : '#E3E5F2';

  // カウントダウン処理
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          if (prevCount > 1) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          }
          return prevCount - 1;
        } else {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          clearInterval(interval);
          return 0;
        }
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  // count が 0 になったときの円アニメーション
  useEffect(() => {
    if (count === 0) {
      setShowCircle(true);
      Animated.timing(circleScale, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        setShowCircle(false);
      });
    }
  }, [count]);

  return (
    <View style={styles.container}>
      {/* 画面上部に表示する行 */}
      <View style={styles.rowContainer}>
        <LottieView
          source={require('../../assets/lottie/AI1.json')}
          autoPlay
          loop
          style={styles.lottieStyle}
        />
        <Text style={styles.footerText}>問題作成中...</Text>
      </View>

      {/* カウントが0のとき拡大する円 */}
      {showCircle && (
        <Animated.View
          style={[
            styles.circle,
            {
              width: circleSize,
              height: circleSize,
              borderRadius: circleSize / 2,
              top: (height - circleSize) / 2,
              left: (width - circleSize) / 2,
              transform: [{ scale: circleScale }],
              backgroundColor: circleColor,
            },
          ]}
        />
      )}

      {/* カウント表示 (SVG) */}
      <Svg width={width} height={width} style={{ position: 'absolute', zIndex: 3 }}>
        <Defs>
          {count === 0 ? (
            <LinearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="rgba(66, 255, 164, 0.5)" />
              <Stop offset="100%" stopColor="rgba(0, 162, 255, 0.5)" />
            </LinearGradient>
          ) : (
            <LinearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#fff" />
              <Stop offset="100%" stopColor="#fff" />
            </LinearGradient>
          )}
        </Defs>
        <SvgText
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize="100"
          fontWeight="bold"
          fill="url(#textGradient)"
        >
          {count > 0 ? count : 'Go!'}
        </SvgText>
      </Svg>

      {/* フッターエリア */}
      <View style={styles.footer}>
        <LottieView
          source={require('../../assets/lottie/Countdown.json')}
          autoPlay
          loop
          style={[styles.confetti, { width: width, height: width }]}
        />
      </View>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5b5c65',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    position: 'absolute',
    zIndex: 2,
  },
  confetti: {
    // 必要に応じて調整
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    zIndex: 1,
    paddingBottom: 20,
    width: '100%',
  },
  // rowContainer を画面上部に絶対配置
  rowContainer: {
    position: 'absolute',
    top: 100, // 画面上部から20px
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  lottieStyle: {
    width: 100,
    height: 100,
  },
});
