import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import NeomorphBox from '../ui/NeomorphBox';

const EULA_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";
const PRIVACY_POLICY_URL = "https://citlin.sakura.ne.jp/";

const SCREEN_WIDTH = Dimensions.get('window').width;

const BannerAdComponent = () => {
  const [adError, setAdError] = useState<string | null>(null);


  const handleOpenURL = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('URLを開けませんでした:', error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <NeomorphBox
        width={SCREEN_WIDTH * 0.85}
        height={50}
        variant={'VIP'}
      >
        <View style={styles.contentContainer}>
          <Ionicons name="diamond" size={20} color="#FFD700" style={styles.premiumIcon} />
          <Text style={styles.premiumText}>VIP</Text>
        </View>
      </NeomorphBox>
      {adError && <Text style={styles.debugText}>広告エラー: {adError}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: SCREEN_WIDTH * 0.85,
    alignSelf: 'center',
  },
  debugText: {
    fontSize: 12,
    color: 'red',
    marginTop: 5,
  },
  premiumIcon: {
    marginRight: 8,
  },
  premiumText: {
    color: '#FFD700',
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
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default BannerAdComponent;