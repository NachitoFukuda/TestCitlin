import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NeomorphBox from '../ui/NeomorphBox';
import { LinearGradient } from 'expo-linear-gradient';

const SCREEN_WIDTH = Dimensions.get('window').width;

type PurchaseScreenProps = {
  customerInfo: any;
};

// 仮のサブスクリプションデータ
const mockOfferings = {
  premium_offering: {
    monthlytitle: 'citrin premir+',
    yearlytitle: 'citrin premir pro',
    monthlyPrice: '500/月',
    yearlyPrice: '¥5000/年',
    features: [
      '無制限のAIチャット',
      '高度なAIモデルへのアクセス',
      '広告非表示',
      '優先サポート',
    ],
    popular: true,
  },
  adfree_offering: {
    monthlytitle: '広告非表示  (月額）',
    yearlytitle: '広告非表示  (年額）',
    monthlyPrice: '200/月',
    yearlyPrice: '¥2000/年',
    features: [
      '広告非表示',
      '基本的なAIチャット機能',
    ],
    popular: false,
  },
};

const PurchaseScreen: React.FC<PurchaseScreenProps> = ({ customerInfo }) => {
  const [offerings, setOfferings] = useState<any | null>(mockOfferings);
  const [loadingOfferings, setLoadingOfferings] = useState<boolean>(false);
  const [processingPurchase, setProcessingPurchase] = useState<boolean>(false);
  // 年額/月額プラン選択用
  const [isYearly, setIsYearly] = useState(false);
  // offering種別選択用
  const [selectedOfferingId, setSelectedOfferingId] = useState<'premium_offering' | 'adfree_offering'>('premium_offering');



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

  const selectedPackages = offerings?.all?.[selectedOfferingId]?.availablePackages ?? [];

  const filteredPackages = selectedPackages.filter((pkg: any) => {
    if (isYearly) {
      return pkg.identifier.includes('annual') || pkg.identifier.includes('Premier_Pro');
    } else {
      return pkg.identifier.includes('monthly') || pkg.identifier.includes('Plus');
    }
  });

  return (
    <>
      {loadingOfferings ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4169e1" />
        </View>
      ) : (
        <>
          {/* プラン切り替えトグル */}
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[styles.toggleButton, !isYearly && styles.toggleButtonActive]}
              onPress={() => setIsYearly(false)}
            >
              <Text style={[styles.toggleButtonText, !isYearly && styles.toggleButtonTextActive]}>
                月額プラン
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.toggleButton, isYearly && styles.toggleButtonActive]}
              onPress={() => setIsYearly(true)}
            >
              <Text style={[styles.toggleButtonText, isYearly && styles.toggleButtonTextActive]}>
                年額プラン
                <Text style={[styles.discountText, isYearly && styles.discountTextActive]}>
                  {' '}17%OFF
                </Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.offeringContainer}>
            {Object.entries(mockOfferings).map(([id, offering]) => (
              <View key={id} style={styles.cardWrapper}>
                <NeomorphBox
                  style={[
                    styles.offeringCard,
                    offering.popular && isYearly && styles.popularCard,
                  ]}
                  width={SCREEN_WIDTH * 0.85}
                  height={370}
                  variant={offering.popular && isYearly ? 'AI' : ''}
                >
                  <LinearGradient
                    colors={offering.popular && isYearly ? ['rgba(230, 0, 255, 0.7)', 'rgba(13, 231, 255, 0.7)'] : ['#E3E5F2', '#E3E5F2']}
                    start={{ x: 0, y: 0.8 }}
                    end={{ x: 0.8, y: 0 }}
                    style={offering.popular && isYearly ? styles.titleGradient : styles.titlesimple}
                  >
                    <Text style={offering.popular && isYearly ?styles.offeringTitle : styles.offeringTitle2}>
                      {isYearly ? offering.yearlytitle : offering.monthlytitle}
                    </Text>
                  </LinearGradient>

                  {offering.popular && isYearly && (
                    <View style={styles.popularBadge}>
                      <Text style={styles.popularText}>おすすめ</Text>
                    </View>
                  )}
                  <Text style={styles.offeringPrice}>
                    {isYearly ? `¥${Math.round(parseInt(offering.yearlyPrice.replace(/[^0-9]/g, '')) / 12)}/月` : offering.monthlyPrice}
                  </Text>
                  {isYearly && (
                    <Text style={styles.yearlyDiscount}>
                      年間一括払い {offering.yearlyPrice}
                    </Text>
                  )}
                  <View style={styles.featuresContainer}>
                    {offering.features.map((feature, index) => (
                      <View key={index} style={styles.featureRow}>
                        <Ionicons name="checkmark-circle" size={24} color="#444" />
                        <Text style={styles.featureText}>{feature}</Text>
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    style={styles.purchaseButton}
                    onPress={() => handlePurchase(offering)}
                    disabled={processingPurchase}
                  >
                    <Text style={styles.purchaseButtonText}>
                      無料で試す
                    </Text>
                  </TouchableOpacity>
                </NeomorphBox>
              </View>
            ))}
          </View>


          <Text style={styles.termsText}>
            購入を完了すると、iTunesアカウントに請求されます。サブスクリプションは自動更新され、更新日の24時間前までにキャンセルしない限り更新されます。
          </Text>

          {processingPurchase && <ActivityIndicator size="small" style={styles.loader} />}
        </>
      )}
    </>
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
  },
  cardWrapper: {
    alignItems: 'center',
    marginBottom: 20,
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
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
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
  noticeText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 16,
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
    paddingHorizontal: 16,
    paddingBottom: 32,
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
});

export default PurchaseScreen;
