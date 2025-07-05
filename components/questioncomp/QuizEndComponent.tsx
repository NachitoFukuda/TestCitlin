// QuizEndComponent.tsx
import React, { useEffect, useState, useRef, useMemo } from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Dimensions} from 'react-native';
import * as Haptics from 'expo-haptics';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';
import NeomorphBox from '../ui/NeomorphBox';
import { useSubscription } from '@/components/contexts/SubscriptionContext';
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';
import ScoreSummary from './ScoreSummary';
import useQuestionData from './useQuestionData';
import AsyncStorage from '@react-native-async-storage/async-storage';

type QuizEndComponentProps = {
  score: number;
  total: number;
  QentionID: number;
  correctQuestions: Array<{ id: string | number; question: string; correctAnswer: string; japan?: string }>;
  incorrectQuestions?: Array<{ id: string | number; question: string; correctAnswer: string; japan?: string }>;
  questions?: Array<{ id: string | number; question: string; correctAnswer: string; japan?: string }>;
  nextReviewInfo?: { id: string | number; daysUntilDue: number }[];
  visibleCount?: number;
  themeColors?: { textColor: string };
};

type ReviewListProps = {
  questions: Array<{ id: string | number; question: string; correctAnswer: string; japan?: string }>;
  nextReviewInfo: { id: string | number; daysUntilDue: number }[];
  incorrectQuestions: Array<{ id: string | number; question: string; correctAnswer: string; japan?: string }>;
  visibleCount: number;
  themeColors: { textColor: string };
};

const ReviewList: React.FC<ReviewListProps> = ({
  questions,
  nextReviewInfo,
  incorrectQuestions,
  visibleCount,
  themeColors,
}) => (
  <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <NeomorphBox
        width={SCREEN_WIDTH * 0.9}
        height={330}
        style={{
          marginBottom: 20,
          marginTop: 30,
          marginHorizontal: 20,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            width: '100%',
            justifyContent: 'flex-start',
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ flex: 4, textAlign: 'center', fontWeight: 'bold', color: themeColors.textColor }}>
            英語
          </Text>
          <Text style={{ flex: 4, textAlign: 'center', fontWeight: 'bold', color: themeColors.textColor }}>
            日本語
          </Text>
          <Text style={{ flex: 2, textAlign: 'center', fontWeight: 'bold', color: themeColors.textColor }}>
            次の出題
          </Text>
        </View>
        {questions.map((q, idx) => {
          if (idx >= visibleCount) return null;
          const isMiss = incorrectQuestions.some(m => String(m.id) === String(q.id));
          const info = nextReviewInfo.find(item => item.id === q.id);
          return (
            <NeomorphBox
              key={q.id}
              width={SCREEN_WIDTH * 0.8}
              height={40}
              style={{ marginBottom: 12, justifyContent: 'center', alignItems: 'center' }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  justifyContent: 'flex-start',
                }}
              >
                <Text
                  style={{
                    flex: 4,
                    textAlign: 'center',
                    color: isMiss ? 'red' : themeColors.textColor,
                    fontSize: 16,
                    lineHeight: 22,
                  }}
                >
                  {q.question}
                </Text>
                <Text
                  style={{
                    flex: 4,
                    textAlign: 'center',
                    color: isMiss ? 'red' : themeColors.textColor,
                    fontSize: 16,
                    opacity: isMiss ? 1 : 0.7,
                    lineHeight: 22,
                  }}
                >
                  {q.japan ?? q.correctAnswer}
                </Text>
                <Text
                    style={{
                      flex: 2,
                      color: isMiss ? 'red' : themeColors.textColor,
                      fontSize: 14,
                      textAlign: 'center',
                    }}
                  >
                    {info?.daysUntilDue === 0
                      ? '本日'
                      : `${info?.daysUntilDue ?? 0}日後`}
                  </Text>
              </View>
            </NeomorphBox>
          );
        })}
      </NeomorphBox>
    </View>
  </View>
);

