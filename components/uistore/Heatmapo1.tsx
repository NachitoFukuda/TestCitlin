import React, { useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref as dbRef, get } from 'firebase/database';
import NeomorphBox from '../ui/NeomorphBox';
import useQuestionData from '../questioncomp/useQuestionData';

const Heatmap1: React.FC<{ fromShop?: boolean; label?: string; shape?: string; backgroundColor?: string; border?: string; testDate?: string; }> =
  ({ fromShop = false, label, shape, backgroundColor, border, testDate }) => {
  const containerBgColor =
    backgroundColor === 'brack'
      ? '#000000'
      : backgroundColor === 'wight'
      ? '#FFFFFF'
      : backgroundColor || 'transparent';
  const scale = fromShop ? 0.6 : 1;
  // テスト用: testDate があればその日付を「今日」として扱う
  const effectiveToday = useMemo(() => {
    if (testDate) {
      const [y, m, d] = testDate.split('-').map(Number);
      return new Date(y, (m || 1) - 1, d || 1);
    }
    return new Date();
  }, [testDate]);
  // デフォルトデータ（ストレージに値がない場合はすべて0）
  const defaultData: number[][] = Array.from({ length: 4 }, () =>
    Array.from({ length: 7 }, () => 0)
  );
  const [data, setData] = useState<number[][]>(defaultData);
  const { level } = useQuestionData();
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');
  // Determine the maximum score for dynamic color scaling (at least 1 to avoid division by zero)
  const flatData = data.flat();
  const maxValue = flatData.reduce((max, val) => Math.max(max, val), 1);

  useEffect(() => {
    (async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        setData(defaultData);
        return;
      }
      const db = getDatabase();
      const snap = await get(dbRef(db, `users/${user.uid}/dailyCorrect_${sanitizedLevel}`));
      const allData: Record<string, any> = snap.val() || {};

      // Clone defaultData
      const newData = defaultData.map(row => row.slice());
      const today = effectiveToday;

      // Heatmapo2 と同じデータ配置ロジック
      // 1) すべての日付キー(YYYY-MM-DD)を today からの差分日数で配置
      // 2) 今日の値は一旦保持し、最後に最下段の todayIndex に書き込む
      let todayValue = 0;

      Object.entries(allData).forEach(([dateKey, rawVal]) => {
        // 値を数値に正規化（"count/goal" 形式も先頭を採用）
        let count = 0;
        if (typeof rawVal === 'number') count = rawVal;
        else if (typeof rawVal === 'string') count = rawVal.includes('/') ? Number(rawVal.split('/')[0]) || 0 : Number(rawVal) || 0;

        const [y, m, d] = dateKey.split('-').map(Number);
        const date = new Date(y, (m || 1) - 1, d || 1);
        const diffDays = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        if (diffDays === 0) {
          todayValue = count;
        } else if (diffDays >= 0 && diffDays < rows * cols) {
          const row = rows - 1 - Math.floor(diffDays / cols);
          const col = date.getDay();
          newData[row][col] = count;
        }
      });

      // 未来日データがある場合の繰り上げ処理（Heatmapo2 と同じ）
      const todayIndexLocal = today.getDay();
      const lastRow = rows - 1;
      const hasFutureInLastRow = newData[lastRow].some((val, idx) => idx > todayIndexLocal && val > 0);
      if (hasFutureInLastRow) {
        for (let r = 0; r < rows - 1; r++) {
          newData[r] = [...newData[r + 1]];
        }
        newData[lastRow] = Array.from({ length: cols }, () => 0);
      }

      // 繰り上げ後に今日の値を最後の行の今日カラムに書き込む
      newData[lastRow][todayIndexLocal] = todayValue;

      setData(newData);
    })();
  }, [sanitizedLevel, effectiveToday]);



    const cellMargin = 3;
    const todayIndex = effectiveToday.getDay(); // 0=Sunday ... 6=Saturday

    // HSLからRGBへの変換関数
    const hslToRgb = (h: number, s: number, l: number): [number, number, number] => {
        s /= 100;
        l /= 100;
        const k = (n: number) => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = (n: number) =>
            l - a * Math.max(-1, Math.min(Math.min(k(n) - 3, 9 - k(n)), 1));
        return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
    };

  // 値 (0~100) を色 (白→青/黒) に変換（0～1に正規化）
  const getColor = (value: number) => {
    const v = Math.max(0, Math.min(1, value / maxValue));
    let lightness;
    let hue;
    switch (label) {
      case 'blue':
        lightness = 96 - v * 40;  // 90〜50%（薄青〜濃青）
        hue = 210;
        break;
      case 'brack':
        lightness = 96 - v * 100; // 100~0% (白～黒)
        hue = 0; // Hueは黒の場合任意の値で良い
        break;
      default:
        lightness = 93 - v * 40; // デフォルトを青とする
        hue = 240;
    }
    const [r, g, b] = hslToRgb(hue, label === 'brack' ? 0 : 60, lightness); // 黒の場合は彩度0
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const screenWidth = Dimensions.get('window').width;
  const containerHeight = screenWidth * 0.85;

  const cols = 7;
  const rows = 4;  // 固定で4行に設定

  // 正方形セルのサイズは両方向の最小値
  const cellSize = 40 ;
  // 7列＋セル間マージンで正確なグリッド幅を計算
  const gridWidth = cellSize * cols + cellMargin * (cols - 1);
  const containerPadding = cellMargin + 10;
  const baseBoxWidth = gridWidth + containerPadding * 2;
  const baseBoxHeight = rows * cellSize + cellMargin * (rows - 1) + 20 + containerPadding * 2; // 20 は曜日ヘッダーの高さ
  
  const boxWidth = fromShop ? baseBoxWidth * 0.6 : baseBoxWidth;
  const boxHeight = fromShop ? baseBoxHeight * 0.6 : baseBoxHeight;

  return (
    <>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NeomorphBox
            width={boxWidth}
            height={boxHeight}
            style={{
              backgroundColor: containerBgColor,
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
              padding: containerPadding,
            }}
            forceTheme={'light'}
          >
            <View style={{ transform: [{ scale }] }}>
              {/* 曜日ヘッダー */}
              <View style={{ flexDirection: 'row', width: gridWidth, marginBottom: cellMargin, alignItems: 'center' }}>
                {['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day, idx) => (
                  <Text
                    key={`header-${idx}`}
                    style={{
                      width: cellSize,
                      marginRight: idx < cols - 1 ? cellMargin : 0,
                      textAlign: 'center',
                      fontSize: 12,  // 固定フォントサイズ
                      color: '#666',
                    }}
                  >
                    {day}
                  </Text>
                ))}
              </View>
              {/* ヒートマップ本体 */}
              <View style={[styles.container, { width: gridWidth }]}>
                {data.flat().slice(0, rows * cols).map((value, idx) => {
                  const r = Math.floor(idx / cols);
                  const c = idx % cols;
                  return (
                    <View
                      key={`cell-${r}-${c}`}
                      style={{
                        width: cellSize,
                        height: cellSize,
                        backgroundColor: getColor(value),
                        borderRadius: shape === 'circle'
                          ? cellSize / 2
                          : cellSize * 0.1,
                        marginRight: c < cols - 1 ? cellMargin : 0,
                        marginBottom: r < rows - 1 ? cellMargin : 0,
                        ...(r === rows - 1 && c === todayIndex
                          ? { borderWidth: 2, borderColor: '#666' }
                          : {}),
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </NeomorphBox>
        </View>
 
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Heatmap1;