import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { translate } from 'i18n';
import { Fonts, Images, Colors } from 'themes';
import Button from './Button';
import { Text } from 'components';
const Empty = ({ title, btnTitle, onPress, style }) => {
  const onDone = () => {
    onPress && onPress();
  };
  return (
    <View style={[styles.bodyCreateNew, style]}>
      <Image source={Images.planes} />
      <Text style={styles.txtDescription}>{translate(title)}</Text>
      {btnTitle && (
        <Button
          label={translate(btnTitle)}
          style={styles.btnCreateNewProject}
          textStyle={styles.txtBtnCreateNewProject}
          onPress={onDone}
        />
      )}
    </View>
  );
};

export default Empty;
const styles = StyleSheet.create({
  bodyCreateNew: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCreateNewProject: {
    width: '80%',
    height: 48,
    marginTop: 40,
  },
  txtBtnCreateNewProject: {
    fontSize: Fonts.size.S14,
    fontWeight: '500',
    fontFamily: Fonts.type.bold,
  },
  txtDescription: {
    fontSize: Fonts.size.S14,
    fontWeight: '400',
    fontFamily: Fonts.type.regular,
    color: Colors.neturalBlack,
    paddingHorizontal: 60,
    textAlign: 'center',
  },
});
