import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Switch, Text, TouchableOpacity, Alert, Linking, Dimensions, ActivityIndicator, Modal, Button, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '@/components/ui/Footer';
import { ScrollView } from 'react-native-gesture-handler';
import NeomorphBox from '@/components/ui/NeomorphBox';
import ProfileCard from '@/components/etc/ProfileCard';
import EditProfileModal from '@/components/etc/EditProfileModal';

// import Purchases from 'react-native-purchases';
// @ts-ignore: No type declarations for 'firebase/auth/react-native'

// Initialize Firebase App and Auth persistence
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
const PRIVACY_POLICY_URL = "https://citlin.sakura.ne.jp/";

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [customerInfo, setCustomerInfo] = useState<any>(null);
  const [isProfileModalVisible, setProfileModalVisible] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    if (!isProfileModalVisible) {
      setRefreshKey(prev => prev + 1);
    }
  }, [isProfileModalVisible]);

  const keysToClear = [
        '@deadline_days',
          'correctData_1',
          'correctData_1_5',
          'correctData_2',
          'correctData_2_5',
          'correctData_3',
          'DAYLY_CORRECT_3',
          '@generated_data',
          '@RotatingNeomorphicButton_counter',
          'last_usage_date',
          'last_usage_month',
          'daily_token_balance',
          '@quiz:tutorialDone',
          '@quiz:purchases',
          '@quiz_points',
          '@quiz:positions',
          '@quiz:tutorialStep',
          '@purchasedIcons',
          '@purchasedCards',
          '@max_daily_limit_3'
      ];

      const handleSelectLevel = async (level: string) => {
        try {
          await AsyncStorage.removeItem('@selected_levels');
          await AsyncStorage.setItem('@selected_levels', JSON.stringify([level]));
          Alert.alert('保存完了', `${level}級に選択しました`);
        } catch (e) {
          console.error('選択レベル保存エラー:', e);
          Alert.alert('エラー', '級の保存に失敗しました');
        }
      };

  useEffect(() => {
    const initialize = async () => {
      setIsLoading(true);
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        setIsDarkMode(storedTheme === 'dark');
      } catch (error) {
        console.error('❌ テーマの読み込みに失敗しました:', error);
        setIsDarkMode(false);
      } finally {
        setIsLoading(false);
      }
    };
    initialize();
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.container, { backgroundColor: '#F4F8FB' }]}>
        <ActivityIndicator size="large" color="#4169e1" />
      </View>
    );
  }

  // EULA・プライバシーポリシーリンク
  const handleOpenEULA = () => {
    Linking.openURL(EULA_URL).catch((err) => {
      Alert.alert("エラー", `EULAページを開けませんでした:\n${String(err)}`);
    });
  };

  const handleOpenPrivacyPolicy = () => {
    Linking.openURL(PRIVACY_POLICY_URL).catch((err) => {
      Alert.alert("エラー", `プライバシーポリシーページを開けませんでした:\n${String(err)}`);
    });
  };

  const clearAllData = async () => {
    Alert.alert(
      '確認',
      '本当にすべてのデータを削除しますか？',
      [
        {
          text: 'キャンセル',
          style: 'cancel',
        },
        {
          text: '削除する',
          style: 'destructive',
          onPress: () => {
            Alert.alert(
              '最終確認',
              '本当に本当に削除してもよろしいですか？この操作は取り消せません。',
              [
                {
                  text: 'やめる',
                  style: 'cancel',
                },
                {
                  text: '削除実行',
                  style: 'destructive',
                  onPress: async () => {
                    try {
                      // 1) 既知のキー群
                      const base = [...keysToClear];

                      // 2) チャット関連の全キー（全ID分）を自動検出
                      const allKeys = await AsyncStorage.getAllKeys();
                      const CHAT_PREFIXES = ['@chat_prompt:', '@chat_name:', '@chat_image:', 'chat_'];
                      const chatKeys = allKeys.filter(k => CHAT_PREFIXES.some(p => k.startsWith(p)));

                      // 3) 重複排除して一括削除
                      const toRemove = Array.from(new Set([...base, ...chatKeys]));
                      await AsyncStorage.multiRemove(toRemove);

                      Alert.alert('データクリア完了', '指定したデータとチャット関連データをすべて削除しました。');
                    } catch (e) {
                      console.error('データクリアエラー:', e);
                      Alert.alert('クリアエラー', 'データ削除に失敗しました。');
                    }
                  },
                },
              ],
              { cancelable: true }
            );
          },
        },
      ],
      { cancelable: true }
    );
  };
  



  return (
    <>
      <View
        key={refreshKey}
        style={[styles.container, { backgroundColor: '#E3E5F2' }]}
      >
        <ScrollView contentContainerStyle={{ padding: 16 }} showsVerticalScrollIndicator={false}>
          <ProfileCard />
          <TouchableOpacity
            onPress={() => setProfileModalVisible(true)}
            style={{ marginTop: 24, alignSelf: 'center' }}
          >
            <NeomorphBox
              width={SCREEN_WIDTH * 0.6}
              height={48}
              style={{
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              forceTheme="light"
            >
              <Text style={{ color: '#666', fontSize: 16 }}>プロフィールを編集</Text>
            </NeomorphBox>
          </TouchableOpacity>
          <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
            級を変更
          </Text>
          <View style={styles.levelcontainer}>
            {/* 3級 */}
            <View style={{ marginVertical: 5 }}>
              <TouchableOpacity onPress={() => handleSelectLevel('3')}>
                <NeomorphBox
                  width={SCREEN_WIDTH * 0.6}
                  height={50}
                  style={[
                    styles.levelBox,
                  ]}
                  forceTheme={'light'}
                >
                  <Text
                    style={[
                      styles.levelButtonText,
                    ]}
                  >
                    英検3級  1000単語
                  </Text>
                </NeomorphBox>
              </TouchableOpacity>
            </View>
            {/* 準2級 */}
            <View style={{ marginVertical: 5 }}>
              <TouchableOpacity onPress={() => handleSelectLevel('2_5')}>
                <NeomorphBox
                  width={SCREEN_WIDTH * 0.6}
                  height={50}
                  style={[
                    styles.levelBox,
                  ]}
                  forceTheme={'light'}
                >
                  <Text
                    style={[
                      styles.levelButtonText,
                    ]}
                  >
                    英検準2級  1220単語
                  </Text>
                </NeomorphBox>
              </TouchableOpacity>
            </View>
            {/* 2級 準備中 */}
            <View style={{ marginVertical: 5 }}>
              <TouchableOpacity onPress={() => handleSelectLevel('2')}>
                <NeomorphBox
                  width={SCREEN_WIDTH * 0.6}
                  height={50}
                  style={[
                    styles.levelBox,
                  ]}
                  forceTheme={'light'}
                >
                  <Text
                    style={[
                      styles.levelButtonText,
                    ]}
                  >
                    英検2級  2300単語
                  </Text>
                </NeomorphBox>
              </TouchableOpacity>
            </View>
            {/* 準1級 準備中 */}
            <View style={{ marginVertical: 5 }}>
              <TouchableOpacity onPress={() => handleSelectLevel('1_5')}>
                <NeomorphBox
                  width={SCREEN_WIDTH * 0.6}
                  height={50}
                  style={[
                    styles.levelBox,
                  ]}
                  forceTheme={'light'}
                >
                  <Text
                    style={[
                      styles.levelButtonText,
                    ]}
                  >
                    英検準1級  3400単語
                  </Text>
                </NeomorphBox>
              </TouchableOpacity>
            </View>
            {/* 1級 準備中 */}
            <View style={{ marginVertical: 5 }}>
              <TouchableOpacity onPress={() => handleSelectLevel('1')}>
                <NeomorphBox
                  width={SCREEN_WIDTH * 0.6}
                  height={50}
                  style={[
                    styles.levelBox,
                  ]}
                  forceTheme={'light'}
                >
                  <Text
                    style={[
                      styles.levelButtonText,
                    ]}
                  >
                    英検1級  4280単語
                  </Text>
                </NeomorphBox>
              </TouchableOpacity>
            </View>
          </View>
          {/* EULAとプライバシーポリシーのリンク */}

          <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>設定</Text>
          {/* 設定セクション */}
          <TouchableOpacity onPress={clearAllData} style={styles.clearButton}>
            <Text style={styles.clearButtonText}>データの完全削除</Text>
          </TouchableOpacity>
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>



      <Footer activeIcon="settings" />

      <Modal
        visible={isProfileModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setProfileModalVisible(false)}
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <EditProfileModal onClose={() => setProfileModalVisible(false)} />
  </View>
</Modal>

    </>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 60,
    backgroundColor: '#E3E5F2'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 24,
    letterSpacing: 1.2,
  },
  clearButtonText: {
    color: '#ff4d4f',
    fontWeight: 'bold',
    fontSize: 16,
  },
  clearButton: {
    marginBottom: 100,
  },
  levelcontainer: {
    alignItems: 'center',
  },
  levelBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  levelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "rgb(59, 59, 59)",
  },
});
