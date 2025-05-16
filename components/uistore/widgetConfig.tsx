// app/config/widgetConfig.ts
import type { ViewStyle, TextStyle } from 'react-native';
import type React from 'react';
import { Dimensions } from 'react-native';
import Heatmapo1 from './Heatmapo1';
import WeekProgressChart from './WeekProgressChart';
import PointsDisplay from './PointsDisplay';
import StreakProgressCard from './StreakProgressCard';
import WigeetButton from './wigeetButton';

// 例えば、この ID に対応づけ
export type WidgetId = 'start01' | 'start02' | 'start03'| 'start04'|'start05'|'start06'
|'chach01'| 'chach02' |'chach03'| 'chach04' | 'chach05'| 'chach06'
|'Heatmap01'|'Heatmap02'|'Heatmap03'|'Heatmap04'
|'WeekProgress01'|'WeekProgress02'|'WeekProgress03'|'WeekProgress04'|'WeekProgress05'|'WeekProgress06'|'WeekProgress07'|'WeekProgress08';

// 各ウィジェットの共通 Props 型
export interface WidgetSettings {
  shopcontainerStyle?: ViewStyle;
  titleText?: TextStyle;
  indexText?: TextStyle;
  containerStyle?: ViewStyle;
  indexcontainerStyle?: ViewStyle;
  textStyle?: TextStyle;
  /** レイアウト用のスタイル（グリッド配置やマージンなど） */
  layoutStyle?: ViewStyle;
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
  // 以下を追加
  /** ウィジェットのタイトルテキスト */
  title?: string;
  /** ウィジェットのサブタイトル */
  subtitle?: string;
  /** アイコン名やコンポーネントを指定 */
  icon?: React.ReactNode;
  /** デフォルト配置位置（gridX, gridY） */
  defaultPosition?: { gridX: number; gridY: number };
}

