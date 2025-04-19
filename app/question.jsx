// QuestionScreen.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Animated,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useRouter } from 'expo-router';
import KeyboardExample from '../components/questioncomp/KeyboardExample';
import HanahubukiAnimation from '../assets/lottie/Hanahubuki.json';
import NeomorphBox from '../components/ui/NeomorphBox'; // ニューモフィズム用コンポーネント
import { Audio } from 'expo-av';
import Countdown from '@/components/questioncomp/Countdown';
import QuizEndComponent from '@/components/questioncomp/QuizEndComponent';
import correctSound from '../assets/sound/button25.mp3'; // 正解音
import beepSound from '../assets/sound/beepSound.mp3'; // 不正解音
import LottieView from 'lottie-react-native';
import MLabel from '@/components/questioncomp/MLabel';
import { getOrSaveImageFileUrlRTDB } from '../utils/getOrSaveImageFileUrlRTDB';
import AnimatedRemoteImage from '../components/questioncomp/AnimatedRemoteImage';

//import useSoundFiles from '../components/questioncomp/useSoundFiles'
import useQuestionData from '../components/questioncomp/useQuestionData'; // パスは実際の配置に合わせて調整
import BannerAdComponent from '@/components/indexcomp/BannerAdComponent';
import { storage } from '../firebaseConfig';
import { getDownloadURL, ref } from 'firebase/storage';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const QCOUNT_KEY = '@RotatingNeomorphicButton_counter';
const STORAGE_KEY = 'correctData';



const checkDeadlineData = async () => {
  const data = await AsyncStorage.getItem('@deadline_days');
  return data ? JSON.parse(data) : null; // JSONデータをパース
};

    async function getPreviousQuarterHour(date) {
    const adjustedDate = new Date(date);
    adjustedDate.setSeconds(0);
    adjustedDate.setMilliseconds(0);
    const year = adjustedDate.getFullYear();
    const month = String(adjustedDate.getMonth() + 1).padStart(2, '0');
    const day = String(adjustedDate.getDate()).padStart(2, '0');

    // 非同期処理でデータを取得（awaitを使用）
    const startday = await checkDeadlineData();

      if (!startday || !startday.savedAt) {
        return null; // 失敗時はnullを返す
      }
      const savedDate = new Date(startday.savedAt);
      // 現在の日付を取得
      const currentDate = new Date(`${year}-${month}-${day}T00:00:00.000Z`);
      // 差分日数を計算
      const diffTime = currentDate - savedDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
  }

function addDays(date, days) {
  return date+days;
}

