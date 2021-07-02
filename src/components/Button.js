import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Text, Touchable } from 'components';
import { Colors, Fonts } from 'themes';

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    height: 48,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outline: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.default,
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 4,
  },
  styleDefault: {
    fontSize: Fonts.size.S14,
    fontFamily: Fonts.type.medium,
  },
});

const Button = ({
  outline,
  style,
  disabled,
  textStyle,
  label,
  labelColor,
  onPress,
  shadow,
  color,
}) => {
  return (
    <Touchable
      style={[
        styles.container,
        style,
        color && { backgroundColor: color },
        shadow && styles.shadow,
        outline && styles.outline,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        color={labelColor || Colors.default}
        style={[
          textStyle,
          disabled && { color: Colors.secondaryText },
          styles.styleDefault,
        ]}>
        {label}
      </Text>
    </Touchable>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.any,
  textStyle: PropTypes.any,
  shadow: PropTypes.bool,
  wrapperStyle: PropTypes.any,
};

Button.defaultProps = {};

export default Button;
