import Svg, { Polyline, Path, Line } from 'react-native-svg';
import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NeomorphBox from '../ui/NeomorphBox';
import useQuestionData from '../questioncomp/useQuestionData';

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
  size,
}) => {
  // weekDataはストレージから取得する
  const [weekData, setWeekData] = useState<number[]>(Array(7).fill(0));
  const { level } = useQuestionData();
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');
  const CORRECT_New_KEY = `DAYLY_CORRECT_${sanitizedLevel}`;
  
useEffect(() => {
    (async () => {
      const scoreJson = await AsyncStorage.getItem(CORRECT_New_KEY);
      console.log(scoreJson)
      const scoreData: Record<string, any> = scoreJson ? JSON.parse(scoreJson) : {};
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayIndex = today.getDay(); // 0=Sunday ... 6=Saturday
      const lastWeek: number[] = Array(7).fill(0);
      for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(today.getDate() - (todayIndex - i));
        const key = d.toISOString().split('T')[0];
        const rawVal = scoreData[key];
        let num = 0;
        if (typeof rawVal === 'string' && rawVal.includes('/')) {
          // parse ratio string "count/goal"
          num = Number(rawVal.split('/')[0]) || 0;
        } else if (typeof rawVal === 'number') {
          num = rawVal;
        }
        lastWeek[i] = num;
      }
      setWeekData(lastWeek);
    })();
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

  // 背景色を親プロップから選択
  const containerBgColor =
    backgroundColor === 'brack'
      ? '#000'
      : backgroundColor === 'wight'
      ? '#fff'
      : backgroundColor || '#fff';

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

  // データ優先度: dataが7件ならそちらを使い、なければweekData
  const levelData = data && data.length === 7 ? data : weekData;

  // Normalize heights based on actual data maximum (at least 1 to avoid zero division)
  const maxVal = levelData.reduce((m, v) => Math.max(m, v), 1);

  // 棒グラフ描画
  const renderBarChart = () => (
    <View style={[styles.bars, { height: innerHeight * 0.8 }]}>
      {levelData.map((value, i) => {
        const barHeight = (value / maxVal) * (innerHeight * 0.8);
        return (
          <View
            key={i}
            style={{
              flex: 1,
              marginHorizontal: 4,
              height: barHeight,
              backgroundColor: color,
              borderRadius: 4,
            }}
          />
        );
      })}
    </View>
  );

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
    return (
      <Svg width={innerWidth} height={heightFactor}>
        <Line x1="0" y1={heightFactor} x2={innerWidth} y2={heightFactor} stroke="#ccc" strokeWidth={1} />
        <Polyline points={points} fill="none" stroke={color} strokeWidth={2} />
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
    return (
      <Svg width={innerWidth} height={heightFactor}>
        <Line x1="0" y1={heightFactor} x2={innerWidth} y2={heightFactor} stroke="#ccc" strokeWidth={1} />
        <Path d={d} fill="none" stroke={color} strokeWidth={2} />
      </Svg>
    );
  };

  return (
    <View style={[styles.container, { width: chartWidth, height: chartHeight }]}>
      {shape === 'simple' ? (
        // Simple mode: no NeomorphBox
        <View style={{
          width: chartWidth * 0.9,
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
          }}>
            {levelData.map((value, i) => {
              const barHeight = (value / maxVal) * (simpleInnerHeight);
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    justifyContent: 'center',   // 垂直中央揃え
    alignItems: 'center',       // 水平中央揃え
  },
  bars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
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
