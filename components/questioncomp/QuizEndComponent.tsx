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
// 他のインポートは省略
const POINTS_STORAGE_KEY = '@quiz_points';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

type QuizEndComponentProps = {
  score: number;
  total: number;
  QentionID: number;
  onFinish: () => void; // ここに onFinish を追加
  forceTheme: "light" | "dark";
};


const QuizEndComponent: React.FC<QuizEndComponentProps> = ({
  score,
  total,
  QentionID,
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
      console.log('🔖 保存された合計ポイント:', totalPoints);
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
        height={150}
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
    zIndex: 1,
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