function calculateCompletionRates(
  results: number[],
  counts: number[]
): (number | null)[] {
  return results.map((target, index) => {
    const actual = counts[index] ?? 0;
    if (target <= 0) {
      // 目標値が0の場合はデータ無しとみなす
      return null;
    }
    // 達成率を計算し、小数点以下2桁に丸め、100%を上限
    const rate = parseFloat(((actual / target) * 100).toFixed(2));
    return Math.min(rate, 100);
  });
}

const POINTS_STORAGE_KEY = '@quiz_points';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const QuizEndComponent: React.FC<QuizEndComponentProps> = ({
  score,
  total,
  QentionID,
  correctQuestions,
  incorrectQuestions = [],
  questions: propQuestions,
  nextReviewInfo: propNextReviewInfo,
  visibleCount: propVisibleCount,
  themeColors: propThemeColors,
}) => {

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: InterruptionModeIOS.MixWithOthers,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      staysActiveInBackground: false,
    });
  }, []);

// Audio 再生用の refs とロード済みフラグ
const soundRef = useRef<Audio.Sound>(new Audio.Sound());
const wrongSoundRef = useRef<Audio.Sound>(new Audio.Sound());
const fullSoundRef = useRef<Audio.Sound>(new Audio.Sound());
const [soundLoaded, setSoundLoaded] = useState(false);
const [wrongSoundLoaded, setWrongSoundLoaded] = useState(false);
const [fullSoundLoaded, setFullSoundLoaded] = useState(false);
// サウンド配列とインデックスref
const correctSounds = [
  require('../../assets/sound/piko1.mp3'),
  require('../../assets/sound/piko2.mp3'),
  require('../../assets/sound/piko3.mp3'),
  require('../../assets/sound/piko4.mp3'),
  require('../../assets/sound/piko5.mp3'),
];
const incorrectSounds = [
  require('../../assets/sound/kako.mp3'),
];
const soundIndexRef = useRef<{ correct: number; incorrect: number }>({ correct: 0, incorrect: 0 });
  // 音声再生用リピート防止フラグ
  const revealPlayedRef = useRef(false);

// 正解音ロード
useEffect(() => {
  (async () => {
    try {
      await soundRef.current.loadAsync(require('../../assets/sound/pa.mp3'));
      setSoundLoaded(true);
    } catch (e) {
      console.error('正解音ロード失敗:', e);
    }
  })();
  return () => { soundRef.current.unloadAsync(); };
}, []);

// 不正解音ロード
useEffect(() => {
  (async () => {
    try {
      await wrongSoundRef.current.loadAsync(require('../../assets/sound/kako.mp3'));
      setWrongSoundLoaded(true);
    } catch (e) {
      console.error('不正解音ロード失敗:', e);
    }
  })();
  return () => { wrongSoundRef.current.unloadAsync(); };
}, []);

// 満点音ロード
useEffect(() => {
  (async () => {
    try {
      await fullSoundRef.current.loadAsync(require('../../assets/sound/full.mp3'));
      setFullSoundLoaded(true);
    } catch (e) {
      console.error('Failed to load full-score sound:', e);
    }
  })();
  return () => {
    fullSoundRef.current.unloadAsync();
  };
}, []);

  const filteredQuestions = useMemo(
    () => [...(correctQuestions ?? []), ...(incorrectQuestions ?? [])],
    [correctQuestions, incorrectQuestions]
  );

