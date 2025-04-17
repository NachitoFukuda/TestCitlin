import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Switch, Text, TouchableOpacity, Alert, Linking, Dimensions, ActivityIndicator, Modal, Button } from 'react-native';
import { useRouter } from 'expo-router';
import NeomorphBox from '@/components/ui/NeomorphBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import useSubscription from '@/hooks/useSubscriptionStatus';
//import { PurchaseScreen } from '@/components/PurchaseScreen';
import { Ionicons } from '@expo/vector-icons';
// import Purchases from 'react-native-purchases';

const windowWidth = Dimensions.get('window').width;

const EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
const PRIVACY_POLICY_URL = "https://citlin.sakura.ne.jp/";

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState<any>(null);

  // const {
  //   isPremium,
  //   isLoading,
  //   purchaseProduct,
  //   restorePurchases,
  //   refresh,
  // } = useSubscription();

  useEffect(() => {
    const initialize = async () => {
     // テーマの読み込み処理
        try {
          const storedTheme = await AsyncStorage.getItem('theme');
          if (storedTheme === 'dark') {
            setIsDarkMode(true);
          } else {
            setIsDarkMode(false);
          }
        } catch (error) {
          console.error('❌ テーマの読み込みに失敗しました:', error);
          setIsDarkMode(false);
        }
        // RevenueCat SDK の初期化処理
        // try {
        //   Purchases.setDebugLogsEnabled(true);
        //   Purchases.configure({ apiKey: 'appl_HeFNWLtZWzmjtrunDFIwNEffyIt' });
        //   await Purchases.getOfferings();
        //   // サブスクリプション情報の取得
        //   const info = await Purchases.getCustomerInfo();
        //   setCustomerInfo(info);
        // } catch (error) {
        //   Alert.alert('SDK 初期化エラー', String(error));
        // }
      };

    initialize();
  }, []);
  const isAnySubscribed = customerInfo?.entitlements?.active
  ? Object.keys(customerInfo.entitlements.active).length > 0
  : false;

  // テーマの切り替え
  const handleToggleSwitch = async () => {
    if (isDarkMode === null) return;
    try {
      const newTheme = isDarkMode ? 'light' : 'dark';
      setIsDarkMode(!isDarkMode);
      await AsyncStorage.setItem('theme', newTheme);
    } catch (error) {
      Alert.alert("エラー", "テーマの保存に失敗しました:\n" + String(error));
    }
  };

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

  // RevenueCat を使った購入処理
  // const handlePurchase = async () => {
  //   try {
  //     await purchaseProduct("citlinplus");
  //     await refresh();
  //   } catch (error) {
  //     console.error("購入処理エラー:", error);
  //     Alert.alert("購入エラー", String(error));
  //   }
  // };
  const clearCorrectData = async () => {
    try {
      await AsyncStorage.removeItem('correctData');
      Alert.alert('リセット完了', '正解データを削除しました');
      // もし画面上で correctData を参照している state があれば同時にクリア
      // setCorrectData({}); など
    } catch (e) {
      console.error('AsyncStorage リセットエラー:', e);
      Alert.alert('エラー', '正解データの削除に失敗しました');
    }
  };
  
  const handlePress = () => {
    // ボタンが押された場合のアクション
    Alert.alert(
      'citlinPremium+',
      'この機能はプレミアムプラン専用です。アップグレードすると、追加の特典や機能がご利用いただけます。',

    );
      };
  return (
    <>
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#303030' : '#E3E5F3' }]}>
        {/* ダークモード設定 */}
        <NeomorphBox 
          width={300} 
          height={60} 
          forceTheme={isDarkMode ? 'dark' : 'light'} 
          style={styles.neomorphBox}
        >
          <View style={styles.row}>
            <Text style={[styles.text, { color: isDarkMode ? '#ddd' : '#666' }]}>
              ダークモード
            </Text>
            {isDarkMode !== null && <Switch value={isDarkMode} onValueChange={handleToggleSwitch} />}
          </View>
        </NeomorphBox>

        {/* 購入処理ボタン */}
        {/* <TouchableOpacity style={styles.purchaseButton} onPress={handlePurchase}>
          <Text style={styles.purchaseButtonText}>citlinplus を購入する</Text>
        </TouchableOpacity> */}
      <View style={{ margin: 12 }}>
        <Button
          title="正解データをリセット"
          onPress={clearCorrectData}
          color="#cc0000"
        />
      </View>
        {/* EULA・プライバシーポリシーリンク */}
        <TouchableOpacity onPress={handleOpenEULA} activeOpacity={0.7}>
          <Text style={styles.buttonText2}>利用規約 (EULA)</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOpenPrivacyPolicy} activeOpacity={0.7}>
          <Text style={styles.buttonText2}>プライバシーポリシー</Text>
        </TouchableOpacity>

        {/* モーダル表示用ボタン */}
        <TouchableOpacity onPress={() => setModalVisible(true)} activeOpacity={0.7}>
          <Text style={styles.buttonText2}>購入一覧を見る</Text>
        </TouchableOpacity>
      </View>

      {/* {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ color: '#000', marginTop: 8 }}>処理中...</Text>
        </View>
      )} */}
                <View style={styles.messegeContainer}>
                <NeomorphBox
                    width={60} // 実際のバナー広告の幅
                    height={60} // 実際のバナー広告の高さ
                    forceTheme={isDarkMode ? 'dark' : 'light'}
                    style={{ justifyContent: 'center', alignItems: 'center'}}
                  >
                {!isAnySubscribed && 
                  <TouchableOpacity onPress={handlePress}>
                    <Ionicons
                      name="lock-closed-outline"
                      size={30}
                      color={isDarkMode ? '#dddddd' : '#666666'}
                    />
                      <Text style={[styles.vipText, { color: isDarkMode ? '#dddddd' : '#666666' }]}>
                        VIP
                      </Text>
                  </TouchableOpacity>
                    }
                {isAnySubscribed && (
                      <TouchableOpacity
                      onPress={() => router.push('/ChatListScreen')}
                      accessibilityLabel="VIP"
                      accessibilityHint="AIchatに遷移"
                    >
                      <Ionicons
                        name="chatbubble-outline" // 吹き出しアイコンに変更
                        size={30}
                        color={isDarkMode ? '#dddddd' : '#666666'}
                      />
                    </TouchableOpacity>
                )}
    
                      </NeomorphBox>
                    </View>


                  <TouchableOpacity
                    onPress={() => router.push('/SettingsScreen')}
                    accessibilityLabel="設定画面へ"
                    accessibilityHint="歯車アイコンをタップすると設定画面に移動します"
                  >
                    <View style={styles.settingsButtonContainer}>
                  <NeomorphBox
                    width={60} // 実際のバナー広告の幅
                    height={60} // 実際のバナー広告の高さ
                    forceTheme={isDarkMode ? 'dark' : 'light'}
                    style={{ justifyContent: 'center', alignItems: 'center'}}
                  >

                    <Ionicons
                      name="settings-outline"
                      size={30}
                      color={isDarkMode ? '#dddddd' : '#4169e1'}
                    />
                  </NeomorphBox>
                </View>
              </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => router.push('/')}
                    accessibilityLabel="homeへ"
                    accessibilityHint="homeに移動します"
                  >
                  <View style={styles.hoomButtonContainer}>
                  <NeomorphBox
                    width={60} // 実際のバナー広告の幅
                    height={60} // 実際のバナー広告の高さ
                    forceTheme={isDarkMode ? 'dark' : 'light'}
                    style={{ justifyContent: 'center', alignItems: 'center'}}
                  >
                    <Ionicons
                      name="home-outline"
                      size={30}
                      color={isDarkMode ? '#dddddd' : '#666'}
                    />
                  </NeomorphBox>
                </View>
                </TouchableOpacity>
      {/* 下からスライドして表示されるモーダル */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.modalContent}>
            <TouchableOpacity style={modalStyles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={modalStyles.closeButtonText}>閉じる</Text>
            </TouchableOpacity>
            {/* <PurchaseScreen /> */}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, fontWeight: 'bold' },
  neomorphBox: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, margin: 20 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' },
  buttonText2: { margin: 10, fontSize: 16, fontWeight: 'bold', color: '#00f' },
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
  messegeContainer: {
    position: 'absolute',
    left: 40,
    bottom: 70,
  },
  settingsButtonContainer: {
    position: 'absolute',
    right: 40,
    bottom: 70,
  },
  hoomButtonContainer: {
    position: 'absolute',
    bottom: 70,
    left: 0,
    right: 0,
    alignItems: 'center',
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
});

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',  // 下部から表示
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
    padding: 16,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#00f',
  },

});
