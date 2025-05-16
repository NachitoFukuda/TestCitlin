import React, { useMemo, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import NeomorphBox from '../ui/NeomorphBox';

interface MLabelProps {
  mValue: number | null | undefined;
  questionId: string;
  /** テーマ切り替え用 (任意) */
  forceTheme?: 'light' | 'dark';
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

/** テーマに応じた styles を生成する */
function createStyles(isDark: boolean) {
  return StyleSheet.create({
    neomorphContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
    },
    /** テキストカラーをダークかライトかで変える */
    messageText: {
      marginLeft: 8,
      fontSize: 15,
      color: isDark ? '#eee' : '#666', // ダーク時は白寄りに、ライト時は黒寄りに
    },
    lottieStyle: {
      width: 100,
      height: 100,
    },
  });
}

const MLabel: React.FC<MLabelProps> = ({ mValue, questionId, forceTheme }) => {
  const confettiRef = useRef<LottieView>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [showConfetti, setShowConfetti] = useState(true);

  // ここでダークモードかどうか判定
  const isDark = forceTheme === 'dark';
  const styles = createStyles(isDark);

  // questionId が変わったらアニメーションを再生しなおす
  useEffect(() => {
    setShowConfetti(true);
  }, [questionId]);

  // mValue や questionId が変わるたびにメッセージやアニメーションの種類を更新
  const { animationSource, randomMessage } = useMemo(() => {
    let animationSource: any = null;
    let messages: string[] = [];

    if (mValue === undefined || mValue === null) {
      animationSource = require('../../assets/lottie/AI1.json');
      messages = [
        '次の単語、行ってみよう！',
        'ここから始めよう！',
        '順調だよ！'
      ];
    } else if (mValue === 0) {
      animationSource = require('../../assets/lottie/AI2.json');
      messages = [
        '復習ばっちりだね！',
        'その調子で続けよう！',
        'いい感じに習慣になってる！'
      ];
    } else if (mValue === 1) {
      animationSource = require('../../assets/lottie/AI3.json');
      messages = [
        '前回は惜しかったね！',
        '次はできるよ！',
        'もう一回チャレンジしよう！'
      ];
    } else if (mValue >= 2) {
      animationSource = require('../../assets/lottie/AI4.json');
      messages = [
        'ちょっと難しいけどファイト！',
        '焦らずいこう！',
        '繰り返しが大事だよ！'
      ];
    }

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    return { animationSource, randomMessage };
  }, [mValue, questionId]);

  useEffect(() => {
    if (!randomMessage) return;

    setDisplayedText('');
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < randomMessage.length) {
        setDisplayedText(randomMessage.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [randomMessage]);

  // showConfetti が false のときは表示しない
  if (!showConfetti) {
    return null;
  }

  return (
    <NeomorphBox
      width={SCREEN_WIDTH * 0.85}
      height={60}
      style={styles.neomorphContainer}
      forceTheme={forceTheme}
    >
      <View style={styles.innerContainer}>
        <LottieView
          ref={confettiRef}
          source={animationSource}
          autoPlay
          loop
          style={styles.lottieStyle}
        />
        <Text style={styles.messageText}>{displayedText}</Text>
      </View>
    </NeomorphBox>
  );
};

export default MLabel;
