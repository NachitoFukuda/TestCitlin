import NeomorphBox from '@/components/ui/NeomorphBox';
import React, { useMemo, useRef, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView, Animated, Easing } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useQuestionData from '@/components/questioncomp/useQuestionData';

type RankingComponentProps = {
  score: number;
};

export default function RankingComponent({ score }: RankingComponentProps) {
  const { level } = useQuestionData();
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');
  const [todayCount, setTodayCount] = useState(0);
  const [todayGoal, setTodayGoal] = useState<number>(0);
  const [dayCount, setDayCount] = useState<number>(1);
  const INITIAL_DURATION = 1800;
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const GENERATED_KEY = '@generated_data';

  // Size of the circular physics container
  const circleSize = windowHeight * 0.25;
  const ballRadius = 5;
  const [ballCountState, setBallCountState] = useState(todayCount);
  const ballCount = ballCountState;

  const innerCircleRadius = circleSize * 0.2;
  const innerCircleTop = circleSize / 2 - innerCircleRadius;
  const innerCircleLeft = circleSize / 2 - innerCircleRadius;

  const safeGetData = async (key: string, defaultValue: any) => {
    try {
      const json = await AsyncStorage.getItem(key);
      if (!json) return defaultValue;
      return JSON.parse(json);
    } catch (error) {
      return defaultValue;
    }
  };

  // Generate random polar coordinates for balls
  const ballPolar = useMemo(() => {
    const pts = [];
    const minR = innerCircleRadius + ballRadius;
    const maxR = circleSize / 2 - ballRadius;
    for (let i = 0; i < ballCount; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const r = minR + Math.sqrt(Math.random()) * (maxR - minR);
      pts.push({ angle, r });
    }
    return pts;
  }, [ballCount, circleSize, innerCircleRadius, ballRadius]);


  useFocusEffect(
    React.useCallback(() => {
      const loadTodayCount = async () => {
        try {
          const today = new Date();
          const yyyy = today.getFullYear();
          const mm = String(today.getMonth() + 1).padStart(2, '0');
          const dd = String(today.getDate()).padStart(2, '0');
          const key = `${yyyy}-${mm}-${dd}`;
          const scoreMapStr = await AsyncStorage.getItem(`DAYLY_CORRECT_${sanitizedLevel}`);
          let todayValue = 0;
          if (scoreMapStr) {
            const scoreMap = JSON.parse(scoreMapStr);
            todayValue = scoreMap[key] || 0;
          }
          setTodayCount(todayValue);
          // Reset ball count state whenever todayCount changes
          setBallCountState(todayValue);

          // 今日の目標の読み込みとログ出力
          const generatedData = await safeGetData(GENERATED_KEY, []);
          let entry;
          if (Array.isArray(generatedData)) {
            const entrytoday = generatedData.find((item: any) => item.id === dayCount);
            const totalToday = Array.isArray(entrytoday?.result)
              ? entrytoday.result.reduce((sum: number, val: number) => sum + val, 0)
              : 0;
            const yesterdays = generatedData.find((item: any) => item.id === dayCount - 1) || { result: [0,0,0,0,0] };
            const totalYesterday = Array.isArray(yesterdays?.result)
              ? yesterdays.result.reduce((sum: number, val: number) => sum + val, 0)
              : 0;
            entry = totalToday - totalYesterday;
          } else if (typeof generatedData === 'object') {
            entry = generatedData[dayCount];
          }
          setTodayGoal(entry);

        } catch (e) {
          setTodayCount(0);
        }
      };
      loadTodayCount();
    }, [sanitizedLevel])
  );


  // Animation for rotation
  const spin = useRef(new Animated.Value(0)).current;
  const radiusAnim = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    if (todayCount - score < todayGoal && todayCount > todayGoal) {
      Animated.loop(
        Animated.timing(spin, {
          toValue: 1,
          duration: INITIAL_DURATION * 0.15,
          easing: Easing.linear,
          useNativeDriver: false,
        })
      ).start();
    }
  }, [spin, todayCount, todayGoal]);

