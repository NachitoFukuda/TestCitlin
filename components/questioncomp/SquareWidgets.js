// SquareWidgets.js

import React, { useEffect, useRef, useState, memo, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import LongWidget from '../Tutorial/LongWidget';
import NeomorphBox from '../NeomorphBox'; // NeomorphBox をインポート

const SquareWidgets = memo(({ questionId, correctCount, minutesElapsed, isAnswerCorrect }) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  // 前の correctCount と questionId を追跡
  const prevCorrectCountRef = useRef(correctCount);
  const prevQuestionIdRef = useRef(questionId);

  // 新しくアニメーションされるスタンプ番号を保持する状態
  const [newStampNumbers, setNewStampNumbers] = useState([]);

  // 現在の questionId に対する correctCount を保存する ref
  const savedCorrectCountRef = useRef(correctCount);

  // 現在の質問に対してアニメーションがトリガーされたかを追跡する ref
  const animationTriggeredRef = useRef(false);

  // stampBackgrounds の定義（既存のまま）
  const stampBackgrounds = useMemo(() => [
    ['rgba(184, 115, 51, 1)', 'rgb(255, 225, 196)', 'rgba(244, 164, 96, 1)'],
    ['rgba(184, 115, 51, 1)', 'rgb(255, 225, 196)', 'rgba(244, 164, 96, 1)'],
    ['rgba(184, 115, 51, 1)', 'rgb(255, 225, 196)', 'rgba(244, 164, 96, 1)'],
    ['rgba(192, 192, 192, 1)', 'rgb(233, 233, 233)', 'rgb(191, 191, 191)'],
    ['rgba(192, 192, 192, 1)', 'rgb(233, 233, 233)', 'rgb(191, 191, 191)'],
    ['rgba(192, 192, 192, 1)', 'rgb(233, 233, 233)', 'rgb(191, 191, 191)'],
    ['rgba(255, 215, 0, 1)', 'rgb(255, 245, 183)', 'rgba(255, 193, 7, 1)'],
    ['rgba(255, 215, 0, 1)', 'rgb(255, 245, 183)', 'rgba(255, 193, 7, 1)'],
    ['rgba(255, 215, 0, 1)', 'rgb(255, 245, 183)', 'rgba(255, 193, 7, 1)'],
  ], []);

  // ウィジェットの幅を計算（画面幅の40%）
  const widgetWidth = useMemo(() => SCREEN_WIDTH * 0.4, [SCREEN_WIDTH]);

  // パディングとマージンの設定
  const widgetPadding = 5; // パディングを減らしてスペースを確保
  const stampMargin = 4; // スタンプ間のマージンを調整
  const borderWidth = 2; // スタンプのボーダー幅

  // スタンプサイズの計算
  const calculatedStampSize = useMemo(() => {
    return (widgetWidth - 2 * widgetPadding - 4 * stampMargin - 6 * borderWidth) / 3;
  }, [widgetWidth, widgetPadding, stampMargin, borderWidth]);

  // スタンプサイズの最小・最大値
  const stampSize = useMemo(() => {
    return Math.max(60, Math.min(calculatedStampSize, 50));
  }, [calculatedStampSize]);

  // correctCount に基づいて特定のスタンプインデックスをマッピング
  const stampMapping = {
    0: [1, 2],
    1: [1, 2],
    2: [3],
    3: [4, 5],
    4: [4, 5],
    5: [6, 7],
    6: [6, 7],
    7: [8, 9],
    8: [8, 9],
    9: [10], // correctCount=9 に対応するスタンプ10を仮定
    // 必要に応じて追加
  };

  // correctCount と isAnswerCorrect に基づいてフィードバックテキストをマッピング
  const feedbackTextMapping = useMemo(() => ({
    0: { true: 'day1', null: 'day1' },
    1: { true: 'day1', null: 'day1' },
    2: { true: 'day1', null: 'day2', false: 'day2' },
    3: { true: 'day2', null: 'day7', false: 'day7' },
    4: { true: 'day7', null: 'day7' },
    5: { true: 'day7', null: 'day20', false: 'day20' },
    6: { true: 'day20', null: 'day20' },
    7: { true: 'day20', null: 'day40', false: 'day40' },
    8: { true: 'day40', null: 'day40' },
    9: { true: 'day40', null: 'day40' },
  }), []);
  
  const stamps = useMemo(() => {
    const mappedStamps = stampMapping[correctCount] || [];

    // isAnswerCorrect が null でない場合にスタンプを調整
    if (isAnswerCorrect !== null) {
      switch (correctCount) {
        case 2:
          return [1, 2];
        case 3:
          return [3];
        case 4:
        case 5:
          return [4, 5];
        case 6:
        case 7:
          return [6, 7];
        case 8:
        case 9:
          return [8, 9];
        case 10:
          return [10]; // スタンプ10を仮定
        default:
          return mappedStamps;
      }
    }

    return mappedStamps;
  }, [correctCount, isAnswerCorrect]);

  // questionId が変更されたときに correctCount を保存
  const handleQuestionChange = useCallback(() => {
    if (prevQuestionIdRef.current !== questionId) {
      // 現在の correctCount を保存
      savedCorrectCountRef.current = correctCount;

      // アニメーショントリガーをリセット
      animationTriggeredRef.current = false;
    }
    // 前の questionId を更新
    prevQuestionIdRef.current = questionId;
  }, [questionId, correctCount]);

  useEffect(() => {
    handleQuestionChange();
  }, [handleQuestionChange]);



  const triggerAnimation = useCallback(() => {
    if ((isAnswerCorrect === true || isAnswerCorrect === null) && !animationTriggeredRef.current) {
      // 保存された correctCount に基づいてアニメーションするスタンプを決定
      const savedCorrectCount = savedCorrectCountRef.current;
      let stampsToAnimate = [];
  
      switch (savedCorrectCount) {
        case 0:
        case 1:
          stampsToAnimate = [1, 2];
          break;
        case 2:
          stampsToAnimate = [3];
          break;
        case 3:
        case 4:
          stampsToAnimate = [4, 5];
          break;
        case 5:
        case 6:
          stampsToAnimate = [6, 7];
          break;
        case 7:
        case 8:
          stampsToAnimate = [8, 9];
          break;
        case 9:
          stampsToAnimate = [10]; // スタンプ10を仮定
          break;
        default:
          stampsToAnimate = [];
      }
      // newStampNumbers を更新してアニメーションをトリガー
      setNewStampNumbers(stampsToAnimate);
      // アニメーションがトリガーされたことをマーク
      animationTriggeredRef.current = true;
    }
  }, [isAnswerCorrect, questionId]);
  
  useEffect(() => {
    triggerAnimation();
  }, [triggerAnimation]);
  

  // 新しく追加されたスタンプを計算する関数（useCallback でラップ）
  const updateNewStampNumbers = useCallback(() => {
    if (prevQuestionIdRef.current === questionId) {
      if (correctCount > prevCorrectCountRef.current) {
        // 新しく追加されたスタンプを計算
        const newNumbers = [];
        for (let i = prevCorrectCountRef.current + 1; i <= correctCount && i <= stamps.length; i++) {
          newNumbers.push(i);
        }
        setNewStampNumbers(newNumbers);
      }
    } else {
      // questionId が変更された場合はリセット
      setNewStampNumbers([]);
    }
    prevCorrectCountRef.current = correctCount;
    prevQuestionIdRef.current = questionId;
  }, [correctCount, questionId, stamps.length]);

  useEffect(() => {
    updateNewStampNumbers();
  }, [updateNewStampNumbers]);


  // correctCount と isAnswerCorrect に基づいてフィードバックテキストを決定
  const feedbackText = useMemo(() => {
    const key = isAnswerCorrect === true 
    ? 'true' 
    : isAnswerCorrect === false 
      ? 'false' 
      : 'null';
      const text = feedbackTextMapping[correctCount]?.[key];
    return text || '';
  }, [correctCount, isAnswerCorrect]);

  return (
    <View style={styles.container}>
      {/* 左側のウィジェット（スタンプ）を NeomorphBox でラップ */}
      <NeomorphBox width={widgetWidth} height={widgetWidth}>
        <View style={styles.innerWidget}>
          {/* フィードバックテキストを表示 */}
          {(isAnswerCorrect === true || isAnswerCorrect === null) && (
            <Text
              style={[
                styles.feedbackText,
              ]}
            >
              {feedbackText}
            </Text>
          )}

          {/* スタンプを表示 */}
          <View style={styles.stampsContainer}>
            {stamps.map((stampNumber) => (
              <Stamp
                key={stampNumber}
                number={stampNumber}
                filled={stampNumber <= correctCount}
                backgroundColor={stampBackgrounds[stampNumber - 1]}
                size={stampSize}
                margin={stampMargin}
                animate={newStampNumbers.includes(stampNumber)}
              />
            ))}
          </View>
        </View>
      </NeomorphBox>

      {/* 右側の LongWidget を NeomorphBox でラップ 
      <NeomorphBox width={widgetWidth} height={widgetWidth}>
        <LongWidget
          correctCount={correctCount}
          questionId={questionId}
          isAnswerCorrect={isAnswerCorrect}
        />
      </NeomorphBox>*/}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center', // 横方向の中央揃え
    alignItems: 'center', // 縦方向の中央揃え
    marginTop: 7,
    paddingHorizontal: 10,
  },
  innerWidget: {
    flex: 1,
    width: '100%',
    borderRadius: 15,
    overflow: 'hidden', // コンテンツのはみ出しを防止
    padding: 10,
    flexDirection: 'column', // 子要素を縦方向に配置
    justifyContent: 'space-between', // 上下のスペースを均等に
    alignItems: 'center', // 横方向の中央揃え
  },
  feedbackText: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 10,
    padding: 5,
    color:'#888',
    borderRadius: 5,
  },

  stampsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
});

export default SquareWidgets;
