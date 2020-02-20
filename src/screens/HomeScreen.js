import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import {} from "react-navigation";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Ascentra</Text>
      <Button
        title="Go to Component Screen"
        onPress={() => {
          navigation.navigate("Components");
        }}
      ></Button>
      <Button
        title="Go to List Screen"
        onPress={() => {
          navigation.navigate("List");
        }}
      ></Button>
      <Button
        title="Go to Image Screen"
        onPress={() => {
          navigation.navigate("Image");
        }}
      ></Button>
      <Button
        title="Go to Counter Screen"
        onPress={() => {
          navigation.navigate("Counter");
        }}
      ></Button>
      <Button
        title="Go to Color Screen"
        onPress={() => {
          navigation.navigate("Color");
        }}
      ></Button>
      <Button
        title="Go to Square Screen"
        onPress={() => {
          navigation.navigate("Square");
        }}
      ></Button>
      <Button
        title="Go to Square Reducer Screen"
        onPress={() => {
          navigation.navigate("SquareReducer");
        }}
      ></Button>
      <Button
        title="Go to Text Screen"
        onPress={() => {
          navigation.navigate("Text");
        }}
      ></Button>
      <Button
        title="RN Print Examples"
        onPress={() => {
          navigation.navigate("RNPrint");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
