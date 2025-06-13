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
const FSRS_STORAGE_PREFIX = 'FSRS_CARD_';
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
import { createEmptyCard, generatorParameters, fsrs, Rating } from 'ts-fsrs';
//import useSoundFiles from '../components/questioncomp/useSoundFiles'
import useQuestionData from '../components/questioncomp/useQuestionData'; // パスは実際の配置に合わせて調整
import BannerAdComponent from '@/components/indexcomp/BannerAdComponent';
import { storage } from '../firebaseConfig';
import { getDownloadURL, ref } from 'firebase/storage';
import * as Haptics from 'expo-haptics';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
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


export default function QuestionScreen() {
  // 不正解時のリトライ処理
  const handleRetryQuestion = () => {
    // UIリセット
    setShowNextButton(false);
    setIsAnswerCorrect(null);
    setIsTransitioning(false);
    // 現在の問題に対して音声・画像を再ロード
    if (displayedQuestion) {
      loadAudio(displayedQuestion);
      loadImage(displayedQuestion);
    }
    // フェードインアニメーション
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  // FSRSスケジューラ初期化
  const fsrsParams = generatorParameters({ retention: 0.9, hardInterval: 1, easyBonus: 1.3 });
  const scheduler = fsrs(fsrsParams);
  // ユーザー向け復習評価ラベル（日本語）
  const nextButtonLabels = [
    '再学習',  // Again
    '難しい',  // Hard
    '普通',    // Good
    '簡単',    // Easy
  ];
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
  const [displayedQuestion, setDisplayedQuestion] = useState(null);
  const [risaltQuestion, setRisaltQuestion] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [imageData, setImageData] = useState(null);
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
      const loadstart02ndInitSDK = async () => {
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

      loadstart02ndInitSDK();
    }, [])
  );


  const [isCountingDown, setIsCountingDown] = useState(true);
  const [C, setCount] = useState(3.5);
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
    // 1. 正解データを読み込み
    const correctStored = await AsyncStorage.getItem(STORAGE_KEY);
    const parsedCorrectData = correctStored ? JSON.parse(correctStored) : {};
    setCorrectData(parsedCorrectData);
    
    // 2. FSRS と correctData を照合して出題判定
    const now = new Date();
    const dueQuestions = [];
    for (const question of uniqueQuestions) {
      const qid = question.id;
      // ユーザーに回答履歴があれば FSRS 判定
      if (parsedCorrectData[qid] != null) {
        const key = `${FSRS_STORAGE_PREFIX}${qid}`;
        const storedCard = await AsyncStorage.getItem(key);
        if (storedCard) {
          const card = JSON.parse(storedCard);
          card.due = new Date(card.due);
          if (card.due <= now) {
            dueQuestions.push(question);
          }
        } else {
          // FSRS 未初期化なら初期化のみ行い出題
          const card = createEmptyCard(new Date());
          await AsyncStorage.setItem(key, JSON.stringify(card));
          dueQuestions.push(question);
        }
      } else {
        // 回答履歴がなければ常に出題
        dueQuestions.push(question);
      }
    }
    // 最大5問まで出題
    setFilteredQuestions(dueQuestions.slice(0, 5));
  };

  const [currentQuestionId, setCurrentQuestionId] = useState(null);

  useEffect(() => {
    if (displayedQuestion?.id != null) {
      setCurrentQuestionId(displayedQuestion.id);
    }
  }, [displayedQuestion?.id]);


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
    }, 700);
  
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
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      setTimeout(() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }, 300);
      await playSoundAsync(correctSound);
      playSound();
  
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
    setShowImage(true);//画像表示
    const currentQuestion = displayedQuestion; // state から取得
    if (!currentQuestion || !currentQuestion.correctAnswer) {
      return;
    }

    const Useranswer = choice !== null ? choice : userAnswer.trim();

    if (!Useranswer) {
      // 回答が空欄の場合、不正解と同様の処理を実行
      await handleIncorrectAnswer(currentQuestion.id, currentQuestion.correctAnswer);
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
      };
      // FSRSカードを更新・保存 (正解と仮定してGood評価を使用)
      const fsrsKey = `${FSRS_STORAGE_PREFIX}${currentQuestion.id}`;
      // 既存カード読み込み or 新規作成
      const storedFSRS = await AsyncStorage.getItem(fsrsKey);
      let oldCard = storedFSRS ? JSON.parse(storedFSRS) : createEmptyCard(new Date());
      // 評価に応じた次回スケジュールを計算
      const nowFSRS = new Date();
      const result = scheduler.repeat(oldCard, nowFSRS)[Rating.Good];
      const newFSRSCard = result.card;
      // 保存
      await AsyncStorage.setItem(fsrsKey, JSON.stringify(newFSRSCard));
      setCorrectData(updatedData);
      await saveCorrectData(updatedData);
      await showCorrectAnimation();
      setShowNextButton(true);
    } else {
      //不正解
      // 不正解時にFSRSカードを更新 (Again評価)
      const fsrsKey = `${FSRS_STORAGE_PREFIX}${currentQuestion.id}`;
      // 既存カード読み込み or 新規作成
      const storedFSRS = await AsyncStorage.getItem(fsrsKey);
      let oldCard = storedFSRS
        ? JSON.parse(storedFSRS)
        : createEmptyCard(new Date());
      // Again評価で次回スケジュールを計算
      const nowFSRS = new Date();
      const result = scheduler.repeat(oldCard, nowFSRS)[Rating.Again];
      const newFSRSCard = result.card;
      // 保存
      await AsyncStorage.setItem(fsrsKey, JSON.stringify(newFSRSCard));
      // 既存の不正解処理
      await handleIncorrectAnswer(currentQuestion.id, currentQuestion.correctAnswer);
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
  const [missedQuestions, setMissedQuestions] = useState([]);

  
  const handleIncorrectAnswer = useCallback(async (questionId, correctAnswer) => {
    setIsTransitioning(true);  // 即座にフィードバック表示
    let updatedData = { ...correctData };
    
    setCorrectData(updatedData);
    await saveCorrectData(updatedData);

    // 不正解・空白時にmissedQuestionsへ追加
    const missedQuestionObj = {
      id: questionId,
      question: displayedQuestion?.question,
      correctAnswer: correctAnswer,
    };
    setMissedQuestions(prev => {
      if (prev.some(q => q.id === questionId)) return prev;
      return [...prev, missedQuestionObj];
    });

    setIsAnswerCorrect(false);
    setShowImage(false);
    setIsTransitioning(true);
    await showCorrectAnimation1();
    setShowNextButton(true);
  
  }, [correctData, saveCorrectData, displayedQuestion]);
  
  const timeoutRef = useRef(null);

  const handleNextQuestion = async (buttonIndex) => {
    // FSRSカードを buttonIndex に応じた評価で更新
    const ratingMap = [Rating.Again, Rating.Hard, Rating.Good, Rating.Easy];
    const rating = ratingMap[buttonIndex - 1] ?? Rating.Good;
    // ─────────── デバッグログ追加 ───────────
    console.log('[DEBUG] handleNextQuestion called', {
      buttonIndex,
      currentQuestionIndex,
      isTransitioning,
      showNextButton,
    });
    // ────────────────────────────────────────

    const fsrsKey = `${FSRS_STORAGE_PREFIX}${displayedQuestion.id}`;
    const storedCard = await AsyncStorage.getItem(fsrsKey);
    const oldCard = storedCard ? JSON.parse(storedCard) : createEmptyCard(new Date());
    const fsrsResult = scheduler.repeat(oldCard, new Date())[rating];
    const newFSRSCard = fsrsResult.card;
    await AsyncStorage.setItem(fsrsKey, JSON.stringify(newFSRSCard));
    await loadCorrectDataAndFilterQuestions();
    setShowImage(false)
    setShowNextButton(false);
    // ─────────── デバッグログ追加 ───────────
    console.log('[DEBUG] before fadeAnim.start', {
      currentQuestionIndex,
      displayedQuestionId: displayedQuestion?.id,
    });
    // ────────────────────────────────────────

    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      // ─────────── デバッグログ追加 ───────────
      console.log('[DEBUG] fadeAnim callback start', {
        currentQuestionIndex,
        displayedQuestionId: displayedQuestion?.id,
      });
      // ────────────────────────────────────────

      setUserAnswer('');
      setIsAnswerCorrect(null);
      if (currentQuestionIndex < filteredQuestions.length - 1) {
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        // ─────────── デバッグログ追加 ───────────
        console.log('[DEBUG] setCurrentQuestionIndex ->', nextIndex);
        // ────────────────────────────────────────

        // index 更新直後に音声と画像をロード
        const nextQ = filteredQuestions[nextIndex];
        loadAudio(nextQ);
        loadImage(nextQ);
      } else {
        setIsQuizFinished(true);
      }
      // フィードバック状態を解除
      // タイマーのIDを保存し、フェードイン開始
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
    if (!isTransitioning && filteredQuestions.length > 0 && currentQuestionIndex < filteredQuestions.length) {
      const question = filteredQuestions[currentQuestionIndex];
      setDisplayedQuestion(question);
      // ─────────── デバッグログ追加 ───────────
      // ────────────────────────────────────────
      setRisaltQuestion(question.question);
      loadAudio(question);
      loadImage(question);
    }
  }, [filteredQuestions, currentQuestionIndex, isTransitioning]);


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
        } else {
          console.warn('画像URLの取得に失敗しました');
          setImageData(null);
        }
      } catch (error) {
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
      // ② そのままパスを組み立て
      const filePath = `${folder}/${question.id}.mp3`;  // => "1.5/2.mp3"
      // ③ ダウンロードURLを取得
      const soundUrl = await getDownloadURL(ref(storage, filePath));
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
        QentionID={currentQuestionId}
        missedQuestions={missedQuestions}
        onFinish={() => router.push('/')}
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
          paddingBottom: 0,
        }}
      >

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
        </View>
        </ScrollView>

        {/* 1秒後に表示される次へボタン */}
        {/* 正解時：FSRS評価4択を表示 */}
        {showNextButton && isAnswerCorrect && (
          <View style={styles.nextButtonContainer}>
            <View style={styles.nextButtonGrid}>
              {Array.from({ length: 4 }).map((_, idx) => (
                <Animated.View key={idx} style={[styles.nextButtonGridItem, { opacity: fadeAnim }]}>
                  <TouchableOpacity
                    onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                    onPress={() => handleNextQuestion(idx + 1)}
                    accessibilityLabel={`復習評価ボタン：${nextButtonLabels[idx]}`}
                    accessibilityHint="タップすると評価が適用されます"
                  >
                    <NeomorphBox
                      width={(SCREEN_WIDTH * 0.85) / 2 - 5}
                      height={60}
                      forceTheme={forceTheme}
                    >
                      <Text style={styles.nextButtonText}>
                        {nextButtonLabels[idx]}
                      </Text>
                    </NeomorphBox>
                  </TouchableOpacity>
                </Animated.View>
              ))}
            </View>
          </View>
        )}
        {/* 不正解時：Next ボタンのみ表示 */}
        {showNextButton && isAnswerCorrect === false && (
          <View style={styles.nextButtonIncorrectContainer}>
            <TouchableOpacity
              onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
              onPress={() => handleNextQuestion(1)}
            >
              <NeomorphBox
                width={SCREEN_WIDTH * 0.85}
                height={60}
                forceTheme={forceTheme}
              >
                <Text style={styles.nextButtonText}>次へ</Text>
              </NeomorphBox>
            </TouchableOpacity>
          </View>
        )}
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
  const backgroundColor = isDark ? '#303030' : '#E3E5F2';
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
    width: '300%',
    height: '300%',
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
  nextButtoncontainer:{
    flex: 1,
    backgroundColor,
    justifyContent: 'flex-end', // 子要素を下部に配置
  },
  // 新しい nextButtonContainer を追加（存在しなければ）
  nextButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor, // テーマ対応変数
    paddingVertical: 10,
    alignItems: 'center',
  },
  nextButtoncontainer1:{
    flex: 1,
    backgroundColor,
    justifyContent: 'flex-end', // 子要素を下部に配置
    marginBottom:50,
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
  nextButtonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: 10,
    paddingBottom: 20,
  },
  evalTitle: {
    fontSize: 16,
    marginBottom: 8,
    color: textColor,
    textAlign: 'center',
  },
  nextButtonGridItem: {
    width: '50%',
    marginBottom: 10,
  },
  // 不正解時の下部表示用スタイル
nextButtonIncorrectContainer: {
  position: 'absolute',
  bottom: 50,        // 画面下部に配置
  left: 0,
  right: 0,          // 横幅いっぱいに広げて中央揃えを効かせる
  alignItems: 'center',
},
  });
  return styles;
}
