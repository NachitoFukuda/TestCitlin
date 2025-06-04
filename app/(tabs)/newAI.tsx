// StrictMode やリマウントによる二重実行を防ぐモジュールスコープのフラグ
import React, { useState} from 'react';
import { UIManager } from 'react-native';
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
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
  Dimensions,
  ActivityIndicator,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';
import { Plus, Minus, Image as ImageIcon } from 'lucide-react-native';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { generateUniqueId } from '../../utils/helpers';
import { useCharacterPrompt } from '@/hooks/useCharacterPrompt';
import NeomorphBox from '@/components/ui/NeomorphBox';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

const characterQuestions = [
  {
    icon: '🗣',
    label: 'キャラの名前',
    question: 'このキャラの名前は？',
  },
  {
    icon: '👋',
    label: 'あなたの名前・ニックネーム',
    question: 'このキャラに、あなたはどう呼ばれたいですか？',
    sampleAnswers: ['先生', '先輩', 'お姉さん', 'お兄さん', 'マスター', 'ボス'],
  },
  {
    icon: '💬',
    label: '話し方の特徴（口調）',
    question: 'このキャラはどんな話し方をしますか？',
    sampleAnswers: ['丁寧で落ち着いた話し方', '子供っぽく元気', '皮肉まじりで冷静'],
  },
  {
    icon: '🎭',
    label: '語尾の特徴',
    question: 'このキャラの語尾の特徴は？',
    sampleAnswers: ['です・ます', 'だよ・だね', 'わ・わよ', 'にゃ・にゃん', '～っす', '～でござる'],
  },
  {
    icon: '😼',
    label: '性格・雰囲気',
    question: 'このキャラの性格を一言で言うと？',
    sampleAnswers: ['明るく元気', 'クールで冷たいけど優しい', 'ツンデレで素直じゃない'],
  },
  {
    icon: '📚',
    label: '英語を教えるときの接し方',
    question: 'このキャラは、英語を教えるときにどんな雰囲気で接してくれますか？',
    sampleAnswers: ['やさしく説明してくれる', 'ドSに詰めてくる', '無言でヒントだけ出す'],
  },
  {
    icon: '🎉',
    label: '褒めるときの言い方',
    question: 'このキャラは正解したとき、どんなふうに褒めてくれますか？',
    sampleAnswers: ['すごーい！', 'ふふ、悪くないわね', 'よくできました！'],
  },
  {
    icon: '🤔',
    label: '間違えたときの反応',
    question: 'このキャラは、あなたが英語を間違えたときにどんな反応をしますか？',
    sampleAnswers: ['あらあら、もう一回やってみて？', 'バカ！違うに決まってるでしょ', '惜しい！もう少し考えてみよう'],
  },
];

const boxWidth = Dimensions.get('window').width * 0.9;
const inputWidth = Dimensions.get('window').width * 0.7;

