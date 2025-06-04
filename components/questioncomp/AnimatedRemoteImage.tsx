// components/AnimatedRemoteImage.jsx
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Animated,
  useColorScheme,
} from 'react-native';

type Props = {
  /** Pexels API で取得した photo オブジェクト */
  imageData: {
    src: { large: string };
    photographer: string;
  } | null;
  width: number;
  height: number;
  forceTheme?: 'light' | 'dark'; // 🔥 強制テーマオプション
};

export default function AnimatedRemoteImage({
  imageData,
  width,
  height,
  forceTheme,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // テーマ判定
  const systemTheme = useColorScheme();
  const colorScheme = forceTheme ?? systemTheme;
  const isDark = colorScheme === 'dark';

  // カラースキームごとの色定義
  const colors = {
    background: isDark ? '#303030' : '#E3E5F2',
    overlayBackground: isDark
      ? '#303030'
      : '#E3E5F2',
    textPrimary: isDark ? '#FFFFFF' : '#000000',
    textSecondary: isDark ? '#BFC2CF' : '#555555',
  };

  const handleLoad = () => {
    setLoading(false);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      {/* ローディング中はインジケータだけ上に重ねる */}
      {loading && (
        <View
          style={[
            styles.loadingOverlay,
            { backgroundColor: colors.overlayBackground },
          ]}
        >
          <ActivityIndicator
            size="large"
            color={colors.textPrimary}
          />
          <Text
            style={[
              styles.loadingText,
              { color: colors.textPrimary },
            ]}
          >
          </Text>
        </View>
      )}

      {/* Image 本体は常に描画。onLoad/onError で loading を false に */}
      {!error && imageData && (
        <Animated.Image
          source={{ uri: imageData.src.large }}
          style={[
            styles.image,
            { width, height, opacity: fadeAnim },
          ]}
          resizeMode="cover"
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* エラー時メッセージ */}
      {error && (
        <View style={styles.errorContainer}>
          <Text
            style={[
              styles.errorText,
              { color: colors.textPrimary },
            ]}
          >
            画像が見つかりませんでした。
          </Text>
        </View>
      )}

      {/* photographer は最後に表示 */}
      {!loading && !error && imageData && (
        <Text
          style={[
            styles.photographerText,
            { color: colors.textSecondary },
          ]}
        >
          Photo by {imageData.photographer}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 5,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    zIndex: 5,
  },
  errorText: {
    fontSize: 14,
  },
  image: {
    borderRadius: 15,
    zIndex: 5,
  },
  photographerText: {
    position: 'absolute',
    bottom: -25,
    fontSize: 14,
    zIndex: 5,
  },
});
