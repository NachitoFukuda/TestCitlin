// StaticProgressBarVertical.tsx

import React from 'react';
import { View, StyleSheet } from 'react-native';

interface StaticProgressBarVerticalProps {
  progress: number;      // 0〜1 の進捗値
  width: number;
  height: number;
  color: string;
  unfilledColor: string;
}

const StaticProgressBarVertical: React.FC<StaticProgressBarVerticalProps> = ({
  progress,
  width,
  height,
  color,
  unfilledColor,
}) => {
  const filledHeight = height * progress;

  return (
    <View style={[styles.container, { width, height, backgroundColor: unfilledColor }]}>
      <View style={[styles.filled, { height: filledHeight, backgroundColor: color }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  filled: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default StaticProgressBarVertical;
