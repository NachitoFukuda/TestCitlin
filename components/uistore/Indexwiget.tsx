import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import {
    Animated,
    PanResponder,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
  } from 'react-native';import { UIConfigContext } from '../contexts/UIConfigContext';
import { ViewStyle } from 'react-native';
import { useWidgetConfig } from '../uistore/useWidgetConfig';
import type { WidgetId } from '../uistore/widgetConfig';

type DraggableItemProps = {
  item: { id: string; name: string; widthCells: number; heightCells: number };
  initialPos?: { x: number; y: number };
  draggable?: boolean;
  onDragEnd?: (x: number, y: number) => void;
};

export default function DraggableItem({
  item,
}: DraggableItemProps) {
  const ctx = useContext(UIConfigContext)!;
  const router = useRouter();
  // ウィジェットごとの設定を取得
  const config = useWidgetConfig(item.id as WidgetId);
  const WidgetComponent = config?.component;
  const widgetProps = config?.getDefaultProps ? config.getDefaultProps(item) : {};

  // セルサイズとウィジェットサイズを計算
  const cellSize = Dimensions.get('window').width / 4;
  const widgetWidth = cellSize * item.widthCells;
  const widgetHeight = cellSize * item.heightCells;

  // ストレージから位置を取得しピクセル換算
   const grid = ctx.positions[item.id] ?? { gridX: 0, gridY: 0 };
   const safeInitialPos = {
     x: grid.gridX * cellSize,
     y: grid.gridY * cellSize,
   };

  // pan を初期化し、ポジション更新時にセット
  const pan = useRef(new Animated.ValueXY(safeInitialPos)).current;
  useEffect(() => {
    pan.setValue(safeInitialPos);
  }, [safeInitialPos]);

  // positions がない場合は描画しない
  if (!ctx.positions[item.id]) {
    return null;
  }

  return (
    <Animated.View
      // ドラッグ無効化のため panHandlers を削除
      style={[
        styles.widgetContainer,
        config?.containerStyle,          // 追加
        pan.getLayout() as ViewStyle,
        { width: widgetWidth, height: widgetHeight },
      ]}
    >
      {WidgetComponent ? (
        <WidgetComponent {...widgetProps} />
      ) : (
        <Text style={[styles.text, config?.textStyle]}>{item.name}</Text>
      )}
      {config.actions?.map((act, idx) => (
        <TouchableOpacity
          key={idx}
          style={[styles.actionButton, act.buttonStyle]}
          onPress={() => {
            console.log(
              `[DraggableItem] action pressed: label=${act.label}, itemId=${item.id}, route=${act.route}`
            );
            act.onPress?.();
            if (act.route) {
              console.log(`[DraggableItem] navigating to ${act.route}`);
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
    backgroundColor: '#fff', // 明るい背景色を追加

  },
  text: { 
    fontSize: 12, 
    textAlign: 'center', 
    color: '#333', // テキスト色を少し濃く
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