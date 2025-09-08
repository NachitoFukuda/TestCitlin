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
      width: 140,
      height: 140,
      marginLeft: -20,
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
      animationSource = require('../../assets/lottie/LoaderCat.json');
      messages = [
        '脳みそフル回転でいこう！🧠',
        'いい感じに習慣になってる！✨',
        'もしかして、天才？🤓',
        '今日も絶好調だね！🔥',
        'その勢い止めるな！🚀',
        '脳みそ温まってきた！♨️',
        '集中モード突入！🎯',
        'やる気ゲージMAX！📈',
        '知識の旅は続く！🌍',
        '一歩ずつ最強に！🥇',
        '君の脳、輝いてる！💡',
        '今日も記憶更新中！📖',
        'その調子で進め！💨',
        'どんどん賢くなってる！📈',
        'やればできるじゃん！🙌',
        '思考エンジン全開！⚙️',
        '君なら絶対いける！👍',
        '次も余裕でクリア！✅',
        '脳細胞が喜んでる！🎉',
        'スキル急上昇中！📊',
        'いい波乗ってるね！🌊',
        'まさに覚醒モード！⚡',
        '学びが止まらない！📚'
      ];
    } else if (mValue === 0) {
      animationSource = require('../../assets/lottie/LoaderCat.json');
      messages = [
        '復習ばっちりだね！📚',
        'その調子で続けよう！💪',
        'いい感じに習慣になってる！✨',
        '着実にレベルアップ！📈',
        '完璧な仕上がり！🎯',
        'コツコツが最強！💎',
        '頭のキレが光ってる！💡',
        '知識が定着してる！🔒',
        'まるで先生みたい！👨‍🏫',
        '今日も完璧クリア！✅'
      ];
    } else if (mValue === 1) {
      animationSource = require('../../assets/lottie/LoaderCat.json');
      messages = [
        '惜しい！あと少しで伝説の達人！🏆',
        '失敗は成功の母！💡',
        'もう一回チャレンジ！🔥',
        '次は絶対クリア！🎯',
        'ミスは成長のチャンス！🌱',
        'おしい〜！でもナイスファイト！👏',
        'リベンジ魂燃えてる！😤',
        '惜しいけど可能性MAX！✨',
        'ちょっとずつ近づいてる！👣'
      ];
    } else if (mValue >= 2) {
      animationSource = require('../../assets/lottie/LoaderCat.json');
      messages = [
        '難問も笑顔で吹き飛ばせ！😁',
        '焦りすぎじゃね？💦',
        'この単語にがてだね？📖',
        'まあまあ落ち着こう！☕',
        'まだ巻き返せる！🔥',
        'これは練習のチャンス！📚',
        '笑って次いこ！👍',
        '挑戦する姿勢がカッコいい！💎',
        'これも経験値！📈',
        '負けてもただじゃ起きない！😎'
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
