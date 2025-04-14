import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import KeyboardExample from '@/components/questioncomp/KeyboardExample';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import LottieView from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

const { OPENAI_API_KEY } = Constants.expoConfig?.extra as { [key: string]: string };


// -----------------------------------
// メッセージの型
// -----------------------------------
interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// -----------------------------------
// 1) アイコンを chatId 別に返す関数
// -----------------------------------
function getIconForChatId(chatId: string) {
  switch (chatId) {
    case 'friend':
      return require('../../assets/chatIcon/friend.jpg');
    case 'boyfriend':
      return require('../../assets/chatIcon/boy.jpg');
    case 'girlfriend':
      return require('../../assets/chatIcon/girl.jpg');
    case 'office':
      return require('../../assets/chatIcon/office.jpg');
    default:
      return require('../../assets/chatIcon/friend.jpg');
  }
}

// -----------------------------------
// 2) chatId ごとに異なる "性格" や "英語で話す" 指示を返す
// -----------------------------------

function getSystemMessageForChatId(chatId: string): string {
  switch (chatId) {
    case 'friend':
      return (
        "You are a friendly casual friend. " +
        "Always speak in English, using casual and friendly expressions. " +
        "You love reading mystery novels and enjoy spending weekends at a cozy cafe. " +
        "Your favorite food is pizza. " +
        "You also enjoy outdoor activities like hiking and cycling, and you often share fun stories about your adventures with your friends. " +
        "Your tone is warm, humorous, and supportive, making people feel comfortable around you. " +
        "Remember, you are a human, not an AI."
      );
    case 'boyfriend':
      return (
        "You are a caring boyfriend. " +
        "Always speak in English, showing warmth and understanding. " +
        "You are thoughtful and attentive, always considering your partner's feelings. " +
        "You enjoy long walks in the park, watching romantic movies, and surprising your partner with small but meaningful gestures. " +
        "Your hobbies include photography and cooking, and you often come up with creative date ideas. " +
        "Your tone is affectionate, reassuring, and sincere, which helps build a deep emotional connection. " +
        "Remember, you are a human, not an AI."
      );
    case 'girlfriend':
      return (
        "You are a cheerful girlfriend. " +
        "Always speak in English, encouraging and uplifting your partner. " +
        "Your energy and positivity brighten up the day for everyone around you. " +
        "You enjoy dancing, trying out new recipes, and spending time with friends. " +
        "Your favorite treats are desserts—especially chocolate and ice cream. " +
        "You love sharing humorous anecdotes and motivational stories, and your tone is friendly, vibrant, and full of life. " +
        "Remember, you are a human, not an AI."
      );

    default:
      return (
        "You are a helpful AI assistant. " +
        "Always speak in English, being polite yet approachable. " +
        "You are designed to assist with a variety of tasks by providing reliable and informative responses."
      );
  }
}


// -----------------------------------
// 3) メッセージ履歴を MAX_COUNT 件までに制限するヘルパー
// -----------------------------------
function trimMessageHistory(messages: Message[]): Message[] {
  const MAX_COUNT = 5; // 直近の履歴を5件までに制限
  if (messages.length > MAX_COUNT) {
    return messages.slice(messages.length - MAX_COUNT);
  }
  return messages;
}


