import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import NeomorphBox from '../ui/NeomorphBox';
import useQuestionData from '../questioncomp/useQuestionData';


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
  const [points, setPoints] = useState<number>(0);
  const [counts, setCounts] = useState<number>(0);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const isFocused = useIsFocused();
  const [dayCount, setDayCount] = useState<number>(1);
  const { level } = useQuestionData();
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');
  const CORRECT_KEY = `DAYLY_CORRECT_${sanitizedLevel}`;

  // AsyncStorage から読み込み
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

  // points 更新時や画面がフォーカスされたときにアニメーション実行

  // 今日の正解数を safeGetData で取得
  useEffect(() => {
    (async () => {
      try {
        const data = await safeGetData(CORRECT_KEY, {});
        const todayKey = new Date().toISOString().split('T')[0];
        if (data.hasOwnProperty(todayKey)) {
          setCounts(data[todayKey]);
        } else {
          setCounts(0);
        }
      } catch (e) {
        console.error('[TodayGool] Error loading today correct data:', e);
      }
    })();
  }, [isFocused]);

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
                  <Text style={[styles.value, { fontSize: valueFontSize * 2, color: '#888', fontWeight: 'bold' }]}>{dayCount}</Text>
                  <Text style={[styles.value, { fontSize: valueFontSize * 1.2, color: '#888', fontWeight: 'bold' }]}>日目</Text>
                </View>
              </>
            ) : (
              <>
                <Text style={[styles.value, { fontSize: valueFontSize }]}>今日の学習単語</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Text style={[styles.value, { fontSize: valueFontSize * 2, color: '#888', fontWeight: 'bold' }]}>{counts}</Text>
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
                  <Text style={[styles.value, { fontSize: valueFontSize * 2, color: '#888', fontWeight: 'bold' }]}>{dayCount}</Text>
                  <Text style={[styles.value, { fontSize: valueFontSize * 1.2, color: '#888', fontWeight: 'bold' }]}>日目</Text>
                </View>
              </>
            ) : (
              <>
                <Text style={[styles.value, { fontSize: valueFontSize }]}>今日の学習単語</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Text style={[styles.value, { fontSize: valueFontSize * 2, color: '#888', fontWeight: 'bold' }]}>{counts}</Text>
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
  label: {
    fontSize:5,
    color: '#333',
    marginRight: 4,
  },
  value: {
    fontSize: 18,
    color:'#666'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
});

export default TodayGool;
