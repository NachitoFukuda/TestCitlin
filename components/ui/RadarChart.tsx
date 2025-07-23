import React from 'react';
import Svg, { Polygon, Line, Text as SvgText } from 'react-native-svg';

// If you want a quick placeholder:
export default function RadarChart({
  data,
  size,
  color,
}: {
  data: number[];
  size: number;
  color: string;
}) {
  const radius = size / 2;
  const cx = size / 2;
  const cy = size / 2;
  // Make the pentagon slightly smaller
  const scaledRadius = radius * 0.8;
  const angleStep = (2 * Math.PI) / 5;
  // Calculate each vertex position using the scaled radius
  const coordsList = Array.from({ length: 5 }).map((_, i) => {
    const x = cx + scaledRadius * Math.cos(angleStep * i - Math.PI / 2);
    const y = cy + scaledRadius * Math.sin(angleStep * i - Math.PI / 2);
    return { x, y };
  });

  // Generate random values for each axis and compute their positions
  const randomValues = Array.from({ length: 5 }).map(() => Math.random());
  const dataCoords = randomValues.map((v, i) => {
    const x = cx + scaledRadius * v * Math.cos(angleStep * i - Math.PI / 2);
    const y = cy + scaledRadius * v * Math.sin(angleStep * i - Math.PI / 2);
    return { x, y };
  });
  const dataPoints = dataCoords.map(({ x, y }) => `${x},${y}`).join(' ');
  // ——— ピンクのオーバーレイ用ランダムデータ生成 ———
  const randomPinkValues = Array.from({ length: 5 }).map(() => Math.random());
  const dataPinkPoints = randomPinkValues.map((v, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const x = cx + scaledRadius * v * Math.cos(angle);
    const y = cy + scaledRadius * v * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  // Labels for each axis
  const labels = ['1級', '準1級', '2級', '準2級', '3級'];
  const points = coordsList.map(({ x, y }) => `${x},${y}`).join(' ');
  // Generate grid of concentric pentagons for memory lines
  const gridLevels = 4;
  const gridCoords = Array.from({ length: gridLevels }, (_, lvl) => {
    const ratio = (lvl + 1) / 5; // divide into 5 segments
    return Array.from({ length: 5 }).map((_, i) => {
      const angle = angleStep * i - Math.PI / 2;
      return {
        x: cx + scaledRadius * ratio * Math.cos(angle),
        y: cy + scaledRadius * ratio * Math.sin(angle),
      };
    });
  });
  const gridPoints = gridCoords.map(coords =>
    coords.map(({ x, y }) => `${x},${y}`).join(' ')
  );
  return (
    <Svg width={size} height={size}>
      {/* Teal random data polygon */}
      <Polygon
        points={dataPoints}
        fill="rgba(0, 191, 255, 0.59)" // 水色
        stroke="rgb(166, 165, 165)"
        strokeWidth={1}
      />
      {/* Pink overlay random data polygon */}
      <Polygon
        points={dataPinkPoints}
        fill="rgba(0, 90, 255, 0.46)" // 青
        stroke="#005AFF"
        strokeWidth={1}
      />
      {/* Memory grid pentagons */}
      {gridPoints.map((pts, idx) => (
        <Polygon
          key={`grid-${idx}`}
          points={pts}
          fill="none"
          stroke="rgba(210,210,210,0.5)"
          strokeWidth={1}
        />
      ))}
      {/* Pentagon frame */}
      <Polygon points={points} fill="none" stroke={'rgb(137, 137, 137)'} strokeWidth={2} />
      {/* Radial lines from center to each vertex */}
      {coordsList.map(({ x, y }, index) => (
        <Line
          key={index}
          x1={cx}
          y1={cy}
          x2={x}
          y2={y}
          stroke={'rgb(210, 210, 210)'}
          strokeWidth={1}
        />
      ))}
      {/* Axis labels */}
      {coordsList.map(({ x, y }, index) => (
        <SvgText
          key={`label-${index}`}
          x={x}
          y={y - 6 + (index === 2 || index === 3 ? 20 : 0)}
          fontSize={12}
          fill={'#666'}
          textAnchor="middle"
        >
          {labels[index]}
        </SvgText>
      ))}
    </Svg>
  );
}