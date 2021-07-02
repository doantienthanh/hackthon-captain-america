import React from "react";
import { View, StyleSheet, ViewProps, ActivityIndicator } from "react-native";
import WText from "./WText";
import { Colors } from "../themes";

export interface WViewProps extends ViewProps {
  fill?: boolean;
  textLoading?: string;
  textLoadingColor?: string;
  bgColorIndicator?: string;
  bgColorLoading?: string;
  loading?: boolean;
  children?: React.ReactNode;
  row?: boolean;
  column?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
  center?: boolean;
  wrap?: boolean;
  style?: any;
  mTop?: number;
  mBottom?: number;
  mLeft?: number | string;
  mRight?: number | string;
  pTop?: number;
  pBottom?: number;
  pLeft?: number;
  pRight?: number;
  pHoz?: number;
  pVer?: number;
  mHoz?: number;
  mVer?: number;
  color?: string;
  h?: number | string;
  w?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  justifyContent?: string;
  alignItems?: string;
  selfCenter?: boolean;
  absolute?: boolean;
  opacity?: number;
  aTop?: number;
  aBottom?: number;
  aLeft?: number;
  aRight?: number;
  tabLabel?: string;
  margin?: number;
  borderTopRightRadius?: number;
  borderTopLeftRadius?: number;
  borderBottomWidth?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomColor?: string;
}

const WView = ({
  fill,
  children,
  row,
  column,
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
  alignItems,
  selfCenter,
  absolute,
  opacity,
  aTop = 0,
  aBottom = 0,
  aRight = 0,
  aLeft = 0,
  margin,
  borderTopRightRadius,
  borderTopLeftRadius,
  borderBottomWidth,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  wrap,
  loading,
  textLoading,
  textLoadingColor,
  bgColorIndicator,
  bgColorLoading,
  ...more
}: WViewProps) => {
  return (
    <View
      {...more}
      style={[
        fill && styles.fill,
        row && styles.row,
        column && styles.column,
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
        margin && { margin },
        borderBottomWidth && { borderBottomWidth },
        borderBottomColor && { borderBottomColor },
        borderTopRightRadius && { borderTopRightRadius },
        borderTopLeftRadius && { borderTopLeftRadius },
        borderBottomLeftRadius && { borderBottomLeftRadius },
        borderBottomRightRadius && { borderBottomRightRadius },
        color && { backgroundColor: color },
        h && { height: h },
        w && { width: w },
        borderRadius && { borderRadius: borderRadius },
        borderWidth && { borderWidth: borderWidth },
        borderColor && { borderColor: borderColor },
        justifyContent && { justifyContent: justifyContent },
        alignItems && { alignItems: alignItems },
        selfCenter && styles.selfCenter,
        absolute && {
          ...styles.absolute,
          top: aTop,
          bottom: aBottom,
          right: aRight,
          left: aLeft,
        },
        opacity && { opacity },
        wrap && { flexWrap: "wrap" },
        style && style,
      ]}
    >
      {loading ? (
        <View style={[StyleSheet.absoluteFill, styles.loadingContainer, { backgroundColor: bgColorLoading || Colors.blackB30 }]}>
          <View style={[styles.indicator, { backgroundColor: bgColorIndicator || Colors.pageBackground }]}>
            <ActivityIndicator size={"large"} color={Colors.primary} />
            {textLoading ? (
              <WText
                color={textLoadingColor}
                mTop={8}
                lines={2}
                textAlign='center'
                type="regular12"
              >
                {textLoading}
              </WText>
            ) : null}
          </View>
        </View>
      ) : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  fill: {
    flex: 1,
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  selfCenter: {
    alignSelf: "center",
  },
  absolute: {
    position: "absolute",
  },
  loadingContainer: {
    zIndex: 10000,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    paddingHorizontal: 16,
  },
});

export default WView;
