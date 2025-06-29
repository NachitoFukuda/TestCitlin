import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import NeomorphBox from '../ui/NeomorphBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LineChart } from 'react-native-chart-kit';
import useQuestionData from './useQuestionData';

type ScoreSummaryProps = {
  animatedScore: number;
  total: number;
  points: number;
  bonusPoints: number;
  vipBonusPoints: number;
  themeColors: { textColor: string };
};

const ScoreSummary: React.FC<ScoreSummaryProps> = ({
  animatedScore,
  total,
  points,
  bonusPoints,
  vipBonusPoints,
  themeColors,
}) => {
  const [history, setHistory] = React.useState<number[]>([]);
  const [totalBalance, setTotalBalance] = React.useState(0);
  // 日付ごとのスコア表示用ラベル
  const [labels, setLabels] = React.useState<string[]>([]);
  const { width: SCREEN_WIDTH } = Dimensions.get('window');

  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(20)).current;
  const vipFadeAnim = React.useRef(new Animated.Value(0)).current;
  const vipTranslateY = React.useRef(new Animated.Value(20)).current;
  const { level } = useQuestionData();
  // ---- Level‑aware storage keys ----
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');
  const SCORE_BY_DATE_KEY = `@score_by_date_${sanitizedLevel}`


  React.useEffect(() => {
    if (animatedScore === total && bonusPoints > 0) {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(1500),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.parallel([
          Animated.timing(vipFadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(vipTranslateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }
  }, [animatedScore, total, bonusPoints]);

  // Load score by date on mount
  React.useEffect(() => {
    (async () => {
      try {
        const scoreJson = await AsyncStorage.getItem(SCORE_BY_DATE_KEY);
        const scoreMap: Record<string, number> = scoreJson ? JSON.parse(scoreJson) : {};
        const rawDateKeys = Object.keys(scoreMap).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        const formattedLabels = rawDateKeys.map(date => {
          const [year, month, day] = date.split('-');
          return `${parseInt(month)}/${parseInt(day)}`;
        });
        const values = rawDateKeys.map(date => scoreMap[date]);
        setLabels(formattedLabels);
        setHistory(values);
        const total = values.reduce((sum, val) => sum + val, 0);
        setTotalBalance(total);
      } catch (e) {
        console.error('Failed to load score by date:', e);
      }
    })();
  }, []);

  // Reload score-by-date mapping when points change
  React.useEffect(() => {
    (async () => {
      try {
        const scoreJson = await AsyncStorage.getItem(SCORE_BY_DATE_KEY);
        const scoreMap: Record<string, number> = scoreJson ? JSON.parse(scoreJson) : {};
        const rawDateKeys = Object.keys(scoreMap).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
        const formattedLabels = rawDateKeys.map(date => {
          const [year, month, day] = date.split('-');
          return `${parseInt(month)}/${parseInt(day)}`;
        });
        const values = rawDateKeys.map(date => scoreMap[date]);
        setLabels(formattedLabels);
        setHistory(values);
        const total = values.reduce((sum, val) => sum + val, 0);
        setTotalBalance(total);
      } catch (e) {
        console.error('Failed to reload score by date:', e);
      }
    })();
  }, [points]);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <NeomorphBox
          width={SCREEN_WIDTH * 0.85}
          height={200}
          style={styles.neomorphBox}
        >
            <Text style={[styles.scoreText1, { color: '#666'}]}>
              Score
            </Text>
            <Text style={[styles.scoreText,  { color: '#000'}]}>
              {animatedScore}
              <Text style={styles.totalText}>/{total}</Text>
            </Text>
          {history.length > 0 && (
        <LineChart
          data={{
            labels: labels,
            datasets: [{ data: history }],
          }}
          width={SCREEN_WIDTH * 0.8}
          height={200}
          fromZero={true}
          withInnerLines={false}
          withVerticalLines={false}
          withHorizontalLabels={true}
          segments={3}
          withVerticalLabels={true}
          chartConfig={{
            backgroundColor: '#E3E5F2',
            backgroundGradientFrom: '#E3E5F2',
            backgroundGradientTo: '#E3E5F2',
            decimalPlaces: 0,
            color: (opacity = 1) => themeColors.textColor,
            labelColor: (opacity = 1) => themeColors.textColor,
          }}
          style={styles.chartStyle}
        />
      )}
            {animatedScore === total && (
          <LottieView
            source={require('../../assets/lottie/cracer.json')}
            autoPlay
            loop={true}
            style={{ width: SCREEN_WIDTH * 0.85, height: SCREEN_WIDTH * 0.85, position: 'absolute', top: 0}}
          />
        )}
        </NeomorphBox>
        <NeomorphBox
          width={SCREEN_WIDTH * 0.85}
          height={100}
          style={styles.neomorphBox1}
        >

      {animatedScore === total && (
        <Animated.Text
          style={[
            styles.bonusText,
            {
              opacity: fadeAnim,
              transform: [{ translateY }],
            },
          ]}
        >
          +{bonusPoints}
        </Animated.Text>
      )}
      <Animated.Text
        style={[
          styles.vipBonusText,
          {
            opacity: vipFadeAnim,
            transform: [{ translateY: vipTranslateY }],
          },
        ]}
      >
        VIPボーナス +{vipBonusPoints}
      </Animated.Text>
        <Text style={styles.pointscoreText }>
          ₵ {points}
        </Text>

        </NeomorphBox>

    </View>
  );
};

export default ScoreSummary;

const styles = StyleSheet.create({
  neomorphBox: {
    marginTop: 80,
  },
  neomorphBox1: {
    marginTop: 20,
  },
  pointscoreText: {
    position:'absolute',
    color:'#777',
    fontSize: 30,
  },
  scoreText1: {
    position:'absolute',
    fontSize: 40,
    top: 20,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex:1,
    fontWeight:'200',
  },
  scoreText: {
    position:'absolute',
    fontSize: 80,
    top: 70,
    left: 0,
    right: 0,
    textAlign: 'center',
    zIndex:1,
    fontFamily: 'PoiretOne',
    fontWeight:'400',
  },
  totalText: {
    fontSize: 20,
    fontFamily: 'PoiretOne',
  },
  bonusText: {
    position:'absolute',
    fontSize: 20,
    top:10,
    color: 'rgb(8, 235, 0)',
  },
  vipBonusText: {
    position:'absolute',
    fontSize: 20,
    top: 10,
    color: '#FFD700', // 金色
  },
  chartStyle: {
    marginVertical: 8,
  },
});