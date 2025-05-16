import Svg, { Polyline, Path, Line } from 'react-native-svg';
import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NeomorphBox from '../ui/NeomorphBox';

/**
 * 過去1週間分の学習進捗データを棒グラフで表示するコンポーネント
 * heatmap_data ストレージから取得し、最後の行を描画対象にします。
 * fromShop が true の場合、幅を半分、高さも半分に縮小して表示します。
 */
interface WeekProgressChartProps {
  fromShop?: boolean;
  shape?: 'bar' | 'line' | 'curve';
  color?: string;
  data?: number[];
  backgroundColor?: string;
  size?: 'short';
}

const WeekProgressChart: React.FC<WeekProgressChartProps> = ({
  fromShop = false,
  shape = 'bar',
  color = '#3B5998',
  data,
  backgroundColor,
  size,
}) => {
  // 外部から data が渡されていればそれを使い、未指定なら AsyncStorage 読み込み
  const [weekData, setWeekData] = useState<number[]>(data ?? Array(7).fill(0));

  useEffect(() => {
    // data prop がある場合は読み込み不要
    if (data) return;
    AsyncStorage.getItem('@heatmap_data')
      .then(json => {
        try {
          const parsed = JSON.parse(json || '');
          if (
            parsed?.matrix &&
            Array.isArray(parsed.matrix) &&
            parsed.matrix.every(
              (row: any) => Array.isArray(row) && row.every((v: any) => typeof v === 'number')
            )
          ) {
            const matrix: number[][] = parsed.matrix;
            // 最後の行を取得（直近1週間）
            const lastWeek = matrix[matrix.length - 1];
            setWeekData(lastWeek);
            return;
          }
        } catch {
          // ignore parse errors
        }
        // データがない場合は0埋め
        setWeekData(Array(7).fill(0));
      })
      .catch(() => {
        setWeekData(Array(7).fill(0));
      });
  }, [data]);

  const screenWidth = Dimensions.get('window').width;
  // size が 'short' の場合は画面幅の 50%、それ以外は従来ロジック
  const chartWidth = size === 'short'
    ? screenWidth * 0.5
    : screenWidth * (fromShop ? 0.4 : 1);
  const chartHeight = screenWidth * (fromShop ? 0.2 : 0.5);

  // 内側コンテナのマージン
  const innerMargin = 10;
  const innerWidth = chartWidth - innerMargin * 2;
  const innerHeight = chartHeight - innerMargin * 2;

  // 背景色を親プロップから選択
  const containerBgColor =
    backgroundColor === 'brack'
      ? '#000'
      : backgroundColor === 'wight'
      ? '#fff'
      : backgroundColor || '#fff';

  // 月曜日始まり or 日曜日始まりに合わせて日付ラベル
  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // 固定の最大値100で高さを正規化（0〜100をグラフ範囲に含む）
  const maxVal = 100;

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

  // 棒グラフ描画
  const renderBarChart = () => (
    <View style={[styles.bars, { width: '100%', height: innerHeight * 0.8 }]}>
      {weekData.map((value, i) => {
        const h = (value / maxVal) * (innerHeight * 0.8);
        return <View key={i} style={[styles.bar, { height: h, backgroundColor: color }]} />;
      })}
    </View>
  );

  // 折れ線グラフ描画
  const renderLineChart = () => {
    const xSpacing = innerWidth / (weekData.length - 1);
    const heightFactor = innerHeight * 0.8;
    const points = weekData
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
    if (weekData.length < 2) return null;
    const xSpacing = innerWidth / (weekData.length - 0);
    const heightFactor = innerHeight * 0.8;
    // 各点の座標取得
    const coords = weekData.map((v, i) => ({
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
      <NeomorphBox
        width={innerWidth}
        height={innerHeight}
        forceTheme="light"
      >
        <View
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 8,
            padding: innerMargin,
            overflow: 'hidden',
          }}
        >
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
