import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';

type GlassCardProps = {
  width: number | string;
  height?: number | string;
  children: React.ReactNode;
  style?: ViewStyle;
};

const GlassCard: React.FC<GlassCardProps> = ({
  width = 300,
  height = 200,
  children,
  style,
}) => {
  return (
    <BlurView
      intensity={30}
      tint="light"
      style={StyleSheet.flatten([
        { width, height, overflow: 'hidden' } as ViewStyle, 
        styles.container,
        style,
      ])}
    >
      {children}
    </BlurView>
  );
};

export default GlassCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.22)',
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});