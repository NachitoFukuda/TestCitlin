import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import NeomorphBox from '@/components/NeomorphBox';

interface Chat {
  id: string;
  title: string;
}

function getIconForChatId(chatId: string) {
  switch (chatId) {
    case 'friend':
      return require('../../assets/chatIcon/friend.jpg');
    case 'boyfriend':
      return require('../../assets/chatIcon/boy.jpg');
    case 'girlfriend':
      return require('../../assets/chatIcon/girl.jpg');
    case 'office':
      return require('../../assets/chatIcon/office.jpg');
    case 'eiken3':
      return require('../../assets/chatIcon/3.jpg');
    case 'eiken25':
      return require('../../assets/chatIcon/25.jpg');
    case 'eiken2':
      return require('../../assets/chatIcon/2.jpg');
    case 'eiken15':
      return require('../../assets/chatIcon/15.jpg');
    case 'eiken1':
      return require('../../assets/chatIcon/1.jpg');
    default:
      return require('../../assets/chatIcon/friend.jpg');
  }
}



const ChatListScreen: React.FC = () => {
  const router = useRouter();

  const fixedChats: Chat[] = [
    { id: 'friend', title: '友達' },
    { id: 'boyfriend', title: '彼氏' },
    { id: 'girlfriend', title: '彼女' },
    { id: 'momo_beginner', title: 'Momo 　初心者さん向け🐤' },
    { id: 'momo_intermediate', title: 'Momo 　中級者向け📚' },
    { id: 'momo_advanced', title: 'Momo 　鬼モード👹' },
    { id: 'eiken3', title: '英検3級    模擬面接' },
    { id: 'eiken25', title: '英検準2級 模擬面接' },
    { id: 'eiken2', title: '英検2級    模擬面接' },
    { id: 'eiken15', title: '英検準1級 模擬面接' },
    { id: 'eiken1', title: '英検1級    模擬面接' },

  ];


  const handleChatSelect = (chatId: string) => {
    if (chatId === 'eiken3') {
      router.push('/Eiken3');
    } else if (chatId === 'eiken25') {
      router.push('/Eiken25');
    } else if (chatId === 'eiken2') {
      router.push('/Eiken2');
    } else if (chatId === 'eiken15') {
      router.push('/Eiken15');
    } else if (chatId === 'eiken1') {
      router.push('/Eiken1');
    } else if (chatId === 'momo_beginner' || chatId === 'momo_intermediate' || chatId === 'momo_advanced') {
      router.push(`/AIteacherChat?level=${chatId}`);
    } else {
      router.push(`/AIChat?chatId=${chatId}`);
    }
  };

  const renderItem = ({ item }: { item: Chat }) => {
    const iconSource = getIconForChatId(item.id);
    return (
      <NeomorphBox
        width={Dimensions.get('window').width * 0.95}
        height={60}
        forceTheme={'light'}
        style={styles.chatItemNeumorphism}
      >
        <TouchableOpacity
          style={styles.chatItemTouchable}
          onPress={() => handleChatSelect(item.id)}
        >
          <View style={styles.iconTitleContainer}>
            <Image source={iconSource} style={styles.chatIcon} />
            <Text style={styles.chatTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </NeomorphBox>

    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          <Text style={styles.aiText}>AI</Text>Chat
        </Text>
        </View>
        <Text style={styles.sectionTitle}>ともだち</Text>
        <FlatList
          data={fixedChats}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{
            alignItems: 'center', // ← 追加：中央揃え
            paddingBottom: 150,
          }}
        />

      </SafeAreaView>
      <View style={styles.mask} />
      <View style={styles.messegeContainer}>
        <NeomorphBox
          width={60}
          height={60}
          forceTheme={'light'}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableOpacity
            onPress={() => router.push('/ChatListScreen')}
            accessibilityLabel="VIP"
            accessibilityHint="AIchatに遷移"
          >
            <Ionicons name="chatbubble-outline" size={30} color={'#4169e1'} />
          </TouchableOpacity>
        </NeomorphBox>
      </View>
      <TouchableOpacity
        onPress={() => router.push('/')}
        accessibilityLabel="homeへ"
        accessibilityHint="homeに移動します"
      >
        <View style={styles.hoomButtonContainer}>
          <NeomorphBox
            width={60}
            height={60}
            forceTheme={'light'}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="home-outline" size={30} color={'#666'} />
          </NeomorphBox>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push('/SettingsScreen')}
        accessibilityLabel="設定画面へ"
        accessibilityHint="歯車アイコンをタップすると設定画面に移動します"
      >
        <View style={styles.settingsButtonContainer}>
          <NeomorphBox
            width={60}
            height={60}
            forceTheme={'light'}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name="settings-outline" size={30} color={'#666'} />
          </NeomorphBox>
        </View>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E3E5F3' },
  headerContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  aiText: {
    color: 'rgba(0, 89, 255, 0.8)', // AIの文字の色
    fontWeight: 'bold', // 太字にしたい場合
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 16,
  },
  chatItemNeumorphism: {
    marginVertical: 10,
    backgroundColor: '#E3E5F3',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  chatItemTouchable: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',  // 横方向は左寄せ
    justifyContent: 'center',  // 垂直方向を中央揃え
    paddingLeft: 10,           // 左側に余白を追加（値はお好みで調整）
  },
  iconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // 左寄せ
    width: '100%',                // 内部コンテナも100%に
  },
  chatIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    overflow: 'hidden',
  },
  chatTitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'left', // テキストを左寄せ
  },
  messegeContainer: {
    position: 'absolute',
    left: 40,
    bottom: 70,
    zIndex: 2,
  },
  settingsButtonContainer: {
    position: 'absolute',
    right: 40,
    bottom: 70,
    zIndex: 1,
  },
  mask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: '#E3E5F3',
    zIndex: 0,
  },
  hoomButtonContainer: {
    position: 'absolute',
    bottom: 70,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
});


export default ChatListScreen;
