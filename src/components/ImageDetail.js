import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource, ratings }) => {
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text>{title}</Text>
      <Text>Photo Ratings - {ratings}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderStyle: {
    fontSize: 45
  },
  SubHeaderStyle: {
    fontSize: 20
  }
});

export default ImageDetail;
