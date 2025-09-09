import React, { useState, ComponentProps, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Dimensions, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rdb, auth } from '../../firebaseConfig';
import { ref as dbRef, set as dbSet, onValue } from 'firebase/database';
import { updateProfile } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';
import NeomorphBox from '../ui/NeomorphBox';
import GlassCard from '../ui/GlassCard';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

import { ImageSourcePropType } from 'react-native';
import ProfileDetail from './ProfileDetail';

type IconName = string;
const iconList: IconName[] = [
    'icon1',
    'icon2',
    'icon3',
    'icon4',
    'icon5',
    'icon6',
    'icon7',
    'icon8',
];

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

const iconCosts: { [key in IconName]?: number } = {
    'icon1': 100,
    'icon2': 200,
    'icon3': 400,
    'icon4': 800,
    'icon5': 1600,
    'icon6': 3200,
    'icon7': 6400,
    'icon8': 12800,
  // 'person-circle-outline' is free
};

// Background card IDs and costs
const cardIds: string[] = [ 'card2', 'card3'];


type Props = {
  onClose: () => void;
};

export default function EditProfileModal({ onClose }: Props) {
  const [detailIcon, setDetailIcon] = useState<IconName | null>(null);
  const [isChangingName, setIsChangingName] = useState(false);
  const [newName, setNewName] = useState<string>(auth.currentUser?.displayName || '');
  const [selectedIcon, setSelectedIcon] = useState<IconName>(iconList[0]);
  const [isChangingIcon, setIsChangingIcon] = useState(false);
  const [isChangingCard, setIsChangingCard] = useState(false);
  const [purchasedIcons, setPurchasedIcons] = useState<IconName[]>([]);
  const [showProfileDetail, setShowProfileDetail] = useState(false);
  const [dbIconName, setDbIconName] = useState<string>('');
  const [purchasedCards, setPurchasedCards] = useState<string[]>([]);
  // Determine which icon to display in preview: live selection vs. saved DB icon
  const displayedIcon = isChangingIcon ? selectedIcon : dbIconName;
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [todayCount, setTodayCount] = useState<number>(0);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [selectedCard, setSelectedCard] = useState<string>(cardIds[0]);
  const [dbCardName, setDbCardName] = useState<string>('');
  const [NickName, setNickName] = useState<string>('匿名');

  // Only show purchased icons (or default); otherwise fallback to default
  const effectiveDisplayedIcon = purchasedIcons.includes(displayedIcon)
    ? displayedIcon
    : 'person-circle-outline';
  // Determine which card to display: live selection vs saved DB card
  const displayedCard = isChangingCard ? selectedCard : dbCardName;
  // Only show purchased cards; otherwise fallback to card1
  const effectiveDisplayedCard = purchasedCards.includes(displayedCard)
    ? displayedCard
    : 'card1';
useEffect(() => {
  const user = auth.currentUser;
  if (!user) return;
  const cardRef = dbRef(rdb, `users/${user.uid}/cardName`);
  const unsubscribeCard = onValue(cardRef, snapshot => {
    const val = snapshot.val();
    if (typeof val === 'string') {
      setDbCardName(val);
    }
  });
  return () => { unsubscribeCard(); };
}, []);
  const user = auth.currentUser;
  const photoURL = user?.photoURL;


useEffect(() => {
  const user = auth.currentUser;
  if (!user) return;
  const iconRef = dbRef(rdb, `users/${user.uid}/iconName`);
  let unsubscribe: (() => void) | undefined;
  (async () => {
    const levelJson = await AsyncStorage.getItem('@selected_levels');
    const level = levelJson ? JSON.parse(levelJson)[0] : '1';
    setSelectedLevel(level);
    unsubscribe = onValue(iconRef, snapshot => {
      const val = snapshot.val();
      if (typeof val === 'string') {
        setDbIconName(val as React.ComponentProps<typeof Ionicons>['name']);
      }
    });
  })();
  return () => {
    if (unsubscribe) unsubscribe();
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
    const user = auth.currentUser;
    if (!user) return;
    // ユーザーの所持金(totalPoints)を監視する参照
    const pointsRef = dbRef(rdb, `users/${user.uid}/totalPoints`);
    // 値の変化を監視し、取得できれば setTotalPoints にセットする
    const unsubscribePoints = onValue(pointsRef, snapshot => {
      const val = snapshot.val();
      setTotalPoints(typeof val === 'number' ? val : 0);
    });
    // コンポーネントがアンマウントされたらリスナーを解除
    return () => {
      unsubscribePoints();
    };
  }, []);


  useEffect(() => {
    (async () => {
      const json = await AsyncStorage.getItem('@purchasedIcons');
      setPurchasedIcons(json ? JSON.parse(json) : []);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const json = await AsyncStorage.getItem('@purchasedCards');
      const cards: string[] = json ? JSON.parse(json) : [];
      setPurchasedCards(cards);
    })();
  }, []);

  useEffect(() => {
    // Log whenever purchasedCards state changes
    const unpurchasedList = cardIds.filter(id => !purchasedCards.includes(id));
  }, [purchasedCards]);

  // 購入処理: 指定アイコンをゲーム内ポイントで購入
// 購入処理: 指定アイコンをゲーム内ポイントで購入
const purchaseIcon = async (iconName: IconName): Promise<boolean> => {
    const ptsJson = await AsyncStorage.getItem('@quiz_points');
    const points = ptsJson ? JSON.parse(ptsJson) : 0;
    const cost = iconCosts[iconName] || 0;
    if (points < cost) {
      Alert.alert('エラー', 'ポイントが不足しています');
      return false;
    }
    const newPoints = points - cost;
    // 残高をAsyncStorageとRealtimeDBに保存
    await AsyncStorage.setItem('@quiz_points', JSON.stringify(newPoints));
    const user = auth.currentUser;
    const uid = user?.uid;
    if (uid) {
      const pointsRef = dbRef(rdb, `users/${uid}/totalPoints`);
      await dbSet(pointsRef, newPoints);
    }
    // 購入済みアイコン一覧を更新し、AsyncStorageにも保存
    const updated = [...purchasedIcons, iconName];
    await AsyncStorage.setItem('@purchasedIcons', JSON.stringify(updated));
    setPurchasedIcons(updated);
    return true;
  };


  const levelMap: { [key: string]: string } = {
    '1': '1級',
    '1_5': '準1級',
    '2': '2級',
    '2_5': '準2級',
    '3': '3級',
  };

if (showProfileDetail) {
  return (
    <ProfileDetail
      item={selectedIcon}
      onClose={() => setShowProfileDetail(false)}
      onPurchase={async (icon) => {
        const success = await purchaseIcon(icon);
        if (success) {
          setDetailIcon(null);
          setShowProfileDetail(false);
          // Return to the correct change mode
          if (cardIds.includes(icon)) {
            // Update purchasedCards state immediately and select the new card
            const updatedCards = [...purchasedCards, icon];
            setPurchasedCards(updatedCards);
            // Persist purchased cards list
            await AsyncStorage.setItem('@purchasedCards', JSON.stringify(updatedCards));
            setSelectedCard(icon);
            setIsChangingCard(true);
          } else {
            // Update purchased icons list immediately and select the new icon
            const updatedIcons = [...purchasedIcons, icon];
            setPurchasedIcons(updatedIcons);
            // Persist to AsyncStorage
            await AsyncStorage.setItem('@purchasedIcons', JSON.stringify(updatedIcons));
            // Set as selected and enter icon change mode
            setSelectedIcon(icon);
            setIsChangingIcon(true);
          }
        }
      }}
    />
  );
}

  return (
    <View style={styles.flexContainer}>
      <View style={styles.modalContainer}>
      <View style={{ marginTop: 32, overflow: 'visible', alignItems: 'center' }}>
        <View style={{ position: 'absolute', top: 0, alignSelf: 'center', zIndex: 1 }}>
          {/* avatar */}
          {photoURL ? (
            <Image source={{ uri: photoURL }} style={styles.profileAvatar} />
          ) : iconSources[effectiveDisplayedIcon] ? (
            <Image source={iconSources[effectiveDisplayedIcon]} style={styles.profileAvatar} />
          ) : (
            <Ionicons name="person-circle-outline" size={80} color="#777" style={styles.profileAvatar} />
          )}
        </View>
        {(effectiveDisplayedCard === 'card2' || effectiveDisplayedCard === 'card3') ? (
          <GlassCard
            width={SCREEN_WIDTH * 0.85}
            height={(SCREEN_WIDTH * 0.85) / 1.6}
            {...(effectiveDisplayedCard === 'card3' ? { design: 'dark' } : {})}
            style={{ paddingTop: 40 }}
          >
            {/* name */}
            <View style={styles.profileNameContainer}>
              <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: -50 }}>
                  <Text
                    style={[
                      styles.profileName,
                      effectiveDisplayedCard === 'card3' && { color: '#fff' },
                    ]}
                  >
                    {isChangingName ? newName : (NickName || '匿名')}
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 24, position: 'absolute', top: -20 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: effectiveDisplayedCard === 'card3' ? '#fff' : '#666',
                    }}
                  >
                    フォロー 0
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: effectiveDisplayedCard === 'card3' ? '#fff' : '#666',
                    }}
                  >
                    フォロワー 0
                  </Text>
                </View>
              </View>
            </View>
            {/* stats */}
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10 }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Ionicons
                  name="school-outline"
                  size={48}
                  color={effectiveDisplayedCard === 'card3' ? '#fff' : '#777'}
                />
                <Text
                  style={[
                    styles.scoreText,
                    effectiveDisplayedCard === 'card3' && { color: '#fff' },
                  ]}
                >
                  {levelMap[selectedLevel] || selectedLevel}
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Ionicons
                  name="cash-outline"
                  size={48}
                  color={effectiveDisplayedCard === 'card3' ? '#fff' : '#777'}
                />
                <Text
                  style={[
                    styles.scoreText,
                    effectiveDisplayedCard === 'card3' && { color: '#fff' },
                  ]}
                >
                  ₵ {totalPoints}
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Ionicons
                  name="checkmark-done-outline"
                  size={48}
                  color={effectiveDisplayedCard === 'card3' ? '#fff' : '#777'}
                />
                <Text
                  style={[
                    styles.scoreText,
                    effectiveDisplayedCard === 'card3' && { color: '#fff' },
                  ]}
                >
                  {todayCount}
                </Text>
              </View>
            </View>
          </GlassCard>
        ) : (
          <NeomorphBox
            width={SCREEN_WIDTH * 0.85}
            height={(SCREEN_WIDTH * 0.85) / 1.6}
            style={{ paddingTop: 40 }}
          >
            {/* name */}
            <View style={styles.profileNameContainer}>
              <View style={{ alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: -50 }}>
                <Text style={styles.profileName}>{isChangingName ? newName : (NickName || '匿名')}</Text>
                </View>
                <View style={{ flexDirection: 'row', gap: 24, position: 'absolute', top: -20 }}>
                  <Text style={{ fontSize: 12, color: '#666' }}>フォロー 0</Text>
                  <Text style={{ fontSize: 12, color: '#666' }}>フォロワー 0</Text>
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
        )}
      </View>
      {!(isChangingIcon || isChangingName || isChangingCard) && (
          <TouchableOpacity onPress={onClose} style={styles.backButton}>
        <Ionicons name="chevron-back" size={34} color="#888" />
        </TouchableOpacity>
        )}

            {/* Back button when any mode is active */}
            {(isChangingIcon || isChangingName || isChangingCard) && (
              <TouchableOpacity
                style={styles.backButton}
                onPress={async () => {
                  if (isChangingIcon) {
                    // existing icon-commit code
                    const user = auth.currentUser;
                    if (user) {
                      const uid = user.uid;
                      const iconRef = dbRef(rdb, `users/${uid}/iconName`);
                      await dbSet(iconRef, selectedIcon);
                      await AsyncStorage.setItem('@user_iconName', selectedIcon);
                    }
                    setIsChangingIcon(false);
                  } else if (isChangingCard) {
                    // Save selected card under users/${uid}/cardName in Realtime DB
                    const user = auth.currentUser;
                    if (user) {
                      const uid = user.uid;
                      const cardNameRef = dbRef(rdb, `users/${uid}/cardName`);
                      await dbSet(cardNameRef, selectedCard);
                      await AsyncStorage.setItem('@user_cardName', selectedCard);
                    }
                    setIsChangingCard(false);
                  } else {
                    // Save name when in name-change mode
                    const user = auth.currentUser;
                    if (user) {
                      await updateProfile(user, { displayName: newName });
                      const uid = user.uid;
                      const nameRef = dbRef(rdb, `users/${uid}/nickname`);
                      await dbSet(nameRef, newName);
                      await AsyncStorage.setItem('@user_displayName', newName);
                    }
                    setIsChangingName(false);
                  }
                }}
              >
        <Ionicons name="chevron-back" size={34} color="#888" />
      </TouchableOpacity>
            )}

            {/* Icon change mode */}
            {isChangingIcon && (
              <>
                <View style={styles.iconColumnsContainer}>
                  {/* 使用可能アイコン列 */}
                  <View style={styles.iconColumn}>
                    <Text style={styles.columnTitle}>使用可能</Text>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.iconOptionsContainer}
                    >
                        {['person-circle-outline', ...iconList.filter(icon => purchasedIcons.includes(icon))].map(iconName => (
                          <TouchableOpacity
                            key={iconName}
                            disabled={purchasedIcons.length === 0}
                            onPress={() => {
                              setSelectedIcon(iconName);
                            }}
                            style={[
                              styles.iconOption,
                              purchasedIcons.length === 0 && iconName === 'person-circle-outline' ? { opacity: 0.3 } : {},
                              selectedIcon === iconName && styles.iconOptionSelected,
                            ]}
                          >
                            {iconName === 'person-circle-outline' ? (
                              <Ionicons name="person-circle-outline" size={48} color="#777" style={styles.iconImage} />
                            ) : (
                              <Image source={iconSources[iconName]} style={styles.iconImage} />
                            )}
                          </TouchableOpacity>
                        ))}
                    </ScrollView>
                  </View>
                  {/* 未購入アイコン列 */}
                  <View style={styles.iconColumn}>
                    <Text style={styles.columnTitle}>未購入</Text>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.iconOptionsContainer}
                    >
                      {iconList
                        .filter(icon => icon !== 'person-circle-outline' && !purchasedIcons.includes(icon))
                        .map(iconName => (
                          <TouchableOpacity
                            onPress={() => {
                              setSelectedIcon(iconName);
                              setShowProfileDetail(true);
                            }}
                            activeOpacity={0.7}
                            style={{ marginRight: 12 }}
                            key={iconName}
                          >
                            <NeomorphBox
                              width={100}
                              height={125}
                              style={{
                                alignItems: 'center',
                                justifyContent: 'flex-end', // push text down
                                paddingBottom: 12 // give space for the cost text
                              }}
                            >
                              <View
                                style={{
                                  position: 'absolute',
                                  top: 10, // half of icon size to overlap
                                  alignSelf: 'center',
                                }}
                              >
                                <Image
                                  source={iconSources[iconName] || { uri: iconName }}
                                  style={styles.iconImage}
                                />
                              </View>
                              <Text style={styles.iconCostText}>
                                ₵ {iconCosts[iconName]}
                              </Text>
                            </NeomorphBox>
                          </TouchableOpacity>
                        ))}
                    </ScrollView>
                  </View>
                </View>
              </>
            )}

            {/* Name change mode */}
            {isChangingName && (
              <>
                <TextInput
                  value={newName}
                  onChangeText={text => setNewName(text)}
                  placeholder="新しい名前を入力"
                  placeholderTextColor="#ccc"
                  style={styles.nameInput}
                />
              </>
            )}

            {/* Card change mode */}
            {isChangingCard && (
              <View style={styles.iconColumnsContainer}>
                {/* 使用可能カード */}
                <View style={styles.iconColumn}>
                  <Text style={styles.columnTitle}>使用可能</Text>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.iconOptionsContainer}
                  >
                    {Array.from(new Set(['card1', ...purchasedCards])).map(cardId => (
                      <TouchableOpacity
                        key={cardId}
                        onPress={() => {
                          setSelectedCard(cardId);
                        }}
                        style={[
                          styles.iconOption,
                          selectedCard === cardId && styles.selectedCardOption,
                        ]}
                      >
                        {cardId === 'card2' ? (
                          <GlassCard width={200} height={200 / 1.6}>
                            <Text style={styles.demoCardText}>{cardId}</Text>
                          </GlassCard>
                        ) : cardId === 'card3' ? (
                          <GlassCard width={200} height={200 / 1.6} design="dark">
                            <Text style={[styles.demoCardText, { color: '#fff' }]}>{cardId}</Text>
                          </GlassCard>
                        ) : (
                          <NeomorphBox width={200} height={200 / 1.6}>
                            <Text style={styles.demoCardText}>{cardId}</Text>
                          </NeomorphBox>
                        )}
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
                {/* 未購入カード */}
                <View style={styles.iconColumn}>
                  <Text style={styles.columnTitle}>未購入</Text>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.iconOptionsContainer}
                  >
                    {cardIds.filter(id => !purchasedCards.includes(id)).map(cardId => (
                      <TouchableOpacity
                        key={cardId}
                        onPress={() => {
                          setSelectedIcon(cardId);
                          setShowProfileDetail(true);
                        }}
                        style={styles.iconOption}
                      >
                        {cardId === 'card2' ? (
                          <GlassCard width={200} height={200 / 1.6}>
                            <Text style={styles.demoCardText}>{cardId}</Text>
                          </GlassCard>
                        ) : cardId === 'card3' ? (
                          <GlassCard width={200} height={200 / 1.6} design="dark">
                            <Text style={[styles.demoCardText, { color: '#fff' }]}>{cardId}</Text>
                          </GlassCard>
                        ) : (
                          <NeomorphBox
                            width={200}
                            height={200 / 1.6}
                          >
                            <Text style={styles.demoCardText}>{cardId}</Text>
                          </NeomorphBox>
                        )}
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </View>
            )}

            {/* Default: show three buttons */}
            {!(isChangingIcon || isChangingName || isChangingCard) && (
              <View style={styles.buttonGroup}>
                {/* アイコンを変更 */}
                <View style={styles.listContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedIcon(dbIconName || iconList[0]);
                      setIsChangingIcon(true);
                    }}
                    style={styles.listItem}
                  >
                    <Text style={styles.listItemText}>アイコンを変更</Text>
                    <Ionicons name="chevron-forward" size={20} color="#B0B0B0" />
                  </TouchableOpacity>
                </View>
                {/* 名前を変更 */}
                <View style={[styles.listContainer, styles.nameBorder]}>
                  {!isChangingName ? (
                    <TouchableOpacity onPress={() => setIsChangingName(true)} style={styles.listItem}>
                      <Text style={styles.listItemText}>名前を変更</Text>
                      <Ionicons name="chevron-forward" size={20} color="#B0B0B0" />
                    </TouchableOpacity>
                  ) : (
                    null
                  )}
                </View>
                {/* カードを変更 */}
                <View style={styles.listContainer}>
                  <TouchableOpacity onPress={() => setIsChangingCard(true)} style={styles.listItem}>
                    <Text style={styles.listItemText}>カードを変更</Text>
                    <Ionicons name="chevron-forward" size={20} color="#B0B0B0" />
                  </TouchableOpacity>
                </View>
              </View>
            )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#E3E5F2',
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 60,
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  // Removed old row/button styles in favor of new list styles
  nameInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
  },
  saveNameButton: {
    marginTop: 12,
    paddingVertical: 12,
    backgroundColor: '#28a745',
    borderRadius: 8,
    alignItems: 'center',
  },
  saveNameButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  iconOptionsContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  iconOption: {
    padding: 8,
    marginRight: 12,
    borderRadius: 12,
  },
  iconOptionSelected: {
    borderWidth: 3,
    borderColor: '#007AFF', // iOS blue
    backgroundColor: 'rgba(0,122,255,0.2)', // light blue glow
    borderRadius: 12,
  },
  confirmIconButton: {
    marginTop: 12,
    paddingVertical: 10,
    backgroundColor: '#4169e1',
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmIconButtonDisabled: {
    backgroundColor: '#aaa',
  },
  confirmIconButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  changeIconButton: {
    marginTop: 16,
    paddingVertical: 12,
    backgroundColor: '#4169e1',
    borderRadius: 8,
    alignItems: 'center',
  },
  iconOptionLocked: {
    opacity: 0.3,
  },
  iconColumnsContainer: {
    flexDirection: 'column',
  },
  iconColumn: {
    marginVertical: 8,
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'#666',
    textAlign: 'left',
  },
  iconCostText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
    position:'absolute',
    bottom:20,
    left:15
  },
  detailNavButton: {
    marginTop: 16,
    paddingVertical: 12,
    backgroundColor: '#888',
    borderRadius: 8,
    alignItems: 'center',
  },
  detailNavButtonText: {
    color: 'white',
    fontSize: 16,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileNameContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  profileNameContainer2:{
    marginTop: 40,
    alignItems: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  scoreText: {
    marginTop: 8,
    fontSize: 18,
    color: '#555',
  },
  scoreText1: {
    marginTop: 4,
    fontSize: 15,
    color: '#555',
  },
  listContainer: {
    borderRadius: 0,
    overflow: 'hidden',
    marginVertical: 0,
  },
  buttonGroup: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    marginVertical: 16,
    overflow: 'hidden',
    marginTop:14,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  listItemText: {
    fontSize: 16,
    color: '#333333',
  },
  closeButton: {
  },
  closeButtonText: {
    color: '#00f',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  demoContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  demoCard: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  demoCardText: {
    fontSize: 14,
    color: '#333',
  },
  nameBorder: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    marginTop:16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },

  backButtonText: {
    fontSize: 16,
    color: '#4169e1',
  },
  iconImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    resizeMode: 'contain',
  },
  selectedCardOption: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
});