export default function CharacterFormScreen() {
  const router = useRouter();
  const { createSession } = useSessionStorage();
  const { generateCharacterPrompt } = useCharacterPrompt();
  const [answers, setAnswers] = useState<string[]>(Array(characterQuestions.length).fill(''));
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState<string>('未選択');
  const [age, setAge] = useState<string>('20');
  const [expandedQuestions, setExpandedQuestions] = useState<number[]>([]);
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);

  const toggleQuestion = (idx: number) => {
    setExpandedQuestions(prev => 
      prev.includes(idx) 
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };

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
      imageUri, // imageUri
      undefined, // parentPrompt
    );
    await createSession({
      id: id,
      personality,
      nickname: answers[0],
      prompt: charPrompt,
      imageUri: imageUri,
      messages: [],
      createdAt: Date.now(),
      lastModified: Date.now(),
    });
    router.push({ pathname: '/AIChat', params: { chatId: id } });
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('申し訳ありません', '画像を選択するにはカメラロールへのアクセス許可が必要です。');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#E3E5F2' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={0}
    >
      <ScrollView contentContainerStyle={{ ...styles.container, paddingBottom: 16 }}>
        <Text style={styles.title}>推しを作ろう！</Text>

        {/* 画像選択 */}
        <NeomorphBox
          width={boxWidth}
          height={250}
          style={styles.neomorphBox}
          forceTheme="light"
        >
          <Text style={styles.bigLabel}>🖼️ 推しの顔</Text>
          <TouchableOpacity 
            style={styles.imagePickerButton} 
            onPress={pickImage}
          >
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.selectedImage} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <ImageIcon size={40} color="#666" />
                <Text style={styles.imagePlaceholderText}>タップして画像を選択</Text>
              </View>
            )}
          </TouchableOpacity>
        </NeomorphBox>

        {/* 性別選択 */}
        <NeomorphBox
          width={boxWidth}
          height={200}
          style={styles.neomorphBox}
          forceTheme="light"
        >
          <Text style={styles.bigLabel}>👤 推しの性別</Text>
          <View style={[styles.selectionContainer, { width: inputWidth, alignSelf: 'center' }]}>
            <TouchableOpacity
              style={[styles.selectionButton, gender === '男性' && styles.selectedButton]}
              onPress={() => setGender('男性')}
            >
              <Text style={[styles.selectionButtonText, gender === '男性' && styles.selectedButtonText]}>男性</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.selectionButton, gender === '女性' && styles.selectedButton]}
              onPress={() => setGender('女性')}
            >
              <Text style={[styles.selectionButtonText, gender === '女性' && styles.selectedButtonText]}>女性</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.selectionButton, gender === 'その他' && styles.selectedButton]}
              onPress={() => setGender('その他')}
            >
              <Text style={[styles.selectionButtonText, gender === 'その他' && styles.selectedButtonText]}>その他</Text>
            </TouchableOpacity>
          </View>
        </NeomorphBox>

        {/* 年齢選択 */}
        <NeomorphBox
          width={boxWidth}
          height={200}
          style={styles.neomorphBox}
          forceTheme="light"
        >
          <Text style={styles.bigLabel}>🎂 推しの年齢</Text>
          <View style={[styles.pickerContainer, { width: inputWidth, alignSelf: 'center' }]}>
            <Picker
              selectedValue={age}
              onValueChange={(itemValue) => setAge(itemValue)}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              {Array.from({ length: 83 }, (_, i) => i + 5).map((age) => (
                <Picker.Item
                  key={age}
                  label={`${age}歳`}
                  value={age.toString()}
                  style={styles.pickerItem}
                />
              ))}
            </Picker>
          </View>
        </NeomorphBox>

        {characterQuestions.map((q, idx) => (
          <NeomorphBox
            key={idx}
            width={boxWidth}
            height={expandedQuestions.includes(idx) ? 250 : 150}
            style={styles.neomorphBox}
            forceTheme="light"
          >
            <Text style={styles.bigLabel}>{q.icon} {q.label}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={answers[idx]}
                onChangeText={text => handleChange(text, idx)}
                placeholder="ここに入力..."
                multiline
              />
              <TouchableOpacity
                style={styles.expandButton}
                onPress={() => toggleQuestion(idx)}
              >
                {expandedQuestions.includes(idx) ? (
                  <Minus size={20} color="#666" />
                ) : (
                  <Plus size={20} color="#666" />
                )}
              </TouchableOpacity>
            </View>
            {expandedQuestions.includes(idx) && q.sampleAnswers && q.sampleAnswers.length > 0 && (
              <View style={styles.sampleAnswersContainer}>
                {q.sampleAnswers.map((sample, sampleIdx) => (
                  <TouchableOpacity
                    key={sampleIdx}
                    style={styles.sampleAnswerButton}
                    onPress={() => handleChange(sample, idx)}
                  >
                    <Text style={styles.sampleAnswerText}>{sample}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </NeomorphBox>
        ))}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>推しを作る！</Text>
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
    backgroundColor: '#E3E5F2',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#666',
    width: boxWidth,
  },
  bigLabel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#666',
    textAlign: 'center',
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
    width: '100%',
  },
  neomorphBox: {
    marginBottom: 32,
    backgroundColor: '#E3E5F2',
    borderRadius: 12,
    padding: 16,
    width: boxWidth,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#666',
    textAlign: 'left',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  question: {
    fontSize: 15,
    marginBottom: 8,
    color: '#444',
    textAlign: 'left',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    gap: 8,
  },
  input: {
    flex: 1,
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
    width: boxWidth,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
    justifyContent: 'center',
  },
  selectionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F8FAFF',
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: 80,
  },
  selectedButton: {
    backgroundColor: '#4F8EF7',
    borderColor: '#4F8EF7',
  },
  selectionButtonText: {
    fontSize: 14,
    color: '#333',
  },
  selectedButtonText: {
    color: '#fff',
  },
  pickerContainer: {
    backgroundColor: '#F8FAFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 8,
    overflow: 'hidden',
    height: 200,
  },
  picker: {
    height: 200,
    width: '100%',
    marginTop: Platform.OS === 'ios' ? -8 : 0,
  },
  pickerItem: {
    fontSize: 18,
    textAlign: 'center',
    height: 200,
    lineHeight: 200,
  },
  sampleAnswersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  sampleAnswerButton: {
    backgroundColor: '#F0F2F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  sampleAnswerText: {
    fontSize: 13,
    color: '#666',
  },
  expandButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F0F2F5',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 8,
  },
  imagePickerButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F8FAFF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  imagePlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholderText: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
  },
});
