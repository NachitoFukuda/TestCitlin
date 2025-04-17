import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
  Alert,
  ScrollView,
} from 'react-native';
import { Audio } from 'expo-av';
import { sampleQuestions, passageText } from '../../constants/2_5/questions25';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useFocusEffect } from 'expo-router';
import NeomorphBox from '@/components/ui/NeomorphBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const { OPENAI_API_KEY } = Constants.expoConfig?.extra as { [key: string]: string };


function ChatListButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push('/ChatListScreen')}
      accessibilityLabel="チャットリスト画面へ"
      accessibilityHint="リストアイコンをタップすると ChatListScreen に移動します"
    >
      <Ionicons name="list-outline" size={30} color="#000" />
    </TouchableOpacity>
  );
}

const ExamQuestionCard: React.FC = () => {
  // 黙読・音読のステップ管理
  const [showCard, setShowCard] = useState(true);          // 黙読カード表示中か
  const [countdown, setCountdown] = useState(20);          // 20秒黙読カウントダウン
  const [readingOutLoud, setReadingOutLoud] = useState(false); // 音読フェーズかどうか

  // 質問関連の状態
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [evaluations, setEvaluations] = useState<Record<number, string>>({});
  const [showQuestionText, setShowQuestionText] = useState(false);
  const [examFinished, setExamFinished] = useState(false);

  // テキスト入力を検知
  const [typingDetected, setTypingDetected] = useState(false);
  const currentQuestion = sampleQuestions[currentQuestionIndex];
  const totalQuestions = sampleQuestions.length;
  const questionNumber = currentQuestionIndex + 1;

  // ---------------------------------------------
  // 音声再生用関数: Google Translate TTSのURLを使用
  // ---------------------------------------------
  const playTTS = async (text: string) => {
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

  // 画面にフォーカスされるたびに試験状態をリセット
  useFocusEffect(
    React.useCallback(() => {
      setShowCard(true);
      setCountdown(20);
      setReadingOutLoud(false);
      setCurrentQuestionIndex(0);
      setUserAnswer('');
      setUserAnswers([]);
      setEvaluations({});
      setShowQuestionText(false);
      setExamFinished(false);
      setTypingDetected(false);

      // ここで「黙読を開始してください」音声を流す
      playTTS("First, please read a passage silently for 20 seconds.");

      return () => {
        // 画面から離れる際の後処理がある場合はここに
      };
    }, [])
  );

  // マイクの権限チェック（任意）
  useEffect(() => {
    async function checkPermissions() {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('本番のためにマイクをオンにして練習しよう！', '一応テキスト入力もできるよ😬');
      }
    }
    checkPermissions();
  }, []);

  // 黙読用のカウントダウン
  useEffect(() => {
    if (countdown > 0 && showCard) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (countdown <= 0 && showCard) {
      // 20秒経過時に黙読フェーズ終了 & 「音読してください」音声再生
      setShowCard(false);
      setReadingOutLoud(true);
      playTTS("Now, please read it aloud.");
    }
  }, [countdown, showCard]);

  // 質問画面が表示された瞬間に、問題文を自動再生させる
  useEffect(() => {
    // 「黙読フェーズ終了」かつ「音読フェーズ終了」かつ「試験がまだ終わっていない」時＝質問画面のみ
    if (!showCard && !readingOutLoud && !examFinished) {
      playTTS(currentQuestion.question);
    }
  }, [currentQuestionIndex, showCard, readingOutLoud, examFinished]);

  // 次の問題へ
  const handleNextQuestion = async () => {
    const newAnswers = [...userAnswers, userAnswer];
    setUserAnswers(newAnswers);

    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setShowQuestionText(false);
      setTypingDetected(false);
    } else {
      // すべて回答したら評価
      await evaluateAllAnswers(newAnswers);
      setExamFinished(true);
    }
  };

  // 回答評価関数
  const evaluateAllAnswers = async (answers: string[]) => {
    setLoading(true);
    const passage = passageText;
    const questions = sampleQuestions;
  
    const evaluationPromises = questions.map(async (question, index) => {
      const answer = answers[index] || '';
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: 'あなたは英文の回答を評価するAIアシスタントです。必ず日本語で回答してください。',
              },
              {
                role: 'user',
                content: `以下のパッセージと質問を参考に、ユーザーの回答が正しいか評価してください。
  【パッセージ】:
  "${passage}"
  
  【質問】:
  "${question.question}"
  
  【ユーザーの回答】:
  "${answer}"
  
  ### 評価基準:
  1. 文法的に正しいか
  2. 質問に適切に答えているか（パッセージの情報と照らし合わせて整合性があるか）
  3. 会話として成立している場合は基本的に正解とする
  4. ただし、明らかに誤った情報を追加している場合は誤りとする
  5. ユーザーが未回答の場合は、正解例を教えてあげる
  
  ### 評価結果とコメント:`,
              },
            ],
            max_tokens: 250,
            temperature: 0.2,
          }),
        });
  
        const data = await response.json();
  
        // 使用したトークン数を取得し、日次の残高および累計使用量を更新する処理
        const usage = data?.usage?.total_tokens;
        if (usage !== undefined && usage !== null) {
          const currentDate = new Date();
          const todayStr = currentDate.toISOString().slice(0, 10); // "YYYY-MM-DD"
          const currentMonth = currentDate.getMonth(); // 0～11
  
          let storedDate = await AsyncStorage.getItem("last_usage_date");
          let storedMonthStr = await AsyncStorage.getItem("last_usage_month");
          let dailyBalanceStr = await AsyncStorage.getItem("daily_token_balance");
          let dailyBalance = dailyBalanceStr ? parseInt(dailyBalanceStr, 10) : 9000;
  
          if (storedDate !== todayStr) {
            if (storedMonthStr !== null && parseInt(storedMonthStr, 10) !== currentMonth) {
              dailyBalance = Math.min(dailyBalance, 13500);
            }
            dailyBalance = 9000 + dailyBalance;
            await AsyncStorage.setItem("last_usage_date", todayStr);
            await AsyncStorage.setItem("last_usage_month", currentMonth.toString());
          }
  
          if (usage > dailyBalance) {
            Alert.alert("使用制限超過", "1日のAI使用制限を超えたよ。明日使ってね！");
            throw new Error("Daily token limit exceeded.");
          } else {
            dailyBalance -= usage;
            await AsyncStorage.setItem("daily_token_balance", dailyBalance.toString());
          }
  
          const storedTokenUsage = await AsyncStorage.getItem('user_token_usage');
          let totalUsage = storedTokenUsage ? parseInt(storedTokenUsage, 10) : 0;
          totalUsage += usage;
          await AsyncStorage.setItem('user_token_usage', totalUsage.toString());
        }
  
        if (!response.ok || !data.choices || data.choices.length === 0) {
          return {
            id: question.id,
            evaluation: '⚠️ 評価結果が得られませんでした。API の応答を確認してください。',
          };
        }
        return {
          id: question.id,
          evaluation: data.choices[0].message.content.trim(),
        };
      } catch (error) {
        return {
          id: question.id,
          evaluation: '⚠️ 評価の取得中にエラーが発生しました。',
        };
      }
    });
  
    const results = await Promise.all(evaluationPromises);
    const newEvaluations: Record<number, string> = {};
    results.forEach((result) => {
      newEvaluations[result.id] = result.evaluation;
    });
  
    setEvaluations(newEvaluations);
    setLoading(false);
  };
  
  // テキスト入力検知
  const handleTextChange = (text: string) => {
    if (text.length > 0) {
      setTypingDetected(true);
    } else {
      setTypingDetected(false);
    }
    setUserAnswer(text);
  };

  // 試験終了画面
  if (examFinished) {
    return (
      <View style={styles.container}>
        <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <ChatListButton />
        </View>
        <Text style={styles.header}>準２級評価結果</Text>
        <ScrollView
          style={{ flex: 1, width: '100%' }}
          contentContainerStyle={{ width: '100%', paddingHorizontal: 16 }}
          horizontal={false}
        >
          {sampleQuestions.map((question, index) => (
            <View key={question.id} style={styles.evaluationContainer}>
              <Text style={styles.questionText}>
                【問題 {index + 1}】: {question.question}
              </Text>
              <Text style={styles.evaluationText}>
                評価: {evaluations[question.id]}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  // 1) 黙読フェーズ
  if (showCard) {
    return (
      <View style={styles.container}>
        <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <ChatListButton />
        </View>
        <NeomorphBox width={320} height={620} forceTheme={'light'} >
          <Text style={styles.passageTitle}>英文パッセージ</Text>
          <Text style={styles.passageText}>{passageText}</Text>
          <Image
              source={require('../../assets/images/2_5_1.jpg')}
              style={styles.passageImage}
            />
          <Text style={styles.countdownText}>{countdown}</Text>

        </NeomorphBox>

      </View>
    );
  }

  // 2) 音読フェーズ
  if (readingOutLoud) {
    return (
      <View style={styles.container}>
        <View style={{ width: '100%', alignItems: 'flex-start' }}>
          <ChatListButton />
        </View>

        <Text style={styles.header}>音読してください</Text>
        <NeomorphBox width={320} height={620} forceTheme={'light'}>
          <Text style={styles.passageTitle}>英文パッセージ</Text>
          <Text style={styles.passageText}>{passageText}</Text>
          <Image
              source={require('../../assets/images/2_5_1.jpg')}
              style={styles.passageImage}
            />
        </NeomorphBox>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // 音読フェーズ終了 -> 質問画面へ
            setReadingOutLoud(false);
          }}
        >
          <NeomorphBox width={200} height={50} forceTheme={'light'}>
            <Text style={styles.buttonText}>音読が終わった！</Text>
          </NeomorphBox>
        </TouchableOpacity>
      </View>
    );
  }

  // 3) 質問画面
  return (
    <View style={styles.container}>
      <View style={{ width: '100%', alignItems: 'flex-start' }}>
        <ChatListButton />
      </View>
      <View style={styles.questionContainer}>
        <Text style={styles.subHeader}>
          {`現在 ${questionNumber} 問目 / 全 ${totalQuestions} 問`}
        </Text>
  
        {/* テキストを表示するかどうかは既存の処理のまま */}
        {showQuestionText && (
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        )}
  
        {/*
         questionNumber が 1 のときにのみ、パッセージや画像を表示したい場合の例
         必要に応じて "=== 1" を "=== 2" や "!== 3" などに書き換えて調整できます
        */}
        {questionNumber === 1 && (
          <NeomorphBox width={320} height={330} forceTheme={'light'}>
            <Text style={styles.passageTitle}>英文パッセージ</Text>
            <Text style={styles.passageText}>{passageText}</Text>

          </NeomorphBox>
        )}
        {(questionNumber === 2 ) && (
          <NeomorphBox width={320} height={320} forceTheme={'light'}>
            <Image
              source={require('../../assets/images/2_5_1.jpg')}
              style={styles.passageImage}
            />
          </NeomorphBox>
        )}
        {( questionNumber === 3) && (
          <NeomorphBox width={320} height={320} forceTheme={'light'}>
            <Image
              source={require('../../assets/images/2_5_2.jpg')}
              style={styles.passageImage}
            />
          </NeomorphBox>
        )}

        <TouchableOpacity
          style={styles.audioButton}
          onPress={() => playTTS(currentQuestion.question)}
        >
          <NeomorphBox width={200} height={50} forceTheme={'light'}>
            <Text style={styles.audioButtonText}>🔊 もう一度聞く</Text>
          </NeomorphBox>
        </TouchableOpacity>
  
        {!showQuestionText && (
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                '警告',
                '本番では、質問のテキストは見れません。表示しますか？',
                [
                  { text: 'キャンセル', style: 'cancel' },
                  { text: 'OK', onPress: () => setShowQuestionText(true) },
                ]
              )
            }
          >
            <Text style={styles.toggleText}>問題文を表示する</Text>
          </TouchableOpacity>
        )}
  
        <TextInput
          style={styles.textInput}
          value={userAnswer}
          onChangeText={handleTextChange}
          placeholder="音声入力を使用しよう"
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="none"
        />
  
        {typingDetected && (
          <View style={styles.typingAlertContainer}>
            <Image
              source={require('../../assets/images/voice.jpg')}
              style={styles.typingAlertImage}
            />
          </View>
        )}
  
        <TouchableOpacity
          style={styles.button}
          onPress={handleNextQuestion}
          disabled={loading}
        >
          <NeomorphBox width={200} height={50} forceTheme={'light'}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>次の問題へ</Text>
            )}
          </NeomorphBox>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// スタイルは省略（そのままでOK）
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#E3E5F3',
    alignItems: 'center',
  },
  questionContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: '#E3E5F3',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    width: '90%',
  },
  passageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  passageText: {
    fontSize: 20,
    textAlign: 'center',
    margin:20,
    color: '#555',
  },
  countdownText: {
    fontSize: 18,
    color: '#ff4500',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    color: '#444',
  },
  toggleText: {
    fontSize: 16,
    color: '#4a90e2',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    width: '90%',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
  },
  typingAlertContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  typingAlertImage: {
    width: 160,
    height: 160,
    marginBottom: 5,
  },
  passageImage: {
    width: 320,
    height: 320,
    marginBottom: 5,
  },
  typingAlertText: {
    fontSize: 16,
    color: '#d9534f',
    fontWeight: '600',
  },
  evaluationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    backgroundColor: '#EAF6FF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    marginVertical: 10,
    textAlign: 'center',
    width: '90%',
  },
  evaluationContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  audioButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
    minWidth: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ExamQuestionCard;
