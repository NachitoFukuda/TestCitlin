//app/(tabs)/AIChat.tsx
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
import ChatInput from '@/components/AIchat/ChatInput';


const { OPENAI_API_KEY } = Constants.expoConfig?.extra as { [key: string]: string };

// -----------------------------------
// メッセージの型
// -----------------------------------
interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
  isApi?: boolean; // Optional property to indicate if the message is from the API
}

// -----------------------------------
// 1) アイコンを chatId 別に返す関数
// -----------------------------------
function getIconForChatId(chatId: string) {
  switch (chatId) {
      default:
        return require('../../assets/chatIcon/friend.jpg');
  }
}

// -----------------------------------
// 2) chatId ごとに異なる "性格" や "英語で話す" 指示を返す
// -----------------------------------

async function getSystemMessageForChatId(chatId: string): Promise<string> {
    const promptKey = `@chat_prompt:${chatId}`;
    try {
      const stored = await AsyncStorage.getItem(promptKey);
      if (stored) {
      return stored;
      }
    } catch (e) {
      console.error('プロンプト読み込み失敗:', chatId, e);
    }
    return `You are a ${chatId} character. Please respond in English.`; // デフォルトのプロンプト
    // 保存がなければデフォルトを返す

  }

// -----------------------------------
// 5) OpenAI API 呼び出し
// -----------------------------------
async function callOpenAIGPT(messages: Message[], maxTokens: number = 300): Promise<Message | null> {


  if (!OPENAI_API_KEY) {
    throw new Error('No OpenAI API key found in environment variables.');
  }
  const payload = {
    model: 'gpt-4.1-nano',
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
  const chatTitle = (routeParams.title as string) || chatId;
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

  const [iconUri, setIconUri] = useState<string | null>(null);
  useEffect(() => {
    const loadIcon = async () => {
      try {
        const uri = await AsyncStorage.getItem(`@chat_image:${chatId}`);
        if (uri) setIconUri(uri);
      } catch (e) {
        console.error('アイコン取得失敗:', e);
      }
    };
    loadIcon();
  }, [chatId]);

  const [storedName, setStoredName] = useState<string | null>(null);

useEffect(() => {
  const loadName = async () => {
    try {
      const name = await AsyncStorage.getItem(`@chat_name:${chatId}`);
      if (name) setStoredName(name);
    } catch (e) {
      console.error('名前取得失敗:', e);
    }
  };
  loadName();
}, [chatId]);
  const iconSource = iconUri ? { uri: iconUri } : getIconForChatId(chatId);

  // ---------------------------
  // chatId が変わったらストレージから履歴をロード
  // ---------------------------
  useEffect(() => {
    const loadChatMessages = async () => {
      try {
        const storageKey = `chat_${chatId}`;
        const saved = await AsyncStorage.getItem(storageKey);
        // まず必ずシステムメッセージを取得
        const systemContent = await getSystemMessageForChatId(chatId);
        const systemMessage: Message = { role: 'system', content: systemContent };
        if (saved) {
          // 保存済み履歴から既存の system メッセージを除外して、新しい system を先頭に追加
          const parsed: Message[] = JSON.parse(saved);
          const filtered = parsed.filter(m => m.role !== 'system');
          setMessages([systemMessage, ...filtered]);
        } else {
          // 履歴がなければ system のみ
          setMessages([systemMessage]);
        }
      } catch (err) {
        Alert.alert('Error', 'Failed to load chat history.');
      }
    };
    loadChatMessages();
  }, [chatId]);



async function callChatPartnerAI(messages: Message[], maxTokens: number): Promise<Message | null> {
  return await callOpenAIGPT(messages, maxTokens);
}
// Message型を拡張
type MessageWithBackground = Message & { backgroundColor?: string; isApi?: boolean; };
const handleSend = async (): Promise<void> => {
  if (!userAnswer.trim()) return;
// AIChat.tsx の handleSend 関数中


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

    // API 送信用にキャラクター指示と会話指示を追加
    const characterSystemMsg: Message = {
      role: 'system',
      content: await getSystemMessageForChatId(chatId),
    };
    const conversationSystemMsg: Message = {
      role: 'system',
      content:
        "基本的日本語で話しますが、積極的に英語会話をユーザーが実践できるように指導して下さい。回答は日本語を主体に、必要に応じて、例示的な愛会話フレーズを短く指示してください。会話は、ユーザーの分量に合わせて、返信してください。",
    };

    const chatApiMessages: Message[] = [
      characterSystemMsg,
      conversationSystemMsg,
      { role: 'user', content: originalUserAnswer },
    ];

    // ユーザー入力の単語数に応じて max_tokens を決定（例）
    // 十分な長さを確保するために固定で256トークンを許可
    const chatReply = await callChatPartnerAI(chatApiMessages, 256);
    if (!chatReply) {
      Alert.alert('Error', 'No response from the AI.');
      return;
    }

    // APIからの返答を全履歴に追加
    fullMessages.push({ ...chatReply, isApi: true });    // ※ 表示用の全履歴はそのまま保持する（trimMessageHistory は API送信用のみ）
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
      Alert.alert('エラー', '会話内容の削除に失敗しました。');
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


  const handleMissionEnd = () => {
    // ミッション終了メッセージを追加
    const endMsg: MessageWithBackground = {
      role: 'assistant',
      content: 'ミッション終了しました！',
      isApi: false,
    };
    setMessages(prev => [...prev, endMsg]);
    // 追加後にスクロール
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

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
           <Text style={styles.headerTitle}>
              {storedName ?? chatTitle}
            </Text>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "確認",
                "会話履歴消えるでー？",
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
      {messages
        .filter(msg => msg.role !== 'system')
        .slice(-100)
        .map((msg, index) => {
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
        // ① まず一番外側でキーを振る
        <View key={`assistant-${index}`}>


          {/* ② アイコンとバブルを横並びにするRow */}
          <View style={styles.assistantRow}>
          <TouchableOpacity onPress={handleIconPress}>
          <Image source={iconSource} style={styles.assistantIcon} />
          </TouchableOpacity>
            <LinearGradient
              colors={[
                'rgba(0, 179, 255, 0.26)',
                'rgba(255, 0, 234, 0.26)',
                'rgba(255, 196, 0, 0.26)',
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.gradientBorder1}
            >
              {/* ③ メッセージバブル */}
              <View style={styles.assistantMessage}>
                <Text style={styles.messageText}>{msg.content}</Text>
              </View>
            </LinearGradient>
          </View>
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
   <Image source={iconSource} style={styles.assistantIcon} />
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
            <Image source={iconSource} style={styles.modalImage} />
        </TouchableOpacity>
      </Modal>
     <View style={styles.inputContainer}>
     <ChatInput
        value={userAnswer}
        onChangeText={setUserAnswer}
        onSend={handleSend}
      />
        <TouchableOpacity onPress={handleSend} style={styles.clearButton}>
          <Ionicons name="send" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#E3E5F2',
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
    width: 40,
    height: 40,
    borderRadius: 16,
    marginRight: 8,
    top: 5,
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
    paddingTop :15,
    paddingBottom: 30,
    backgroundColor: '#FFF9',

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
    backgroundColor: '#FFF9',
    borderRadius: 5,
    marginRight: 10,
  },
  clearButtonText: {
    fontSize: 16,
    color: '#FFF9',
  },
  // モーダル背景
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    width: 250,      // 幅を大きく
    height: 250,     // 高さを大きく
    borderRadius: 125, // 円形にしたいなら半径を幅の半分に
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
    flex: 1,
    padding: 5, // 外側の枠を作る
    borderRadius: 15,
  },
  gradientBorder1: {
    borderRadius: 12,
    padding: 3,
    width: '70%', // コンテナを画面幅の70%に制限
    alignSelf: 'center', // 画面中央に配置
  },
  partnerDescriptionChat: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    missionSeparator: {
      width: '100%',
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#666',
      marginTop: 4,
      marginBottom: 8,
    },
    MittionStartText: {
      fontSize: 25,
      color: '#rgb(8, 206, 21)',
      marginBottom: 4,
      textAlign: 'center',
    },
    MittionEndText: {
      fontSize: 25,
      color: '#rgb(206, 8, 8)',
      marginBottom: 4,
      textAlign: 'center',
    },
});
