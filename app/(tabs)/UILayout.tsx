import React, { useEffect, useState, useRef, useCallback } from 'react';
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
import type { WidgetId } from '../../components/uistore/widgetConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import Footer from '@/components/ui/Footer';

// 画面サイズとセル数の計算
const windowWidth = Dimensions.get('window').width;
const { height } = Dimensions.get('window');
// 画面両端の container.padding (16*2) と widgetArea.padding (12*2) を差し引き
const availableWidth = windowWidth - 16 * 2 - 12 * 2 ;
const smallCell = availableWidth / 4 ;
const GRID_SCALE = 0.7; // グリッド描画範囲を 80% に縮小
const smallCellScaled = smallCell * GRID_SCALE;
const headerHeight = 60 + 20;                // ヘッダー余白（例）
const footerHeight = 150 + 50;               // フッター余白（例）
const availableHeight = height - headerHeight - footerHeight;
const rowCount = Math.floor(availableHeight / smallCell);
type ShopItem = {
  id: string;
  name: string;
  price: number;
  widthCells: number;
  heightCells: number;
};
type Position = { gridX: number; gridY: number; };

const POINTS_KEY    = '@quiz_points';
const PURCHASES_KEY = '@quiz:purchases';

export default function UIstore() {
  const [points,    setPoints]    = useState<number>(0);
  const [purchases, setPurchases] = useState<Record<string, ShopItem>>({});
  const [positions, setPositions] = useState<Record<string, Position | null>>({});
  const [gridReady, setGridReady] = useState(false);
  const [positionsLoaded, setPositionsLoaded] = useState(false);
  const [removedWidgets, setRemovedWidgets] = useState<ShopItem[]>([]);
  const isFirstLoad = useRef(true);
  const router = useRouter();

  // ポイント・購入履歴ロード
  // useEffect でポイント・購入履歴を読み込んだ直後に
  useEffect(() => {
    (async () => {
      const hJson = await AsyncStorage.getItem(PURCHASES_KEY);
      const loaded: Record<string, ShopItem> = hJson
        ? (JSON.parse(hJson) as Record<string, ShopItem>)
        : {};
      setPurchases(loaded);
      if (Object.keys(loaded).length === 0) {
        await AsyncStorage.removeItem('@quiz:positions');
        setPositions({});
        setRemovedWidgets([]);
        return;
      }
      // 位置も同時にチェック
      const posJson = await AsyncStorage.getItem('@quiz:positions');
      const parsed = posJson ? JSON.parse(posJson) : {};
      const rawPositions: Record<string, Position> = {};
      Object.entries(parsed).forEach(([key, p]) => {
        const posObj: any = p;
        // If stored as pixels, convert to grid; otherwise assume grid coords
        const pixelX = typeof posObj.x === 'number' ? posObj.x : NaN;
        const pixelY = typeof posObj.y === 'number' ? posObj.y : NaN;
        const gridX = !isNaN(pixelX) ? Math.round(pixelX / smallCell) : (typeof posObj.gridX === 'number' ? posObj.gridX : 0);
        const gridY = !isNaN(pixelY) ? Math.round(pixelY / smallCell) : (typeof posObj.gridY === 'number' ? posObj.gridY : 0);
        rawPositions[key] = { gridX, gridY };
      });
      // Ensure every purchase ID appears; missing entries become null
      const loadedPositions: Record<string, Position | null> = {};
      Object.values(loaded).forEach(item => {
        loadedPositions[item.id] = rawPositions[item.id] ?? null;
      });
      setPositions(loadedPositions);
      setPositionsLoaded(true);
      // Removed overwriting storage with cleaned positions on initial load
    })();
  }, []);

  // positions state が更新されるたびにストレージに保存
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    AsyncStorage.setItem('@quiz:positions', JSON.stringify(positions));
  }, [positions]);

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
  

  const addItemToGrid = (item: ShopItem) => {
    // 探索可能な最大グリッド座標
    const maxX = 4 - item.widthCells;
    const maxY = rowCount - item.heightCells;
    // 空きセル探索
    let foundPos: Position | null = null;
    for (let y = 0; y <= maxY; y++) {
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
    setPositions(prev => ({ ...prev, [item.id]: foundPos! }));
    // Removedリストから除外
    setRemovedWidgets(prev => prev.filter(w => w.id !== item.id));
  };

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>あなたのポイント: {points} pt</Text>
      
      <TouchableOpacity
        style={[styles.button, { marginBottom: 12 }]}
        onPress={() => router.push('/UIstore')}
      >
        <Text style={styles.buttonText}>shop画面へ移動</Text>
      </TouchableOpacity>

          {/* --- ここから：商品リストの下に小さめグリッドを描画 --- */}
          <View
            key={JSON.stringify(positions)}
            style={[
              styles.smallGridContainer,
              { width: smallCellScaled * 4, height: smallCellScaled * rowCount, position: 'relative',},
            ]}
            onLayout={e => {
              const { x, y, width, height } = e.nativeEvent.layout;
              setGridLayout({ x, y, width, height });
            }}
          >
            {/* 縦線 */}
            {[...Array(4)].map((_, i) => (
              <View
                key={`sv${i}`}
                style={[
                  styles.gridLineVertical,
                  { left: i * smallCellScaled, height: smallCellScaled * rowCount },
                ]}
              />
            ))}
            {/* 横線 */}
            {[...Array(rowCount + 1)].map((_, i) => (
              <View
                key={`sh${i}`}
                style={[
                  styles.gridLineHorizontal,
                  { top: i * smallCellScaled, width: smallCellScaled * 4 },
                ]}
              />
            ))}
            
            {/* Purchased widgets on grid */}
            {gridReady &&
              purchasedList
                .filter(item => positions[item.id] != null)
                .map(item => {
                // Log saved positions and current pan values for re-render debugging
                const pan = panRefs.current[item.id];
                // 設定がなければ空オブジェクトでフォールバック
                const config = useWidgetConfig(item.id as WidgetId) ?? {};
                const WidgetComponent = config.component;
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
                    pan.flattenOffset();
                    // グリッド50%にスナップ＆グリッド外に出さないようクランプ
                    const rawX = (pan.x as any)._value;
                    const rawY = (pan.y as any)._value;
                    let snappedX = Math.round(rawX / smallCellScaled) * smallCellScaled;
                    let snappedY = Math.round(rawY / smallCellScaled) * smallCellScaled;
                    // X軸クランプ
                    const minX = 0;
                    const maxX = smallCellScaled * (4 - item.widthCells);
                    snappedX = Math.max(minX, Math.min(snappedX, maxX));
                    // Y軸クランプ
                    const minY = 0;
                    const maxY = smallCellScaled * (rowCount - item.heightCells);
                    snappedY = Math.max(minY, Math.min(snappedY, maxY));
                    // 位置セット（ピクセル）
                    pan.setValue({ x: snappedX, y: snappedY });
                    // グリッド座標に変換して state 保存
                    const newGridX = Math.round(snappedX / smallCellScaled);
                    const newGridY = Math.round(snappedY / smallCellScaled);
                    // 重なり判定（バウンディングボックス方式）
                    let overlaps = false;
                    Object.entries(positions).forEach(([otherId, pos]) => {
                      if (otherId === item.id) return;
                      const other = purchases[otherId];
                      if (!other) return;
                      const ax1 = newGridX;
                      const ay1 = newGridY;
                      const ax2 = newGridX + item.widthCells;
                      const ay2 = newGridY + item.heightCells;
                      const bx1 = pos?.gridX ?? 0;
                      const by1 = pos?.gridY ?? 0;
                      const bx2 = bx1 + other.widthCells;
                      const by2 = by1 + other.heightCells;
                      // 矩形が重ならない場合の条件
                      if (!(ax2 <= bx1 || bx2 <= ax1 || ay2 <= by1 || by2 <= ay1)) {
                        overlaps = true;
                      }
                    });
                    if (overlaps) {
                      // 重なっている場合は元の位置にリセット
                      if (positions[item.id]) {
                        pan.setValue({ x: positions[item.id]!.gridX * smallCellScaled, y: positions[item.id]!.gridY * smallCellScaled });
                      }
                      return;
                    }
                    // 重なっていなければ state 更新
                    const updated = { ...positions, [item.id]: { gridX: newGridX, gridY: newGridY } };
                    setPositions(updated);
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
                        width: item.widthCells * smallCellScaled,
                        height: item.heightCells * smallCellScaled,  // 高さをセル数×smallCellに変更
                      },
                    ]}
                  >
                    {/* Remove button */}
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => removeWidget(item)}
                    >
                      <Text style={styles.removeButtonText}>×</Text>
                    </TouchableOpacity>
                    {WidgetComponent ? (
                      <WidgetComponent {...(config.getDefaultProps ? config.getDefaultProps(item) : {})} />
                    ) : (
                      <View style={[styles.widget, config.containerStyle]}>
                        <Text style={config.textStyle}>{item.name}</Text>
                      </View>
                    )}
                  </Animated.View>
                );
              })}
          </View>
          {/* --- ここまで：小さいグリッド --- */}

     {positionsLoaded && (
       <>
         <Text style={styles.bottomBarLabel}>Removed & Purchased:</Text>
         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bottomScroll}>
           {Object.values(purchases)
             .filter(item => positions[item.id] === null)
             .map(item => (
               <View key={item.id} style={{ marginRight: 8, alignItems: 'center' }}>
                 <Text numberOfLines={1} style={styles.bottomItemText}>{item.name}</Text>
                 <TouchableOpacity
                   style={styles.addButton}
                   onPress={() => addItemToGrid(item)}
                 >
                   <Text style={styles.addButtonText}>追加</Text>
                 </TouchableOpacity>
               </View>
           ))}
         </ScrollView>
       </>
     )}
      </View>
    <Footer />
      </>
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
  smallGridContainer: { marginTop: 0, overflow: 'visible', alignSelf: 'center' },
  gridLineVertical:   { position: 'absolute', width: 1, backgroundColor: 'rgb(255, 0, 0)' },
  gridLineHorizontal: { position: 'absolute', height: 1, backgroundColor: 'rgb(50, 0, 252)' },
  widget:             { flex: 1, backgroundColor: '#ddd', justifyContent: 'center', alignItems: 'center' },
  removeButton: {
    position: 'absolute',
    top: 4,
    right: 4,
    zIndex: 20,
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
       backgroundColor: '#4CAF50',
       borderRadius: 4,
  },
  addButtonText: {
      color: '#FFF',
      fontSize: 12,
      fontWeight: 'bold',
   },
});