import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomPicker from './CustomPicker';

interface LearningScheduleProps {
  dailyWordCount: number;
  setDailyWordCount: (count: number) => void;
  learningDays: number;
  setLearningDays: (days: number) => void;
  setDeadlineDays: (days: number) => void;
  selectedLevel: string | null; // 新たに追加
}


/** selectedLevel に応じた totalWords を設定する関数 */
const getTotalWordsByLevel = (level: string | null) => {
  switch(level) {
    case '3':
      return 1000;
    case '2_5':
      return 1222; 
    case '2':
      return 2300; 
    case '1_5':
      return 3400; 
    case '1':
      return 4280; 
    default:
      return 1000; // デフォルトの値
  }
};

const LearningSchedule: React.FC<LearningScheduleProps> = ({
  dailyWordCount,
  setDailyWordCount,
  learningDays,
  setLearningDays,
  setDeadlineDays,
  selectedLevel,
}) => {
  const totalWords = getTotalWordsByLevel(selectedLevel);
  const timePerWord = 40;

  // 必要な学習日数の計算
  useEffect(() => {
    if (dailyWordCount > 0) {
      const calculatedDays = Math.ceil(totalWords / dailyWordCount + timePerWord);
      setLearningDays(calculatedDays);
      setDeadlineDays(calculatedDays);
    }
  }, [dailyWordCount, setLearningDays, setDeadlineDays, totalWords]);

  return (
    <View style={styles.container}>
      {/* カスタムピッカー */}
      <View style={styles.pickerContainer}>
        <CustomPicker
          selectedValue={dailyWordCount}
          onValueChange={(value) => setDailyWordCount(value)}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },  
  pickerContainer: {
    marginTop:40,
    width: '100%',
  },
});

export default LearningSchedule;
