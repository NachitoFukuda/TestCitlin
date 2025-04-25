import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface RotatingNeumorphicButtonProps {
  today: number;
  title: string;
  onPress: () => void;
  size?: number; // ボタン全体の円形サイズ (デフォルト 150)
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  forceTheme?: 'light' | 'dark'; // 追加：テーマを指定するプロパティ
}

const RotatingNeumorphicButton: React.FC<RotatingNeumorphicButtonProps> = ({
  today,
  title,
  onPress,
  size = 150,
  buttonStyle,
  textStyle,
  forceTheme = 'light',
}) => {
  // ✅ テーマに応じた色を一元管理
  const themeColors = useMemo(() => {
    const isDark = forceTheme === 'dark';
    return {
      backgroundColor: isDark ? '#303030' : '#EBF3FF', // ボタン背景色
      outerShadowColor: isDark ? '#555' : '#FFF',     // 外側のシャドウ
      innerShadowColor: isDark ? '#000' : '#A3A5B5',  // 内側のシャドウ
      ringGradientColors: isDark
        ? ['rgba(66, 255, 164, 0.8)', 'rgba(0, 89, 255, 0.8)']
        : ['rgba(66, 255, 164, 0.5)', 'rgba(0, 89, 255, 0.5)'], // リングのグラデーション
      textColor: isDark ? '#E0E0E0' : '#888',         // テキスト色
    };
  }, [forceTheme]);

  // ボタンをタップした時
  const handlePress = useCallback(() => {
    onPress();
  }, [onPress]);

  // ボタン内のサイズ計算
  const buttonSize = size * 0.7;
  const offset = (size - buttonSize) / 2;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.outerShadow,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: themeColors.backgroundColor,
            shadowColor: themeColors.outerShadowColor,
          },
          buttonStyle,
        ]}
      >
        <View
          style={[
            styles.middleShadow,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: themeColors.backgroundColor,
              shadowColor: themeColors.innerShadowColor,
            },
            buttonStyle,
          ]}
        >
          <View
            style={[
              styles.innerShadow,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: themeColors.backgroundColor,
              },
              buttonStyle,
            ]}
          >
            {/* 静的なリング表示 */}
            <View
              style={[
                styles.gradientRingContainer,
                { width: size, height: size, borderRadius: size / 2 },
              ]}
            >
              <LinearGradient
                colors={ ['rgba(66, 255, 164, 0.5)', 'rgba(0, 89, 255, 0.5)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ flex: 1, borderRadius: size / 2 }}
              >
                <View
                  style={[
                    styles.centerCircle,
                    {
                      width: size * 0.65,
                      height: size * 0.65,
                      borderRadius: (size * 0.65) / 2,
                      margin: size * 0.175,
                      backgroundColor: themeColors.backgroundColor,
                    },
                  ]}
                />
              </LinearGradient>
            </View>

            <TouchableOpacity
              style={[
                styles.buttonBody,
                {
                  width: buttonSize,
                  height: buttonSize,
                  borderRadius: buttonSize / 2,
                  top: offset,
                  left: offset,
                  backgroundColor: themeColors.backgroundColor,
                },
              ]}
              onPress={handlePress}
              activeOpacity={0.7}
            >
              <Text style={[styles.today, { color: themeColors.textColor }]}>
                Day {today + 1}
              </Text>
              <Text style={[styles.buttonText, { color: themeColors.textColor }, textStyle]}>
                {title}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RotatingNeumorphicButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerShadow: {
    shadowOffset: { width: -10, height: -10 },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 6,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleShadow: {
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerShadow: {
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientRingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  centerCircle: {
    // 内側の円。上部でスタイルを計算
  },
  buttonBody: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  today: {
    fontSize: 16,
    marginBottom: 7,
  },
});
