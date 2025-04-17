import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import type { MemoryLevelProps } from '../etc/types';
import NeomorphBox from '../ui/NeomorphBox';
import ProgressBarVertical from './ProgressBarVertical';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: screenWidth } = Dimensions.get('window');

const GROUPS = [
  { label: '未学習' },
  { label: '1日目', counts: [2] },
  { label: '2日目', counts: [3] },
  { label: '7日目', counts: [5] },
  { label: '20日目', counts: [7] },
  { label: '40日目', counts: [9] },
];

const MemoryLevel: React.FC<MemoryLevelProps> = ({
  loading,
  countSummary,
  adjustedCounts,
  largeWidgetWidth,
  forceTheme = 'light', // デフォルト値を設定
}) => {
  // レイアウト計算
  const widgetWidth = useMemo(
    () => largeWidgetWidth || screenWidth * 0.9,
    [largeWidgetWidth, screenWidth]
  );
  const height = useMemo(() => widgetWidth * 0.7, [widgetWidth]);
  const numberOfGauges = GROUPS.length;
  const betweenGaugeGap = 10; // 各ゲージ間の余白
  const sideMargin = 10;      // 全体の左右マージン

  const totalGaps = useMemo(() => betweenGaugeGap * (numberOfGauges - 1), [
    betweenGaugeGap,
    numberOfGauges,
  ]);
  const totalMargins = useMemo(() => sideMargin * 2 + totalGaps, [
    sideMargin,
    totalGaps,
  ]);
  const gaugeWidth = useMemo(
    () => (widgetWidth - totalMargins) / numberOfGauges,
    [widgetWidth, totalMargins, numberOfGauges]
  );
  const gaugeMaxHeight = useMemo(() => height - 140, [height]);

  // forceTheme に基づく色を一元管理
  const themeColors = useMemo(() => ({
    text: forceTheme === 'dark' ? '#E0E0E0' : '#777', // 通常テキスト
    boldText: forceTheme === 'dark' ? '#bbb' : '#777',  // 太字テキスト
    loadingText: forceTheme === 'dark' ? '#CCCCCC' : '#777',
    noDataText: forceTheme === 'dark' ? '#BBBBBB' : '#999',
    progressBar: forceTheme === 'dark' ? '#999' : '#0005', // プログレスバー前景色
    unfilledColor: forceTheme === 'dark' ? '#303030' : '#E3E5F3', // プログレスバー背景色
  }), [forceTheme]);

  const [savedLevels, setSavedLevels] = useState<string>();

  useEffect(() => {
    AsyncStorage.getItem('@selected_levels')
      .then((data) => {
        let parsedData = data ? JSON.parse(data) : '1';
        // もし配列の場合は最初の要素を使用
        if (Array.isArray(parsedData)) {
          parsedData = parsedData[0];
        }
        setSavedLevels(parsedData);
      })
      .catch((error) => {
        console.error('保存された級の取得に失敗:', error);
        setSavedLevels('1');
      });
  }, []);
  

  // 級に応じた単語数を返す関数
  const getTotalWordsByLevel = (level: string | null): number => {
    switch(level) {
      case '3':
        return 1000;
      case '2_5':
        return 1220; 
      case '2':
        return 2300; 
      case '1_5':
        return 3400; 
      case '1':
        return 3200; 
      default:
        return 1000; // デフォルトの値
    }
  };

  // 保存されている学習レベル（配列の先頭の値）に基づいて全単語数を算出
  const fullward = useMemo(() => {
    const level = savedLevels && savedLevels.length > 0 ? savedLevels[0] : null;
    return getTotalWordsByLevel(level);
  }, [savedLevels]);

  // ゲージのリストを描画
  const progressList = useMemo(() => {
    return GROUPS.map((group, index) => {
      let actualCount = 0;
      if (group.label === '未学習') {
        // 未学習は全単語数から (adjustedCounts[1] ?? 0) を引く
        actualCount = fullward - (adjustedCounts[1] ?? 0);
      } else if (group.counts && group.counts.length > 0) {
        actualCount = group.counts.reduce(
          (sum, countIndex) => sum + (adjustedCounts[countIndex] ?? 0),
          0
        );
      }
      const progress = Math.min(Math.max(actualCount / fullward, 0), 1);

      return (
        <View
          key={index}
          style={[
            styles.progressItemContainer,
            { width: gaugeWidth, marginLeft: index === 0 ? 0 : betweenGaugeGap },
          ]}
        >
          <NeomorphBox
            width={20}
            height={gaugeMaxHeight}
            style={styles.neomorphStyle}
            forceTheme={forceTheme}
          >
            <ProgressBarVertical
              progress={progress}
              width={20}
              height={gaugeMaxHeight}
              color={themeColors.progressBar}
              unfilledColor={themeColors.unfilledColor}
            />
          </NeomorphBox>

          <Text style={[styles.countLabelText, { color: themeColors.text }]}>
            {group.label}
          </Text>

          <View style={styles.countContainer}>
            <Text style={[styles.countNumberText, { color: themeColors.text }]}>
              {actualCount}
            </Text>
            <Text style={[styles.countUnitText, { color: themeColors.text }]}>
              単語
            </Text>
          </View>
        </View>
      );
    });
  }, [
    adjustedCounts,
    gaugeWidth,
    gaugeMaxHeight,
    betweenGaugeGap,
    forceTheme,
    themeColors.progressBar,
    themeColors.unfilledColor,
    themeColors.text,
    fullward,
  ]);

  if (loading) {
    return (
      <NeomorphBox
        width={widgetWidth}
        height={height}
        forceTheme={forceTheme}
      >
        <Text style={[styles.widgetText, { color: themeColors.boldText }]}>
          学習進捗
        </Text>
        <View style={styles.centered}>
          <Text style={{ color: themeColors.loadingText }}>読み込み中...</Text>
        </View>
      </NeomorphBox>
    );
  }

  if (Object.keys(countSummary).length === 0) {
    return (
      <NeomorphBox
        width={widgetWidth}
        height={height}
        forceTheme={forceTheme}
      >
        <Text style={[styles.widgetText, { color: themeColors.boldText }]}>
          学習進捗
        </Text>
        <View style={styles.centered}>
          <Text style={{ color: themeColors.noDataText }}>
            データがありません。
          </Text>
        </View>
      </NeomorphBox>
    );
  }

  return (
    <NeomorphBox
      width={widgetWidth}
      height={height}
      forceTheme={forceTheme}
    >
      <Text style={[styles.widgetText, { color: themeColors.boldText }]}>
        学習進捗
      </Text>

      <View style={[styles.progressContainer, { paddingHorizontal: sideMargin }]}>
        {progressList}
      </View>
    </NeomorphBox>
  );
};

export default React.memo(MemoryLevel);

const styles = StyleSheet.create({
  widgetText: {
    fontSize: 16,
    textAlign: 'center',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  progressItemContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  neomorphStyle: {
    marginBottom: 10,
  },
  countContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 5,
  },
  countNumberText: {
    fontSize: 14,
    textAlign: 'center',
  },
  countUnitText: {
    fontSize: 12,
    textAlign: 'center',
  },
  countLabelText: {
    paddingTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});
