import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentScreen = () => {
  const name = "Raj";
  return (
    <View>
      <Text style={styles.HeaderStyle}>Welcome to React Native!</Text>
      <Text style={styles.SubHeaderStyle}>My name is {name}</Text>
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

export default ComponentScreen;
