import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Switch, Text, TouchableOpacity, Alert, Linking, Dimensions, ActivityIndicator, Modal, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PurchaseScreen from '../../components/etc/PurchaseScreen';
import Footer from '@/components/ui/Footer';
import { ScrollView } from 'react-native-gesture-handler';
import NeomorphBox from '@/components/ui/NeomorphBox';
// import Purchases from 'react-native-purchases';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
const PRIVACY_POLICY_URL = "https://citlin.sakura.ne.jp/";

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [customerInfo, setCustomerInfo] = useState<any>(null);

  const keysToClear = [
        '@deadline_days',
         'correctData_1',
         'correctData_1_5',
         'correctData_2',
         'correctData_2_5',
         'correctData_3',
        '@RotatingNeomorphicButton_counter',
         'last_usage_date',
         'last_usage_month',
         'daily_token_balance',
        '@quiz:tutorialDone',
        '@quiz:purchases',
         '@quiz_points',
        '@quiz:positions',
        '@quiz:tutorialStep'
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

  const isAnySubscribed = customerInfo?.entitlements?.active
  ? Object.keys(customerInfo.entitlements.active).length > 0
  : false;


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
                      await AsyncStorage.multiRemove(keysToClear);
                      Alert.alert('データクリア完了', '指定したストレージデータをすべて削除しました。');
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
      <View style={[styles.container, { backgroundColor: '#E3E5F2' }]}> 
      <ScrollView
      style={styles.container}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
    >

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

        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>
          プラン比較
        </Text>

        <View style={[styles.purchaseContainer]}> 
          <PurchaseScreen customerInfo={customerInfo} />
        </View>
        {/* EULAとプライバシーポリシーのリンク */}
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={handleOpenEULA} style={styles.linkButton}>
            <Text style={styles.linkText}>EULA</Text>
          </TouchableOpacity>
          <Text style={styles.linkSeparator}>|</Text>
          <TouchableOpacity onPress={handleOpenPrivacyPolicy} style={styles.linkButton}>
            <Text style={styles.linkText}>プライバシーポリシー</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.title, { color: isDarkMode ? '#fff' : '#000' }]}>設定</Text>

        {/* 設定セクション */}

        <TouchableOpacity onPress={clearAllData} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>データの完全削除</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />

        </ScrollView>

      </View>



      <Footer activeIcon="settings" />

      {/* 下からスライドして表示されるモーダル */}

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
  section: {
    width: '90%',
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginBottom: 32,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  rowButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  icon: {
    marginRight: 12,
  },
  buttonText2: {
    fontSize: 17,
    fontWeight: '600',
  },
  neomorphBox: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, margin: 20 },
  purchaseButton: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#4169e1',
    borderRadius: 8,
  },
  purchaseButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },

  vipText: {
    position: 'absolute',
    top: 16,      // この値を調整して上下の位置を微調整
    left: 0,      // 必要なら left, right も調整可能
    right: 0,
    textAlign: 'center',
    fontSize: 8,
    fontWeight: 'bold',
  },
  bottomSubButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
    gap: 16,
  },
  subButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  subButtonText: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.2,
    textAlign: 'left',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  linkButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  linkText: {
    color: '#4169e1',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  linkSeparator: {
    color: '#666',
    marginHorizontal: 8,
  },
  clearButtonText: {
    color: '#ff4d4f',
    fontWeight: 'bold',
    fontSize: 16,
    
  },
  purchaseContainer: {
    width: '100%',
    marginBottom: 32,
    backgroundColor: 'transparent',
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
