import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LearningSchedule from './LearningSchedule';
import NeomorphBox from '../ui/NeomorphBox';
import LottieView from 'lottie-react-native';
import NotificationSetup from './NotificationSetup';
import { useGenerateCalendarData } from '@/hooks/useGeneratedData';
import { JsonData } from '../etc/types';
interface InitialSetupProps {
  onSetupComplete: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};
// カスタムフックを作成
const useCalendarDataGeneration = (
  currentStep: number,
  dailyWordCount: number,
  learningDays: number,
  deadlineDays: number,
  selectedLevel: string | null
) => {
  useEffect(() => {
    if (currentStep === 5) {
      console.log('[InitialSetup] Starting calendar data generation with:', {
        dailyWordCount,
        learningDays,
        deadlineDays,
        selectedLevel
      });

      // 現在の日付を基準に計算
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // 締切日を計算
      const deadlineDate = addDays(today, deadlineDays);
      const diffDays = deadlineDays;
      
      console.log('[InitialSetup] Date calculations:', {
        today,
        deadlineDate,
        diffDays
      });
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
      const maxValue = getTotalWordsByLevel(selectedLevel);
      const divisor = diffDays - 41;

      console.log('[InitialSetup] Generation parameters:', {
        selectedLevel,
        maxValue,
        divisor,
        diffDays,
        dailyWordCount,
        learningDays
      });

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

      console.log('[InitialSetup] Generated data summary:', {
        firstDay: generatedData[0],
        lastDay: generatedData[generatedData.length - 1],
        totalDays: generatedData.length,
        sampleValues: generatedData.slice(0, 3)
      });

      // データを保存
      AsyncStorage.setItem('@generated_data', JSON.stringify(generatedData))
        .then(() => {
          console.log('[InitialSetup] Data generation and storage complete');
        })
        .catch((error) => {
          console.error('[InitialSetup] Error saving data:', error);
        });
    }
  }, [currentStep, dailyWordCount, learningDays, deadlineDays, selectedLevel]);
};

