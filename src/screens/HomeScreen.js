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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
