import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'components';
const Field = ({ componentId }) => {
  const onPress = () => {
    alert('asjhj');
  };
  return (
    <View>
      <Header
        componentId={componentId}
        title="Field"
        iconRight="caret-left"
        onPressRight={onPress}
      />
    </View>
  );
};

export default Field;

const styles = StyleSheet.create({});
