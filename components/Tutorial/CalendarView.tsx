// CalendarView.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NeomorphBox from '../ui/NeomorphBox';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface JsonData {
  id: number;
  result: number[];
}

interface DeadlineData {
  days: number;
  savedAt: string;
}

/** 日付をフォーマットするユーティリティ (YYYY/MM/DD) */
const formatDate = (date: Date): string => {
  const y = date.getFullYear();
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const d = date.getDate().toString().padStart(2, '0');
  return `${y}/${m}/${d}`;
};

/** 日付を加算するユーティリティ */
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/** savedAt から何日経過しているか計算するユーティリティ */
const calculateDaysSinceStart = (savedAt: string): number | null => {
  try {
    const savedAtDate = new Date(savedAt);
    if (isNaN(savedAtDate.getTime())) {
      throw new Error('Invalid savedAt date format.');
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = today.getTime() - savedAtDate.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  } catch (error) {
    console.error('Error calculating days since start:', error);
    return null;
  }
};

/** 級に応じた単語数を返す */
const getTotalWordsByLevel = (level: string | null): number => {
  switch(level) {
    case '3':
      return 1000;
    case '2_5':
      return 1220; 
    case '2':
      return 2300; 
    case '1_5':
      return 3400; 
    case '1':
      return 3200; 
    default:
      return 1000; // デフォルトの値
  }
};

const CalendarView: React.FC = () => {
  const [jsonData, setJsonData] = useState<JsonData[]>([]);
  const [daysSinceStart, setDaysSinceStart] = useState<number | null>(null);
  const [deadlineDate, setDeadlineDate] = useState<Date | null>(null);
  // 学習開始日を表示用に保持
  const [savedAtDate, setSavedAtDate] = useState<Date | null>(null);
  const [savedLevels, setSavedLevels] = useState<string[]>([]);
  

  useEffect(() => {
    AsyncStorage.getItem('@selected_levels')
      .then((data) => {
        if (data) {
          const levels = JSON.parse(data);
          setSavedLevels(levels);
        }
      })
      .catch((error) => {
        console.log('保存された級の取得に失敗しました:', error);
      });
  }, []);

  useEffect(() => {
    const generateAndLoadData = async () => {
      try {
        // 1. @deadline_days から期限などの情報を取得
        const data = await AsyncStorage.getItem('@deadline_days');
        if (data !== null) {
          const deadlineData: DeadlineData = JSON.parse(data);

          if (deadlineData.days && deadlineData.savedAt) {
            const { days, savedAt } = deadlineData;
            // 開始日を state に入れておく (表示計算用)
            const savedDateObj = new Date(savedAt);
            setSavedAtDate(savedDateObj);

            // 経過日数を計算
            const daysSinceStartCalculated = calculateDaysSinceStart(savedAt);
            setDaysSinceStart(daysSinceStartCalculated);

            // 期限日を計算
            const deadlineDateCalculated = addDays(savedDateObj, days);
            setDeadlineDate(deadlineDateCalculated);

            // deadlineDate と今日の差分
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const diffTime = deadlineDateCalculated.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // 2. 級情報を取得し、maxValue を決定
            const selectedLevelsData = await AsyncStorage.getItem('@selected_levels');
            let level: string | null = null;
            if (selectedLevelsData !== null) {
              const levels: string[] = JSON.parse(selectedLevelsData);
              if (levels.length > 0) {
                level = levels[0];
              }
            }
            const maxValue = getTotalWordsByLevel(level);
            const divisor = diffDays - 41; // 例としての divisor

            // 3. JSONデータを生成 → @generated_data に保存 (今まで通り id & result)
            const generatedData: JsonData[] = [];
            for (let i = 1; i < diffDays; i++) {
              const firstValue = Math.min(Math.floor((maxValue / divisor) * i), maxValue);
              const secondValue =
                i < 1 ? 0 : Math.min(Math.floor((maxValue / divisor) * (i - 1)), maxValue);
              const thirdValue =
                i < 6 ? 0 : Math.min(Math.floor((maxValue / divisor) * (i - 6)), maxValue);
              const fourthValue =
                i < 19 ? 0 : Math.min(Math.floor((maxValue / divisor) * (i - 19)), maxValue);
              const fifthValue =
                i < 39 ? 0 : Math.min(Math.floor((maxValue / divisor) * (i - 39)), maxValue);

              generatedData.push({
                id: i, // id 1 からスタート
                result: [firstValue, secondValue, thirdValue, fourthValue, fifthValue],
              });
            }

            await AsyncStorage.setItem('@generated_data', JSON.stringify(generatedData));
          }
        }

        // 4. 保存後に @generated_data を読み込んで state にセット
        const storedData = await AsyncStorage.getItem('@generated_data');
        if (storedData) {
          const parsedData: JsonData[] = JSON.parse(storedData);
          setJsonData(parsedData);
        }
      } catch (error) {
        console.error('Error generating or loading data:', error);
      }
    };

    generateAndLoadData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {deadlineDate && (
        <Text style={{ marginTop: 60, fontSize: 24, color: '#666' }}>
           {formatDate(deadlineDate)}日まで頑張ろう！
        </Text>
      )}

      {jsonData.length > 0 && savedAtDate ? (
        jsonData.map((item) => {
          const dateObj = new Date(savedAtDate);
          dateObj.setDate(dateObj.getDate() + item.id - 1);
          const dayStr = formatDate(dateObj);

          const currentSum = item.result.reduce((acc, num) => acc + num, 0);
          let previousSum = 0;
          if (item.id > 0) {
            const previousItem = jsonData.find((data) => data.id === item.id - 1);
            if (previousItem) {
              previousSum = previousItem.result.reduce((acc, num) => acc + num, 0);
            }
          }
          const difference =  currentSum - previousSum;

          return (
            <View key={item.id} style={styles.itemContainer}>
              <NeomorphBox
                width={SCREEN_WIDTH * 0.6}
                height={60}
                style={styles.neomorphBoxStyle}
                forceTheme={'light'}
              >
                <View style={styles.itemContent}>
                  <Text style={styles.itemTitle}>{dayStr}</Text>
                  <Text style={styles.itemText}>
                    {difference * 2}問 正解しよう！
                  </Text>
                </View>
              </NeomorphBox>
            </View>
          );
        })
      ) : (
        <Text>データがありません。</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  itemContainer: {
    margin: 15,
  },
  neomorphBoxStyle: {
    backgroundColor: '#EBF3FF',
    borderRadius: 10,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 14,
    color: '#555',
  },
});

export default CalendarView;
