// app/config/widgetConfig.ts
import type { ViewStyle, TextStyle } from 'react-native';
import type React from 'react';

// 例えば、この ID に対応づけ
export type WidgetId = 'sticker01' | 'themeA' | 'questionbuttons';

// 各ウィジェットの共通 Props 型
export interface WidgetSettings {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  getDefaultProps?: (data: any) => any;
    actions?: {
    route?: string;
    label: string;
    onPress: () => void;
    buttonStyle?: ViewStyle;
    buttonTextStyle?: TextStyle;
  }[];
  // 任意にコンポーネント itself を差し替えたいなら
  component?: React.FC<any>;
}

// レジストリ本体
export const WIDGET_CONFIG: Record<WidgetId, WidgetSettings> = {
  sticker01: {
    containerStyle: { backgroundColor: '#f00', padding: 12,},
    textStyle:     { fontSize: 16, fontWeight: '600' },
    actions: [
      {
        label: '削除',
        onPress: () => console.log('ステッカーを削除'),
        buttonStyle: { marginTop: 8, backgroundColor: '#e74c3c', padding: 6, },
        buttonTextStyle: { color: '#fff', fontWeight: 'bold' },
      },
      {
        label: '編集',
        onPress: () => console.log('ステッカーを編集'),
        buttonStyle: { marginTop: 8, backgroundColor: '#4A90E2', padding: 6,},
        buttonTextStyle: { color: '#fff', fontWeight: 'bold' },
      },
    ],
  },
  themeA: {
    containerStyle: { backgroundColor: '#fff8e1', padding: 10, borderRadius: 8 },
    textStyle:      { fontSize: 14, color: '#333' },
    actions: [
      {
        label: 'ダークモード切替',
        onPress: () => console.log('ダークモードを切り替え'),
        buttonStyle: { marginTop: 8, backgroundColor: '#34495e', padding: 6,},
        buttonTextStyle: { color: '#fff', fontWeight: 'bold' },
      },
      {
        label: 'リセット',
        onPress: () => console.log('統計リセット'),
        buttonStyle: { marginTop: 8, backgroundColor: '#e67e22', padding: 6,},
        buttonTextStyle: { color: '#fff', fontWeight: 'bold' },
      },
    ],
  },
  questionbuttons: {
    containerStyle: { backgroundColor: '#d0e8ff', padding: 12,},
    textStyle: { fontSize: 16, fontWeight: '600', color: '#007aff' },
    actions: [
      {
        label: '質問画面へ',
        onPress: () => console.log('質問画面へ'),
        route: '/question',  // ここにルートパスを追加
        buttonStyle: { marginTop: 8, backgroundColor: '#007aff', padding: 6, borderRadius: 4 },
        buttonTextStyle: { color: '#fff', fontWeight: 'bold' },
      },
    ],
  },
};
