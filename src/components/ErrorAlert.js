import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from 'themes';
import PropTypes from 'prop-types';
import { Text } from 'components';

const ErrorAlert = ({ title, message, label, onCallBack }) => {
  const onDone = () => {
    onCallBack && onCallBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.alert}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity onPress={onDone} style={styles.btn}>
          <Text style={styles.textBtn}>{label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparent,
  },
  alert: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 14,
    width: 295,
    height: 163,
    elevation: 4,
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  title: {
    fontSize: Fonts.size.S18,
    fontFamily: Fonts.type.bold,
  },
  message: {
    fontSize: Fonts.size.S14,
    fontFamily: Fonts.type.regular,
    color: Colors.neutral2,
    textAlign: 'center',
    marginTop: 8,
  },
  btn: {
    marginTop: 21,
    width: 120,
    height: 32,
    borderRadius: 4,
    backgroundColor: Colors.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtn: {
    color: Colors.white,
    fontSize: Fonts.size.S14,
    fontFamily: Fonts.type.regular,
  },
});
ErrorAlert.propTypes = {
  onCallBack: PropTypes.func.isRequired,
  title: PropTypes.any,
  message: PropTypes.any,
  label: PropTypes.any,
};

export default ErrorAlert;
