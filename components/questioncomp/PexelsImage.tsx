import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

type Props = {
  uri: string; // photo.src.medium とか
  photographer?: string;
  photographerUrl?: string;
};

const PexelsImage: React.FC<Props> = ({ uri, photographer, photographerUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      {photographer && (
        <Text style={styles.credit}>
          Photo by{' '}
          {photographerUrl ? (
            <Text style={styles.photographer} onPress={() => openLink(photographerUrl)}>
              {photographer}
            </Text>
          ) : (
            <Text style={styles.photographer}>{photographer}</Text>
          )}
          {' '}on Pexels
        </Text>
      )}
    </View>
  );
};

// リンク開く関数（任意）
const openLink = (url: string) => {
  // Linking を使いたいなら import { Linking } from 'react-native';
  // Linking.openURL(url);
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: 200,
  },
  credit: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    fontSize: 12,
    color: '#666',
  },
  photographer: {
    fontWeight: 'bold',
    color: '#0077cc',
  },
});

export default PexelsImage;
