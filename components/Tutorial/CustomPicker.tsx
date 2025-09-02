import React, { useRef, useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Haptics from 'expo-haptics';
import GlassCard from '../ui/GlassCard';

const ITEM_HEIGHT = 40;
const VISIBLE_ITEMS = 5;

interface CustomPickerProps {
  selectedValue: number;
  onValueChange: (value: number) => void;
}

const CustomPicker: React.FC<CustomPickerProps> = ({ selectedValue, onValueChange }) => {
  const items = Array.from({length: 10}, (_,i)=>({ value: (i+1)*10, label: '単語' }));
  const scrollViewRef = useRef<ScrollView>(null);
  const confettiRef = useRef<LottieView>(null);
  const [currentIndex, setCurrentIndex] = useState(items.findIndex(item => item.value === selectedValue));

  const emojis = ['😇', '😏', '😐', '😱', '😈'];
  const segmentIndex = Math.min(Math.ceil(selectedValue / 20) - 1, emojis.length - 1);
  const currentEmoji = emojis[segmentIndex];

  useEffect(() => {
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
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      confettiRef.current?.play();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        1日の目標を決めよう！
      </Text>
      <Text style={styles.emoji}>
        {currentEmoji}
      </Text>
      <View style={styles.wrapper}>
        <GlassCard width={200} height={ITEM_HEIGHT * VISIBLE_ITEMS}>
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
                  {item.value} {item.label}
                </Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.centerHighlight} pointerEvents="none" />
        </GlassCard>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center' },
  text: { fontSize: 25, color: '#fff', marginBottom:5 },
  emoji: { fontSize: 120, color: '#fff', marginBottom:5 },
  wrapper: { position: 'relative', flexDirection: 'row', alignItems: 'center' },
  scrollContent: { paddingVertical: (VISIBLE_ITEMS * ITEM_HEIGHT) / 2 - ITEM_HEIGHT / 2 },
  itemContainer: { height: ITEM_HEIGHT, justifyContent: 'center', alignItems: 'center', width: '100%' },
  itemText: { fontSize: 16, color: '#aaa' },
  selectedText: { color: '#fff', fontWeight: 'bold' },
  centerHighlight: { position: 'absolute', top: (VISIBLE_ITEMS * ITEM_HEIGHT) / 2 - ITEM_HEIGHT / 2, left: 0, right: 0, height: ITEM_HEIGHT, borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'rgb(30, 30, 30)' },
});

export default CustomPicker;