useEffect(() => {
  if (todayCount - score < todayGoal && todayCount > todayGoal) {
    // Shrink to center
    Animated.timing(radiusAnim, {
      toValue: 0,
      duration: INITIAL_DURATION,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      // Stop rotation
      spin.stopAnimation();
      // At center, increase ball count fivefold
      setBallCountState(prev => prev * 3);
      // Expand balls outwards until off-screen
      Animated.timing(radiusAnim, {
        toValue: 2,
        duration: INITIAL_DURATION*0.75,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false,
      }).start();
    });
  }
}, [radiusAnim, todayCount, todayGoal]);

  // 仮のランキングデータ
  const rankingData = [
    { name: 'Alice', points: 150, avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Bob', points: 140, avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Charlie', points: 130, avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'David', points: 120, avatar: 'https://i.pravatar.cc/150?img=4' },
    { name: 'Eve', points: 110, avatar: 'https://i.pravatar.cc/150?img=5' },
    { name: 'Frank', points: 100, avatar: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Grace', points: 90, avatar: 'https://i.pravatar.cc/150?img=7' },
    { name: 'You', points: score, avatar: 'https://i.pravatar.cc/150?img=10' },
  ];

  // Reorder top three so center is 1st place
  const topThreeData = [rankingData[1], rankingData[0], rankingData[2]];

  const onClose = () => {
  };

  return (
    <View style={styles.container}>
      <NeomorphBox
        width={circleSize}
        height={circleSize}
        variant="circle1"
        style={{
          marginTop: 40,
          alignSelf: 'center',
          overflow: 'visible',
        }}
      >
        {ballPolar.map((p, idx) => {
          const rotateAnim = spin.interpolate({
            inputRange: [0, 1],
            outputRange: [`${p.angle}rad`, `${p.angle + 2 * Math.PI}rad`],
          });
          return (
            <Animated.View
              key={idx}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                transform: [
                  { translateX: circleSize / 2 - ballRadius },
                  { translateY: circleSize / 2 - ballRadius },
                  { rotate: rotateAnim },
                  { translateX: Animated.multiply(radiusAnim, p.r) },
                ],
              }}
            >
              <View
                style={{
                  width: ballRadius * 2,
                  height: ballRadius * 2,
                  borderRadius: ballRadius,
                  backgroundColor: '#fff',
                }}
              />
            </Animated.View>
          );
        })}
      </NeomorphBox>
      <View style={[styles.bottomWrapper, { height: windowHeight * 0.5 }]}>
        <NeomorphBox width={windowWidth * 0.85} height={windowHeight * 0.5}>

          <Text style={styles.title}>ランキング</Text>
          <View style={styles.topThreeContainer}>
            {topThreeData.map((item, index) => (
              <NeomorphBox
                key={index}
                width={windowWidth * (index === 1 ? 0.24 : 0.22)}
                height={windowHeight * 0.15}
                style={[styles.topCard, index === 1 && styles.centerCard]}
              >
                {index === 1 && <Text style={styles.crown}>👑</Text>}
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <Text style={styles.placeText}>
                  {index === 1 ? '1位' : index === 0 ? '2位' : '3位'}
                </Text>
                <Text style={styles.topName}>{item.name}</Text>
                <Text style={styles.topPoints}>{item.points}</Text>

              </NeomorphBox>
            ))}
          </View>
          <ScrollView>
            <View style={styles.rankingContainer}>
              {rankingData.slice(3, 7).map((item, index) => (
                <View key={index} style={styles.listItemWrapper}>
                  <Text style={styles.rank}>{index + 4}</Text>
                  <View
                    style={styles.listCard}
                  >
                    <View style={styles.listRow}>
                      <View style={styles.listLeft}>
                        <Image source={{ uri: item.avatar }} style={styles.listIcon} />
                        <Text style={styles.name}>{item.name}</Text>
                      </View>
                      <Text style={styles.points}>{item.points} pt</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </NeomorphBox>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={onClose}>
            <NeomorphBox width={windowWidth * 0.85} height={70}>
              <Text style={styles.startButtonText}>終了</Text>
            </NeomorphBox>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
    color: 'rgb(255, 213, 0)',
  },
  rank: { 
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft:10,
    marginRight:8,
    color: '#666'
   },
  name: {   color: '#000' },
  points: {
     color: 'rgb(220, 162, 0)', 
     marginRight: 16,
   },
  rankingContainer: {
    width: '100%',
  },
  listCard: {
    width: '100%',
    alignSelf: 'stretch',
    padding: 4,
  },
  startButtonText: {
    color: '#666',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 80,
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 160,
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  buttonWrapper: {
    marginTop: 20,
  },
  topThreeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  topCard: {
    alignItems: 'center',
    marginTop:30,
  },
  centerCard: {
    transform: [{ translateY: -20 }],
  },
  crown: {
    position: 'absolute',
    top: -20,
    fontSize: 28,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 5,
  },
  topName: {
    color: '#666',
    fontWeight: 'bold',
  },
  topPoints: {
    color: 'rgb(220, 162, 0)',
  },
  placeText: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
  },
  listLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  listItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
  },

});
