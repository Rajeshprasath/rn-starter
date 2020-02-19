import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.HeaderStyle}>Welcome to Image Screen</Text>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        ratings={8}
      ></ImageDetail>
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        ratings={7}
      ></ImageDetail>
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        ratings={9}
      ></ImageDetail>
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

export default ImageScreen;
