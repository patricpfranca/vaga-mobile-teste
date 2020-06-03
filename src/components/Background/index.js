import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { widthPercentageToDP } from '~/config/pixel';

export default function Background({ children }) {
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: widthPercentageToDP('8.35%'),
    },
  });

  return (
    <View>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 300,
        }}
      />
      <View style={styles.container}>{children}</View>
    </View>
  );
}
