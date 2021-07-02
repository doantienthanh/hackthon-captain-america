import React, { useState, forwardRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Colors, Fonts } from 'themes';
import Text from 'components/Text';
import Icon from 'react-native-vector-icons/Ionicons';
import Touchable from 'components/Touchable';
import Divider from 'components/Divider';

const DEFAULT_SIZE = 48;
const ICON_SIZE = 24,
  ICON_COLOR = '#BDBDBD';

const getKeyBoardType = (type) => {
  // one of  ['email', 'phone', 'number]
  switch (type) {
    case 'email':
      return 'email-address';
    case 'phone':
      return 'numeric';
    case 'number':
      return 'numeric';
    default:
      return 'default';
  }
};

const FlatInput = (
  {
    enable,
    defaultValue,
    icon,
    onChangeText,
    onSubmitEditing,
    placeholder,
    placeholderTextColor,
    autoCapitalize,
    style,
    textInputWrap,
    textInputStyle,
    secureTextEntry,
    isShowEyeIcon = true,
    underline,
    errorMessage,
    type,
    returnKeyType,
    title,
    styleTitle,
    multiline,
    numberOfLines,
  },
  inputRef,
) => {
  const [_value, setValue] = useState(defaultValue);
  const [isSecure, setSecureVisible] = useState(secureTextEntry);

  const _onChangText = (text) => {
    setValue(text);
    onChangeText && onChangeText(text);
  };

  const _onSubmitEditing = () => {
    onSubmitEditing && onSubmitEditing();
  };

  const onChangeSecureState = () => {
    setSecureVisible(!isSecure);
  };

  return (
    <View style={[styles.container, style]}>
      {title && <Text style={styleTitle}>{title}</Text>}
      <View style={[styles.textInputWrap, textInputWrap]}>
        {icon && (
          <View style={styles.iconWrap}>
            <Icon name={icon} color={ICON_COLOR} size={ICON_SIZE} />
          </View>
        )}
        <TextInput
          ref={inputRef}
          editable={enable}
          autoCapitalize={autoCapitalize || 'none'}
          underlineColorAndroid="transparent"
          allowFontScaling={false}
          blurOnSubmit={false}
          secureTextEntry={isSecure}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={getKeyBoardType(type)}
          returnKeyType={returnKeyType || 'done'}
          style={[styles.textInput, textInputStyle]}
          value={_value}
          onChangeText={_onChangText}
          onSubmitEditing={_onSubmitEditing}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
        {secureTextEntry && isShowEyeIcon && (
          <Touchable onPress={onChangeSecureState} style={styles.iconWrap}>
            <Icon
              name={isSecure ? 'md-eye' : 'md-eye-off'}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          </Touchable>
        )}
      </View>
      {underline && <Divider />}
      {errorMessage && (
        <Text style={styles.txtError} type="light10">
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textInputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    height: DEFAULT_SIZE,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: Colors.neutral4,
    marginTop: 5,
  },
  textInput: {
    height: '100%',
    flex: 1,
    fontSize: Fonts.size.S14,
    color: Colors.primaryText,
    fontFamily: Fonts.type.regular,
    padding: 0,
  },
  txtError: {
    paddingTop: 4,
    color: 'red',
    fontSize: Fonts.size.S12,
  },
  iconWrap: {
    height: DEFAULT_SIZE,
    width: DEFAULT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default forwardRef(FlatInput);
