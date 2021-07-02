import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from 'themes';
import PropTypes from 'prop-types';
import { Text } from 'components';

const ConfirmAlert = ({
  title,
  message,
  label,
  label1,
  onCallBack,
  checkAlert,
  onCallBack1,
}) => {
  const onDone = () => {
    onCallBack && onCallBack();
  };
  const onHandleBtn = () => {
    onCallBack1 && onCallBack1();
  };
  return (
    <View style={styles.container}>
      <View style={styles.alert}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
        {checkAlert ? (
          <View style={styles.btnAlert}>
            <TouchableOpacity onPress={onDone} style={styles.btn1}>
              <Text style={styles.textBtn}>{label}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleBtn} style={styles.btn2}>
              <Text style={styles.textBtn}>{label1}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={onDone} style={styles.btn}>
            <Text style={styles.textBtn}>{label}</Text>
          </TouchableOpacity>
        )}
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
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    marginTop: 21,
    width: 100,
    height: 32,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2: {
    marginLeft: 20,
    marginTop: 21,
    width: 100,
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
  btnAlert: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
ConfirmAlert.propTypes = {
  onCallBack: PropTypes.func.isRequired,
  title: PropTypes.any,
  message: PropTypes.any,
  label: PropTypes.any,
};

export default ConfirmAlert;
