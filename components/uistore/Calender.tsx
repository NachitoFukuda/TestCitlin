import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native';

interface PointsDisplayProps {
  fromShop?: boolean;

}
const Calender: React.FC<PointsDisplayProps> = ({
  fromShop 
  ,
}) => {

  const screenWidth = Dimensions.get('window').width;
  const scaleFactor = fromShop ? 0.5 : 1;

  const containerAnim = useRef(new Animated.Value(0)).current; // 0->1 for container slide-in
  const itemAnims = useRef(Array.from({ length: 7 }, () => new Animated.Value(0))).current; // per-day micro slide

  // Compute seven dates centered on today
  const today = new Date();
  const dates: Date[] = [];
  for (let offset = -3; offset <= 3; offset++) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    dates.push(d);
  }
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    Animated.timing(containerAnim, {
      toValue: 1,
      duration: 320,
      useNativeDriver: true,
    }).start(() => {
      Animated.stagger(
        40,
        itemAnims.map(v =>
          Animated.timing(v, { toValue: 1, duration: 220, useNativeDriver: true })
        )
      ).start();
    });
  }, []);

  return (
    <View style={[
      styles.container,
      { width: screenWidth * 0.85 * scaleFactor, height: (screenWidth / 4) * scaleFactor, alignSelf: 'center' }
    ]}>
      <Animated.View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          opacity: containerAnim,
          transform: [{
            translateX: containerAnim.interpolate({ inputRange: [0, 1], outputRange: [24, 0] })
          }],
        }}
      >
        {dates.map((d, idx) => (
          <Animated.View
            key={idx}
            style={{
              opacity: itemAnims[idx],
              transform: [{
                translateX: itemAnims[idx].interpolate({ inputRange: [0, 1], outputRange: [12, 0] })
              }],
            }}
          >
            <View
              style={[
                { 
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: ((screenWidth * 0.85) / 7) * scaleFactor,
                  height: '80%',
                  ...(idx === 3 ? {
                    backgroundColor: '#3b82f6',
                    borderRadius: 32,
                    // full-height pill
                    justifyContent: 'center',
                    paddingVertical: 6,
                  } : {}),
                },
              ]}
            >
              <Text
                style={[
                  styles.label,
                  { fontWeight: 'bold', fontSize: 16 * scaleFactor },
                  idx === 3 ? [styles.todayLabel, { fontSize: 16 * scaleFactor }] : null,
                ]}
              >
                {('0' + d.getDate()).slice(-2)}
              </Text>
              <Text
                style={[
                  styles.weekdayLabel,
                  { fontSize: 14 * scaleFactor },
                  idx === 3 ? [styles.todayLabel, { fontSize: 14 * scaleFactor }] : null,
                ]}
              >
                {weekDays[d.getDay()]}
              </Text>
            </View>
          </Animated.View>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginRight: 4,
  },
  weekdayLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  todayLabel: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Calender;
