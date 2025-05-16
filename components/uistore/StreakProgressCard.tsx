import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { Circle } from 'react-native-svg';
import { FontAwesome5 } from '@expo/vector-icons';

const POINTS_KEY = '@heatmap_data';
const STEPS_KEY = '@steps_data';
const CORRECT_KEY = '@correct_data';
const GENERATED_KEY = '@generated_data';
/**
 * 週次の学習ステータスと日別進捗、ステップカウントを
 * スタイリッシュなカードで表示するコンポーネント
 * ダークモード風の背景に丸みを帯びたカードデザイン
 */
interface StreakProgressCardProps {
    fromShop?: boolean;
    color?: 'brack' | 'wight' | string;
  }
  const StreakProgressCard: React.FC<StreakProgressCardProps> = ({
    fromShop = false,
    color = 'default'  // 'brack' なら黒背景、 'wight' なら白背景、それ以外はダークグレー
  }) => {
    // 背景⇄文字色マップ
    const bgColor = color === 'brack'
      ? '#000000'
      : color === 'wight'
      ? '#FFFFFF'
      : '#1E1E1E';
    const textColor = color === 'brack'
      ? '#FFFFFF'
      : color === 'wight'
      ? '#000000'
      : '#FFF';
  const [weekData, setWeekData] = useState<number[]>(Array(7).fill(0));
  const [steps, setSteps] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [todayGoal, setTodayGoal] = useState<number>(0);
  const [todayGeneratedData, setTodayGeneratedData] = useState<any>(null);
  const [dayCount, setDayCount] = useState<number>(1);
  const [TodayaverageRate, setTodayaverageRate] = useState<number>(0);
  const [counts, setcounts] = useState<number>(1);

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

  // Heatmap データ （matrixの最終行）と Steps を読み込む
  useEffect(() => {
    AsyncStorage.getItem(POINTS_KEY)
      .then(json => {
        console.log('[StreakProgressCard] raw heatmap_data JSON:', json);
        const parsed = json ? JSON.parse(json) : null;
        console.log('[StreakProgressCard] parsed heatmap_data:', parsed);
        if (parsed?.matrix && Array.isArray(parsed.matrix)) {
          const lastWeek = parsed.matrix[parsed.matrix.length - 1];
          setWeekData(lastWeek as number[]);
        }
      })
      .catch(() => {});
    AsyncStorage.getItem(STEPS_KEY)
      .then(json => {
        console.log('[StreakProgressCard] raw steps JSON:', json);
        const cnt = json ? JSON.parse(json) : 0;
        console.log('[StreakProgressCard] parsed steps count:', cnt);
        setSteps(cnt);
      })
      .catch(() => {});

    // 正解数を取得
    AsyncStorage.getItem(CORRECT_KEY)
      .then(json => {
        const data = json ? JSON.parse(json) : {};
        const values = Object.values(data);
        const count2_3 = values.filter((obj: any) => obj && (obj.C === 2 || obj.C === 3)).length;
        const count4_5 = values.filter((obj: any) => obj && (obj.C === 4 || obj.C === 5)).length;
        const count6_7 = values.filter((obj: any) => obj && (obj.C === 6 || obj.C === 7)).length;
        const count8_9 = values.filter((obj: any) => obj && (obj.C === 8 || obj.C === 9)).length;
        const totalCorrect = count2_3 + count4_5 + count6_7 + count8_9;
        setCorrectCount(totalCorrect);
      })
      .catch(() => {});

    // 今日の目標を取得
    AsyncStorage.getItem(GENERATED_KEY)
      .then(json => {
        const parsed = json ? JSON.parse(json) : [];
        const today = new Date().getDate(); // 日付をキーに
        let entry;
        if (Array.isArray(parsed)) {
          entry = parsed.find((item: any) => item.id === today);
        } else {
          entry = (parsed as Record<number, any>)[today];
        }
        // result 配列の合計値を「今日の目標」として設定
        const goalValue = Array.isArray(entry?.result) 
          ? (entry.result as number[]).reduce((sum, v) => sum + v, 0) 
          : 0;
        setTodayGoal(goalValue);
      })
      .catch(() => {});
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
        const count2_3 = values.filter(obj => obj.C === 2 || obj.C === 3).length;
        const count4_5 = values.filter(obj => obj.C === 4 || obj.C === 5).length;
        const count6_7 = values.filter(obj => obj.C === 6 || obj.C === 7).length;
        const count8_9 = values.filter(obj => obj.C === 8 || obj.C === 9).length;
        const counts1 = [count2_3, count4_5, count6_7, count8_9];
        // 配列の全要素を足し合わせ
        const totalCount = counts1.reduce((sum, n) => sum + n, 0);
        setcounts(totalCount)
      } catch (err) {
        console.error('[QuizEndComponent] Error loading correctData:', err);
      }
    })();
  }, [todayGeneratedData]);

  // 継続日数 = 連続で>0 の日数
  const streak = (() => {
    let count = 0;
    for (let i = weekData.length - 1; i >= 0; i--) {
      if (weekData[i] > 0) count++;
      else break;
    }
    return count;
  })();

  const weekdayLabels = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const goal = todayGoal;
  const percent = goal > 0 ? Math.min(1, counts / todayGoal) : 0;

  const screenWidth = Dimensions.get('window').width;
  // ウィジェットを画面幅の50%の正方形に
  const cardSize = screenWidth * 0.5;
  // fromShop が true のときは 0.7 倍、それ以外は 0.9 倍
  const contentScale = fromShop ? 0.7 : 0.9;

  return (
    <View style={[{ width: cardSize, height: cardSize }]}>
      <View
        style={[
          styles.card,
          { flex: 1, transform: [{ scale: contentScale }], backgroundColor: bgColor }
        ]}
      >
        {/* STREAK */}
        <View style={styles.headerRow}>
          <FontAwesome5 name="fire" size={18} color="rgb(255, 0, 81)" />
          <View style={{ marginLeft: 8 }}>
            <Text style={[styles.headerLabel, { color: textColor }]}>STREAK</Text>
            <Text style={[styles.headerValue, { color: textColor }]}>Day {dayCount}</Text>
          </View>
        </View>
        {/* WEEK PROGRESS */}
        <View style={styles.progressRow}>
          {weekData.map((v, i) => {
            const todayIndex = new Date().getDay();
            const isPast = i < todayIndex;
            const isToday = i === todayIndex;
            const isFull = v === todayGoal;
            const radius = 10;
            const strokeWidth = 2;
            const circumference = 2 * Math.PI * (radius - strokeWidth);
            // Adjust radius so stroke sits inside SVG bounds to match dot size
            const adjustedRadius = radius - strokeWidth / 2;
            const adjustedCircumference = 2 * Math.PI * adjustedRadius;
            const percentValue = todayGoal > 0 ? v / todayGoal : 0;
            const dashOffset = adjustedCircumference * (1 - percentValue);

            return (
              <View key={i} style={styles.dotWrapper}>
                {isToday ? (
                  // Today's gauge (unchanged)
                  <Svg
                    width={radius * 2}
                    height={radius * 2}
                    style={{ marginBottom: 4, transform: [{ rotate: '-90deg' }] }}
                  >
                    <Circle
                      stroke="#555"
                      fill="none"
                      cx={radius}
                      cy={radius}
                      r={adjustedRadius}
                      strokeWidth={strokeWidth}
                    />
                    <Circle
                      stroke="#4CD964"
                      fill="none"
                      cx={radius}
                      cy={radius}
                      r={adjustedRadius}
                      strokeWidth={strokeWidth}
                      strokeDasharray={`${adjustedCircumference} ${adjustedCircumference}`}
                      strokeDashoffset={dashOffset}
                    />
                  </Svg>
                ) : isFull ? (
                  // Full achievement: green border + centered check
                  <View
                    style={[
                      styles.dot,
                      {
                        borderColor: '#4CD964',
                        borderWidth: 2,
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      styles.dotActive,
                    ]}
                  >
                    <FontAwesome5
                      name="check"
                      size={12}
                      color="#4CD964"
                    />
                  </View>
                ) : v > 0 ? (
                  // Partial achievement: gauge + red X, X centered
                  <View style={{
                    width: radius * 2,
                    height: radius * 2,
                    marginBottom: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}>
                    <Svg
                      width={radius * 2}
                      height={radius * 2}
                      style={{ transform: [{ rotate: '-90deg' }] }}
                    >
                      <Circle
                        stroke="#555"
                        fill="none"
                        cx={radius}
                        cy={radius}
                        r={adjustedRadius}
                        strokeWidth={strokeWidth}
                      />
                      <Circle
                        stroke="#4CD964"
                        fill="none"
                        cx={radius}
                        cy={radius}
                        r={adjustedRadius}
                        strokeWidth={strokeWidth}
                        strokeDasharray={`${adjustedCircumference} ${adjustedCircumference}`}
                        strokeDashoffset={dashOffset}
                      />
                    </Svg>
                    <FontAwesome5
                      name="times"
                      size={12}
                      color="red"
                      style={{
                        position: 'absolute',
                        top: radius - 6,
                        left: radius - 4,
                      }}
                    />
                  </View>
                ) : isPast ? (
                  // Past zero: show red X on grey dot, X centered
                  <View style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    marginBottom: 4,
                    backgroundColor: '#555',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}>
                    <FontAwesome5
                      name="times"
                      size={12}
                      color="red"
                      style={{
                        position: 'absolute',
                        top: 10 - 6,
                        left: 10 - 4,
                      }}
                    />
                  </View>
                ) : (
                  // Future or no-data: simple grey dot
                  <View style={[styles.dot, styles.dotInactive]} />
                )}
                <Text style={[styles.dotLabel, { color: textColor }]}>{weekdayLabels[i]}</Text>
              </View>
            );
          })}
        </View>
        {/* STEPS */}
        <View style={styles.stepsRow}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.stepsLabel, { color: textColor }]}>Correct</Text>
            <Text style={[styles.stepsValue, { color: textColor }]}>
              {counts}
              <Text style={styles.stepsGoal}> / {todayGoal}</Text>
            </Text>
          </View>
          <Text style={[styles.percentLabel, { color: textColor }]}>{Math.round(percent * 100)}%</Text>
        </View>
        <View style={styles.barBackground}>
          <View style={[styles.barFill, { flex: percent }]} />
          <View style={{ flex: 1 - percent }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#',
    borderRadius: 16,
    padding: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerLabel: {
    color: '#BBB',
    fontSize: 12,
  },
  headerValue: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  dotWrapper: {
    alignItems: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginBottom: 4,
  },
  dotActive: { backgroundColor: '#4CD964' },
  dotInactive: { backgroundColor: '#555' },
  dotLabel: {
    color: '#888',
    fontSize: 10,
  },
  stepsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepsLabel: {
    color: '#BBB',
    fontSize: 12,
  },
  stepsValue: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  stepsGoal: {
    fontSize: 14,       // smaller than stepsValue (24)
    color: '#BBB',      // lighter color for goal
  },
  barBackground: {
    marginTop:15,
    height: 12,  // ゲージの高さを小さく
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 4,
    overflow: 'hidden',
    marginHorizontal: 8,
  },
  barFill: {
    backgroundColor: '#4CD964',
  },
  percentLabel: {
    fontWeight: 'bold',
    fontSize: 14,       // smaller than stepsValue (24)
    color: '#BBB', 
    top: 12,
    right:10,
  },
});

export default StreakProgressCard;
