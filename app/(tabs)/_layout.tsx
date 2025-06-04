import { router, Tabs, useRouter, useSegments } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UIConfigProvider } from '@/components/contexts/UIConfigContext';

function ChatListButton() {
  const segments = useSegments();
  const router = useRouter();
  
  // "AIChat" または "EikenScreen" のときにボタンを表示
  const isTargetScreen = ["AIChat", "newAI", "AIteacherChat"].includes(segments[segments.length - 1]);
  if (!isTargetScreen) return null;

  return (
    <View style={{ position: 'absolute', left: 16, top: 10 }}>
      <TouchableOpacity
        onPress={() => router.push('/ChatListScreen')}
        accessibilityLabel="チャットリスト画面へ"
        accessibilityHint="リストアイコンをタップすると ChatListScreen に移動します"
      >
        <Ionicons name="list-outline" size={30} color="#222" />
      </TouchableOpacity>
    </View>
  );
}

export default function TabLayout() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        if (storedTheme === 'dark' || storedTheme === 'light') {
          setTheme(storedTheme);
        }
      } catch (error) {
        console.error('テーマの読み込みに失敗しました:', error);
      }
    };
    loadTheme();
  }, []);

  return (
    <UIConfigProvider>
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: 'transparent' },
          headerTransparent: true,
          headerTitleStyle: { color: theme === 'dark' ? '#ccc' : '#555' },
          tabBarStyle: { display: 'none' },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            headerShown: true,
          }}
        />

          <Tabs.Screen 
            name="UIstore" 
            options={{
              title: '',
              headerShown: true,
            }}
          />

          <Tabs.Screen 
            name="UILayout" 
            options={{
              title: '',
              headerShown: true,
            }}
          />

        <Tabs.Screen
          name="settings"
          options={{
            title: '設定',
          }}
        />

        <Tabs.Screen
          name="ChatListScreen"
          options={{
            title: '',
          }}
        />

        <Tabs.Screen
          name="AIChat"
          options={{
            title: '',
            headerShown: true,
            headerLeft: () => <ChatListButton />,
          }}
        />
        
        <Tabs.Screen
          name="newAI"
          options={{
            title: '',
            headerShown: true,
            headerLeft: () => <ChatListButton />,
          }}
        />
        <Tabs.Screen
          name="Upsell"
          options={{
            title: '広告',
            headerShown: true,
            headerTitleStyle: {
              color: '#fff'
            }
          }}
        />
      </Tabs>
    </UIConfigProvider>
  );
}
