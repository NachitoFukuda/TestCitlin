// components/ui/NeomorphBox.tsx
import React, { useRef, useEffect } from 'react';
import {
  Animated,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface NeomorphBoxProps {
  width: number;
  height?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  forceTheme?: 'light' ;
  /** 親要素から 'AI' を渡すと、背景色がアニメーション */
  variant?: 'circle' | 'AI' | 'VIP' | 'blue' | 'graph' | 'rainbow';
  /** ボタンの色を指定 */
  push?: boolean;
}

const COLOR_CYCLE = {
  outer: ['#E3E5F2', '#FFD700', '#00BFFF', '#FFA500', '#FF69B4'],  // ベース／ゴールド／ブルー／オレンジ／ピンク
  inner: ['#E3E5F2', '#FFFDF5', '#DEF2FC', '#FFF6E5', '#FFE4EB'],};

const PINK_GRADIENT = {
  colors: ['#FF69B4', '#FFB6C1'] as const,  // ピンクのグラデーション
  inner: '#E3E5F2'  // 内側の円の色
} as const;

const NeomorphBox: React.FC<NeomorphBoxProps> = ({
  width,
  height,
  children,
  forceTheme,
  style,
  variant,
  push = false,     // ここ
}) => {
  // ダークモード時のベース色を上書き
  const baseOuter = COLOR_CYCLE.outer[0];
  const baseInner = COLOR_CYCLE.inner[0];
  const anim = useRef(new Animated.Value(0)).current;
  const shadowStyles = push
  ? {} // シャドウなし
  : {
      // 従来の shadowColor / shadowOffset / shadowOpacity / elevation ... 等
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    };

  useEffect(() => {
    if (variant === 'AI') {
      // 0→1 を繰り返して interpolate で5色ループ
      Animated.loop(
        Animated.timing(anim, {
          toValue: 1,
          duration: 20000,      // 全色１サイクルを5秒で
          useNativeDriver: false,
        })
      ).start();
    } else {
      anim.stopAnimation();
      anim.setValue(0);
    }
  }, [variant, anim]);

  // 外側背景の補間（5色サイクル）
  const outerBackground =
    variant === 'AI'
      ? anim.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: [
            COLOR_CYCLE.outer[1],
            COLOR_CYCLE.outer[2],
            COLOR_CYCLE.outer[3],
            COLOR_CYCLE.outer[4],
            COLOR_CYCLE.outer[1],
          ],
        })
      : variant === 'VIP'
      ? '#444'
      : variant === 'blue'
      ? 'rgba(0, 123, 255, 0.79)'
      : variant === 'graph'
      ? '#666'
      : baseOuter;

  // 内側背景の補間（同様に5色サイクル）
  const innerBackgroundColor =
    variant === 'AI'
      ? anim.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: [
            COLOR_CYCLE.inner[1],
            COLOR_CYCLE.inner[2],
            COLOR_CYCLE.inner[3],
            COLOR_CYCLE.inner[4],
            COLOR_CYCLE.inner[1],
          ],
        })
      : variant === 'VIP'
      ? '#000'
      : variant === 'blue'
      ? 'rgba(0, 123, 255, 0.79)'
      : variant === 'graph'
      ? '#E3E5F2'
      : baseInner;

  // 影色は変更せず従来どおり
  const colors = {
    outerShadow: '#fff',
    innerShadow: '#BFC2CF',
  };

  const getRainbowShadowColor = (position: 'top' | 'right' | 'bottom' | 'left') => {
    switch (position) {
      case 'top':
        return COLOR_CYCLE.outer[1]; // ゴールド
      case 'right':
        return COLOR_CYCLE.outer[2]; // ブルー
      case 'bottom':
        return COLOR_CYCLE.outer[3]; // オレンジ
      case 'left':
        return COLOR_CYCLE.outer[4]; // ピンク
      default:
        return colors.outerShadow;
    }
  };

  const outerShadowColor =
    variant === 'AI'
      ? anim.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: [
            COLOR_CYCLE.outer[1],
            COLOR_CYCLE.outer[2],
            COLOR_CYCLE.outer[3],
            COLOR_CYCLE.outer[4],
            COLOR_CYCLE.outer[1],
          ],
        })
      : variant === 'rainbow'
      ? getRainbowShadowColor('top')
      : variant === 'VIP'
      ? '#rgb(249, 229, 117)'
      : colors.outerShadow;

  const innerShadowColor =
    variant === 'AI'
      ? anim.interpolate({
          inputRange: [0, 0.25, 0.5, 0.75, 1],
          outputRange: [
            COLOR_CYCLE.inner[1],
            COLOR_CYCLE.inner[2],
            COLOR_CYCLE.inner[3],
            COLOR_CYCLE.inner[4],
            COLOR_CYCLE.inner[1],
          ],
        })
      : variant === 'rainbow'
      ? getRainbowShadowColor('bottom')
      : variant === 'VIP'
      ? 'rgb(147, 125, 0)'
      : colors.innerShadow;

  return (
    <Animated.View
      style={[
        styles.outerNeomorph,
        {
          width,
          height,
          backgroundColor: outerBackground,
          shadowColor: outerShadowColor,
          shadowOpacity: variant === 'VIP' ? 0.7 : 0.9,
          borderRadius: variant === 'circle' ? width / 2 : variant === 'graph' ? 0 : 15,
          ...(variant === 'rainbow' && {
            shadowOffset: { width: -4, height: -4 },
            shadowColor: getRainbowShadowColor('top'),
          }),
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.innerNeomorph,
          {
            backgroundColor: innerBackgroundColor,
            shadowColor: innerShadowColor,
            shadowOpacity: variant === 'VIP' ? 0.4 : 0.6,
            borderRadius: variant === 'circle' ? width / 2 : variant === 'graph' ? 0 : 15,
            ...(variant === 'rainbow' && {
              shadowOffset: { width: 4, height: 4 },
              shadowColor: getRainbowShadowColor('bottom'),
            }),
          },
        ]}
      >
        {(variant === 'circle') && (
          <>
            <View style={[styles.gradientBorder, { width, height, borderRadius: width / 2 }]}>
              <LinearGradient
                colors={['rgba(0, 255, 191, 0.79)', 'rgb(36, 164, 255)',]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.gradient, { borderRadius: width / 2 }]}
              />
            </View>
            <View style={[styles.innerCircle, { 
              width: width * 0.7, 
              height: width * 0.7, 
              borderRadius: (width * 0.7) / 2,
              backgroundColor: '#E3E5F2',
              transform: [{ translateX: -width * 0.35 }, { translateY: -width * 0.35 }]
            }]} />
          </>
        )}
        {children}
      </Animated.View>
    </Animated.View>
  );
};

export default NeomorphBox;

const styles = StyleSheet.create({
  outerNeomorph: {
    position: 'relative',
    borderRadius: 15,
    shadowOffset: { width: -7, height: -7 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 6,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
  innerNeomorph: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 6,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
  gradientBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 2,
    zIndex: 1,
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  innerCircle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});