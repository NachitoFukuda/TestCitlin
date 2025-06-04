import React, { useCallback, useEffect, useState, useRef } from 'react';
import * as Haptics from 'expo-haptics';
import { Audio, AVPlaybackStatus } from 'expo-av';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect, useRouter } from 'expo-router';

import { LinearGradient } from 'expo-linear-gradient';

const router = useRouter();
const navButtonLabels = [
  '飽きちゃう',
  'なる！！',
  '次へ',
  '次へ',
  '次へ',
  '次へ',
];
const navNoButtonLabels = [
  '飽きません😐',
  'なりません😐',
  '',
  '次へ',
  '次へ',
  '次へ',
];
// グラデーションの色の組み合わせを定義
// グラデーションの色の組み合わせ（なるべく異なる色相を並べる）
// 例: DeepSkyBlue から HotPink へのグラデーション
const gradientColors = [
  ['rgb(0, 187, 255)', 'rgb(217, 2, 255)'] as const,

];

const slides = [
  {
    title: '英語学習って、いつも3日で飽きちゃうよね？',
    content: '',  
    image: require('../../assets/images/AdImage1.png'),
  },
  {
    title: 'でも"推し"が先生だったら、続けたくならない？',
    content: '',
    image: null,
  },
  {
    title: "『……え、まさか…\n私の推しじゃないよね？』",
    content: '',
    image: null,
  },
  {
    title: 'そう思ったそこのあなたに朗報！！',
    content: '',
    image: null,
  },
  {
    title: 'なんと！！あなたの推しを性格・話し方まで再現する機能ができたよ。',
    content: '',
    image: null,
  },
  {
    title: '推しと話してみたい人は試してみてね！',
    content: '初回一週間、無料トライアル実施中！！',
    image: null,
  },
];

