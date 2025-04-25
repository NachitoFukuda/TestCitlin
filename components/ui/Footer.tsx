import React from 'react';
import { View, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Footer() {
  const router = useRouter();
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push('/ChatListScreen')}
        accessibilityLabel="VIP"
        accessibilityHint="AIチャットに遷移"
      >
        <Ionicons
          name="chatbubble-outline"
          size={30}
          color={isDarkMode ? '#dddddd' : '#666666'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/UIstore')}
        accessibilityLabel="Shop"
        accessibilityHint="ショップに遷移"
      >
        <Ionicons
          name="pricetag-outline"
          size={30}
          color={isDarkMode ? '#dddddd' : '#666666'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push('/')}
        accessibilityLabel="Home"
        accessibilityHint="ホームに遷移"
      >
        <Ionicons
          name="home-outline"
          size={30}
          color={isDarkMode ? '#dddddd' : '#666666'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push('/UILayout')}
        accessibilityLabel="Layout"
        accessibilityHint="レイアウトに遷移"
      >
        <Ionicons
          name="grid-outline"
          size={30}
          color={isDarkMode ? '#dddddd' : '#666666'}
        />
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={() => router.push('/SettingsScreen')}
        accessibilityLabel="Settings"
        accessibilityHint="設定に遷移"
      >
        <Ionicons
          name="settings-outline"
          size={30}
          color={isDarkMode ? '#dddddd' : '#666666'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});