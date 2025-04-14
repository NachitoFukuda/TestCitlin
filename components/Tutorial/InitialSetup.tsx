import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LearningSchedule from './LearningSchedule';
import CalendarView from './CalendarView';
import NeomorphBox from '../NeomorphBox';
import LottieView from 'lottie-react-native';
import LongWidget from './LongWidget';

interface InitialSetupProps {
  onSetupComplete: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const InitialSetup: React.FC<InitialSetupProps> = ({ onSetupComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showButton, setShowButton] = useState(false);

  // メッセージ
  const messages = [
    'シトリンへようこそ！！', 
    '突然ですが知っていますか？', 
    '人の脳は、1日で70%のことを忘れると言われています。',
    'しかし、シトリンを使えば、記憶が消える前に復習できます。',
    'そのカギとなるのが、忘却曲線です。',
    '適切なタイミングで復習することで、記憶が長く定着します！',
    'シトリンでは、あなたの学習データを記録し',
    '適切なタイミングで出題されます。',
    'さらにの目標に合わせて学習スケジュールを自動作成します。',
    '1日の学習量を決めるだけでOK！',
    'まず級を選択してください。',  // ← ステップ10
    'さっそく予定を立ててみましょう！！',  // 11
    '',  // 12
    '',  // 13
  ];

  // 各ステップに応じたフォントサイズ・位置
  const fontSizes = [30, 30, 30, 30, 30, 24, 24, 24, 30, 30, 24, 30, 24, 24];
  const fontTop   = [50, 30, 30, 30, 30, 24, 24, 24, 50, 50, 50, 50, 50, 50];

  // NeomorphBox の高さ
  const neomorphHeights = [
    250, // 0
    550, // 1
    550, // 2
    550, // 3
    550, // 4
    550, // 5
    550, // 6
    550, // 7
    250, // 8
    250, // 9
    200, // 10: 学習級選択
    250, // 11
    600, // 12
    600, // 13
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
    if (currentStep === 10 && !selectedLevel) {
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
  if (currentStep === 10) {
    buttonLabel = '決定';
  } else if (currentStep < messages.length - 1) {
    buttonLabel = '次へ';
  } else {
    buttonLabel = '開始する';
  }

  // LottieView参照
  const confettiRef = useRef<LottieView>(null);

  // 以下は例の通り
  const getCorrectCount = (step: number) => {
    switch (step) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
      case 5:
        return 5;
      case 6:
        return 6;
      case 7:
        return 7;
      default:
        return 0;
    }
  };

  const getQuestionId = (step: number) => {
    switch (step) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 2;
      case 4:
        return 3;
      case 5:
        return 3;
      case 6:
        return 4;
      case 7:
        return 4;
      default:
        return 0;
    }
  };

  const getIsAnswerCorrect = (step: number) => {
    switch (step) {
      case 1:
        return true;
      case 2:
        return false;
      case 3:
        return true;
      case 4:
        return false;
      case 5:
        return true;
      case 6:
        return false;
      case 7:
        return true;
      default:
        return false;
    }
  };

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
          {currentStep === 10 && (
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
          {currentStep === 12 && (
            <LearningSchedule
              dailyWordCount={dailyWordCount}
              setDailyWordCount={setDailyWordCount}
              learningDays={learningDays}
              setLearningDays={setLearningDays}
              setDeadlineDays={setDeadlineDays}
              selectedLevel={selectedLevel} // ここで選択された級を渡す
            />
          )}

          {/* ステップ13: カレンダー */}
          {currentStep === 13 && (
            <CalendarView/>
          )}

          {/* 小テストUI（LongWidget）の例：ステップ1～7で表示 */}
          {currentStep >= 1 && currentStep < 8 && (
            <View style={styles.LongWidgetcontainer}>
              <LongWidget
                correctCount={getCorrectCount(currentStep)}
                questionId={getQuestionId(currentStep)}
                isAnswerCorrect={getIsAnswerCorrect(currentStep)}
              />
            </View>
          )}
        </View>
      </NeomorphBox>

      {/* 次へ or 決定 or 開始する ボタン */}
      {showButton && (
        <TouchableOpacity
          style={styles.button}
          onPress={currentStep === 12 ? handleSave : handleNext}
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
    backgroundColor: '#E3E5F3',
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
