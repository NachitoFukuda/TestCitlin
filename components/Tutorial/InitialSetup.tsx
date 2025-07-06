import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, Alert, TextInput } from 'react-native';
import { Easing } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LearningSchedule from './LearningSchedule';
import LottieView from 'lottie-react-native';
import NotificationSetup from './NotificationSetup';
import { JsonData } from '../etc/types';
import { LinearGradient } from 'expo-linear-gradient';
import GlassCard from '../ui/GlassCard';
import TapIndicator from '../ui/TapIndicator';
interface InitialSetupProps {
  onSetupComplete: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BUTTON_ROW_HORIZONTAL_PADDING = 16 * 2; // left and right padding
const BUTTON_ROW_CONTENT_WIDTH = SCREEN_WIDTH - BUTTON_ROW_HORIZONTAL_PADDING;
const BUTTON_ROW_HEIGHT = 70;
const BACK_BUTTON_WIDTH = BUTTON_ROW_CONTENT_WIDTH * 0.5;
const NEXT_BUTTON_WIDTH = BUTTON_ROW_CONTENT_WIDTH * 0.5;
const CARD_WIDTH = SCREEN_WIDTH * 0.85;
const CARD_LEFT_OFFSET = (SCREEN_WIDTH - CARD_WIDTH) / 2;
const SPACING = 20;  // spacing between cards during animation
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


