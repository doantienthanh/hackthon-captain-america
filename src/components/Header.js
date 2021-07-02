import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors, Fonts } from 'themes';
import { Navigation } from 'react-native-navigation';
import Icons from 'react-native-vector-icons/FontAwesome';

const Header = ({
  title,
  iconRight,
  componentId,
  onPressRight,
  styleBtnRight,
  styleTitle,
  styleIcon,
}) => {
  const onBackScreen = () => {
    Navigation.pop(componentId);
  };
  return (
    <View style={styles.container}>
      <View style={styles.backScreen}>
        <TouchableOpacity style={styles.btnBack} onPress={onBackScreen}>
          <Icons name="caret-left" style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleHeader}>
        <Text style={[styleTitle, styles.txtTitle]}>{title}</Text>
      </View>
      <View style={styles.rightHeader}>
        {iconRight && (
          <TouchableOpacity
            style={[styleBtnRight, styles.btnBack]}
            onPress={onPressRight}>
            <Icons name={iconRight} style={[styleIcon, styles.iconBack]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.neutral3,
  },
  backScreen: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleHeader: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightHeader: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBack: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {
    fontSize: Fonts.size.S24,
    color: Colors.neutral2,
  },
  txtTitle: {
    fontSize: Fonts.size.S18,
    fontFamily: Fonts.type.bold,
    fontWeight: 'bold',
  },
});