// レジストリ本体
export const WIDGET_CONFIG: Record<WidgetId, WidgetSettings> = {
  start01: {
    shopcontainerStyle: { backgroundColor: '#EBF3FF',borderColor: '#666',borderWidth: 3, height:40, width: 80, borderRadius: 30,margin:10, justifyContent: 'center', alignItems: 'center'},
    titleText:{color: '#666'},
    layoutStyle: { backgroundColor: '#EBF3FF', padding: 12, zIndex: 5, borderRadius: 40, margin: 7, borderWidth: 2, borderColor: '#666' },
    textStyle: { color: '#666', fontSize: 20, letterSpacing: 3, textAlign: 'center' },
    title: 'start',
    containerStyle: { backgroundColor: '#EBF3FF', padding: 12, zIndex: 5, borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderColor: '#666' },
    subtitle: 'ゲームを始める',
    defaultPosition: { gridX: 1, gridY: 1 },
    actions: [
      {
        label: 'start',
        onPress: () => console.log(''),
        route: '/question',
        buttonStyle: {
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: '#EBF3FF',
          padding: 6,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 3,
          borderColor: '#666',
        },
        buttonTextStyle: { color: '#666', fontWeight: 'bold', fontSize: 25, letterSpacing: 3, textAlign: 'center' },
      },
    ],
  },
  start02: {
    shopcontainerStyle: { backgroundColor: '#EBF3FF',borderColor: '#666',borderWidth: 3,height:40, width: 160, borderRadius: 30,margin:10, justifyContent: 'center', alignItems: 'center'},
    titleText:{color: '#666'},
    layoutStyle: { backgroundColor: '#EBF3FF', padding: 12, zIndex: 5, borderRadius: 40, margin: 7, borderWidth: 2, borderColor: '#666' },
    title: 'start',
    containerStyle: { backgroundColor: '#EBF3FF', padding: 10, borderRadius: 8, zIndex: 3, justifyContent: 'center', alignItems: 'center' },
    actions: [
      {
        label: 'start',
        onPress: () => console.log('質問画面へ'),
        route: '/question',
        buttonStyle: {
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: '#EBF3FF',
          padding: 6,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 3,
          borderColor: '#666',
        },
        buttonTextStyle: { color: '#666', fontWeight: 'bold', fontSize: 25, letterSpacing: 3, textAlign: 'center' },
      },
    ],
  },
  start03: {
    shopcontainerStyle: { backgroundColor: '#666',height:40, width: 80, borderRadius: 30,margin:10, justifyContent: 'center', alignItems: 'center'},
    titleText:{color: '#fff'},
    layoutStyle: { backgroundColor: '#666', padding: 12, zIndex: 5, borderRadius: 40, margin: 7 },
    textStyle: { color: '#fff', fontSize: 20, letterSpacing: 3, textAlign: 'center' },
    title: 'start',
    containerStyle: { backgroundColor: '#EBF3FF', padding: 12, zIndex: 5, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
    subtitle: 'ゲームを始める',
    defaultPosition: { gridX: 1, gridY: 1 },
    actions: [
      {
        label: 'start',
        onPress: () => console.log(''),
        route: '/question',
        buttonStyle: {
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: '#666',
          padding: 6,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonTextStyle: { color: '#EBF3FF', fontWeight: 'bold', fontSize: 25, letterSpacing: 3, textAlign: 'center' },
      },
    ],
  },
  start04: {
    shopcontainerStyle: { backgroundColor: '#666',height:40, width: 160, borderRadius: 30,margin:10, justifyContent: 'center', alignItems: 'center'},
    titleText:{color: '#fff'},
    layoutStyle: { backgroundColor: '#666', padding: 12, zIndex: 5, borderRadius: 40, margin: 7 },
    textStyle: { color: '#fff', fontSize: 20, letterSpacing: 3, textAlign: 'center' },
    title: 'start',
    containerStyle: { backgroundColor: '#EBF3FF', padding: 10, borderRadius: 8, zIndex: 3, justifyContent: 'center', alignItems: 'center' },
    actions: [
      {
        label: 'start',
        onPress: () => console.log('質問画面へ'),
        route: '/question',
        buttonStyle: {
          flex: 1,
          width: '100%',
          height: '100%',
          backgroundColor: '#666',
          padding: 6,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        },
        buttonTextStyle: { color: '#EBF3FF', fontWeight: 'bold', fontSize: 30, letterSpacing: 4, textAlign: 'center' },
      },
    ],
  },
   start05: {
       component: WigeetButton,
       getDefaultProps: () => ({
         actions: [
           {
             label: 'start',
             onPress: () => console.log('質問画面へ'),
             route: '/question',
           },
         ],
       }),
     },
    start06: {
      component: WigeetButton,
      getDefaultProps: () => ({
        actions: [
          {
            label: 'start',
            onPress: () => console.log('質問画面へ'),
            route: '/question',
          },
        ],
        size: 'long',
      }),
    },
  chach01: {
    component: PointsDisplay,
    getDefaultProps: () => ({
      shape: 'square',
      size: 'short',
    }),
  },
  chach02: {
    component: PointsDisplay,
    getDefaultProps: () => ({
      shape: 'square',
    }),  },
  chach03: {
    component: PointsDisplay,
    getDefaultProps: () => ({
      size: 'short',

    }),  },
  chach04: {
    component: PointsDisplay,
    getDefaultProps: () => ({
    }),  },
  chach05: {
      component: PointsDisplay,
      getDefaultProps: () => ({
        size: 'short',
        shape: 'numo',
    }),  },
  chach06: {
      component: PointsDisplay,
      getDefaultProps: () => ({
        shape: 'numo',
    }),  },
  Heatmap01: {
    component: Heatmapo1,
    getDefaultProps: () => {
      return {
        data: Array.from({ length: 10 }, () => Array(10).fill(0.5)),
        label: 'brack',
        shape:'circle',
        backgroundColor:'white'
      };
    },
  },
  Heatmap02: {
    component: Heatmapo1,
    getDefaultProps: () => {
      return {
        data: Array.from({ length: 10 }, () => Array(10).fill(0.5)),
        label: 'blue',
        shape:'circle',
        backgroundColor:'white'

      };
    },
  },
  Heatmap03: {
    component: Heatmapo1,
    getDefaultProps: () => {
      return {
        data: Array.from({ length: 10 }, () => Array(10).fill(0.5)),
        label: 'brack',
        shape:'square',
        backgroundColor:'white',
        border:'numo',
      };
    },
  },
  Heatmap04: {
    component: Heatmapo1,
    getDefaultProps: () => {
      return {
        data: Array.from({ length: 10 }, () => Array(10).fill(0.5)),
        label: 'blue',
        shape:'square',
        backgroundColor:'white',
        border:'numo',
      };
    },
  },
  WeekProgress01: {
    component: WeekProgressChart,
    getDefaultProps: () => ({
      fromShop: false,
      shape: 'curve',
      color: 'rgb(51, 51, 51)',
    }),
  },
  WeekProgress02: {
    component: WeekProgressChart,
    getDefaultProps: () => ({
      fromShop: false,
      shape: 'curve',
      color: 'rgb(0, 157, 255)',
    }),
  },
  WeekProgress03: {
    component: WeekProgressChart,
    getDefaultProps: () => ({
      fromShop: false,
      shape: 'line',
      color: 'rgb(51, 51, 51)',
    }),
  },  
  WeekProgress04: {
    component: WeekProgressChart,
    getDefaultProps: () => ({
      fromShop: false,
      shape: 'line',
      color: 'rgb(0, 157, 255)',
    }),
  },  
  WeekProgress05: {
    component: WeekProgressChart,
    getDefaultProps: () => ({
      fromShop: false,
      shape: 'bar',
      color: 'rgb(51, 51, 51)',
    }),
  },  
  WeekProgress06: {
    component: WeekProgressChart,
    getDefaultProps: () => ({
      fromShop: false,
      shape: 'bar',
      color: 'rgb(0, 157, 255)',
    }),
  },
    WeekProgress07: {
      component: StreakProgressCard,
      getDefaultProps: () => ({
        fromShop: false,
        color: 'brack',
      }),
    },  
    WeekProgress08: {
      component: StreakProgressCard,
      getDefaultProps: () => ({
        fromShop: false,
        color: 'wight',
      }),
  },
};
