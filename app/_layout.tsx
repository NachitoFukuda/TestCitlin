import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// スプラッシュスクリーンをアセット読み込み完了まで非表示にする
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    DancingScript_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationThemeProvider value={DarkTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="question"
              options={({ navigation }) => ({
                headerShown: true, // ヘッダー自体は表示
                headerTransparent: true, // ヘッダーの背景を透明に
                headerTitle: '', // タイトルは空文字で非表示
                headerShadowVisible: false, // 影を非表示に
                headerBackVisible: false,
                // ヘッダー背景が自動的に描画されないようにする
                // 独自の戻るボタンを表示（必要ならここでカスタマイズ）
                headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
                    <Ionicons name="chevron-back" size={28} color="#777" />
                  </TouchableOpacity>
                ),
                headerRight: () => null,
              })}
            />

            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </NavigationThemeProvider>
    </GestureHandlerRootView>
  );
}
