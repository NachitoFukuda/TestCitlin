// app/config/widgetConfig.ts
import type { ViewStyle, TextStyle } from 'react-native';
import type React from 'react';
import { Dimensions } from 'react-native';
import Heatmapo1 from './Heatmapo1';
import WeekProgressChart from './WeekProgressChart';
import PointsDisplay from './PointsDisplay';
import StreakProgressCard from './StreakProgressCard';
import WigeetButton from './wigeetButton';
import TodayGool from './TodayGool';
import Hometopcard from './Hometopcard';
import Calender from './Calender';
import Heatmapo2 from './Heatmapo2';

// 例えば、この ID に対応づけ
export type WidgetId = 'start01' | 'start02' | 'start03'| 'start04'|'start05'|'start06'|'start07'|'start08'|'start09'
|'note01'
|'chach01'| 'chach02' |'chach03'| 'chach04' | 'chach05'| 'chach06'| 'chach07'| 'chach08'
|'TodayGool1'|'TodayGool2'
|'TodayGool01'|'TodayGool0'|'Howday1'|'Howday2'
|'Heatmap01'|'Heatmap02'|'Heatmap03'|'Heatmap04'|'Heatmap05'
|'WeekProgress01'|'WeekProgress02'|'WeekProgress03'|'WeekProgress04'|'WeekProgress05'|'WeekProgress06'|'WeekProgress065'|'WeekProgress07'|'WeekProgress08'|'WeekProgress09'|'WeekProgress10'
|'calender01';
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
    component: WigeetButton,
    getDefaultProps: () => ({
      actions: [
        {
          label: 'START',
          onPress: () => console.log('質問画面へ'),
          route: '/question',
        },
      ],
      shape: 'line',
    }),
  },
  start02: {
    component: WigeetButton,
    getDefaultProps: () => ({
      actions: [
        {
          label: 'START',
          onPress: () => console.log('質問画面へ'),
          route: '/question',
        },
      ],
      shape: 'line',
      size: 'long',
    }),
  },
  start03: {
    component: WigeetButton,
    getDefaultProps: () => ({
      actions: [
        {
          label: 'START',
          onPress: () => console.log('質問画面へ'),
          route: '/question',
        },
      ],
      shape: 'line_cercle',
    }),
  },
  start04: {
    component: WigeetButton,
    getDefaultProps: () => ({
      actions: [
        {
          label: 'START',
          onPress: () => console.log('質問画面へ'),
          route: '/question',
        },
      ],
      shape: 'line_cercle',
      size: 'long',
    }),
  },
   start05: {
       component: WigeetButton,
       getDefaultProps: () => ({
         actions: [
           {
             label: 'START',
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
            label: 'START',
            onPress: () => console.log('質問画面へ'),
            route: '/question',
          },
        ],
        size: 'long',
      }),
    },
    start07: {
      component: WigeetButton,
      getDefaultProps: () => ({
        actions: [
          {
            label: 'START',
            onPress: () => console.log('質問画面へ'),
            route: '/question',
          },
        ],
        desigin:'rainbow'
      }),
    },
   start08: {
     component: WigeetButton,
     getDefaultProps: () => ({
       actions: [
         {
           label: 'START',
           onPress: () => console.log('質問画面へ'),
           route: '/question',
         },
       ],
       size: 'long',
       desigin:'rainbow'
     }),
   },
   start09: {
    component: WigeetButton,
    getDefaultProps: () => ({
      actions: [
        {
          label: 'START',
          onPress: () => console.log('質問画面へ'),
          route: '/question',
        },
      ],
      size: 'box',
      desigin:'brue'
    }),
  },
  
  note01: {
    component: WigeetButton,
    getDefaultProps: () => ({
      actions: [
        {
          label: 'note',
          onPress: () => console.log('単語帳へ'),
          route: '/NoteComp',
        },
      ],
      size: 'minibox',
      desigin:'brue'
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
    chach07: {
      component: PointsDisplay,
      getDefaultProps: () => ({
        size: 'short',
        shape: 'numo',
        desigin:'rainbow'
    }),  },
  chach08: {
      component: PointsDisplay,
      getDefaultProps: () => ({
        shape: 'numo',
        desigin:'rainbow'
    }),  },

    TodayGool0: {
      component: TodayGool,
      getDefaultProps: () => {
        return {
          desigin:'simple'
        };
      },
    },    
    TodayGool01: {
      component: TodayGool,
      getDefaultProps: () => {
        return {
          desigin:'simple',
          display:'Howday'
        };
      },
    },
    TodayGool1: {
      component: TodayGool,
      getDefaultProps: () => {
        return {


        };
      },
    },
    
    TodayGool2: {
      component: TodayGool,
      getDefaultProps: () => {
        return {
          desigin:'rainbow'
        };
      },
    },
    Howday1: {
      component: TodayGool,
      getDefaultProps: () => {
        return {
          display:'Howday'

        };
      },
    },
    Howday2: {
      component: TodayGool,
      getDefaultProps: () => {
        return {
          fromShop: false,
          display:'Howday',
          desigin:'rainbow'
        };
      },
    },
  Heatmap01: {
    component: Heatmapo1,
    getDefaultProps: () => {
      return {
        fromShop: false,
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
        fromShop: false,
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
        fromShop: false,
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
        fromShop: false,
        data: Array.from({ length: 10 }, () => Array(10).fill(0.5)),
        label: 'blue',
        shape:'square',
        backgroundColor:'white',
        border:'numo',
      };
    },
  },
  Heatmap05: {
    component: Heatmapo2,
    getDefaultProps: () => {
      return {
        fromShop: false,
        data: Array.from({ length: 10 }, () => Array(10).fill(0.5)),
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
  WeekProgress065: {
    component: WeekProgressChart,
    getDefaultProps: () => ({
      fromShop: false,
      shape: 'simple',
      color: 'rgb(0, 0, 0)',
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
  WeekProgress09: {
    component: StreakProgressCard,
    getDefaultProps: () => ({
      fromShop: false,
      color: 'wight',
      shape:'RadarChart'
    }),
},
WeekProgress10: {
  component: Hometopcard,
  getDefaultProps: () => ({
    fromShop: false,
  }),
},
calender01: {
  component: Calender,
  getDefaultProps: () => ({
    fromShop: false,
  }),
},
};
