type RankingItemWithDiff = {
  uid: string;
  name: string;
  count: number;
  avatarUrl?: string;
  iconName?: string;
  diff: number;
};
import { getDatabase, ref, set, get } from 'firebase/database';
import { getAuth } from 'firebase/auth';
const rdb = getDatabase();
import { Ionicons } from '@expo/vector-icons';
import { ImageSourcePropType } from 'react-native';
const iconSources: { [key: string]: ImageSourcePropType } = {
  'icon1': require('../../assets/images/icon1.png'),
  'icon2': require('../../assets/images/icon2.png'),
  'icon3': require('../../assets/images/icon3.png'),
  'icon4': require('../../assets/images/icon4.png'),
  'icon5': require('../../assets/images/icon5.png'),
  'icon6': require('../../assets/images/icon6.png'),
  'icon7': require('../../assets/images/icon7.png'),
  'icon8': require('../../assets/images/icon8.png'),
};
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import * as Haptics from 'expo-haptics';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView, SafeAreaView, UIManager, Platform, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import useQuestionData from '@/components/questioncomp/useQuestionData';

import { router } from 'expo-router';
import GlassCard from '../ui/GlassCard';
import { LinearGradient } from 'expo-linear-gradient';
import UserProfile from './OtherProfileScreen';

type RankingComponentProps = {
  score: number;
};

