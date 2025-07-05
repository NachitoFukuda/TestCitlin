import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet, Easing, Text, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';
import BannerAdComponent from '../indexcomp/BannerAdComponent';
import NeomorphBox from '../ui/NeomorphBox';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const CoolCountdown: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const numbers = [3, 2, 1, 'GO'];
  const scaleAnims = useRef(numbers.map(() => new Animated.Value(0))).current;
  const rotateAnims = useRef(numbers.map(() => new Animated.Value(0))).current;
  const opacityAnims = useRef(numbers.map(() => new Animated.Value(0))).current;
  const [bgmStarted, setBgmStarted] = useState(false);
  const [dotCount, setDotCount] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount(prev => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let bgm: Audio.Sound;
    (async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/sound/countdownBGM.mp3'),
          { isLooping: true }
        );
        bgm = sound;
        await bgm.playAsync();
        setBgmStarted(true);
      } catch (e) {
        console.warn('Failed to play BGM', e);
        setBgmStarted(true); // 失敗時もカウントダウンを進める
      }
    })();
    return () => {
      if (bgm) bgm.unloadAsync();
    };
  }, []);

  useEffect(() => {
    if (!bgmStarted) return;
    if (index >= numbers.length) {
      onComplete();
      return;
    }

    // Trigger haptic feedback for each countdown
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // リセット
    scaleAnims[index].setValue(0);
    opacityAnims[index].setValue(0);
    rotateAnims[index].setValue(0);

    Animated.parallel([
      Animated.timing(scaleAnims[index], {
        toValue: 1.5,
        duration: 500,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnims[index], {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnims[index], {
        toValue: 1,
        duration: 500,
        easing: Easing.out(Easing.exp),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 200);
    });
  }, [index, bgmStarted]);

  return (
    <View style={styles.container}>

        <BannerAdComponent />
      <View style={styles.Adcontainer}>
        <NeomorphBox
          width={SCREEN_WIDTH * 0.85}
          height={60} // isTransitioning の条件が同じ高さの場合は固定でも問題ありません
        >
          <Text style={styles.messageText}>問題を作成中{'.'.repeat(dotCount)}</Text>
        </NeomorphBox>
      </View>

      <NeomorphBox
        width={SCREEN_WIDTH * 0.85}
        height={150} // isTransitioning の条件が同じ高さの場合は固定でも問題ありません
        style={styles.neomorphBox}
     >
                    <View style={styles.nullBar}></View>

      </NeomorphBox>
      {numbers.map((num, i) => {
        const rotate = rotateAnims[i].interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        });
        // Color and font size arrays for each countdown step
        const colorSteps = ['#006666', '#007777', '#008888', '#009999'];
        const fontSizeSteps = [160, 200, 240, 280];
        const isActive = i === index;
        const color = isActive ? colorSteps[i] : '#0000';
        const fontSize = isActive ? fontSizeSteps[i] : fontSizeSteps[0];

        return (
          <Animated.Text
            key={num}
            style={[
              styles.countText,
              {
                transform: [
                  { scale: scaleAnims[i] },
                  { rotate },
                ],
                opacity: opacityAnims[i],
                color,
                fontSize,
                textShadowColor: '#0ff',
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 30,
              },
            ]}
          >
            {num}
          </Animated.Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor:'#E3E5F2',
  },
  countText: {
    fontSize: 200,
    fontWeight: 'bold',
    position: 'absolute',
    top: '50%',
    zIndex:10,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: 'Courier New',
    transform: [{ translateY: -100 }],
  },
  Adcontainer: {
    top: 10,
    zIndex: 10,
  },
  neomorphBox: {
    top: 30,
    zIndex: 10,
  },
  messageText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#666', // ダーク時は白寄りに、ライト時は黒寄りに
  },
  nullBar: {
    position:'absolute',
    bottom:1,
    height: 4, // Adjust the height as needed
    width: SCREEN_WIDTH * 0.7,
    backgroundColor: 'rgba(114, 114, 114, 0.23)',
    borderRadius: 5, // For rounded corners, adjust as needed
    marginBottom: 20, // Add some margin if necessary
    zIndex:4,
  },
});

export default CoolCountdown;