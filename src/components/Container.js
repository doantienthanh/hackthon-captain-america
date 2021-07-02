import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Colors } from 'themes';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Container = ({ style, loading, children }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {children}
      </KeyboardAwareScrollView>
      {loading && (
        <View style={styles.fadeView}>
          <ActivityIndicator animating size="small" color={Colors.primary} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fadeView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Container;
