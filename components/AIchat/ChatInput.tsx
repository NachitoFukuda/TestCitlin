// app/components/ChatInput.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ChatInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ value, onChangeText, onSend }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          'rgba(0, 179, 255, 0.26)',
          'rgba(255, 0, 234, 0.26)',
          'rgba(255, 196, 0, 0.26)'
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientInputWrapper}
      >
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder="メッセージを入力"
          returnKeyType="send"
          onSubmitEditing={onSend}
          placeholderTextColor="#666"
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF9',
    width: '90%',
  },
  gradientInputWrapper: {
    flex: 1,
    borderRadius: 20,
    marginRight: 10,
    // 内側の TextInput にスペースを与える
    padding: 1,
  },
  inputGradient: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
  },
});

export default ChatInput;