// 順次表示＋音声再生 (TestCitlin と同じロジック)
useEffect(() => {
  if (revealPlayedRef.current) return;
  if (!soundLoaded || !wrongSoundLoaded || !fullSoundLoaded) return;
  revealPlayedRef.current = true;
  setVisibleCount(0);
  const timeouts: NodeJS.Timeout[] = [];
  filteredQuestions.forEach((q, idx) => {
    const timeout = setTimeout(async () => {
      const isMiss = incorrectQuestions.some(m => m.id === q.id);
      // ログ: 音声再生タイミング
      setVisibleCount(prev => prev + 1);
      try {
        // 動的再生: 毎回新しいSoundインスタンスで再生 (サウンドをローテーション)
        {
          // サウンドリストとインデックスローテーション
          let sourceList = isMiss ? incorrectSounds : correctSounds;
          let key: 'correct' | 'incorrect' = isMiss ? 'incorrect' : 'correct';
          const idx = soundIndexRef.current[key];
          const source = sourceList[idx];
          // advance index and wrap around
          soundIndexRef.current[key] = (idx + 1) % sourceList.length;
          const { sound: dynamicSound } = await Audio.Sound.createAsync(source);
          await dynamicSound.setPositionAsync(0);
          await dynamicSound.playAsync();
          dynamicSound.setOnPlaybackStatusUpdate((status) => {
            // ロード済みか確認
            if (!status.isLoaded) {
              // エラー時はエラーログ
              if ('error' in status) {
                console.error('再生ステータスエラー:', status.error);
              }
              return;
            }
            // 再生完了時にアンロード
            if (status.didJustFinish) {
              dynamicSound.unloadAsync();
            }
          });
        }
        // 全問正解時の音声再生（最後の問題の後に）
        if (idx === filteredQuestions.length - 1 && score === total) {
          await fullSoundRef.current.setPositionAsync(0);
          await fullSoundRef.current.playAsync();
        }
      } catch (e) {
        console.error('音声再生エラー:', e);
      }
    }, idx * 200);
    timeouts.push(timeout);
  });
  return () => timeouts.forEach(t => clearTimeout(t));
}, [soundLoaded, wrongSoundLoaded, fullSoundLoaded]);



  const { customerInfo } = useSubscription();
  const isVIP = customerInfo?.entitlements?.active?.['citlin_ads_disabled']?.isActive === true;
  // ポイント計算: 問題IDが大きいほど指数関数的に倍率アップ
  const validQID =
  typeof QentionID === 'number' && !isNaN(QentionID)
    ? QentionID
    : Number(filteredQuestions[filteredQuestions.length - 1]?.id) || 0;
  const basePoint = 10;
  const idMultiplier = Math.pow(1.05, validQID);// 基本報酬
  const baseReward = Math.round(score * basePoint * idMultiplier);
  // 全問正解ボーナス
  let bonusPoints = 0;
  if (score === total && total > 0) {
    const fullBonusMultiplier = Math.pow(1.1, score);
    bonusPoints = Math.round(baseReward * (fullBonusMultiplier - 1));
  }
  // VIPボーナス
  const vipMultiplier = isVIP ? 2 : 1;

  // 合計ポイント（基本報酬 + VIPボーナス + 全問正解ボーナス）
  const points = (baseReward + bonusPoints) * vipMultiplier;
  const [animatedScore, setAnimatedScore] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [displayPoints, setDisplayPoints] = useState(baseReward);
  const [showConfetti, setShowConfetti] = useState(false);
  const [finishProcessing, setFinishProcessing] = useState(false);
  const confettiRef = useRef<LottieView>(null);
  const [dayCount, setDayCount] = useState<number>(1);
  const [todayGeneratedData, setTodayGeneratedData] = useState<any>(null);
  const [TodayaverageRate, setTodayaverageRate] = useState<number>(0);
  const defaultHeatmapData: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  const [Data, setData] = useState<number[][]>(defaultHeatmapData);
  const [nextReviewInfo, setNextReviewInfo] = useState<{ id: string | number; daysUntilDue: number }[]>([]);
  const { level } = useQuestionData();
  // ---- Level‑aware storage keys ----
  const sanitizedLevel = useMemo(
    () => String(level ?? '').replace(/\./g, '_'),
    [level]
  );
  const STORAGE_KEY_LEVEL = `correctData_${sanitizedLevel}`;
  const SCORE_BY_DATE_KEY = `@score_by_date_${sanitizedLevel}`

  // 初期表示時にスコア履歴データをログ出力
  const initialScoreMapRef = useRef<Record<string, number> | null>(null);
  const [isHistoryLoaded, setHistoryLoaded] = useState(false);
  const CORRECT_KEY = `DAYLY_CORRECT_${sanitizedLevel}`;
  // 読み込んだ正解数履歴を保持
  const [correctHistory, setCorrectHistory] = useState<Record<string, number>>({});


  const themeColors = useMemo(() => {
    return {
      containerBg: '#E3E5F2',
      textColor: '#666',
      questionTextColor:  '#666',
      buttonTextColor: '#666',
    };
  }, []);

  useEffect(() => {
    (async () => {
      try {
        // 既存の heatmap データと日付を取得
        const json = await AsyncStorage.getItem('@heatmap_data');
        let stored: { matrix: number[][]; date?: string } | null = null;
        try {
          stored = json ? JSON.parse(json) : null;
        } catch {
          stored = null;
        }
        // 保存されていた日付が何週間前か判定
          let weekBucket = '過去4週間以上';
          if (stored?.date) {
            const storedDateObj = new Date(stored.date);
            const now = new Date(Date.now());            // 今週の始まり（日曜日）
            const thisSunday = new Date(now);
            thisSunday.setDate(now.getDate() - now.getDay());
            thisSunday.setHours(0, 0, 0, 0);
            // 先週の始まりと終わり
            const lastWeekStart = new Date(thisSunday);
            lastWeekStart.setDate(thisSunday.getDate() - 7);
            const lastWeekEnd = new Date(thisSunday);
            lastWeekEnd.setMilliseconds(-1);
            // 2週間前
            const twoWeeksStart = new Date(thisSunday);
            twoWeeksStart.setDate(thisSunday.getDate() - 14);
            const twoWeeksEnd = new Date(lastWeekStart);
            twoWeeksEnd.setMilliseconds(-1);
            // 3週間前
            const threeWeeksStart = new Date(thisSunday);
            threeWeeksStart.setDate(thisSunday.getDate() - 21);
            const threeWeeksEnd = new Date(twoWeeksStart);
            threeWeeksEnd.setMilliseconds(-1);

            if (storedDateObj >= thisSunday) {
              weekBucket = '今週';
            } else if (storedDateObj >= lastWeekStart && storedDateObj <= lastWeekEnd) {
              weekBucket = '先週';
            } else if (storedDateObj >= twoWeeksStart && storedDateObj <= twoWeeksEnd) {
              weekBucket = '2週間前';
            } else if (storedDateObj >= threeWeeksStart && storedDateObj <= threeWeeksEnd) {
              weekBucket = '3週間前';
            }
          }
        // 初期値設定 (4行×7列)
        const defaultHeatmapData: number[][] = [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
        ];
        let matrix: number[][];
        if (weekBucket === '過去4週間以上') {
          matrix = defaultHeatmapData;
        } else if (weekBucket === '3週間前') {
          // 3週間前は4行目を先頭に移動し、他行を0で初期化
          const row4 = Array.isArray(stored?.matrix) && stored.matrix.length >= 4
            ? stored.matrix[3]
            : defaultHeatmapData[3];
          matrix = [
            row4,
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
          ];
        } else if (weekBucket === '2週間前') {
          // 2週間前は3行目(旧 index2)と4行目(旧 index3)を先頭に移動、残りを0で初期化
          const row3 = Array.isArray(stored?.matrix) && stored.matrix.length >= 3
            ? stored.matrix[2]
            : defaultHeatmapData[2];
          const row4 = Array.isArray(stored?.matrix) && stored.matrix.length >= 4
            ? stored.matrix[3]
            : defaultHeatmapData[3];
          matrix = [
            row3,
            row4,
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
          ];
        } else if (weekBucket === '先週') {
          // 先週は2行目(index1)〜4行目(index3)を先頭に移動し、最後の行を0で初期化
          const row2 = Array.isArray(stored?.matrix) && stored.matrix.length >= 2
            ? stored.matrix[1]
            : defaultHeatmapData[1];
          const row3 = Array.isArray(stored?.matrix) && stored.matrix.length >= 3
            ? stored.matrix[2]
            : defaultHeatmapData[2];
          const row4 = Array.isArray(stored?.matrix) && stored.matrix.length >= 4
            ? stored.matrix[3]
            : defaultHeatmapData[3];
          matrix = [
            row2,
            row3,
            row4,
            [0, 0, 0, 0, 0, 0, 0],
          ];
        }else if (
          Array.isArray(stored?.matrix) &&
          stored.matrix.length === 4 &&
          stored.matrix.every(row => Array.isArray(row) && row.length === 7)
        ) {
          matrix = stored.matrix;
        } else if (weekBucket === '今週') {
          // 今週は前回のデータを消さずにそのまま利用し、新しい値だけ追加
          matrix = Array.isArray(stored?.matrix) && stored.matrix.length === 4
            ? stored.matrix
            : defaultHeatmapData;
          } else {
          matrix = defaultHeatmapData;
        }
        // 日付がない場合は今日の日付を保存
        const dateStr = stored?.date ?? new Date().toISOString();
        // 更新する列インデックス (曜日 0-6)
        const todayDayNumber = new Date().getDay();
        if (matrix[3] && todayDayNumber < matrix[3].length) {
          matrix[3][todayDayNumber] = TodayaverageRate;
        } else {
        }
        // 保存
        await AsyncStorage.setItem(
          '@heatmap_data',
          JSON.stringify({ matrix, date: dateStr })
        );
        setData(matrix);
      } catch (err) {
        console.error('[Heatmap] heatmap_data 更新エラー:', err);
      }
    })();
  }, [TodayaverageRate]);

  useEffect(() => {
    AsyncStorage.getItem('@deadline_days')
      .then(json => {
        const deadlineData = json ? JSON.parse(json) : null;
        if (deadlineData && deadlineData.savedAt) {
          const savedDate = new Date(deadlineData.savedAt);
          // 正午をまたいでも日付差分を正しく取るため00:00にリセット
          savedDate.setHours(0, 0, 0, 0);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const diffTime = today.getTime() - savedDate.getTime();
          // 日数を算出（保存日を1日目とする）
          const dayCount = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
          setDayCount(dayCount)
        }
      })
      .catch(err => {
        console.error('[QuizEndComponent] Error loading @deadline_days:', err);
      });
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const storedData = await AsyncStorage.getItem('@generated_data');
        const generatedData = storedData ? JSON.parse(storedData) : [];
        let matched: any = null;
        if (Array.isArray(generatedData)) {
          matched = generatedData.find((item: any) => item.id === dayCount);
        } else if (typeof generatedData === 'object') {
          matched = (generatedData as Record<number, any>)[dayCount];
        }
        setTodayGeneratedData(matched);
      } catch (err) {
        console.error('[QuizEndComponent] Error loading @generated_data:', err);
      }
    })();
  }, [dayCount]);
  
  useEffect(() => {
    (async () => {
      try {
        const storedData = await AsyncStorage.getItem(STORAGE_KEY_LEVEL);
        // もしデータがなければ空オブジェクトにフォールバック
        const generatedData = storedData
          ? (JSON.parse(storedData) as Record<string, { C?: number; L?: number }> )
          : {};  
        // 値オブジェクトだけ取り出す
        const values = Object.values(generatedData);
        const count2_3 = values.filter(obj => obj.C === 2 || obj.C === 3).length;
        const count4_5 = values.filter(obj => obj.C === 4 || obj.C === 5).length;
        const count6_7 = values.filter(obj => obj.C === 6 || obj.C === 7).length;
        const count8_9 = values.filter(obj => obj.C === 8 || obj.C === 9).length;

        const results = todayGeneratedData?.result ?? [];
        const counts = [count2_3, count4_5, count6_7, count8_9];
        const completionRates = await Promise.resolve(calculateCompletionRates(results, counts));
        const nonNullRates = completionRates.filter((r): r is number => r !== null);
        const averageRate =
          nonNullRates.length > 0
            ? parseFloat(
                (
                  nonNullRates.reduce((sum, r) => sum + r, 0) /
                  nonNullRates.length
                ).toFixed(2)
              )
            : 0;
        setTodayaverageRate(averageRate)
      } catch (err) {
        console.error('[QuizEndComponent] Error loading correctData:', err);
      }
    })();
  }, [todayGeneratedData]);


  // スコアを徐々にカウントアップするアニメーション
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (animatedScore < score) {
      interval = setInterval(() => {
        setAnimatedScore((prev) => {
          if (prev < score) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [animatedScore, score]);

  // アニメーション完了時に全問正解ボーナスを付与
  useEffect(() => {
    const addPerfectBonus = async () => {
      if (!isHistoryLoaded) return;
      if (animatedScore === score && score === total && total > 0) {
        try {
          // 基本報酬の計算
          const basePoint = 10;
          const idMultiplier = Math.pow(1.05, QentionID);
          const baseReward = Math.round(score * basePoint * idMultiplier);
          // 全問正解ボーナスの計算
          const fullBonusPoints = Math.round(baseReward * (Math.pow(1.1, score) - 1));
          
          // 現在のポイントを取得
          const stored = await AsyncStorage.getItem(POINTS_STORAGE_KEY);
          const currentPoints = stored ? JSON.parse(stored) : 0;
          
          // ボーナスを加算して保存
          const totalPoints = currentPoints + fullBonusPoints;
          await AsyncStorage.setItem(POINTS_STORAGE_KEY, JSON.stringify(totalPoints));

          // 全問正解時にもスコア履歴をマージして保存
          const existingJson = await AsyncStorage.getItem(SCORE_BY_DATE_KEY);
          const existingMap: Record<string, number> = existingJson ? JSON.parse(existingJson) : {};
          const today = new Date().toISOString().split('T')[0];
          existingMap[today] = (existingMap[today] ?? 0) + score;
          await AsyncStorage.setItem(SCORE_BY_DATE_KEY, JSON.stringify(existingMap));
          console.log('[QuizEndComponent] Merged SCORE_BY_DATE_KEY after perfect bonus:', existingMap);
          // 全問正解時の正解数履歴も更新
          const mergedCorrectJson = await AsyncStorage.getItem(CORRECT_KEY);
          const mergedCorrect: Record<string, number> = mergedCorrectJson
            ? JSON.parse(mergedCorrectJson)
            : {};
          setCorrectHistory(mergedCorrect);
        } catch (e) {
          console.error('[QuizEndComponent] Error adding perfect bonus:', e);
        }
      }
    };

    addPerfectBonus();
  }, [animatedScore, score, total, QentionID, isHistoryLoaded]);

  // 満点の場合、コンフェッティと振動をトリガー
  useEffect(() => {
    let isActive = true;  // ← これを追加

    if (animatedScore === score && score === total && !showConfetti) {
      setShowConfetti(true);
      if (confettiRef.current) {
        confettiRef.current.play();
      }
      (async () => {
        for (let i = 0; i < 10; i++) {
          if (!isActive) break;  // ← フラグをチェックして停止
          try {
            await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          } catch {}
          await new Promise(resolve => setTimeout(resolve, 10));
        }
      })();
    }

    return () => {
      isActive = false;  // ← アンマウント時／依存が変わったときにフラグを折る
    };
  }, [animatedScore, score, total, showConfetti]);

  // 完了ボタン押下時の処理
  const handleFinish = async () => {
    // レベル取得を保証
    if (level == null) {
      return;
    }
    // 履歴読み込み完了まで待機
    if (!isHistoryLoaded) {
      await new Promise<void>(resolve => {
        const iv = setInterval(() => {
          if (isHistoryLoaded) {
            clearInterval(iv);
            resolve();
          }
        }, 50);
      });
    }
    if (finishProcessing) return;
    setFinishProcessing(true);
    try {
      // ① 既存のポイントを取得
      const stored = await AsyncStorage.getItem(POINTS_STORAGE_KEY);
      const prevPoints = stored ? JSON.parse(stored) : 0;
      // ② 今回獲得した points を加算
      const totalPoints = prevPoints + points;
      // ③ 合計を保存
      await AsyncStorage.setItem(POINTS_STORAGE_KEY, JSON.stringify(totalPoints));
      // ★ ④ 今日の正解数を保存
      const today = new Date().toISOString().split('T')[0];
      const correctRaw = await AsyncStorage.getItem(CORRECT_KEY);
      const correctParsed = correctRaw ? JSON.parse(correctRaw) : {};
      correctParsed[today] = (correctParsed[today] || 0) + score;
      await AsyncStorage.setItem(CORRECT_KEY, JSON.stringify(correctParsed));

      // ← ここから追加
      const savedCorrect = await AsyncStorage.getItem(CORRECT_KEY);
      console.log('[QuizEndComponent] Saved CORRECT_KEY:', savedCorrect);
      // 保存後に state にも反映
      const savedCorrectParsed: Record<string, number> = savedCorrect
        ? JSON.parse(savedCorrect)
        : {};
      setCorrectHistory(savedCorrectParsed);
      // 今日のスコア履歴を保存（全問正解以外も含める）
      const scoreJson = await AsyncStorage.getItem(SCORE_BY_DATE_KEY);
      const scoreMap: Record<string, number> = scoreJson ? JSON.parse(scoreJson) : {};
      scoreMap[today] = (scoreMap[today] ?? 0) + score;
      await AsyncStorage.setItem(SCORE_BY_DATE_KEY, JSON.stringify(scoreMap));
      // 追記: 保存されたスコア履歴をログ出力
      const savedScoreByDate = await AsyncStorage.getItem(SCORE_BY_DATE_KEY);
      console.log('[QuizEndComponent] Saved SCORE_BY_DATE_KEY:', savedScoreByDate);
      // ※ スコア保存処理は useEffect 側に移動
    } catch (e) {
      console.error('保存エラー:', e);
    }

    // 通常はホーム画面に遷移、20%の確率でUpsell画面に遷移
    const shouldShowUpsell = Math.random() < 0.2; // 20%の確率
    router.push(shouldShowUpsell ? '/Upsell' : '/');
  };


    useEffect(() => {
      setNextReviewInfo(propNextReviewInfo ?? []);
    }, [propNextReviewInfo]);

      // 満点判定時に displayPoints を合計値に更新
  useEffect(() => {
    if (
      animatedScore === score &&
      score === total &&
      !showConfetti
    ) {
      setDisplayPoints(baseReward + bonusPoints);
    }
  }, [animatedScore, score, total, showConfetti, baseReward, bonusPoints]);

  // 初期表示時にスコア履歴データをログ出力
  useEffect(() => {
    if (!sanitizedLevel) return;
    (async () => {
      try {
        const json = await AsyncStorage.getItem(SCORE_BY_DATE_KEY);
        const map: Record<string, number> = json ? JSON.parse(json) : {};
        initialScoreMapRef.current = map;
        setHistoryLoaded(true);
        console.log('[QuizEndComponent] Loaded SCORE_BY_DATE_KEY:', map);
      } catch (e) {
        console.error('[QuizEndComponent] 初期表示ログ取得エラー:', e);
      }
    })();
  }, [sanitizedLevel]);

  // 初期表示時に今日の正解数データをログ出力
  useEffect(() => {
    if (!sanitizedLevel) return;
    (async () => {
      try {
        const correctJson = await AsyncStorage.getItem(CORRECT_KEY);
        const correctMap: Record<string, number> = correctJson ? JSON.parse(correctJson) : {};
        console.log('[QuizEndComponent] Loaded CORRECT_KEY:', correctMap);
        setCorrectHistory(correctMap);
      } catch (e) {
        console.error('[QuizEndComponent] 初期表示CORRECT_KEY取得エラー:', e);
      }
    })();
  }, [sanitizedLevel]);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.containerBg }]}>
      {/* EndLabelを、スコアのカウントアップが完了したときに表示 */}
      <ScoreSummary
        animatedScore={animatedScore}
        total={total}
        points={displayPoints - Math.floor(displayPoints * 0.5)}
        bonusPoints={Math.floor(displayPoints * 0.5)}
        vipBonusPoints={Math.floor(displayPoints * 0.5)}
        themeColors={themeColors}
      />
      <ReviewList
        questions={filteredQuestions}
        nextReviewInfo={nextReviewInfo}
        incorrectQuestions={incorrectQuestions}
        visibleCount={visibleCount}
        themeColors={themeColors}
      />

      <View style={styles.nextButtonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleFinish}>
          <NeomorphBox width={SCREEN_WIDTH * 0.85} height={60}>
            <Text style={[styles.nextButtonText, { color: themeColors.buttonTextColor }]}>
              完了
            </Text>
          </NeomorphBox>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizEndComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  mLabelContainer: {
    position: 'absolute',
    top: 130,
    alignItems: 'center',
    width: '100%',
  },
  neomorphContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  neomorphBox: {
    marginTop: 220,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 20,
  },
  nextButton: {
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  nextButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  pointText: {
    fontSize: 18,
    marginBottom: 8,
  },
  bonusText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
  vipText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});
