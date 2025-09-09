import React, { useCallback, useEffect, useState } from 'react';
import Detail from '../../components/uistore/Detail';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TapIndicator from '../../components/ui/TapIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '@/components/ui/Footer';
import { WIDGET_CONFIG } from '@/components/uistore/widgetConfig';
import { WidgetId } from '@/components/uistore/widgetConfig';
import { ScrollView } from 'react-native';
import NeomorphBox from '@/components/ui/NeomorphBox';
import * as Haptics from 'expo-haptics';
// UIstore.tsx 上部
type ShopItem = {
  id: WidgetId;
  name: string;
  price: number;
  widthCells: number;
  heightCells: number;
  tag: 'button'| 'note' | 'sticker' | 'theme';  // タグを明示
};

export const SHOP_ITEMS: ShopItem[] = [
  { id: 'start01', name: 'Start Mini', price: 0, widthCells: 2, heightCells: 1, tag: 'button' },
  { id: 'start02', name: 'Start Wide', price: 0, widthCells: 4, heightCells: 1, tag: 'button' },
  { id: 'start05', name: 'Smart Start', price: 0, widthCells: 2, heightCells: 1, tag: 'button' },
  { id: 'start06', name: 'Power Start', price: 0, widthCells: 4, heightCells: 1, tag: 'button' },
  { id: 'start07', name: 'Light Start', price: 0, widthCells: 2, heightCells: 1, tag: 'button' },
  { id: 'start08', name: 'Max Start', price: 0, widthCells: 4, heightCells: 1, tag: 'button' },
  { id: 'start09', name: 'circle Start', price: 0, widthCells: 2, heightCells: 2, tag: 'button' },

  { id: 'note01', name: 'note', price: 0, widthCells: 1, heightCells: 1, tag: 'note' },

  { id: 'chach05', name: 'Quick Balance', price: 0, widthCells: 2, heightCells: 1, tag: 'sticker' },
  { id: 'chach06', name: 'Full Balance', price: 0, widthCells: 4, heightCells: 1, tag: 'sticker' },
  { id: 'chach07', name: 'My Coins Mini', price: 0, widthCells: 2, heightCells: 1, tag: 'sticker' },
  { id: 'chach08', name: 'My Coins Wide', price: 0, widthCells: 4, heightCells: 1, tag: 'sticker' },

  { id: 'TodayGool1', name: 'Daily Target', price: 0, widthCells: 2, heightCells: 1, tag: 'theme' },
  { id: 'TodayGool2', name: 'Daily Target Pro', price: 0, widthCells: 2, heightCells: 1, tag: 'theme' },
  { id: 'Howday1', name: 'Study Days', price: 0, widthCells: 2, heightCells: 1, tag: 'theme' },
  { id: 'Howday2', name: 'Study Days Pro', price: 0, widthCells: 2, heightCells: 1, tag: 'theme' },

  { id: 'Heatmap01', name: 'Learning History', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'Heatmap02', name: 'Learning History', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'Heatmap03', name: 'Learning History', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'Heatmap04', name: 'Learning History', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },

  { id: 'WeekProgress01', name: 'Weekly Tracker', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress02', name: 'Weekly Tracker', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress03', name: 'Weekly Tracker', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress04', name: 'Weekly Tracker', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress05', name: 'Weekly Tracker', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },
  { id: 'WeekProgress06', name: 'Weekly Tracker', price: 0, widthCells: 4, heightCells: 2, tag: 'theme' },

];

const POINTS_KEY    = '@quiz_points';
const PURCHASES_KEY = '@quiz:purchases';
const TAGS = ['button', 'note','sticker', 'theme'] as const;
const TAG_LABELS: Record<typeof TAGS[number], string> = {
  button: 'Start Button',
  note: '単語帳',
  sticker: '残高確認',
  theme: '学習履歴',
};

