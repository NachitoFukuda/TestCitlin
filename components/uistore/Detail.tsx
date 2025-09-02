import { WIDGET_CONFIG } from '../../components/uistore/widgetConfig';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ref as dbRef, set as dbSet } from 'firebase/database';
import { auth, rdb } from '../../firebaseConfig'; // adjust the path as needed

const SCREEN_WIDTH = Dimensions.get('window').width;

type ShopItem = {
  id: string;
  name: string;
  price: number;
  widthCells: number;
  heightCells: number;
  tag: 'button' | 'sticker' | 'theme'| 'note';
};

interface DetailProps {
  item: ShopItem;
  onTutorialStepChange?: (step: string) => void;
  onButtonTap?: (buttontap: boolean) => void;
}

export default function Detail({ item, onTutorialStepChange, onButtonTap }: DetailProps) {
  const [purchasesLength, setPurchasesLength] = useState<number>(0);
  useEffect(() => {
    AsyncStorage.getItem('@quiz:purchases')
      .then(json => {
        const arr = json ? JSON.parse(json) : [];
        setPurchasesLength(Array.isArray(arr) ? arr.length : 0);
      });
  }, []);
  // チュートリアルステップ読み込み

  return (
    <View style={styles.container}>
    <View style={styles.containerimg}>
      {(() => {
        const config = WIDGET_CONFIG[item.id as keyof typeof WIDGET_CONFIG];
        const Widget = config?.component;
        const widgetProps = config?.getDefaultProps ? config.getDefaultProps(item) : {};
        return Widget ? (
          <View style={{ marginBottom: 12 , }}>
            <Widget {...widgetProps} />
          </View>
        ) : null;
      })()}
          </View>
    <View style={styles.containertext}>

      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.priceText}>₵ {item.price.toLocaleString()}</Text>
      <View style={styles.gridContainer}>
        <Text style={styles.gridLabel}>Size</Text>
        <View style={styles.gridVisual}>
          {[...Array(item.heightCells)].map((_, row) => (
            <View key={`row-${row}`} style={styles.gridRow}>
              {[...Array(item.widthCells)].map((_, col) => (
                <View key={`cell-${row}-${col}`} style={styles.gridCell} />
              ))}
            </View>
          ))}
        </View>
        <Text style={styles.gridValue}>{item.widthCells} × {item.heightCells}</Text>
      </View>
        {/* 購入ボタン */}
        <View style={styles.containerBtn}>

        <TouchableOpacity
          style={styles.purchaseButton}
          onPress={async () => {
            try {
              // 1. ポイント差し引き
              const ptsJson = await AsyncStorage.getItem('@quiz_points');
              const points = ptsJson ? JSON.parse(ptsJson) : 0;
              if (points < item.price) {
                Alert.alert('エラー', 'ポイントが不足しています');
                return;
              }
              const newPoints = points - item.price;
              await AsyncStorage.setItem('@quiz_points', JSON.stringify(newPoints));
              const storedUid = await AsyncStorage.getItem('@user_uid');
              const writeUid = storedUid ?? auth.currentUser?.uid;
              if (writeUid) {
                const assetRef = dbRef(rdb, `users/${writeUid}/totalPoints`);
                await dbSet(assetRef, newPoints);
              }
              Alert.alert('購入完了', `${item.name} を購入しました！`);
              // チュートリアルステップを保存


              // 3. 購入履歴をオブジェクト形式で更新
              const raw = await AsyncStorage.getItem('@quiz:purchases');
              const purchases: Record<string, ShopItem> = raw ? JSON.parse(raw) : {};
              purchases[item.id] = item;
              await AsyncStorage.setItem('@quiz:purchases', JSON.stringify(purchases));
              setPurchasesLength(Object.keys(purchases).length);
            } catch (e) {
              console.error('[Detail] purchase error:', e);
              Alert.alert('エラー', '購入処理に失敗しました');
            }
          }}
        >

            <View style={styles.buttonContent}>
              <Text style={styles.purchaseButtonText}>購入する</Text>
            </View>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

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
});