const InitialSetup: React.FC<InitialSetupProps> = ({ onSetupComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showButton, setShowButton] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  // メッセージ
  const messages = [
    'こんにちは', 
    'citlinでは、\n英検3級から\n1級までを、\n最後まで『無料』で\n学習することができます！！✨',
    'AIが最適な\nタイミングで復習するべき問題を\n出題！',
    'どの級を学習する？',  
    '',  
    '学習時間を通知で知らせる？', 
    '学習を始めよう！！',  
  ];

  // 各ステップに応じたフォントサイズ・位置
  const fontSizes = [46, 30, 40, 30, 30, 24, 40, 24, 30, 30, 24, 30, 24, 24];
  const fontTop   = [220, 90, 100, 30, 30, 24, 150, 24, 50, 50, 50, 50, 50, 50];

  // NeomorphBox の高さ
  const neomorphHeights = [
    600, // 0
    600, // 1
    600, // 2
    600, // 3
    600, // 4
    600, // 5
    600, // 6
  ];

  // 予定設定用ステート
  const [scheduleOption, setScheduleOption] = useState<'deadline' | 'daily'>('deadline');
  const [deadlineDays, setDeadlineDays] = useState(40);
  const [dailyWordCount, setDailyWordCount] = useState(10);
  const [learningDays, setLearningDays] = useState(0);
  const [savedDeadlineDays, setSavedDeadlineDays] = useState<number | null>(null);
  const [isDataSaved, setIsDataSaved] = useState(false);

  // 学習する級の選択用ステート
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  // 保存された級の一覧を管理する state
  const [savedLevels, setSavedLevels] = useState<string[]>([]);

  // コンポーネントマウント時に保存済みの級を取得
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

  // フェードインアニメーション
  useEffect(() => {
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setShowButton(false);
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentStep, fadeAnim]);

  // currentStep が 12 のときに保存済みの期限日数を取得
  useEffect(() => {
    if (currentStep === 5) {
      AsyncStorage.getItem('@deadline_days')
        .then((deadline) => {
          if (deadline !== null) {
            const deadlineData = JSON.parse(deadline);
            console.log('[InitialSetup] Loaded deadline data:', deadlineData);
            setSavedDeadlineDays(deadlineData.days);
            setIsDataSaved(true);
          }
        })
        .catch((error) => {
          console.error('[InitialSetup] Error loading deadline data:', error);
        });
    }
  }, [currentStep]);

  // カレンダーデータ生成フックを使用
  useCalendarDataGeneration(
    currentStep,
    dailyWordCount,
    learningDays,
    deadlineDays,
    selectedLevel
  );

  // 現在の日付を基準に計算
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 締切日を計算
  const deadlineDate = addDays(today, deadlineDays);
  const diffDays = deadlineDays;
  const getTotalWordsByLevel = (level: string | null): number => {
    switch (level) {
      case '3': return 1000;
      case '2_5': return 1220;
      case '2': return 2300;
      case '1_5': return 3400;
      case '1': return 3200;
      default: return 1000;
    }
  };
  // 目標単語数と分割数
  const maxValue = getTotalWordsByLevel(selectedLevel);
  const divisor = diffDays - 41;

  // 次へ or 決定ボタン
  const handleNext = () => {
    // ステップ10で何も選択されていない場合はアラートを出して進行を止める
    if (currentStep === 3 && !selectedLevel) {
      Alert.alert('学習級が未選択', '学習する級を選択してください。');
      return;
    }

    if (currentStep < messages.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onSetupComplete();
    }
  };
// 学習級の選択：既存の保存済みデータを削除し、新たな選択を保存
const handleSelectLevel = (level: string) => {
  // 選択した級を state に保存
  setSelectedLevel(level);

  // 既存の保存データを削除してから、新たな級を保存する
  AsyncStorage.removeItem('@selected_levels')
    .then(() => {
      return AsyncStorage.setItem('@selected_levels', JSON.stringify([level]));
    })
    .then(() => {
      setSavedLevels([level]);
    })
    .catch((error) => {
    });
};

  // スケジュールを保存
  const handleSave = async () => {
    try {
      const currentDate = new Date().toISOString();
      if (scheduleOption === 'deadline') {
        if (deadlineDays >= 40) {
          const deadlineData = { days: deadlineDays, savedAt: currentDate };
          await AsyncStorage.setItem('@deadline_days', JSON.stringify(deadlineData));
          console.log('[InitialSetup] Saved deadline data:', deadlineData);
          setIsDataSaved(true);
          Alert.alert('作成成功', `${deadlineDays}日間の予定を立てたよ！`);
          handleNext();
        } else {
          Alert.alert('作成失敗', '単語数が選択できてないよ！');
        }
      } else if (scheduleOption === 'daily') {
        if (learningDays >= 40) {
          const learningData = { days: learningDays, savedAt: currentDate };
          await AsyncStorage.setItem('@deadline_days', JSON.stringify(learningData));
          console.log('[InitialSetup] Saved learning data:', learningData);
          setIsDataSaved(true);
          Alert.alert('作成成功', `${learningDays}日間の予定を立てたよ！`);
          handleNext();
        } else {
          Alert.alert('作成失敗', '日数が選択できてないよ！');
        }
      }
    } catch (error) {
      Alert.alert('エラー', 'データの保存に失敗しました。');
    }
  };

  // ボタンのラベルを切り替える
  let buttonLabel = '';
  if (currentStep === 6) {
    buttonLabel = '決定';
  } else if (currentStep < messages.length - 1) {
    buttonLabel = '次へ';
  } else {
    buttonLabel = '開始する';
  }

  // LottieView参照
  const confettiRef = useRef<LottieView>(null);

  return (
    <View style={styles.container}>
      {/* NeomorphBox */}
      <NeomorphBox
        width={SCREEN_WIDTH * 0.85}
        height={neomorphHeights[currentStep] || 250}
        style={[styles.neomorphBox, { top: 100 }]}
        forceTheme={'light'}
      >
        <View style={styles.contentContainer}>
          {/* Lottieアニメーション */}
          <View style={styles.lottieContainer}>
            <LottieView
              ref={confettiRef}
              source={require('../../assets/lottie/AI1.json')}
              autoPlay
              loop
              style={styles.lottieStyle}
            />
          </View>

          {/* メインメッセージ */}
          <Animated.Text
            style={[
              styles.text,
              {
                opacity: fadeAnim,
                fontSize: fontSizes[currentStep],
                marginTop: fontTop[currentStep],
              },
            ]}
          >
            {messages[currentStep]}
          </Animated.Text>

          {/* ★★★ ステップ10: 学習級の選択 ★★★ */}
          {currentStep === 3 && (
            <View style={styles.levelcontainer}>
              {/* 3級 */}
              <View style={{ marginVertical: 5 }}>
                <TouchableOpacity onPress={() => handleSelectLevel('3')}>
                  <NeomorphBox
                    width={SCREEN_WIDTH * 0.6}
                    height={50}
                    style={[
                      styles.levelBox,
                      selectedLevel === '3' && styles.selectedLevelBox,
                    ]}
                    forceTheme={'light'}
                  >
                    <Text
                      style={[
                        styles.levelButtonText,
                        selectedLevel === '3' && styles.selectedLevelText,
                      ]}
                    >
                      英検3級  1000単語
                    </Text>
                  </NeomorphBox>
                </TouchableOpacity>
              </View>

              {/* 準2級 */}
              <View style={{ marginVertical: 5 }}>
                <TouchableOpacity onPress={() => handleSelectLevel('2_5')}>
                  <NeomorphBox
                    width={SCREEN_WIDTH * 0.6}
                    height={50}
                    style={[
                      styles.levelBox,
                      selectedLevel === '2_5' && styles.selectedLevelBox,
                    ]}
                    forceTheme={'light'}
                  >
                    <Text
                      style={[
                        styles.levelButtonText,
                        selectedLevel === '2_5' && styles.selectedLevelText,
                      ]}
                    >
                      英検準2級  1220単語
                    </Text>
                  </NeomorphBox>
                </TouchableOpacity>
              </View>

              {/* 2級 準備中 */}
              <View style={{ marginVertical: 5 }}>
                <TouchableOpacity onPress={() => handleSelectLevel('2')}>
                  <NeomorphBox
                    width={SCREEN_WIDTH * 0.6}
                    height={50}
                    style={[
                      styles.levelBox,
                      selectedLevel === '2' && styles.selectedLevelBox,
                    ]}
                    forceTheme={'light'}
                  >
                    <Text
                      style={[
                        styles.levelButtonText,
                        selectedLevel === '2' && styles.selectedLevelText,
                      ]}
                    >
                      英検2級  2300単語
                    </Text>
                  </NeomorphBox>
                </TouchableOpacity>
              </View>

              {/* 準1級 準備中 */}
              <View style={{ marginVertical: 5 }}>
                <TouchableOpacity onPress={() => handleSelectLevel('1_5')}>
                  <NeomorphBox
                    width={SCREEN_WIDTH * 0.6}
                    height={50}
                    style={[
                      styles.levelBox,
                      selectedLevel === '1_5' && styles.selectedLevelBox,
                    ]}
                    forceTheme={'light'}
                  >
                    <Text
                      style={[
                        styles.levelButtonText,
                        selectedLevel === '1_5' && styles.selectedLevelText,
                      ]}
                    >
                      英検準1級  3400単語
                    </Text>
                  </NeomorphBox>
                </TouchableOpacity>
              </View>

              {/* 1級 準備中 */}
              <View style={{ marginVertical: 5 }}>
                <TouchableOpacity onPress={() => handleSelectLevel('1')}>
                  <NeomorphBox
                    width={SCREEN_WIDTH * 0.6}
                    height={50}
                    style={[
                      styles.levelBox,
                      selectedLevel === '1' && styles.selectedLevelBox,
                    ]}
                    forceTheme={'light'}
                  >
                    <Text
                      style={[
                        styles.levelButtonText,
                        selectedLevel === '1' && styles.selectedLevelText,
                      ]}
                    >
                      英検1級  4280単語
                    </Text>
                  </NeomorphBox>
                </TouchableOpacity>
              </View>

            </View>
          )}

          {currentStep === 4 && (
            <LearningSchedule
              dailyWordCount={dailyWordCount}
              setDailyWordCount={setDailyWordCount}
              learningDays={learningDays}
              setLearningDays={setLearningDays}
              setDeadlineDays={setDeadlineDays}
              selectedLevel={selectedLevel} // ここで選択された級を渡す
            />
          )}

          {currentStep === 5 && (
            <>
                <NotificationSetup />
            </>
          )}

        </View>
      </NeomorphBox>

      {/* 次へ or 決定 or 開始する ボタン */}
      {showButton && (
        <TouchableOpacity
          style={styles.button}
          onPress={currentStep === 6 ? handleSave : handleNext}
        >
          <NeomorphBox
            width={SCREEN_WIDTH * 0.85}
            height={70}
            style={styles.neomorphStyle1}
            forceTheme={'light'}
          >
            <Text style={styles.buttonText}>{buttonLabel}</Text>
          </NeomorphBox>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#E3E5F2',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  neomorphBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
  },
  levelcontainer: {
    position: 'absolute',
    top: 230,
    alignItems: 'center',
  },
  lottieContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  lottieStyle: {
    position: 'absolute',
    top: -40,
    width: 150,
    height: 150,
    zIndex: 8,
  },
  text: {
    position: 'absolute',
    top: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#777',
  },
  button: {
    marginBottom: 60,
  },
  neomorphStyle1: {
    // 必要に応じてスタイル追加
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 70,
  },
  levelBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  selectedLevelBox: {
    backgroundColor: '#bcdcff',
  },
  levelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "rgb(59, 59, 59)",
  },
  selectedLevelText: {
    color: "rgb(0, 26, 255)",
  },
  LongWidgetcontainer: {
    marginTop: 130,
    width: SCREEN_WIDTH * 0.7,
    flex: 1,
    alignItems: 'center',
  },
});

export default InitialSetup;
