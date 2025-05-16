import React, { useCallback } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated, Dimensions, InteractionManager } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Circle } from 'react-native-svg';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
import TapIndicator from './TapIndicator';

const TUTORIAL_KEY = '@quiz:tutorialDone';

export default function Footer({
  activeIcon,
  layoutdemo,
  purchasesLength = 0,
  tutorialDone = true,
}: {
  activeIcon: string;
  layoutdemo?: boolean;
  purchasesLength?: number;
  tutorialDone?: boolean;
}) {
  const router = useRouter();

  const [tutorialDoneState, setTutorialDone] = React.useState(tutorialDone);


  React.useEffect(() => {
    let isMounted = true;
    const loadTutorialDone = async () => {
      try {
        const value = await AsyncStorage.getItem(TUTORIAL_KEY);
        if (isMounted && value === 'true') {
          setTutorialDone(true);
        }
      } catch (error) {
        console.error('❌ チュートリアル状態の読み込みに失敗しました:', error);
      }
    };
    loadTutorialDone();
    return () => {
      isMounted = false;
    };
  }, []);


  const [isDarkMode, setIsDarkMode] = React.useState(false);
  /**
   * チュートリアル完了フラグと購入数から表示するボタン数を返す
   */

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const handleFocus = async () => {
        try {
          const storedTheme = await AsyncStorage.getItem('theme');
          if (isActive) setIsDarkMode(storedTheme === 'dark');
        } catch (error) {
          console.error('❌ テーマの読み込みに失敗しました:', error);
          if (isActive) setIsDarkMode(false);
        }
      };
      handleFocus();
      return () => { isActive = false; };
    }, [])
  );

  const iconAnims = React.useRef<Record<'shop'|'layout'|'home'|'chat'|'settings', Animated.Value>>({
    shop: new Animated.Value(0),
    layout: new Animated.Value(0),
    home: new Animated.Value(0),
    chat: new Animated.Value(0),
    settings: new Animated.Value(0),
  }).current;

  // Animate icon on press
  const handlePress = (key: keyof typeof iconAnims, route: string) => {
    Animated.sequence([
      Animated.timing(iconAnims[key], { toValue: -10, duration: 300, useNativeDriver: true }),
      Animated.timing(iconAnims[key], { toValue: 0, duration: 100, useNativeDriver: true }),
    ]).start(() => {
      if (!isDemoMode) {
        router.push(route as any);
      }
    });
  };

  const screenWidth = Dimensions.get('window').width;
  // layoutdemo prop または activeIcon === 'layoutdemo' の場合をデモモードとする
  const isDemoMode = layoutdemo || activeIcon === 'layoutdemo';
  const containerWidth = isDemoMode ? screenWidth * 0.6 + 6 : undefined;
  const baseIconSize = 30;
  const iconScale = isDemoMode ? 0.5 : 1;
  // アイコンの実際のサイズと、そのラッパーサイズ
  const iconSize = baseIconSize * iconScale;
  const iconWrapperSize = 50 * iconScale;  // 元のwrapperは50×50
  // デモモード時にホーム中央の円も縮小
  const homeOuterSize = 76 * iconScale;
  // デモモード時は中央サークルをさらに上に移動
  const homeOuterTop = isDemoMode ? -109 * iconScale : -72 * iconScale;
  const homeGradientSize = 60 * iconScale;
  const homeGradientTop = isDemoMode ? -100 * iconScale : -64 * iconScale;
  const baseHomeTranslateY = -60;
  // デモモード時はホームアイコンを少し下げる
  const homeIconTranslateY = isDemoMode ? baseHomeTranslateY + 20 * iconScale : baseHomeTranslateY;
  return (
    <>
    {isDemoMode && <View style={styles.demoBar} />}
    <View
      style={[
        styles.container,
        isDemoMode && styles.layoutdemoContainer,
        isDemoMode && { width: containerWidth, alignSelf: 'center' },
      ]}
    >
      {/* 左エリア: shop と layout */}
      <View style={styles.sideGroup}>
        <TouchableOpacity
          onPress={() => {
            handlePress('shop', '/UIstore');
          }}
          style={styles.iconButton}
          accessibilityLabel="Shop"
          accessibilityHint="ショップに遷移"
        >
          <View style={styles.iconWithLabel}>
              <Animated.View
                style={[
                  styles.iconWrapper,
                  isDemoMode && { width: iconWrapperSize, height: iconWrapperSize },
                  { transform: [{ translateY: iconAnims.shop }] },
                ]}
              >
                {activeIcon !== 'shop' &&
                activeIcon !== 'layoutdemo' &&
                activeIcon !== 'layout' &&
                !tutorialDone && (
                    <TapIndicator
                    size={iconWrapperSize * 1.4}
                    color={'#000'}
                    strokeWidth={2}
                    duration={800}
                  />
                )}
                <Ionicons
                  name={activeIcon === 'shop' ? 'pricetag' : 'pricetag-outline'}
                  size={iconSize}
                  color={isDarkMode ? '#DDDDDD' : '#FFFFFF'}
                />
              </Animated.View>
            <Text
              style={[
                styles.iconLabel,
                { color: isDarkMode ? '#DDDDDD' : '#FFFFFF' },
                isDemoMode && { fontSize: 10 },
              ]}
            >
              Shop
            </Text>
          </View>
        </TouchableOpacity>
        {purchasesLength > 0 || tutorialDone || tutorialDoneState ? (
          <TouchableOpacity
            onPress={() => handlePress('layout', '/UILayout')}
            style={styles.iconButton}
          >
            <View style={styles.iconWithLabel}>
              <Animated.View style={[styles.iconWrapper, isDemoMode && { width: iconWrapperSize, height: iconWrapperSize }, { transform: [{ translateY: iconAnims.layout }] }]}>
              {activeIcon !== 'layout' && activeIcon !== 'layoutdemo'  && !tutorialDone && (
                  <TapIndicator
                    size={iconWrapperSize * 1.4}
                    color={'#000'}
                    strokeWidth={2}
                    duration={800}
                  />
                )}
                <Ionicons
                  name={activeIcon === 'layout' ? 'grid' : 'grid-outline'}
                  size={iconSize}
                  color={isDarkMode ? '#DDDDDD' : '#FFFFFF'}
                />
              </Animated.View>
              <Text
                style={[
                  styles.iconLabel,
                  { color: isDarkMode ? '#DDDDDD' : '#FFFFFF' },
                  isDemoMode && { fontSize: 10 },
                ]}
              >
                Layout
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.iconButton} />
        )}
      </View>

      {/* 中央: home */}
      <TouchableOpacity
        onPress={() => handlePress('home', '/')}
        style={styles.iconButton}
        accessibilityLabel="Home"
        accessibilityHint="ホームに遷移"
      >
        <View style={styles.iconWithLabel}>
          <View
            style={[
              styles.homeOuterCircle,
              isDemoMode && {
                width: homeOuterSize,
                height: homeOuterSize,
                borderRadius: homeOuterSize / 2,
                top: homeOuterTop,
              },
            ]}
          />
          <LinearGradient
            colors={['rgba(0, 255, 191, 0.79)', 'rgb(36, 164, 255)']}
            style={[
              styles.homeGradientCircle,
              isDemoMode && {
                width: homeGradientSize,
                height: homeGradientSize,
                borderRadius: homeGradientSize / 2,
                top: homeGradientTop,
              },
            ]}
          />
          <Animated.View style={[styles.iconWrapper, isDemoMode && { width: iconWrapperSize, height: iconWrapperSize }, { transform: [{ translateY: homeIconTranslateY }, { translateY: iconAnims.home }] }]}>
            <Ionicons
              name={activeIcon === 'home' ? 'home' : 'home-outline'}
              size={iconSize}
              color={isDarkMode ? '#DDDDDD' : '#FFFFFF'}
            />
          </Animated.View>
          <Text
            style={[
              styles.iconLabelHome,
              { color: isDarkMode ? '#DDDDDD' : '#FFFFFF' },
              isDemoMode && { fontSize: 10 },
            ]}
          >
            Home
          </Text>
        </View>
      </TouchableOpacity>

      {/* 右エリア: chat と settings */}
      <View style={styles.sideGroup}>
        {purchasesLength > 1 || tutorialDone || tutorialDoneState? (
          <TouchableOpacity
            onPress={() => handlePress('chat', '/ChatListScreen')}
            style={styles.iconButton}
          >
            <View style={styles.iconWithLabel}>
              <Animated.View style={[styles.iconWrapper, isDemoMode && { width: iconWrapperSize, height: iconWrapperSize }, { transform: [{ translateY: iconAnims.chat }] }]}>
                <Ionicons
                  name={activeIcon === 'chat' ? 'chatbubble' : 'chatbubble-outline'}
                  size={iconSize}
                  color={isDarkMode ? '#DDDDDD' : '#FFFFFF'}
                />
              </Animated.View>
              <Text
                style={[
                  styles.iconLabel,
                  { color: isDarkMode ? '#DDDDDD' : '#FFFFFF' },
                  isDemoMode && { fontSize: 10 },
                ]}
              >
                Chat
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.iconButton} />
        )}
        {purchasesLength > 1 || tutorialDone || tutorialDoneState? (
          <TouchableOpacity
            onPress={() => handlePress('settings', '/SettingsScreen')}
            style={styles.iconButton}
          >
            <View style={styles.iconWithLabel}>
              <Animated.View style={[styles.iconWrapper, isDemoMode && { width: iconWrapperSize, height: iconWrapperSize }, { transform: [{ translateY: iconAnims.settings }] }]}>
                <Ionicons
                  name={activeIcon === 'settings' ? 'settings' : 'settings-outline'}
                  size={iconSize}
                  color={isDarkMode ? '#DDDDDD' : '#FFFFFF'}
                />
              </Animated.View>
              <Text
                style={[
                  styles.iconLabel,
                  { color: isDarkMode ? '#DDDDDD' : '#FFFFFF' },
                  isDemoMode && { fontSize: 10 },
                ]}
              >
                Settings
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.iconButton} />
        )}
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: 'rgba(29, 29, 29, 0.49)',
        borderRadius: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingTop: 10,
        paddingBottom: 40, // Add padding to extend the background
    },
    layoutdemoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 8,
      backgroundColor: 'rgba(29, 29, 29, 0.49)',
      borderRadius: 30,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      paddingTop: 10,
      paddingBottom: 10, // Add padding to extend the background
    },
    iconButton: {
      alignItems: 'center',
      padding: 8,
    },
    iconWithLabel: {
      alignItems: 'center',
    },
    iconWrapper: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    iconLabel: {
      fontSize: 12,
      color: '#999999',
      marginTop: 2,
      textAlign: 'center',
    },
    iconLabelHome: {
        fontSize: 12,
        color: '#666666',
        marginTop: -40,
        textAlign: 'center',
      },
    homeOuterCircle: {
      position: 'absolute',
      width: 76,
      height: 76,
      borderRadius: 38,
      borderWidth: 2,
      borderColor: '#EBF3FF',
      backgroundColor: '#EBF3FF',
      top: -72,
      alignSelf: 'center',
      zIndex: -99,
    },
  homeGradientCircle: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    top: -64,
    alignSelf: 'center',
    zIndex: -1,
  },
  demoBar: {
    position: 'absolute',
    bottom: 7,
    left: 80,
    right: 80,
    height: 3,
    backgroundColor: 'black',
    zIndex: 1,
  },
  sideGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});