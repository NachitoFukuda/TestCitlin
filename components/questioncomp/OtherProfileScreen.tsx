import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Image, ScrollView, Modal, FlatList, TouchableOpacity, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import NeomorphBox from '@/components/ui/NeomorphBox';
import GlassCard from '@/components/ui/GlassCard';
import { Ionicons } from '@expo/vector-icons';
import { ImageSourcePropType } from 'react-native';
import { useFocusEffect, useRouter } from 'expo-router';
import { rdb } from '../../firebaseConfig';
import { ref as dbRef, get as dbGet, set as dbSet, } from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', paddingVertical: 20, backgroundColor: '#f00' },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileNameContainer: {
    marginTop: 12,
    alignItems: 'center',
    backgroundColor: '#f00'
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  nameContainer: { marginTop: 12, alignItems: 'center' },
  nameText: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  statsRow: { flexDirection: 'row', marginTop: 16, justifyContent: 'space-around', width: '100%' },
  statItem: { alignItems: 'center' },
  statText: { marginTop: 4, fontSize: 16, color: '#666' },
  animationOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  animation: {
    width: 60,
    height: 60,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    height: '60%',
    backgroundColor: 'rgba(77, 77, 77, 0.6)',
    borderRadius: 32,
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  listAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  listText: {
    fontSize: 16,
  },
  modalCloseButton: {
    marginTop: 12,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 16,
  },
  closeGlassCard: {
    alignSelf: 'center',
    marginTop: 12,
    borderRadius: 32,
  },
  modalCloseButtonInside: {
  },
});

// Reuse iconSources mapping if needed
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



const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



