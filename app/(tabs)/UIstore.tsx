import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useRouter } from 'expo-router';

// 画面サイズとセル数の計算
const windowWidth = Dimensions.get('window').width;
const { height } = Dimensions.get('window');
// 画面両端の container.padding (16*2) と widgetArea.padding (12*2) を差し引き
const availableWidth = windowWidth - 16 * 2 - 12 * 2;
const smallCell = availableWidth / 4;
const headerHeight = 60 + 20;                // ヘッダー余白（例）
const footerHeight = 150 + 20;               // フッター余白（例）
const availableHeight = height - headerHeight - footerHeight;
const rowCount = Math.floor(availableHeight / smallCell);

type ShopItem = {
  id: string;
  name: string;
  price: number;
  widthCells: number;
  heightCells: number;
};

const SHOP_ITEMS: ShopItem[] = [
  { id: 'sticker01', name: 'キャラクターステッカー',   price: 0, widthCells: 2, heightCells: 2 },
  { id: 'themeA',    name: 'ダークテーマ切り替え',     price: 0, widthCells: 4, heightCells: 2 },
  { id: 'questionbuttons',    name: 'スタートボタン',     price: 0, widthCells: 2, heightCells: 1 },

  // …他アイテム
];

const POINTS_KEY    = '@quiz_points';
const PURCHASES_KEY = '@quiz:purchases';
const POSITIONS_KEY = '@quiz:positions';

export default function UILayout() {
  const [points,    setPoints]    = useState<number>(0);
  const [purchases, setPurchases] = useState<Record<string, ShopItem>>({});
  const [positions, setPositions] = useState<Record<string, { gridX: number; gridY: number }>>({});

  useEffect(() => {
    (async () => {
      // ポイント読み込み
      const pts = await AsyncStorage.getItem(POINTS_KEY);
      const loadedPoints = pts ? JSON.parse(pts) : 0;
      console.log('[UILayout] loaded points:', loadedPoints);
      setPoints(loadedPoints);

      // 購入データ読み込み
      const pur = await AsyncStorage.getItem(PURCHASES_KEY);
      const loadedPurchases = pur ? JSON.parse(pur) : {};
      console.log('[UILayout] loaded purchases:', loadedPurchases);
      setPurchases(loadedPurchases);

      // 配置データ読み込み
      const pos = await AsyncStorage.getItem(POSITIONS_KEY);
      const loadedPositions = pos ? JSON.parse(pos) : {};
      console.log('[UILayout] loaded positions:', loadedPositions);
      setPositions(loadedPositions);
    })();
  }, []);

  // 購入処理
  const buyItem = async (item: ShopItem) => {
    if (points < item.price) {
      Alert.alert('エラー', 'ポイントが不足しています');
      return;
    }
    const newPoints    = points - item.price;
    const newPurchases = { ...purchases, [item.id]: item };

    await AsyncStorage.setItem(POINTS_KEY, JSON.stringify(newPoints));
    await AsyncStorage.setItem(PURCHASES_KEY, JSON.stringify(newPurchases));
    // state 更新
    setPoints(newPoints);
    setPurchases(newPurchases);
    Alert.alert('購入完了', `${item.name} を購入しました！`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>あなたのポイント: {points} pt</Text>

      <TouchableOpacity
        style={[styles.button, { marginBottom: 12 }]}
        onPress={() => router.push('/UILayout')}
      >
        <Text style={styles.buttonText}>レイアウト画面へ移動</Text>
      </TouchableOpacity>

      {/* 商品リスト */}
      <FlatList
        data={SHOP_ITEMS}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
            <View style={[styles.item, { marginBottom: 0 }]}>
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price} pt</Text>
            </View>
            <TouchableOpacity
              style={[
              styles.button,
              purchases[item.id] && styles.buttonDisabled,
              ]}
              disabled={!!purchases[item.id]}
              onPress={() => buyItem(item)}
            >
              <Text style={styles.buttonText}>
              {purchases[item.id] ? '購入済み' : '購入する'}
              </Text>
            </TouchableOpacity>
            </View>
        )}
        ListEmptyComponent={<Text>ショップアイテムがありません</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:          { flex: 1, padding: 16, backgroundColor: '#F5F5F5', alignItems: 'center' },
  header:             { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  item:               { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, backgroundColor: '#FFF', marginBottom: 8, borderRadius: 8 },
  name:               { fontSize: 16 },
  price:              { fontSize: 14, color: '#888' },
  button:             { backgroundColor: '#4CAF50', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 4 },
  buttonDisabled:     { backgroundColor: '#AAA' },
  buttonText:         { color: '#FFF', fontWeight: 'bold' },
});