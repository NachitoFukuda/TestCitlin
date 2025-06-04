import React, { useState, useMemo } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import * as Haptics from 'expo-haptics';

interface KeyboardExampleProps {
  onKeyPress: (key: string) => void;
  userAnswer: string; // 親から受け取るユーザーの入力
  forceTheme?: 'light' | 'dark'; // 追加：テーマを指定するプロパティ
}

const screenWidth = Dimensions.get('window').width;

const KeyboardExample: React.FC<KeyboardExampleProps> = ({ onKeyPress, userAnswer, forceTheme = 'light' }) => {
  const [isShiftActive, setIsShiftActive] = useState(false);
  const [isNumPadActive, setIsNumPadActive] = useState(false); // 数字と記号のキーボードを切り替える状態

  // forceTheme に応じた色設定
  const isDark = forceTheme === 'dark';
  const themeColors = useMemo(() => ({
    keyboardWrapperBg: isDark ? '#303030' : '#E3E5F2',
    borderColor: isDark ? '#555' : '#ddd',
    inputDisplayBg: isDark ? '#424242' : '#E3E5F2',
    inputTextColor: isDark ? '#fff' : '#666',
    keyBg: isDark ? '#666' : '#eee',
    keyTextColor: isDark ? '#fff' : '#666', // キーの文字色は固定の場合
  }), [isDark]);

  const rows: string[][] = isNumPadActive
    ? [ // 数字と記号のキーボード
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['!', '.', ',', '$', '%', "'", '&', '*', '(', ')'],
        ['↑', '-', '=', '_', '+', '/', '?', 'backspace'],
        ["abc", ' ', 'submit'],
      ]
    : [ // アルファベットのキーボード
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['↑', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
        ["123", ' ', 'submit'],
      ];

      const handleKeyPress = (key: string) => {
        if (key === "submit") {
          // Trigger haptic feedback only for the submit key
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
      
        if (key === '↑') {
          setIsShiftActive(!isShiftActive);
        } else if (key === "123" || key === "abc") {
          // "123" ボタンが押されたときに数字と記号のキーボードに切り替え
          setIsNumPadActive(!isNumPadActive);
        } else {
          const outputKey =
            isShiftActive && key !== 'backspace' && key !== 'submit' && key !== ' '
              ? key.toUpperCase()
              : key;
          onKeyPress(outputKey);
          setIsShiftActive(false);
        }
      };

  return (
    <View style={[styles.keyboardWrapper, { backgroundColor: themeColors.keyboardWrapperBg, borderTopColor: themeColors.borderColor }]}>
      <View style={[styles.inputDisplay, { backgroundColor: themeColors.inputDisplayBg, borderBottomColor: themeColors.borderColor }]}>
        <Text style={[styles.inputText, { color: themeColors.inputTextColor }]}>{userAnswer}</Text>
      </View>
      <View style={styles.keyboardContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((keyboardKey) => (
              <TouchableOpacity
                key={keyboardKey}
                style={[
                  styles.key,
                  keyboardKey === ' ' ? styles.spaceKey : {},
                  keyboardKey === 'backspace' ? styles.backspaceKey : {},
                  keyboardKey === 'submit' ? styles.submitKey : {},
                  { backgroundColor: themeColors.keyBg },
                ]}
                onPress={() => handleKeyPress(keyboardKey)}
                activeOpacity={1} // フィードバックを無効化
              >
                <Text style={[styles.keyText, { color: themeColors.keyTextColor }]}>
                  {keyboardKey === ' ' ? 'Space' : keyboardKey === 'backspace' ? '⌫' : keyboardKey === 'submit' ? 'Enter' : isShiftActive ? keyboardKey.toUpperCase() : keyboardKey}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardWrapper: {
    width: screenWidth,
    borderTopWidth: 1,
  },
  inputDisplay: {
    width: '90%', // 少し幅を狭めて見た目を調整
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // 丸みを追加
    alignSelf: 'center', // 中央配置
    marginBottom: 0, // 余白を追加
  },  
  inputText: {
    fontSize: 18,
    textAlign: 'center',
  },
  keyboardContainer: {
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  key: {
    flex: 1,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 1,
    borderRadius: 5,
  },
  spaceKey: {
    flex: 3,
  },
  backspaceKey: {
    flex: 1.5,
  },
  submitKey: {
    flex: 2,
    backgroundColor: '#007BFF',
  },
  keyText: {
    fontSize: 18,
  },
});

export default KeyboardExample;
