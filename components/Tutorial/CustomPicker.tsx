import React, { useRef, useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import NeomorphBox from '../NeomorphBox';
import LottieView from 'lottie-react-native';
import * as Haptics from 'expo-haptics';

interface CustomPickerProps {
  items: { value: number; label: string }[];
  selectedValue: number;
  onValueChange: (value: number) => void;
}
const { width: SCREEN_WIDTH } = Dimensions.get('window');


const ITEM_HEIGHT = 40;
const VISIBLE_ITEMS = 5;

const CustomPicker: React.FC<CustomPickerProps> = ({ items, selectedValue, onValueChange }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const confettiRef = useRef<LottieView>(null);
  const [currentIndex, setCurrentIndex] = useState(items.findIndex(item => item.value === selectedValue));

  useEffect(() => {
    // 初期位置を適切に設定
    if (scrollViewRef.current && currentIndex !== -1) {
      setTimeout(() => {
        scrollViewRef.current?.scrollTo({ y: currentIndex * ITEM_HEIGHT, animated: false });
      }, 100);
    }
  }, [currentIndex]);

  const handleScrollEnd = async (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);

    if (index >= 0 && index < items.length) {
      setCurrentIndex(index);
      onValueChange(items[index].value);

      // Hapticフィードバック
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

      // スクロール完了時にアニメーションを再生
      if (confettiRef.current) {
        confettiRef.current.play();
      }
    }
  };

  return (
    <View style={styles.container}>
          <View style={styles.neomorphBox}
          >
          <Text style={styles.text}>
            1日の学習単語量を決めよう！
          </Text>
        </View>
      <View style={styles.wrapper}>
        {/* NeomorphBox でピッカー部分を囲む */}
        <NeomorphBox
          width={200}
          height={ITEM_HEIGHT * VISIBLE_ITEMS}
          forceTheme={'light'}
        >
          <ScrollView
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            onMomentumScrollEnd={handleScrollEnd}
            contentContainerStyle={styles.scrollContent}
          >
            {items.map((item, index) => (
              <View key={index} style={styles.itemContainer}>
                <Text style={[styles.itemText, item.value === selectedValue && styles.selectedText]}>
                  {item.value*2} {item.label} ～ {item.value *2  *5} {item.label}
                </Text>
              </View>
            ))}
          </ScrollView>
          {/* 中央のハイライト */}
          <View style={styles.centerHighlight} pointerEvents="none" />
        </NeomorphBox>

        {/* Lottieアニメーション（右側に配置） */}
        <LottieView
          ref={confettiRef}
          source={require('../../assets/lottie/scroll.json')}
          autoPlay={true}
          loop={true}
          style={styles.lottieStyle}
          enableMergePathsAndroidForKitKatAndAbove
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 25, // 文字を大きくする
    color: '#666',
    marginBottom:60
  },
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  neomorphBox: {
    marginBottom: 20, // マージンボトムを追加
  },
  scrollContent: {
    paddingVertical: (VISIBLE_ITEMS * ITEM_HEIGHT) / 2 - ITEM_HEIGHT / 2, // 上下に余白を追加
  },
  itemContainer: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  itemText: {
    fontSize: 16,
    color: '#999',
  },
  selectedText: {
    color: '#000',
    fontWeight: 'bold',
  },
  centerHighlight: {
    position: 'absolute',
    top: (VISIBLE_ITEMS * ITEM_HEIGHT) / 2 - ITEM_HEIGHT / 2,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgb(0, 102, 255)',
  },
  lottieStyle: {
    position: 'absolute',
    right: -50, // 右側に配置（調整可能）
    width: 80,
    height: 80,
    transform: [{ scaleY: -1 }], // 上下反転
  },
});

export default CustomPicker;
