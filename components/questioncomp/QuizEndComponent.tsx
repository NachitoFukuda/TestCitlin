// QuizEndComponent.tsx
import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';
import NeomorphBox from '../ui/NeomorphBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EndLabel from '../questioncomp/EndLabel'; // EndLabelコンポーネントのインポート

function calculateCompletionRates(
  results: number[],
  counts: number[]
): (number | null)[] {
  return results.map((target, index) => {
    const actual = counts[index] ?? 0;
    console.log(`[calculateCompletionRates] index=${index}, target=${target}, actual=${actual}`);
    if (target <= 0) {
      // 目標値が0の場合はデータ無しとみなす
      console.log(`[calculateCompletionRates] index=${index}, target<=0, returning null`);
      return null;
    }
    // 達成率を計算し、小数点以下2桁に丸め、100%を上限
    const rate = parseFloat(((actual / target) * 100).toFixed(2));
    console.log(`[calculateCompletionRates] index=${index}, computed rate=${rate}`);
    return Math.min(rate, 100);
  });
}
const POINTS_STORAGE_KEY = '@quiz_points';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

type QuizEndComponentProps = {
  score: number;
  total: number;
  QentionID: number;
  missedQuestions?: { id: string | number, question: string, correctAnswer: string }[];
  onFinish: () => void; // ここに onFinish を追加
  forceTheme: "light" | "dark";
};


