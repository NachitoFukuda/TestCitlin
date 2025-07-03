import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Animated,
  PanResponder,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useWidgetConfig } from '../../components/uistore/useWidgetConfig';
import { useIsFocused, useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import type { WidgetId } from '../../components/uistore/widgetConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '@/components/ui/Footer';
import { useRouter } from 'expo-router';
import { WIDGET_CONFIG } from '@/components/uistore/widgetConfig';
import TapIndicator from '../../components/ui/TapIndicator';
import NeomorphBox from '@/components/ui/NeomorphBox';
import * as Haptics from 'expo-haptics';

// 画面サイズとセル数の計算
const windowWidth = Dimensions.get('window').width;
const { height } = Dimensions.get('window');
// 画面両端の container.padding (16*2) と widgetArea.padding (12*2) を差し引き
const availableWidth = windowWidth - 16 * 2 - 12 * 2 ;
const smallCell = availableWidth / 4 ;
const GRID_SCALE = 0.7; // グリッド描画範囲を 70% に縮小
const smallCellScaled = smallCell * GRID_SCALE;
const headerHeight = 60 + 20;                // ヘッダー余白（例）
const footerHeight = 150 ;               // フッター余白（例）
const availableHeight = height - headerHeight - footerHeight;
const rowCount = Math.floor(availableHeight / smallCell);
const EXTRA_ROW = 1.6;  // 視覚的に追加する空行の数

type ShopItem = {
  id: string;
  name: string;
  price: number;
  widthCells: number;
  heightCells: number;
};
type Position = { gridX: number; gridY: number; };

const PURCHASES_KEY = '@quiz:purchases';
const TUTORIAL_STEP_KEY = '@quiz:tutorialStep';

export default function UILayout() {
  const [tutorialDoneState, setTutorialStep] = React.useState<boolean>(false);

  React.useEffect(() => {
    AsyncStorage.getItem(TUTORIAL_STEP_KEY)
      .then(val => {
        if (val !== null) {
          setTutorialStep(val === 'true');
        }
      })
      .catch(err => {
        console.error('[Footer] Failed to load tutorial step:', err);
        setTutorialStep(false);
      });
  }, []);


  const [positions, setPositions] = useState<Record<string, Position | null>>({});
  const isFirstLoad = useRef(true);
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    // positions が更新されたらストレージに保存し、ログ出力
    AsyncStorage.setItem('@quiz:positions', JSON.stringify(positions));
  }, [positions]);
  const isFocused = useIsFocused();
  const [purchases, setPurchases] = useState<Record<string, ShopItem>>({});
  const [gridReady, setGridReady] = useState(false);
  const [positionsLoaded, setPositionsLoaded] = useState(false);
  const [removedWidgets, setRemovedWidgets] = useState<ShopItem[]>([]);
  const router = useRouter();

  // Always refresh purchases from storage when this screen is focused
  useFocusEffect(
    useCallback(() => {
      (async () => {
        // ① 購入情報ロード
        const purJson = await AsyncStorage.getItem(PURCHASES_KEY);
        const loadedPurchases: Record<string, ShopItem> = purJson
          ? JSON.parse(purJson)
          : {};
        setPurchases(loadedPurchases);
  
        // ② 位置情報ロード
        if (Object.keys(loadedPurchases).length === 0) {
          // 購入がないなら positions もクリア
          await AsyncStorage.removeItem('@quiz:positions');
          setPositions({});
          setRemovedWidgets([]);
        } else {
          const posJson = await AsyncStorage.getItem('@quiz:positions');
          const parsed = posJson ? JSON.parse(posJson) : {};
  
          const rawPositions: Record<string, Position> = {};
          Object.entries(parsed).forEach(([key, p]) => {
            if (p == null) return;
            const posObj: any = p;
            const pixelX = typeof posObj.x === 'number' ? posObj.x : NaN;
            const pixelY = typeof posObj.y === 'number' ? posObj.y : NaN;
            const gridX = !isNaN(pixelX)
              ? Math.round(pixelX / smallCell)
              : (typeof posObj.gridX === 'number' ? posObj.gridX : 0);
            const gridY = !isNaN(pixelY)
              ? Math.round(pixelY / smallCell)
              : (typeof posObj.gridY === 'number' ? posObj.gridY : 0);
            rawPositions[key] = { gridX, gridY };
          });
  
          const loadedPositions: Record<string, Position | null> = {};
          Object.values(loadedPurchases).forEach(item => {
            loadedPositions[item.id] = rawPositions[item.id] ?? null;
          });
  
          setPositions(loadedPositions);
        }
  
        // ③ 一度だけ走らせるフラグ
        setPositionsLoaded(true);
      })();
    }, [])
  );
  // Remove handler
  const removeWidget = (item: ShopItem) => {
    // 1) positions に null を設定して「Removed & Purchased」欄に表示
    setPositions(prev => ({ ...prev, [item.id]: null }));
    // 2) Removed リストに追加（重複は避ける）
    setRemovedWidgets(prev =>
      prev.find(w => w.id === item.id) ? prev : [...prev, item]
    );
  };

  // Draggable 用の refs 初期化
  const purchasedList = Object.values(purchases);
  const panRefs = useRef<Record<string, Animated.ValueXY>>({});
  useEffect(() => {
    Object.entries(positions).forEach(([id, pos]) => {
      if (!panRefs.current[id]) {
        if (pos) {
          panRefs.current[id] = new Animated.ValueXY({ x: pos.gridX * smallCellScaled, y: pos.gridY * smallCellScaled });
        }
      }
    });
    setGridReady(true);
  }, [positions]);
  
  // Drag-and-drop from bottom bar
  const [gridLayout, setGridLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
  

  const addItemToGrid = async (item: ShopItem) => {
    // 探索可能な最大グリッド座標
    const maxX = 4 - item.widthCells;
    const maxY = rowCount - item.heightCells;
    // 空きセル探索
    let foundPos: Position | null = null;
    // Prevent placement in the top row (gridY = 0)
    for (let y = 1; y <= maxY; y++) {
      for (let x = 0; x <= maxX; x++) {
        // 重なりチェック
        const overlap = Object.entries(positions).some(([otherId, pos]) => {
          const other = purchases[otherId];
          if (!other) return false;
          const ax1 = x, ay1 = y;
          const ax2 = x + item.widthCells, ay2 = y + item.heightCells;
          const bx1 = pos?.gridX ?? 0, by1 = pos?.gridY ?? 0;
          const bx2 = bx1 + other.widthCells, by2 = by1 + other.heightCells;
          return !(ax2 <= bx1 || bx2 <= ax1 || ay2 <= by1 || by2 <= ay1);
        });
        if (!overlap) {
          foundPos = { gridX: x, gridY: y };
          break;
        }
      }
      if (foundPos) break;
    }
    if (!foundPos) {
      Alert.alert('空きがありません', 'UIを追加できる場所がありません');
      return;
    }
    // 位置を更新して即時描画
    setPositions(prev => {
      const next = { ...prev, [item.id]: foundPos! };
      return next;
    });
    // Removedリストから除外
    setRemovedWidgets(prev => prev.filter(w => w.id !== item.id));
    // チュートリアル完了ステップを保存
    try {
      await AsyncStorage.setItem(TUTORIAL_STEP_KEY, 'true');
    } catch (err) {
      console.error('[UILayout] Failed to set tutorial step to end:', err);
    }
    setTutorialStep(true);
  };

  return (
    <>
    <View style={styles.container}>
        <View style={styles.outerBorder}>
        <View style={styles.topBezel} />
          <View
            key={JSON.stringify(positions)}
            style={[
              styles.smallGridContainer,
              { width: smallCellScaled * 4 +12, height: smallCellScaled * (rowCount + EXTRA_ROW), position: 'relative',},
            ]}
            onLayout={e => {
              const { x, y, width, height } = e.nativeEvent.layout;
              setGridLayout({ x, y, width, height });
            }}
          >
            {/* 縦線 */}
            {[...Array(5)].map((_, i) => {
              if (i === 0 || i === 4) return null;
              return (
                <View
                  key={`sv${i}`}
                  style={[
                    styles.gridLineVertical,
                    {
                      left: i * smallCellScaled,
                      top: smallCellScaled,
                      height: smallCellScaled * (rowCount - 1),
                    },
                  ]}
                />
              );
            })}
            {[...Array(rowCount + 1)].map((_, i) => {
              if (i === 0) return null;
              return (
                <View
                  key={`sh${i}`}
                  style={[
                    styles.gridLineHorizontal,
                    {
                      top: i * smallCellScaled,
                      width: smallCellScaled * 4,
                    },
                  ]}
                />
              );
            })
          }
          {/* Purchased widgets on grid */}
            {gridReady &&
              purchasedList
                .filter(item => {
                  // null または undefined のみ除外し、配置されているウィジェットのみ描画
                  const pos = positions[item.id];
                  const ok = pos != null;
                  if (ok) console.log('[UILayout] will render widget:', item.id);
                  return ok;
                })
                .map(item => {
                // Log saved positions and current pan values for re-render debugging
                const pan = panRefs.current[item.id];
                // 設定がなければ空オブジェクトでフォールバック
                const config = useWidgetConfig(item.id as WidgetId) ?? {};
                if (!pan) return null;
                const responder = PanResponder.create({
                  onStartShouldSetPanResponder: () => true,
                  onPanResponderGrant: () => {
                    pan.setOffset({ x: (pan.x as any)._value, y: (pan.y as any)._value });
                    pan.setValue({ x: 0, y: 0 });
                  },
                  onPanResponderMove: Animated.event(
                    [null, { dx: pan.x, dy: pan.y }],
                    { useNativeDriver: false }
                  ),
                  onPanResponderRelease: (_, gesture) => {
                    // 1. 現在のピクセル位置とウィジェットサイズを取得
                    pan.flattenOffset();
                    const widgetWidthPx = item.widthCells * smallCellScaled;
                    const widgetHeightPx = item.heightCells * smallCellScaled;
                    const widgetX = (pan.x as any)._value;
                    const widgetY = (pan.y as any)._value;

                    // 2. 各セルとの重なり率を計算し、最大のセルを選択
                    let bestCell = { gridX: 0, gridY: 0 };
                    let maxOverlap = 0;
                    for (let y = 0; y <= rowCount - item.heightCells; y++) {
                      for (let x = 0; x <= 4 - item.widthCells; x++) {
                        const cellX = x * smallCellScaled;
                        const cellY = y * smallCellScaled;
                        // 重なり幅を計算
                        const ix = Math.max(0, Math.min(widgetX + widgetWidthPx, cellX + widgetWidthPx) - Math.max(widgetX, cellX));
                        const iy = Math.max(0, Math.min(widgetY + widgetHeightPx, cellY + widgetHeightPx) - Math.max(widgetY, cellY));
                        const overlapArea = ix * iy;
                        const overlapRatio = overlapArea / (widgetWidthPx * widgetHeightPx);
                        if (overlapRatio > maxOverlap) {
                          maxOverlap = overlapRatio;
                          bestCell = { gridX: x, gridY: y };
                        }
                      }
                    }

                    // Prevent placement in the very top row (gridY = 0)
                    bestCell.gridY = Math.max(bestCell.gridY, 1);

                    // 3. 衝突チェック：他ウィジェットとの重なりがなければ確定
                    const { gridX: newGridX, gridY: newGridY } = bestCell;
                    let overlaps = false;
                    Object.entries(positions).forEach(([otherId, pos]) => {
                      if (otherId === item.id) return;
                      const other = purchases[otherId];
                      if (!pos || !other) return;
                      const ax1 = newGridX, ay1 = newGridY;
                      const ax2 = newGridX + item.widthCells, ay2 = newGridY + item.heightCells;
                      const bx1 = pos.gridX, by1 = pos.gridY;
                      const bx2 = bx1 + other.widthCells, by2 = by1 + other.heightCells;
                      if (!(ax2 <= bx1 || bx2 <= ax1 || ay2 <= by1 || by2 <= ay1)) {
                        overlaps = true;
                      }
                    });
                    if (overlaps) {
                      // 衝突時は元の位置へ戻す
                      const prevPos = positions[item.id]!;
                      pan.setValue({ x: prevPos.gridX * smallCellScaled, y: prevPos.gridY * smallCellScaled });
                      return;
                    }

                    // 4. 最終的なピクセル位置をセットし、state を更新
                    pan.setValue({ x: newGridX * smallCellScaled, y: newGridY * smallCellScaled });
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); // ← ここを追加
                    setPositions(prev => {
                      const next = { ...prev, [item.id]: { gridX: newGridX, gridY: newGridY } };
                      return next;
                    });
                  },
                });

                return (
                  <Animated.View
                    key={item.id}
                    {...responder.panHandlers}
                    style={[
                      pan.getLayout(),
                      {
                        position: 'absolute',
                        zIndex: 10,
                        width: item.widthCells * smallCellScaled,
                        height: item.heightCells * smallCellScaled,  // 高さをセル数×smallCellに変更
                      },
                    ]}
                  >

                      {config.component ? (() => {
                        const Widget = config.component;
                        const props = config.getDefaultProps ? config.getDefaultProps(item) : {};
                        return (
                            <Animated.View
                            pointerEvents="none"
                            style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                              transform: [{ scale: 0.6 }],
                            }}
                            >
                            <Widget {...props} />
                            </Animated.View>
                        );
                      })() : (
                        <View style={[styles.widget, config.layoutStyle]}>
                          <Text style={config.textStyle}>{config.title}</Text>
                        </View>
                      )}
                    {/* Remove button */}
                    <TouchableOpacity style={styles.removeButton} onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)} onPress={() => removeWidget(item)}>
                      <Text style={styles.removeButtonText}>×</Text>
                    </TouchableOpacity>
                  </Animated.View>
                );
              })}
            <Footer
              activeIcon="layoutdemo"
            />
          </View>
        </View>          
      {/* --- ここまで：小さいグリッド --- */}
      {positionsLoaded && (() => {
        // 配置可能アイテム一覧
        const rawAvailable = Object.values(purchases).filter(item => positions[item.id] == null);
        // チュートリアル未完了時は最初の1つだけ表示
        const available = tutorialDoneState ? rawAvailable : rawAvailable.slice(0, 1);
        if (available.length === 0) {
          return (
            <TouchableOpacity
              onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
              onPress={() => router.push('/UIstore')}
            >
                <NeomorphBox
                  width={200}
                  height={50}
                  style={styles.neomorphBox}
                  forceTheme={'light'}
                >
              <Text style={styles.buttonText}>ウィジェットを購入</Text>
              </NeomorphBox>
            </TouchableOpacity>
          );
        }
        return (
          <>
            <Text style={styles.bottomBarLabel}>配置可能なウィジェット</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bottomScroll}>
            {available.map((item, index) => {
              // グリッドに配置されているアイテムをチェック
              const isPlaced = positions[item.id] !== null;
              if (isPlaced) return null; // 配置済みのアイテムは表示しない

              return (
                <View key={item.id} style={{ marginRight: 8, alignItems: 'center' }}>
                  <Text numberOfLines={1} style={styles.bottomItemText}>{item.name}</Text>
                  <TouchableOpacity
                    style={[styles.addButton, { position: 'relative' }]}
                    onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                    onPress={async () => {
                      // アイテム追加 & 保存完了を待つ
                      await addItemToGrid(item);
                      try {
                        await AsyncStorage.setItem(TUTORIAL_STEP_KEY, 'true');
                      } catch (err) {
                        console.error('[UILayout] Failed to set tutorial step to end:', err);
                      }
                      setTutorialStep(true);
                    }}
                  >
                    {tutorialDoneState  && (
                      <View style={{
                        position: 'absolute',
                        top: -20,
                        left: -20,
                        right: -20,
                        bottom: -20,
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                     {tutorialDoneState  && index == 0&& (
                        <TapIndicator
                          size={160}
                          color="#000"
                          strokeWidth={2}
                          duration={1000}
                        />
                        )}
                      </View>
                    )}
                    <View
                      pointerEvents="none" 
                      style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingTop: 0,
                        marginTop: 0,
                      }}
                    >
                      {(() => {
                        const WidgetComponent = WIDGET_CONFIG[item.id as WidgetId]?.component;
                        const widgetProps = WIDGET_CONFIG[item.id as WidgetId]?.getDefaultProps
                          ? WIDGET_CONFIG[item.id as WidgetId]!.getDefaultProps!(item)
                          : {};
                        if (WidgetComponent) {
                          return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                              <WidgetComponent {...widgetProps} fromShop={true}/>
                            </View>
                          );
                        }
                        return (
                          <View style={[WIDGET_CONFIG[item.id as WidgetId]?.shopcontainerStyle]}>
                            <Text style={WIDGET_CONFIG[item.id as WidgetId]?.titleText}>
                              {WIDGET_CONFIG[item.id as WidgetId]?.title ?? item.name}
                            </Text>
                          </View>
                        );
                      })()}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
            </ScrollView>
          </>
        );
      })()}
      </View>
           <Footer
              activeIcon="layout"
              purchasesLength={Object.keys(purchases).length}
              pushButton={true}
              />
      </>
  );
}

