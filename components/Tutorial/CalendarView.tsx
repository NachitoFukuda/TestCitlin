// CalendarView.tsx
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
interface CalendarViewProps {
    dailyWordCount: number;
    learningDays: number;
    deadlineDays: number;
    selectedLevel: string | null;
  }

const CalendarView: React.FC<CalendarViewProps> = ({
    dailyWordCount,
    learningDays,
    deadlineDays,
    selectedLevel,
  }) => {  
  const [jsonData, setJsonData] = useState<JsonData[]>([]);
  const [daysSinceStart, setDaysSinceStart] = useState<number | null>(null);
  const [deadlineDate, setDeadlineDate] = useState<Date | null>(null);
  // 学習開始日を表示用に保持
  const [savedAtDate, setSavedAtDate] = useState<Date | null>(null);
  const [savedLevels, setSavedLevels] = useState<string[]>([]);
  
  // コンポーネントマウント時のログ


  // 級情報の読み込み
  useEffect(() => {
    AsyncStorage.getItem('@selected_levels')
      .then((data) => {
        if (data) {
          const levels = JSON.parse(data);
          console.log('[CalendarView] Loaded levels:', levels);
          setSavedLevels(levels);
        }
      })
      .catch((error) => {
        console.error('[CalendarView] Error loading levels:', error);
      });
  }, []);

  // データ生成と読み込み
  useEffect(() => {
    console.log('[CalendarView] Starting calculations with props:', {
      dailyWordCount,
      learningDays,
      deadlineDays,
      selectedLevel
    });

    const generateAndLoadData = async () => {
      try {
        const data = await AsyncStorage.getItem('@deadline_days');
        console.log('[CalendarView] Raw deadline data:', data);
        
        if (data !== null) {
          const deadlineData: DeadlineData = JSON.parse(data);
          console.log('[CalendarView] Parsed deadline data:', deadlineData);

          if (deadlineData.days && deadlineData.savedAt) {
            const { days, savedAt } = deadlineData;
            const savedDateObj = new Date(savedAt);
            const daysSinceStartCalculated = calculateDaysSinceStart(savedAt);
            const deadlineDateCalculated = addDays(savedDateObj, days);
            
            console.log('[CalendarView] Date calculations:', {
              savedDate: savedDateObj,
              daysSinceStart: daysSinceStartCalculated,
              deadlineDate: deadlineDateCalculated
            });

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const diffTime = deadlineDateCalculated.getTime() - today.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            const selectedLevelsData = await AsyncStorage.getItem('@selected_levels');
            let level: string | null = null;
            if (selectedLevelsData !== null) {
              const levels: string[] = JSON.parse(selectedLevelsData);
              if (levels.length > 0) {
                level = levels[0];
              }
            }

            const maxValue = getTotalWordsByLevel(level);
            const divisor = diffDays - 41;


            const generatedData: JsonData[] = [];
            for (let i = 1; i < diffDays; i++) {
              const firstValue = Math.min(Math.floor((maxValue / divisor) * i), maxValue);
              const secondValue = i < 1 ? 0 : Math.min(Math.floor((maxValue / divisor) * (i - 1)), maxValue);
              const thirdValue = i < 6 ? 0 : Math.min(Math.floor((maxValue / divisor) * (i - 6)), maxValue);
              const fourthValue = i < 19 ? 0 : Math.min(Math.floor((maxValue / divisor) * (i - 19)), maxValue);
              const fifthValue = i < 39 ? 0 : Math.min(Math.floor((maxValue / divisor) * (i - 39)), maxValue);

              generatedData.push({
                id: i,
                result: [firstValue, secondValue, thirdValue, fourthValue, fifthValue],
              });
            }

            console.log('[CalendarView] Generated data summary:', {
              firstDay: generatedData[0],
              lastDay: generatedData[generatedData.length - 1],
              totalDays: generatedData.length,
              sampleValues: generatedData.slice(0, 3) // 最初の3日分のデータを表示
            });

            await AsyncStorage.setItem('@generated_data', JSON.stringify(generatedData));
            console.log('[CalendarView] Data generation complete');
          }
        }
      } catch (error) {
        console.error('[CalendarView] Calculation error:', error);
      }
    };

    generateAndLoadData();
  }, [dailyWordCount, learningDays, deadlineDays, selectedLevel]); // 依存配列を追加

  return null;
};


export default CalendarView;