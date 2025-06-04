import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import NeomorphBox from '../ui/NeomorphBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
const TUTORIAL_STEP_KEY = '@quiz:tutorialStep';

/**
 * actions: 複数のアクションをボタンとして表示
 * - label: ボタンの表示文字列
 * - onPress: 実行したいコールバック
 * - route: 遷移先パス（expo-router の push で遷移）
 */
type Action = {
  label: string;
  onPress?: () => void;
  route?: string;
};

interface WidgetButtonProps {
  actions: Action[];
  fromShop?: boolean;
  size?: 'long' | 'short' | 'box';
  desigin: string;
  shape: string;
}

const screenWidth = Dimensions.get('window').width;
const WidgetButton: React.FC<WidgetButtonProps> = ({
  actions = [],
  fromShop = false,
  size = 'short',
  desigin,
  shape
}) => {
  const router = useRouter();
  // 初期サイズを定義 (size: 'long' の場合は 2 倍)
  const baseWidth = fromShop ? screenWidth * 0.2 : screenWidth * 0.4;
  const width = size === 'box' 
    ? fromShop 
      ? screenWidth * 0.25
      : screenWidth * 0.4
    : size === 'long' 
    ? baseWidth * 2 
    : baseWidth;
  const height = size === 'box'
    ? fromShop
      ? screenWidth * 0.25
      : screenWidth* 0.4
    : fromShop 
    ? screenWidth * 0.09 
    : screenWidth * 0.15;
  const fontSize = fromShop ? 12 : 20;

  // size に応じたコンテナ幅
  const containerWidth = size === 'box'
    ? screenWidth * 0.5
    : size === 'long'
    ? screenWidth * 1
    : screenWidth * 0.5;

  const containerHeight = size === 'box'
    ? screenWidth * 0.5
    : size === 'long'
    ? screenWidth * 0.25
    : screenWidth * 0.25;

  const handlePress = (action: Action) => () => {
    // コールバックがあれば先に実行
    if (action.onPress) {
      action.onPress();
    }
    // route が設定されていれば画面遷移
    if (action.route) {
      router.push(action.route as any);
      // チュートリアルステップ更新

    }
  };

  return (
    <View style={[styles.container, { width: containerWidth, height: containerHeight}]}>
          <View style={[styles.buttoncontainer, ]}>
      {actions.map((action, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={handlePress(action)}
          disabled={fromShop}
        >
          {shape === 'line' ? (
            <View style={[styles.lineBox, { width, height }]}> 
              <Text style={[styles.label, { fontSize }]}>{action.label}</Text>
            </View>
          ) : shape === 'line_cercle' ? (
            <View style={[styles.circleBox, { width, height, borderRadius: height / 2 }]}>  
              <Text style={[styles.label, { fontSize }]}>{action.label}</Text>
            </View>
          ) : (
            <NeomorphBox
              width={width}
              height={height}
              forceTheme={'light'}
              variant={size === 'box' ? 'circle' : desigin === 'rainbow' ? 'AI' : undefined}
              
            >
              <Text style={[styles.label, { fontSize }]}>{action.label}</Text>
            </NeomorphBox>
          )}
        </TouchableOpacity>
      ))}
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',  // ボタンをコンテナ中央に配置
    alignItems: 'center',
  },
  buttoncontainer: {
    justifyContent: 'center',  // ボタンをコンテナ中央に配置
    alignItems: 'center',
  },
  label: {
    color: '#666',
    fontSize:15,
    zIndex:5
  },
  lineBox: {
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WidgetButton;
