import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface TapIndicatorProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  duration?: number;
}

const TapIndicator: React.FC<TapIndicatorProps> = ({
  size = 200,
  color = '#000',
  strokeWidth = 20,
  duration = 300,
}) => {
  const radiusAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animate = () => {
      // Reset values
      radiusAnim.setValue(0);
      opacityAnim.setValue(1);
      // Run animation
      Animated.parallel([
        Animated.timing(radiusAnim, {
          toValue: size / 2,
          duration,
          useNativeDriver: false,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration,
          useNativeDriver: false,
        }),
      ]).start(({ finished }) => {
        if (finished) {
          animate(); // loop
        }
      });
    };
    animate();
    // No cleanup needed since recursion stops on unmount
  }, [duration, radiusAnim, opacityAnim, size]);

  const AnimatedCircleComp = Animated.createAnimatedComponent(Circle);

  return (
    <View style={styles.container} pointerEvents="none">
      <Svg width={size} height={size}>
      <Animated.View
        style={{
            width: size,
            height: size,
            borderRadius: size/2,
            borderWidth: strokeWidth,
            borderColor: color,
            transform: [{ scale: radiusAnim.interpolate({
            inputRange: [0, size/2],
            outputRange: [0, 1]
            }) }],
            opacity: opacityAnim,
        }}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TapIndicator;