      // 現在の日付を基準に計算
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // 締切日を計算
      const diffDays = deadlineDays;
      

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
            return 4280; 
          default:
            return 1000; // デフォルトの値
        }
      };
      const maxValue = getTotalWordsByLevel(selectedLevel);
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
;

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
  const slideAnim = useRef(new Animated.Value(0)).current;
  const exitAnim = useRef(new Animated.Value(0)).current;
  const exitOpacity = useRef(new Animated.Value(1)).current;
  const [prevStep, setPrevStep] = useState<number>(0);  // Track when sliding
  const [isSliding, setIsSliding] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showIndicator2, setShowIndicator2] = useState(true);
  const tiltProgress2 = useRef(new Animated.Value(0)).current;
  // メッセージ
  const messages = [
    'こんにちは', 
    'AIが\n最適なタイミングで\n自動出題！',
    'ニックネームを\n入力してね',
    'どの級を学習する？',  
    '',  
    '時間を約２０％削減',  
  ];

  // 各ステップに応じたフォントサイズ・位置
  const fontSizes = [60, 30, 40, 30, 30, 30];
  const fontTop   = [150, 90, 100, 30, 30, -60];

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
  const [nickname, setNickname] = useState<string>('');
  const [showIndicator1, setShowIndicator1] = useState(true);
  const tiltProgress1 = useRef(new Animated.Value(0)).current;

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
  }, [currentStep, fadeAnim, slideAnim]);

  const handleTiltPress1 = () => {
    setShowIndicator1(false);
    Animated.timing(tiltProgress1, {
      toValue: 1,
      duration: 600,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

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

  const rotateX1 = tiltProgress1.interpolate({
    inputRange: [0, 1],
    outputRange: ['40deg', '0deg'],
  });
  const rotateZ1 = tiltProgress1.interpolate({
    inputRange: [0, 1],
    outputRange: ['24deg', '0deg'],
  });
  const translateY1 = tiltProgress1.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, 0],
  });


  // 次へ or 決定ボタン
  const handleNext = async () => {
    // ニックネーム入力ステップでの保存
    if (currentStep === 2) {
      const cleanName = nickname.trim();
      if (!cleanName) {
        Alert.alert('入力エラー', 'ニックネームを入力してください。');
        return;
      }
      await AsyncStorage.setItem('@nickname', cleanName);
    }
    if (currentStep === 3 && !selectedLevel) {
      Alert.alert('学習級が未選択', '学習する級を選択してください。');
      return;
    }
    if (currentStep < messages.length - 1) {
      exitOpacity.setValue(1);
      setPrevStep(currentStep);
      exitAnim.setValue(0);
      slideAnim.setValue(CARD_WIDTH + SPACING);
      setIsSliding(true);
      Animated.parallel([
        Animated.timing(exitAnim, {
          toValue: -(CARD_WIDTH + SPACING),
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(exitOpacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start(() => {
        setCurrentStep(prev => prev + 1);
        exitAnim.setValue(0);
        setIsSliding(false);
      });
    } else {
      onSetupComplete();
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => (prev > 0 ? prev - 1 : 0));
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
const levelMap: { [key: string]: string } = {
  '1': '1級',
  '1_5': '準1級',
  '2': '2級',
  '2_5': '準2級',
  '3': '3級',
};

const levelColors: { [key: string]: string } = {
  '1': '#F9D65C',      // Gold-ish
  '1_5': '#C1C1C1',    // Silver-ish
  '2': '#CD7F32',      // Bronze-ish
  '2_5': '#8FD4FF',    // Light Blue
  '3': '#1c6d6e',      // Light Green
};

const levelCircleColors: {
  [key: string]: { large: string; small: string };
} = {
  '1':   { large: '#F7E08B', small: '#F9D65C' },
  '1_5': { large: '#D9D9D9', small: '#C1C1C1' },
  '2':   { large: '#D9A06B', small: '#CD7F32' },
  '2_5': { large: '#B4E2FF', small: '#8FD4FF' },
  '3':   { large: '#89D98D', small: '#1c6d6e' },
};

// 各級ごとの買い切り価格
const levelPriceMap: { [key: string]: string } = {
  '1': '¥1,100',
  '1_5': '¥900',
  '2': '¥700',
  '2_5': '¥500',
  '3': '¥300',
};

const levelTextColorMap: {
  [key: string]: {
    badge: string;
    price: string;
    message: string;
  };
} = {
  '1':   { badge: '#5B4100', price: '#9F7500', message: '#5B4100' },
  '1_5': { badge: '#777',    price: '#555',    message: '#555'    },
  '2':   { badge: '#663A00', price: '#663A00', message: '#663A00' },
  '2_5': { badge: '#135A7E', price: '#2787C8', message: '#135A7E' },
  '3':   { badge: '#ddd', price: '#eee', message: '#1F5E1F' },
};

const rotateX2 = tiltProgress2.interpolate({
  inputRange: [0, 1],
  outputRange: ['40deg', '0deg'],
});
const rotateZ2 = tiltProgress2.interpolate({
  inputRange: [0, 1],
  outputRange: ['24deg', '0deg'],
});
const translateY2 = tiltProgress2.interpolate({
  inputRange: [0, 1],
  outputRange: [-24, 0],
});


const handleTiltPress2 = () => {
  setShowIndicator2(false);
  Animated.timing(tiltProgress2, {
    toValue: 1,
    duration: 600,
    easing: Easing.out(Easing.quad),
    useNativeDriver: true,
  }).start();
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
    buttonLabel = 'まずは無料で始める';
  }

  // Build step-specific content nodes dynamically from messages array
  const stepContents = messages.map((msg, i) => (
    <View key={i} style={{ alignItems: 'center', paddingTop: 70 }}>
      {i === 0 ? (
        <LottieView
          source={require('../../assets/lottie/hello.json')}
          autoPlay
          style={{ width: SCREEN_WIDTH * 0.6, height: SCREEN_WIDTH * 0.6, alignSelf: 'center', marginTop: 80 }}
        />
      ) : (
        <Animated.Text
          style={[styles.text, { opacity: fadeAnim, fontSize: fontSizes[i], marginTop: fontTop[i] ?? 0 }]}
        >
          {msg}
        </Animated.Text>
      )}
      {i === 2 && (
        <View style={{ width: SCREEN_WIDTH * 0.7, marginTop: 250 }}>
          <GlassCard width={SCREEN_WIDTH * 0.7} height={50}>
            <TextInput
              style={{ flex: 1, paddingHorizontal: 10, color: '#fff' }}
              placeholder="ニックネームを入力..."
              placeholderTextColor="rgba(0,0,0,0.5)"
              value={nickname}
              onChangeText={text => setNickname(text.normalize())}
              autoCapitalize="none"
            />
          </GlassCard>
        </View>
      )}
      {i === 3 && (
        <View style={styles.levelcontainer}>
          {/* 3級 */}
          <View style={{ marginVertical: 5 }}>
            <TouchableOpacity onPress={() => handleSelectLevel('3')}>
              <GlassCard
                width={SCREEN_WIDTH * 0.6}
                height={40}
              >
                <Text
                  style={[
                    styles.levelButtonText,
                    selectedLevel === '3' && styles.selectedLevelText,
                  ]}
                >
                  英検3級  1000単語
                </Text>
              </GlassCard>
            </TouchableOpacity>
          </View>
          {/* 準2級 */}
          <View style={{ marginVertical: 5 }}>
            <TouchableOpacity onPress={() => handleSelectLevel('2_5')}>
              <GlassCard
                width={SCREEN_WIDTH * 0.6}
                height={40}
              >
                <Text
                  style={[
                    styles.levelButtonText,
                    selectedLevel === '2_5' && styles.selectedLevelText,
                  ]}
                >
                  英検準2級  1220単語
                </Text>
              </GlassCard>
            </TouchableOpacity>
          </View>
          {/* 2級 */}
          <View style={{ marginVertical: 5 }}>
            <TouchableOpacity onPress={() => handleSelectLevel('2')}>
              <GlassCard
                width={SCREEN_WIDTH * 0.6}
                height={40}
              >
                <Text
                  style={[
                    styles.levelButtonText,
                    selectedLevel === '2' && styles.selectedLevelText,
                  ]}
                >
                  英検2級  2300単語
                </Text>
              </GlassCard>
            </TouchableOpacity>
          </View>
          {/* 準1級 */}
          <View style={{ marginVertical: 5 }}>
            <TouchableOpacity onPress={() => handleSelectLevel('1_5')}>
              <GlassCard
                width={SCREEN_WIDTH * 0.6}
                height={40}
              >
                <Text
                  style={[
                    styles.levelButtonText,
                    selectedLevel === '1_5' && styles.selectedLevelText,
                  ]}
                >
                  英検準1級  3400単語
                </Text>
              </GlassCard>
            </TouchableOpacity>
          </View>
          {/* 1級 */}
          <View style={{ marginVertical: 5 }}>
            <TouchableOpacity onPress={() => handleSelectLevel('1')}>
              <GlassCard
                width={SCREEN_WIDTH * 0.6}
                height={40}
              >
                <Text
                  style={[
                    styles.levelButtonText,
                    selectedLevel === '1' && styles.selectedLevelText,
                  ]}
                >
                  英検1級  4280単語
                </Text>
              </GlassCard>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {i === 4 && (
        <LearningSchedule
          dailyWordCount={dailyWordCount}
          setDailyWordCount={setDailyWordCount}
          learningDays={learningDays}
          setLearningDays={setLearningDays}
          setDeadlineDays={setDeadlineDays}
          selectedLevel={selectedLevel}
        />
      )}
            {i === 5 && (
          <>
   <TouchableOpacity style={styles.purchaseCardButton} onPress={handleTiltPress1}>
        {showIndicator1 && (
          <TapIndicator
            size={250}
            color={'#fff'}
            strokeWidth={20}
            duration={2000}
            style={styles.indicatorOverlayFlat}
          />
        )}
        {/* shadow wrapper */}
        <Animated.View
          style={[
            styles.cardWrapper,
            {
              transform: [
                { perspective: 800 },
                { rotateX: rotateX1 },
                { rotate: rotateZ1 },
                { translateY: translateY1 },
              ],
            },
          ]}
        >
          <View style={[styles.card, { backgroundColor: levelColors[selectedLevel ?? '3'] ?? '#fff' }]}>
            {/* decorative circles */}
            <View
              style={[
                styles.circle1,
                { backgroundColor: levelCircleColors[selectedLevel ?? '3']?.large ?? '#5fba6d' },
              ]}
            />
            <View
              style={[
                styles.circle2,
                { backgroundColor: levelCircleColors[selectedLevel ?? '3']?.large ?? '#5fba6d' },
              ]}
            />
            <View
              style={[
                styles.circleSmall1,
                { backgroundColor: levelCircleColors[selectedLevel ?? '3']?.small ?? '#1c6d6e' },
              ]}
            />
            <View
              style={[
                styles.circleSmall2,
                { backgroundColor: levelCircleColors[selectedLevel ?? '3']?.small ?? '#1c6d6e' },
              ]}
            />
            {/* Level badge */}
            <Text
              style={[
                styles.badgeText,
                { color: levelTextColorMap[selectedLevel ?? '3']?.badge ?? '#cbcdd0' },
              ]}
            >
              {levelMap[selectedLevel ?? '3'] ?? (selectedLevel ?? '3')}
            </Text>
            <Text
              style={[
                styles.badgeText1,
                { color: levelTextColorMap[selectedLevel ?? '3']?.badge ?? '#cbcdd0' },
              ]}
            >
            広告削除
            </Text>
            <Text style={styles.mikounyu1}>タップで購入</Text>

            {subscribed && (
              <Text style={styles.unlockedText}>学習が解放されました！</Text>
            )}

            {!subscribed && (
              <Text
                style={[
                  styles.purchaseCardButtonText,
                  { color: levelTextColorMap[selectedLevel ?? '3']?.price ?? '#cbcdd0' },
                ]}
              >
                {`${levelPriceMap[selectedLevel ?? '3'] ?? '—'}`}
              </Text>
            )}
          </View>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.purchaseCardButton} onPress={handleTiltPress2}>
        {showIndicator2 && (
          <TapIndicator
            size={250}
            color={'#fff'}
            strokeWidth={20}
            duration={2000}
            style={styles.indicatorOverlayFlat}
            />
        )}
        <Animated.View
          style={[
            styles.cardWrapper,
            {
              transform: [
                { perspective: 800 },
                { rotateX: rotateX2 },
                { rotate: rotateZ2 },
                { translateY: translateY2 },
              ],
            },
          ]}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}           // ← diagonal TL ➜ BR
            colors={[
              '#FFF9C4', // pale gold
              '#FFE082', // light gold
              '#FFD54F', // mid gold
              '#FFCA28', // rich gold
              '#FFC107', // deep gold
            ]}
            style={styles.card}
          >
              {/* Level list bottom‑left */}
                <Text style={styles.levelListHeader}>1〜3級</Text>
                <Text style={styles.levelListHeader2}>広告削除</Text>
                <Text style={styles.mikounyu}>タップで購入</Text>
                <View style={styles.levelListBlock}>
                <Text style={styles.levelListText}>1級 / 準1級 / 2級 / 準2級 / 3級</Text>
              </View>

              <Text style={styles.allAccessDesc1}>
                ¥2,000
              </Text>
              <Text style={[styles.allAccessDesc, { textDecorationLine: 'line-through' }]}>
                ¥3,500
              </Text>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
          </>
      )}
    </View>
    
  ));

  return (
    <LinearGradient
      colors={['#000', '#22b']}
      style={styles.container}>
      {/* Gradient Circle Behind GlassCard */}
      <View style={styles.gradientCircleContainer}>
        <LinearGradient
            colors={['rgb(255, 129, 207)',  'rgb(150, 0, 127)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }} 
           style={styles.gradientCircle1}
        />
      </View>
      <View style={styles.gradientCircleContainer}>
        <LinearGradient
            colors={['rgb(0, 255, 208)', 'rgb(34, 0, 255)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientCircle2}
        />
      </View>
      {/* Slide animation: old card slides out, new card slides in */}
      <View
        style={{
          width: SCREEN_WIDTH,
          height: neomorphHeights[currentStep] || 250,
          position: 'relative',
        }}
      >
        {/* Old step sliding out */}
        {isSliding && (
          <Animated.View style={{
            position: 'absolute',
            left: CARD_LEFT_OFFSET,
            width: CARD_WIDTH,
            height: '100%',
            transform: [{ translateX: exitAnim }],
            opacity: exitOpacity,
            overflow: 'hidden',
            borderRadius: 40,
            zIndex: 1,
          }}>
            <GlassCard width={CARD_WIDTH} height={neomorphHeights[prevStep] || 250} style={{ marginTop: 70, zIndex: 1 }}>
              <View style={styles.contentContainer}>
                {!isSliding && stepContents[prevStep]}
              </View>
            </GlassCard>
          </Animated.View>
        )}
        {/* New step sliding in */}
        <Animated.View style={{
          position: 'absolute',
          left: CARD_LEFT_OFFSET,
          width: CARD_WIDTH,
          height: '100%',
          transform: [{ translateX: slideAnim }],
          overflow: 'hidden',
          borderRadius: 40,
          zIndex: 2,
        }}>
          <GlassCard width={CARD_WIDTH} height={neomorphHeights[currentStep] || 250} style={{ marginTop: 70, zIndex: 1 }}>
            <View style={styles.contentContainer}>
              {!isSliding && stepContents[currentStep]}
            </View>
          </GlassCard>
        </Animated.View>
      </View>
      {/* 進捗ドット */}
      <View style={styles.dotsContainer}>
        {messages.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === currentStep && styles.activeDot,
            ]}
          />
        ))}
      </View>
      {/* Back ボタン & 次へ/決定ボタン (横並び) */}
      <View style={styles.buttonRow}>
        {currentStep !== 0 && (
          <TouchableOpacity
            style={styles.backButtonRow}
            onPress={handlePrev}
            disabled={currentStep === 0}
          >
            <GlassCard width={BACK_BUTTON_WIDTH} height={BUTTON_ROW_HEIGHT} style={styles.buttonCard}>
              <Text style={styles.backButtonText}>戻る</Text>
            </GlassCard>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.nextButtonRow}
          onPress={currentStep === 5 ? handleSave : handleNext}
        >
          <GlassCard width={NEXT_BUTTON_WIDTH} height={BUTTON_ROW_HEIGHT} style={styles.buttonCard}>
            <Text style={styles.buttonText}>{buttonLabel}</Text>
          </GlassCard>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  gradientCircleContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  gradientCircle1: {
    width: 400,
    height: 400,
    borderRadius: 200,
    position: 'absolute',
    top: '0%',
    right:'40%',
  },
  gradientCircle2: {
    width: 200,
    height: 200,
    borderRadius: 100,
    position: 'absolute',
    top: '60%',
    right:'-10%',
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
    color: '#fff',
  },
  button: {
    marginBottom: 60,
  },
  indicatorOverlayFlat: {
    position: 'absolute',
    zIndex: 9999,          // 手前
    top: '50%',
    left: '50%',
    // 中央揃え。size=250 なら −125
    transform: [
      { translateX: -125 },
      { translateY: -125 },
      { rotateX: '40deg' },
      { rotate: '24deg' },
    ],
    pointerEvents: 'none',
  },
  buttonText: {
    color: '#fff',
    fontSize: 25, // ← 少し下げる
    fontWeight: 'bold',
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
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
    color: '#fff',
  },
  selectedLevelText: {
    color: "rgb(0, 0, 0)",
  },
  LongWidgetcontainer: {
    marginTop: 130,
    width: SCREEN_WIDTH * 0.7,
    flex: 1,
    alignItems: 'center',
  },
  // progressContainer: {
  //   width: CARD_WIDTH,
  //   height: 4,
  //   backgroundColor: 'rgba(255, 255, 255, 0.3)',
  //   borderRadius: 2,
  //   marginBottom: 16,
  //   overflow: 'hidden',
  // },
  // progressBar: {
  //   height: '100%',
  //   backgroundColor: '#ffffff',
  // },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ffffff',
  },
  purchaseCardButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 24,

  },
  purchaseCardButtonText: {
    position:'absolute',
    bottom:10,
    right:20,
    fontSize:24,
    fontWeight: '700',
  },
  cardWrapper: {
    width: '70%',
    aspectRatio: 1.6,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    // shadow
    shadowColor: '#010',
    shadowOpacity: 0.6,
    shadowOffset: { width: 20, height: 48 },
    shadowRadius: 12,
    elevation: 8,
  },
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circle1: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    top: '-44%',
    right: '-23%',
  },
  circleSmall1: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    top: '-32%',
    right: '-16%',
  },
  circle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    bottom: '-56%',
    left: '-3%',
  },
  circleSmall2: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    bottom: '-45%',
    left: '4%',
  },
  badgeText: {
    position:'absolute',
    top:0,
    left:20,
    fontSize:60,
    fontWeight: '800',
    marginBottom: 12,
  },
  badgeText1: {
    position:'absolute',
    top:10,
    right:10,
    fontSize:20,
    fontWeight: '800',
    marginBottom: 12,
  },
  badgeText2: {
    position:'absolute',
    bottom:55,
    right:15,
    fontSize:20,
    fontWeight: '800',
    marginBottom: 12,
  },
  badgeText3: {
    position:'absolute',
    bottom:30,
    right:15,
    fontSize:20,
    fontWeight: '800',
    marginBottom: 12,
  },
  mikounyu1: {
    position:'absolute',
    bottom:20,
    left:20,
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.42)',
    marginBottom: 4,
  },
  unlockedText: {
    marginTop: 24,
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
    textAlign: 'center',
  },
  levelListHeader: {
    position:'absolute',
    top:20,
    left:20,
    fontSize: 30,
    fontWeight: '700',
    color: 'rgb(77, 80, 0)',
    marginBottom: 4,
  },
  levelListHeader2: {
    position:'absolute',
    top:20,
    right:20,
    fontSize: 20,
    fontWeight: '700',
    color: 'rgb(77, 80, 0)',
    marginBottom: 4,
  },
  mikounyu: {
    position:'absolute',
    bottom:20,
    left:20,
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(77, 80, 0, 0.41)',
    marginBottom: 4,
  },
  levelListText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgb(77, 80, 0)',
  },
  levelListBlock: {
    position: 'absolute',
    top: 60,
    left: 20,
  },
  allAccessDesc: {
    position:'absolute',
    bottom:5,
    right:20,
    fontSize: 20,
    color: '#666',
    fontWeight: '500',
  },
  allAccessDesc1: {
    position:'absolute',
    bottom:25,
    right:20,
    fontSize: 20,
    color: '#444',
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginBottom: 60,
  },
  backButtonRow: {
    flex: 2,
    marginRight: 8,
  },
  nextButtonRow: {
    flex: 8,
  },
  buttonCard: {
    width: '100%',
    height: '100%',
  },
});

export default InitialSetup;
