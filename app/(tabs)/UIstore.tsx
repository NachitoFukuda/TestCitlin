import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import TapIndicator from '../../components/ui/TapIndicator';
import { View as RNView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '@/components/ui/Footer';
import { WIDGET_CONFIG } from '@/components/uistore/widgetConfig';

// 画面サイズとセル数の計算
import { WidgetId } from '@/components/uistore/widgetConfig';
import { ScrollView } from 'react-native';
import { useFocusEffect } from 'expo-router';

// UIstore.tsx 上部
type ShopItem = {
  id: WidgetId;
  name: string;
  price: number;
  widthCells: number;
  heightCells: number;
  tag: 'button' | 'sticker' | 'theme';  // タグを明示
};


const SHOP_ITEMS: ShopItem[] = [
  { id: 'start01', name: 'スタートボタン1', price: 0, widthCells: 2, heightCells: 1, tag: 'button' },
  { id: 'start02', name: 'スタートボタン2', price: 0, widthCells: 4, heightCells: 1, tag: 'button' },
  { id: 'start03', name: 'スタートボタン3', price: 0, widthCells: 2, heightCells: 1, tag: 'button' },
  { id: 'start04', name: 'スタートボタン4', price: 0, widthCells: 4, heightCells: 1, tag: 'button' },
  { id: 'start05', name: 'スタートボタン5', price: 0, widthCells: 2, heightCells: 1, tag: 'button' },
  { id: 'start06', name: 'スタートボタン6', price: 0, widthCells: 4, heightCells: 1, tag: 'button' },
  { id: 'chach01', name: '残高確認1', price: 0, widthCells: 2, heightCells: 1, tag: 'sticker' },
  { id: 'chach02', name: '残高確認2', price: 0, widthCells: 4, heightCells: 1, tag: 'sticker' },
  { id: 'chach03', name: '残高確認3', price: 0, widthCells: 2, heightCells: 1, tag: 'sticker' },
  { id: 'chach04', name: '残高確認4', price: 0, widthCells: 4, heightCells: 1, tag: 'sticker' },
  { id: 'chach05', name: '残高確認5', price: 0, widthCells: 2, heightCells: 1, tag: 'sticker' },
  { id: 'chach06', name: '残高確認6', price: 0, widthCells: 4, heightCells: 1, tag: 'sticker' },
  { id: 'Heatmap01', name: '学習履歴1', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'Heatmap02', name: '学習履歴2', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'Heatmap03', name: '学習履歴3', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'Heatmap04', name: '学習履歴4', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress01', name: '学習履歴5', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress02', name: '学習履歴6', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress03', name: '学習履歴7', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress04', name: '学習履歴8', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress05', name: '学習履歴9', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress06', name: '学習履歴10', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress07', name: '学習履歴11', price: 0, widthCells: 2, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress08', name: '学習履歴12', price: 0, widthCells: 2, heightCells: 2, tag: 'theme' },
];

const POINTS_KEY    = '@quiz_points';
const PURCHASES_KEY = '@quiz:purchases';
const POSITIONS_KEY = '@quiz:positions';
const TUTORIAL_KEY = '@quiz:tutorialDone';
const TAGS = ['button', 'sticker', 'theme'] as const;
const TAG_LABELS: Record<typeof TAGS[number], string> = {
  button: 'ボタン',
  sticker: '残高確認',
  theme: '学習履歴',
};

export default function UIstore() {
  const [points,    setPoints]    = useState<number>(0);
  const [purchases, setPurchases] = useState<Record<string, ShopItem>>({});
  const [positions, setPositions] = useState<Record<string, { gridX: number; gridY: number }>>({});
  const [selectedTag, setSelectedTag] = useState<typeof TAGS[number]>('button');
  const [tutorialDone, setTutorialDone] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      const fetchTutorialStatus = async () => {
        try {
          const value = await AsyncStorage.getItem(TUTORIAL_KEY);
          if (value === 'true') {
            setTutorialDone(true);
          }
        } catch (e) {
          console.error('❌ チュートリアル状態の取得に失敗:', e);
        }
      };

      fetchTutorialStatus();
    }, [])
  );
  useEffect(() => {
    (async () => {
      // ポイント読み込み
      const pts = await AsyncStorage.getItem(POINTS_KEY);
      const loadedPoints = pts ? JSON.parse(pts) : 0;
      setPoints(loadedPoints);

      // 購入データ読み込み
      const pur = await AsyncStorage.getItem(PURCHASES_KEY);
      const loadedPurchases = pur ? JSON.parse(pur) : {};
      setPurchases(loadedPurchases);

      // 配置データ読み込み
      const pos = await AsyncStorage.getItem(POSITIONS_KEY);
      const loadedPositions = pos ? JSON.parse(pos) : {};
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
  const filteredItems = SHOP_ITEMS.filter(item => item.tag === selectedTag);
  return (
    <>
    <View style={styles.simpleHeader}>
        <Text style={styles.simpleHeaderText}>₵ {points}</Text>
    </View>
    <View style={{ height: 40, backgroundColor: '#EBF3FF' }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
      >
        {TAGS.map(tag => (
          <TouchableOpacity
            key={tag}
            style={[
              styles.tabButton,
              selectedTag === tag && styles.tabButtonActive
            ]}
            onPress={() => setSelectedTag(tag)}
          >
            <Text
              style={[
                styles.tabButtonText,
                selectedTag === tag && styles.tabButtonTextActive
              ]}
            >
              {TAG_LABELS[tag]}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
    <View style={styles.container}>

      {/* 商品リスト */}
      <FlatList
        data={filteredItems}
        keyExtractor={i => i.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 140 }}
        renderItem={({ item }) => (
          <View style={WIDGET_CONFIG[item.id]?.component ? styles.card1 : styles.card}>
              {WIDGET_CONFIG[item.id]?.component ? (() => {
                const Widget = WIDGET_CONFIG[item.id]!.component!;
                const props = WIDGET_CONFIG[item.id]!.getDefaultProps
                  ? WIDGET_CONFIG[item.id]!.getDefaultProps!(item)
                  : {};
                return (
                  <View
                    style={{
                      alignSelf: 'center',       // 横中央に
                      alignItems: 'center',
                      justifyContent: 'flex-start',
                      paddingTop: 0,
                      marginTop: 0,
                    }}
                  >
                    <Widget {...props} fromShop={true}/>
                  </View>
                );
              })() : (
                <View style={[ WIDGET_CONFIG[item.id]?.shopcontainerStyle]}>
                  <Text style={WIDGET_CONFIG[item.id]?.titleText}>
                    {WIDGET_CONFIG[item.id]?.title ?? item.name}
                  </Text>
                </View>
              )}
              <Text style={[styles.name]}>
                {item.name}
              </Text>
            <Text style={styles.price}>{item.price} ₵</Text>
            <TouchableOpacity
              style={[
                styles.button,
                purchases[item.id] && styles.buttonDisabled,
                { position: 'relative' },
              ]}
              disabled={!!purchases[item.id]}
              onPress={() => buyItem(item)}
            >
              {item.id === 'start01' && !purchases[item.id] && (
                <View style={{ position: 'absolute', top: -20, left: -20, right: -20, bottom: -20, alignItems: 'center', justifyContent: 'center' }}>
                  <TapIndicator
                    size={80}
                    color="#000"
                    strokeWidth={2}
                    duration={800}
                  />
                </View>
              )}
              <Text style={styles.buttonText}>
                {purchases[item.id] ? '購入済み' : '購入する'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text>ショップアイテムがありません</Text>}
      />
    </View>
    <Footer activeIcon="shop" purchasesLength={Object.keys(purchases).length} tutorialDone={tutorialDone}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF3FF',
    paddingTop: 8,
  },
  simpleHeader: {
    width: '100%',
    paddingVertical: 35,
    paddingHorizontal: 17,
    backgroundColor: '#000',
  },
  simpleHeaderText: {
    top: 14,
    color: '#fff',
    paddingHorizontal: 14,
    alignSelf: 'flex-end',
    fontSize: 25,
    fontWeight: '200',
  },
  tabContainer: {
    backgroundColor: '#EBF3FF',
    width: '100%',
    marginLeft: 8,
    marginTop: 8,
  },
  tabButton: {
    marginRight: 12,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#EBF3FF',
    borderWidth: 1,
    borderColor: '#000',
  },
  tabButtonActive: {
    backgroundColor: '#000',
    borderWidth: 1,
  },
  tabButtonText: {
    fontSize: 16,
    color: '#000',
  },
  tabButtonTextActive: {
    color: '#EBF3FF',
  },
  card: {
    backgroundColor: '#EBF3FF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    width: '45%',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card1: {
    backgroundColor: '#EBF3FF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    width: '45%',
    paddingTop:10,
    margin: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16
   },
  price:{
    fontSize: 14,
   },
  button: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    margin: 8,
    position: 'relative', // TapIndicator の配置のため
  },
  buttonDisabled: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#AAA',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    margin: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});