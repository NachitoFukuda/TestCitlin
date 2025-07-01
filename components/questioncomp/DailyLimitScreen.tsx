import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  Linking,
  Alert,
} from 'react-native';
import TapIndicator from '../ui/TapIndicator';
import NeomorphBox from '../ui/NeomorphBox';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
const PRIVACY_POLICY_URL = "https://citlin.sakura.ne.jp/";

const levelMap: { [key: string]: string } = {
  '1': '1級',
  '1.5': '準1級',
  '2': '2級',
  '2.5': '準2級',
  '3': '3級',
};

const levelColors: { [key: string]: string } = {
  '1': '#F9D65C',      // Gold-ish
  '1.5': '#C1C1C1',    // Silver-ish
  '2': '#CD7F32',      // Bronze-ish
  '2.5': '#8FD4FF',    // Light Blue
  '3': '#1c6d6e',      // Light Green
};

// 各級ごとの累計学習時間（秒など数値）
const levelbwardcount: { [key: string]: number } = {
  '1': 4280,      
  '1.5': 3400,    
  '2': 2300,      
  '2.5': 1220,    
  '3': 1000,     
};

// 各級ごとの買い切り価格
const levelPriceMap: { [key: string]: string } = {
  '1': '¥1,100',
  '1.5': '¥900',
  '2': '¥700',
  '2.5': '¥500',
  '3': '¥300',
};

// レベルごとの円デコ用カラー
const levelCircleColors: {
  [key: string]: { large: string; small: string };
} = {
  '1':   { large: '#F7E08B', small: '#F9D65C' },
  '1.5': { large: '#D9D9D9', small: '#C1C1C1' },
  '2':   { large: '#D9A06B', small: '#CD7F32' },
  '2.5': { large: '#B4E2FF', small: '#8FD4FF' },
  '3':   { large: '#89D98D', small: '#1c6d6e' },
};

// レベル別テキスト詳細カラー
const levelTextColorMap: {
  [key: string]: {
    badge: string;
    price: string;
    message: string;
  };
} = {
  '1':   { badge: '#5B4100', price: '#9F7500', message: '#5B4100' },
  '1.5': { badge: '#777',    price: '#555',    message: '#555'    },
  '2':   { badge: '#663A00', price: '#663A00', message: '#663A00' },
  '2.5': { badge: '#135A7E', price: '#2787C8', message: '#135A7E' },
  '3':   { badge: '#bbb', price: '#bbb', message: '#1F5E1F' },
};

// Props型はdailyCount, levelを受け取る
type DailyLimitScreenProps = {
  level: string;
};

