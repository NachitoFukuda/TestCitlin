import React, { useEffect, useRef, useState } from 'react';
import { Animated, View, StyleSheet, Easing, Text } from 'react-native';
import { Audio } from 'expo-av';

const CoolCountdown: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const numbers = [3, 2, 1, 'GO'];
  const scaleAnims = useRef(numbers.map(() => new Animated.Value(0))).current;
  const rotateAnims = useRef(numbers.map(() => new Animated.Value(0))).current;
  const opacityAnims = useRef(numbers.map(() => new Animated.Value(0))).current;
  const [bgmStarted, setBgmStarted] = useState(false);
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
      {numbers.map((num, i) => {
        const rotate = rotateAnims[i].interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        });
        const color = i === index ? '#00aaaa' : '#0000';

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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3E5F2',
  },
  countText: {
    fontSize: 200,
    fontWeight: 'bold',
    position: 'absolute',
    textAlign: 'center',
    fontFamily: 'Courier New',
  },
});

export default CoolCountdown;