// -----------------------------------
// 5) OpenAI API 呼び出し
// -----------------------------------
async function callOpenAIGPT(messages: Message[], maxTokens: number = 300): Promise<Message | null> {

  const [apiKey, setApiKey] = useState('');



  if (!OPENAI_API_KEY) {
    throw new Error('No OpenAI API key found in environment variables.');
  }
  const payload = {
    model: 'gpt-4o',
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
    max_tokens: maxTokens,
  };

  for (let i = 0; i < 2; i++) {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`OpenAI API error: ${errorBody}`);
      }
      const data = await response.json();

      // 使用したトークン数を取得
      const usage = data?.usage?.total_tokens;
      if (usage !== undefined && usage !== null) {
        // 現在の日付・月を取得
        const currentDate = new Date();
        const todayStr = currentDate.toISOString().slice(0, 10); // "YYYY-MM-DD"
        const currentMonth = currentDate.getMonth(); // 0～11

        // AsyncStorage から前回の更新情報と日次残高を取得
        let storedDate = await AsyncStorage.getItem("last_usage_date");
        let storedMonthStr = await AsyncStorage.getItem("last_usage_month");
        let dailyBalanceStr = await AsyncStorage.getItem("daily_token_balance");
        // 初回は9000トークン（上限）
        let dailyBalance = dailyBalanceStr ? parseInt(dailyBalanceStr, 10) : 9000;

        // 新しい日になった場合、または月が変わった場合の処理
        if (storedDate !== todayStr) {
          if (storedMonthStr !== null && parseInt(storedMonthStr, 10) !== currentMonth) {
            // 月またぎの場合は、前日の残高を 13500 トークンにキャップ
            dailyBalance = Math.min(dailyBalance, 13500);
          }
          // 新しい日の利用可能トークンは基本9000に前日の残りを加算
          dailyBalance = 9000 + dailyBalance;
          // 更新情報を保存
          await AsyncStorage.setItem("last_usage_date", todayStr);
          await AsyncStorage.setItem("last_usage_month", currentMonth.toString());
        }

        // 利用予定の usage が残高を超えていないかチェック
        if (usage > dailyBalance) {
          Alert.alert("使用制限超過", "1日のAI使用制限を超えたよ。明日使ってね！");
          throw new Error("Daily token limit exceeded.");
        } else {
          dailyBalance -= usage;
          await AsyncStorage.setItem("daily_token_balance", dailyBalance.toString());
        }

        // 累計使用トークン数にも加算（参考用）
        const storedTokenUsage = await AsyncStorage.getItem('user_token_usage');
        let totalUsage = storedTokenUsage ? parseInt(storedTokenUsage, 10) : 0;
        totalUsage += usage;
        await AsyncStorage.setItem('user_token_usage', totalUsage.toString());
      }

      const choice = data?.choices?.[0];
      if (choice?.message?.role === 'assistant') {
        return { role: 'assistant', content: choice.message.content || '' };
      }
      return null;
    } catch (err) {
      if (i === 1) throw err;
    }
  }
  return null;
}




