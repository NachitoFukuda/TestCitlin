// hooks/useGeneratedData.ts
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface JsonData {
  id: number;
  result: number[];
}

interface DeadlineData {
  days: number;
  savedAt: string;
}

/** 日付を加算するユーティリティ */
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/** 級に応じた単語数を返す */
const getTotalWordsByLevel = (level: string | null): number => {
  switch (level) {
    case '3': return 1000;
    case '2_5': return 1220;
    case '2': return 2300;
    case '1_5': return 3400;
    case '1': return 4280;
    default: return 1000;
  }
};

interface GenerateCalendarConfig {
  dailyWordCount: number;
  learningDays: number;
  deadlineDays: number;
  selectedLevel: string | null;
}

/**
 * カスタムフック: カレンダー用データを生成し、AsyncStorageに保存する
 */
export const useGenerateCalendarData = ({
  dailyWordCount,
  learningDays,
  deadlineDays,
  selectedLevel,
}: GenerateCalendarConfig) => {
  useEffect(() => {
    const generate = async () => {
      try {
        // 1. 期限データ取得
        const rawDeadline = await AsyncStorage.getItem('@deadline_days');
        if (!rawDeadline) return;
        const { days, savedAt }: DeadlineData = JSON.parse(rawDeadline);

        // 2. 期限日算出
        const savedDate = new Date(savedAt);
        const deadlineDate = addDays(savedDate, days);
        const today = new Date(); today.setHours(0,0,0,0);
        const diffDays = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000*60*60*24));

        // 3. レベル取得
        const rawLevels = await AsyncStorage.getItem('@selected_levels');
        const level: string | null = rawLevels ? JSON.parse(rawLevels)[0] : null;

        // 4. 目標単語数と分割数
        const maxValue = getTotalWordsByLevel(level);
        const divisor = diffDays - 41;

        // 5. 配列生成
        const generated: JsonData[] = [];
        for (let i = 1; i < diffDays; i++) {
          const values = [
            Math.min(Math.floor((maxValue / divisor) * i), maxValue),
            Math.min(Math.floor((maxValue / divisor) * (i - 1)), maxValue),
            Math.min(Math.floor((maxValue / divisor) * (i - 6)), maxValue),
            Math.min(Math.floor((maxValue / divisor) * (i - 19)), maxValue),
            Math.min(Math.floor((maxValue / divisor) * (i - 39)), maxValue)
          ].map(v => v < 0 ? 0 : v);
          generated.push({ id: i, result: values });
        }

        // 6. 保存
        await AsyncStorage.setItem('@generated_data', JSON.stringify(generated));
        console.log('[useGenerateCalendarData] Saved @generated_data, length:', generated.length);
      } catch (e) {
        console.error('[useGenerateCalendarData] Error:', e);
      }
    };
    generate();
  }, [dailyWordCount, learningDays, deadlineDays, selectedLevel]);
};
