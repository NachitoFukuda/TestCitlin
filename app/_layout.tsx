//app\_layout.tsx
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Platform, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// スプラッシュスクリーンをアセット読み込み完了まで非表示にする
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    console.log('[RootLayout] loaded, font loaded:', loaded);
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <NavigationThemeProvider value={DarkTheme}>
        <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen
            name="question"
            options={({ navigation }) => ({
              headerTransparent: true,
              headerTitle: '',
              headerShadowVisible: false,
              headerStyle: {
                backgroundColor: 'transparent',
                ...(Platform.OS === 'android' && { elevation: 0 }),
                ...(Platform.OS === 'ios' && { shadowOpacity: 0 }),
              } as React.CSSProperties,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
                  <Ionicons name="chevron-back" size={28} color="#777" />
                </TouchableOpacity>
              ),
            })}
          /> */}
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </NavigationThemeProvider>
    </>
  );
}