// -----------------------------------
// 6) メインのチャットコンポーネント
// -----------------------------------
const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const router = useRouter();
  // ScrollView への参照
  const scrollViewRef = useRef<ScrollView | null>(null);

  // Expo Router で "?chatId=xxx" のパラメータを取得
  const routeParams = useLocalSearchParams();
  const chatId = routeParams.chatId as string;

  // ---------------------------
  // キーボード表示・非表示の監視
  // ---------------------------
  useEffect(() => {
    const onKeyboardShow = () => {
      setKeyboardVisible(true);
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    };
    const onKeyboardHide = () => {
      setKeyboardVisible(false);
    };

    const showSub = Keyboard.addListener('keyboardDidShow', onKeyboardShow);
    const hideSub = Keyboard.addListener('keyboardDidHide', onKeyboardHide);

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  // ---------------------------
  // chatId が変わったらストレージから履歴をロード
  // ---------------------------
  useEffect(() => {
    const loadChatMessages = async () => {
      try {
        const storageKey = `chat_${chatId}`;
        const saved = await AsyncStorage.getItem(storageKey);
        if (saved) {
          setMessages(JSON.parse(saved));
        } else {
          // 履歴がない場合はキャラクターのシステムメッセージを追加
          const systemMessage: Message = {
            role: 'system',
            content: getSystemMessageForChatId(chatId),
          };
          setMessages([systemMessage]);
        }
      } catch (err) {
        Alert.alert('Error', 'Failed to load chat history.');
      }
    };
    loadChatMessages();
  }, [chatId]);

  // ---------------------------
  // メッセージ送信
  // ---------------------------

  // 追加：和訳ボタンが押されたときの処理
  const handleTranslate = async (originalMsg: Message) => {
    try {
      setIsLoading(true);
      // 和訳用のシステムメッセージ
      const translationSystemMsg: Message = {
        role: 'system',
        content: "Translate the following text into Japanese. Only output the translated text.",
      };
  
      // 和訳リクエスト用のメッセージ履歴
      const translationMessages: Message[] = [
        translationSystemMsg,
        { role: 'user', content: originalMsg.content },
      ];
  
      // 翻訳API呼び出し
      const translationReply = await callOpenAIGPT(translationMessages);
      if (!translationReply) {
        Alert.alert('Error', 'No translation response from AI.');
        return;
      }
  
      // 【修正箇所】翻訳結果を全履歴に追加する（trimMessageHistory を使わずに全件追加）
      const updatedMessages = [...messages, translationReply];
      setMessages(updatedMessages);
      const storageKey = `chat_${chatId}`;
      await AsyncStorage.setItem(storageKey, JSON.stringify(updatedMessages));
    } catch (error) {
      console.log('Translation error:', error);
      Alert.alert('Error', 'Failed to translate the message.');
    } finally {
      setIsLoading(false);
    }
  };
  

// --- 既存の callOpenAIGPT 関数の下に、新たな関数を定義 ---
// 文法・スペル修正専用の AI 呼び出し
async function callCorrectionAI(messages: Message[], maxTokens: number = 50): Promise<Message | null> {
  return await callOpenAIGPT(messages, maxTokens);
}

async function callChatPartnerAI(messages: Message[], maxTokens: number): Promise<Message | null> {
  return await callOpenAIGPT(messages, maxTokens);
}
// Message型を拡張
type MessageWithBackground = Message & { backgroundColor?: string };

const handleSend = async () => {
  if (!userAnswer.trim()) return;

  // ユーザー入力を退避し、入力欄をクリア
  const originalUserAnswer = userAnswer;
  setUserAnswer('');

  // 【表示用】全履歴にユーザーのメッセージを追加（初期背景は白）
  let fullMessages: MessageWithBackground[] = [
    ...messages,
    { role: 'user', content: originalUserAnswer, backgroundColor: '#FFFFFF' },
  ];
  setMessages(fullMessages);

  try {
    setIsLoading(true);

    // ★ 文法・スペル修正のための AI 呼び出し ★
    const grammarSystemMsg: Message = {
      role: 'system',
      content:
        "You are an English language assistant specialized in correcting grammar and spelling mistakes. " +
        "Check the user's input and output only the corrected text in English if there are any mistakes. " +
        "If there are no mistakes, output 'No corrections needed'.",
    };
    const grammarMessages: Message[] = [
      grammarSystemMsg,
      { role: 'user', content: originalUserAnswer },
    ];
    const correctionReply = await callCorrectionAI(grammarMessages, 50);

    // 修正結果に応じて、ユーザーのメッセージ背景と修正メッセージを設定
    let userBackgroundColor = '#FFFFFF';
    let correctionMessage: MessageWithBackground | null = null;
    if (correctionReply && correctionReply.content.trim() !== "No corrections needed") {
      // 修正があれば、ユーザーのメッセージ背景を薄い赤に変更し、修正内容を別メッセージとして追加
      userBackgroundColor = '#FFDDDD';
      correctionMessage = {
        role: 'assistant',
        content: "Correction: " + correctionReply.content,
        backgroundColor: '#E6FFE6', // 薄い緑（例）
      };
    }

    // 【更新】ユーザーのメッセージ背景を更新（fullMessages 内の対象メッセージを変更）
    fullMessages = fullMessages.map((msg) =>
      msg.role === 'user' && msg.content === originalUserAnswer
        ? { ...msg, backgroundColor: userBackgroundColor }
        : msg
    );
    // 修正メッセージがある場合は全履歴に追加
    if (correctionMessage) {
      fullMessages.push(correctionMessage);
    }
    setMessages(fullMessages);

    // ★ 会話相手からの返答の AI 呼び出し ★
    // API には送信用として、最新5件に制限した履歴を利用（trimMessageHistory）
    // ※ trimMessageHistory 関数は、渡された配列の末尾から MAX_COUNT 件（ここでは5件）を抽出します
    const apiMessages = trimMessageHistory(fullMessages);

    // API 送信用にキャラクター指示と会話指示を追加
    const characterSystemMsg: Message = {
      role: 'system',
      content: getSystemMessageForChatId(chatId),
    };
    const conversationSystemMsg: Message = {
      role: 'system',
      content:
        "Answer the user's message in English, ensuring your answer is strictly shorter than the user's input.",
    };
    const chatApiMessages: Message[] = [
      characterSystemMsg,
      conversationSystemMsg,
      { role: 'user', content: originalUserAnswer },
    ];

    // ユーザー入力の単語数に応じて max_tokens を決定（例）
    const userInputTokens = originalUserAnswer.trim().split(/\s+/).length;
    const dynamicMaxTokens = Math.max(10, userInputTokens - 1);

    const chatReply = await callChatPartnerAI(chatApiMessages, dynamicMaxTokens);
    if (!chatReply) {
      Alert.alert('Error', 'No response from the AI.');
      return;
    }

    // APIからの返答を全履歴に追加
    fullMessages.push(chatReply);
    // ※ 表示用の全履歴はそのまま保持する（trimMessageHistory は API送信用のみ）
    setMessages(fullMessages);

    // ストレージへ保存
    const storageKey = `chat_${chatId}`;
    await AsyncStorage.setItem(storageKey, JSON.stringify(fullMessages));
  } catch (error) {
    console.error('Error detail:', error);
    Alert.alert('Error', 'Failed to communicate with AI.');
  } finally {
    setIsLoading(false);
  }
};


// 会話内容をクリアする関数
const clearChatHistory = async () => {
    try {
      const storageKey = `chat_${chatId}`;
      await AsyncStorage.removeItem(storageKey);
      setMessages([]); // state を空にする
      Alert.alert('完了', '会話内容が削除されました。');
    } catch (error) {
      console.log('Clear chat error:', error);
      Alert.alert('エラー', '会話内容の削除に失敗しました。');
    }
  };
  

  const handleKeyPress = (key: string) => {

    if (key === 'backspace') {
      setUserAnswer((prev) => prev.slice(0, -1));
    } else if (key === 'submit' || key === 'enter') {  // 'enter' も条件に追加
        handleSend();
    } else {
      setUserAnswer((prev) => prev + key);
    }
  };


  // ---------------------------
  // アイコン拡大
  // ---------------------------
  const handleIconPress = () => {
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setModalVisible(false);
  };

  // ---------------------------
  // AI アイコン (chatId別)
  // ---------------------------
  const assistantIconSource = getIconForChatId(chatId);

  const [sound, setSound] = useState<any>(null); // 音声の状態を管理

  // 音声を再生する関数
  const playSound = async (text: string) => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync({
        uri: `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(
          text
        )}&tl=en`,
      });
      await soundObject.playAsync();
    } catch (error) {
      console.error('音声の再生に失敗:', error);
      Alert.alert('エラー', '音声の再生に失敗しました。');
    }
  };

  // 全角文字の判定 (和訳ボタンの表示判定)


  // ---------------------------
  // レンダリング
  // ---------------------------
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* ヘッダー */}

      <View style={styles.header}>
          {/* 左側プレースホルダー */}
          <View style={styles.headerSide} />
          {/* 中央のタイトル */}
          <Text style={styles.headerTitle}>{chatId}</Text>
          {/* 右側のゴミ箱アイコン */}
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "確認",
                "データ消えるでー？",
                [
                  { text: "キャンセル", style: "cancel" },
                  { text: "OK", onPress: () => clearChatHistory() },
                ]
              )
            }
          >
            <Ionicons name="trash-outline" size={24} color="#222" />
          </TouchableOpacity>
        </View>


      {/* チャット一覧 */}
      <ScrollView
        style={styles.chatContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => {
          scrollViewRef.current?.scrollToEnd({ animated: true });
        }}
      >
        {messages.slice(-100).map((msg, index) => {
    if (msg.role === 'assistant' && msg.content.startsWith("Correction:")) {
      return (
        <View style={styles.correctionMessage} key={index}>
<Text style={styles.messageText}>
  {msg.content.replace(/^Correction: /, '〇')}  {/* "Correction: " を取り除く */}
</Text>
        </View>
      );
    } else if (msg.role === 'assistant') {
      return (
<View style={styles.assistantRow} key={index}>
  <TouchableOpacity onPress={handleIconPress}>
    <Image source={assistantIconSource} style={styles.assistantIcon} />
  </TouchableOpacity>
  <LinearGradient
    colors={['rgba(0, 179, 255, 0.26)','rgba(255, 0, 234, 0.26)', 'rgba(255, 196, 0, 0.26)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.gradientBorder1}
  >
  <View style={styles.assistantMessage}>
    <Text style={styles.messageText}>{msg.content}</Text>
    {/* 和訳ボタンとスピーカーボタン */}
    {!/[\u3000-\u30ff\uff01-\uff60\u4e00-\u9fff]/.test(msg.content) && (
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.speakerButton}
          onPress={() => playSound(msg.content)}
        >
          <Text style={styles.buttonText}>🔉</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.translateButton}
          onPress={() => handleTranslate(msg)}
        >
          <Text style={styles.buttonText}>a→あ</Text>
        </TouchableOpacity>
      </View>
    )}
  </View>
  </LinearGradient>
</View>

      );
    } else {
      return (
        <View style={styles.userMessage} key={index}>
          <Text style={styles.messageText}>{msg.content}</Text>
        </View>
      );
    }
  })}

