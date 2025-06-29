import { RewardedAd, RewardedAdEventType, AdEventType, TestIds } from 'react-native-google-mobile-ads';
import { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

const adUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-6017940120968747/9349128944'; // 本番ID

const rewarded = RewardedAd.createForAdRequest(adUnitId);

export const RewardedAdButton = ({ onReward }: { onReward: () => void }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    const unsubscribeEarned = rewarded.addAdEventListener(RewardedAdEventType.EARNED_REWARD, reward => {
      onReward(); // 報酬獲得時の処理（+20など）
    });

    rewarded.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeEarned();
    };
  }, []);

  return (
    <TouchableOpacity
      onPress={() => rewarded.show()}
      disabled={!loaded}
      style={{ backgroundColor: loaded ? '#4a90e2' : '#ccc', padding: 10, marginTop: 10 }}
    >
      <Text style={{ color: '#fff' }}>動画を見て +20 増やす</Text>
    </TouchableOpacity>
  );
};