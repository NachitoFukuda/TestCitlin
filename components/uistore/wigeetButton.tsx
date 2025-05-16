import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import NeomorphBox from '../ui/NeomorphBox';

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
  size?: 'long' | 'short';
}
  const screenWidth = Dimensions.get('window').width;
const WidgetButton: React.FC<WidgetButtonProps> = ({
  actions = [],
  fromShop = false,
  size = 'short',
}) => {
  const router = useRouter();
  // 初期サイズを定義 (size: 'long' の場合は 2 倍)
  const baseWidth = fromShop ? screenWidth * 0.2 : screenWidth * 0.4;
  const width = size === 'long' ? baseWidth * 2 : baseWidth;
  const height = fromShop ? screenWidth * 0.09   : screenWidth * 0.15;
  const fontSize = fromShop ?   12 : 20;

  // size に応じたコンテナ幅
  const containerWidth = size === 'long'
    ? screenWidth * 1
    : screenWidth * 0.5;

  const handlePress = (action: Action) => () => {
    // コールバックがあれば先に実行
    if (action.onPress) {
      action.onPress();
    }
    // route が設定されていれば画面遷移
    if (action.route) {
      router.push(action.route as any);
    }
  };

  return (
    <View style={[styles.container, { width: containerWidth }]}>
      {actions.map((action, idx) => (
        <TouchableOpacity
          key={idx}
          onPress={handlePress(action)}
          disabled={fromShop}
        >
            <NeomorphBox
              width={width}
              height={height}
              forceTheme={'light'}
            >
                <Text style={[styles.label, { fontSize }]}>{action.label}</Text>
            </NeomorphBox>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',  // ボタンをコンテナ中央に配置
    alignItems: 'center',
  },
  label: {
    color: '#666',
  },
});

export default WidgetButton;
