import React, { useState, useEffect, useCallback } from 'react';
import { Image, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Modal, FlatList } from 'react-native';
import NeomorphBox from '../ui/NeomorphBox';
import GlassCard from '../ui/GlassCard';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';
import { rdb, auth } from '../../firebaseConfig';
import { ref as dbRef, get as dbGet, set as dbSet, onValue } from 'firebase/database';
import { onAuthStateChanged } from 'firebase/auth';

interface ProfileCardProps {
  iconName?: React.ComponentProps<typeof Ionicons>['name'];
  Edit?: boolean;
}
import { ImageSourcePropType } from 'react-native';
import UserProfile from '../questioncomp/OtherProfileScreen';


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

// Safe avatar renderer: prefers bundled image keys in iconSources, then http(s) URIs, else Ionicons fallback
const renderAvatar = (key: string | undefined, size: number, style?: any) => {
  if (key && iconSources[key]) {
    return <Image source={iconSources[key]} style={style || styles.listAvatar} />;
  }
  if (key && /^https?:\/\//.test(key)) {
    return <Image source={{ uri: key }} style={style || styles.listAvatar} />;
  }
  return <Ionicons name="person-circle-outline" size={size} color="#777" style={style || styles.iconImage} />;
};


// components/etc/ProfileCard.tsx

  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const ProfileCard: React.FC<ProfileCardProps> = ({ iconName }) => {
  const [selectedUid, setSelectedUid] = useState<string | null>(null);
  const [todayCount, setTodayCount] = useState<number>(0);
    const [totalPoints, setTotalPoints] = useState<number>(0);
    const [dbIconName, setDbIconName] = useState<React.ComponentProps<typeof Ionicons>['name']>('person');
    // Show custom icon only if user has purchased more than the default icon
    const effectiveIconName =
    dbIconName.length > 1 ? (iconName || dbIconName) : undefined;
    const [cardName, setCardName] = useState<string>('card1');
    const [NickName, setNickName] = useState<string>('匿名');
    const [followCount, setFollowCount] = useState<number>(0);
    const [followerCount, setFollowerCount] = useState<number>(0);
    const [showFollowModal, setShowFollowModal] = useState<boolean>(false);
    const [showFollowerModal, setShowFollowerModal] = useState<boolean>(false);
    const [followList, setFollowList] = useState<{ uid: string; nickname: string; iconName: string; }[]>([]);
    const [followerList, setFollowerList] = useState<{ uid: string; nickname: string; iconName: string; }[]>([]);
    const user = auth.currentUser;
    const photoURL = user?.photoURL;

  useEffect(() => {
    if (!user) return;
    const followRefList = dbRef(rdb, `users/${user.uid}/follow`);
    const unsubscribeList = onValue(followRefList, async snapshot => {
      const uidsObj = snapshot.val();
      if (uidsObj && typeof uidsObj === 'object') {
        const uids = Object.keys(uidsObj);
        const list = await Promise.all(uids.map(async uid => {
          const nameSnap = await dbGet(dbRef(rdb, `users/${uid}/nickname`));
          const iconSnap = await dbGet(dbRef(rdb, `users/${uid}/iconName`));
          return {
            uid,
            nickname: nameSnap.val() as string || '匿名',
            iconName: iconSnap.val() as string || 'person-circle-outline',
          };
        }));
        setFollowList(list);
      } else {
        setFollowList([]);
      }
    });
    return () => unsubscribeList();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const followerRefList = dbRef(rdb, `users/${user.uid}/followers`);
    const unsubscribeFollowerList = onValue(followerRefList, async snapshot => {
      const uidsObj = snapshot.val();
      if (uidsObj && typeof uidsObj === 'object') {
        const uids = Object.keys(uidsObj);
        const list = await Promise.all(uids.map(async uid => {
          const nameSnap = await dbGet(dbRef(rdb, `users/${uid}/nickname`));
          const iconSnap = await dbGet(dbRef(rdb, `users/${uid}/iconName`));
          return {
            uid,
            nickname: nameSnap.val() as string || '匿名',
            iconName: iconSnap.val() as string || 'person-circle-outline',
          };
        }));
        setFollowerList(list);
      } else {
        setFollowerList([]);
      }
    });
    return () => unsubscribeFollowerList();
  }, [user]);
    
    const levelMap: { [key: string]: string } = {
        '1': '1級',
        '1_5': '準1級',
        '2': '2級',
        '2_5': '準2級',
        '3': '3級',
      };
    const [selectedLevel, setSelectedLevel] = useState<string>('');

    useFocusEffect(
        useCallback(() => {
          let unsubscribe: (() => void) | undefined;
          let unsubscribeAsset: (() => void) | undefined;
          (async () => {
            if (user) {
              // Load selected level
              const levelJson = await AsyncStorage.getItem('@selected_levels');
              const level = levelJson ? JSON.parse(levelJson)[0] : '1';
              setSelectedLevel(level);
              const sanitizedLevel = String(level).replace('.', '_');
              // Load stored UID for consistency
              const storedUid = await AsyncStorage.getItem('@user_uid');
              const writeUid = storedUid ?? user.uid;
              const today = new Date();
              const yyyy = today.getFullYear();
              const mm = String(today.getMonth() + 1).padStart(2, '0');
              const dd = String(today.getDate()).padStart(2, '0');
              const todayKey = `${yyyy}-${mm}-${dd}`;
    
              const correctRef = dbRef(rdb, `users/${writeUid}/dailyCorrect_${sanitizedLevel}/${todayKey}`);
              unsubscribe = onValue(correctRef, snapshot => {
                const val = snapshot.val();
                setTodayCount(typeof val === 'number' ? val : 0);
              }, error => {
                console.error('[SettingsScreen] dailyCorrect onValue error:', error);
                setTodayCount(0);
              });
    
              // Listen for totalPoints
              const assetRef = dbRef(rdb, `users/${writeUid}/totalPoints`);
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
        }, [user])
      );
    
      // Listen for auth state and setup RTDB listener for today's correct count
      useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, async u => {
          if (!u) return;
          const todayKey = new Date().toISOString().slice(0,10);
          // Load selected level from AsyncStorage
          const levelJson = await AsyncStorage.getItem('@selected_levels');
          const level = levelJson ? JSON.parse(levelJson)[0] : '1';
          const sanitizedLevel = String(level).replace('.', '_');
          const correctRef = dbRef(rdb, `users/${u.uid}/dailyCorrect_${sanitizedLevel}/${todayKey}`);
          const unsubscribeDb = onValue(correctRef, snap => {
            setTodayCount(typeof snap.val() === 'number' ? snap.val() : 0);
          });
          // Clean up the RTDB listener when auth changes or component unmounts
          return () => {
            unsubscribeDb();
          };
        });
        // Clean up the auth listener on unmount
        return () => {
          unsubscribeAuth();
        };
      }, []);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
    const iconRef = dbRef(rdb, `users/${user.uid}/iconName`);
    const unsubscribe = onValue(iconRef, snapshot => {
      const val = snapshot.val();
      if (typeof val === 'string') {
        setDbIconName(val as React.ComponentProps<typeof Ionicons>['name']);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
    const iconRef = dbRef(rdb, `users/${user.uid}/nickname`);
    const unsubscribe = onValue(iconRef, snapshot => {
      const val = snapshot.val();
      if (typeof val === 'string') {
        setNickName(val as React.ComponentProps<typeof Ionicons>['name']);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
 
  useEffect(() => {
    if (!user) return;
    const cardRef = dbRef(rdb, `users/${user.uid}/cardName`);
    const unsubscribeCard = onValue(cardRef, snapshot => {
      const val = snapshot.val();
      if (typeof val === 'string') setCardName(val);
    });
    return () => {
      unsubscribeCard();
    };
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const followRefDb = dbRef(rdb, `users/${user.uid}/follow`);
    const unsubscribeFollow = onValue(followRefDb, snapshot => {
      const val = snapshot.val();
      const count = val && typeof val === 'object' ? Object.keys(val).length : 0;
      setFollowCount(count);
    });
    return () => unsubscribeFollow();
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const followersRefDb = dbRef(rdb, `users/${user.uid}/followers`);
    const unsubscribeFollowers = onValue(followersRefDb, snapshot => {
      const val = snapshot.val();
      const count = val && typeof val === 'object' ? Object.keys(val).length : 0;
      setFollowerCount(count);
    });
    return () => unsubscribeFollowers();
  }, [user]);

  // Debug: log which cardName is currently active

  // Navigate to OtherProfile when a user is selected
  if (selectedUid) {
    return (
      <Modal visible={true} transparent={false} animationType="fade">
        <View style={styles.overlay}>
          <UserProfile
            uid={selectedUid}
            onClose={() => setSelectedUid(null)}
          />
        </View>
      </Modal>
    );
  }

  // Explicit conditional returns for wrapper based on cardName
  if (cardName === 'card2') {
    return (
      <>
      <View style={{ marginTop: 32, alignItems: 'center' }}>
        <View style={{
          width: SCREEN_WIDTH * 0.85,
          height: (SCREEN_WIDTH * 0.85) / 1.6,
        }}>
          <GlassCard
            width={SCREEN_WIDTH * 0.85}
            height={(SCREEN_WIDTH * 0.85) / 1.6}
            style={{ paddingTop: 40 }}
          >
            <View style={{ position: 'absolute', top: 0, alignSelf: 'center', zIndex: 1 }}>
              {photoURL
                ? <Image source={{ uri: photoURL }} style={styles.profileAvatar} />
                : renderAvatar(effectiveIconName, 80, styles.profileAvatar)}
            </View>
            {/* name */}
            <View style={styles.profileNameContainer}>
              <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: -40 }}>
                  <Text style={styles.profileName}>{NickName || '匿名'}</Text>
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
                <Text style={styles.scoreText}>{levelMap[selectedLevel] || selectedLevel}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Ionicons name="cash-outline" size={48} color="#777" />
                <Text style={styles.scoreText}>₵ {totalPoints}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Ionicons name="checkmark-done-outline" size={48} color="#777" />
                <Text style={styles.scoreText}>{todayCount}</Text>
              </View>
            </View>
          </GlassCard>
        </View>
      </View>
      {/* Follow List Modal */}
      <Modal visible={showFollowModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <GlassCard
            width={SCREEN_WIDTH * 0.8}
            height={SCREEN_HEIGHT * 0.6}
            style={styles.modalContent}
          >
            <Text style={styles.modalTitle}>フォロー中</Text>
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
                  {renderAvatar(item.iconName, 40, styles.listAvatar)}
                  <Text style={styles.listText}>{item.nickname}</Text>
                </TouchableOpacity>
              )}
            />
        <TouchableOpacity onPress={() => setShowFollowModal(false)} style={styles.modalCloseButtonInside}>
            <GlassCard
              width={120}
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
      <Modal visible={showFollowerModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <GlassCard
            width={SCREEN_WIDTH * 0.8}
            height={SCREEN_HEIGHT * 0.6}
            style={styles.modalContent}
          >
            <Text style={styles.modalTitle}>フォロワー</Text>
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
                  {renderAvatar(item.iconName, 40, styles.listAvatar)}
                  <Text style={styles.listText}>{item.nickname}</Text>
                </TouchableOpacity>
              )}
            />
             <TouchableOpacity onPress={() => setShowFollowerModal(false)} style={styles.modalCloseButtonInside}>
            <GlassCard
              width={120}
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
  } else if (cardName === 'card3') {
    return (
      <>
      <View style={{ marginTop: 32, alignItems: 'center' }}>
        <View style={{
          width: SCREEN_WIDTH * 0.85,
          height: (SCREEN_WIDTH * 0.85) / 1.6,
          overflow: 'hidden',
        }}>
          <GlassCard
            width={SCREEN_WIDTH * 0.85}
            height={(SCREEN_WIDTH * 0.85) / 1.6}
            design="dark"
            style={{ paddingTop: 40 }}
          >
            <View style={{ position: 'absolute', top: 0, alignSelf: 'center', zIndex: 1 }}>
              {photoURL
                ? <Image source={{ uri: photoURL }} style={styles.profileAvatar} />
                : renderAvatar(effectiveIconName, 80, styles.profileAvatar)}
            </View>
            {/* name */}
            <View style={styles.profileNameContainer}>
              <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: -50 }}>
                  <Text style={[styles.profileName, { color: '#fff' }]}>{NickName || '匿名'}</Text>
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
                <Text style={[styles.scoreText, { color: '#fff' }]}>{levelMap[selectedLevel] || selectedLevel}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Ionicons name="cash-outline" size={48} color="#fff" />
                <Text style={[styles.scoreText, { color: '#fff' }]}>₵ {totalPoints}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Ionicons name="checkmark-done-outline" size={48} color="#fff" />
                <Text style={[styles.scoreText, { color: '#fff' }]}>{todayCount}</Text>
              </View>
            </View>
          </GlassCard>
        </View>
      </View>
      {/* Follow List Modal */}
      <Modal visible={showFollowModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <GlassCard
            width={SCREEN_WIDTH * 0.8}
            height={SCREEN_HEIGHT * 0.6}
            style={styles.modalContent}
          >
            <Text style={styles.modalTitle}>フォロー中</Text>
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
                  {renderAvatar(item.iconName, 40, styles.listAvatar)}
                  <Text style={styles.listText}>{item.nickname}</Text>
                </TouchableOpacity>
              )}
            />
        <TouchableOpacity onPress={() => setShowFollowModal(false)} style={styles.modalCloseButtonInside}>
            <GlassCard
              width={120}
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
      <Modal visible={showFollowerModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <GlassCard
            width={SCREEN_WIDTH * 0.8}
            height={SCREEN_HEIGHT * 0.6}
            style={styles.modalContent}
          >
            <Text style={styles.modalTitle}>フォロワー</Text>
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
                  {renderAvatar(item.iconName, 40, styles.listAvatar)}
                  <Text style={styles.listText}>{item.nickname}</Text>
                </TouchableOpacity>
              )}
            />
        <TouchableOpacity onPress={() => setShowFollowerModal(false)} style={styles.modalCloseButtonInside}>
            <GlassCard
              width={120}
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
  } else {
    return (
      <>
      <View style={{ marginTop: 32, alignItems: 'center' }}>
        <View style={{
          width: SCREEN_WIDTH * 0.85,
          height: (SCREEN_WIDTH * 0.85) / 1.6,
        }}>
          <NeomorphBox
            width={SCREEN_WIDTH * 0.85}
            height={(SCREEN_WIDTH * 0.85) / 1.6}
          >
            <View style={{ position: 'absolute', top: 0, alignSelf: 'center', zIndex: 1 }}>
              {photoURL
                ? <Image source={{ uri: photoURL }} style={styles.profileAvatar} />
                : renderAvatar(effectiveIconName, 80, styles.profileAvatar)}
            </View>
            {/* name */}
            <View style={styles.profileNameContainer}>
              <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: -50 }}>
                <Text style={styles.profileName}>{NickName || '匿名'}</Text>
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
                <Text style={styles.scoreText}>{levelMap[selectedLevel] || selectedLevel}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Ionicons name="cash-outline" size={48} color="#777" />
                <Text style={styles.scoreText}>₵ {totalPoints}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Ionicons name="checkmark-done-outline" size={48} color="#777" />
                <Text style={styles.scoreText}>{todayCount}</Text>
              </View>
            </View>
          </NeomorphBox>
        </View>
      </View>
      {/* Follow List Modal */}
      <Modal visible={showFollowModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <GlassCard
            width={SCREEN_WIDTH * 0.95}
            height={SCREEN_HEIGHT * 0.9}
            style={styles.modalContent}
          >
            <Text style={styles.modalTitle}>フォロー中</Text>
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
                  {renderAvatar(item.iconName, 40, styles.listAvatar)}
                  <Text style={styles.listText}>{item.nickname}</Text>
                </TouchableOpacity>
              )}
            />
           <TouchableOpacity onPress={() => setShowFollowModal(false)} style={styles.modalCloseButtonInside}>
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
      <Modal visible={showFollowerModal} transparent={true} animationType="slide">
        <View style={styles.modalOverlay}>
          <GlassCard
            width={SCREEN_WIDTH * 0.95}
            height={SCREEN_HEIGHT * 0.9}
            style={styles.modalContent}
          >
            <Text style={styles.modalTitle}>フォロワー</Text>
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
                  {renderAvatar(item.iconName, 40, styles.listAvatar)}
                  <Text style={styles.listText}>{item.nickname}</Text>
                </TouchableOpacity>
              )}
            />
           <TouchableOpacity onPress={() => setShowFollowModal(false)} style={styles.modalCloseButtonInside}>
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
};

const styles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#555',
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  editIcon: {
    marginLeft: 8,
    color: '#555',
  },
  profileNameContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  scoreText: {
    marginTop: 8,
    fontSize: 18,
    color: '#555',
  },
  editButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 2,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    height: '60%',
    borderRadius: 32,
    backgroundColor: 'rgba(77, 77, 77, 0.6)',
    padding: 16,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.64)',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingVertical: 8,
  },
  listAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  iconImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },

  listText: {
    fontSize: 16,
    color: '#fff',
  },
  modalCloseButton: {
    marginTop: 12,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007AFF',
    borderRadius: 6,
  },
  closeGlassCard: {
    alignSelf: 'center',
    marginTop: 12,
    borderRadius: 32,
  },
  modalCloseButtonInside: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor:'#E3E5F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileCard;

