import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LearningSchedule from './LearningSchedule';
import NeomorphBox from '../ui/NeomorphBox';
import LottieView from 'lottie-react-native';
import NotificationSetup from './NotificationSetup';
import CalendarView from './CalendarView';

interface InitialSetupProps {
  onSetupComplete: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

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
    'どの級を学習する？',  // ← ステップ10
    '',  // 11
    '学習時間を通知で知らせる？',  // 12
    '学習を始めよう！！',  // 13
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
    if (currentStep === 12) {
      AsyncStorage.getItem('@deadline_days')
        .then((deadline) => {
          if (deadline !== null) {
            setSavedDeadlineDays(parseInt(deadline, 10));
          }
        })
        .catch(() => {});
    }
  }, [currentStep]);

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
        if (deadlineDays >= 50) {
          const deadlineData = { days: deadlineDays, savedAt: currentDate };
          await AsyncStorage.setItem('@deadline_days', JSON.stringify(deadlineData));
          Alert.alert('作成成功', `${deadlineDays}日間の予定を立てたよ！`);
          handleNext();
        } else {
          Alert.alert('作成失敗', '単語数が選択できてないよ！');
        }
      } else if (scheduleOption === 'daily') {
        if (learningDays >= 50) {
          const learningData = { days: learningDays, savedAt: currentDate };
          await AsyncStorage.setItem('@deadline_days', JSON.stringify(learningData));
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

          {/* ステップ12: 学習スケジュール */}
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

          {currentStep === 5 &&
          <>
              <CalendarView
              dailyWordCount={dailyWordCount}
              learningDays={learningDays}
              deadlineDays={deadlineDays}
              selectedLevel={selectedLevel}
            />
           <NotificationSetup />
           </>
           }


          {/* 小テストUI（LongWidget）の例：ステップ1～7で表示 */}

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
    backgroundColor: '#EBF3FF',
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
