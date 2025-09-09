import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity, Dimensions, Image, ImageSourcePropType } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, rdb } from '../../firebaseConfig'; // adjust the path as needed
import { ref as dbRef, set as dbSet } from 'firebase/database';
import { Ionicons } from '@expo/vector-icons';
import NeomorphBox from '../ui/NeomorphBox';
import GlassCard from '../ui/GlassCard';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH * 0.8;
const CARD_HIGHT = CARD_WIDTH / 1.6;


interface ProfileDetailProps {
  item: string;
  onClose: () => void;
  onPurchase: (item: string) => void;
}

const iconCosts: { [key: string]: number } = {
    'icon1': 10,
    'icon2': 200,
    'icon3': 400,
    'icon4': 800,
    'icon5': 1600,
    'icon6': 3200,
    'icon7': 6400,
    'icon8': 12800,
  // 'person-circle-outline' is free
};
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

// Background card IDs and costs
const cardIds: string[] = [ 'card2', 'card3',];
const cardCosts: { [key: string]: number } = {
  'card2': 20,
  'card3': 400,
};

const ProfileDetail: React.FC<ProfileDetailProps> = ({ item, onClose, onPurchase }) => {
  const [purchasedIcons, setPurchasedIcons] = useState<string[]>([]);
  const [purchasedCards, setPurchasedCards] = useState<string[]>([]);
  const [currentPoints, setCurrentPoints] = useState<number>(0);
  // 購入済みアイコンの一覧を保持

useEffect(() => {
  (async () => {
    const json = await AsyncStorage.getItem('@purchasedIcons');
    const raw = json ? JSON.parse(json) : [];
    let icons: string[] = Array.isArray(raw) ? raw : [];
    // Remove any card entries from icons list
    icons = icons.filter(icon => !icon.includes('card'));
    // Ensure uniqueness
    icons = Array.from(new Set(icons));
    if (!icons.includes('person-circle-outline')) {
      icons = ['person-circle-outline', ...icons];
    }
    // Persist cleaned icons list
    await AsyncStorage.setItem('@purchasedIcons', JSON.stringify(icons));
    setPurchasedIcons(icons);
  })();
}, []);

useEffect(() => {
  (async () => {
    const json = await AsyncStorage.getItem('@purchasedCards');
    setPurchasedCards(json ? JSON.parse(json) : []);
  })();
}, []);

useEffect(() => {
  (async () => {
    const ptsJson = await AsyncStorage.getItem('@quiz_points');
    const pts = ptsJson ? JSON.parse(ptsJson) : 0;
    setCurrentPoints(pts);
  })();
}, []);

  const handlePurchase = async (): Promise<boolean> => {
    // 1. ポイント差し引き
    const ptsJson = await AsyncStorage.getItem('@quiz_points');
    const points = ptsJson ? JSON.parse(ptsJson) : 0;
    const cost = item.includes('card') ? (cardCosts[item] || 0) : (iconCosts[item] || 0);
    if (points < cost) {
      Alert.alert('エラー', 'ポイントが不足しています');
      return false;
    }
    const newPoints = points - cost;
    await AsyncStorage.setItem('@quiz_points', JSON.stringify(newPoints));
    const storedUid = await AsyncStorage.getItem('@user_uid');
    const writeUid = storedUid ?? auth.currentUser?.uid;
    if (writeUid) {
      const assetRef = dbRef(rdb, `users/${writeUid}/totalPoints`);
      await dbSet(assetRef, newPoints);
    }    // リアルタイムDBにも保存

    if (item.includes('card')) {
      // Save to purchasedCards
      const updatedCards = [...new Set([...purchasedCards, item])];
      await AsyncStorage.setItem('@purchasedCards', JSON.stringify(updatedCards));
      setPurchasedCards(updatedCards);
      // Also clean any card entries from icons storage
      const iconsJson = await AsyncStorage.getItem('@purchasedIcons');
      const iconsRaw = iconsJson ? JSON.parse(iconsJson) : [];
      let iconsArr: string[] = Array.isArray(iconsRaw) ? iconsRaw : [];
      iconsArr = iconsArr.filter(icon => !icon.includes('card'));
      iconsArr = Array.from(new Set(iconsArr));
      await AsyncStorage.setItem('@purchasedIcons', JSON.stringify(iconsArr));
      setPurchasedIcons(iconsArr);
    } else {
      const updatedIcons = [...new Set([...purchasedIcons, item])];
      await AsyncStorage.setItem('@purchasedIcons', JSON.stringify(updatedIcons));
      setPurchasedIcons(updatedIcons);
    }
    return true;
  };

  return (
    <View style={styles.container}>
    <Text style={{
       position: 'absolute',
       top: 80,
       right: 32,
       zIndex: 10,
       fontSize: 24,
       color: '#333',
    }}>
       ₵ {currentPoints}
     </Text>
    <TouchableOpacity style={styles.backIcon} onPress={onClose}>
        <Ionicons name="chevron-back" size={34} color="#000" />
      </TouchableOpacity>
    <View style={styles.containerimg}>
      {/* プレビュー: アイコン or カード */}
      {cardIds.includes(item) ? (
        item === 'card2' ? (
          <GlassCard width={CARD_WIDTH} height={CARD_HIGHT}>
            <Text style={{ fontSize: 18, color: '#333' }}>{item}</Text>
          </GlassCard>
        ) : item === 'card3' ? (
          <GlassCard width={CARD_WIDTH} height={CARD_HIGHT} design="dark">
            <Text style={{ fontSize: 18, color: '#333' }}>{item}</Text>
          </GlassCard>
        ) : (
          <NeomorphBox
            width={CARD_WIDTH}
            height={CARD_HIGHT}
            style={{ alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ fontSize: 18, color: '#333' }}>{item}</Text>
          </NeomorphBox>
        )
      ) : (
        /* アイコンプレビュー */
        item === 'person-circle-outline' ? (
          <Ionicons
            name="person-circle-outline"
            size={240}
            color="#888"
            style={styles.detailIcon}
          />
        ) : iconSources[item] ? (
          <Image
            source={iconSources[item]}
            style={[styles.detailIcon, { width: 240, height: 240, borderRadius: 120 }]}
          />
        ) : (
          <Ionicons
            name="person-circle-outline"
            size={240}
            color="#888"
            style={styles.detailIcon}
          />
        )
      )}
      {/* 価格表示 */}
    </View>
    <Text style={styles.detailPriceText}>
      ₵ {item in cardCosts ? cardCosts[item] : iconCosts[item] || 0}
    </Text>

    <View style={styles.containerBtn}>
      { (cardIds.includes(item) ? purchasedCards.includes(item) : purchasedIcons.includes(item)) ? (
        <TouchableOpacity
          style={styles.purchaseButton}
          onPress={() => {
            if (!item.includes('card')) {
              onPurchase(item);
            }
            onClose();
          }}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.purchaseButtonText}>
              {cardIds.includes(item) ? 'このカードを使用する' : 'このアイコンを使用する'}
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.purchaseButton}
          onPress={async () => {
            const success = await handlePurchase();
            if (success) {
              Alert.alert('購入完了', `${item} を${(cardIds.includes(item) ? cardCosts[item] : iconCosts[item]) || 0}コインで購入しました\n残高: ${JSON.parse(await AsyncStorage.getItem('@quiz_points') || '0')}コイン`);
              // Always notify parent of purchase for both icons and cards
              onPurchase(item);
              onClose();
            }
          }}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.purchaseButtonText}>購入する</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgb(255, 255, 255)',
      borderRadius: 40,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
    },
    containerimg: {
      backgroundColor: '#E3E5F2',
      borderBottomLeftRadius: SCREEN_WIDTH / 1.2,
      borderBottomRightRadius: SCREEN_WIDTH /1.2,
      width: SCREEN_WIDTH * 1.7,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:50,
      flex:1,
      zIndex:2
    },
    containertext: {
      padding: 10,
      width: SCREEN_WIDTH,
      alignItems: 'center',
      flex:1,
    },
    containerBtn: {
      alignItems: 'center',
      zIndex: 2,
      position: 'absolute',
      bottom: 40,
      width: '100%',
    },
  
    widgetTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 8,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 10,
      alignSelf: 'flex-start',
      textAlign: 'left',
      paddingHorizontal: 20,
    },
    purchaseButton: {
      backgroundColor: '#000',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 24,
      width: '80%',
    },
    purchaseButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    },
    gridContainer: {
      alignItems: 'center',
      padding: 20,
      borderRadius: 12,
      marginVertical: 15,
    },
    gridLabel: {
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.6)',
      marginBottom: 12,
    },
    gridVisual: {
      gap: 4,
      marginBottom: 12,
    },
    gridRow: {
      flexDirection: 'row',
      gap: 4,
    },
    gridCell: {
      width: 24,
      height: 24,
      backgroundColor: '#000',
      borderRadius: 4,
    },
    gridValue: {
      fontSize: 16,
      fontWeight: '600',
      color: '#000',
    },
    priceText: {
      fontSize: 24,
      fontWeight: '300',
      color: '#333',
      alignSelf: 'flex-start',
      paddingHorizontal: 20,
      marginTop:10,
      marginBottom: 10,
    },
    buttonContent: {
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    tapIndicatorContainer: {
      position: 'absolute',
      top: -90, // 半分のサイズ分上に移動
      left: '50%',
      marginLeft: -100, // 半分のサイズ分左に移動
      zIndex: 1,
    },
    backIcon: {
      position: 'absolute',
      top: 64,
      left: 32,
      zIndex: 10,
    },

  detailIcon: {
    marginTop: 32,
  },
  detailPriceText: {
    fontSize: 42,
    color: '#666',
    alignSelf: 'flex-start',
    paddingHorizontal: 50,
    marginBottom: 150,
  }
});

export default ProfileDetail;
