import Svg, { Polyline, Path, Line, Polygon, Defs, LinearGradient, Stop } from 'react-native-svg';
import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import NeomorphBox from '../ui/NeomorphBox';
import useQuestionData from '../questioncomp/useQuestionData';
import { getDatabase, ref, query, orderByKey, limitToLast, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';

/**
 * 過去1週間分の学習進捗データを棒グラフで表示するコンポーネント
 * heatmap_data ストレージから取得し、最後の行を描画対象にします。
 * fromShop が true の場合、幅を半分、高さも半分に縮小して表示します。
 */
interface WeekProgressChartProps {
  fromShop?: boolean;
  shape?: 'bar' | 'line' | 'curve' | 'simple';  
  color?: string;
  data?: number[];
  backgroundColor?: string;
  size?: 'short';
  sanitizedLevel: string;
}

const WeekProgressChart: React.FC<WeekProgressChartProps> = ({
  fromShop = false,
  shape = 'bar',
  color = '#666',
  data,
  backgroundColor,
  size,}) => {
  const db = getDatabase();
  const auth = getAuth();
  const currentUid = auth.currentUser?.uid;

  // weekDataはストレージから取得する
  const [weekData, setWeekData] = useState<number[]>(Array(7).fill(0));
  const [lastWeekData, setLastWeekData] = useState<number[]>(Array(7).fill(0));
  const { level } = useQuestionData();
  const [todayGoal, setTodayGoal] = useState<number>(0);
  const [dayCount, setDayCount] = useState<number>(1);
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');

  useEffect(() => {
    if (!currentUid || !sanitizedLevel) return;
    // Subscribe to last 7 days of data in real-time
    const weeklyQuery = query(
      ref(db, `users/${currentUid}/dailyCorrect_${sanitizedLevel}`),
      orderByKey(),
      limitToLast(7)
    );
    const unsubscribe = onValue(weeklyQuery, snap => {
      const dataObj: Record<string, number> = snap.val() || {};
      const arr = Array(7).fill(0);
      Object.entries(dataObj).forEach(([dateStr, val]) => {
        const d = new Date(dateStr);
        d.setHours(0,0,0,0);
        const idx = d.getDay();
        if (idx >= 0 && idx < 7) arr[idx] = val;
      });
      setWeekData(arr);
    }, error => {
      console.error('[WeekProgressChart] RTDB weekly onValue error:', error);
    });
    // Cleanup subscription on unmount or level change
    return () => unsubscribe();
  }, [sanitizedLevel]);

  // Maintain width:height ratio of 2:1
  const ASPECT_RATIO = 0.5;
  const screenWidth = Dimensions.get('window').width;
  // size が 'short' の場合は画面幅の 50%、それ以外は従来ロジック
  const chartWidth = size === 'short'
    ? screenWidth * 0.5
    : screenWidth * (fromShop ? 0.4 : 1);
  // Chart height always maintains the aspect ratio
  const chartHeight = chartWidth * ASPECT_RATIO;
  // const chartHeight = screenWidth * (fromShop ? 0.2 : 0.5); // Old calculation

  // 内側コンテナのマージン
  const innerMargin = 10;
  const innerWidth = chartWidth - innerMargin * 2;
  const innerHeight = chartHeight - innerMargin * 2;

  // For simple mode sizing
  const simpleContainerHeight = chartHeight * 0.9;
  const simpleInnerHeight = simpleContainerHeight - innerMargin * 3;

  // 月曜日始まり or 日曜日始まりに合わせて日付ラベル
  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Catmull-Rom → Cubic Bézier smooth path generator
  const smoothPath = (coords: { x: number; y: number }[]) => {
    let d = `M${coords[0].x},${coords[0].y}`;
    for (let i = 0; i < coords.length - 1; i++) {
      const p0 = coords[i - 1] ?? coords[i];
      const p1 = coords[i];
      const p2 = coords[i + 1];
      const p3 = coords[i + 2] ?? p2;
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
    }
    return d;
  };

  // Always use weekData (populated from AsyncStorage) for chart
  const levelData = weekData;
  const prevLevelData = lastWeekData;
  // Use today's goal as the maximum scale; if zero, use highest weekData value (at least 1)
  const dataMax = Math.max(...weekData, ...lastWeekData, 1);
  const maxVal = todayGoal > 0 ? todayGoal : dataMax;

  // 棒グラフ描画
  const renderBarChart = () => {
    const barWidth = innerWidth / levelData.length * 0.6;
    return (
      <View style={[styles.bars, { height: innerHeight * 0.8, width: '100%' }]}>
        {levelData.map((value, i) => {
          // Cap the bar to not exceed 100% of chart height
          const cappedValue = Math.min(value, maxVal);
          const barHeight = (cappedValue / maxVal) * (innerHeight * 0.8);
          return (
            <View
              key={i}
              style={{
                width: barWidth,
                height: barHeight,
                backgroundColor: color,
                borderRadius: 4,
              }}
            />
          );
        })}
      </View>
    );
  };

  // 折れ線グラフ描画
  const renderLineChart = () => {
    const xSpacing = innerWidth / (levelData.length - 1);
    const heightFactor = innerHeight * 0.8;
    const points = levelData
      .map((value, i) => {
        const x = i * xSpacing;
        const y = heightFactor - (value / maxVal) * heightFactor;
        return `${x},${y}`;
      })
      .join(' ');
    const areaPoints = points + ` ${innerWidth},${heightFactor} 0,${heightFactor}`;
    return (
      <Svg width={'100%'} height={heightFactor}>
        <Defs>
          <LinearGradient id="gradientLine" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="rgba(128,0,128,0.2)" stopOpacity="0.6" />
            <Stop offset="1" stopColor="rgba(124, 0, 124, 0.2)" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Polygon points={areaPoints} fill="url(#gradientLine)" />
        <Polyline points={points} fill="none" stroke="none" strokeWidth={2} />
      </Svg>
    );
  };

  // 曲線グラフ描画（滑らかな曲線）
  const renderCurveChart = () => {
    if (levelData.length < 2) return null;
    const xSpacing = innerWidth / (levelData.length - 0);
    const heightFactor = innerHeight * 0.8;
    // 各点の座標取得
    const coords = levelData.map((v, i) => ({
      x: i * xSpacing,
      y: heightFactor - (v / maxVal) * heightFactor,
    }));
    // Pathデータ生成（Catmull-Rom → Cubic Bézier）
    const d = smoothPath(coords);
    const closedD = d + ` L${coords[coords.length - 1].x},${heightFactor} L${coords[0].x},${heightFactor} Z`;

    // 先週分
    let prevCurve = null;
    if (prevLevelData.length === 7 && prevLevelData.some(v => v > 0)) {
      const prevCoords = prevLevelData.map((v, i) => ({
        x: i * xSpacing,
        y: heightFactor - (v / maxVal) * heightFactor, // 今週と同じスケールで比較
      }));
      const prevD = smoothPath(prevCoords);
      const prevClosedD = prevD + ` L${prevCoords[prevCoords.length - 1].x},${heightFactor} L${prevCoords[0].x},${heightFactor} Z`;
      prevCurve = (
        <>
          <Path d={prevClosedD} fill={'rgba(0, 90, 255, 0.18)'} strokeWidth={0} />
          <Path d={prevD} fill="none" stroke={'rgba(0, 90, 255, 0.82)'} strokeWidth={2} />
        </>
      );
    }
    return (
      <Svg width={'100%'} height={heightFactor}>
        <Defs>
          <LinearGradient id="gradientCurve" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="rgba(0, 191, 255, 0.2)" stopOpacity="0.6" />
            <Stop offset="1" stopColor="rgba(0, 191, 255, 0.0)" stopOpacity="0" />
          </LinearGradient>
        </Defs>
        {/* 曜日位置に薄い縦線 */}
        {Array.from({ length: levelData.length }).map((_, i) => {
          const x = i * xSpacing;
          return (
            <Line
              key={`vline-${i}`}
              x1={x}
              y1={0}
              x2={x}
              y2={heightFactor}
              stroke={'rgba(0,0,0,0.08)'}
              strokeWidth={1}
            />
          );
        })}
        {prevCurve}
        <Path d={closedD} fill="url(#gradientCurve)" strokeWidth={0} />
        {/* 曲線のストロークを追加 */}
        <Path d={d} fill="none" stroke='rgba(0, 191, 255, 0.82)' strokeWidth={2} />
      </Svg>
    );
  };

  return (
    <>
      <View style={[styles.container, { width: '100%', height: chartHeight }]}>
      {shape === 'simple' ? (
        // Simple mode: no NeomorphBox
        <View style={{
          width: '100%',
          height: simpleContainerHeight,
          padding: innerMargin,
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor:'#fff'
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            height: simpleInnerHeight,
            width: '100%',
          }}>
            {levelData.map((value, i) => {
              const barHeight = (value / todayGoal) * (simpleInnerHeight);
              return (
                <View
                  key={i}
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    position: 'relative',
                  }}
                >
                  {/* Background track */}
                  <View
                    style={{
                      width: 30,
                      height: simpleInnerHeight,
                      borderRadius: 5,
                      backgroundColor: '#eee',
                    }}
                  />
                  {/* Filled gauge */}
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      width: 30,
                      height: barHeight,
                      borderRadius: 5,
                      backgroundColor: value > 0 ? color : '#eee',
                    }}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.labels}>
            {labels.map((label, i) => (
              <Text
                key={i}
                style={[
                  styles.labelText,
                  { fontSize: fromShop ? styles.labelText.fontSize * 0.8 : styles.labelText.fontSize }
                ]}
              >
                {label}
              </Text>
            ))}
          </View>
        </View>
      ) : (
        // Default mode: wrap in NeomorphBox
        <>
          <NeomorphBox width={innerWidth} height={innerHeight} forceTheme="light">
          <View style={{
            width: '100%',
            height: '100%',
            borderRadius: 8,
            padding: innerMargin,
            overflow: 'hidden',
          }}>
            {shape === 'bar' && renderBarChart()}
            {shape === 'line' && renderLineChart()}
            {shape === 'curve' && renderCurveChart()}
            <View style={styles.labels}>
              {labels.map((label, i) => (
                <Text
                  key={i}
                  style={[
                    styles.labelText,
                    { fontSize: fromShop ? styles.labelText.fontSize * 0.8 : styles.labelText.fontSize }
                  ]}
                >
                  {label}
                </Text>
              ))}
            </View>
          </View>
        </NeomorphBox>
        </>
      )}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',   // 垂直中央揃え
    alignItems: 'center',       // 水平中央揃え
    width: '100%',
  },
  bars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  bar: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 4,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  labelText: {
    fontSize: 10,  // base size; will be scaled when fromShop=true
    color: '#666',
    flex: 1,
    textAlign: 'center',
  },
});

export default WeekProgressChart;
