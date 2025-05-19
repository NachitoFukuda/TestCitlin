import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { useSubscription } from '@/components/contexts/SubscriptionContext';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
const PRIVACY_POLICY_URL = "https://citlin.sakura.ne.jp/";

const BannerAdComponent = () => {
  const [adError, setAdError] = useState<string | null>(null);
  const { isSubscribed, customerInfo } = useSubscription();
  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6017940120968747/8968652312';

  const getPlanName = () => {
    if (!customerInfo?.entitlements?.active) return 'Free';
    const activeEntitlements = Object.keys(customerInfo.entitlements.active);
    if (activeEntitlements.includes('premium_pro')) return 'Premier Pro';
    if (activeEntitlements.includes('premium_plus')) return 'Premier+';
    return 'Free';
  };

  const handleOpenURL = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('URLを開けませんでした:', error);
    }
  };

  return (
    <View style={styles.wrapper}>
      {isSubscribed ? (
        <View style={styles.container}>
          <LinearGradient
            colors={['rgba(0, 255, 191, 0.79)', 'rgb(36, 164, 255)']}
            style={styles.premiumContainer}
          >
            <Ionicons name="diamond" size={20} color="#FFFFFF" style={styles.premiumIcon} />
            <Text style={styles.premiumText}>
              {getPlanName()} プラン
            </Text>
          </LinearGradient>
        </View>
      ) : (
        <View style={styles.container}>
          <BannerAd
            unitId={adUnitId}
            size={BannerAdSize.BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
            onAdLoaded={() => setAdError(null)}
            onAdFailedToLoad={(error) => {
              console.error('広告の読み込み失敗:', error);
              setAdError(error.message || '広告の読み込みに失敗しました');
            }}
          />
          {adError && <Text style={styles.debugText}>広告エラー: {adError}</Text>}
        </View>
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  debugText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  premiumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  premiumIcon: {
    marginRight: 8,
  },
  premiumText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
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

export default BannerAdComponent;