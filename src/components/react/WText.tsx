import React from 'react';
import { GestureResponderEvent, StyleSheet, Text } from 'react-native';
import { FontType } from '../themes';

type WTextProps = {
  type?: string;
  color?: string;
  center?: boolean;
  underLine?: boolean;
  style?: object;
  children?: React.ReactNode;
  mTop?: number;
  mBottom?: number;
  mLeft?: number;
  mRight?: number;
  mHoz?: number;
  mVer?: number;
  fill?: boolean;
  lineHeight?: number;
  maxWidth?: string | number;
  minWidth?: string | number;
  lines?: number;
  w?: number | string;
  h?: number | string;
  onPress?: (event: GestureResponderEvent) => void;
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right';
};

export const styles: any = StyleSheet.create({
  fill: { flex: 1 },
  center: {
    textAlign: 'center',
  },
  txtUnderline: {
    textDecorationLine: 'underline',
  },
});

const WText = (props: WTextProps) => {
  const {
    type,
    color,
    center,
    underLine,
    style,
    mTop,
    mBottom,
    mLeft,
    mRight,
    mHoz,
    mVer,
    fill,
    children,
    onPress,
    textAlign,
    lines,
    w,
    h,
    lineHeight,
    minWidth,
    maxWidth,
  } = props;
  return (
    <Text
      {...props}
      allowFontScaling={false}
      style={[
        styles.normal,
        type && { ...FontType[type] },
        color && { color },
        center && styles.center,
        underLine && styles.txtUnderline,
        mTop && { marginTop: mTop },
        mBottom && { marginBottom: mBottom },
        mLeft && { marginLeft: mLeft },
        mRight && { marginRight: mRight },
        mHoz && { marginHorizontal: mHoz },
        mVer && { marginVertical: mVer },
        fill && styles.fill,
        textAlign && { textAlign: textAlign },
        w && { width: w },
        h && { height: h },
        lineHeight && { lineHeight },
        minWidth && { minWidth },
        maxWidth && { maxWidth },
        style,
      ]}
      onPress={onPress && onPress}
      numberOfLines={lines}
    >
      {children}
    </Text>
  );
};

export default WText;
