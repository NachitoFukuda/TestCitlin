import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomPicker from './CustomPicker';
import NeomorphBox from '../NeomorphBox';

interface LearningScheduleProps {
  dailyWordCount: number;
  setDailyWordCount: (count: number) => void;
  learningDays: number;
  setLearningDays: (days: number) => void;
  setDeadlineDays: (days: number) => void;
  selectedLevel: string | null; // 新たに追加
}

const { width: SCREEN_WIDTH } = require('react-native').Dimensions.get('window');

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
          items={Array.from({ length: 91 }, (_, i) => ({
            value: i + 10,
            label: "問",
          }))}
          selectedValue={dailyWordCount}
          onValueChange={(value) => setDailyWordCount(value)}
        />
      </View>

      {/* 計算結果の表示 */}
      <NeomorphBox width={SCREEN_WIDTH * 0.75} height={40} style={styles.neomorphStyle} forceTheme={'light'}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>一日の出題数: {dailyWordCount*2}問 ～ {dailyWordCount*2 *5 }問</Text>
        </View>
      </NeomorphBox>

      <NeomorphBox width={SCREEN_WIDTH * 0.75} height={40} forceTheme={'light'}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>必要日数: {learningDays} 日</Text>
        </View>
      </NeomorphBox>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },  
  pickerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  resultContainer: {
    width: '100%',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },
  neomorphStyle: {
    marginBottom: 25
  },
});

export default LearningSchedule;
