import React, { useMemo, useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import NeomorphBox from '../ui/NeomorphBox';

interface EndLabelProps {
  Score: number;
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

const EndLabel: React.FC<EndLabelProps> = ({ Score, forceTheme }) => {
  const confettiRef = useRef<LottieView>(null);
  const [displayedText, setDisplayedText] = useState('');

  // ここでダークモードかどうか判定
  const isDark = forceTheme === 'dark';
  const styles = createStyles(isDark);



  // mValue や questionId が変わるたびにメッセージやアニメーションの種類を更新
  const { animationSource, randomMessage } = useMemo(() => {
    let animationSource: any = null;
    let messages: string[] = [];

    if (Score === 5) {
      animationSource = require('../../assets/lottie/AI1.json');
      messages = [
        "最高！素晴らしい結果！",
        "完璧だね！",
        "ナイス！その調子！"
      ];
    } else if (Score === 4) {
      animationSource = require('../../assets/lottie/AI2.json');
      messages = [
        "素晴らしい、あと一歩！",
        "もう少しで最高スコア！",
        "頑張ったね！"
      ];
    } else if (Score === 3) {
      animationSource = require('../../assets/lottie/AI3.json');
      messages = [
        "まあまあ、次はもっと頑張ろう！",
        "少し伸びしろがあるね！",
        "次は挑戦してみよう！"
      ];
    } else if (Score <= 2) {
      animationSource = require('../../assets/lottie/AI4.json');
      messages = [
        "努力は大切、続けよう！",
        "次はきっと上がるよ！",
        "落ち込まずに挑戦しよう！"
      ];
    }

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    return { animationSource, randomMessage };
  }, []);

  useEffect(() => {
    if (!randomMessage) return;

    // 表示をリセット
    setDisplayedText('');

    // 1文字ずつ表示（タイピング風）
    setTimeout(() => {
      setDisplayedText(randomMessage.charAt(0));
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < randomMessage.length) {
          setDisplayedText((prev) => prev + randomMessage.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
    }, 0);
  }, [randomMessage]);


  return (
    <NeomorphBox
      width={SCREEN_WIDTH * 0.85}
      height={60}
      style={styles.neomorphContainer}
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

export default EndLabel;
