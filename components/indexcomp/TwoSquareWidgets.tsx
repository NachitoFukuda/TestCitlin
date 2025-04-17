// TwoSquareWidgets.tsx
import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodayMission from './TodayMission'; // 読み込み先のパスに合わせて調整
import MemoryLevel from './MemoryLevel';
import {JsonData } from '../etc/types';
import NeomorphBox from '../ui/NeomorphBox';

interface TwoSquareWidgetsProps {
  todayLearnedCount: number;
  daysSinceStart: number | null;
  daysLeft: number | null;
  // 追加: テーマ情報（'light' または 'dark'）
  forceTheme?: 'light' | 'dark';
}

const TwoSquareWidgets: React.FC<TwoSquareWidgetsProps> = ({
  todayLearnedCount,
  daysSinceStart,
  daysLeft,
  forceTheme, // デフォルトは 'light'
}) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  // テーマに応じたテキストカラー（例）
  const widgetTextColor = forceTheme === 'dark' ? '#E0E0E0' : '#777';
  const widgetLargeTextColor = forceTheme === 'dark' ? '#FFFFFF' : '#999999';
  const smallerTextColor = forceTheme === 'dark' ? '#CCCCCC' : '#999999';

  // コンテナやウィジェットサイズ等の定数は useMemo でメモ化
  const containerPadding = useMemo(() => 10, []);
  const widgetMargin = useMemo(() => 15, []);
  const totalMargin = useMemo(() => widgetMargin * 2, [widgetMargin]);
  const availableWidth = useMemo(
    () => SCREEN_WIDTH - containerPadding * 2 - totalMargin,
    [SCREEN_WIDTH, containerPadding, totalMargin]
  );
  const widgetWidth = useMemo(() => availableWidth * 0.45, [availableWidth]);
  const widgetHeight = useMemo(() => widgetWidth, [widgetWidth]);
  const rightWidgetHeight = useMemo(
    () => (widgetHeight - widgetMargin) / 2,
    [widgetHeight, widgetMargin]
  );
  const largeWidgetWidth = useMemo(() => availableWidth, [availableWidth]);

  // dayNumber の計算
  const dayNumber = useMemo(
    () => (daysSinceStart !== null ? daysSinceStart + 1 : 0),
    [daysSinceStart]
  );

  const [loading, setLoading] = useState<boolean>(true);
  const [dayData, setDayData] = useState<JsonData | null>(null);
  const [countSummary, setCountSummary] = useState<Record<number, number>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // generated_data の取得
        const generatedDataRaw = await AsyncStorage.getItem('@generated_data');
        if (generatedDataRaw) {
          const generatedData: JsonData[] = JSON.parse(generatedDataRaw);
          const matchedData = generatedData.find((item) => item.id === dayNumber);
          setDayData(matchedData || null);
        } else {
          setDayData(null);
        }

        // correctData の取得
        const correctDataRaw = await AsyncStorage.getItem('correctData');
        if (correctDataRaw) {
          const correctData: Record<string, { C?: number; L?: number }> = JSON.parse(correctDataRaw);
          // `C` の値ごとのカウントの合計を求める
          const newSummary: Record<number, number> = {};
          Object.values(correctData).forEach((item) => {
            if (item.C !== undefined) {
              newSummary[item.C] = (newSummary[item.C] || 0) + 1;
            }
          });
          setCountSummary(newSummary);
        }
      } catch (error) {
        Alert.alert('エラー', 'データの取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dayNumber]);

  /**
   * adjustedCounts の計算
   *  - counts[0] は、1000 から 1～7 の合計を引いた値
   *  - counts[1～7] は、各 count 以上の合計
   */
  const adjustedCountsRecord: Record<number, number> = useMemo(() => {
    const counts: Record<number, number> = {};
    const totalLearned = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(
      (sum, c) => sum + (countSummary[c] || 0),
      0
    );
    counts[0] = Math.max(1000 - totalLearned, 0);
    for (let count = 1; count <= 7; count++) {
      counts[count] = 0;
      for (let c = count; c <= 7; c++) {
        counts[count] += countSummary[c] || 0;
      }
    }
    return counts;
  }, [countSummary]);

  // adjustedCounts を number[] に変換（キー 0～10 の順番）
  const adjustedCounts: number[] = useMemo(() => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => adjustedCountsRecord[key] ?? 0);
  }, [adjustedCountsRecord]);

  return (
    <View style={styles.container}>
      {/* Top Row: Today's Mission と右側のウィジェット群 */}
      <View style={styles.topRow}>
        {/* 左ウィジェット：Today's Mission */}
        <NeomorphBox width={widgetWidth} height={widgetHeight} forceTheme={forceTheme} >
          <TodayMission
            loading={loading}
            dayData={dayData}
            adjustedCounts={adjustedCounts}
            forceTheme={forceTheme}
            />
        </NeomorphBox>

        {/* スペーサー */}
        <View style={{ width: widgetMargin }} />

        {/* 右側ウィジェット群 */}
        <View style={styles.rightWidgetsContainer}>
          {/* 上側ウィジェット：今日の学習単語 */}
          <NeomorphBox width={widgetWidth} height={rightWidgetHeight} forceTheme={forceTheme} >
            <Text style={[styles.widgetText, { color: widgetTextColor }]}>
              今日の学習単語
            </Text>
            <Text style={[styles.widgetLargeText, { color: widgetLargeTextColor }]}>
              {todayLearnedCount !== null ? (
                <>
                  {`${todayLearnedCount}`}
                  <Text style={[styles.smallerText, { color: smallerTextColor }]}>単語</Text>
                </>
              ) : (
                ''
              )}
            </Text>
          </NeomorphBox>

          {/* スペーサー */}
          <View style={{ height: widgetMargin }} />

          {/* 下側ウィジェット：期限までの日数 */}
          <NeomorphBox width={widgetWidth} height={rightWidgetHeight} forceTheme={forceTheme} >
            <Text style={[styles.widgetText, { color: widgetTextColor }]}>
              {daysLeft !== null ? '期限まで' : ''}
            </Text>
            <Text style={[styles.widgetLargeText, { color: widgetLargeTextColor }]}>
              {daysLeft !== null ? (
                <>
                  {`${daysLeft - 1}`}
                  <Text style={[styles.smallerText, { color: smallerTextColor }]}>日</Text>
                </>
              ) : (
                ''
              )}
            </Text>
          </NeomorphBox>
        </View>
      </View>

      {/* 下部：MemoryLevel コンポーネント */}
      <MemoryLevel
        loading={loading}
        countSummary={countSummary}
        adjustedCounts={adjustedCounts}
        largeWidgetWidth={availableWidth}
        forceTheme={forceTheme}
      />
    </View>
  );
};

export default React.memo(TwoSquareWidgets);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
    flexWrap: 'nowrap',
  },
  rightWidgetsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  widgetText: {
    fontSize: 16,
  },
  widgetLargeText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallerText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
