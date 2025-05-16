import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import NeomorphBox from '../ui/NeomorphBox';

const POINTS_KEY = '@quiz_points';
/**
 * ポイント数を AsyncStorage から読み込み、0からカウントアップで表示するコンポーネント
 * 横幅: 画面幅、縦幅: 横幅の1/4 のアスペクト比で表示します。
 */
interface PointsDisplayProps {
  fromShop?: boolean;
  size?: string;
  shape?: string;
}
const PointsDisplay: React.FC<PointsDisplayProps> = ({
  fromShop = false,
  size = '',
  shape = 'rounded',
}) => {
  const [points, setPoints] = useState<number>(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [displayPoints, setDisplayPoints] = useState<number>(0);
  const isFocused = useIsFocused();

  // AsyncStorage から読み込み
  useEffect(() => {
    const loadPoints = async () => {
      try {
        const pts = await AsyncStorage.getItem(POINTS_KEY);
        const loaded = pts ? JSON.parse(pts) : 0;
        setPoints(loaded);
      } catch (error) {
        console.error('[PointsDisplay] Failed to load points:', error);
        setPoints(0);
      }
    };
    loadPoints();
  }, []);

  // points 更新時や画面がフォーカスされたときにアニメーション実行
  useEffect(() => {
    if (!isFocused) return;
    Animated.timing(animatedValue, {
      toValue: points,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [points, isFocused]);

  // animatedValue の変化を displayPoints に反映
  useEffect(() => {
    const listenerId = animatedValue.addListener(({ value }) => {
      setDisplayPoints(Math.round(value));
    });
    return () => {
      animatedValue.removeListener(listenerId);
    };
  }, []);

  const screenWidth = Dimensions.get('window').width;
  // ベース幅の定義（short:40%, default:90%）
  const defaultWidth = screenWidth * 0.9;
  const shortWidth = screenWidth * 0.4;
  const baseWidth = size === 'short' ? shortWidth : defaultWidth;
  // fromShop が true のとき幅を 0.5 倍
  const width = fromShop ? baseWidth * 0.4 : baseWidth;
  // ベース高さの定義
  const defaultHeight = 70;
  // fromShop が true のとき高さを 0.5 倍
  const height = fromShop ? defaultHeight * 0.5 : defaultHeight;

  // borderRadius を shape に応じて設定
  let borderRadiusValue = 60;
  if (shape === 'circle') {
    borderRadiusValue = height / 2;
  } else if (shape === 'square') {
    borderRadiusValue = 4;
  }
  // テキストサイズを動的に設定
  const labelFontSize = fromShop ? 12 : 20;
  const valueFontSize = fromShop ? 12 : 20;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {shape === 'numo' ? (
        <NeomorphBox
          width={width}
          height={height}
          forceTheme="light"
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Text style={[styles.label, { fontSize: labelFontSize }]}>₵</Text>
            <Text style={[styles.value, { fontSize: valueFontSize }]}>{displayPoints}</Text>
          </View>
        </NeomorphBox>
      ) : (
        <View
        style={[
          styles.container,
          {
            width,
            height,
            alignSelf: 'center',
            borderRadius: borderRadiusValue,
          },
        ]}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={[styles.label, { fontSize: labelFontSize }]}>₵</Text>
          <Text style={[styles.value, { fontSize: valueFontSize }]}>{displayPoints}</Text>
        </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginRight: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PointsDisplay;
