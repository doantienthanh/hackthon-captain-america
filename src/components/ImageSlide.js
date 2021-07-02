import React from 'react';
import { Animated, Image, ScrollView, StyleSheet, View } from 'react-native';
import { Images, Constants, Colors } from 'themes';

const ImageSlide = ({ data, style }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, Constants.SCREEN_WIDTH);

  return (
    <View style={[styles.imageContainer, style]}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } },
        ])}
        scrollEventThrottle={16}>
        {data?.[0] ? (
          data.map((item, i) => {
            return (
              <Image key={i} style={styles.image} source={{ uri: item.url }} />
            );
          })
        ) : (
          <Image style={styles.image} source={Images.projectImage} />
        )}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {data?.length > 1 &&
          data?.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            let size = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [6, 10, 6],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={[styles.dots, { opacity, width: size, height: size }]}
              />
            );
          })}
      </View>
    </View>
  );
};

export default ImageSlide;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    height: 240,
  },
  image: {
    height: 240,
    width: Constants.SCREEN_WIDTH,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: -30,
    alignItems: 'center',
  },
  dots: {
    backgroundColor: Colors.white,
    margin: 8,
    borderRadius: 5,
  },
});
