import React, { useEffect, useRef, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, Pressable, ScrollView, Dimensions, Animated, Easing, Linking, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import NeomorphBox from '../ui/NeomorphBox';
import VipCardDesign from '../questioncomp/VipCardDesign';

const EULA_URL = 'https://yourdomain.com/eula'; // TODO: Replace with actual EULA URL
const PRIVACY_POLICY_URL = 'https://yourdomain.com/privacy'; // TODO: Replace with actual Privacy Policy URL

const SCREEN_WIDTH = Dimensions.get('window').width;

type PurchaseScreenProps = {
  customerInfo: any;
};



const PurchaseScreen: React.FC<PurchaseScreenProps> = ({ customerInfo }) => {
  const [loadingOfferings, setLoadingOfferings] = useState<boolean>(false);
  const [processingPurchase, setProcessingPurchase] = useState<boolean>(false);

  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');


  
  const handleStartTrial = useCallback(() => {
    // ここで選択されたプランに応じてトライアル処理を発火
    // 実購入処理は走らず、あくまでトライアルの開始フローに進める
    Alert.alert('無料トライアル', `${selectedPlan === 'monthly' ? '月額' : '年額'}プランのトライアルを開始します。`);
    // TODO: 実際のトライアル開始ロジック（RevenueCat/サーバー連携など）に置き換えてください
  }, [selectedPlan]);

  const handleOpenEULA = () => {
  Linking.openURL(EULA_URL).catch((err) => {
    Alert.alert('エラー', `EULAページを開けませんでした:\n${String(err)}`);
  });
};

const handleOpenPrivacyPolicy = () => {
  Linking.openURL(PRIVACY_POLICY_URL).catch((err) => {
    Alert.alert('エラー', `プライバシーポリシーページを開けませんでした:\n${String(err)}`);
  });
};
  // Focus-style tilt animation values (0: tilted back, 1: front)
  const focusMonthly = useRef(new Animated.Value(1)).current; // monthly starts front
  const focusYearly = useRef(new Animated.Value(0)).current;  // yearly starts tilted

  const focusCard = (front: 'monthly' | 'yearly') => {
    // allow rapid re-taps by stopping current animations
    focusMonthly.stopAnimation();
    focusYearly.stopAnimation();

    const toMonthly = front === 'monthly' ? 1 : 0;
    const toYearly  = front === 'yearly'  ? 1 : 0;

    // selection state (カードは選択のみ、購入処理は走らない)
    setSelectedPlan(front);

    Animated.parallel([
      Animated.timing(focusMonthly, {
        toValue: toMonthly,
        duration: 900, // slower
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(focusYearly, {
        toValue: toYearly,
        duration: 900, // slower
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ], { stopTogether: false }).start();
  };

  // Map [0..1] -> tilted/back vs. front values similar to the reference
  const getTiltStyle = (val: Animated.Value) => ({
    transform: [
      { perspective: 800 },
      {
        rotateX: val.interpolate({
          inputRange: [0, 1],
          outputRange: ['40deg', '0deg'],
        }),
      },
      {
        rotateZ: val.interpolate({
          inputRange: [0, 1],
          outputRange: ['20deg', '0deg'],
        }),
      },
      {
        translateY: val.interpolate({
          inputRange: [0, 1],
          outputRange: [-20, 0],
        }),
      },
    ],
  });

  // Tilt the cards each time this screen gains focus
  useFocusEffect(
    useCallback(() => {
      // Reset to opposite state so animation is visible even if already focused
      focusMonthly.stopAnimation();
      focusYearly.stopAnimation();
      focusMonthly.setValue(0); // monthly tilted
      focusYearly.setValue(1);  // yearly front

      const id = setTimeout(() => {
        // Animate to monthly front (and yearly tilted) for the entry effect
        focusCard('yearly');
      }, 0);

      return () => {
        clearTimeout(id);
      };
    }, [focusMonthly, focusYearly])
  );

  const handlePurchase = async (pkg: any) => {
    setProcessingPurchase(true);
    try {
      Alert.alert('購入完了', 'サブスクを購入しました。');
    } catch (e: any) {
      if (!e.userCancelled) {
        Alert.alert('購入エラー', String(e));
      }
    } finally {
      setProcessingPurchase(false);
    }
  };

  if (loadingOfferings) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4169e1" />
      </View>
    );
  }

  const isSubscribed = customerInfo?.entitlements?.active
    ? Object.keys(customerInfo.entitlements.active).length > 0
    : false;

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
      {loadingOfferings ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4169e1" />
        </View>
      ) : (
        <>
          <View style={styles.offeringContainer}>
            <View style={styles.cardOuterContainer}>
              {/* Yearly card with tilt */}
              <Pressable
                style={[styles.purchaseCardButton, styles.yearlyPress]}
                onPress={() => { console.log('[PurchaseScreen] tap yearly'); focusCard('yearly'); }}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
              >
                <Animated.View style={[styles.cardWrapper, getTiltStyle(focusYearly), selectedPlan === 'yearly' && styles.selectedCard]} collapsable={false} pointerEvents="box-none">
                  {selectedPlan === 'yearly' && (
                    <>
                      <LinearGradient
                        colors={["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#D7BAFF", "#FFBAE8"]}
                        style={styles.selectedCardGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                      />
                      <View style={styles.selectedBadge}>
                        <Ionicons name="checkmark" size={22} color="#000000ff" />
                      </View>
                      {/* おすすめバッジ（右下） */}
                      <View style={styles.recommendCornerBadge} pointerEvents="none">
                        <Text style={styles.recommendCornerText}>おすすめ</Text>
                      </View>
                    </>
                  )}
                  <View style={selectedPlan === 'yearly' ? styles.selectedCardInner : undefined}>
                    <View pointerEvents="none">
                        <VipCardDesign level="yearly" />
                    </View>
                  </View>
                </Animated.View>
              </Pressable>

              {/* Monthly card with tilt */}
              <Pressable
                style={[styles.purchaseCardButton, styles.monthlyPress]}
                onPress={() => { console.log('[PurchaseScreen] tap monthly'); focusCard('monthly'); }}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
              >
                <Animated.View style={[styles.cardWrapper, getTiltStyle(focusMonthly), selectedPlan === 'monthly' && styles.selectedCard]} collapsable={false} pointerEvents="box-none">
                  {selectedPlan === 'monthly' && (
                    <>
                      <LinearGradient
                        colors={["#FFB3BA", "#FFDFBA", "#FFFFBA", "#BAFFC9", "#BAE1FF", "#D7BAFF", "#FFBAE8"]}
                        style={styles.selectedCardGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                      />
                      <View style={styles.selectedBadge}>
                        <Ionicons name="checkmark" size={22} color="#000000ff" />
                      </View>
                    </>
                  )}
                  <View style={selectedPlan === 'monthly' ? styles.selectedCardInner : undefined}>
                    <View pointerEvents="none">
                      <VipCardDesign level="monthly" />
                    </View>
                  </View>
                </Animated.View>
              </Pressable>
            </View>
          </View>
          <View style={styles.trialButtonContainer}>
            <Pressable
              onPress={handleStartTrial}
              style={({ pressed }) => [
                styles.trialButton,
                pressed && { opacity: 0.8 },
                processingPurchase && { opacity: 0.6 },
              ]}
              disabled={processingPurchase}
              hitSlop={{ top: 8, bottom: 8, left: 16, right: 16 }}
            >
        <NeomorphBox
          width={Dimensions.get('window').width * 0.9}
          height={50}
          variant={'blue'}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}> 
            {selectedPlan === 'monthly' ? '月額プランの無料トライアルを開始' : '年額プランの無料トライアルを開始'}
          </Text>
        </NeomorphBox>
            </Pressable>
          </View>


          <Text style={styles.termsText}>
            購入を完了すると、iTunesアカウントに請求されます。サブスクリプションは自動更新され、更新日の24時間前までにキャンセルしない限り更新されます。
          </Text>
          <View style={styles.linksContainer}>
            <TouchableOpacity onPress={handleOpenEULA} style={styles.linkButton}>
              <Text style={styles.linkText}>EULA</Text>
            </TouchableOpacity>
            <Text style={styles.linkSeparator}>|</Text>
            <TouchableOpacity onPress={handleOpenPrivacyPolicy} style={styles.linkButton}>
              <Text style={styles.linkText}>プライバシーポリシー</Text>
            </TouchableOpacity>
          </View>
          {processingPurchase && <ActivityIndicator size="small" style={styles.loader} />}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  offeringContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    pointerEvents: 'box-none',
  },
  cardOuterContainer: {
    width: '95%',
    alignSelf: 'center',
    pointerEvents: 'box-none',
  },
  cardWrapper: {
    alignItems: 'center',
    marginBottom: 20,
    zIndex: 1,
    pointerEvents: 'box-none',
    width: '100%',
    position: 'relative',
  },
  purchaseCardButton: {
    alignItems: 'center',
    marginBottom: 36,
    width: '100%',
    minHeight: 20,
  },
  yearlyPress: {
    zIndex: 1,
  },
  monthlyPress: {
    zIndex: 2,
  },
  offeringCard: {
    padding: 20,
  },
  popularCard: {
    borderColor: '#ffd700',
  },
  popularBadge: {
    position: 'absolute',
    top: -16,
    right: 20,
    backgroundColor: '#ffd700',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    color: '#666',
    fontSize: 16,
    fontWeight: 'bold',
  },
  offeringTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop:20,
    paddingBottom:5,
    color: '#fff',
    textAlign: 'center',
  },
  offeringTitle2: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop:30,
    color: '#666',
    textAlign: 'center',
  },
  offeringDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  offeringPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4169e1',
    marginTop:60,
    marginBottom: 16,
  },
  featuresContainer: {
    gap: 8,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#666',
  },
  purchaseButton: {
    backgroundColor: '#444',
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    marginBottom: 8,
    minWidth:'80%'
  },
  purchaseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  termsText: {
    paddingHorizontal: 40,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 8,
  },
  loader: { marginVertical: 20 },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  packageContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E3E5F2',
  },
  packageTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  packagePrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007AFF',
    marginBottom: 12,
  },
  recommendBadge: {
    backgroundColor: '#FFD700',
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    overflow: 'hidden',
    fontSize: 12,
    marginBottom: 8,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
    marginHorizontal: 16,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#444',
  },
  toggleButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  toggleButtonTextActive: {
    color: '#fff',
  },
  discountText: {
    fontSize: 12,
    color: '#ff6b6b',
  },
  discountTextActive: {
    color: '#fff',
  },
  yearlyDiscount: {
    fontSize: 12,
    color: '#ff6b6b',
    marginTop: 8,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    width: SCREEN_WIDTH * 0.85,
    alignSelf: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },

  titleGradient: {
    position: 'absolute',    // 絶対配置
    top: 0,                  // 上端にくっつく
    width:'100%',
    paddingVertical: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  titlesimple: {
    position: 'absolute',    // 絶対配置
    top: 0,                  // 上端にくっつく
  },
  linksContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  linkButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  linkText: {
    color: '#4169e1',
    fontSize: 14,
    fontWeight: '600',
  },
  linkSeparator: {
    color: 'transparent', // no visual separator; spacing provided by gap
    marginHorizontal: 0,
  },
  trialButtonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 16,
  },
  trialButton: {
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 24,
    minWidth: '88%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  selectedCard: {
    borderColor: 'transparent',
    borderRadius: 22,
    borderStyle: 'solid',
    overflow: 'visible',   // はみ出しを許可
    padding: 6,            // 枠の太さを太く
    position: 'relative',
  },
  selectedCardGradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
    pointerEvents: 'none',
    borderRadius: 22,
  },
  selectedCardInner: {
    borderRadius: 18,
    overflow: 'hidden',
    width: '100%',
  },
  selectedBadge: {
    position: 'absolute',
    top: -6,
    right: -10,
    backgroundColor: '#BAE1FF',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    zIndex: 3,              // ensure badge is above content
    pointerEvents: 'none',  // don't block touches
  },
  recommendCornerBadge: {
    position: 'absolute',
    bottom:0,       // はみ出しOK（selectedCard の overflow: 'visible'）
    right: 0,
    backgroundColor: '#D7BAFF', // 柔らかいパステル
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 12,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    zIndex: 2,
  },
  recommendCornerText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffffff',
    letterSpacing: 0.2,
  },
});

export default PurchaseScreen;