const UpsellScreen = () => {
  const [index, setIndex] = useState(0);
  const [audioKey, setAudioKey] = useState(0); // trigger audio even if index is 0
  const navigation = useNavigation();
  const slide = slides[index];
  const [currentGradientIndex, setCurrentGradientIndex] = useState(0);
  const currentGradientIndexRef = useRef(currentGradientIndex);
  // グラデーションの不透明度を制御する Animated.Value
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [isAudioComplete, setIsAudioComplete] = useState(false);
  const bgmRef = useRef<Audio.Sound | null>(null);
  const [showEmojiRain, setShowEmojiRain] = useState(false);
  const emojiPositions = useRef<Animated.Value[]>([]);
  const emojiRotations = useRef<number[]>([]);
  const emojiScales = useRef<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Prepare audio file references for each slide (001.mp3 through 006.mp3)
  const audioFiles = [
    require('../../assets/sound/001.mp3'),
    require('../../assets/sound/002.mp3'),
    require('../../assets/sound/003.mp3'),
    require('../../assets/sound/004.mp3'),
    require('../../assets/sound/005.mp3'),
    require('../../assets/sound/006.mp3'),
  ];

  // Ref to hold the current sound object
  const soundRef = useRef<Audio.Sound | null>(null);

  // Initialize and play background music
  useEffect(() => {
    const setupBGM = async () => {
      try {
        // Load and play background music with reduced volume
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/sound/Ad_music.mp3'),
          { 
            isLooping: true,
            volume: 0.2, // 音量を30%に設定
            shouldPlay: true
          }
        );
        bgmRef.current = sound;
        await sound.playAsync();
      } catch (error) {
        console.error('Error playing background music:', error);
      }
    };

    setupBGM();

    // Cleanup function
    return () => {
      if (bgmRef.current) {
        bgmRef.current.unloadAsync();
      }
    };
  }, []);

  // Control BGM based on screen focus
  useFocusEffect(
    useCallback(() => {
      // Screen is focused
      const playBGM = async () => {
        if (bgmRef.current) {
          try {
            await bgmRef.current.setVolumeAsync(0.3); // 音量を30%に設定
            await bgmRef.current.playAsync();
          } catch (error) {
            console.error('Error resuming BGM:', error);
          }
        }
      };
      playBGM();

      // Screen is unfocused
      return () => {
        if (bgmRef.current) {
          bgmRef.current.pauseAsync();
        }
      };
    }, [])
  );

    useEffect(() => {
      // グラデーションを表示後 5 秒待ってフェードアウト→次のグラデーションに切り替え、を繰り返す
      let isCancelled = false;

      const cycleGradients = () => {
        // 5秒後にフェードアウトを開始
        setTimeout(() => {
          if (isCancelled) return;
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 4000,
            easing: Easing.linear,
            useNativeDriver: true,
          }).start(() => {
            if (isCancelled) return;
            // フェードアウト完了後にインデックスを更新
            setCurrentGradientIndex(prev => {
              const next = (prev + 1) % gradientColors.length;
              currentGradientIndexRef.current = next;
              return next;
            });
            // フェードアウト直後に不透明度を100%に戻す
            fadeAnim.setValue(1);
            // 次のサイクルを呼び出し
            cycleGradients();
          });
        }, 1000);
      };

      cycleGradients();

      return () => {
        isCancelled = true;
      };
    }, [fadeAnim]);

  // Text fade-in animation and audio playback on index change or audioKey change
  useEffect(() => {
    // Reset audio completion state
    setIsAudioComplete(false);

    // Play corresponding audio
    (async () => {
      try {
        // If a previous sound is loaded, unload it
        if (soundRef.current) {
          await soundRef.current.unloadAsync();
          soundRef.current = null;
        }
        // Create and load new sound
        const { sound } = await Audio.Sound.createAsync(audioFiles[index]);
        soundRef.current = sound;

        // Set up playback status listener
        sound.setOnPlaybackStatusUpdate((status: AVPlaybackStatus) => {
          if (!status.isLoaded) return;
          if (status.didJustFinish) {
            setIsAudioComplete(true);
          }
        });

        // Play audio
        await sound.playAsync();
      } catch (error) {
        console.error('Error playing audio:', error);
        // If there's an error, still allow proceeding
        setIsAudioComplete(true);
      }
    })();
  }, [index, audioKey]);


  // Cleanup audio on component unmount
  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
      if (bgmRef.current) {
        bgmRef.current.unloadAsync();
      }
    };
  }, []);

  
  useFocusEffect(
    useCallback(() => {
      // ✅ ステート初期化
      setIndex(0);
      setAudioKey(k => k + 1); // force trigger audio reload
      setCurrentGradientIndex(0);
      currentGradientIndexRef.current = 0;
      setIsAudioComplete(false);
      setShowEmojiRain(false);
      setIsAnimating(false);
  
      // ✅ 音声を止めてリセット
      if (soundRef.current) {
        soundRef.current.unloadAsync();
        soundRef.current = null;
      }
  
      // ✅ 絵文字関連をリセット
      emojiPositions.current = [];
      emojiRotations.current = [];
      emojiScales.current = [];
  
      // ✅ グラデーションアニメーションを初期状態に
      fadeAnim.setValue(1);
  
      // ✅ BGM を再開（必要に応じて）
      const playBGM = async () => {
        if (bgmRef.current) {
          try {
            await bgmRef.current.setVolumeAsync(0.3);
            await bgmRef.current.playAsync();
          } catch (error) {
            console.error('Error resuming BGM:', error);
          }
        }
      };
      playBGM();
  
      // ✅ クリーンアップ：画面が離れたら BGM を止める
      return () => {
        if (bgmRef.current) {
          bgmRef.current.pauseAsync();
        }
      };
    }, [])
  );

  const createEmojiRain = () => {
    const emojis = Array(20).fill('😭');
    return emojis;
  };

  const startEmojiRain = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowEmojiRain(true);

    // emojiPositions.current を初期化（画面外：Y=-100 からスタート）
    emojiPositions.current = Array(20).fill(null).map(() => new Animated.Value(-100));
    emojiRotations.current = Array(20).fill(null).map(() => Math.random() * 360 - 180); // -180〜180度
    emojiScales.current = Array(20).fill(null).map(() => 1 + Math.random()); // 1.0〜2.0倍

    const animations = emojiPositions.current.map((position, index) => {
      return Animated.timing(position, {
        toValue: Dimensions.get('window').height + 50,
        duration: 2000 + Math.random() * 1000,
        delay: index * 100,
        useNativeDriver: true,
        easing: Easing.in(Easing.quad), // 加速し続けるイージングに変更
      });
    });

    Animated.parallel(animations).start(() => {
      // アニメーション完了後の処理
      setTimeout(() => {
        setShowEmojiRain(false);
        setIsAnimating(false);
        navigation.goBack();
      }, 500); // アニメーション完了後、少し待ってから画面遷移
    });
  };

  


  return (
    <View style={{ flex: 1 }}>
      {/* 背景グラデーション */}
      <LinearGradient
          colors={gradientColors[(currentGradientIndex ) % gradientColors.length]}
          style={StyleSheet.absoluteFill}
        />


      {/* Content on top */}
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{slide.title}</Text>
        {slide.image && (
          <View style={styles.imageContainer}>
            <Image
              source={slide.image}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        )}
        <Text style={styles.content}>{slide.content}</Text>
        <View style={styles.buttonContainer}>
          {index >= slides.length - 1 && (
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                onPressOut={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                onPress={() => {
                  router.replace('./SettingsScreen');
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 1,
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: 8,
                  paddingHorizontal: 24,
                  paddingVertical: 10,
                  backdropFilter: 'blur(10px)',
                  width: '80%',
                  marginBottom: 20,
                }}
              >
                <Text style={[styles.ctaButtonText, { color: '#fff' }]}>無料で推しを作ってみる</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                onPressOut={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                onPress={() => {
                  startEmojiRain();
                }}
                disabled={isAnimating}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderWidth: 1,
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: 8,
                  paddingHorizontal: 24,
                  paddingVertical: 10,
                  backdropFilter: 'blur(10px)',
                  width: '80%',
                  marginBottom: 20,
                  opacity: isAnimating ? 0.5 : 1,
                }}
              >
                <Text style={[styles.ctaButtonText, { color: '#fff' }]}>結構です。😐</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* Emoji Rain */}
      {showEmojiRain && (
        <View style={[StyleSheet.absoluteFill, { pointerEvents: 'none' }]}>
          {createEmojiRain().map((emoji, index) => (
            <Animated.Text
              key={index}
              style={[
                styles.emoji,
                {
                  transform: [
                    { translateY: emojiPositions.current[index] },
                    { rotate: `${emojiRotations.current[index]}deg` },
                    { scale: emojiScales.current[index] },
                  ],
                  left: `${Math.random() * 100}%`,
                  opacity: emojiPositions.current[index].interpolate({
                    inputRange: [-100, 0],
                    outputRange: [0, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ]}
            >
              {emoji}
            </Animated.Text>
          ))}
        </View>
      )}

      {/* 次へボタンと進捗表示を画面下部に固定 */}
      {index < slides.length - 1 && isAudioComplete && !isAnimating && (
        <View style={styles.bottomContainer}>
          {(index === 0 || index === 1) && (
          <TouchableOpacity
            onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
            onPressOut={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
            onPress={() => {
              startEmojiRain();
            }}
            disabled={isAnimating}
            style={{
              backgroundColor: 'rgba(77, 77, 77, 0.32)',
              borderWidth: 1,
              borderColor: 'rgba(82, 82, 82, 0.33)',
              borderRadius: 8,
              paddingHorizontal: 24,
              paddingVertical: 10,
              backdropFilter: 'blur(10px)',
              width: '80%',
              marginBottom: 20,
            }}
          >
            <Text style={[styles.navButton, { color: '#fff', backgroundColor: 'transparent', shadowOpacity: 0, textAlign: 'center' }]}>
            {navNoButtonLabels[index]}
            </Text>
          </TouchableOpacity>
          )}
          <TouchableOpacity
            onPressIn={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
            onPressOut={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
            onPress={() => {
              setIndex(index + 1);
            }}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
              borderColor: 'rgba(194, 194, 194, 0.79)',
              borderRadius: 8,
              paddingHorizontal: 24,
              paddingVertical: 10,
              backdropFilter: 'blur(10px)',
              width: '80%',
              marginBottom: 20,
            }}
          >
            <Text style={[styles.navButton, {fontSize:20, color: '#fff', backgroundColor: 'transparent', shadowOpacity: 0, textAlign: 'center' }]}>{navButtonLabels[index]}</Text>
          </TouchableOpacity>
          <View style={styles.pagination}>
            {slides.map((_, i) => (
              <View key={i} style={[styles.dot, i === index && styles.activeDot]} />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 60,
  },
  contentWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 60,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#ffffff',
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    color: '#f5f5f5',
    marginBottom: 30,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },

  // 💠 次へボタン
  navButton: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#6A5ACD',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
    fontWeight: '600',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  // 💎 メインCTAボタン（課金誘導）
  ctaOptionButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A00E0',
  },

  // 🖤「結構です」ボタン
  ctaDeclineButton: {
    paddingVertical: 16,
    paddingHorizontal: 36,
    borderRadius: 12,
    backgroundColor: '#1c1c1e',
    marginVertical: 10,
    alignItems: 'center',
    width: '80%',
    borderWidth: 1.5,
    borderColor: '#666',
  },
  ctaDeclineText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ccc',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: 4,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  emoji: {
    position: 'absolute',
    fontSize: 48, // ←大きくした
    zIndex: 1000,
  },
});

export default UpsellScreen;