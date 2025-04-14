import React, { useRef, useMemo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';  // Lottie のインポート
import { LinearGradient } from 'expo-linear-gradient'; // LinearGradient のインポート
import NeomorphBox from '../NeomorphBox';

interface JsonData {
  id: number;
  result: number[];
}

interface TodayMissionProps {
  loading: boolean;
  dayData: JsonData | null;
  adjustedCounts: number[];
  forceTheme?: 'light' | 'dark'; // ✅ テーマ ('light' or 'dark')
}

const TodayMission: React.FC<TodayMissionProps> = ({
  loading,
  dayData,
  adjustedCounts,
  forceTheme = 'light', // ✅ デフォルトはライトモード
}) => {
  // ✅ テーマに応じた色を一元管理
  const themeColors = useMemo(() => {
    const isDark = forceTheme === 'dark';
    return {
      text: isDark ? '#E0E0E0' : '#777',
      subText: isDark ? '#CCCCCC' : '#999',
      noData: isDark ? '#BBBBBB' : '#999',
      sectionTitle: isDark ? '#E0E0E0' : '#777',
      neededAnswers: isDark ? '#CCC' : '#666',
      loadingIndicator: isDark ? '#DDD' : '#000',
      progressBarBG: isDark ? '#303030' : '#E3E5F3',
      progressBarFill: isDark ? '#AAA' : '#888',
      clearedText: 'rgb(0, 227, 117)', // CLEAR表示の色
    };
  }, [forceTheme]);

  // ローディング状態
  if (loading) {
    return (
      <>
        <ActivityIndicator size="large" color={themeColors.loadingIndicator} />
        <Text style={[styles.loadingText, { color: themeColors.text }]}>
          データを読み込んでいます...
        </Text>
      </>
    );
  }

  // データがない場合
  if (!dayData) {
    return (
      <Text style={[styles.noDataText, { color: themeColors.noData }]}>
        本日のノルマのデータが見つかりません
      </Text>
    );
  }

  // index 毎に子数を取得する関数
  const getChildValueByIndex = (index: number) => {
    switch (index) {
      case 0:
        return (adjustedCounts[1] ?? 0) + (adjustedCounts[2] ?? 0);
      case 1:
        return (adjustedCounts[3] ?? 0) + (adjustedCounts[4] ?? 0);
      case 2:
        return (adjustedCounts[5] ?? 0) + (adjustedCounts[6] ?? 0);
      case 3:
        return (adjustedCounts[7] ?? 0) + (adjustedCounts[8] ?? 0);
      case 4:
        return (adjustedCounts[9] ?? 0) + (adjustedCounts[10] ?? 0);
      default:
        return 0;
    }
  };

  const totalMotherValue = dayData.result.reduce((acc, cur) => acc + cur, 0) * 2;
  const totalChildValue = dayData.result.reduce((acc, _, index) => {
    return acc + getChildValueByIndex(index);
  }, 0);

  if (totalMotherValue === 0) {
    // ノルマなし
    return (
      <View style={styles.container}>
        <Text style={[styles.sectionTitle, { color: themeColors.sectionTitle }]}>
          本日のノルマ
        </Text>
        <Text style={[styles.noDataText, { color: themeColors.noData }]}>
          今日のTodoはありません。
        </Text>
      </View>
    );
  }

  // 進捗率
  const progressRatio = totalChildValue / totalMotherValue;
  const nawprogress = totalMotherValue - totalChildValue;
  const clampedProgress = Math.min(Math.max(progressRatio, 0), 1) * 100;

  // Lottie切り替え
  let animationSource: any;
  if (nawprogress >= 40) {
    animationSource = require('../../assets/lottie/AI4.json');
  } else if (nawprogress >= 20) {
    animationSource = require('../../assets/lottie/AI3.json');
  } else if (nawprogress >= 1) {
    animationSource = require('../../assets/lottie/AI2.json');
  } else {
    animationSource = require('../../assets/lottie/AI1.json');
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, { color: themeColors.sectionTitle }]}>
        本日のノルマ
      </Text>

      {/* テキストと Lottie を横並びにするコンテナ */}
      <View style={styles.neededAnswersRow}>
        <LottieView
          source={animationSource}
          autoPlay
          loop
          style={styles.lottieStyle}
        />
        <Text
          style={[
            styles.neededAnswersText,
            { 
              color: nawprogress <= 0 ? themeColors.clearedText : themeColors.neededAnswers 
            },
          ]}
        >
          {nawprogress <= 0 ? 'CLEAR' : `あと${nawprogress}問正解しよう！`}
        </Text>
      </View>

      {/* プログレスバー */}
      <View style={styles.progressBarContainer}>
        <NeomorphBox
          width={130}
          height={12}
          style={styles.neomorphStyle}
          forceTheme={forceTheme} // ✅ ダーク / ライト対応
        >
          {/* ゲージオーバーレイ */}
          <View style={styles.progressBarOverlay}>
            <View
              style={[
                styles.progressBarBackground,
                { backgroundColor: themeColors.progressBarBG },
              ]}
            >
              {clampedProgress < 100 ? (
                // 通常の塗りつぶし
                <View
                  style={[
                    styles.progressBarFill,
                    {
                      width: `${Math.max(clampedProgress, 1)}%`,
                      backgroundColor: themeColors.progressBarFill,
                    },
                  ]}
                />
              ) : (
                // 100% になったらグラデーション
                <LinearGradient
                colors={['rgba(66, 255, 164, 0.7)', 'rgba(0, 140, 255, 0.5)']}
                start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.gradientFill}
                />
              )}
            </View>
          </View>
        </NeomorphBox>

        <Text style={[styles.progressText, { color: themeColors.text }]}>
          {`${totalChildValue}/${totalMotherValue} 問`}
        </Text>
      </View>
    </View>
  );
};

export default TodayMission;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    maxHeight: 300,
    width: '90%',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  noDataText: {
    fontSize: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
  neededAnswersRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  neededAnswersText: {
    fontSize: 15,
    paddingLeft: 30,
  },
  progressBarContainer: {
    marginVertical: 8,
    alignItems: 'center',
  },
  neomorphStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarOverlay: {
    position: 'absolute',
    width: 130,
    height: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBarBackground: {
    width: 130,
    height: 12,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
  },
  gradientFill: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  progressText: {
    fontSize: 14,
    marginTop: 5,
  },
  lottieStyle: {
    position: 'absolute',
    right: 60,
    width: 100,
    height: 100,
  },
});
