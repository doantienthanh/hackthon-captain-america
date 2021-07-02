import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

export interface WTouchableProps extends TouchableOpacityProps {
  fill?: boolean;
  children?: React.ReactNode;
  row?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  center?: boolean;
  style?: any;
  mTop?: number;
  mBottom?: number;
  mLeft?: number;
  mRight?: number;
  pTop?: number;
  pBottom?: number;
  pLeft?: number;
  pRight?: number;
  pHoz?: number;
  pVer?: number;
  mHoz?: number;
  mVer?: number;
  color?: string;
  borderBottomWidth?: number;
  borderBottomColor?: string;
  h?: number | string;
  w?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  justifyContent?: string;
  alignItems?: string;
  selfCenter?: boolean;
  hit?: number;
  column?: boolean;
}

const WTouchable = ({
  fill,
  children,
  row,
  alignCenter,
  justifyCenter,
  center,
  style,
  mTop,
  mBottom,
  mLeft,
  mRight,
  pTop,
  pBottom,
  pLeft,
  pRight,
  pHoz,
  pVer,
  mHoz,
  mVer,
  color,
  h,
  w,
  borderRadius,
  borderWidth,
  borderColor,
  justifyContent,
  borderBottomWidth,
  borderBottomColor,
  alignItems,
  selfCenter,
  onPress,
  activeOpacity,
  hit,
  column,
  ...more
}: WTouchableProps) => {
  return (
    <TouchableOpacity
      {...more}
      style={[
        fill && styles.fill,
        row && styles.row,
        alignCenter && styles.alignCenter,
        justifyCenter && styles.justifyCenter,
        center && styles.center,
        mTop && { marginTop: mTop },
        mBottom && { marginBottom: mBottom },
        mLeft && { marginLeft: mLeft },
        mRight && { marginRight: mRight },
        pTop && { paddingTop: pTop },
        pBottom && { paddingBottom: pBottom },
        pLeft && { paddingLeft: pLeft },
        pRight && { paddingRight: pRight },
        pHoz && { paddingHorizontal: pHoz },
        pVer && { paddingVertical: pVer },
        mHoz && { marginHorizontal: mHoz },
        mVer && { marginVertical: mVer },
        color && { backgroundColor: color },
        h && { height: h },
        column && styles.column,
        w && { width: w },
        borderRadius && { borderRadius: borderRadius },
        borderWidth && { borderWidth: borderWidth },
        borderColor && { borderColor: borderColor },
        justifyContent && { justifyContent: justifyContent },
        alignItems && { alignItems: alignItems },
        selfCenter && styles.selfCenter,
        borderBottomWidth && { borderBottomWidth },
        borderBottomColor && { borderBottomColor },
        style,
      ]}
      hitSlop={{
        top: hit || 0,
        bottom: hit || 0,
        left: hit || 0,
        right: hit || 0,
      }}
      onPress={onPress && onPress}
      activeOpacity={activeOpacity || 0.3}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  fill: {
    flex: 1,
  },
  alignCenter: { alignItems: 'center' },
  justifyCenter: {
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: { flexDirection: 'column' },
  selfCenter: { alignSelf: 'center' },
});

export default WTouchable;
