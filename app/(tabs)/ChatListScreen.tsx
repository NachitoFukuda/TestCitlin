import React, { useCallback, useEffect, useState } from 'react';
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
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import NeomorphBox from '@/components/ui/NeomorphBox';
import Footer from '@/components/ui/Footer';
import { useFocusEffect } from '@react-navigation/native';

interface SessionListItem {
  id: string;
  title: string;
  imageUri?: string | null;
}
// @ts-ignore ts(6385)
function getIconForChatId(chatId: string) {
  switch (chatId) {
    default:
      return require('../../assets/chatIcon/friend.jpg');
  }
}

const ChatListScreen: React.FC = () => {
  const router = useRouter();

  const [sessions, setSessions] = useState<SessionListItem[]>([]);

  // 新規チャット作成（必要  // --- 追加 ---
  const deleteChat = async (id: string) => {
    try {
      // 消すキーを列挙
      const keys = [
        `@chat_prompt:${id}`,
        `@chat_image:${id}`,
        `@chat_name:${id}`,
        `chat_${id}`,
      ];
      await AsyncStorage.multiRemove(keys);
      // 画面からも除外
      setSessions(prev => prev.filter(item => item.id !== id));
    } catch (e) {
      Alert.alert('Error', '削除に失敗しました');
    }
  };
  // --- ここまで ---があればストレージ保存処理を追加）
  const handleAddChat = () => {
    // ここで必要なら AsyncStorage.setItem(`@chat_prompt:${newId}`, 初期タイトル) などを行う
    router.push('/newAI');  };

  // AsyncStorage からセッション一覧をロード
  // セッション一覧をロードする関数
  const loadSessions = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const promptKeys = keys.filter(k => k.startsWith('@chat_prompt:'));
      const sessionsData = await Promise.all(
        promptKeys.map(async key => {
          const id = key.split(':')[1];
          const title = (await AsyncStorage.getItem(`@chat_name:${id}`)) || `チャット ${id.slice(-4)}`;
          const imageUri = await AsyncStorage.getItem(`@chat_image:${id}`);
          return { id, title, imageUri };
        })
      );
      setSessions(sessionsData);
    } catch (e) {
      Alert.alert('Error', 'セッションの読み込みに失敗しました');
    }
  };

  // 初回マウント時にロード
  useEffect(() => {
    loadSessions();
  }, []);

  // 画面フォーカス時にも再ロード
  useFocusEffect(
    useCallback(() => {
      loadSessions();
    }, [])
  );

  // リストの各アイテムレンダリング
     const renderItem = ({ item }: { item: SessionListItem }) => {
        // 削除ボタンをスワイプ後に表示
        const renderRightActions = () => (
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() =>
              Alert.alert('確認', '本当に削除しますか？', [
                { text: 'キャンセル', style: 'cancel' },
                {
                  text: '削除',
                  style: 'destructive',
                  onPress: () => deleteChat(item.id),
               },
            ])
            }
          >
           <Text style={styles.deleteText}>削除</Text>
          </TouchableOpacity>
        );
            const iconSource = item.imageUri
              ? { uri: item.imageUri }
              : getIconForChatId(item.id);


    const handleChatSelect = () => {
      router.push(`/AIChat?chatId=${item.id}`);
    };

      return (
        <Swipeable renderRightActions={renderRightActions}> 
         <NeomorphBox
        width={Dimensions.get('window').width * 0.95}
        height={60}
        forceTheme="light"
        style={styles.chatItemNeumorphism}
      >
        <TouchableOpacity
          style={styles.chatItemTouchable}
          onPress={handleChatSelect}
        >
          <View style={styles.iconTitleContainer}>
            <Image source={iconSource} style={styles.chatIcon} />
            <Text style={styles.chatTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </NeomorphBox>
      </Swipeable>
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
        <Text style={styles.sectionTitle}>教師一覧</Text>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            onPress={handleAddChat}
          >
        <NeomorphBox
          width={200}
          height={40}
          variant="AI"
          >
            <Text style={styles.addButtonText}>+ 新しいチャットを追加</Text>
            </NeomorphBox>
          </TouchableOpacity>
        </View>
        <FlatList
          data={sessions}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{
            alignItems: 'center',
            paddingBottom: 150,
          }}
        />
      </SafeAreaView>

      {/* 画面下部の固定ボタン群 */}
      <Footer activeIcon="chat" />
      
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E3E5F2' },
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  aiText: {
    color: 'rgba(0, 89, 255, 0.8)',
    fontWeight: 'bold',
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
    backgroundColor: '#E3E5F2',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  chatItemTouchable: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  iconTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
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
    textAlign: 'left',
  },
  addButtonContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },

  addButtonText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatListScreen;