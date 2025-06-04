import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import NeomorphBox from '../ui/NeomorphBox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Action = {
  label: string;
  onPress?: () => void;
  route?: string;
};

interface WidgetButtonProps {
  actions: Action[];
  fromShop?: boolean;
  size?: 'long' | 'short' | 'box'| 'minibox';
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
    : size === 'minibox'
    ? fromShop 
      ? screenWidth * 0.125 *0.9
      : screenWidth * 0.2 *0.9
    : baseWidth;
  const height = size === 'box'
    ? fromShop
      ? screenWidth * 0.25
      : screenWidth * 0.4
    : size === 'minibox'
    ? fromShop 
      ? screenWidth * 0.125 *0.9
      : screenWidth * 0.2 *0.9
    : fromShop 
    ? screenWidth * 0.09 
    : screenWidth * 0.15;
  const fontSize = size === 'minibox' ? 40 : fromShop ? 12 : 20;

  // size に応じたコンテナ幅
  const containerWidth = size === 'box'
    ? screenWidth * 0.5
    : size === 'long'
    ? screenWidth * 1
    : size === 'minibox'
    ? screenWidth * 0.25
    : screenWidth * 0.5;

  const containerHeight = size === 'box'
    ? screenWidth * 0.5
    : size === 'long'
    ? screenWidth * 0.25
    : size === 'minibox'
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
              {action.label === 'note' ? (
                <Icon name="notebook-outline" size={fontSize} color="#666" />
              ) : (
                <Text style={[styles.label, { fontSize }]}>{action.label}</Text>
              )}
            </View>
          ) : shape === 'line_cercle' ? (
            <View style={[styles.circleBox, { width, height, borderRadius: height / 2 }]}>  
              {action.label === 'note' ? (
                <Icon name="notebook-outline" size={fontSize} color="#666" />
              ) : (
                <Text style={[styles.label, { fontSize }]}>{action.label}</Text>
              )}
            </View>
          ) : (
            <NeomorphBox
              width={width}
              height={height}
              forceTheme={'light'}
              variant={size === 'box' ? 'circle' : desigin === 'rainbow' ? 'AI' : undefined}
              
            >
              {action.label === 'note' ? (
                <Icon name="notebook-outline" size={fontSize} color="#777" />
              ) : (
                <Text style={[styles.label, { fontSize }]}>{action.label}</Text>
              )}
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