const DailyLimitScreen: React.FC<DailyLimitScreenProps> = ({level }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  // --- First Card Tilt ---
  const [showIndicator1, setShowIndicator1] = useState(true);
  const tiltProgress1 = useRef(new Animated.Value(0)).current;

  // --- Second Card Tilt ---
  const [showIndicator2, setShowIndicator2] = useState(true);
  const tiltProgress2 = useRef(new Animated.Value(0)).current;
  const [totalC, setTotalC] = useState(0);
  // 学習日数 (undefined か number) を保持
  const [Alldays, setAlldays] = useState<number | undefined>(undefined);
  const STORAGE_KEY_LEVEL = `correctData_${level}`;


  useEffect(() => {
    const loadCorrectData = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY_LEVEL);
        const parsed: Record<string, { C?: number }> = stored ? JSON.parse(stored) : {};
        const total = Object.values(parsed).reduce((sum, item) => sum + (item?.C || 0), 0);
        console.log("[DailyLimitScreen] totalC from storage:", total);
        setTotalC(total);
      } catch (e) {
        console.error("correctDataの読み込みに失敗しました:", e);
      }
    };
    loadCorrectData();
  }, []);

  // ------- Load learningDays from @deadline_days -------
  useEffect(() => {
    const loadDeadlineDays = async () => {
      try {
        const storedDeadline = await AsyncStorage.getItem('@deadline_days');
        if (storedDeadline) {
          const parsed: { days?: number; savedAt?: string } = JSON.parse(storedDeadline);
          console.log('[DailyLimitScreen] learningDays:', parsed?.days);
          setAlldays(parsed?.days)
        } else {
          console.log('[DailyLimitScreen] learningDays: not set');
        }
      } catch (e) {
        console.error('deadline_daysの読み込みに失敗しました:', e);
      }
    };
    loadDeadlineDays();
  }, []);


    // EULA・プライバシーポリシーリンク
    const handleOpenEULA = () => {
      Linking.openURL(EULA_URL).catch((err) => {
        Alert.alert("エラー", `EULAページを開けませんでした:\n${String(err)}`);
      });
    };
  
    const handleOpenPrivacyPolicy = () => {
      Linking.openURL(PRIVACY_POLICY_URL).catch((err) => {
        Alert.alert("エラー", `プライバシーポリシーページを開けませんでした:\n${String(err)}`);
      });
    };

      // ------ Card 1 Anim helpers ------
  const handleTiltPress1 = () => {
    setShowIndicator1(false);
    Animated.timing(tiltProgress1, {
      toValue: 1,
      duration: 600,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  };
  

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

  // ------ Card 2 Anim helpers ------
  const handleTiltPress2 = () => {
    setShowIndicator2(false);
    Animated.timing(tiltProgress2, {
      toValue: 1,
      duration: 600,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
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

  const tortalward = levelbwardcount[level] - (totalC / 4)

  const Dayfarst = (Alldays !== undefined && tortalward > 0)
    ? (
        // 合計広告時間 ÷ 一日の学習時間
        ((tortalward / Alldays) * 4 / 20 * Alldays) 
        / ((tortalward / Alldays) * 4)
      )
    : undefined;

  const dayFast1d =
    Dayfarst !== undefined ? Math.floor(Dayfarst)  : undefined;

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.purchaseCardButton} onPress={handleTiltPress2}>
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
          <View style={[styles.card, { backgroundColor: levelColors[level] ?? '#fff' }]}>
            {/* decorative circles */}
            <View
              style={[
                styles.circle1,
                { backgroundColor: levelCircleColors[level]?.large ?? '#5fba6d' },
              ]}
            />
            <View
              style={[
                styles.circle2,
                { backgroundColor: levelCircleColors[level]?.large ?? '#5fba6d' },
              ]}
            />
            <View
              style={[
                styles.circleSmall1,
                { backgroundColor: levelCircleColors[level]?.small ?? '#1c6d6e' },
              ]}
            />
            <View
              style={[
                styles.circleSmall2,
                { backgroundColor: levelCircleColors[level]?.small ?? '#1c6d6e' },
              ]}
            />
            {/* Level badge */}
            <Text
              style={[
                styles.badgeText,
                { color: levelTextColorMap[level]?.badge ?? '#cbcdd0' },
              ]}
            >
              {levelMap[level] ?? level}
            </Text>
            <Text
              style={[
                styles.badgeText1,
                { color: levelTextColorMap[level]?.badge ?? '#cbcdd0' },
              ]}
            >
            広告削除
            </Text>
            <Text
              style={[
                styles.badgeText2,
                { color: levelTextColorMap[level]?.badge ?? '#cbcdd0' },
              ]}
            >
            学習時間を約20%
            </Text>
            <Text
              style={[
                styles.badgeText3,
                { color: levelTextColorMap[level]?.badge ?? '#cbcdd0' },
              ]}
            >
            節約できます。
            </Text>
            <Text style={styles.mikounyu1}>タップで購入</Text>

            {subscribed && (
              <Text style={styles.unlockedText}>学習が解放されました！</Text>
            )}

            {!subscribed && (
              <Text
                style={[
                  styles.purchaseCardButtonText,
                  { color: levelTextColorMap[level]?.price ?? '#cbcdd0' },
                ]}
              >
                {`${levelPriceMap[level] ?? '—'}`}
              </Text>
            )}
          </View>
        </Animated.View>
      </TouchableOpacity>
      {/* ----- All‑Access Card ----- */}
      <TouchableOpacity style={styles.purchaseCardButton} onPress={handleTiltPress1}>
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

      <View style={styles.linksContainer}>
          <TouchableOpacity onPress={handleOpenEULA} style={styles.linkButton}>
            <Text style={styles.linkText}>EULA</Text>
          </TouchableOpacity>
          <Text style={styles.linkSeparator}>|</Text>
          <TouchableOpacity onPress={handleOpenPrivacyPolicy} style={styles.linkButton}>
            <Text style={styles.linkText}>プライバシーポリシー</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[
            styles.bottomButton,
          ]}
          disabled={!adLoaded}
        >
          <NeomorphBox
            width={SCREEN_WIDTH * 0.85}
            height={60}
          >
          <View style={styles.buttonRow}>
            <Ionicons name="play" size={20} color="#666" style={{ marginRight: 6 }} />
            <Text style={styles.buttonText}>動画を見て学習を再開</Text>
          </View>
          </NeomorphBox>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#E3E5F2',
  },
  cardWrapper: {
    width: '90%',
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
    width: 180,
    height: 180,
    borderRadius: 90,
    top: '-44%',
    right: '-23%',
  },
  circleSmall1: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    top: '-32%',
    right: '-16%',
  },
  circle2: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    bottom: '-56%',
    left: '-3%',
  },
  circleSmall2: {
    position: 'absolute',
    width: 140,
    height: 140,
    borderRadius: 70,
    bottom: '-45%',
    left: '4%',
  },
  badgeText: {
    position:'absolute',
    top:10,
    left:20,
    fontSize:80,
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
    top:110,
    right:15,
    fontSize:20,
    fontWeight: '800',
    marginBottom: 12,
  },
  badgeText3: {
    position:'absolute',
    top:140,
    right:15,
    fontSize:20,
    fontWeight: '800',
    marginBottom: 12,
  },
  noQuestionsText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  levelText: {
    fontSize: 14,
    marginBottom: 12,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    width: '100%',
    margin: 48,
    paddingVertical: 14,
    backgroundColor: '#4a90e2',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    elevation: 3,
  },
  bottomButton: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,            // safe bottom padding
    alignItems: 'center',
  },
  buttonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
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
  unlockedText: {
    marginTop: 24,
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
    textAlign: 'center',
  },
  allAccessWrapper: {
    width: '90%',
    marginTop: 24,
  },
  allAccessTitle: {
    position:'absolute',
    top:20,
    left:20,
    fontSize: 60,
    fontWeight: '700',
    marginBottom: 10,
    color: 'rgb(77, 80, 0)',
  },
  allAccessTitle1: {
    left:10,
    fontSize: 10,
    fontWeight: '700',
    marginBottom: 5,
    color: 'rgb(77, 80, 0)',
  },
  allAccessPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4a90e2',
    marginBottom: 8,
  },
  allAccessDesc: {
    position:'absolute',
    bottom:20,
    right:20,
    fontSize: 30,
    color: '#666',
    fontWeight: '500',
  },
  allAccessDesc1: {
    position:'absolute',
    bottom:60,
    right:20,
    fontSize: 30,
    color: '#444',
    fontWeight: '500',
  },
  levelListBlock: {
    position: 'absolute',
    top: 100,
    left: 20,
  },
  levelListHeader: {
    position:'absolute',
    top:20,
    left:20,
    fontSize: 60,
    fontWeight: '700',
    color: 'rgb(77, 80, 0)',
    marginBottom: 4,
  },
  levelListHeader2: {
    position:'absolute',
    top:20,
    right:20,
    fontSize: 24,
    fontWeight: '700',
    color: 'rgb(77, 80, 0)',
    marginBottom: 4,
  },
  mikounyu1: {
    position:'absolute',
    bottom:20,
    left:20,
    fontSize: 30,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.42)',
    marginBottom: 4,
  },
  mikounyu: {
    position:'absolute',
    bottom:20,
    left:20,
    fontSize: 30,
    fontWeight: '700',
    color: 'rgba(77, 80, 0, 0.41)',
    marginBottom: 4,
  },
  levelListText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgb(77, 80, 0)',
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
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:40,
  },
  linkButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  linkText: {
    color: '#4169e1',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  linkSeparator: {
    color: '#666',
    marginHorizontal: 8,
  },
});

export default DailyLimitScreen