const QuizEndComponent: React.FC<QuizEndComponentProps> = ({
  score,
  total,
  QentionID,
  missedQuestions = [],
  forceTheme = 'light',
}) => {
    // ポイント計算: 問題IDが大きいほど指数関数的に倍率アップ
    const basePoint = 10;
    const idMultiplier = Math.pow(1.05, QentionID);
    // 基本報酬
    const baseReward = Math.round(score * basePoint * idMultiplier);
    // 全問正解ボーナス
    let bonusPoints = 0;
    if (score === total && total > 0) {
      const fullBonusMultiplier = Math.pow(1.1, score);
      bonusPoints = Math.round(baseReward * (fullBonusMultiplier - 1));
    }
    // 合計ポイント
    const points = baseReward + bonusPoints;
  
  const [animatedScore, setAnimatedScore] = useState(0);
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
    console.log('Data', Data);

  // テーマに応じた色を一元管理
  const themeColors = useMemo(() => {
    const isDark = forceTheme === 'dark';
    return {
      containerBg: isDark ? '#303030' : '#EBF3FF',
      textColor: isDark ? '#ccc' : '#666',
      questionTextColor: isDark ? '#ddd' : '#666',
      buttonTextColor: isDark ? '#ccc' : '#666',
    };
  }, [forceTheme]);
  console.log('[Heatmap] effect fired, TodayaverageRate=', TodayaverageRate);

  useEffect(() => {
    console.log('[Heatmap] effect fired, TodayaverageRate=', TodayaverageRate);
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
          console.log(`[Heatmap] 保存日が属する週: ${weekBucket}`);
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
          console.log('[Heatmap] weekBucketが過去4週間以上なのでデフォルト使用');
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
          console.log('[Heatmap] weekBucket=3週間前なので4行目を先頭に移動');
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
          console.log('[Heatmap] weekBucket=2週間前なので3行目と4行目を先頭に移動');
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
          console.log('[Heatmap] weekBucket=先週なので2-4行目を上にシフト');
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
          console.log('[Heatmap] stored.matrixの形式不正なのでデフォルト使用');
        }
        // 日付がない場合は今日の日付を保存
        const dateStr = stored?.date ?? new Date().toISOString();
        // 更新する列インデックス (曜日 0-6)
        const todayDayNumber = new Date().getDay();
        console.log(todayDayNumber)
        if (matrix[3] && todayDayNumber < matrix[3].length) {
          matrix[3][todayDayNumber] = TodayaverageRate;
          console.log(`[Heatmap] matrix[3][${todayDayNumber}] を ${TodayaverageRate} に設定`);
        } else {
          console.log('[Heatmap] matrix[3] が存在しないか index 範囲外です', matrix);
        }
        // 保存
        await AsyncStorage.setItem(
          '@heatmap_data',
          JSON.stringify({ matrix, date: dateStr })
        );
        // UI 更新
        console.log('[Heatmap] setData(matrix) を実行, matrix:', matrix);
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
        console.log('[QuizEndComponent] Loaded @deadline_days:', deadlineData);
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
          console.log('[QuizEndComponent] Days since savedAt:', dayCount);
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
        // IDがdayCountと一致するアイテムを取得
        let matched: any = null;
        if (Array.isArray(generatedData)) {
          matched = generatedData.find((item: any) => item.id === dayCount);
        } else if (typeof generatedData === 'object') {
          matched = (generatedData as Record<number, any>)[dayCount];
        }
        console.log('[QuizEndComponent] matched data for dayCount:', matched);
        setTodayGeneratedData(matched);
      } catch (err) {
        console.error('[QuizEndComponent] Error loading @generated_data:', err);
      }
    })();
  }, [dayCount]);
  
  useEffect(() => {
    (async () => {
      try {
        const storedData = await AsyncStorage.getItem('correctData');
        // もしデータがなければ空オブジェクトにフォールバック
        const generatedData = storedData
          ? (JSON.parse(storedData) as Record<string, { C?: number; L?: number }> )
          : {};  
        // 値オブジェクトだけ取り出す
        const values = Object.values(generatedData);
        // C が 2 or 3 の数
        const count2_3 = values.filter(obj => obj.C === 2 || obj.C === 3).length;
        // C が 4 or 5 の数
        const count4_5 = values.filter(obj => obj.C === 4 || obj.C === 5).length;
        // C が 6 or 7 の数
        const count6_7 = values.filter(obj => obj.C === 6 || obj.C === 7).length;
        // C が 8 or 9 の数
        const count8_9 = values.filter(obj => obj.C === 8 || obj.C === 9).length;
        console.log('[QuizEndComponent] C=2or3 の数:', count2_3);
        console.log('[QuizEndComponent] C=4or5 の数:', count4_5);
        console.log('[QuizEndComponent] C=6or7 の数:', count6_7);
        console.log('[QuizEndComponent] C=8or9 の数:', count8_9);
        const results = todayGeneratedData?.result ?? [];
        const counts = [count2_3, count4_5, count6_7, count8_9];
        const completionRates = await Promise.resolve(calculateCompletionRates(results, counts));
        console.log('[QuizEndComponent] 各カテゴリの達成率 (%):', completionRates);
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
        console.log('[QuizEndComponent] 全カテゴリ平均達成率 (%):', averageRate);
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


  // 満点の場合、コンフェッティと振動をトリガー
// 変更後の useEffect
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
    if (finishProcessing) return;
    setFinishProcessing(true);
    try {
      // ① 既存のポイントを取得
      const stored = await AsyncStorage.getItem(POINTS_STORAGE_KEY);
      const prevPoints = stored ? JSON.parse(stored) : 0;
      // ② 今回獲得した points を既存に加算
      const totalPoints = prevPoints + points;
      // ③ 加算後の合計を保存
      await AsyncStorage.setItem(POINTS_STORAGE_KEY, JSON.stringify(totalPoints));
      // ④ 保存された値をログに出力
    } catch (e) {
      console.error('ポイント保存エラー:', e);
    }
  
    // 完了したらトップ画面へ戻る
    router.push('/');
  };

  return (
    <View style={[styles.container, { backgroundColor: themeColors.containerBg }]}>
      {/* EndLabelを、スコアのカウントアップが完了したときに表示 */}
      <View style={styles.mLabelContainer}>

      {animatedScore === score ? (
          <EndLabel Score={animatedScore} forceTheme={forceTheme} />
      ) : (
        <NeomorphBox
          width={SCREEN_WIDTH * 0.85}
          height={60}
          style={styles.neomorphContainer}
          forceTheme={forceTheme}
        >
          <Text style={[styles.questionText, { color: themeColors.questionTextColor }]}>
          </Text>
        </NeomorphBox>
      )}
      </View>

      <NeomorphBox
        width={SCREEN_WIDTH * 0.85}
        height={210 + missedQuestions.length * 44}
        style={styles.neomorphBox}
        forceTheme={forceTheme}
      >
        <View style={styles.contentContainer}>

          <Text style={[styles.questionText, { color: themeColors.questionTextColor }]}>
            学習終了
          </Text>
          <Text style={[styles.scoreText, { color: themeColors.textColor }]}>
            スコア: {animatedScore}/{total}
          </Text>
          <Text style={[styles.scoreText, { color: themeColors.textColor }]}>
            獲得ポイント: {points} pt
          </Text>
        </View>

      {/* ここで下に表示 */}
      {missedQuestions.length > 0 && (
   <>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <Text style={{ color: 'rgba(255, 0, 0, 0.55)', fontWeight: 'bold', fontSize: 20, marginTop: 24, marginBottom: 16, textAlign: 'center' }}>
          ミスした単語
        </Text>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          {missedQuestions.map((q) => (
            <View key={q.id} style={{ marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: themeColors.textColor, fontSize: 16, lineHeight: 22 }}>
                {q.question}
              </Text>
              <Text style={{ color: themeColors.textColor, fontSize: 16, opacity: 0.7, marginLeft: 16, lineHeight: 22 }}>
                {q.correctAnswer}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </>
      )}
        </NeomorphBox>

      <View style={styles.nextButtonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleFinish}>
          <NeomorphBox width={SCREEN_WIDTH * 0.85} height={60} forceTheme={forceTheme}>
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
});
