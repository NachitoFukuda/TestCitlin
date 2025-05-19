import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Switch, Text, TouchableOpacity, Alert, Linking, Dimensions, ActivityIndicator, Modal, Button } from 'react-native';
import { useRouter } from 'expo-router';
import NeomorphBox from '@/components/ui/NeomorphBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PurchaseScreen from '../../components/etc/PurchaseScreen';
import Purchases from 'react-native-purchases';
//import useSubscription from '@/hooks/useSubscriptionStatus';
//import { PurchaseScreen } from '@/components/PurchaseScreen';
import { Ionicons } from '@expo/vector-icons';
import Footer from '@/components/ui/Footer';
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
        try {
          Purchases.setDebugLogsEnabled(true);
          Purchases.configure({ apiKey: 'appl_HeFNWLtZWzmjtrunDFIwNEffyIt' });
          await Purchases.getOfferings();
          const info = await Purchases.getCustomerInfo();
          setCustomerInfo(info);
        } catch (error) {
          Alert.alert('SDK 初期化エラー', String(error));
        }
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


  return (
    <>
      <View style={[styles.container, { backgroundColor: isDarkMode ? '#222' : '#F4F8FB' }]}> 
        {/* タイトル */}

        {/* 設定セクション */}
        <View style={[styles.section, { backgroundColor: isDarkMode ? '#2c2c2c' : '#fff', shadowColor: isDarkMode ? '#000' : '#aaa' }]}> 
          <TouchableOpacity style={styles.rowButton} onPress={() => setModalVisible(true)} activeOpacity={0.7}>
            <Ionicons name="list" size={22} color={isDarkMode ? '#6cf' : '#4169e1'} style={styles.icon} />
            <Text style={[styles.buttonText2, { color: isDarkMode ? '#6cf' : '#4169e1' }]}>有料プランを見る</Text>
          </TouchableOpacity>
        </View>
      </View>



      <Footer activeIcon="settings" />

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
            <PurchaseScreen customerInfo={customerInfo} />
            <View style={styles.linksContainer}>
            <TouchableOpacity onPress={handleOpenEULA}>
              <Text style={styles.linkText}>利用規約</Text>
            </TouchableOpacity>
            <Text style={styles.separator}>|</Text>
            <TouchableOpacity onPress={handleOpenPrivacyPolicy}>
              <Text style={styles.linkText}>プライバシーポリシー</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 0, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#EBF3FF'
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
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginBottom: 6,
    backgroundColor: 'transparent',
    width: '100%',
  },
  icon: {
    marginRight: 12,
  },
  buttonText2: {
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.5,
    textAlign: 'left',
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
    paddingVertical: 8,
  },
  linkText: {
    color: '#666',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  separator: {
    color: '#666',
    fontSize: 12,
    marginHorizontal: 8,
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