export default function RankingComponent({ score }: RankingComponentProps) {
  const authUser = getAuth().currentUser;
  const myUid = authUser?.uid;

  const [selectedUid, setSelectedUid] = useState<string | null>(null);

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  // Animation for rotation

  const [todayRanking, setTodayRanking] = useState<{ uid: string; name: string; count: number; avatarUrl?: string; iconName?: string; }[]>([]);
  const prevRankingRef = useRef<{ uid: string; }[]>([]);
  const [rankingWithDiff, setRankingWithDiff] = useState<RankingItemWithDiff[]>([]);
  // Animated values for ranking list items
  const animatedValuesRef = useRef<Animated.Value[]>([]);
  const { level } = useQuestionData();
  const [loading, setLoading] = useState(false);
  // ---- LayoutAnimation for smooth rendering ----

  // Enable LayoutAnimation on Android
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental?.(true);
  }
  // ---- Level‑aware storage keys ----
  // Removed useMemo for sanitizedLevel


  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayKey = `${yyyy}-${mm}-${dd}`;

  const handleFinish = async () => {
    router.push( '/');
  };

  const fetchRanking = async () => {
    const startTime = Date.now();
    // setLoading(true); // removed: render immediately without loading screen
    // Load selected level from AsyncStorage
    const levelJson = await AsyncStorage.getItem('@selected_levels');
    const levelToUse = levelJson ? JSON.parse(levelJson)[0] : '1';
    const sanitizedLevel = String(levelToUse).replace(/\./g, '_');
    try {
      // Ensure placeholder users 1-6 have today's entry; if not, assign a random placeholder value between 1 and 50
      for (let i = 1; i <= 6; i++) {
        const userRef = ref(rdb, `users/${i}/dailyCorrect_${sanitizedLevel}`);
        const snap = await get(userRef);
        const dailyData: Record<string, number> = snap.val() || {};
        if (!dailyData[todayKey]) {
          // 夜中の0時〜6時は0点、それ以外はランダム値
          const currentHour = new Date().getHours();
          if (currentHour >= 0 && currentHour < 6) {
            await set(ref(rdb, `users/${i}/dailyCorrect_${sanitizedLevel}/${todayKey}`), 0);
          } else {
            const randomVal = Math.floor(Math.random() * 50) + 1;
            await set(ref(rdb, `users/${i}/dailyCorrect_${sanitizedLevel}/${todayKey}`), randomVal);
          }
        }
        // 10% の確率でボーナスを付与（1〜5 のランダム値）、ただし1日に合計5点まで
        if (Math.random() < 0.1) {
          // 既存の today's count を取得
          const updatedSnap = await get(ref(rdb, `users/${i}/dailyCorrect_${sanitizedLevel}/${todayKey}`));
          const currentCount = typeof updatedSnap.val() === 'number' ? updatedSnap.val() : 0;
          const maxDailyCap = 55; // 元の上限50 + ボーナス上限5
          if (currentCount < maxDailyCap) {
            const bonus = Math.floor(Math.random() * 5) + 1;
            const newCount = Math.min(currentCount + bonus, maxDailyCap);
            await set(
              ref(rdb, `users/${i}/dailyCorrect_${sanitizedLevel}/${todayKey}`),
              newCount
            );
          }
        }
      }
      const usersSnap = await get(ref(rdb, 'users'));
      let usersVal = usersSnap.val() || {};
      const list: { uid: string; name: string; count: number; avatarUrl?: string; iconName?: string; }[] = Object.entries(usersVal).map(
        ([uid, userObj]: [string, any]) => {
          const name = userObj.nickname ?? '匿名';
          const dailyObj: Record<string, unknown> = userObj[`dailyCorrect_${sanitizedLevel}`] ?? {};
          // Only count today’s correct count
          const todayCountValue = dailyObj[todayKey];
          const count = typeof todayCountValue === 'number' ? todayCountValue : 0;
          const avatarUrl = userObj.avatarUrl as string | undefined;
          const iconName = userObj.iconName as string | undefined;
          return { uid, name, count, avatarUrl, iconName };
        }
      );
      // For placeholder users without today's data, assign random value between 1 and 50
      list.forEach(item => {
        if (item.uid !== myUid) {
          const userDaily = (usersVal[item.uid]?.[`dailyCorrect_${sanitizedLevel}`] as Record<string, number>) || {};
          if (!userDaily[todayKey]) {
            item.count = Math.floor(Math.random() * 50) + 1;
          }
        }
      });
      // Sort by today's count (desc)
      list.sort((a, b) => b.count - a.count);

      // 🔟 Limit to Top-10 only
      const limited = list.slice(0, 10);

      // Compute rank changes using the limited list only
      const oldList = prevRankingRef.current;
      const newWithDiff: RankingItemWithDiff[] = limited.map((item, newIndex) => {
        const oldIndex = oldList.findIndex(u => u.uid === item.uid);
        const diff = oldIndex >= 0 ? oldIndex - newIndex : 0;
        return { ...item, diff };
      });
      setRankingWithDiff(newWithDiff);

      // Update prevRankingRef to the limited ranking
      prevRankingRef.current = limited;

      // Store Top-10 for rendering (Top-3 + 4th~10th)
      setTodayRanking(limited);
    } catch (error) {
      console.error('ランキング取得エラー:', error);
    } finally {
      // no loading gate: render immediately
    }
  };

  useEffect(() => {
    // Fetch ranking when component mounts or level changes
    fetchRanking();
  }, [level]);

  useEffect(() => {
    if (rankingWithDiff.length > 3) {
      // Initialize Animated.Values for each list item (4th+)
      const values = rankingWithDiff.slice(3).map(() => new Animated.Value(0));
      animatedValuesRef.current = values;
      // Staggered spring-based animation for each item
      values.forEach((av, index) => {
        // Start from opacity 0, translateY 30
        av.setValue(0);
        setTimeout(() => {
          Animated.spring(av, {
            toValue: 1,
            friction: 6,
            tension: 60,
            useNativeDriver: true,
          }).start();
        }, index * 120);
      });
    }
  }, [rankingWithDiff]);



  const topThreeRaw = todayRanking.slice(0, 3);
  const topThreeDisplay = topThreeRaw.length >= 3
    ? [topThreeRaw[1], topThreeRaw[0], topThreeRaw[2]]
    : topThreeRaw;
  const listDisplay = todayRanking.slice(3);

  const topCardWidth = windowWidth * 0.28;
  const sideCardWidth = windowWidth * 0.22;
  const cardSpacing = 20; // adjust as needed
  const cardsWrapperWidth = topCardWidth + sideCardWidth * 2 + cardSpacing * 2;

  // Calculate current user's rank
  const myRankIndex = todayRanking.findIndex(item => item.uid === myUid);
  const myRank = myRankIndex >= 0 ? myRankIndex + 1 : null;

  useEffect(() => {
    let hapticInterval: NodeJS.Timeout | null = null;
    if (loading) {
      hapticInterval = setInterval(() => {
        for (let i = 0; i < 3; i++) {
          setTimeout(() => {
            void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }, i * 100);
        }
      }, 3000); // 3秒ごとにループして振動
    } else {
      if (hapticInterval) {
        clearInterval(hapticInterval);
      }
    }
    return () => {
      if (hapticInterval) {
        clearInterval(hapticInterval);
      }
    };
  }, [loading]);

