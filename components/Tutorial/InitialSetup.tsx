// Optional external countdown stopper if provided elsewhere
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const stopCountdown: undefined | (() => void);
import { initializeApp } from 'firebase/app';
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { firebaseConfig } from '../../firebaseConfig';
import { initializeFirestore, doc, setDoc } from 'firebase/firestore';
import { getDatabase, ref as dbRef, set as dbSet } from 'firebase/database';
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, { experimentalForceLongPolling: true });
const rdb = getDatabase(app);
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions, Alert, TextInput, ActivityIndicator } from 'react-native';
import { Easing } from 'react-native';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LearningSchedule from './LearningSchedule';
import LottieView from 'lottie-react-native';
import { JsonData } from '../etc/types';
import { LinearGradient } from 'expo-linear-gradient';
import GlassCard from '../ui/GlassCard';
import CardDesign from '../questioncomp/CardDesign';
interface InitialSetupProps {
  onSetupComplete: () => void;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const BUTTON_ROW_HORIZONTAL_PADDING = 16 * 2; // left and right padding
const BUTTON_ROW_CONTENT_WIDTH = SCREEN_WIDTH - BUTTON_ROW_HORIZONTAL_PADDING;
const BUTTON_ROW_HEIGHT = 70;
const BACK_BUTTON_WIDTH = BUTTON_ROW_CONTENT_WIDTH * 0.2;
const NEXT_BUTTON_WIDTH = BUTTON_ROW_CONTENT_WIDTH * 0.8;
const CARD_WIDTH = SCREEN_WIDTH * 0.85;
const CARD_HIGHT = SCREEN_HEIGHT * 0.8;
const CARD_LEFT_OFFSET = (SCREEN_WIDTH - CARD_WIDTH) / 2;
const SPACING = 20;  // spacing between cards during animation

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
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [hasPlayedIntroSound, setHasPlayedIntroSound] = useState(false);
  // Ref to always hold the latest currentStep value for sound playback callback
  const currentStepRef = useRef<number>(currentStep);
  // Sync currentStepRef with currentStep
  useEffect(() => {
    currentStepRef.current = currentStep;
  }, [currentStep]);
  // Swoosh sound preloading state
  const [swooshSound, setSwooshSound] = useState<Audio.Sound | null>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const exitAnim = useRef(new Animated.Value(0)).current;
  const exitOpacity = useRef(new Animated.Value(1)).current;
  const nextFadeAnim = useRef(new Animated.Value(0)).current;
  const [prevStep, setPrevStep] = useState<number>(0);  // Track when sliding
  const [isSliding, setIsSliding] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [showIndicator2, setShowIndicator2] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);

  // 予定設定用ステート
  const tiltProgress2 = useRef(new Animated.Value(0)).current;

  // Align cards: make one face front and the other tilt
  const alignCards = (front: 'first' | 'second') => {
    try { stopCountdown?.(); } catch {}
    if (front === 'first') {
      setShowIndicator1(false);
      setShowIndicator2(true);
      Animated.parallel([
        Animated.timing(tiltProgress1, {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(tiltProgress2, {
          toValue: 0,
          duration: 600,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      setShowIndicator2(false);
      setShowIndicator1(true);
      Animated.parallel([
        Animated.timing(tiltProgress2, {
          toValue: 1,
          duration: 600,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(tiltProgress1, {
          toValue: 0,
          duration: 600,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  // メッセージ
  const messages = [
    'こんにちは', 
    'AIがあなたに合わせた\n最適なタイミングで\n自動出題！',
    'ニックネームを\n入力してね',
    'このアプリどこで見つけたの？',
    'どの級を学習する？',  
    '',  
    '時間を約２０％削減',  
  ];

  // 各ステップに応じたフォントサイズ・位置
  const fontSizes = [60, 30, 40, 30, 30, 30, 30];
  const fontTop   = [150, 300, 350, 0, 30, -60];



  // 予定設定用ステート
  const [scheduleOption, setScheduleOption] = useState<'deadline' | 'daily'>('deadline');
  const [deadlineDays, setDeadlineDays] = useState(40);
  const [dailyWordCount, setDailyWordCount] = useState(10);
  const [learningDays, setLearningDays] = useState(0);
  const [savedDeadlineDays, setSavedDeadlineDays] = useState<number | null>(null);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [nickname, setNickname] = useState<string>('');
  const [referrer, setReferrer] = useState<string>('');
  const referrerOptions = ['Instagram', 'TikTok', 'Twitter', '友人・知人', '検索', 'その他'];
  const [showIndicator1, setShowIndicator1] = useState(true);
  const tiltProgress1 = useRef(new Animated.Value(0)).current;
  const [isPurchasing, setIsPurchasing] = useState(false);

  // 学習する級の選択用ステート
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  // "次へ"可否判定
  const canProceed = useMemo(() => {
    switch (currentStep) {
      case 2:
        return nickname.trim().length > 0;
      case 3:
        return referrer !== '';
      case 4:
        return selectedLevel !== null;
      default:
        return true;
    }
  }, [currentStep, nickname, referrer, selectedLevel]);

  // Next button visibility state
  const [showNext, setShowNext] = useState<boolean>(false);
  // Back button visibility state for delayed show
  const [showPrev, setShowPrev] = useState<boolean>(false);
  // Declare introAnimationDone state above its first usage
  const [introAnimationDone, setIntroAnimationDone] = useState(false);
  // Effect to control Next button visibility per step (refactored for unified timing logic)
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (currentStep === 0) {
      // Intro animation must finish
      setShowNext(introAnimationDone);
    } else if (currentStep === 1) {
      // Brief delay after AI message
      setShowNext(false);
      timer = setTimeout(() => setShowNext(true), 500);
    } else if (currentStep >= 2 && currentStep <= 4) {
      // Input-driven steps
      setShowNext(canProceed);
    } else {
      // Other steps: immediate
      setShowNext(true);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentStep, introAnimationDone, canProceed]);
  // Effect to fade in Next button after intro animation, and ensure visible on other steps
  useEffect(() => {
    if (currentStep === 0 && showNext) {
      Animated.timing(nextFadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (currentStep !== 0) {
      // ensure Next button visible on other steps
      nextFadeAnim.setValue(1);
    }
  }, [showNext, currentStep]);
  // Effect to control Back button visibility per step (hide for 1s on step change)
  useEffect(() => {
    setShowPrev(false);
    if (currentStep > 0) {
      const timer = setTimeout(() => setShowPrev(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);
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


    // 初期ポジション・購入データを保存
    useEffect(() => {
      const initializeQuizData = async () => {
        try {
          const positions = {
            "Heatmap05": { "gridX": 0, "gridY": 4 },
            "Howday1": { "gridX": 2, "gridY": 5 },
            "TodayGool1": { "gridX": 2, "gridY": 4 },
            "WeekProgress10": { "gridX": 0, "gridY": 1 },
            "calender01": { "gridX": 0, "gridY": 3 },
            "start02": { "gridX": 0, "gridY": 6 }
          };
          await AsyncStorage.setItem('@quiz:positions', JSON.stringify(positions));
          console.log('[InitialSetup] Saved initial positions:', positions);
  
          const purchases = {
            "Heatmap05": {
              "id": "Heatmap05",
              "name": "Start Mini",
              "price": 0,
              "widthCells": 2,
              "heightCells": 2,
              "tag": "theme"
            },
            "Howday1": {
              "id": "Howday1",
              "name": "calender",
              "price": 0,
              "widthCells": 2,
              "heightCells": 1,
              "tag": "theme"
            },
            "TodayGool1": {
              "id": "TodayGool1",
              "name": "Daily Target",
              "price": 0,
              "widthCells": 2,
              "heightCells": 1,
              "tag": "theme"
            },
            "WeekProgress10": {
              "id": "WeekProgress10",
              "name": "Daily Target Pro",
              "price": 0,
              "widthCells": 4,
              "heightCells": 2,
              "tag": "theme"
            },
            "calender01": {
              "id": "calender01",
              "name": "Weekly Tracker",
              "price": 0,
              "widthCells": 4,
              "heightCells": 1,
              "tag": "theme"
            },
            "start02": {
              "id": "start02",
              "name": "Weekly Tracker",
              "price": 0,
              "widthCells": 4,
              "heightCells": 1,
              "tag": "theme"
            }
          };
          await AsyncStorage.setItem('@quiz:purchases', JSON.stringify(purchases));
  
          console.log('[InitialSetup] 初期ポジションと購入データを保存しました');
        } catch (e) {
          console.error('[InitialSetup] 初期データの保存に失敗しました', e);
        }
      };
      initializeQuizData();
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
    console.log('[InitialSetup] handleTiltPress1 tapped');
    setShowIndicator1(false);
    Animated.timing(tiltProgress1, {
      toValue: 1,
      duration: 600,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start(({ finished }) => console.log('[InitialSetup] tiltProgress1 -> 1 finished:', finished));
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

  useEffect(() => {
    if (currentStep === 0 && !hasPlayedIntroSound) {
      setHasPlayedIntroSound(true);
      (async () => {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/sound/startsound.mp3')
        );
        setSound(sound);
        // Start playing sound without awaiting so haptics can run concurrently
        // Start haptic feedback with a speeding-up pattern
        const intervals = [500, 400, 350, 300,  200, 90, 40, 30, 20, 10,5,3,2,1,1,1,1,1,1];
        (async () => {
          for (let i = 0; i < intervals.length; i++) {
            const interval = intervals[i];
            let style = Haptics.ImpactFeedbackStyle.Light;
            if (i >= intervals.length - 3) {
              style = Haptics.ImpactFeedbackStyle.Heavy;
            } else if (i >= intervals.length - 10) {
              style = Haptics.ImpactFeedbackStyle.Medium;
            }
            await Haptics.impactAsync(style);
            await new Promise(res => setTimeout(res, interval));
          }
        })();
        // Play sound and wait for its completion event
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate(status => {
          // Only proceed if playback loaded successfully
          if (!status.isLoaded) return;
          const successStatus = status as import('expo-av').AVPlaybackStatusSuccess;
          if (successStatus.didJustFinish && currentStepRef.current === 0) {
            console.log('[Tutorial] sound finished callback on step 0, starting slide');
            handleNext();
            // Remove listener to avoid duplicate calls
            sound.setOnPlaybackStatusUpdate(null);
          }
        });
      })();
    }
  }, [currentStep, hasPlayedIntroSound]);

  // Preload swoosh sound once
  useEffect(() => {
    let soundObj: Audio.Sound;
    (async () => {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: false,
        interruptionModeIOS: InterruptionModeIOS.DuckOthers,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
      });
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sound/swoosh.mp3')
      );
      soundObj = sound;
      setSwooshSound(sound);
      // Continuous light haptic feedback during preload
      for (let i = 0; i < 4; i++) {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    })();
    return () => {
      if (soundObj) {
        soundObj.unloadAsync();
      }
    };
  }, []);

  // Cleanup sound on unmount
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

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
    // Log invocation and key state
    console.log('[Tutorial] handleNext called, currentStep:', currentStep, 'nickname:', nickname, 'canProceed:', canProceed);
    if (isNavigating) {
      console.log('[Tutorial] handleNext early return, isNavigating:', isNavigating);
      return;
    }
    // Commenting out sliding guard to trace invocation
    // if (isSliding) return;

    if (currentStep === 2) {
      console.log('[Tutorial] Step 2 check, nickname.trim().length:', nickname.trim().length);
      const cleanName = nickname.trim();
      if (!cleanName) {
        Alert.alert('�', '入力できてないよ！');
        return;
      }
      const auth = getAuth();
      if (!auth.currentUser) {
        try {
          await signInAnonymously(auth);
        } catch (e: any) {
          console.error(e);
          Alert.alert('認証エラー', e.message);
        }
      }
      try {
        const user = getAuth().currentUser;
        if (user) {
          // RTDB write in background, no await to avoid blocking
          dbSet(dbRef(rdb, `users/${user.uid}/nickname`), cleanName)
            .then(() => console.log('RTDB nickname write succeeded'))
            .catch(error => console.error('RTDB nickname write error:', error));
        }
        await AsyncStorage.setItem('@nickname', cleanName);
        // Save user UID to AsyncStorage
        if (user) {
          AsyncStorage.setItem('@user_uid', user.uid)
            .then(() => console.log('[InitialSetup] Saved user UID:', user.uid))
            .catch(error => console.error('[InitialSetup] UID save error:', error));
        }
      } catch (e: any) {
        console.error(e);
        Alert.alert('Error', e.message || 'Unknown error in handleNext step 2');
      }
    }
    if (currentStep === 3) {
      if (!referrer) {
        Alert.alert('入力エラー', 'どこでこのアプリを知ったかを選択してください。');
        return;
      }
      try {
        const user = getAuth().currentUser;
        if (user) {
          // Realtime Database write in background
          dbSet(dbRef(rdb, `users/${user.uid}/referrer`), referrer)
            .then(() => console.log('RTDB write succeeded'))
            .catch(error => console.error('RTDB write error:', error));
        }
        await AsyncStorage.setItem('@referrer', referrer);
      } catch (e: any) {
        console.error(e);
      }
    }
    // 学習級選択チェック（新しい index に合わせて調整）
    if (currentStep === 4 && !selectedLevel) {
      Alert.alert('学習級が未選択', '学習する級を選択してください。');
      return;
    }
    if (currentStep < messages.length - 1) {
      setIsNavigating(true);
      exitOpacity.setValue(1);
      setPrevStep(currentStep);
      exitAnim.setValue(0);
      slideAnim.setValue(CARD_WIDTH + SPACING);
      setIsSliding(true);
      // Play preloaded swoosh sound
      if (swooshSound) {
        console.log('[Tutorial] replaying preloaded swoosh');
        await swooshSound.replayAsync();
      } else {
        console.warn('[Tutorial] swooshSound not ready');
      }
      // Delay slide animation by 0.2 seconds
      setTimeout(async () => {
        // First fade out old content completely
        Animated.timing(exitOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          // Continuous light haptic feedback after fade
          (async () => {
            for (let i = 0; i <8; i++) {
              await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              await new Promise(res => setTimeout(res, 80));
            }
            console.log('[Tutorial] continuous light haptic after fade');
          })();
          // Then slide out and slide in new content together
          Animated.parallel([
            Animated.timing(exitAnim, {
              toValue: -(CARD_WIDTH + SPACING),
              duration: 600,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
              toValue: 0,
              duration: 600,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
            }),
          ]).start(() => {
            setCurrentStep(prev => prev + 1);
            exitAnim.setValue(0);
            exitOpacity.setValue(1);
            // Fade in new content
            fadeAnim.setValue(0);
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }).start();
            setIsSliding(false);
            setIsNavigating(false);
          });
        });
      }, 200);
    } else {
      setIsNavigating(true);
      onSetupComplete();
    }
  };

  // "次へ"ボタン用のラッパー関数
  const handleNextWrapper = async () => {
    // Always advance without guard
    await handleNext();
  };

  const handlePrev = () => {
    setCurrentStep(prev => (prev > 0 ? prev - 1 : 0));
    setIsNavigating(false);
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

const entitlementMap: { [key: string]: string } = {
  '1':'eiken_grade1_lifetime',
  '1_5':'eiken_pre1_lifetime',
  '2':'eiken_grade2_lifetime',
  '2_5':'eiken_pre2_lifetime',
  '3':'eiken_grade3_lifetime',
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
  if (currentStep === 5) {
    buttonLabel = '決定';
  } else if (currentStep ===0) {
    buttonLabel = 'はじめる';
  } else if (currentStep < messages.length - 1) {
    buttonLabel = '次へ';
  } else if (currentStep ===6){
    buttonLabel = 'とりま、無料で始める';
  }

  const handlePressBoth1 = () => {
    alignCards('second');
  };

  const handlePressBoth2 = () => {
    handlePurchase();
    alignCards('first');
  };



  const handlePurchase = async () => {
    const productId = selectedLevel ? entitlementMap[selectedLevel] : undefined;
    if (!productId) {
      Alert.alert('エラー', 'このレベル用の購入アイテムが設定されていません。');
      return;
    }
    // Check if already purchased: skip if active
    const entitlementName = selectedLevel ? entitlementMap[selectedLevel] : undefined;

    try {
      setIsPurchasing(true);
      // 追加: 購入状態を更新し、成功時にアラートを表示
      // const entitlementName = selectedLevel ? entitlementMap[selectedLevel] : undefined;
      Alert.alert('Debug', `selectedLevel=${selectedLevel}, entitlementName=${entitlementName}`);

    } catch (e: any) {
      console.error('Purchase error:', e);
      Alert.alert(
        'エラー',
        e.userCancelled ? 'ユーザーがキャンセルしました。' : '購入に失敗しました。'
      );
    } finally {
      setIsPurchasing(false);
    }
  };


  // Build step-specific content nodes dynamically from messages array
  const stepContents = messages.map((msg, i) => (
    <View key={i} style={{ alignItems: 'center', paddingTop: 70 }}>
      {i === 0 ? (
        <LottieView
          source={require('../../assets/lottie/hello.json')}
          loop={false}
          autoPlay
          onAnimationFinish={() => setIntroAnimationDone(true)}
          style={{ width: SCREEN_WIDTH , height: SCREEN_WIDTH , alignSelf: 'center'}}
        />
      ) : (
        <Animated.Text
          style={[styles.text, { opacity: fadeAnim, fontSize: fontSizes[i], marginTop: fontTop[i] ?? 0 }]}
        >
          {msg}
        </Animated.Text>
      )}
      {i === 1 && (
        <LottieView
            source={require('../../assets/lottie/BisinesAnimation.json')}
            autoPlay          // ← 追加
            loop              // ← ずっとループ
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              alignSelf: 'center',
              marginTop: -80,
            }}
          />
      )}
      {i === 2 && (
        <View style={{ width: SCREEN_WIDTH * 0.7, alignItems: 'center', marginTop: 0 }}>
            <LottieView
              source={require('../../assets/lottie/IncorrectPIN.json')}
              autoPlay
              loop
              style={{
                width: SCREEN_WIDTH * 0.5,
                height: SCREEN_WIDTH * 0.5,
                marginBottom: 50,
                alignSelf: 'center',
              }}
            />
          <GlassCard width={SCREEN_WIDTH * 0.7} height={50}>
            <TextInput
              style={{ flex: 1, paddingHorizontal: 10, color: '#fff' }}
              placeholder="ここに入力してね！！"
              placeholderTextColor="rgb(255, 255, 255)"
              value={nickname}
              onChangeText={text => setNickname(text.normalize())}
              autoCapitalize="none"
            />
          </GlassCard>
        </View>
      )}
      {i === 3 && (
            <View style={styles.levelcontainer}>
          {referrerOptions.map(option => (
            <TouchableOpacity
              key={option}
              onPress={() => setReferrer(option)}
              style={{ marginVertical: 6, }}
            >
              <GlassCard
                width={SCREEN_WIDTH * 0.7}
                height={50}
                style={referrer === option ? { borderWidth: 2, borderColor: '#0f0' } : {}}
              >
                <Text
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    lineHeight: 50,
                    color: referrer === option ? '#0f0' : '#fff',
                    fontWeight: referrer === option ? 'bold' : 'normal',
                  }}
                >
                  {option}
                </Text>
              </GlassCard>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {i === 4 && (
            <View style={styles.levelcontainer}>
              {/* 3級 */}
              <View style={{ marginVertical: 5 }}>
                <TouchableOpacity onPress={() => handleSelectLevel('3')}>
                  <GlassCard
                    width={SCREEN_WIDTH * 0.6}
                    height={60}
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
                    height={60}
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
                    height={60}
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
                    height={60}
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
                    height={60}
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
      {i === 5 && (
        <LearningSchedule
          dailyWordCount={dailyWordCount}
          setDailyWordCount={setDailyWordCount}
          learningDays={learningDays}
          setLearningDays={setLearningDays}
          setDeadlineDays={setDeadlineDays}
          selectedLevel={selectedLevel}
        />
      )}
      {i === 6 && (
        <>
        <TouchableOpacity 
          style={styles.purchaseCardButton} 
          disabled={isPurchasing}
          onPress={handlePressBoth2}
        >
          {isPurchasing && (
            <ActivityIndicator size="large" style={StyleSheet.absoluteFill} />
          )}
          <Animated.View
            style={[
              styles.cardWrapper,
              {
                transform: [
                  { perspective: 800 },
                  { rotateX: rotateX1 },
                  { rotateZ: rotateZ1 },
                  { translateY: translateY1 },
                ],
              },
            ]}
          >
            <CardDesign level={'All Level'} size="mini"/>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.purchaseCardButton}
          onPress={handlePressBoth1}
          disabled={isPurchasing}
        >
          <Animated.View
            style={[
              styles.cardWrapper,
              {
                transform: [
                  { perspective: 800 },
                  { rotateX: rotateX2 },
                  { rotateZ: rotateZ2 },
                  { translateY: translateY2 },
                ],
              },
            ]}
          >
            <CardDesign level={selectedLevel ?? 'All Level'} size="mini"/>
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
      {/* Hidden Lottie preloader: mount all animations in advance */}
      <View style={styles.lottiePreload} pointerEvents="none">
        <LottieView
          source={require('../../assets/lottie/hello.json')}
          autoPlay
          loop
          style={styles.lottiePreloadItem}
        />
        <LottieView
          source={require('../../assets/lottie/BisinesAnimation.json')}
          autoPlay
          loop
          style={styles.lottiePreloadItem}
        />
      </View>
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
          height: CARD_HIGHT,
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
            <GlassCard width={CARD_WIDTH} height={CARD_HIGHT} style={{ marginTop: 70, zIndex: 1 }}>
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
          <GlassCard width={CARD_WIDTH} height={CARD_HIGHT} style={{ marginTop: 70, zIndex: 1 }}>
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
      {/* Back & Next buttons (bottom) */}
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
        <Animated.View style={{ opacity: nextFadeAnim, flex: 8 }}>
          <TouchableOpacity
            style={styles.nextButtonRow}
            onPress={currentStep === 5 ? handleSave : handleNextWrapper}
          >
            <GlassCard width={NEXT_BUTTON_WIDTH} height={BUTTON_ROW_HEIGHT} style={styles.buttonCard}>
              <Text style={styles.buttonText}>{buttonLabel}</Text>
            </GlassCard>
          </TouchableOpacity>
        </Animated.View>
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
  text: {
    position: 'absolute',
    top: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#fff',
  },
  // Button row styles for Back & Next
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    height: BUTTON_ROW_HEIGHT,
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
  buttonText: {
    color: '#fff',
    fontSize: 25, // ← 少し下げる
    fontWeight: 'bold',
  },
  levelButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  selectedLevelText: {
    color: "rgb(0, 255, 132)",
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:16,
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
    marginTop:70,

  },
  cardWrapper: {
    width: '70%',
    aspectRatio: 1.6,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#010',
    shadowOpacity: 0.6,
    shadowOffset: { width: 20, height: 48 },
    shadowRadius: 12,
    elevation: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  lottiePreload: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
    zIndex: -1,
  },
  lottiePreloadItem: {
    width: 1,
    height: 1,
  },
});

export default InitialSetup;


