import React from 'react';
import { View, StyleSheet, useColorScheme, StyleProp, ViewStyle } from 'react-native';

interface NeomorphBoxProps {
  width: number;
  height?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  forceTheme?: 'light' | 'dark'; // 🔥 強制テーマオプション
}

const NeomorphBox: React.FC<NeomorphBoxProps> = ({ width, height, children, style, forceTheme }) => {
  const systemTheme = useColorScheme(); // システムのテーマを取得
  const colorScheme = forceTheme ?? systemTheme; // `forceTheme` があれば優先

  const isDark = colorScheme === 'dark';

  // 🌟 カラースキームに応じた色の設定
  const colors = {
    outerBackground: isDark ? '#303030' : '#E3E5F2',
    innerBackground: isDark ? '#303030' : '#E3E5F2',
    outerShadow: isDark ? '#555' : '#fff',
    innerShadow: isDark ? '#000' : '#BFC2CF',
  };

  return (
    <View
      style={[
        styles.outerNeomorph,
        {
          width,
          height,
          backgroundColor: colors.outerBackground,
          shadowColor: colors.outerShadow,
        },
        style,
      ]}
    >
      <View
        style={[
          styles.innerNeomorph,
          {
            backgroundColor: colors.innerBackground,
            shadowColor: colors.innerShadow,
          },
        ]}
      >
        {children}
      </View>
    </View>
  );
};

export default NeomorphBox; // ✅ `React.memo()` を削除して再レンダリングを確実にする

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
