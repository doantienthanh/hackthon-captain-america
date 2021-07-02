import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'components';
import { pushScreen } from 'navigation';
const Home = ({ componentId }) => {
  const screen = () => {
    pushScreen({ id: componentId, screen: 'Field' });
  };

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={screen} label="home" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
