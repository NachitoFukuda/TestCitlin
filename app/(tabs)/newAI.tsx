// StrictMode やリマウントによる二重実行を防ぐモジュールスコープのフラグ
import React, { useState} from 'react';
import { UIManager, Platform } from 'react-native';
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
  Alert,
  Dimensions,
  ActivityIndicator,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { Plus, Minus, Image as ImageIcon } from 'lucide-react-native';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { generateUniqueId } from '../../utils/helpers';
import { useCharacterPrompt } from '@/hooks/useCharacterPrompt';
import NeomorphBox from '@/components/ui/NeomorphBox';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rdb } from '../../firebaseConfig';

import { ref as dbRef, onValue, off, get, set as dbSet } from 'firebase/database';

// ---- Chat listing helper (prompto/*) ----
type ChatOption = { id: string; name: string };
async function listChats(): Promise<ChatOption[]> {
  try {
    const snap = await get(dbRef(rdb, 'prompto'));
    const items: ChatOption[] = [];
    if (snap.exists()) {
      snap.forEach(child => {
        const v = child.val();
        const id = child.key as string;
        if (id && v && typeof v === 'object' && v.chatName) {
          items.push({ id, name: String(v.chatName) });
        }
      });
    }
    return items;
  } catch (e) {
    console.warn('[newAI] listChats error:', e);
    return [];
  }
}
// -------------------------------------------
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

  // テンプレートモーダル制御とプリセット
  const [showTemplateModal, setShowTemplateModal] = useState(false); // 初期は閉じておく
  type Template = {
    title: string;
    subtitle: string;
    avatar?: string; // 画像URL (任意)
    gender: string;
    age: string; // Pickerがstringなので文字列
    answers: string[]; // characterQuestionsと同じ順番で
  };
  const [templates, setTemplates] = useState<Template[]>([]);
  const [showStartChoice, setShowStartChoice] = useState(true); // 最初の選択モーダル
  const [chatOptions, setChatOptions] = useState<ChatOption[]>([]);

  // 画面がフォーカスされるたびに選択モーダルを表示
  useFocusEffect(
    React.useCallback(() => {
      // 画面がフォーカスされるたびに選択モーダルを表示
      setShowStartChoice(true);
      // テンプレ一覧はフォーカス時は閉じておく（必要なときだけ開く）
      setShowTemplateModal(false);
      return () => {};
    }, [])
  );



  // テンプレート適用: 軽量版（プロンプトやセッション生成せず、入力欄反映＋AIChat遷移のみ）
  const applyTemplate = async (tpl: Template) => {
    // 入力欄は見た目用に反映（戻って修正できるように）
    const filled = Array.from({ length: characterQuestions.length }, (_, i) => tpl.answers[i] ?? '');
    setAnswers(filled);
    setGender(tpl.gender);
    setAge(tpl.age);

    // テンプレートに対応したID（テンプレ名のスラッグ + ユニークID）
    const base = tpl.title.replace(/\s+/g, '').toLowerCase();
    const id = `${base}_${generateUniqueId()}`;

    // RTDB に即保存して、ChatList/他画面からも参照できるようにする
    try {
      await dbSet(dbRef(rdb, `prompto/${id}`), {
        prompt: '',
        chatName: tpl.title || 'AI Chat',
        savedAt: Date.now(),
      });
    } catch (e) {
      console.warn('[newAI][applyTemplate] RTDB save failed', e);
    }

    // AsyncStorage にも即保存（ChatList の抽出条件: @chat_prompt:{id} の存在）
    try {
      const storedName = tpl.title?.trim() ? tpl.title.trim() : 'AI Chat';
      const storedPrompt = '';
      await AsyncStorage.multiSet([
        [`@chat_name:${id}`, tpl.title || 'AI Chat'],
        [`@chat_prompt:${id}`, ''],              // 軽量フローは空文字でOK
        [`@chat_template:${id}`, ''], 
      ]);
      if (tpl.avatar) {
        await AsyncStorage.setItem(`@chat_image:${id}`, tpl.avatar);
      }
    } catch (e) {
      console.warn('[newAI][applyTemplate] AsyncStorage save failed', e);
    }

    // プロンプトやセッションは作らず、直接 AIChat へ遷移
    setShowTemplateModal(false);
    router.push({ pathname: '/AIChat', params: { chatId: id } });
  };

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

  // モーダルが閉じたら必ずローディング終了
  React.useEffect(() => {
    if (!showStartChoice) setIsLoading(false);
  }, [showStartChoice]);

  React.useEffect(() => {
    if (!showTemplateModal) setIsLoading(false);
  }, [showTemplateModal]);

  // 一度だけchatNamesを取得してログ
  React.useEffect(() => {
    (async () => {
      const items = await listChats();
      console.log('[newAI] Chats under /prompto:', items);
    })();
  }, []);

  React.useEffect(() => {
    const tplRef = dbRef(rdb, 'aiTemplates');
    const unsubscribe = onValue(tplRef, (snap) => {
      const val = snap.val();
      let list: any[] = [];
      if (Array.isArray(val)) {
        list = val.filter(Boolean);
      } else if (val && typeof val === 'object') {
        list = Object.values(val);
      }
      const mapped: Template[] = list.map((item: any) => ({
        title: String(item.title ?? ''),
        subtitle: String(item.subtitle ?? ''),
        avatar: item.avatar ? String(item.avatar) : undefined,
        gender: String(item.gender ?? '未選択'),
        age: String(item.age ?? '20'),
        answers: Array.isArray(item.answers) ? item.answers.map((a: any) => String(a ?? '')) : Array(characterQuestions.length).fill(''),
      }));
      setTemplates(mapped);
    });

    return () => {
      off(tplRef);
    };
  }, []);

  // テンプレートモーダルが開いたときに自動で chatOptions を取得
  React.useEffect(() => {
    if (showTemplateModal) {
      (async () => {
        const items = await listChats();
        setChatOptions(items);
        console.log('[newAI] Chats under /prompto (auto):', items);
      })();
    }
  }, [showTemplateModal]);

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
        <TouchableOpacity style={styles.templateButton} onPress={() => setShowTemplateModal(true)}>
          <Text style={styles.templateButtonText}>テンプレートを使う</Text>
        </TouchableOpacity>

        {/* 最初の選択モーダル */}
        <Modal
          visible={showStartChoice}
          transparent
          animationType="fade"
          onRequestClose={() => {
            setShowStartChoice(false);
            setIsLoading(false);
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalSheet}>
              <Text style={styles.modalTitle}>はじめ方を選んでください</Text>
              <Text style={styles.modalCaption}>テンプレートから簡単に始めるか、自分で一から作成できます</Text>

              <View style={{ gap: 10 }}>
                <TouchableOpacity
                  style={[styles.choicePrimaryBtn]}
                  onPress={() => {
                    setShowStartChoice(false);
                    setShowTemplateModal(true);
                  }}
                >
                  <Text style={styles.choicePrimaryText}>テンプレートで始める</Text>
                  <Text style={styles.choiceSubText}>おすすめ・すぐに完成</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.choiceGhostBtn]}
                  onPress={() => {
                    setShowStartChoice(false);
                  }}
                >
                  <Text style={styles.choiceGhostText}>自分で作る</Text>
                  <Text style={styles.choiceSubTextDark}>質問に答えて作成</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

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
          height={130}
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
          height={300}
          style={styles.neomorphBox}
          forceTheme="light"
        >
          <Text style={styles.bigLabel}>🎂 推しの年齢</Text>
          <View style={[styles.pickerContainer, { width: inputWidth, alignSelf: 'center' }]}>
            <Picker
              selectedValue={age}
              onValueChange={(itemValue) => setAge(itemValue)}
              style={[styles.picker, { color: '#000000' }]}
              itemStyle={[styles.pickerItem, { color: '#000000' }]}
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
      <Modal
        visible={showTemplateModal}
        transparent
        animationType="fade"
        onRequestClose={() => {
          setShowTemplateModal(false);
          setIsLoading(false);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <Text style={styles.modalTitle}>テンプレートから選ぶ</Text>
            <Text style={styles.modalCaption}>タップすると入力欄が自動で埋まります</Text>

            {/* 保存済みチャットから再開 */}
            {chatOptions.length > 0 && (
              <>
                <Text style={styles.modalSectionTitle}>保存済みチャットから再開</Text>
                <FlatList
                  data={chatOptions}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={{ paddingVertical: 4 }}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[styles.tplCard, { backgroundColor: '#FFFFFF' }]}
                      onPress={async () => {
                        try {
                          // RTDB から最新のプロンプトと名前を取得
                          let prompt = '';
                          let nameFromDb: string | undefined;
                          try {
                            const snap = await get(dbRef(rdb, `prompto/${item.id}`));
                            if (snap.exists()) {
                              const v = snap.val();
                              if (v && typeof v === 'object') {
                                if (typeof v.prompt === 'string') prompt = v.prompt;
                                console.log('[newAI] fetched prompt from RTDB:', prompt);
                                if (typeof v.chatName === 'string') nameFromDb = v.chatName;
                              }
                            }
                          } catch (e) {
                            console.warn('[newAI] fetch prompt failed', e);
                          }

                          const finalName = (nameFromDb && nameFromDb.trim()) || item.name || 'AI Chat';

                          // ローカルにこのIDのチャットを“必ず”作成（一覧抽出条件を満たす）
                          await AsyncStorage.multiSet([
                            [`@chat_name:${item.id}`, finalName],
                            [`@chat_prompt:${item.id}`, prompt ?? ''], // 取得したプロンプトを保存
                          ]);
                          // AIChat 側で + を隠すための印
                          await AsyncStorage.setItem(`@chat_template:${item.id}`, '1');
                        } catch (e) {
                          console.warn('[newAI] ensure local chat failed', e);
                        }
                        setShowTemplateModal(false);
                        setIsLoading(false);
                        router.push({ pathname: '/AIChat', params: { chatId: item.id } });
                      }}
                    >
                      <View style={[styles.tplAvatar, { backgroundColor: '#F5F7FF' }]}>
                        <Text style={styles.tplAvatarText}>{item.name.slice(0, 1)}</Text>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={styles.tplTitle}>{item.name}</Text>
                        <Text style={styles.tplMeta}>ID: {item.id}</Text>
                      </View>
                      <View style={[styles.tplUseBtn, { backgroundColor: '#10B981' }]}>
                        <Text style={styles.tplUseBtnText}>開く</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </>
            )}

            <FlatList
              data={templates}
              keyExtractor={(item) => item.title}
              contentContainerStyle={{ paddingVertical: 8 }}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.tplCard} onPress={() => applyTemplate(item)}>
                  <View style={styles.tplAvatar}>
                    {item.avatar ? (
                      <Image source={{ uri: item.avatar }} style={{ width: '100%', height: '100%', borderRadius: 28 }} />
                    ) : (
                      <Text style={styles.tplAvatarText}>{item.title.slice(0, 1)}</Text>
                    )}
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.tplTitle}>{item.title}</Text>
                    <Text style={styles.tplSubtitle}>{item.subtitle}</Text>
                    <Text style={styles.tplMeta}>性別: {item.gender} / 年齢: {item.age}歳</Text>
                  </View>
                  <View style={styles.tplUseBtn}>
                    <Text style={styles.tplUseBtnText}>つかう</Text>
                  </View>
                </TouchableOpacity>
              )}
            />

            <View style={styles.modalActions}>
              <TouchableOpacity style={[styles.modalActionBtn, { backgroundColor: '#F0F2F5' }]} onPress={() => setShowTemplateModal(false)}>
                <Text style={[styles.modalActionText, { color: '#333' }]}>スキップ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalActionBtn, { backgroundColor: '#4F8EF7' }]} onPress={() => setShowTemplateModal(false)}>
                <Text style={[styles.modalActionText, { color: '#fff' }]}>閉じる</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  choicePrimaryBtn: {
    backgroundColor: '#4F8EF7',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  choicePrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  choiceSubText: {
    color: '#E8F0FF',
    fontSize: 12,
    marginTop: 4,
  },
  choiceGhostBtn: {
    backgroundColor: '#F0F2F5',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E4EF',
  },
  choiceGhostText: {
    color: '#334155',
    fontSize: 16,
    fontWeight: '800',
  },
  choiceSubTextDark: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 4,
  },
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
  neomorphBox: {
    marginBottom: 32,
    backgroundColor: '#E3E5F2',
    borderRadius: 12,
    padding: 16,
    width: boxWidth,
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
  templateButton: {
    alignSelf: 'center',
    backgroundColor: '#F0F2F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginBottom: 12,
  },
  templateButtonText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalSheet: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#333',
    textAlign: 'left',
    marginBottom: 4,
  },
  modalCaption: {
    fontSize: 12,
    color: '#777',
    marginBottom: 12,
  },
  tplCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#FAFBFF',
  },
  tplAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#EDF1FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  tplAvatarText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#4F8EF7',
  },
  tplTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#333',
  },
  tplSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  tplMeta: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },
  tplUseBtn: {
    marginLeft: 12,
    backgroundColor: '#4F8EF7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  tplUseBtnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 8,
    marginTop: 8,
  },
  modalActionBtn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  modalActionText: {
    fontSize: 14,
    fontWeight: '700',
  },
    modalSectionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#445',
    marginTop: 8,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});