export function UserProfile({
  uid,
  onClose,
}: {
  uid: string;
  onClose?: () => void;
}) {
  const [selectedUid, setSelectedUid] = useState<string | null>(null);
  const router = useRouter();
  const [todayCount, setTodayCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [dbIconName, setDbIconName] = useState<string | null>(null);
  const [cardName, setCardName] = useState<string>('card1');
  const [nickname, setNickname] = useState<string>('匿名');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  // --- New follow state logic ---
  const authUser = getAuth().currentUser;
  const myUid = authUser?.uid;
  const [isFollowingProfile, setIsFollowingProfile] = useState<boolean>(false);
  const [isFollowerProfile, setIsFollowerProfile] = useState<boolean>(false);
  const [confirmUnfollow, setConfirmUnfollow] = useState<boolean>(false);
  const [pendingFollowAction, setPendingFollowAction] = useState<'follow' | null>(null);
  // Sound playback
  const playFollowSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/sound/follow.mp3')
    );
    await sound.playAsync();
  };
  // Lottie animation state
  const lottieRef = useRef<LottieView>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [followCount, setFollowCount] = useState<number>(0);
  const [followerCount, setFollowerCount] = useState<number>(0);
  const [showFollowModal, setShowFollowModal] = useState<boolean>(false);
  const [showFollowerModal, setShowFollowerModal] = useState<boolean>(false);
  const [followList, setFollowList] = useState<{ uid: string; nickname: string; iconName: string }[]>([]);
  const [followerList, setFollowerList] = useState<{ uid: string; nickname: string; iconName: string }[]>([]);
  const levelMap: { [key: string]: string } = {
    '1': '1級',
    '1_5': '準1級',
    '2': '2級',
    '2_5': '準2級',
    '3': '3級',
  };


  // --- Watch whether current user follows this profile ---
  useEffect(() => {
    if (!myUid || !uid) return;
    const followRef = dbRef(rdb, `users/${myUid}/follow/${uid}`);
    const unsub = onValue(followRef, snap => {
      setIsFollowingProfile(snap.val() === true);
    });
    return () => unsub();
  }, [myUid, uid]);

  // --- Watch whether profile follows current user ---
  useEffect(() => {
    if (!myUid || !uid) return;
    const backRef = dbRef(rdb, `users/${uid}/follow/${myUid}`);
    const unsub = onValue(backRef, snap => {
      setIsFollowerProfile(snap.val() === true);
    });
    return () => unsub();
  }, [myUid, uid]);
  useFocusEffect(
    useCallback(() => {
      let unsubscribe: (() => void) | undefined;
      let unsubscribeAsset: (() => void) | undefined;
      (async () => {
        if (uid) {
          // Load selected level
          const levelJson = await AsyncStorage.getItem('@selected_levels');
          const level = levelJson ? JSON.parse(levelJson)[0] : '1';
          setSelectedLevel(level);
          const sanitizedLevel = String(level).replace('.', '_');
          // Load stored UID for consistency
          const today = new Date();
          const yyyy = today.getFullYear();
          const mm = String(today.getMonth() + 1).padStart(2, '0');
          const dd = String(today.getDate()).padStart(2, '0');
          const todayKey = `${yyyy}-${mm}-${dd}`;

          const correctRef = dbRef(rdb, `users/${uid}/dailyCorrect_${sanitizedLevel}/${todayKey}`);
          unsubscribe = onValue(correctRef, snapshot => {
            const val = snapshot.val();
            setTodayCount(typeof val === 'number' ? val : 0);
          }, error => {
            console.error('[SettingsScreen] dailyCorrect onValue error:', error);
            setTodayCount(0);
          });

          // Listen for totalPoints
          const assetRef = dbRef(rdb, `users/${uid}/totalPoints`);
          unsubscribeAsset = onValue(assetRef, snapshot => {
            const val = snapshot.val();
            setTotalPoints(typeof val === 'number' ? val : 0);
          }, error => {
            console.error('[SettingsScreen] totalPoints onValue error:', error);
            setTotalPoints(0);
          });
        }
      })();

      return () => {
        if (unsubscribe) unsubscribe();
        if (unsubscribeAsset) unsubscribeAsset();
      };
    }, [uid])
  );

  // Reset animation when screen is focused (optional: hide animation)
  useFocusEffect(
    useCallback(() => {
      setIsPlaying(false);
    }, [uid])
  );

  // Effect: subscribe to dbIconName
  useEffect(() => {
    const rdb = getDatabase();
    if (!uid) return;
    const iconRef = ref(rdb, `users/${uid}/iconName`);
    const unsubscribe = onValue(iconRef, snapshot => {
      const val = snapshot.val();
      if (typeof val === 'string') {
        setDbIconName(val);
      } else {
        // Clear icon name when no data
        setDbIconName(null);
      }
    });
    return () => unsubscribe();
  }, []);


  // Effect: subscribe to cardName
  useEffect(() => {
    const rdb = getDatabase();
    if (!uid) return;
    const cardRef = ref(rdb, `users/${uid}/cardName`);
    const unsubscribeCard = onValue(cardRef, snapshot => {
      const val = snapshot.val();
      if (typeof val === 'string') setCardName(val);
    });
    return () => unsubscribeCard();
  }, []);

  
    useEffect(() => {
    const rdb = getDatabase();
    if (!uid) return;
    const cardRef = ref(rdb, `users/${uid}/nickname`);
    const Nickname = onValue(cardRef, snapshot => {
      const val = snapshot.val();
      if (typeof val === 'string') setNickname(val);
    });
    return () => Nickname();
  }, []);

  // No profile path; ensure loading stops
  useEffect(() => {
    setLoading(false);
  }, []);

  // Subscribe to follow count
  useEffect(() => {
    if (!uid) return;
    const followRefDb = dbRef(rdb, `users/${uid}/follow`);
    const unsubscribeFollow = onValue(followRefDb, snapshot => {
      const val = snapshot.val();
      const count = val && typeof val === 'object' ? Object.keys(val).length : 0;
      setFollowCount(count);
    });
    return () => unsubscribeFollow();
  }, [uid]);

  // Subscribe to follower count
  useEffect(() => {
    if (!uid) return;
    const followersRefDb = dbRef(rdb, `users/${uid}/followers`);
    const unsubscribeFollowers = onValue(followersRefDb, snapshot => {
      const val = snapshot.val();
      const count = val && typeof val === 'object' ? Object.keys(val).length : 0;
      setFollowerCount(count);
    });
    return () => unsubscribeFollowers();
  }, [uid]);

  // Subscribe to follow list
  useEffect(() => {
    if (!uid) return;
    const refList = dbRef(rdb, `users/${uid}/follow`);
    const unsubList = onValue(refList, async snap => {
      const obj = snap.val();
      if (obj && typeof obj === 'object') {
        const ids = Object.keys(obj);
        const list = await Promise.all(ids.map(async id => {
          const nameSnap = await dbGet(dbRef(rdb, `users/${id}/nickname`));
          const iconSnap = await dbGet(dbRef(rdb, `users/${id}/iconName`));
          return {
            uid: id,
            nickname: nameSnap.val() || '匿名',
            iconName: iconSnap.val() || 'person-circle-outline',
          };
        }));
        setFollowList(list);
      } else {
        setFollowList([]);
      }
    });
    return () => unsubList();
  }, [uid]);

  // Subscribe to follower list
  useEffect(() => {
    if (!uid) return;
    const refFollowers = dbRef(rdb, `users/${uid}/followers`);
    const unsubFollowers = onValue(refFollowers, async snap => {
      const obj = snap.val();
      if (obj && typeof obj === 'object') {
        const ids = Object.keys(obj);
        const list = await Promise.all(ids.map(async id => {
          const nameSnap = await dbGet(dbRef(rdb, `users/${id}/nickname`));
          const iconSnap = await dbGet(dbRef(rdb, `users/${id}/iconName`));
          return {
            uid: id,
            nickname: nameSnap.val() || '匿名',
            iconName: iconSnap.val() || 'person-circle-outline',
          };
        }));
        setFollowerList(list);
      } else {
        setFollowerList([]);
      }
    });
    return () => unsubFollowers();
  }, [uid]);
  if (loading) {
    return <ActivityIndicator style={styles.loader} />;
  }
  if (selectedUid) {
    return (
      <Modal visible transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <UserProfile uid={selectedUid} onClose={() => setSelectedUid(null)} />
        </View>
      </Modal>
    );
  }


  const {
    photoURL = null,
  } = profile || {};
  const effectiveIconName =
    dbIconName ||
    ((profile && (profile.iconName as string)) || 'person-circle-outline');

  // Refactor: use cardElement variable for conditional rendering
  let cardElement: JSX.Element;

  if (cardName === 'card2') {
    cardElement = (
      <View style={{ flex: 1, marginTop: 20 }}>
          <LottieView
            ref={lottieRef}
            source={require('../../assets/lottie/Check.json')}
            autoPlay={false}
            loop={false}
            onAnimationFinish={() => {
              setIsPlaying(false);
              if (pendingFollowAction === 'follow') {
                setIsFollowingProfile(true);
                setPendingFollowAction(null);
              }
            }}
            style={[styles.animation, { opacity: isPlaying ? 1 : 0, position: 'absolute', alignSelf: 'center', top: '10%', zIndex: 10 }]}
          />
          <View style={{
            width: SCREEN_WIDTH * 0.85,
            height: (SCREEN_WIDTH * 0.85) / 1.6,
            marginTop: 42,
          }}>
            <GlassCard
              width={SCREEN_WIDTH * 0.85}
              height={(SCREEN_WIDTH * 0.85) / 1.6}
              style={{ paddingTop: 40 }}
            >
              <View style={{ position: 'absolute', top: 0, alignSelf: 'center', zIndex: 1 }}>
                {photoURL ? (
                  <Image source={{ uri: photoURL }} style={styles.avatar} />
                ) : effectiveIconName === 'person-circle-outline' ? (
                  <Ionicons name="person-circle-outline" size={80} color="#777" style={styles.avatar} />
                ) : (
                  <Image source={iconSources[effectiveIconName] || { uri: effectiveIconName }} style={styles.avatar} />
                )}
              </View>
              {/* name */}
              <View style={styles.profileNameContainer}>
                <View style={{ alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: -50 }}>
                    <Text style={styles.nameText}>{nickname || '匿名'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 24, position: 'absolute', top: -20 }}>
                    <TouchableOpacity onPress={() => followCount > 0 && setShowFollowModal(true)}>
                      <Text style={{ fontSize: 12, color: '#666' }}>{`フォロー ${followCount}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => followerCount > 0 && setShowFollowerModal(true)}>
                      <Text style={{ fontSize: 12, color: '#666' }}>{`フォロワー ${followerCount}`}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* stats */}
              <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Ionicons name="school-outline" size={48} color="#777" />
                  <Text style={styles.statText}>{levelMap[selectedLevel] || selectedLevel}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Ionicons name="cash-outline" size={48} color="#777" />
                  <Text style={styles.statText}>₵ {totalPoints}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Ionicons name="checkmark-done-outline" size={48} color="#777" />
                  <Text style={styles.statText}>{todayCount}</Text>
                </View>
              </View>
            </GlassCard>
          </View>
          {/* Follow / Unfollow / Follow-back button */}
          {!isPlaying && (
            <>
              <TouchableOpacity
                onPress={async () => {
                  // Confirm unfollow logic
                  if (isFollowingProfile && !confirmUnfollow) {
                    setConfirmUnfollow(true);
                    return;
                  }
                  // Only trigger animation when following (not unfollow)
                  if (!myUid || !uid) return;
                  if (isFollowingProfile) {
                    // unfollow
                    await dbSet(dbRef(rdb, `users/${myUid}/follow/${uid}`), null);
                    await dbSet(dbRef(rdb, `users/${uid}/followers/${myUid}`), null);
                    setIsFollowingProfile(false);
                    setConfirmUnfollow(false);
                  } else {
                    // follow or follow-back
                    await dbSet(dbRef(rdb, `users/${myUid}/follow/${uid}`), true);
                    await dbSet(dbRef(rdb, `users/${uid}/followers/${myUid}`), true);
                    setPendingFollowAction('follow');
                    setConfirmUnfollow(false);
                    setIsPlaying(true);
                    lottieRef.current?.play();
                  }
                }}
                style={{
                  position: 'absolute',
                  bottom: 80,
                  alignSelf: 'center',
                  paddingVertical: 8,
                  paddingHorizontal: 24,
                  backgroundColor: isFollowingProfile ? '#aaa' : '#007AFF',
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>
                  {isFollowingProfile
                    ? confirmUnfollow
                      ? '解除'
                      : 'フォロー中'
                    : isFollowerProfile
                    ? 'フォローバック'
                    : 'フォロー'}
                </Text>
              </TouchableOpacity>
            </>
          )}
          {/* Close button fixed at bottom */}
          {onClose && (
            <TouchableOpacity
              onPress={onClose}
              style={{
                position: 'absolute',
                bottom: 16,
                alignSelf: 'center',
              }}
            >
              <NeomorphBox
                width={120}
                height={48}
                style={{
                  shadowRadius: 6,
                  shadowOpacity: 0.1,
                  borderRadius: 8,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18, color: '#666' }}>閉じる</Text>
                </View>
              </NeomorphBox>
            </TouchableOpacity>
          )}
        </View>
      );
  } else if (cardName === 'card3') {
    cardElement = (
      <View style={{ flex: 1, marginTop: 20 }}>
          <LottieView
            ref={lottieRef}
            source={require('../../assets/lottie/Check.json')}
            autoPlay={false}
            loop={false}
            onAnimationFinish={() => {
              setIsPlaying(false);
              if (pendingFollowAction === 'follow') {
                setIsFollowingProfile(true);
                setPendingFollowAction(null);
              }
            }}
            style={[styles.animation, { opacity: isPlaying ? 1 : 0, position: 'absolute', alignSelf: 'center', top: '40%', zIndex: 10 }]}
          />
          <View style={{
            width: SCREEN_WIDTH * 0.85,
            height: (SCREEN_WIDTH * 0.85) / 1.6,
            marginTop: 42,
          }}>
            <GlassCard
              width={SCREEN_WIDTH * 0.85}
              height={(SCREEN_WIDTH * 0.85) / 1.6}
              design="dark"
              style={{ paddingTop: 40 }}
            >
              <View style={{ position: 'absolute', top: 0, alignSelf: 'center', zIndex: 1 }}>
                {photoURL ? (
                  <Image source={{ uri: photoURL }} style={styles.avatar} />
                ) : effectiveIconName === 'person-circle-outline' ? (
                  <Ionicons name="person-circle-outline" size={80} color="#fff" style={styles.avatar} />
                ) : (
                  <Image source={iconSources[effectiveIconName] || { uri: effectiveIconName }} style={styles.avatar} />
                )}
              </View>
              {/* name */}
              <View style={styles.profileNameContainer}>
                <View style={{ alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: -50 }}>
                    <Text style={[styles.nameText, { color: '#fff' }]}>{nickname || '匿名'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 24, position: 'absolute', top: -20 }}>
                    <TouchableOpacity onPress={() => followCount > 0 && setShowFollowModal(true)}>
                      <Text style={{ fontSize: 12, color: '#fff' }}>{`フォロー ${followCount}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => followerCount > 0 && setShowFollowerModal(true)}>
                      <Text style={{ fontSize: 12, color: '#fff' }}>{`フォロワー ${followerCount}`}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* stats */}
              <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Ionicons name="school-outline" size={48} color="#fff" />
                  <Text style={[styles.statText, { color: '#fff' }]}>{levelMap[selectedLevel] || selectedLevel}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Ionicons name="cash-outline" size={48} color="#fff" />
                  <Text style={[styles.statText, { color: '#fff' }]}>₵ {totalPoints}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Ionicons name="checkmark-done-outline" size={48} color="#fff" />
                  <Text style={[styles.statText, { color: '#fff' }]}>{todayCount}</Text>
                </View>
              </View>
            </GlassCard>
          </View>
          {/* Follow / Unfollow / Follow-back button */}
          {!isPlaying && (
            <>
              <TouchableOpacity
                onPress={async () => {
                  if (isFollowingProfile && !confirmUnfollow) {
                    setConfirmUnfollow(true);
                    return;
                  }
                  // Only trigger animation when following (not unfollow)
                  if (!myUid || !uid) return;
                  if (isFollowingProfile) {
                    // unfollow
                    await dbSet(dbRef(rdb, `users/${myUid}/follow/${uid}`), null);
                    await dbSet(dbRef(rdb, `users/${uid}/followers/${myUid}`), null);
                    setIsFollowingProfile(false);
                    setConfirmUnfollow(false);
                  } else {
                    // follow or follow-back
                    await dbSet(dbRef(rdb, `users/${myUid}/follow/${uid}`), true);
                    await dbSet(dbRef(rdb, `users/${uid}/followers/${myUid}`), true);
                    setPendingFollowAction('follow');
                    setConfirmUnfollow(false);
                    setIsPlaying(true);
                    lottieRef.current?.play();
                  }
                }}
                style={{
                  position: 'absolute',
                  bottom: 80,
                  alignSelf: 'center',
                  paddingVertical: 8,
                  paddingHorizontal: 24,
                  backgroundColor: isFollowingProfile ? '#aaa' : '#007AFF',
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>
                  {isFollowingProfile
                    ? confirmUnfollow
                      ? '解除'
                      : 'フォロー中'
                    : isFollowerProfile
                    ? 'フォローバック'
                    : 'フォロー'}
                </Text>
              </TouchableOpacity>
            </>
          )}
          {/* Close button fixed at bottom */}
          {onClose && (
            <TouchableOpacity
              onPress={onClose}
              style={{
                position: 'absolute',
                bottom: 16,
                alignSelf: 'center',
              }}
            >
              <NeomorphBox
                width={120}
                height={48}
                style={{
                  shadowRadius: 6,
                  shadowOpacity: 0.1,
                  borderRadius: 8,
                  padding: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18, color: '#666' }}>閉じる</Text>
                </View>
              </NeomorphBox>
            </TouchableOpacity>
          )}
        </View>
      );
  } else {
    cardElement = (
      <View style={{ flex: 1, marginTop: 20 }}>
          <LottieView
            ref={lottieRef}
            source={require('../../assets/lottie/Check.json')}
            autoPlay={false}
            loop={false}
            onAnimationFinish={() => {
              setIsPlaying(false);
              if (pendingFollowAction === 'follow') {
                setIsFollowingProfile(true);
                setPendingFollowAction(null);
              }
            }}
            style={[styles.animation, { opacity: isPlaying ? 1 : 0, position: 'absolute', alignSelf: 'center', top: '40%', zIndex: 10 }]}
          />
          <View style={{
            width: SCREEN_WIDTH * 0.85,
            height: (SCREEN_WIDTH * 0.85) / 1.6,
            marginTop: 42,
          }}>
            <NeomorphBox
              width={SCREEN_WIDTH * 0.85}
              height={(SCREEN_WIDTH * 0.85) / 1.6}
              style={{ paddingTop: 40 }}
            >
              <View style={{ position: 'absolute', top: 0, alignSelf: 'center', zIndex: 1 }}>
                {photoURL ? (
                  <Image source={{ uri: photoURL }} style={styles.avatar} />
                ) : effectiveIconName === 'person-circle-outline' ? (
                  <Ionicons name="person-circle-outline" size={80} color="#777" style={styles.avatar} />
                ) : (
                  <Image source={iconSources[effectiveIconName] || { uri: effectiveIconName }} style={styles.avatar} />
                )}
              </View>
              {/* name */}
              <View style={styles.profileNameContainer}>
                <View style={{ alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: -30 }}>
                    <Text style={styles.nameText}>{nickname || '匿名'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 24, position: 'absolute', top: 0 }}>
                    <TouchableOpacity onPress={() => followCount > 0 && setShowFollowModal(true)}>
                      <Text style={{ fontSize: 12, color: '#666' }}>{`フォロー ${followCount}`}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => followerCount > 0 && setShowFollowerModal(true)}>
                      <Text style={{ fontSize: 12, color: '#666' }}>{`フォロワー ${followerCount}`}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* stats */}
              <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Ionicons name="school-outline" size={48} color="#777" />
                  <Text style={styles.statText}>{levelMap[selectedLevel] || selectedLevel}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Ionicons name="cash-outline" size={48} color="#777" />
                  <Text style={styles.statText}>₵ {totalPoints}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <Ionicons name="checkmark-done-outline" size={48} color="#777" />
                  <Text style={styles.statText}>{todayCount}</Text>
                </View>
              </View>
            </NeomorphBox>
          </View>
          {/* Follow / Unfollow / Follow-back button */}
          {!isPlaying && (
            <>
              <TouchableOpacity
                onPress={async () => {
                  if (isFollowingProfile && !confirmUnfollow) {
                    setConfirmUnfollow(true);
                    return;
                  }
                  // Only trigger animation when following (not unfollow)
                  if (!myUid || !uid) return;
                  if (isFollowingProfile) {
                    // unfollow
                    await dbSet(dbRef(rdb, `users/${myUid}/follow/${uid}`), null);
                    await dbSet(dbRef(rdb, `users/${uid}/followers/${myUid}`), null);
                    setIsFollowingProfile(false);
                    setConfirmUnfollow(false);
                  } else {
                    // follow or follow-back
                    await dbSet(dbRef(rdb, `users/${myUid}/follow/${uid}`), true);
                    await dbSet(dbRef(rdb, `users/${uid}/followers/${myUid}`), true);
                    setPendingFollowAction('follow');
                    setConfirmUnfollow(false);
                    setIsPlaying(true);
                    lottieRef.current?.play();
                  }
                }}
                style={{
                  position: 'absolute',
                  top: '40%',
                  alignSelf: 'center',
                  paddingVertical: 8,
                  paddingHorizontal: 24,
                  backgroundColor: isFollowingProfile ? '#aaa' : 'rgb(7, 209, 220)',
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: '#fff', fontSize: 16 }}>
                  {isFollowingProfile
                    ? confirmUnfollow
                      ? 'フォロー解除'
                      : 'フォロー中'
                    : isFollowerProfile
                    ? 'フォローバック'
                    : 'フォロー'}
                </Text>
              </TouchableOpacity>
            </>
          )}
          {/* Close button fixed at bottom */}
          {onClose && (
            <TouchableOpacity
              onPress={onClose}
              style={{
                position: 'absolute',
                bottom: 38,
                alignSelf: 'center',
              }}
            >
              <NeomorphBox
                width={SCREEN_WIDTH * 0.85}
                height={60}
              >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18, color: '#666' }}>閉じる</Text>
                </View>
              </NeomorphBox>
            </TouchableOpacity>
          )}
        </View>
      );
  }

  // Single return with cardElement and modals
  return (
    <>
      {cardElement}
      {/* Follow List Modal */}
      <Modal visible={showFollowModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <GlassCard
            width={SCREEN_WIDTH * 0.95}
            height={SCREEN_HEIGHT * 0.9}
            style={styles.modalContent}
          >
            <Text style={[styles.modalTitle, { color: '#fff' }]}>フォロー中</Text>
            <FlatList
              style={{ alignSelf: 'stretch' }}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              data={followList}
              keyExtractor={item => item.uid}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => setSelectedUid(item.uid)}
                >
                  {iconSources[item.iconName] ? (
                    <Image source={iconSources[item.iconName]} style={styles.listAvatar} />
                  ) : (
                    <Ionicons name="person-circle-outline" size={40} color="#777" style={styles.listAvatar} />
                  )}
                  <Text style={[styles.listText, { color: '#fff' }]}>{item.nickname}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setShowFollowModal(false)} style={styles.modalCloseButton}>
            <GlassCard
              width={300}
              height={48}
              style={styles.closeGlassCard}
            >
                <Text style={styles.modalCloseText}>閉じる</Text>
            </GlassCard>
            </TouchableOpacity>
          </GlassCard>
        </View>
      </Modal>

      {/* Follower List Modal */}
      <Modal visible={showFollowerModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
        <GlassCard
            width={SCREEN_WIDTH * 0.95}
            height={SCREEN_HEIGHT * 0.9}
            style={styles.modalContent}
          >
            <Text style={[styles.modalTitle, { color: '#fff' }]}>フォロワー</Text>
            <FlatList
              style={{ alignSelf: 'stretch' }}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              data={followerList}
              keyExtractor={item => item.uid}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => setSelectedUid(item.uid)}
                >
                  {iconSources[item.iconName] ? (
                    <Image source={iconSources[item.iconName]} style={styles.listAvatar} />
                  ) : (
                    <Ionicons name="person-circle-outline" size={40} color="#777" style={styles.listAvatar} />
                  )}
                  <Text style={[styles.listText, { color: '#fff' }]}>{item.nickname}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              onPress={() => setShowFollowerModal(false)}
              style={styles.modalCloseButtonInside}
            >
            <GlassCard
              width={300}
              height={48}
              style={styles.closeGlassCard}
            >
                <Text style={styles.modalCloseText}>閉じる</Text>
            </GlassCard>
            </TouchableOpacity>
          </GlassCard>
        </View>
      </Modal>
    </>
  );
}
export default UserProfile;