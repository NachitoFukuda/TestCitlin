import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import Colors from '@/constants/Colors';

export interface AgePickerProps {
    value: number;
    onChange: (age: number) => void;
    minAge?: number;
    maxAge?: number;
    itemHeight?: number;
    style?: ViewStyle;
    textStyle?: TextStyle;
    gender?: string;
    onGenderChange?: (gender: string) => void;
}



const AgePicker: React.FC<AgePickerProps> = ({
  value,
  onChange,
  minAge = 10,
  maxAge = 100,
  itemHeight = 40,
  style,
  textStyle,
  gender,
  onGenderChange,
}) => {
  const ages = Array.from({ length: maxAge - minAge + 1 }, (_, i) => minAge + i);
  const flatListRef = useRef<FlatList<number>>(null);
  const initialRef = useRef(true);

  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
      const index = ages.indexOf(value);
      if (index >= 0 && flatListRef.current) {
        flatListRef.current.scrollToIndex({ index, animated: false, viewPosition: 0.5 });
      }
    }
  }, [ages, value]);

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / itemHeight);
    const newValue = ages[index];
    if (newValue !== value) {
      onChange(newValue);
    }
  };

  return (
    <View style={{ width: '100%' }}>

      <View style={[styles.container, { height: itemHeight * 5 }, style]}>
        {/* 既存の FlatList と selection ビュー */}
        <FlatList
          ref={flatListRef}
          data={ages}
          keyExtractor={(item) => item.toString()}
          style={{ width: '100%' }}
          contentContainerStyle={{
            paddingTop: itemHeight * 2,
            paddingBottom: itemHeight * 2,
          }}
          showsVerticalScrollIndicator={false}
          snapToInterval={itemHeight}
          snapToAlignment="center"
          bounces={false}
          overScrollMode="never"
          decelerationRate="fast"
          onMomentumScrollEnd={handleScrollEnd}
          getItemLayout={(_, index) => ({
            length: itemHeight,
            offset: itemHeight * index,
            index,
          })}
          renderItem={({ item }) => {
            const isSelected = item === value;
            return (
              <View style={{ height: itemHeight, justifyContent: 'center', alignItems: 'center' }}>
                <Text
                  style={[
                    styles.text,
                    textStyle,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {item}歳
                </Text>
              </View>
            );
          }}
        />
        <View
          pointerEvents="none"
          style={[
            styles.selection,
            { top: itemHeight * 2, height: itemHeight },
          ]}
        />
      </View>
      <Text style={styles.radioTitle}>性別を選択してください</Text>
      <View style={styles.radioContainer}>
        {['男性', '女性', 'どちらでもない', 'その他'].map(option => (
          <TouchableOpacity
            key={option}
            style={[styles.radioButton, gender === option && styles.radioButtonSelected]}
            onPress={() => onGenderChange && onGenderChange(option)}
          >
            <View style={styles.radioOuter}>
              {gender === option && <View style={styles.radioInner} />}
            </View>
            <Text style={[styles.radioLabel, gender === option && styles.radioLabelSelected]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#999',
  },
  selectedText: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
  },
  selection: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderTopColor: '#ddd',
    borderBottomColor: '#ddd',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  radioTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginTop: 16,
    marginBottom: 8,
    color: Colors.gray[900],
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioOuter: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#333',
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
  },
  radioButtonSelected: {},
  radioLabelSelected: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AgePicker;