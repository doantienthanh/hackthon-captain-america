import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';

const Text = ({ children, style, color, onPress, numberOfLines }) => {
  return (
    <RNText
      numberOfLines={numberOfLines}
      onPress={onPress}
      allowFontScaling={false}
      style={[color && { color }, style]}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Text;
