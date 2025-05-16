// components/ui/NeomorphBox.tsx
import React, { useRef, useEffect } from 'react';
import {
  Animated,
  useColorScheme,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';

interface NeomorphBoxProps {
  width: number;
  height?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  forceTheme?: 'light' | 'dark';
  /** 親要素から 'AI' を渡すと、背景色がアニメーション */
  variant?: string;
  push?: boolean;

}

const COLOR_CYCLE = {
  outer: ['#EBF3FF', '#FFD700', '#00BFFF', '#FFA500', '#FF69B4'],  // ベース／ゴールド／ブルー／オレンジ／ピンク
  inner: ['#F3F8FF', '#FFFDF5', '#DEF2FC', '#FFF6E5', '#FFE4EB'],};
const NeomorphBox: React.FC<NeomorphBoxProps> = ({
  width,
  height,
  children,
  style,
  forceTheme,
  variant,
  push = false,     // ここ
}) => {
  const systemTheme = useColorScheme();
  const colorScheme = forceTheme ?? systemTheme;
  const isDark = colorScheme === 'dark';

  // ダークモード時のベース色を上書き
  const baseOuter = isDark ? '#303030' : COLOR_CYCLE.outer[0];
  const baseInner = isDark ? '#303030' : COLOR_CYCLE.inner[0];

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
      : variant === 'blue'
      ? 'rgba(0, 123, 255, 0.79)' // 青色固定
      : baseOuter;

  // 内側背景の補間（同様に5色サイクル）
// 内側背景の補間、'blue'バリアントで青色固定
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
    : variant === 'blue'
    ? 'rgba(0, 123, 255, 0.79)' // 青色固定
    : baseInner;

  

  // 影色は変更せず従来どおり
  const colors = {
    outerShadow: isDark ? '#555' : '#eee',
    innerShadow: isDark ? '#000' : '#BFC2CF',
  };
  const outerShadowColor =
  variant === 'AI'
    ? anim.interpolate({
        inputRange: [0, 0.25,0.5,  0.75, 1],
        outputRange: [
          COLOR_CYCLE.outer[1],
          COLOR_CYCLE.outer[2],
          COLOR_CYCLE.outer[3],
          COLOR_CYCLE.outer[4],
          COLOR_CYCLE.outer[1],

        ],
      })
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
          },
        ]}
      >
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
    shadowOffset: { width: -4, height: -4 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 6,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});