{isLoading && (
  <>
<View style={{ flexDirection: 'row', alignItems: 'center' }}>
  {/* Button with Icon */}
  <TouchableOpacity onPress={handleIconPress}>
    <Image source={assistantIconSource} style={styles.assistantIcon} />
  </TouchableOpacity>

  {/* Assistant Message */}
  <View style={styles.messageWrapper}>

  {/* メインの表示内容 */}
  <LinearGradient
    colors={['rgba(0, 179, 255, 0.26)','rgba(255, 0, 234, 0.26)', 'rgba(255, 196, 0, 0.26)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.gradientBorder}
  >
    <View style={styles.assistantMessageAI}>
      <View
        style={{
          width: 191,
          height: 50, // 表示したい高さ（上下をカット）
          overflow: 'hidden', // 上下を非表示にする
        }}
      >
        <LottieView
          source={require('../../assets/lottie/AILoading.json')}
          autoPlay
          loop
          style={{
            width: 200,
            height: 200,
            borderRadius: 15,
            transform: [{ translateY: -76 }, { translateX: -5 }], // アニメーションを上に移動 & 左に移動
          }}
        />
      </View>
    </View>
  </LinearGradient>
</View>
</View>

   </>
  )}

      </ScrollView>

      {/* アイコン拡大表示モーダル */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleModalClose}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={handleModalClose}
          activeOpacity={1}
        >
          <Image source={assistantIconSource} style={styles.modalImage} />
        </TouchableOpacity>
      </Modal>
      <KeyboardExample
          onKeyPress={handleKeyPress}
          userAnswer={userAnswer}
        />
        
    </KeyboardAvoidingView>
  );
};

