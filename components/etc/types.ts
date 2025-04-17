// types.ts

export interface MemoryLevelProps {
  loading: boolean;
  countSummary: Record<number, number>;
  adjustedCounts: number[];
  largeWidgetWidth: number;
  forceTheme?: 'light' | 'dark'; // ✅ 追加
}

  
  export interface JsonData {
    id: number;
    result: number[]; // [0]: step1用, [1]: step2用, [2]: 1日目用, [3]: 2日目用, etc.
  }
  
  export interface CorrectDataItem {
    count: number;
    lastCorrect: string;
    startedAt?: string | null;
  }
  
  export interface CorrectData {
    [key: string]: CorrectDataItem;
  }
  
  export interface TodayMissionProps {
    loading: boolean;
    dayData: JsonData | null;
    adjustedCounts: Record<number, number>;
    stampBackgrounds: readonly [string, string, ...string[]][];
    countLabels: { [key: number]: string };
  }
  
  export interface Question {
    id: number | string;
    question: string;
    choices: string[];
    correctAnswer: string;
    japan?: string; // Optional property
  }
  