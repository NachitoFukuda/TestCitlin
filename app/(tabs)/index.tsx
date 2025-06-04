import React, { useState, useCallback, useRef, useEffect } from 'react';
import { UIConfigContext } from '@/components/contexts/UIConfigContext';
import { View, Alert, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InitialSetup from '@/components/Tutorial/InitialSetup';
import * as Haptics from 'expo-haptics';
import BannerAdComponent from '@/components/indexcomp/BannerAdComponent';
import DraggableItem from '../../components/uistore/Indexwiget';
import { Dimensions } from 'react-native';
import Footer from '@/components/ui/Footer';


const windowWidth = Dimensions.get('window').width;
const smallCell = windowWidth / 4;
// If the file does not exist, create it or update the import path to the correct location

const TUTORIAL_KEY = '@quiz:tutorialDone';
const STORAGE_KEY_CORRECT_DATA = 'correctData';

interface CorrectData {
  [key: string]: {
    C: number;
    L: string;
    startedAt?: string | null;
  };
}

const initialData: CorrectData = {
  "1": { C: 0, L: "0", startedAt: null },
};

const checkDeadlineData = async () => {
  const data = await AsyncStorage.getItem('@deadline_days');
  return data ? JSON.parse(data) : null; // JSONデータをパース
};

async function getPreviousQuarterHour(date: string | number | Date) {
  const adjustedDate = new Date(date);
  adjustedDate.setSeconds(0);
  adjustedDate.setMilliseconds(0);
  const year = adjustedDate.getFullYear();
  const month = String(adjustedDate.getMonth() + 1).padStart(2, '0');
  const day = String(adjustedDate.getDate()).padStart(2, '0');

  // 非同期処理でデータを取得（awaitを使用）
  const startday = await checkDeadlineData();
  if (!startday || !startday.savedAt) {
    return null; // 失敗時はnullを返す
  }

  // 日付の取得
  const savedDate = new Date(startday.savedAt);
  const currentDate = new Date(`${year}-${month}-${day}T00:00:00.000Z`);

  // 差分日数を計算
  const diffTime = currentDate.getTime() - savedDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

// バイブレーションをトリガーする関数
const triggerVibration = (style: Haptics.ImpactFeedbackStyle) => {
  Haptics.impactAsync(style);
};

export default function HomeScreen() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const router = useRouter(); // ✅ ルーターを取得（ホームに戻るため）
  const uiCtx = React.useContext(UIConfigContext); // 🔥 UIConfigContextからコンテキストを取得
  const [tutorialDone, setTutorialDone] = useState<boolean>(false);
  useFocusEffect(
    useCallback(() => {
      const fetchTutorialStatus = async () => {
        try {
          const value = await AsyncStorage.getItem(TUTORIAL_KEY);
          if (value === 'true') {
            setTutorialDone(true);
          }
        } catch (e) {
          console.error('❌ チュートリアル状態の取得に失敗:', e);
        }
      };

      fetchTutorialStatus();
    }, [])
  );
  // ストレージからテーマを取得し、スイッチの状態を同期
  useFocusEffect(
    useCallback(() => {
      const handleFocus = async () => {
        // テーマ読み込み
        try {
          const storedTheme = await AsyncStorage.getItem('theme');
          setIsDarkMode(storedTheme === 'dark');
        } catch (error) {
          console.error('❌ テーマの読み込みに失敗しました:', error);
          setIsDarkMode(false);
        }
        // 所持UI座標の再読み込み
       if (uiCtx) {
          await uiCtx.reloadData();
         }
                 };
      handleFocus();
    }, [])
  );

  
  // テーマに合わせて背景色やテキスト色を動的に変更
  const [todayLearnedCount, setTodayLearnedCount] = useState<number>(0);
  const [showInitialSetup, setShowInitialSetup] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [daysSinceStart, setDaysSinceStart] = useState<number | null>(null);

  // 日付に指定日数を加算する（ミリ秒計算を使用）
  const addDays = useCallback((date: Date, days: number): Date => {
    return new Date(date.getTime() + days * 86400000);
  }, []);

  // savedAtから今日までの日数を計算する関数
  const calculateDaysSinceStart = useCallback((savedAt: string): number | null => {
    const savedAtDate = new Date(savedAt);
    if (isNaN(savedAtDate.getTime())) return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.ceil((today.getTime() - savedAtDate.getTime()) / 86400000);
  }, []);

  // 期限データのチェック処理
  const checkDeadlineData = async (): Promise<{ daysSinceStart: number | null; daysLeft: number | null }> => {
    try {
      const data = await AsyncStorage.getItem('@deadline_days');
      if (!data) {
        setShowInitialSetup(true);
        return { daysSinceStart: null, daysLeft: null };
      }
      const deadlineData = JSON.parse(data);
      if (!deadlineData.days || !deadlineData.savedAt) {
        setShowInitialSetup(true);
        return { daysSinceStart: null, daysLeft: null };
      }
      setShowInitialSetup(false);
      const { days, savedAt } = deadlineData;
      const daysSinceStartCalculated = calculateDaysSinceStart(savedAt);
      setDaysSinceStart(daysSinceStartCalculated);

      const savedAtDate = new Date(savedAt);
      if (isNaN(savedAtDate.getTime())) {
        throw new Error('Invalid savedAt date format.');
      }
      const deadlineDateCalculated = addDays(savedAtDate, days);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const diffDays = Math.ceil((deadlineDateCalculated.getTime() - today.getTime()) / 86400000);
      setDaysLeft(diffDays);
      return { daysSinceStart: daysSinceStartCalculated, daysLeft: diffDays };
    } catch (error) {
      Alert.alert('エラー', 'データの取得に失敗しました。');
      setShowInitialSetup(true);
      return { daysSinceStart: null, daysLeft: null };
    }
  };

  const [isPremiumUser, setIsPremiumUser] = useState(false); // 🔥 追加
  const [isPremiumPlusUser, setIsPremiumPlusUser] = useState(false); // 🔥 追加

  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      const [premiumStatus, premiumPlusStatus] = await Promise.all([
        AsyncStorage.getItem('isPremiumUser'),
        AsyncStorage.getItem('isPremiumPlusUser'),
      ]);

      setIsPremiumUser(premiumStatus === 'true');
      setIsPremiumPlusUser(premiumPlusStatus === 'true');
    };
  
    checkSubscriptionStatus();
  }, []);


  // データ読み込み処理
  const loadData = async () => {
    try {
      const storedData = await AsyncStorage.getItem(STORAGE_KEY_CORRECT_DATA);
      let parsedData: CorrectData = storedData ? JSON.parse(storedData) : initialData;
      if (!storedData) {
        await AsyncStorage.setItem(STORAGE_KEY_CORRECT_DATA, JSON.stringify(initialData));
      }
      // 期限データのチェック
      await checkDeadlineData();
      // 質問データを配列に変換
      const questions = Object.entries(parsedData).map(([id, value]) => ({
        id,
        ...value,
      }));

      let dataUpdated = false;
      // 各質問データの更新（指定の条件下で正解回数をリセット）・・・省略

      if (dataUpdated) {
        await AsyncStorage.setItem(STORAGE_KEY_CORRECT_DATA, JSON.stringify(parsedData));
      }

      // 今日学習した単語数を計算
      const now = new Date();
      const Todaynamber = await getPreviousQuarterHour(now);
      const todayLearned = questions.filter(q => Number(q.L) === Todaynamber).length;
      setTodayLearnedCount(todayLearned);
    } catch (error) {
      Alert.alert("エラー", "データの取得中にエラーが発生しました。");
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const handleSetupComplete = useCallback(() => {
    setShowInitialSetup(false);
    loadData();
  }, []);


  return (
    <>
      {showInitialSetup ? (
        <InitialSetup onSetupComplete={handleSetupComplete} />
      ) : (
        <>


      <View
        style={[
          styles.scrollContainer,
          { backgroundColor: isDarkMode ? '#303030' : '#E3E5F2' },
        ]}
      >
        {/* テーマ情報を各兄弟要素に渡す */}
        <BannerAdComponent />
      

        <View style={[styles.widgetArea, { marginTop: -smallCell }]}>
                    <UIConfigContext.Consumer>
      {ctx => {
        if (!ctx) return null;
        // ポジションがなければ何も表示しない
        if (Object.keys(ctx.positions).length === 0) return null;

        return Object.values(ctx.purchases).map(item => {
          const pos = ctx.positions[item.id] || { gridX: 0, gridY: 0 };
          const x = pos.gridX * smallCell;
          const y = pos.gridY * smallCell;

          return (
            <DraggableItem
              key={item.id}
              item={item}
              initialPos={{ x, y }}
              draggable={true}
              // 移動完了時にコンテキストを通じて更新
              onDragEnd={(newGridX, newGridY) =>
                ctx.updatePosition(item.id, newGridX, newGridY)
              }
            />
          );
        });
      }}
    </UIConfigContext.Consumer>
      </View>
    </View>
    <Footer activeIcon="home" tutorialDone={tutorialDone} />
    </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  UIstoreButtonContainer: {
    position: 'absolute',
    bottom: 70,
    left: '50%',
    // ボタン幅(60)の半分(30)だけ左にずらす
    transform: [{ translateX: -30 }],
  },

  vipText: {
    position: 'absolute',
    top: 16,      // この値を調整して上下の位置を微調整
    left: 0,      // 必要なら left, right も調整可能
    right: 0,
    textAlign: 'center',
    fontSize: 8,
    fontWeight: 'bold',
  },
  widgetArea: {
    padding: 12,
    borderRadius: 8,
    flexGrow: 1,
    width: '100%',
    marginBottom: 130,
  },
  startButtonContainer: {
    position: 'absolute',
    bottom: 150,      // Adjust distance from bottom as desired
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
