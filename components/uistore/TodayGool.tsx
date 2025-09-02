import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';
import NeomorphBox from '../ui/NeomorphBox';
import useQuestionData from '../questioncomp/useQuestionData';

// ---- helpers: 開始日からの経過日数（さっきの方式）----
const getTodayStart = (): Date => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};
const calcElapsedDays = (startISO: string): number => {
  const start = new Date(startISO);
  start.setHours(0, 0, 0, 0);
  const today = getTodayStart();
  return Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
};
// -----------------------------------------------

/**
 * ポイント数を AsyncStorage から読み込み、0からカウントアップで表示するコンポーネント
 * 横幅: 画面幅、縦幅: 横幅の1/4 のアスペクト比で表示します。
 */
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

interface PTodayGoolProps {
  fromShop?: boolean;
  size?: string;
  desigin: 'rainbow' | 'simple' | string;
  display: string;
}
const TodayGool: React.FC<PTodayGoolProps> = ({
  fromShop = false,
  desigin,
  display,
}) => {
  const [counts, setCounts] = useState<number>(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const isFocused = useIsFocused();
  const [dayCount, setDayCount] = useState<number>(1);
  const { level } = useQuestionData();
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');
  const CORRECT_KEY = `DAYLY_CORRECT_${sanitizedLevel}`;

  const dayAnim = useRef(new Animated.Value(0)).current;
  const countAnim = useRef(new Animated.Value(0)).current;

  const [displayedDay, setDisplayedDay] = useState<number>(1);
  const [displayedCount, setDisplayedCount] = useState<number>(0);
  const prevDayRef = useRef<number>(1);
  const prevCountRef = useRef<number>(0);

  // AsyncStorage から読み込み
  useEffect(() => {
    const loadDeadlineDays = async () => {
      try {
        const deadlineData = await safeGetData('@deadline_days', null);
        const startISO: string | undefined = deadlineData?.streakStart || deadlineData?.savedAt;
        if (startISO) {
          const days = calcElapsedDays(startISO);
          setDayCount(days > 0 ? days : 1);
        } else {
          setDayCount(1);
        }
      } catch (error) {
        console.log('[StreakProgressCard] Error in loadDeadlineDays:', error);
      }
    };
    loadDeadlineDays();
  }, []);

  useEffect(() => {
    const start = Number.isFinite(displayedDay) ? displayedDay : 0;
    const end = Number.isFinite(dayCount) ? dayCount : 0;
    prevDayRef.current = start;
    dayAnim.setValue(0);

    const id = dayAnim.addListener(({ value }) => {
      const v = Math.round(start + (end - start) * value);
      setDisplayedDay(v);
    });

    Animated.timing(dayAnim, { toValue: 1, duration: 420, useNativeDriver: true }).start(() => {
      dayAnim.removeListener(id);
      setDisplayedDay(end);
    });

    return () => {
      dayAnim.removeListener(id);
    };
  }, [dayCount]);

  useEffect(() => {
    const target = Math.floor((Number.isFinite(counts) ? counts : 0) / 2);
    const start = Number.isFinite(displayedCount) ? displayedCount : 0;
    prevCountRef.current = start;
    countAnim.setValue(0);

    const id = countAnim.addListener(({ value }) => {
      const v = Math.round(start + (target - start) * value);
      setDisplayedCount(v);
    });

    Animated.timing(countAnim, { toValue: 1, duration: 420, useNativeDriver: true }).start(() => {
      countAnim.removeListener(id);
      setDisplayedCount(target);
    });

    return () => {
      countAnim.removeListener(id);
    };
  }, [counts]);

  // points 更新時や画面がフォーカスされたときにアニメーション実行


  useFocusEffect(
    useCallback(() => {
      let unsubscribe: (() => void) | undefined;
      (async () => {
        // Determine today’s key
        const levelJson = await AsyncStorage.getItem('@selected_levels');
        const level = levelJson ? JSON.parse(levelJson)[0] : '1';
        const sanitizedLevel = String(level).replace('.', '_');
        const auth = getAuth();
        const db = getDatabase();
        const uid = auth.currentUser?.uid;
        if (!uid) return;
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayKey = `${yyyy}-${mm}-${dd}`;
        // Subscribe to daily correct count
        const correctRef = dbRef(
          db,
          `users/${uid}/dailyCorrect_${sanitizedLevel}/${todayKey}`
        );
        unsubscribe = onValue(
          correctRef,
          snapshot => {
            const val = snapshot.val();
            setCounts(typeof val === 'number' ? val : 0);
          },
          error => {
            console.error('[TodayGool] dailyCorrect onValue error:', error);
            setCounts(0);
          }
        );
      })();
      return () => {
        if (unsubscribe) unsubscribe();
      };
    }, [])
  );

  const screenWidth = Dimensions.get('window').width;
  const baseWidth = screenWidth * 0.45;
  // fromShop が true のとき幅を 0.5 倍
  const width = fromShop ? baseWidth * 0.8 : baseWidth;
  // ベース高さの定義
  const cobtainerhight = screenWidth / 4;
  const cobtainerWidth = screenWidth / 2;

  const defaultHeight = baseWidth * 0.4 ;
  // fromShop が true のとき高さを 0.5 倍
  const height = fromShop ? defaultHeight * 0.9 : defaultHeight;

  // テキストサイズを動的に設定
  const valueFontSize =  fromShop ? 12 : 16;

  return (
    <View style={[styles.container, { height: cobtainerhight, width: cobtainerWidth }]}>
      {desigin === 'simple' ? (
        <View
          style={{
            width,
            height,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'#FFF',
            borderRadius:10,
          }}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            {display === 'Howday' ? (
              <>
                <Text style={[styles.value, { fontSize: valueFontSize }]}>学習日数</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Animated.Text
                    style={[
                      styles.value,
                      { fontSize: valueFontSize * 2, color: '#888', fontWeight: 'bold',
                        opacity: dayAnim,
                        transform: [{
                          scale: dayAnim.interpolate({ inputRange: [0, 1], outputRange: [0.96, 1] })
                        }, {
                          translateY: dayAnim.interpolate({ inputRange: [0, 1], outputRange: [2, 0] })
                        }]
                      }
                    ]}
                  >
                    {displayedDay}
                  </Animated.Text>
                  <Text style={[styles.value, { fontSize: valueFontSize * 1.2, color: '#888', fontWeight: 'bold' }]}>日目</Text>
                </View>
              </>
            ) : (
              <>
                <Text style={[styles.value, { fontSize: valueFontSize }]}>今日の学習単語</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Animated.Text
                    style={[
                      styles.value,
                      { fontSize: valueFontSize * 2, color: '#888', fontWeight: 'bold',
                        opacity: countAnim,
                        transform: [{
                          scale: countAnim.interpolate({ inputRange: [0, 1], outputRange: [0.96, 1] })
                        }, {
                          translateY: countAnim.interpolate({ inputRange: [0, 1], outputRange: [2, 0] })
                        }]
                      }
                    ]}
                  >
                    {displayedCount}
                  </Animated.Text>
                  <Text style={[styles.value, { fontSize: valueFontSize * 1.2, color: '#888', fontWeight: 'bold' }]}>単語</Text>
                </View>
              </>
            )}
          </View>
        </View>
      ) : (
        <NeomorphBox
          width={width}
          height={height}
          variant={desigin === 'rainbow' ? 'AI' : undefined}
        >
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            {display === 'Howday' ? (
              <>
                <Text style={[styles.value, { fontSize: valueFontSize }]}>学習日数</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Animated.Text
                    style={[
                      styles.value,
                      { fontSize: valueFontSize * 2, color: '#888', fontWeight: 'bold',
                        opacity: dayAnim,
                        transform: [{
                          scale: dayAnim.interpolate({ inputRange: [0, 1], outputRange: [0.96, 1] })
                        }, {
                          translateY: dayAnim.interpolate({ inputRange: [0, 1], outputRange: [2, 0] })
                        }]
                      }
                    ]}
                  >
                    {displayedDay}
                  </Animated.Text>
                  <Text style={[styles.value, { fontSize: valueFontSize * 1.2, color: '#888', fontWeight: 'bold' }]}>日目</Text>
                </View>
              </>
            ) : (
              <>
                <Text style={[styles.value, { fontSize: valueFontSize }]}>今日の学習単語</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <Animated.Text
                  style={[
                    styles.value,
                    { fontSize: valueFontSize * 2, color: '#888', fontWeight: 'bold',
                      opacity: countAnim,
                      transform: [{
                        scale: countAnim.interpolate({ inputRange: [0, 1], outputRange: [0.96, 1] })
                      }, {
                        translateY: countAnim.interpolate({ inputRange: [0, 1], outputRange: [2, 0] })
                      }]
                    }
                  ]}
                >
                  {displayedCount}
                </Animated.Text>
                <Text style={[styles.value, { fontSize: valueFontSize * 1.2, color: '#888', fontWeight: 'bold' }]}>単語</Text>
                </View>
              </>
            )}
          </View>
        </NeomorphBox>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 18,
    color:'#666'
  },
});

export default TodayGool;
