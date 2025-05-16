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
import { Picker } from '@react-native-picker/picker';

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


  return (
    <View style={{ width: '100%' }}>
    <Text style={styles.aegTitle}>推しの年齢を選ぼう⭐️</Text>
    <Picker
      selectedValue={String(value)} // ← ここをstringに変換
      onValueChange={(itemValue) => onChange(Number(itemValue))} 
      style={{ height: 150, width: '100%', marginBottom: 70 }} // ← marginBottom追加
      itemStyle={[styles.text, textStyle]}
    >
    {ages.map((age) => (
      <Picker.Item key={age} label={`${age}歳`} value={String(age)} />
    ))}
    </Picker>
      <Text style={styles.aegTitle}>推しの性別は！</Text>
      <View style={styles.radioContainer}>
        {['男性🚹', '女性🚺', 'どちらでもない', 'その他🦕'].map(option => (
          <TouchableOpacity
            key={option}
            style={[styles.radioButton, gender === option && styles.radioButton]}
            onPress={() => onGenderChange && onGenderChange(option)}
          >
            <View style={styles.radioOuter}>
              {gender === option && <View style={styles.radioInner} />}
            </View>
            <Text style={[styles.radioLabel, gender === option && styles.radioButton]}>
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 18,           // ← 読みやすくアップ
    color: '#333',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,    // ← 上下に余白
    paddingHorizontal: 8,  // ← 左右にもスペース
    marginBottom: 4,        // ← ボタン同士の間隔
  },
  aegTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: Colors.gray[900],
    textAlign: 'center',
    marginBottom: 12, // 追加して少し余白つける
  },
});

export default AgePicker;