if (selectedUid) {
  return (
    <UserProfile
      uid={selectedUid}
      onClose={() => setSelectedUid(null)}
    />
  );
} else {


  return (
      <SafeAreaView style={styles.container}>
              <View style={styles.topThreeContainer}>
                {topThreeDisplay.map((item, index) => (
                  <TouchableOpacity
                    key={item.uid}
                    style={[
                      { width: index === 1 ? topCardWidth : sideCardWidth,
                        height: index === 1 ? windowHeight * 0.18 : windowHeight * 0.15,
                        borderRadius: 999,
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      styles.topCard,
                      index === 1 && styles.centerCard,
                    ]}
                    onPress={() => setSelectedUid(item.uid)}
                  >
                    {/* アバター＋王冠だけをアニメーション。テキストや順位丸は元の位置を維持 */}
                    {index === 1 ? (
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Text
                          style={[
                            styles.crown,
                            {
                              marginBottom: 32,
                            },
                          ]}
                        >
                          👑
                        </Text>
                        <View style={styles.firstAvatarWrapper}>
                          {item.iconName && iconSources[item.iconName] ? (
                            <Image source={iconSources[item.iconName]} style={styles.firstAvatar} />
                          ) : item.avatarUrl ? (
                            <Image source={{ uri: item.avatarUrl }} style={styles.firstAvatar} />
                          ) : (
                            <Ionicons name="person-circle-outline" size={100} color="#fff" />
                          )}
                        </View>
                      </View>
                    ) : (
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <View
                          style={[
                            styles.secondThirdWrapper,
                            {
                              borderColor:
                                index === 0
                                  ? 'rgba(119, 119, 119, 1)' // 2nd
                                  : 'rgba(255, 128, 0, 0.5)', // 3rd
                            },
                          ]}
                        >
                          {item.iconName && iconSources[item.iconName] ? (
                            <Image source={iconSources[item.iconName]} style={styles.avatar} />
                          ) : item.avatarUrl ? (
                            <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
                          ) : (
                            <Ionicons name="person-circle-outline" size={64} style={{ marginBottom: 5, color: '#fff' }} />
                          )}
                        </View>
                      </View>
                    )}
                    {/* 以下はアニメーションさせない → 位置は最初のまま */}
                    <View
                      style={[
                        styles.rankCircle,
                        {
                          backgroundColor:
                            index === 1
                              ? '#FFD700'
                              : index === 0
                              ? 'rgba(119, 119, 119, 1)'
                              : 'rgb(194, 97, 0)',
                        },
                      ]}
                    >
                      <Text style={[styles.placeText, { color: index === 1 ? '#000' : '#fff' }]}>
                        {index === 1 ? '1' : index === 0 ? '2' : '3'}
                      </Text>
                    </View>
                    <Text style={[styles.topName, item.uid === myUid && styles.myName]}>{item.name}</Text>
                    <Text style={styles.topPoints}>{item.count}</Text>
                  </TouchableOpacity>
                ))}
              </View>
              {myRank && (
                <LinearGradient
                  colors={['rgb(208, 0, 255)', 'rgb(61, 221, 176)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.myRankBanner}
                >
                  <Text style={styles.myRankText}>あなたの順位：{myRank}位</Text>
                </LinearGradient>
              )}
              <ScrollView
                contentContainerStyle={styles.rankingScrollContainer}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
              >
              <View style={styles.rankingContainer}>
                {rankingWithDiff.slice(3).map((item, index) => {
                  const av = animatedValuesRef.current[index] || new Animated.Value(1);
                  return (
                    <Animated.View
                      key={item.uid}
                      style={[
                        styles.listItemWrapper,
                        {
                          opacity: av.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                          }),
                          transform: [
                            {
                              translateY: av.interpolate({
                                inputRange: [0, 1],
                                outputRange: [30, 0],
                              }),
                            },
                          ],
                        },
                      ]}
                    >
                      <TouchableOpacity
                        onPress={() => setSelectedUid(item.uid)}
                        style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
                      >
                        {/* Up/down arrow on far left */}
                        {item.diff > 0 && (
                          <Ionicons
                            name="triangle"
                            size={16}
                            color="#0f0"
                            style={{ marginRight: 8 }}
                          />
                        )}
                        {item.diff < 0 && (
                          <Ionicons
                            name="triangle"
                            size={16}
                            color="#f00"
                            style={{ marginRight: 8, transform: [{ rotate: '180deg' }] }}
                          />
                        )}
                        {item.diff === 0 && (
                          <View style={styles.zeroDiffDot} />
                        )}
                        <Text style={styles.rank}>{index + 4}</Text>
                        <View
                          style={styles.listCard}
                        >
                          <View style={styles.listRow}>
                            <View style={styles.listLeft}>
                              {item.iconName && iconSources[item.iconName] ? (
                                <Image
                                  source={iconSources[item.iconName]}
                                  style={styles.listIcon}
                                />
                              ) : item.avatarUrl ? (
                                <Image source={{ uri: item.avatarUrl }} style={styles.listIcon} />
                              ) : (
                                <Ionicons name="person-circle-outline" size={40} style={{ marginRight: 8, color: '#fff' }} />
                              )}
                              <Text style={[styles.name, item.uid === myUid && styles.myName]}>
                                {item.name}
                              </Text>
                            </View>
                            <Text style={styles.points}>{item.count}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </Animated.View>
                  );
                })}
              </View>
            </ScrollView>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={handleFinish}>
            <GlassCard width={windowWidth*0.8} height={80} >
              <Text style={styles.startButtonText}>終了</Text>
            </GlassCard>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#rgb(6, 0, 25)',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
    color: '#fff',
  },
  rank: { 
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft:10,
    marginRight:8,
    color: '#fff',
   },
  name: {   
    color: '#fff' 
  },
  points: {
     color: '#fff',
     fontWeight: 'bold',
     marginRight: 16,
   },
  button: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: 'center',
  },
  rankingContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  listCard: {
    width: '100%',
    alignSelf: 'stretch',
    padding: 4,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 80,
  },
  bottomWrapper: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',  // vertically center children
    alignItems: 'center',      // horizontally center children
  },
  buttonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'transparent',
  },
  firstText: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 18,
  },
  secondText: {
    color: '#C0C0C0',
    fontWeight: 'bold',
    fontSize: 17,
  },
  thirdText: {
    color: '#CD7F32',
    fontWeight: 'bold',
    fontSize: 16,
  },

  firstAvatarWrapper: {
    borderWidth: 2,
    borderColor: '#FFD700',
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  topThreeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 40,
    marginBottom: 20,
  },
  cardsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topCard: {
    alignItems: 'center',
    marginTop:30,
  },
  crown: {
    position: 'absolute',
    top: -30,
    fontSize: 28,
    color: '#fff',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  topName: {
    color: '#fff',
    fontWeight: 'bold',
  },
  topPoints: {
    color: '#fff',
  },
  placeText: {
    fontSize: 14,
    textAlign: 'center', // 中央揃え
  },
  listRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    padding: 12,
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
    width: '100%',
  },

  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  toggleButtonActive: {
    backgroundColor: '#ffd500',
    borderColor: '#ffd500',
  },
  toggleText: {
    color: '#666',
    fontWeight: 'bold',
  },
  toggleTextActive: {
    color: '#fff',
  },
  myName: {
    color: 'rgb(255, 213, 0)',  // ゴールドで強調
    fontWeight: 'bold',
  },

  firstCard: {
    borderRadius: 12,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
  },
  secondCard: {
    borderRadius: 12,
    shadowColor: '#C0C0C0',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 8,
  },
  thirdCard: {
    borderRadius: 12,
    shadowColor: '#CD7F32',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 8,
  },
  centerCard: {
    transform: [{ translateY: -40 }, { scale: 1.4 }],
    zIndex: 2,
  },
  rankingScrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  secondThirdWrapper: {
    borderWidth: 4,
    borderRadius: 40,
    paddingTop:0,
  },
  rankCircle: {
    width: 20,
    height: 20,
    top:-10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  myRankBanner: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myRankText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    padding:8
  },
  zeroDiffDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'green',
    marginRight: 8,
  },
});

  // --- Haptics for loading Lottie ---