export default function QuestionScreen() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [correctData, setCorrectData] = useState({});
  const [shuffledChoices, setShuffledChoices] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null); // null: 未回答, true: 正解, false: 不正解
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  // New state variable to store the displayed question
  const [displayedQuestion, setDisplayedQuestion] = useState(null);
  const [risaltQuestion, setRisaltQuestion] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [imageData, setImageData] = useState(null);

  // ✅ createStylesを呼び出して「テーマ対応した styles オブジェクト」を取得
  const [isDarkMode, setIsDarkMode] = useState(null);
  const isDark = isDarkMode === true;
  const styles = createStyles(isDark);

  const { questionData, level } = useQuestionData();

  // questionDataが取得された後で分割代入する
  const questions1 = questionData?.questions1 ?? [];
  const questions2 = questionData?.questions2 ?? [];
  const questions3 = questionData?.questions3 ?? [];

  useFocusEffect(
    useCallback(() => {
      const loadThemeAndInitSDK = async () => {
        // テーマの読み込み処理
        try {
          const storedTheme = await AsyncStorage.getItem('theme');
          if (storedTheme === 'dark') {
            setIsDarkMode(true);
          } else {
            setIsDarkMode(false);
          }
        } catch (error) {
          console.error('❌ テーマの読み込みに失敗しました:', error);
          setIsDarkMode(false);
        }
        // RevenueCat SDK の初期化処
      };

      loadThemeAndInitSDK();
    }, [])
  );


  const [isCountingDown, setIsCountingDown] = useState(true);
  const [C, setCount] = useState(3.5);
  const [Qcount, setQCount] = useState(5);
  const confettiRef = useRef(null);
  const soundRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const forceTheme = isDarkMode === true ? 'dark' : 'light';
  
  const uniqueQuestions = useMemo(() => {
    if (!questionData) return [];
    const allQuestions = [...(questions1 || []), ...(questions2 || [])];
    if (allQuestions.length > 0) {
    } else {
    }
        
    const uniqueQuestionsMap = new Map();
    allQuestions.forEach((question) => {
      if (!uniqueQuestionsMap.has(question.id)) {
        uniqueQuestionsMap.set(question.id, question);
      }
    });
    const result = Array.from(uniqueQuestionsMap.values());
    return result;
  }, [questionData, questions1, questions2]);


  
  useEffect(() => {
    if (!questionData) {
      console.warn('[QuestionScreen] questionData is still null.');
    }
  }, [questionData]);
  

  const getQuestionsBasedOnCorrectCount = useCallback((correctCount, questionId) => {
    
    let result = null;
    
    if (correctCount === 0 || correctCount === 1 || correctCount === 7) {
      result = questions1.find((q) => q.id === questionId);
    } else if ([2, 3, 5, 9].includes(correctCount)) {
      result = questions2.find((q) => q.id === questionId);
    } else if ([4, 6, 8].includes(correctCount)) {
      result = questions3.find((q) => q.id === questionId);
    } else {
      console.error(`[getQuestionsBasedOnCorrectCount] correctCount ${correctCount} がどの条件にも該当しません。`);
    }
    return result;
  }, [questions1, questions2, questions3]);
  
  
    
  // ランダムシャッフル
  const shuffleArray = useCallback((array) => {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    }, []);



  // 正解音・不正解音を再生
  const playSoundAsync = useCallback(async (sound) => {
    try {
      const { sound: playbackSound } = await Audio.Sound.createAsync(sound);
  
      return new Promise((resolve, reject) => {
        let resolved = false;
        // イベントハンドラ
        const onPlaybackStatusUpdate = (status) => {
          if (status.didJustFinish) {
            playbackSound.unloadAsync();
            if (!resolved) {
              resolved = true;
              resolve();
            }
          } else if (!status.isLoaded) {
            if (!resolved) {
              resolved = true;
              reject(new Error('Sound failed to load'));
            }
          }
        };
  
        playbackSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
        // 再生開始
        playbackSound.playAsync().catch((error) => {
          if (!resolved) {
            resolved = true;
            reject(error);
          }
        });
      });
    } catch (error) {
      console.error('[playSoundAsync] エラー:', error);
    }
  }, []);


  useEffect(() => {
    if (uniqueQuestions.length > 0) {
      loadCorrectDataAndFilterQuestions();
    }
  }, [uniqueQuestions]);
  
  const loadCorrectDataAndFilterQuestions = async () => {
    try {
      // AsyncStorageから正解データの読み込み
      const storedData = await AsyncStorage.getItem(STORAGE_KEY);
      const parsedData = storedData ? JSON.parse(storedData) : {};
      const updatedData = { ...parsedData };
      setCorrectData(updatedData);
  
      // Qcountの読み込み
      const savedQcount = await AsyncStorage.getItem(QCOUNT_KEY);
      if (savedQcount !== null) {
        const parsedQcount = parseInt(savedQcount, 10);
        setQCount(parsedQcount);
      } else {
        console.warn('[loadCorrectDataAndFilterQuestions] Qcount が null のためデフォルト値を使用する可能性があります');
      }
  
      // 現在の日付を取得し、getPreviousQuarterHour を呼び出す
      const now = new Date();
      const Todaynamber = await getPreviousQuarterHour(now);
  
      const correctCountToIntervalMap = {
        2: 1,
        3: 1,
        4: 6,
        5: 6,
        6: 19,
        7: 19,
        8: 39,
        9: 39,
      };
  
      // uniqueQuestions の状態をログに出力
      if (uniqueQuestions.length === 0) {
        console.error('[loadCorrectDataAndFilterQuestions] uniqueQuestions が空です。問題データの読み込みに問題がある可能性があります。');
      }
  
      // uniqueQuestionsを元にフィルタリング実施
      const filtered = uniqueQuestions.filter((question) => {
        const { C: cc = 0, L } = updatedData[question.id] || {};
        const lastCorrectDate = L ? L : null;
        const interval = correctCountToIntervalMap[cc];
  
        if (interval !== undefined && interval !== null) {
          if (lastCorrectDate) {
            const nextPossibleTime = addDays(lastCorrectDate, interval);
            const oneDayAfterNext = addDays(nextPossibleTime, 1);
            if (Todaynamber < nextPossibleTime) {
              return false;
            } else if (Todaynamber >= oneDayAfterNext) {
              // 出題期限オーバーのため count を 2 にリセット
              updatedData[question.id] = {
                ...parsedData[question.id],
                C: 2,
                L: lastCorrectDate,
              };
              return false;
            } else {
              return true;
            }
          } else {
            return false;
          }
        } else if (cc <= 2) {
          // 無条件で出題
          updatedData[question.id] = {
            ...parsedData[question.id],
          };
          return true;
        }
        return false;
      });
  
      // 更新したデータをAsyncStorageに保存
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  
      // フィルタ後の問題を、正解数に応じた問題データにマッピング
      const mappedFiltered = filtered
        .map((question) => {
          const cc = updatedData[question.id]?.C || 0;
          const mappedQuestion = getQuestionsBasedOnCorrectCount(cc, question.id);
          return mappedQuestion;
        })
        .filter((q) => {
          const valid = Boolean(q);
          if (!valid) {
            console.error('[loadCorrectDataAndFilterQuestions] マッピング処理で null が返されています。');
          }
          return valid;
        })
        .reduce((unique, question) => {
          if (!question) {
            console.error('[loadCorrectDataAndFilterQuestions] reduce 中に null の質問が見つかりました。');
            return unique;
          }
          if (!unique.find((q) => q.id === question.id)) {
            unique.push(question);
          }
          return unique;
        }, [])
        .sort((a, b) => {
          if (!a || !b) {
            console.error('[loadCorrectDataAndFilterQuestions] sort 中に null が見つかりました。');
            return 0;
          }
          const countA = updatedData[a.id]?.C || 0;
          const countB = updatedData[b.id]?.C || 0;
          return countB - countA;
        });
  
      // 出題数に応じた問題をスライスして最終結果とする
      const slicedQuestions = mappedFiltered.slice(0, 5);
      setFilteredQuestions(slicedQuestions);
      } catch (error) {
      console.error('[loadCorrectDataAndFilterQuestions] エラー:', error);
    }
  };
  

  // Update displayedQuestion whenever filteredQuestions or currentQuestionIndex changes
  useEffect(() => {
    if (filteredQuestions.length > 0 && currentQuestionIndex < filteredQuestions.length) {
      setDisplayedQuestion(filteredQuestions[currentQuestionIndex]);
      const currentQuestion = filteredQuestions[currentQuestionIndex].question;
      setRisaltQuestion(currentQuestion)
    }
  }, [filteredQuestions, currentQuestionIndex]);

  // filteredQuestionsとcurrentQuestionIndexが変化したらシャッフル更新
  useEffect(() => {
    if (filteredQuestions.length > 0) {
      const current = filteredQuestions[currentQuestionIndex];
      if (!current) return;

      const currentChoices = current.choices || ['デフォルト選択肢1', 'デフォルト選択肢2'];
      setShuffledChoices(shuffleArray(currentChoices));
    }
  }, [currentQuestionIndex, filteredQuestions]);

  // カウントダウン
  useEffect(() => {
    if (!isCountingDown) return;
  
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          clearInterval(interval);
          setIsCountingDown(false);
          return prevCount; // 0 のまま維持
        }
      });
    }, 1000);
  
    return () => clearInterval(interval); // クリーンアップ
  }, [isCountingDown]);
  

  // 解答を保存
  const saveCorrectData = useCallback(async (updatedData) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    } catch (error) {
    }
  }, []);

  const showCorrectAnimation = async () => {
    try {
      await playSoundAsync(correctSound);
      playSound()
     
    } catch (error) {
      console.error('[showCorrectAnimation] エラー:', error);
    }
  };
  
  const showCorrectAnimation1 = async () => {
    try {
      await playSoundAsync(beepSound);
    } catch (error) {
      console.error('[showCorrectAnimation1] エラー:', error);
    }
  };
  

  // 答えをチェックする関数内（handleAnswer）
  const handleAnswer = async (choice = null) => {
    setShowImage(true)//画像表示
    const currentQuestion = displayedQuestion; // state から取得
    if (!currentQuestion || !currentQuestion.correctAnswer) {
      return;
    }
  
    const Useranswer = choice !== null ? choice : userAnswer.trim();
  
    if (!Useranswer) {
      // 回答が空欄の場合、不正解と同様の処理を実行
      await handleIncorrectAnswer(currentQuestion.correctAnswer, currentQuestion.id);
      // データがない場合は保存せずに、タイムスタンプも保存しない
      return;
    }
  
    let updatedData = { ...correctData };
    let newScore = score;
    const currentCorrectCount = updatedData[currentQuestion.id]?.C || 0;
    const answer = currentQuestion.correctAnswer.trim();

    // 認める語尾
    const optionalEndings = ['な', 'の', 'する','して','は','である'];
    
    const candidates = [answer];
    
    // 語尾を取り除いたバージョンを候補に追加
    optionalEndings.forEach(ending => {
      if (answer.endsWith(ending)) {
        candidates.push(answer.slice(0, -ending.length));
      }
    });
    
    const isCorrect = candidates.includes(Useranswer);
    
    if (isCorrect) {
      // 正解の場合
      setIsAnswerCorrect(true);
      setIsTransitioning(true);
      const now = new Date();
      const formattedDate = await getPreviousQuarterHour(now);
      newScore += 1;
      setScore(newScore);
      updatedData[currentQuestion.id] = {
        C: currentCorrectCount + 1,
        L: formattedDate,
      };
      setCorrectData(updatedData);
      await saveCorrectData(updatedData);
      await showCorrectAnimation();
      setShowNextButton(true);
    } else {
      // 不正解
      await handleIncorrectAnswer(currentQuestion.correctAnswer, currentQuestion.id);
    }
  };

  // 正解時に Lottie アニメーションを再生する useEffect
  useEffect(() => {
    let timeoutId;
    if (isAnswerCorrect && confettiRef.current) {
      timeoutId = setTimeout(() => {
        confettiRef.current.reset();
        confettiRef.current.play();
      }, 100);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isAnswerCorrect]);

  //不正解時の処理
  const handleIncorrectAnswer = useCallback(async (questionId) => {
    setIsTransitioning(true);  // 即座にフィードバック表示
    let updatedData = { ...correctData };
    let currentCorrectCount = updatedData[questionId]?.count || 0;
    let updatedCount = currentCorrectCount;
    
    // 正解数が1,4,6,8の場合のみカウントを減少
    if ([1, 4, 6, 8].includes(currentCorrectCount)) {
      updatedCount = Math.max(currentCorrectCount - 1, 0);
    }
  
    // M が存在しない場合は 1、既に存在する場合は +1
    const currentM = updatedData[questionId]?.M;
    updatedData[questionId] = {
      C: updatedCount,
      L: updatedData[questionId]?.L || null, // "YYYY-MM-DD" 形式を保持
      M: currentM ? currentM + 1 : 1,
    };
  
    setCorrectData(updatedData);
    await saveCorrectData(updatedData);
    setIsAnswerCorrect(false);
    setIsTransitioning(true);
    await showCorrectAnimation1();
    setShowNextButton(true);
  
  }, [correctData, saveCorrectData]);
  
  const timeoutRef = useRef(null);

  const handleNextQuestion = () => {
    setShowImage(false)
    setShowNextButton(false);
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setUserAnswer('');
      setIsAnswerCorrect(null);
      if (currentQuestionIndex < filteredQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setIsQuizFinished(true);
      }
      
      // タイマーのIDを保存
      timeoutRef.current = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
        setIsTransitioning(false);
      }, 100);
    });
  };
  
  // アンマウント時にタイマーをキャンセル
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  

  const animatedStyles = {
    opacity: fadeAnim,
    transform: [
      {
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0],
        }),
      },
    ],
  };

  // コンポーネントのアンマウント時にsoundRefを解放する処理
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
        soundRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    let animation;
    if (displayedQuestion) {
      animation = Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      });
      animation.start();
    }
    return () => {
      if (animation) {
        animation.stop(); // アニメーションを停止してクリーンアップ
      }
    };
  }, [displayedQuestion, fadeAnim]);

  useEffect(() => {
    if (correctCount === 2 || correctCount === 7) {
      // フェードインアニメーションを開始
      Animated.timing(fadeAnim, {
        toValue: 1, // 完全に表示
        duration: 500, // 500msでアニメーション
        useNativeDriver: true, // ネイティブドライバーを使用
      }).start();
    } else {
      // フェードアウト（必要なら追加）
      Animated.timing(fadeAnim, {
        toValue: 0, // 非表示
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [correctCount]);

  // キーボード入力
  const handleKeyPress = (key) => {
    if (key === 'backspace') {
      setUserAnswer((prev) => prev.slice(0, -1));
    } else if (key === 'submit') {
      handleAnswer();
    } else {
      setUserAnswer((prev) => prev + key);
    }
  };

  const [loadedSound, setLoadedSound] = useState(null);
  const [reloading, setReloading] = useState(false);
  const [queuedPlay, setQueuedPlay] = useState(false);

  
  useEffect(() => {
    if (filteredQuestions.length > 0 && currentQuestionIndex < filteredQuestions.length) {
      const question = filteredQuestions[currentQuestionIndex];
      setDisplayedQuestion(question);
      setRisaltQuestion(question.question);
  
      // 音声と画像をそれぞれ読み込む
      loadAudio(question);
      loadImage(question);
    }
  }, [filteredQuestions, currentQuestionIndex]);


    // 🖼️ 画像読み込み処理
    const loadImage = async (question) => {
      try {
        // 例: レベル＋ID をキーにしたいなら
        let currentLevel = level || "3";
        // ドットが含まれていたらアンダースコアに置換
        if (currentLevel.includes('.')) {
          currentLevel = currentLevel.replace(/\./g, '_');
        }    
        const imageKey = `${currentLevel}-${question.id}`;
        // getOrSaveImageUrlRTDB の戻り値を受け取る
        const url = await getOrSaveImageFileUrlRTDB(imageKey, question.question);
        if (url) {
          // state にセットして画面に反映
          setImageData({
            src: { large: url },
            photographer: 'Unknown',  // もしDBにphotographer情報が入っていれば使う
          });
          console.log('画像URL保存成功',url)
        } else {
          console.warn('画像URLの取得に失敗しました');
          setImageData(null);
        }
      } catch (error) {
        console.error('画像取得エラー:', error);
        setImageData(null);
      }
    };
    
  
  // 🔊 音声読み込み処理
  const loadAudio = async (question) => {
    setReloading(true);
    try {
      if (loadedSound) {
        await loadedSound.unloadAsync();
        setLoadedSound(null);
      }
  
      // ① 元のレベル文字列をそのまま取得（ドットもアンダースコアも変換しない）
      const folder = level || "3";  // 例: "1.5"
  
      console.log('🛠️ using folder:', folder);
  
      // ② そのままパスを組み立て
      const filePath = `${folder}/${question.id}.mp3`;  // => "1.5/2.mp3"
      console.log('🛠️ fetching from path:', filePath);
  
      // ③ ダウンロードURLを取得
      const soundUrl = await getDownloadURL(ref(storage, filePath));
      console.log('🛠️ soundUrl:', soundUrl);
  
      // ④ Audio をロード＆準備
      const source = { uri: soundUrl };
      const sound = new Audio.Sound();
      await sound.loadAsync(source, { shouldPlay: false }, true);
      await new Promise(resolve => setTimeout(resolve, 100));
      const status = await sound.getStatusAsync();
      if (!status.isLoaded || !status.durationMillis) {
        throw new Error('Sound failed to load properly');
      }
      setLoadedSound(sound);
  
    } catch (error) {
      console.error('音声リロードエラー:', error);
      setLoadedSound(null);
    }
    setReloading(false);
  };
  
  
  const [isLoading, setIsLoading] = useState(false);

  // 音声再生ボタンで呼び出す関数
  const playSound = async () => {
    // もしまだリロード中または音声がロードされていない場合は、
    setIsLoading(true);    
    if (reloading || !loadedSound) {
      console.warn('音声がまだロードされていません。再生をキューに追加します。');
      setIsLoading(false); // キューへ登録したらローディング状態を解除
      setQueuedPlay(true);
      return;
    }
    try {
      // 先頭に再生位置をリセットしてから再生
      await loadedSound.setPositionAsync(0);
      await loadedSound.playAsync();
      setIsLoading(false);
    } catch (error) {
      console.error('音声再生エラー:', error);
    }
  };

  // reloading が終了したタイミングで、もし queuedPlay が true なら再生を自動で実行
  useEffect(() => {
    if (!reloading && queuedPlay && loadedSound) {
      playSound();
      setQueuedPlay(false);
    }
  }, [reloading, queuedPlay, loadedSound]);


  // カウントダウン画面
  if (isCountingDown) {
    return (
        <Countdown 
          count={3}
          forceTheme={isDarkMode === true ? 'dark' : 'light'}
        />
    );
  }

  // 出題数0
  if (filteredQuestions.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noQuestionsText}>出題する問題がありません。</Text>
      </View>
    );
  }

  // クイズ終了
  if (isQuizFinished) {
    return (
      <QuizEndComponent
        score={score}
        total={filteredQuestions.length}
        onFinish={() => router.push('/')}
  //      isAnySubscribed={isAnySubscribed}
        forceTheme={isDarkMode === true ? 'dark' : 'light'}
      />
    );
  }



  // 現在の問題 (using displayedQuestion from state)
  const currentQuestion = displayedQuestion;
  const correctCount = correctData[currentQuestion.id]?.C || 0;

  // 前回正解からの経過時間
  const L = correctData[currentQuestion.id]?.L
    ? new Date(correctData[currentQuestion.id].L)
    : null;

  const showKeyboardExample = [3, 4, 5, 6, 8, 9].includes(correctCount);

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      {/* 
        ScrollView 1つだけで画面全体をスクロール 
      */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          paddingBottom: 50,
        }}
      >
        {/* 上部ウィジェット 
        <View style={styles.widgetsContainer}>
          <SquareWidgets
            questionId={currentQuestion.id}
            correctCount={correctCount}
            minutesElapsed={minutesElapsed}
            isAnswerCorrect={isAnswerCorrect}
          />
        </View>

        {/* フィードバック用の「正解」または「不正解」のテキストを NeomorphBox の外側に表示 */}

          {isTransitioning ? (
              <>
                {isAnswerCorrect === true && (
                  <View style={styles.greenBar}></View>
                )}
                {isAnswerCorrect === false && (
                  <View style={styles.redBar}></View>
                )}
              </>
          ) : (
              <View style={styles.nullBar}></View>
          )}

      <View style={styles.container}>

      <View style={styles.Adcontainer}>
          <BannerAdComponent />
          {/* <NeomorphBox
            width={320}
            height={50}
            forceTheme={isDarkMode ? 'dark' : 'light'}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            {/* <Text style={{ fontSize: 16, color: isDarkMode ? '#fff' : '#000' }}>
              {customerInfo?.entitlements?.active?.premium
                ? customerInfo.entitlements.active.premium.productIdentifier
                : 'プラン情報なし'}
            </Text> 
          </NeomorphBox> */}
      </View>

      <View style={styles.mLabelContainer}>
          <MLabel
            mValue={correctData[currentQuestion.id]?.M}
            questionId={currentQuestion.id}
            forceTheme={isDarkMode === true ? 'dark' : 'light'}
          />
        </View>

        {/* 問題・解答など */}
        <NeomorphBox
          width={SCREEN_WIDTH * 0.85}
          height={150} // isTransitioning の条件が同じ高さの場合は固定でも問題ありません
          style={styles.neomorphBox}
          forceTheme={forceTheme}
        >
          <Animated.View style={[animatedStyles, { width: '100%', alignItems: 'center' }]}>
            {/* 右上に M のラベルを表示 */}
            <View style={styles.questionSection}>
              {!isTransitioning ? (
                <>
                  {/* 和訳 */}
                  {(correctCount === 4 || correctCount === 6|| correctCount === 8) && (
                    <Text style={styles.translationText}>
                      和訳: {currentQuestion.japan || '和訳なし'}
                    </Text>
                  )}
                  {/* 問題文 */}
                  {correctCount !== 5 && (
                    <Text style={styles.questionText}>
                      {currentQuestion.question}
                    </Text>
                  )}
                  {/* 音声再生ボタン（correctCount===5） */}
                  {correctCount === 5 && (
                    <TouchableOpacity
                    onPress={playSound}
                    accessibilityLabel="音声再生ボタン"
                    accessibilityHint="タップすると聞こえた単語の音声が再生されます"
                  >
                    <NeomorphBox
                      width={SCREEN_WIDTH * 0.60}
                      height={60}
                      forceTheme={forceTheme}
                    >
                      { 
                        isLoading ? (
                          // ローディング中は ActivityIndicator を表示
                          <ActivityIndicator size="small" color="#000" style={styles.loadingIndicator} />
                        ) : (
                          <Text style={styles.playButtonText}>タップして聞こえた単語を入力</Text>
                        )
                      }
                    </NeomorphBox>
                  </TouchableOpacity>
                  )}
                </>
              ) : (
                <>
                  {/* フィードバック内容のうち、実際の「正解」「不正解」のラベルは外部に出すため、ここではアニメーションやその他のフィードバック情報のみを表示 */}
                  {isAnswerCorrect && (
                    <View style={styles.lottieContainer}>
                      <LottieView
                        ref={confettiRef}
                        source={HanahubukiAnimation}
                        autoPlay={false}
                        loop={false}
                        style={styles.lottieStyle}
                        enableMergePathsAndroidForKitKatAndAbove
                      />
                    </View>
                  )}
                  <Text style={styles.feedbackText}>{risaltQuestion}</Text>
                  <Text style={styles.feedbackText}>{currentQuestion.correctAnswer}</Text>
                </>
              )}
            </View>
          </Animated.View>
        </NeomorphBox>


          {/* 回答セクション (未回答時) */}
          {!isTransitioning && (
            <>
            <View style={styles.choicesMaxContainer}>
              {/* 選択肢 (count===0 or 1) */}
              {(correctCount === 0 || correctCount === 2) && (
                <View style={styles.choicesContainer}>
                  {shuffledChoices.map((choice, idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={styles.choiceButton}
                      onPress={() => handleAnswer(choice)}
                    >
                      <NeomorphBox
                        width={SCREEN_WIDTH * 0.85}
                        height={60}
                        forceTheme={forceTheme}
                      >
                        <Text style={styles.choiceText}>{choice}</Text>
                      </NeomorphBox>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

              {/* テキスト入力 (count===1 or 7) */}
              {(correctCount === 1 || correctCount === 7) && (
            <View style={styles.absoluteInputContainer}>
              <View style={styles.inputRow}>
                <NeomorphBox width={SCREEN_WIDTH * 0.6} height={60}  forceTheme={forceTheme}>
                <TextInput
                  style={styles.input}
                  value={userAnswer}
                  onChangeText={(text) => setUserAnswer(text)}
                  placeholder="日本語を入力してください"
                  editable={true} // ここを確認
                  returnKeyType="done"
                  onSubmitEditing={(event) => handleAnswer(event.nativeEvent.text)}
                />
                </NeomorphBox>

                <NeomorphBox width={80} height={60}  forceTheme={forceTheme}> 
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => handleAnswer()}
                  >
                    <Text style={styles.submitButtonText}>確定</Text>
                  </TouchableOpacity>
                </NeomorphBox>
              </View>
            </View>
              )}

            </>
          )}

            {showImage && 
            <>
            <NeomorphBox
              width={SCREEN_WIDTH * 0.85}
              height={SCREEN_WIDTH * 0.85 * (2 / 3)}
              forceTheme={forceTheme}
              style={styles.ImageBox}
            >
              <AnimatedRemoteImage
                imageData={imageData}
                width={SCREEN_WIDTH * 0.85}
                height={SCREEN_WIDTH * 0.85 * (2 / 3)}
                forceTheme={forceTheme}
              />
              </NeomorphBox>
            </>
            }
            {/* 1秒後に表示される次へボタン */}
            {showNextButton && (
              <View style={styles.nextButtoncontainer}>
              <TouchableOpacity
                style={[styles.nextButton, { opacity: fadeAnim }]}
                onPress={handleNextQuestion}
                accessibilityLabel="次へボタン"
                accessibilityHint="タップすると次の質問に進みます"
              >
                <NeomorphBox
                  width={SCREEN_WIDTH * 0.85}
                  height={60}
                  style={styles.neomorphStyle1}
                  forceTheme={forceTheme}
                >
                  <Text style={styles.nextButtonText}>
                    {currentQuestionIndex < filteredQuestions.length - 1
                      ? '次へ'
                      : '終了'}
                  </Text>
                </NeomorphBox>
              </TouchableOpacity>
              <View style={{ height: 20 }} />
              </View>
            )}
        </View>
        </ScrollView>

        {/* キーボード (count===3,4,5,6,8) で表示 */}
        {showKeyboardExample && !isTransitioning && (
            <SafeAreaView style={styles.keyboardContainer}>
              <KeyboardExample onKeyPress={handleKeyPress} userAnswer={userAnswer} forceTheme={forceTheme}/>
            </SafeAreaView>
        )}
    </KeyboardAvoidingView>
  );
}
function createStyles(isDark) {
  // テーマに応じた色を一元管理
  const backgroundColor = isDark ? '#303030' : '#E3E5F3';
  const textColor       = isDark ? '#ccc'    : '#666';
  const questionColor   = isDark ? '#ddd'    : '#666';
  const buttonBg        = isDark ? '#444'    : '#6200ee';
  const buttonText      = isDark ? '#eee'    : '#666';
  const borderColor     = isDark ? '#888'    : '#777';

  const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    backgroundColor, 
  },
  lottieContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Adcontainer:{
    zIndex:5,
    top:40
  },
  // LottieView 自体のサイズ指定（例：画面の50%の幅、高さにする）
  lottieStyle: {
    width: '150%',
    height: '150%',
    // 背景色を除去して、アニメーションの内容が見えるようにする
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor,
  },
  widgetsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
    backgroundColor,
    width: '100%',
    height: 200, // 任意の高さに調整（例：200）
  },
  neomorphBox: {
    position: 'absolute',
    top: 220,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    zIndex:3
  },  
  ImageBox: {
    position: 'absolute',
    top: 430,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:4,
  },
  questionSection: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  translationText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 3,
    color: textColor,
  },
  questionText: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
    marginBottom:45,
    color: questionColor,
  },
  playButton: {
    backgroundColor: buttonBg,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  playButtonText: {
    color: buttonText,
    fontWeight: 'bold',
    fontSize: 16,
  },
  neomorphStyle1: {
    marginTop: 100,
  },
  choicesContainer: {
    position:'relative',
    width: '100%',
  },
  choicesMaxContainer:{
    flex: 1,
    justifyContent: 'flex-end', // 子要素を下部に配置
  },
  choiceButton: {
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  choiceText: {
    color: buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    // width: '100%',  // 必要に応じて調整
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 50,
    borderColor,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    textAlign: 'center',
    color: textColor,
  },
  absoluteInputContainer: {
    position: 'absolute',
    top: 400,   // 任意の数値に調整
    alignItems: 'center',  // 横方向の中央寄せ
    // justifyContent: 'center', // 縦方向の配置は不要ならコメントアウト
    zIndex: 3,          
  },
  submitButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderColor,
    borderRadius: 5,
  },
  submitButtonText: {
    color: textColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  keyboardContainer: {
    position: 'absolute',
    bottom: 10,
    paddingVertical: 10, // Remove vertical padding to eliminate gap
    paddingHorizontal: 20, // Add horizontal padding for left and right margins
    width: '100%',
},
  mLabelContainer: { 
    position: 'absolute',
    top: 130,
    zIndex: 1, // 他の要素より前面に表示する
    // 必要に応じて横方向の中央寄せなどを追加
    alignItems: 'center',
    width: '100%',
  },
  greenBar: {
    position:'absolute',
    marginTop:350,
    height: 4, // Adjust the height as needed
    width: SCREEN_WIDTH * 0.7,
    backgroundColor: isDark ? 'rgba(0, 255, 191, 0.9)' : 'rgba(0, 239, 123, 0.5)',
    borderRadius: 5, // For rounded corners, adjust as needed
    marginBottom: 10, // Add some margin if necessary
    zIndex:4,
  },
  redBar: {
    position:'absolute',
    marginTop:350,
    height: 4, // Adjust the height as needed
    width: SCREEN_WIDTH * 0.7,
    backgroundColor: isDark ? 'rgba(255, 66, 66, 0.9)' : 'rgba(255, 66, 66, 0.5)',
    borderRadius: 5, // For rounded corners, adjust as needed
    marginBottom: 10, // Add some margin if necessary
    zIndex:4,
  },
  nullBar: {
    position:'absolute',
    marginTop:350,
    height: 4, // Adjust the height as needed
    width: SCREEN_WIDTH * 0.7,
    backgroundColor: 'rgba(114, 114, 114, 0.23)',
    borderRadius: 5, // For rounded corners, adjust as needed
    marginBottom: 10, // Add some margin if necessary
    zIndex:4,
  },
  feedbackText: {
    fontSize: 30,
    color: textColor,
    textAlign: 'center',
  },
  nextButton: {

  },
nextButtoncontainer:{
  flex: 1,
  backgroundColor,
  justifyContent: 'flex-end', // 子要素を下部に配置
  },
  nextButtonText: {
    color:textColor,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  noQuestionsText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
    color: textColor,
  },
  animatedContainer: {
    width: '100%',
    alignItems: 'center',
  },

  });
  return styles;
}