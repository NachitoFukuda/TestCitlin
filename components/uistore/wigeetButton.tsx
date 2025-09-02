import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Dimensions, Animated } from 'react-native';
import { useRouter } from 'expo-router';
import NeomorphBox from '../ui/NeomorphBox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

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
  // Animated value for cross-fade between shadowed and normal text
  const fadeAnim = useRef(new Animated.Value(0)).current;
  // Debug: log fadeAnim values to confirm animation is running
  useEffect(() => {
    const id = fadeAnim.addListener(({ value }) => {
    });
    return () => {
      fadeAnim.removeListener(id);
    };
  }, []);
  // Interpolate text color between two colors in a loop
  const colorAnim = fadeAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['rgb(0, 255, 208)', '#666', 'rgb(0, 255, 208)'], // red → blue → red
  });
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [fadeAnim]);

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
            <LinearGradient
              colors={['rgb(0, 81, 255)', 'rgb(69, 153, 255)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.lineBox,
                { width, height },
                // Subtle shadow
                {
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 2, // for Android
                },
              ]}
            >
              {action.label === 'note' ? (
                <Icon name="notebook-outline" size={fontSize} color="#666" />
              ) : (
                <Text style={[styles.label, { fontSize, color: '#ffffff' }]}>
                  {action.label}
                </Text>
              )}
            </LinearGradient>
          ) : shape === 'line_cercle' ? (
            (desigin === 'rainbow' ? (
              <LinearGradient
                colors={['#0000ff', '#add8e6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.circleBox, { width, height, borderRadius: height / 2 }]}
              >
                {action.label === 'note' ? (
                  <Icon name="notebook-outline" size={fontSize} color="#666" />
                ) : (
                  <Text
                    style={[
                      styles.label,
                      { fontSize, color: '#666' },
                    ]}
                  >
                    {action.label}
                  </Text>
                )}
              </LinearGradient>
            ) : (
              <View style={[styles.circleBox, { width, height, borderRadius: height / 2 }]}>
                {action.label === 'note' ? (
                  <Icon name="notebook-outline" size={fontSize} color="#666" />
                ) : (
                  <Text
                    style={[
                      styles.label,
                      { fontSize },
                    ]}
                  >
                    {action.label}
                  </Text>
                )}
              </View>
            ))
          ) : (
            <NeomorphBox
              width={width}
              height={height}
              forceTheme={'light'}
              variant={size === 'box' ? 'circle' : desigin === 'rainbow' ? 'AI' : undefined}
              
            >
              {action.label === 'note' ? (
                <Icon name="notebook-outline" size={fontSize} color="#777" />
              ) : (size === 'box' || desigin === 'rainbow') ? (
                <Text
                  style={[
                    { fontSize },
                    { color: '#666' },
                    { zIndex:6}
                  ]}
                >
                  {action.label}
                </Text>
              ) : (
                <Animated.Text
                  style={[
                    { fontSize },
                    { color: colorAnim },
                  ]}
                >
                  {action.label}
                </Animated.Text>
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
    fontSize:15,
    zIndex:5
  },
  lineBox: {
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WidgetButton;
