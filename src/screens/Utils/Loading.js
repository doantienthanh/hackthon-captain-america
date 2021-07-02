import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from 'themes';

const Loading = ({ style, background }) => (
  <View style={[style ? style : styles.container, background]}>
    <ActivityIndicator size="small" color={Colors.primary} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
