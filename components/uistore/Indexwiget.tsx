import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import {
    Animated,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
  } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { UIConfigContext } from '../contexts/UIConfigContext';
import { useWidgetConfig } from '../uistore/useWidgetConfig';
import type { WidgetId } from '../uistore/widgetConfig';
import type { Position } from '../contexts/UIConfigContext'; // adjust import path


type DraggableItemProps = {
  item: { id: string; name: string; widthCells: number; heightCells: number };
  initialPos?: { x: number; y: number };
  draggable?: boolean;
  onDragEnd?: (x: number, y: number) => void;
};
const PURCHASES_KEY = '@quiz:purchases';
const POINTS_KEY = '@quiz_points';  // もし別キーならそちらを

type ShopItem = {
  id: string;
  name: string;
  price: number;
  widthCells: number;
  heightCells: number;
};
export default function DraggableItem({
  item,
}: DraggableItemProps) {
  const [loadedPurchases, setLoadedPurchases] = useState<Record<string, ShopItem>>({});
  const [loadedPositions, setLoadedPositions] = useState<Record<string, Position | null>>({});
  const [points, setPoints] = useState<number>(0);


  useEffect(() => {
    AsyncStorage.getItem(POINTS_KEY).then(value => {
      if (value !== null) {
        setPoints(Number(value));
      }
    });
  }, []);
  
  useFocusEffect(
    useCallback(() => {
      (async () => {
        // ① 購入情報ロード
        const purJson = await AsyncStorage.getItem(PURCHASES_KEY);
        const purchasesData: Record<string, ShopItem> = purJson ? JSON.parse(purJson) : {};
        setLoadedPurchases(purchasesData);

        // ② 位置情報ロード
        if (Object.keys(purchasesData).length === 0) {
          await AsyncStorage.removeItem('@quiz:positions');
          setLoadedPositions({});
        } else {
          const posJson = await AsyncStorage.getItem('@quiz:positions');
          const parsed: Record<string, any> = posJson ? JSON.parse(posJson) : {};

          const smallCell = Dimensions.get('window').width / 4;
          const rawPos: Record<string, Position> = {};
          Object.entries(parsed).forEach(([key, p]) => {
            if (!p) return;
            const x = typeof p.x === 'number' ? p.x : NaN;
            const y = typeof p.y === 'number' ? p.y : NaN;
            rawPos[key] = {
              gridX: !isNaN(x) ? Math.round(x / smallCell) : (p.gridX || 0),
              gridY: !isNaN(y) ? Math.round(y / smallCell) : (p.gridY || 0),
            };
          });

          const finalPositions: Record<string, Position | null> = {};
          Object.values(purchasesData).forEach(item => {
            finalPositions[item.id] = rawPos[item.id] ?? null;
          });
          setLoadedPositions(finalPositions);
        }
      })();
    }, [])
  );

  const ctx = useContext(UIConfigContext)!;
  const router = useRouter();
  // ウィジェットごとの設定を取得
  const config = useWidgetConfig(item.id as WidgetId);

  // 購入済みでなければ描画しない
  if (!loadedPurchases[item.id]) {
    return null;
  }

  // セルサイズとウィジェットサイズを計算
  const cellSize = Dimensions.get('window').width / 4;
  const widgetWidth = cellSize * item.widthCells;
  const widgetHeight = cellSize * item.heightCells;

  // 保存済み位置がない場合は描画しない
  const savedPos = loadedPositions[item.id];
  if (!savedPos) {
    return null;
  }
  const safeInitialPos = {
    x: savedPos.gridX * cellSize,
    y: savedPos.gridY * cellSize,
  };

  return (
    <Animated.View
      style={[
        styles.widgetContainer,
        config?.containerStyle,
        // ストレージから取得した座標を使って配置
        { left: safeInitialPos.x, top: safeInitialPos.y },
        { width: widgetWidth, height: widgetHeight },
      ]}
    >
      {config?.component && (() => {
        const Widget = config.component;
        const props = config.getDefaultProps?.(item) || {};
        return <Widget {...props} />;
      })()}

      {config?.actions?.map((act, idx) => (
        <TouchableOpacity
          key={idx}
          style={[styles.actionButton, act.buttonStyle]}
          onPress={() => {
            act.onPress?.();
            if (act.route) {
              router.push(act.route as any);
            } else {
              console.warn('[DraggableItem] no route defined for action', act);
            }
          }}
        >
          <Text style={[styles.actionButtonText, act.buttonTextStyle]}>
            {act.label}
          </Text>
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  widgetContainer: { 
    position: 'absolute', 
  },
  actionButton: {
    marginTop: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  actionButtonText: {
    fontSize: 12,
    color: '#333',
  },
});