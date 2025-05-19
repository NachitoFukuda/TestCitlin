import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import Purchases from 'react-native-purchases';

type PurchaseScreenProps = {
  customerInfo: any;
};

const PurchaseScreen: React.FC<PurchaseScreenProps> = ({ customerInfo }) => {
  const [offerings, setOfferings] = useState<any | null>(null);
  const [loadingOfferings, setLoadingOfferings] = useState<boolean>(true);
  const [processingPurchase, setProcessingPurchase] = useState<boolean>(false);
  // 年額/月額プラン選択用
  const [isYearly, setIsYearly] = useState(true);
  // offering種別選択用
  const [selectedOfferingId, setSelectedOfferingId] = useState<'premium_offering' | 'adfree_offering'>('premium_offering');

  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const allOfferings = await Purchases.getOfferings();
        setOfferings(allOfferings);
      } catch (e) {
        Alert.alert('Offerings取得エラー', String(e));
      } finally {
        setLoadingOfferings(false);
      }
    };
    fetchOfferings();
  }, []);

  const handlePurchase = async (pkg: any) => {
    setProcessingPurchase(true);
    try {
      await Purchases.purchasePackage(pkg);
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
    return <ActivityIndicator size="large" style={styles.loader} />;
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
    <View style={styles.container}>
      <Text style={styles.header}>
        {isSubscribed ? 'サブスク中のプラン' : 'サブスク未加入'}
      </Text>

      {/* 年額/月額トグル */}
      {!isSubscribed && (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 24 }}>
          <TouchableOpacity
            onPress={() => setIsYearly(false)}
            style={{
              backgroundColor: !isYearly ? '#007AFF' : '#ccc',
              padding: 12,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
              minWidth: 120,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>月額プラン</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsYearly(true)}
            style={{
              backgroundColor: isYearly ? '#007AFF' : '#ccc',
              padding: 12,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              minWidth: 120,
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>年額プラン</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* プラン表示 */}
      {!isSubscribed &&
        filteredPackages.map((pkg: any, index: number) => (
          <React.Fragment key={pkg.identifier}>
            <View
              style={[
                styles.packageContainer,
                index === 0 && isYearly && {
                  borderColor: '#FFD700',
                  backgroundColor: '#FFF9E6',
                  borderWidth: 3,
                  shadowColor: '#FFD700',
                  shadowOpacity: 0.3,
                  shadowRadius: 10,
                  elevation: 6,
                  transform: [{ scale: 1.05 }],
                  marginVertical: 24,
                  padding: 24,
                },
              ]}
            >
              <Text
                style={[
                  styles.packageTitle,
                  index === 0 && isYearly && {
                    color: '#B8860B',
                    fontSize: 24,
                    fontWeight: 'bold',
                    marginBottom: 8,
                  },
                ]}
              >
                {pkg.product.title}
              </Text>
              <View style={{ alignItems: 'center', marginBottom: 16 }}>
                {index === 0 && isYearly && (() => {
                  const monthly = selectedPackages.find((p: any) => p.identifier === 'citlin_Plus')?.product?.price ?? 0;
                  const yearlyEquivalent = monthly * 12;
                  return (
                    <Text
                      style={[
                        styles.packagePrice,
                        { 
                          textDecorationLine: 'line-through', 
                          color: '#999',
                          fontSize: 18,
                          marginBottom: 4,
                        },
                      ]}
                    >
                      ¥{yearlyEquivalent.toFixed(0)}
                    </Text>
                  );
                })()}
                <Text
                  style={[
                    styles.packagePrice,
                    index === 0 && isYearly && {
                      color: '#FF8C00',
                      fontSize: 28,
                      fontWeight: 'bold',
                    },
                  ]}
                >
                  {pkg.product.priceString}
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: '#007AFF',
                    paddingVertical: 10,
                    paddingHorizontal: 24,
                    borderRadius: 20,
                  },
                  index === 0 && isYearly && {
                    paddingVertical: 16,
                    paddingHorizontal: 40,
                    backgroundColor: '#FF8C00',
                    shadowColor: '#FF8C00',
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 4,
                  }
                ]}
                onPress={() => handlePurchase(pkg)}
                disabled={processingPurchase}
              >
                <Text style={{ 
                  color: 'white', 
                  fontSize: index === 0 && isYearly ? 18 : 16, 
                  fontWeight: 'bold' 
                }}>購入する</Text>
              </TouchableOpacity>
              <Text style={styles.noticeText}>
                購入すると、サブスクリプションは自動的に更新されます。いつでもApp Storeの設定からキャンセル可能です。料金は購入確認時にApple IDに請求されます。
              </Text>
            </View>
            {index === 0 && isYearly && (() => {
              const monthly = selectedPackages.find((p: any) => p.identifier === 'citlin_Plus')?.product?.price ?? 0;
              const yearlyEquivalent = monthly * 12;
              const discount = Math.round(yearlyEquivalent - pkg.product.price);
              return (
                <Text style={[styles.recommendBadge, {
                  fontSize: 18,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 20,
                  backgroundColor: '#FFD700',
                  color: '#B8860B',
                  fontWeight: 'bold',
                  marginTop: -12,
                  marginBottom: 24,
                  textAlign: 'center',
                }]}>
                  ⭐️ 年間{discount}円お得！ ⭐️
                </Text>
              );
            })()}
          </React.Fragment>
        ))}

      {processingPurchase && <ActivityIndicator size="small" style={styles.loader} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
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
    borderColor: '#EBF3FF',
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
});

export default PurchaseScreen;
