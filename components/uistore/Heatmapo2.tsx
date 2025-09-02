import React, { useState, useEffect, useRef, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, Animated } from 'react-native';
import NeomorphBox from '../ui/NeomorphBox';
import useQuestionData from '../questioncomp/useQuestionData';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref as dbRef, get } from 'firebase/database';

const Heatmapo1: React.FC<{ fromShop?: boolean; }> =
  ({ fromShop = false }) => {

  const scale = fromShop ? 0.6 : 1;
  const defaultData: number[][] = Array.from({ length: 6 }, () =>
    Array.from({ length: 7 }, () => 0)
  );
  const [data, setData] = useState<number[][]>(defaultData);
  const { level } = useQuestionData();
  const sanitizedLevel = String(level || 'unknown').replace(/\./g, '_');

  const [isLoaded, setIsLoaded] = useState(false);
  const appearAnim = useRef(new Animated.Value(0)).current;
  const cellMargin = 3;
  const cols = 7;
  const rows = 6;

  const rowAnims = useMemo(() => Array.from({ length: rows }, () => new Animated.Value(0)), [rows]);

  useEffect(() => {
    if (!sanitizedLevel) {
      setData(defaultData);
      setIsLoaded(true);
      return;
    }

    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // ユーザー未ログインでも空データで表示（非表示のままにならないように）
      if (!user) {
        setData(defaultData);
        setIsLoaded(true);
        return;
      }

      const db = getDatabase();
      const uid = user.uid;
      const allSnap = await get(dbRef(db, `users/${uid}/dailyCorrect_${sanitizedLevel}`));
      const allData: Record<string, number | string> = allSnap.val() || {};

      const cols = 7;
      const rows = 6;
      const newData: number[][] = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));

      const today = new Date();
      let todayValue = 0;

      Object.entries(allData).forEach(([dateKey, rawVal]) => {
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

      const todayIndexLocal = today.getDay();
      const lastRow = rows - 1;
      const hasFutureInLastRow = newData[lastRow].some((val, idx) => idx > todayIndexLocal && val > 0);
      if (hasFutureInLastRow) {
        for (let r = 0; r < rows - 1; r++) {
          newData[r] = [...newData[r + 1]];
        }
        newData[lastRow] = Array.from({ length: cols }, () => 0);
      }

      newData[lastRow][todayIndexLocal] = todayValue;
      setData(newData);
      setIsLoaded(true);
      Animated.stagger(60,
        rowAnims.map(v => Animated.timing(v, { toValue: 1, duration: 220, useNativeDriver: true }))
      ).start();
    });

    return () => unsubscribe();
  }, [sanitizedLevel]);

  const defoltwidh = Dimensions.get('window').width;
  const screenWidth = fromShop ? defoltwidh : defoltwidh;

  const containerHeight = screenWidth * 0.425;

  const cellSize = 20;
  const gridWidth = cellSize * cols + cellMargin * (cols - 1);
  const containerPadding = cellMargin + 10;
  const baseBoxWidth = gridWidth + containerPadding * 2;

  const boxWidth = fromShop ? baseBoxWidth * 0.6 : containerHeight;

  // Determine the maximum score for dynamic color scaling (at least 1 to avoid division by zero)
  const flatData = data.flat();
  const maxValue = flatData.reduce((max, val) => Math.max(max, val), 1);

  const todayIndex = new Date().getDay();

  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: screenWidth / 2,
          width: screenWidth / 2,
        }}
      >
        <NeomorphBox
          width={boxWidth}
          height={boxWidth}
          style={{
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
            padding: containerPadding,
          }}
          forceTheme={'light'}
        >
          <View style={{ transform: [{ scale }] }}>
            <View style={[
              styles.container,
              {
                width: gridWidth,
                marginBottom: cellMargin,
                justifyContent: 'space-between',
              }
            ]}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                <Text
                  key={`hd-${idx}`}
                  style={{
                    width: cellSize,
                    height: cellSize,
                    textAlign: 'center',
                    fontSize: 12,
                    color: '#666',
                  }}
                >
                  {day}
                </Text>
              ))}
            </View>
            {isLoaded && (
              data.map((rowData, r) => (
                <Animated.View
                  key={`row-${r}`}
                  style={{
                    flexDirection: 'row',
                    width: gridWidth,
                    opacity: rowAnims[r],
                    transform: [{
                      translateY: rowAnims[r].interpolate({ inputRange: [0, 1], outputRange: [6, 0] })
                    }],
                    marginBottom: r < rows - 1 ? cellMargin : 0,
                  }}
                >
                  {rowData.map((value, c) => (
                    <View
                      key={`cell-${r}-${c}`}
                      style={{
                        width: cellSize,
                        height: cellSize,
                        marginRight: c < cols - 1 ? cellMargin : 0,
                        backgroundColor:
                          typeof value === 'number' && value > 0
                            ? `rgba(0, 177, 252, ${0.3 + 0.7 * Math.min(1, value / maxValue)})`
                            : '#f0f0f0',
                        ...(r === rows - 1 && c === todayIndex
                          ? { borderWidth: 2, borderColor: '#000' }
                          : {}),
                      }}
                    />
                  ))}
                </Animated.View>
              ))
            )}
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

export default Heatmapo1;