export default function UIstore() {
  const [overlayItem, setOverlayItem] = useState<ShopItem | null>(null);
  const [points,    setPoints]    = useState<number>(0);
  const [purchases, setPurchases] = useState<Record<string, ShopItem>>({});
  const [selectedTag, setSelectedTag] = useState<typeof TAGS[number]>('button');
  const [pushButton, seTpushButton] = React.useState<boolean>(false);
  // ボタンタップ時に呼び出されるコールバック
  const handleButtonTap = (buttontap: boolean) => {
    seTpushButton(buttontap);
  };


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

    })();
  }, []);

  const screenWidth = Dimensions.get('window').width;
  const nyumoWidth = screenWidth* 0.45


  const filteredItems = SHOP_ITEMS.filter(item => item.tag === selectedTag);
  // アイコンの大きさ（TapIndicatorで使う）
  const iconWrapperSize = 48;
  const displayItems = filteredItems;
  return (
    <>
    <View style={styles.simpleHeader}>
        <Text style={styles.simpleHeaderText}>₵ {points}</Text>
    </View>
    <View style={{ height: 40, backgroundColor: '#E3E5F2' }}>
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
            onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
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
        data={displayItems}
        keyExtractor={i => i.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 140 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={WIDGET_CONFIG[item.id]?.component ? styles.card1 : styles.card}
            onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
            onPress={() => {
              setOverlayItem(item);
            }}
          >
            <NeomorphBox
              width={nyumoWidth}
              height={item.widthCells === 2 && item.heightCells === 2 ? nyumoWidth * 1.5 : nyumoWidth}
              forceTheme={'light'}
            >
            {WIDGET_CONFIG[item.id]?.component ? (() => {
              const Widget = WIDGET_CONFIG[item.id]!.component!;
              const props = WIDGET_CONFIG[item.id]!.getDefaultProps
                ? WIDGET_CONFIG[item.id]!.getDefaultProps!(item)
                : {};
              return (
                  <View
                    style={{
                      flex: 1,
                      top: 0,
                    }}
                  >
                    <Widget {...props} fromShop={true}/>
                  </View>
              );
            })() : (
                <>
                </>
            )}
                  <View
                    style={{
                      flex: 1,
                      top: item.widthCells === 2 && item.heightCells === 2 ? 35 : 0,
                      width:'70%',
                    }}
                  >
              <Text style={[styles.name]}>
                {item.name}
              </Text>
              <Text style={styles.price}> ₵{item.price}</Text>
            </View>
            </NeomorphBox>
          </TouchableOpacity>
        )}
      />
      {overlayItem && (
        <Modal transparent animationType="slide" onRequestClose={() => setOverlayItem(null)}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' }}>
            <Detail 
              item={overlayItem} 
              onButtonTap={handleButtonTap}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
              onPress={() => setOverlayItem(null)}
            >
              <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                {pushButton &&(
                  <View style={{ position: 'absolute', top: -iconWrapperSize * 1, left: -iconWrapperSize * 1}}>
                    <TapIndicator
                      size={iconWrapperSize * 2.4}
                      color={'#000'}
                      strokeWidth={2}
                      duration={1000}
                    />
                  </View>
                )}
                <Ionicons name="chevron-back" size={24} color="#000" />
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </View>
    <Footer activeIcon="shop" purchasesLength={Object.keys(purchases).length}/>
    </>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: '#E3E5F2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    zIndex: 10,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#E3E5F2',
    paddingTop: 8,
  },
  simpleHeader: {
    width: '100%',
    paddingVertical: 35,
    paddingHorizontal: 17,
    backgroundColor: '#E3E5F2',

  },
  simpleHeaderText: {
    top: 14,
    color: '#000',
    paddingHorizontal: 14,
    alignSelf: 'flex-end',
    fontSize: 25,
    fontWeight: '200',
  },
  shopcontainerStyle: {
    backgroundColor: '#000',

  },
  tabContainer: {
    backgroundColor: '#E3E5F2',
    paddingHorizontal: 8,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabButton: {
    marginRight: 3,
    paddingHorizontal: 20,
    backgroundColor: '#E3E5F2',
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#E3E5F2',
  },
  tabButtonText: {
    fontSize: 18,
    color: 'rgba(0, 0, 0, 0.5)',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  tabButtonTextActive: {
    color: '#000',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    width: '45%',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card1: {

    width: '45%',
    paddingTop:5,
    margin: 8,
  },
  name: {
    marginTop:20,
    fontSize: 16,
    fontWeight: '200',

   },
  price:{
    marginTop:3,
    fontSize: 20,
    fontWeight: '500',
    color: '#666',
   },
  button: {
    backgroundColor: '#E3E5F2',
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