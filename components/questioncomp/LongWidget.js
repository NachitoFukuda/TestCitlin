// LongWidget.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue, 
  useAnimatedProps,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import Svg, {
  Path,
  Text as SvgText,
  Circle,
  Rect,
  TSpan,
  Defs,
  LinearGradient,
  Stop,
  Mask,
} from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedRect = Animated.createAnimatedComponent(Rect);

/** デバッグ用: Path の情報をログに出力するヘルパー */


/** Path を描画しつつログを出すためのコンポーネント */
const LoggedPath = (props) => {
  const { pathName, correctCount, strokeDasharray, ...rest } = props;
  return <Path {...rest} />;
};

const LongWidget = ({ correctCount, questionId, isAnswerCorrect }) => {
  // Remove fixed dimensions and use flexible sizing
  // The parent NeomorphBox will control the size
  const chartWidth = 300; // Base dimensions for SVG viewBox
  const chartHeight = 200;
  const padding = 20;

  // Animation state and refs
  const [showCircle, setShowCircle] = useState(false);
  const isAnimatingRef = useRef(false);

  // Position mappings
  const positionByCorrectCount = {
    3: { initial: { x: chartWidth * 0.6, y: chartHeight - 70 }, target: { x: chartWidth * 0.6, y: chartHeight - 180 } },
    4: { initial: { x: chartWidth * 1.09,  y: chartHeight - 80 },  target: { x: chartWidth * 1.09, y: chartHeight - 150 } },
    5: { initial: { x: chartWidth * 1.09,  y: chartHeight - 80 }, target: { x: chartWidth * 1.09, y: chartHeight - 180 } },
    6: { initial: { x: chartWidth * 1.57, y: chartHeight - 100 }, target: { x: chartWidth * 1.57, y: chartHeight - 165 } },
    7: { initial: { x: chartWidth * 1.57, y: chartHeight - 100 }, target: { x: chartWidth * 1.57, y: chartHeight - 180 } },
    8: { initial: { x: chartWidth * 1.93, y: chartHeight - 120 }, target: { x: chartWidth * 1.93, y: chartHeight - 127 } },
    9: { initial: { x: chartWidth * 1.93, y: chartHeight - 120 }, target: { x: chartWidth * 1.93, y: chartHeight - 180 } },
  };

  const positionsByCorrectCount = {
    0: { x: chartWidth * 0.0, y: chartHeight - 50 },
    1: { x: chartWidth * 0.0, y: chartHeight - 50 },
    2: { x: chartWidth * 0.0, y: chartHeight - 50 },
    3: { x: chartWidth * 0.266, y: chartHeight - 70 },
    4: { x: chartWidth * 1.09,  y: chartHeight - 80 },
    5: { x: chartWidth * 1.09,  y: chartHeight - 80 },
    6: { x: chartWidth * 0.695, y: chartHeight - 100 },
    7: { x: chartWidth * 0.695, y: chartHeight - 100 },
    8: { x: chartWidth * 0.853, y: chartHeight - 120 },
    9: { x: chartWidth * 0.853, y: chartHeight - 120 },
  };
  const staticCirclePosition = positionsByCorrectCount[correctCount] || null;

  // Target position with default
  const targetPosition = positionByCorrectCount[correctCount]
    ? positionByCorrectCount[correctCount].target
    : {
        x: chartWidth * 0.25,
        y: chartHeight - 125,
      };

  /** Previous questionId / correctCount / isAnswerCorrect */
  const prevQuestionIdRef = useRef(questionId);
  const prevCorrectCountRef = useRef(correctCount);
  const prevIsAnswerCorrectRef = useRef(isAnswerCorrect);

  /** SharedValues for animations */
  const yStart1 = useSharedValue(100);
  const yStart2 = useSharedValue(80);
  const yStart3 = useSharedValue(60);
  const yStart4 = useSharedValue(40);

  /** Path dash animations */
  const path1Length = 160;
  const path2Length = 150;
  const path3Length = 140;
  const path4Length = 160;

  const dashOffset1 = useSharedValue(path1Length);
  const dashOffset2 = useSharedValue(path2Length);
  const dashOffset3 = useSharedValue(path3Length);
  const dashOffset4 = useSharedValue(path4Length);

  /**
   * Percentage mapping
   */
  const percentageMap = {
    0: { correct: 0, incorrect: 0 },
    1: { correct: 96, incorrect: 96 },
    2: { correct: 97, incorrect: 30 },
    3: { correct: 97, incorrect: 50 },
    4: { correct: 75, incorrect: 97 },
    5: { correct: 97, incorrect: 98 },
    6: { correct: 90, incorrect: 90 },
    7: { correct: 99, incorrect: 90 },
    8: { correct: 95, incorrect: 95 },
    9: { correct: 100, incorrect: 100 },
    // Add more if needed
  };

  /**
   * Gauge percentage state
   */
  const [gaugePercentage, setGaugePercentage] = useState(0);

  useEffect(() => {
    const hasQuestionIdChanged = prevQuestionIdRef.current !== questionId;

    let newGaugePercentage = 0;

    // Define priority conditions
    if (correctCount === 4 && isAnswerCorrect) {
      newGaugePercentage = 75;
    } else if (correctCount === 4) {
      newGaugePercentage = 75;
    } else if (correctCount === 5 && !isAnswerCorrect) {
      newGaugePercentage = 85;
    } else if (percentageMap[correctCount]) {
      newGaugePercentage = isAnswerCorrect
        ? percentageMap[correctCount].correct
        : percentageMap[correctCount].incorrect;
    } else {
      newGaugePercentage = 0; // Default
    }


    setGaugePercentage(newGaugePercentage);

    // Animate the gauge width
    gaugeWidth.value = withTiming(newGaugePercentage, {
      duration: 1000,
      easing: Easing.out(Easing.ease),
    });

    // Update previous values
    prevQuestionIdRef.current = questionId;
    prevCorrectCountRef.current = correctCount;
    prevIsAnswerCorrectRef.current = isAnswerCorrect;
  }, [correctCount, isAnswerCorrect, questionId, percentageMap]);

  /**
   * Animate dash paths when question changes
   */
  useEffect(() => {
    // Reset all dash offsets
    setShowCircle(false);
    dashOffset1.value = path1Length;
    dashOffset2.value = path2Length;
    dashOffset3.value = path3Length;
    dashOffset4.value = path4Length;

    // Animate specific paths based on correctCount
    switch (correctCount) {
      case 2:
        dashOffset1.value = withTiming(0, {
          duration: 1000,
          easing: Easing.out(Easing.ease),
        });
        break;
      case 3:
      case 4:
        dashOffset2.value = withTiming(0, {
          duration: 1000,
          easing: Easing.out(Easing.ease),
        });
        break;
      case 5:
      case 6:
        dashOffset3.value = withTiming(0, {
          duration: 1000,
          easing: Easing.out(Easing.ease),
        });
        break;
      case 7:
      case 8:
        dashOffset4.value = withTiming(0, {
          duration: 1000,
          easing: Easing.out(Easing.ease),
        });
        break;
      default:
        return;
    }

    // Show circle after animation
    const timerId = setTimeout(() => {
      setShowCircle(true);
    }, 1000);

    // Cleanup
    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionId]);

  /**
   * Animate vertical lines when answer is correct
   */
  useEffect(() => {
    if (isAnswerCorrect && correctCount >= 3 && staticCirclePosition) {
      switch (correctCount) {
        case 3:
          yStart1.value = withTiming(chartHeight - 180, {
            duration: 1000,
            easing: Easing.out(Easing.ease),
          });
          break;
        case 4:
          yStart2.value = withTiming(chartHeight - 150, {
            duration: 1000,
            easing: Easing.out(Easing.ease),
          });
          break;
        case 5:
          yStart2.value = withTiming(chartHeight - 180, {
            duration: 1000,
            easing: Easing.out(Easing.ease),
          });
          break;
        case 6:
          yStart3.value = withTiming(chartHeight - 165, {
            duration: 1000,
            easing: Easing.out(Easing.ease),
          });
          break;
        case 7:
          yStart3.value = withTiming(chartHeight - 180, {
            duration: 1000,
            easing: Easing.out(Easing.ease),
          });
          break;
        case 9:
          yStart4.value = withTiming(chartHeight - 160, {
            duration: 1000,
            easing: Easing.out(Easing.ease),
          });
          yStart4.value = withTiming(chartHeight - 180, {
            duration: 1000,
            easing: Easing.out(Easing.ease),
          });
          break;
        default:
          break;
      }
      // Removed unnecessary animations
    }
  }, [
    isAnswerCorrect,
    correctCount,
    questionId,
    targetPosition.y,
    chartHeight,
    staticCirclePosition,
  ]);

  /**
   * AnimatedProps for vertical lines
   */
  const animatedPath15Props = useAnimatedProps(() => ({
    d: `M100 100 L100 ${yStart1.value}`,
  }));
  const animatedPath25Props = useAnimatedProps(() => ({
    d: `M180 80 L180 ${yStart2.value}`,
  }));
  const animatedPath35Props = useAnimatedProps(() => ({
    d: `M260 60 L260 ${yStart3.value}`,
  }));
  const animatedPath45Props = useAnimatedProps(() => ({
    d: `M320 40 L320 ${yStart4.value}`,
  }));

  /**
   * Dash paths AnimatedProps
   */
  const pathData1 = 'M20,20 Q40,100 100,100';
  const pathData2 = 'M100,20 Q110,80 180,80';
  const pathData3 = 'M180,20 Q180,60 260,60';
  const pathData4 = 'M260,20 Q260,40 320,40';

  const animatedPath1Props = useAnimatedProps(() => ({
    d: pathData1,
    strokeDasharray: [path1Length, path1Length],
    strokeDashoffset: dashOffset1.value,
  }));
  const animatedPath2Props = useAnimatedProps(() => ({
    d: pathData2,
    strokeDasharray: [path2Length, path2Length],
    strokeDashoffset: dashOffset2.value,
  }));
  const animatedPath3Props = useAnimatedProps(() => ({
    d: pathData3,
    strokeDasharray: [path3Length, path3Length],
    strokeDashoffset: dashOffset3.value,
  }));
  const animatedPath4Props = useAnimatedProps(() => ({
    d: pathData4,
    strokeDasharray: [path4Length, path4Length],
    strokeDashoffset: dashOffset4.value,
  }));

  /**
   * Gauge animation
   */
  const gaugeWidth = useSharedValue(0);

  useEffect(() => {
    gaugeWidth.value = withTiming(gaugePercentage, {
      duration: 1000,
      easing: Easing.out(Easing.ease),
    });
  }, [gaugePercentage, gaugeWidth]);

  return (
    <View style={styles.widgetContainer}>
      <View style={styles.svgContainer}>
        <Svg
          width="100%"
          height="100%"
          viewBox="0 0 340 220" // Adjusted viewBox to accommodate labels
          preserveAspectRatio="xMidYMid meet"
        >

          {/* Define the gradient and mask in Defs */}
          <Defs>
            <LinearGradient
              id="gaugeGradient"
              x1="20"
              y1="160"
              x2="320"
              y2="160"
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0%" stopColor="rgba(186, 66, 255, 0.5)" />
              <Stop offset="100%" stopColor="rgba(0, 225, 255, 0.5)" />
            </LinearGradient>

            {/* Mask definition */}
            <Mask id="gaugeMask">
              <AnimatedRect
                x={20}
                y={160}
                height={10}
                fill="white"
                rx={5}
                ry={5}
                animatedProps={useAnimatedProps(() => ({
                  width: (gaugeWidth.value / 100) * 300, // Gauge max width 300
                }))}
              />
            </Mask>
          </Defs>

          {/* Gauge background */}
          <Rect
            x={20}
            y={160}
            width={300}
            height={10}
            fill="url(#gaugeGradient)"
            mask="url(#gaugeMask)" // Apply mask
            rx={5}
            ry={5}
          />

          {/* Path 1: Dashed path */}
          <LoggedPath
            pathName="pathData1"
            correctCount={correctCount}
            d={pathData1}
            stroke={correctCount <= 2 ? "#aaa" : "#00bfff"}
            strokeWidth={correctCount <= 2 ? "4" : "6"}
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath1Props}
            stroke="#00bfff"
            strokeWidth={6}
            fill="none"
          />

          {/* Path 1.5 */}
          <LoggedPath
            pathName="pathData15"
            correctCount={correctCount}
            d="M100,100 L100,20"
            stroke={
              correctCount >= 4
                ? "#00bfff"
                : correctCount <= 2
                ? "#aaa"
                : isAnswerCorrect
                ? "#aaa"
                : "#00bfff"
            }
            strokeWidth={
              correctCount >= 4
                ? "6"
                : correctCount <= 2
                ? "4"
                : isAnswerCorrect
                ? "4"
                : "6"
            }
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath15Props}
            stroke="#00bfff"
            strokeWidth={6}
            fill="none"
          />

          {/* Path 2: Dashed path */}
          <LoggedPath
            pathName="pathData2"
            correctCount={correctCount}
            d={pathData2}
            stroke={correctCount <= 4 ? "#aaa" : "#00bfff"}
            strokeWidth={correctCount <= 4 ? "4" : "6"}
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath2Props}
            stroke="#00bfff"
            strokeWidth={6}
            fill="none"
          />

          {/* Path 2.5 */}
          <LoggedPath
            pathName="pathData25"
            correctCount={correctCount}
            d="M180,80 L180,20"
            stroke={
              correctCount >= 6
                ? "#00bfff"
                : correctCount <= 4
                ? "#aaa"
                : isAnswerCorrect
                ? "#aaa"
                : "#00bfff"
            }
            strokeWidth={
              correctCount >= 6
                ? "6"
                : correctCount <= 4
                ? "4"
                : isAnswerCorrect
                ? "4"
                : "6"
            }
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath25Props}
            stroke="#00bfff"
            strokeWidth={6}
            fill="none"
          />

          {/* Path 3: Dashed path */}
          <LoggedPath
            pathName="pathData3"
            correctCount={correctCount}
            d={pathData3}
            stroke={correctCount <= 6 ? "#aaa" : "#00bfff"}
            strokeWidth={correctCount <= 6 ? "4" : "6"}
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath3Props}
            stroke="#00bfff"
            strokeWidth={6}
            fill="none"
          />

          {/* Path 3.5 */}
          <LoggedPath
            pathName="pathData35"
            correctCount={correctCount}
            d="M260,60 L260,20"
            stroke={
              correctCount >= 8
                ? "#00bfff"
                : correctCount <= 6
                ? "#aaa"
                : isAnswerCorrect
                ? "#aaa"
                : "#00bfff"
            }
            strokeWidth={
              correctCount >= 8
                ? "6"
                : correctCount <= 6
                ? "4"
                : isAnswerCorrect
                ? "4"
                : "6"
            }
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath35Props}
            stroke="#00bfff"
            strokeWidth={6}
            fill="none"
          />

          {/* Path 4: Dashed path */}
          <LoggedPath
            pathName="pathData4"
            correctCount={correctCount}
            d={pathData4}
            stroke={correctCount <= 8 ? "#aaa" : "#00bfff"}
            strokeWidth={correctCount <= 8 ? "4" : "6"}
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath4Props}
            stroke="#00bfff"
            strokeWidth={6}
            fill="none"
          />

          {/* Path 4.5 */}
          <LoggedPath
            pathName="pathData45"
            correctCount={correctCount}
            d="M320,40 L320,20"
            stroke={correctCount <= 8 ? "#aaa" : "#00bfff"}
            strokeWidth={correctCount <= 8 ? 4 : 6}
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath45Props}
            stroke="#00bfff"
            strokeWidth={6}
            fill="none"
          />

          {/* Axis Labels */}
          <SvgText x={padding-20} y={chartHeight - 200} fontSize="30" fill="#888">
            day1
          </SvgText>

          <SvgText x={padding + 220} y={chartHeight - 200} fontSize="30" fill="#888">
            day40
          </SvgText>

          <SvgText
            x="170" // Centered based on viewBox width
            y="190" // Position below the gauge
            fontSize="14"
            fill="#666"
            textAnchor="middle"
          >
            <TSpan x="100" dy="1em" fontSize="20" fill="#000">
              記憶率
            </TSpan>
            <TSpan x="100" dy="1.2em" fontSize="50" fill="#000">
              {Math.round(gaugePercentage)}%
            </TSpan>
            </SvgText>

          {/* Optional: Render animated vertical lines */}
          {/* Uncomment if vertical lines are needed */}
          {/* 
          <AnimatedPath
            animatedProps={animatedPath15Props}
            stroke="#00bfff"
            strokeWidth={2}
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath25Props}
            stroke="#00bfff"
            strokeWidth={2}
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath35Props}
            stroke="#00bfff"
            strokeWidth={2}
            fill="none"
          />
          <AnimatedPath
            animatedProps={animatedPath45Props}
            stroke="#00bfff"
            strokeWidth={2}
            fill="none"
          />
          */}
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  widgetContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default LongWidget;
