// StrictMode やリマウントによる二重実行を防ぐモジュールスコープのフラグ
let hasSubmitted = false;
import React, { useState, useEffect, useRef } from 'react';
import { LayoutAnimation, UIManager } from 'react-native';
// Android で LayoutAnimation を有効化
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
import { useFocusEffect } from '@react-navigation/native';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  Alert,
  Image,
  Button,
  Dimensions,
  Keyboard,
  ActivityIndicator
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { X, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import Colors from '@/constants/Colors';
import { defaultPersonalities } from '../../constants/personalities';
import { Personality } from '@/types';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { generateUniqueId } from '../../utils/helpers';
import AgePicker from '@/components/AIchat/AgePicker';
import PersonalityPicker from '@/components/AIchat/PersonalityPicker';
import CatchphraseTicEditor from '@/components/AIchat/CatchphraseTicEditor';
import { useCharacterPrompt } from '@/hooks/useCharacterPrompt';
import NeomorphBox from '@/components/ui/NeomorphBox';

const characterQuestions = [
  {
    icon: '🗣',
    label: 'キャラの名前',
    question: 'このキャラの名前は？',
    usage: 'プロンプト冒頭・呼びかけ・一人称整理に使う',
  },
  {
    icon: '💬',
    label: '話し方の特徴（口調）',
    question: 'このキャラはどんな話し方をしますか？\n（例：丁寧で落ち着いた話し方／子供っぽく元気／皮肉まじりで冷静）',
    usage: 'GPTのセリフ生成の全体トーンを制御',
  },
  {
    icon: '😼',
    label: '性格・雰囲気',
    question: 'このキャラの性格を一言で言うと？\n（例：明るく元気／クールで冷たいけど優しい／ツンデレで素直じゃない）',
    usage: 'GPTの反応・感情表現の基礎になる',
  },
  {
    icon: '📚',
    label: '英語を教えるときの接し方（teaching_style）',
    question: 'このキャラは、英語を教えるときにどんな雰囲気で接してくれますか？\n（例：やさしく説明してくれる／ドSに詰めてくる／無言でヒントだけ出す）',
    usage: '指導スタンスをコントロール（冷静？熱血？距離感ある？）',
  },
  {
    icon: '🎉',
    label: '褒めるときの言い方',
    question: 'このキャラは正解したとき、どんなふうに褒めてくれますか？\n（例：「すごーい！」「……ふふ、悪くないわね」）',
    usage: 'ユーザーへの"ご褒美セリフ"の生成用テンプレ',
  },
  {
    icon: '🤔',
    label: '間違えたときの反応',
    question: 'このキャラは、あなたが英語を間違えたときにどんな反応をしますか？\n（例：「あらあら、もう一回やってみて？」／「バカ！違うに決まってるでしょ」）',
    usage: '正誤フィードバックの演出。AIの"ムード調整弁"',
  },
];

export default function CharacterFormScreen() {
  const router = useRouter();
  const { createSession } = useSessionStorage();
  const { generateCharacterPrompt } = useCharacterPrompt();
  const [answers, setAnswers] = useState<string[]>(Array(characterQuestions.length).fill(''));
  const [isLoading, setIsLoading] = useState(false);

  // 画面がマウントされるたびにローディングをリセット
  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleChange = (text: string, idx: number) => {
    setAnswers(prev => {
      const newArr = [...prev];
      newArr[idx] = text;
      return newArr;
    });
  };

  const handleSubmit = async () => {
    if (answers.some(ans => !ans.trim())) {
      Alert.alert('未入力の項目があります');
      return;
    }
    setIsLoading(true);
    const id = generateUniqueId();
    // personalityオブジェクトを個別プロパティで作成
    const personality = {
      id,
      nickname: answers[0],
      traits: [],
      catchphrases: [],
      verbalTics: [],
      name: answers[0],
      tone: answers[1],
      character: answers[2],
      teaching_style: answers[3],
      praise: answers[4],
      mistake_reaction: answers[5],
    };
    const charPrompt = await generateCharacterPrompt(
      personality,
      id, // chatId
      undefined, // imageUri
      undefined, // parentPrompt
    );
    await createSession({
      id: id,
      personality,
      nickname: answers[0],
      prompt: charPrompt,
      imageUri: null,
      messages: [],
      createdAt: Date.now(),
      lastModified: Date.now(),
    });
    router.push({ pathname: '/AIChat', params: { chatId: id } });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#EBF3FF' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={0}
    >
      <ScrollView contentContainerStyle={{ ...styles.container, paddingBottom: 16 }}>
        <Text style={styles.title}>キャラクター作成フォーム</Text>
        {characterQuestions.map((q, idx) => (
          <View key={idx} style={styles.questionBlock}>
            <Text style={styles.label}>{q.icon}【{q.label}】</Text>
            <Text style={styles.question}>{q.question}</Text>
            <TextInput
              style={styles.input}
              value={answers[idx]}
              onChangeText={text => handleChange(text, idx)}
              placeholder="ここに入力..."
              multiline
            />
            <Text style={styles.usage}>用途：{q.usage}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>送信</Text>
        </TouchableOpacity>
      </ScrollView>
      {isLoading && (
        <View style={{
          position: 'absolute', left: 0, top: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center', zIndex: 100,
        }}>
          <View style={{ backgroundColor: '#fff', padding: 32, borderRadius: 16, alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#4F8EF7" style={{ marginBottom: 16 }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>推し作成中…</Text>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 60,
    marginTop: 100,
    backgroundColor: '#EBF3FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  questionBlock: {
    marginBottom: 32,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  question: {
    fontSize: 15,
    marginBottom: 8,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#F8FAFF',
    minHeight: 40,
    marginBottom: 8,
  },
  usage: {
    fontSize: 12,
    color: '#888',
  },
  submitButton: {
    backgroundColor: '#4F8EF7',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
