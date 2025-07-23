import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Svg, { Circle } from 'react-native-svg';
import { FontAwesome5 } from '@expo/vector-icons';
import useQuestionData from '../questioncomp/useQuestionData';
import RadarChart from '../ui/RadarChart';

const STEPS_KEY = '@steps_data';
const GENERATED_KEY = '@generated_data';
/**
 * 週次の学習ステータスと日別進捗、ステップカウントを
 * スタイリッシュなカードで表示するコンポーネント
 * ダークモード風の背景に丸みを帯びたカードデザイン
 */
interface StreakProgressCardProps {
    fromShop?: boolean;
    color?: 'brack' | 'wight' | string;
    shape?: 'RadarChart' | string;
  }
  const StreakProgressCard: React.FC<StreakProgressCardProps> = ({
    fromShop = false,
    color = 'default',  // 'brack' なら黒背景、 'wight' なら白背景、それ以外はダークグレー
    shape,
  }) => {
    // 背景⇄文字色マップ
    const bgColor = color === 'brack'
      ? '#000000'
      : color === 'wight'
      ? '#fff'
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
  const [counts, setCounts] = useState<number>(0);
  const { level } = useQuestionData();
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');
  const STORAGE_KEY_LEVEL = `correctData_${sanitizedLevel}`;
  const CORRECT_New_KEY = `DAYLY_CORRECT_${sanitizedLevel}`;

  
  // 安全にデータを取得する関数
  const safeGetData = async (key: string, defaultValue: any) => {
    try {
      const json = await AsyncStorage.getItem(key);
      if (!json) return defaultValue;
      return JSON.parse(json);
    } catch (error) {
      console.log(`[StreakProgressCard] Error loading ${key}:`, error);
      return defaultValue;
    }
  };

  useEffect(() => {
    const loadDeadlineDays = async () => {
      try {
        const deadlineData = await safeGetData('@deadline_days', null);
        if (deadlineData?.savedAt) {
          const savedDate = new Date(deadlineData.savedAt);
          savedDate.setHours(0, 0, 0, 0);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const diffTime = today.getTime() - savedDate.getTime();
          const dayCount = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
          setDayCount(dayCount);
        }
      } catch (error) {
        console.log('[StreakProgressCard] Error in loadDeadlineDays:', error);
      }
    };
    loadDeadlineDays();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      if (!sanitizedLevel || sanitizedLevel === 'unknown') return;
      try {
        // Load past week's correct counts
        const scoreData: Record<string, number> = await safeGetData(CORRECT_New_KEY, {});
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        const todayIndex = todayDate.getDay();
        const newWeekData: number[] = Array(7).fill(0);
        for (let i = 0; i < 7; i++) {
          const d = new Date(todayDate);
          // Align index 0=Sunday ... 6=Saturday
          d.setDate(todayDate.getDate() - (todayIndex - i));
          const key = d.toISOString().split('T')[0];
          newWeekData[i] = scoreData[key] || 0;
        }
        setWeekData(newWeekData);

        // Steps データの読み込み
        const stepsData = await safeGetData(STEPS_KEY, 0);
        setSteps(typeof stepsData === 'number' ? stepsData : 0);

        // 正解数の読み込み
        const correctData = await safeGetData(STORAGE_KEY_LEVEL, {});
        if (typeof correctData === 'object') {
          const values = Object.values(correctData);
          const count2_3 = values.filter((obj: any) => obj && (obj.C === 2 || obj.C === 3)).length;
          const count4_5 = values.filter((obj: any) => obj && (obj.C === 4 || obj.C === 5)).length;
          const count6_7 = values.filter((obj: any) => obj && (obj.C === 6 || obj.C === 7)).length;
          const count8_9 = values.filter((obj: any) => obj && (obj.C === 8 || obj.C === 9)).length;
          setCorrectCount(count2_3 + count4_5 + count6_7 + count8_9);
        }

        // 今日の目標の読み込み
        const generatedData = await safeGetData(GENERATED_KEY, []);
        let entry;
        let entrytoday;
        let yesterdays;
        if (Array.isArray(generatedData)) {
          entrytoday = generatedData.find((item: any) => item.id === dayCount);
          const totalToday = Array.isArray(entrytoday?.result)
            ? entrytoday.result.reduce((sum: number, val: number) => sum + val, 0)
            : 0;
          yesterdays = generatedData.find((item: any) => item.id === dayCount - 1) || { result: [0, 0, 0, 0, 0] };
          const totalYesterday = Array.isArray(yesterdays?.result)
            ? yesterdays.result.reduce((sum: number, val: number) => sum + val, 0)
            : 0;
          entry = totalToday - totalYesterday ;
        } else if (typeof generatedData === 'object') {
          entry = generatedData[dayCount];
        }

        setTodayGoal(entry);
      } catch (error) {
        console.log('[StreakProgressCard] Error in loadData:', error);
      }
    };
    loadData();
  }, [sanitizedLevel]);

  useEffect(() => {
    const loadGeneratedData = async () => {
      try {
        const generatedData = await safeGetData('@generated_data', []);
        let matched = null;
        if (Array.isArray(generatedData)) {
          matched = generatedData.find((item: any) => item.id === dayCount);
        } else if (typeof generatedData === 'object') {
          matched = generatedData[dayCount];
        }
        setTodayGeneratedData(matched);
      } catch (error) {
        console.log('[StreakProgressCard] Error in loadGeneratedData:', error);
      }
    };
    loadGeneratedData();
  }, [dayCount]);

  useEffect(() => {
    (async () => {
      if (!sanitizedLevel || sanitizedLevel === 'unknown') return;
      try {
        const data = await safeGetData(CORRECT_New_KEY, {});
        const todayKey = new Date().toISOString().split('T')[0];
        if (data.hasOwnProperty(todayKey)) {
          // Parse stored ratio string "count/goal" or numeric value
          const stored = data[todayKey];
          // If it's a string like "2/1", take the count before the slash
          const countValue = typeof stored === 'string' && stored.includes('/')
            ? Number(stored.split('/')[0])
            : Number(stored);
          // Divide by 2 and floor the result to drop decimals
          const halfValue = Math.floor(countValue / 2);
          setCounts(halfValue);
        } else {
          setCounts(0);
        }
      } catch (e) {
        console.error('[StreakProgressCard] Error loading today correct data:', e);
      }
    })();
  }, [sanitizedLevel]);

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

  if (shape === 'RadarChart') {
    return (
          <RadarChart data={weekData} size={cardSize} color={textColor} />
    );
  }

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
          <FontAwesome5 name="fire" size={18} color="rgba(0, 255, 191, 0.79)" />
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
            const adjustedRadius = radius - strokeWidth / 2;
            const adjustedCircumference = 2 * Math.PI * adjustedRadius;
            const percentValue = percent;
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
                      stroke="#666"
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
                  // Full achievement: green border only
                  <View
                    style={[
                      styles.dot,
                      {
                        borderColor: '#4CD964',
                        borderWidth: 2,
                        backgroundColor: 'transparent',
                      },
                    ]}
                  />
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
                        stroke="#666"
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
                  <View style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    marginBottom: 4,
                    backgroundColor: '#666',
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
                  // Future or no-data: transparent circle with border
                  <View style={[
                    styles.dot,
                    {
                      backgroundColor: 'transparent',
                      borderWidth: 2,
                      borderColor: '#666',
                    }
                  ]} />
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
    backgroundColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden',
    marginHorizontal: 8,
  },
  barFill: {
    backgroundColor: 'rgba(0, 255, 191, 0.79)',
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
