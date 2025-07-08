import LottieView from 'lottie-react-native';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';
import NeomorphBox from '../ui/NeomorphBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LineChart } from 'react-native-chart-kit';
import useQuestionData from './useQuestionData';

type ScoreSummaryProps = {
  animatedScore: number;
  total: number;
  points: number;
  bonusPoints: boolean;
  vipBonusPoints: boolean;
  themeColors: { textColor: string };
  scoreStarkLevelValue: number;
  pointFontFamily?: string;
};

const ScoreSummary: React.FC<ScoreSummaryProps> = ({
  animatedScore,
  total,
  points,
  bonusPoints,
  vipBonusPoints,
  themeColors,
  scoreStarkLevelValue,
  pointFontFamily = 'System',
}) => {
  const { level } = useQuestionData();
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');

  const [history, setHistory] = React.useState<number[]>([]);
  const [totalBalance, setTotalBalance] = React.useState(0);
  // 日付ごとのスコア表示用ラベル
  const [labels, setLabels] = React.useState<string[]>([]);
  const { width: SCREEN_WIDTH } = Dimensions.get('window');

  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(20)).current;

  const vipFadeAnim = React.useRef(new Animated.Value(0)).current;
  const vipTranslateY = React.useRef(new Animated.Value(20)).current;

  // ストリーク表示用アニメーション
  const streakScale = React.useRef(new Animated.Value(0)).current;
  // 振動（シェイク）用アニメーション値
  const shakeAnim = React.useRef(new Animated.Value(0)).current;

  // アニメーション完了フラグ
  const [animDone, setAnimDone] = React.useState(false);

  React.useEffect(() => {
    // ボーナスとVIPボーナスを順番にアニメーション、フェードアウト開始で完了判定
    const runAnimation = () => {
      if (bonusPoints) {
        Animated.parallel([
          Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
          Animated.timing(translateY, { toValue: 0, duration: 500, useNativeDriver: true }),
        ]).start(() => {
          Animated.delay(1500).start(() => {
            // フェードアウト開始前に完了とみなす
            setAnimDone(true);
            Animated.timing(fadeAnim, { toValue: 0, duration: 500, useNativeDriver: true }).start(() => {
              // ボーナス後にVIPボーナスを続ける
              if (vipBonusPoints) {
                Animated.parallel([
                  Animated.timing(vipFadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
                  Animated.timing(vipTranslateY, { toValue: 0, duration: 500, useNativeDriver: true }),
                ]).start(() => {
                  Animated.delay(1500).start(() => {
                    Animated.timing(vipFadeAnim, { toValue: 0, duration: 500, useNativeDriver: true }).start();
                  });
                });
              }
            });
          });
        });
      } else if (vipBonusPoints) {
        Animated.parallel([
          Animated.timing(vipFadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
          Animated.timing(vipTranslateY, { toValue: 0, duration: 500, useNativeDriver: true }),
        ]).start(() => {
          Animated.delay(1500).start(() => {
            Animated.timing(vipFadeAnim, { toValue: 0, duration: 500, useNativeDriver: true }).start(() => {
              setAnimDone(true);
            });
          });
        });
      } else {
        setAnimDone(true);
      }
    };
    runAnimation();
  }, [bonusPoints, vipBonusPoints]);

  // animDone 後にストリークをバウンド表示
  React.useEffect(() => {
    if (animDone && scoreStarkLevelValue >= 2) {
      // バウンド＋シェイク＋デバイス振動
      Animated.parallel([
        Animated.spring(streakScale, {
          toValue: 1,
          friction: 4,
          tension: 100,
          useNativeDriver: true,
        }),
        Animated.loop(
          Animated.sequence([
            Animated.timing(shakeAnim, { toValue: -5, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 5, duration: 50, useNativeDriver: true }),
            Animated.timing(shakeAnim, { toValue: 0, duration: 50, useNativeDriver: true }),
          ]),
          { iterations: 3 }
        ),
      ]).start();
      // デバイスハプティクス
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      // サウンド再生: ストリーク描画時に効果音を再生
      (async () => {
        const { sound } = await Audio.Sound.createAsync(require('../../assets/sound/streak.mp3'));
        await sound.playAsync();
      })();
    }
  }, [animDone, scoreStarkLevelValue]);

  // コンポーネント内でボーナス額を計算
  const bonusCount = (bonusPoints ? 1 : 0) + (vipBonusPoints ? 1 : 0);
  const computedBonusPoints = bonusCount === 2
    ? Math.round(points * 0.25)
    : bonusCount === 1
      ? Math.round(points * 0.5)
      : 0;


  // Load correct answer history on mount
  React.useEffect(() => {
    (async () => {
      try {
        const scoreJson = await AsyncStorage.getItem(`DAYLY_CORRECT_${sanitizedLevel}`);
        // now scoreMap は { '2025-06-27': 10, ..., '2025-07-05': 51 } のようになる
        const scoreMap: Record<string, any> = scoreJson
          ? JSON.parse(scoreJson)
          : {};
        const rawDateKeys = Object.keys(scoreMap).sort(
          (a, b) => new Date(a).getTime() - new Date(b).getTime()
        );
        const formattedLabels = rawDateKeys.map(date => {
          const [y, m, d] = date.split('-');
          return `${parseInt(m)}/${parseInt(d)}`;
        });
        const values = rawDateKeys.map(date => {
          const rawVal = scoreMap[date];
          // Parse ratio string "count/goal" or numeric value
          if (typeof rawVal === 'string' && rawVal.includes('/')) {
            return Number(rawVal.split('/')[0]) || 0;
          }
          return typeof rawVal === 'number' ? rawVal : Number(rawVal) || 0;
        });
        setLabels(formattedLabels);
        setHistory(values);
        const total = values.reduce((sum, v) => sum + v, 0);
        setTotalBalance(total);
      } catch (e) {
        console.error('Failed to load correct-history:', e);
      }
    })();
  }, [sanitizedLevel]);

  // Reload score-by-date mapping when points change
  React.useEffect(() => {
    (async () => {
      try {
        const scoreJson = await AsyncStorage.getItem(`DAYLY_CORRECT_${sanitizedLevel}`);
        console.log(scoreJson)
        const scoreMap: Record<string, any> = scoreJson ? JSON.parse(scoreJson) : {};
        const rawDateKeys = Object.keys(scoreMap).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        const formattedLabels = rawDateKeys.map(date => {
          const [year, month, day] = date.split('-');
          return `${parseInt(month)}/${parseInt(day)}`;
        });
        const values = rawDateKeys.map(date => {
          const rawVal = scoreMap[date];
          // Parse ratio string "count/goal" or numeric value
          if (typeof rawVal === 'string' && rawVal.includes('/')) {
            return Number(rawVal.split('/')[0]) || 0;
          }
          return typeof rawVal === 'number' ? rawVal : Number(rawVal) || 0;
        });
        setLabels(formattedLabels);
        setHistory(values);
        const total = values.reduce((sum, val) => sum + val, 0);
        setTotalBalance(total);
      } catch (e) {
        console.error('Failed to reload correct-history:', e);
      }
    })();
  }, [points, sanitizedLevel]);


  // Lottie streak size calculation
  const cycleIndex = (scoreStarkLevelValue - 3) % 4; // 0〜3
  const lottieSize = 70 + cycleIndex * 10;

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <NeomorphBox
          width={SCREEN_WIDTH * 0.85}
          height={200}
          style={styles.neomorphBox}
        >
            <Text style={[styles.scoreText1, { color: '#666'}]}>
              Score
            </Text>
            <Text style={[styles.scoreText,  { color: '#000'}]}>
              {animatedScore}
              <Text style={styles.totalText}>/{total}</Text>
            </Text>
          {history.length > 0 && (
        <LineChart
          data={{
            labels: labels,
            datasets: [{ data: history }],
          }}
          width={SCREEN_WIDTH * 0.8}
          height={200}
          fromZero={true}
          withInnerLines={false}
          withVerticalLines={false}
          withHorizontalLabels={true}
          segments={3}
          withVerticalLabels={true}
          chartConfig={{
            backgroundColor: '#E3E5F2',
            backgroundGradientFrom: '#E3E5F2',
            backgroundGradientTo: '#E3E5F2',
            decimalPlaces: 0,
            color: (opacity = 1) => themeColors.textColor,
            labelColor: (opacity = 1) => themeColors.textColor,
          }}
          style={styles.chartStyle}
        />
      )}
            {animatedScore === total && (
          <LottieView
            source={require('../../assets/lottie/cracer.json')}
            autoPlay
            loop={true}
            style={{ width: SCREEN_WIDTH * 0.85, height: SCREEN_WIDTH * 0.85, position: 'absolute', top: 0}}
          />
        )}
        </NeomorphBox>
        <View style={styles.bottomContainer}>
          <NeomorphBox
            width={SCREEN_WIDTH * 0.55}
            height={100}
            style={styles.neomorphBox1}
          >
            {bonusPoints && (
              <Animated.Text
                style={[styles.bonusText, { opacity: fadeAnim, transform: [{ translateY }] }]}
              >
                ＋全問正解 {computedBonusPoints}
              </Animated.Text>
            )}
            {vipBonusPoints && (
              <Animated.Text
                style={[styles.vipBonusText, { opacity: vipFadeAnim, transform: [{ translateY: vipTranslateY }] }]}
              >
                ＋VIP {computedBonusPoints}
              </Animated.Text>
            )}
            <Text style={[styles.pointscoreText, { fontFamily: pointFontFamily }]}>
              ₵ {points}
            </Text>
          </NeomorphBox>

          <NeomorphBox
            width={SCREEN_WIDTH * 0.25}
            height={100}
            style={styles.neomorphBox1}
          >
          {animDone && scoreStarkLevelValue >= 2 && (
            <Animated.View
              style={{
                position: 'absolute',
                bottom: 5,
                right: 20,
                alignItems: 'center',
                transform: [
                  { scale: streakScale },
                  { translateX: shakeAnim },
                ],
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <LottieView
                  source={require('../../assets/lottie/streak.json')}
                  autoPlay
                  loop
                  speed={1 + (scoreStarkLevelValue - 2) * 0.2}
                  style={{ width: lottieSize, height: lottieSize }}
                />
                <Text style={[{ fontFamily: pointFontFamily }, { color: '#333', fontWeight: 'bold',marginLeft:-25, fontSize: 40, top: 17 }]}>
                  {scoreStarkLevelValue}
                </Text>
              </View>
              <Text style={{ color: '#333', fontSize: 20, marginTop: 2, marginLeft: 15  }}>連続</Text>
            </Animated.View>
          )}
          </NeomorphBox>
        </View>

    </View>
  );
};

export default ScoreSummary;

const styles = StyleSheet.create({
  neomorphBox: {
    marginTop: 80,
  },
  neomorphBox1: {
    marginTop: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  pointscoreText: {
    position:'absolute',
    color:'#777',
    fontSize: 25,
  },
  scoreText1: {
    position:'absolute',
    fontSize: 40,
    top: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex:1,
    fontWeight:'200',
  },
  scoreText: {
    position:'absolute',
    fontSize: 80,
    top: 70,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex:1,
    fontFamily: 'PoiretOne',
    fontWeight:'400',
  },
  totalText: {
    fontSize: 20,
    fontFamily: 'PoiretOne',
  },
  bonusText: {
    position:'absolute',
    fontSize: 20,
    top:10,
    color: 'rgb(65, 187, 61)',
  },
  vipBonusText: {
    position:'absolute',
    fontSize: 20,
    top: 10,
    color: 'rgb(190, 187, 0)', // 金色
  },
  chartStyle: {
    marginVertical: 8,
  },
});