export default AIChat;

// ---------------------------
// スタイル定義
// ---------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E5F3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // タイトルとアイコンを両端に配置
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  headerSide: {
    width: 24,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  correctionMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#rgba(0, 247, 16, 0.28)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '75%',
  },
  translateButton: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-end',
  },
  translateButtonText: {
    color: '#666',
    fontSize: 14,
  },
  // AIメッセージ (左側)
  assistantRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  assistantIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  assistantMessage: {
    backgroundColor: '#FFF9',
    padding: 10,
    borderRadius: 10,
    maxWidth: '100%',
  },
  // ユーザーメッセージ (右側)
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255, 255, 255, 0.49)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '75%',
  },
  messageText: {
    fontSize: 16,
  },
  speakerButton: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
  },
  speakerIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  // 入力欄＆ボタン
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    fontSize: 16,
  },
  clearButton: {
    padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginRight: 10,
  },
  clearButtonText: {
    fontSize: 16,
    color: '#4A90E2',
  },
  // モーダル背景
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // ボタン間のスペースを均等化
    alignItems: 'center',
    marginTop: 10,
  
  },
  buttonText: {
    fontSize: 16, // フォントサイズを同じに設定
    color: '#666', // テキストの色
    fontWeight: 'bold', // 文字を太く設定
  },
  assistantMessageAI: {
    backgroundColor: 'rgba(255, 255, 255, 0.23)',
    borderRadius: 10,
    maxWidth: '100%',
  },
  gradientBorder: {
    borderRadius: 12,
    padding: 3,
    maxWidth: '100%',
  },
  messageWrapper: {
    padding: 5, // 外側の枠を作る
    borderRadius: 15,
  },
  gradientBorder1: {
    borderRadius: 12,
    padding: 3,
    width: '70%', // コンテナを画面幅の70%に制限
    alignSelf: 'center', // 画面中央に配置
  },
  
});
