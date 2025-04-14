import React from 'react';
import { View, StyleSheet } from 'react-native';

const BannerAdComponent = () => {

  return (
    <View style={styles.container}>
        <View style={styles.adPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  adPlaceholder: {
    width: 320, // 実際のバナー広告の幅
    height: 50, // 実際のバナー広告の高さ
    backgroundColor: '#f0f0f0', // 白い四角
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default BannerAdComponent;