const styles = StyleSheet.create({
  container:          { flex: 1, paddingTop: 70, backgroundColor: '#E3E5F2', alignItems: 'center' },
  item:               { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, backgroundColor: '#FFF', marginBottom: 8, borderRadius: 8 },
  name:               { fontSize: 16 },
  price:              { fontSize: 14, color: '#888' },
  button: {
    backgroundColor: '#E3E5F2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: '#666666',
    borderRadius: 20,
    marginTop:30
  },
  buttonText:         { color: '#666', fontWeight: 'bold' ,fontSize: 18 },

  buttonDisabled:     { backgroundColor: '#AAA' },
  smallGridContainer: {
    backgroundColor: '#E3E5F2',
    marginTop: 0,
    overflow: 'visible',
    alignSelf: 'center',
    borderWidth: 6,
    borderColor: 'rgb(0, 0, 0)',
    borderRadius: 35,
    zIndex: 15,
  },
  gridLineVertical:   { position: 'absolute', width: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)' },
  gridLineHorizontal: { position: 'absolute', height: 1, backgroundColor: 'rgba(0, 0, 0, 0.4)' },
  widget:             { flex: 1, backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center' },
  removeButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    zIndex: 999,
    elevation: 999,
    backgroundColor: 'rgba(255,0,0,0.8)',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 16,
  },

  bottomBarLabel: {
    marginLeft: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  bottomScroll: {
    paddingHorizontal: 16,
  },
  bottomItem: {
    width: 80,
    height: 40,
    backgroundColor: '#eee',
    marginRight: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomItemText: {
    fontSize: 12,
    textAlign: 'center',
  },
   addButton: {
       marginTop: 4,
       paddingVertical: 4,
       paddingHorizontal: 8,
       borderRadius: 4,
  },
  addButtonText: {
      color: '#FFF',
      fontSize: 12,
      fontWeight: 'bold',
   },
   outerBorder: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 37,
  },
  topBezel: {
    position: 'absolute',
    top: 11,
    left: 90,
    right: 90,
    height: 26,
    backgroundColor: '#000',
    borderRadius: 13,
    zIndex: 16,
  },
  neomorphBox: {
    marginTop: 30,
  },
});