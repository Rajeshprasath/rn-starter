import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

COLOR_INCREMENT = 20;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  };

  return (
    <View>
      <Text style={styles.HeaderStyle}>Square Screen</Text>
      <ColorCounter
        color="Red"
        OnIncrease={() => {
          setColor("red", COLOR_INCREMENT);
        }}
        OnDecrease={() => {
          setColor("red", -1 * COLOR_INCREMENT);
        }}
      ></ColorCounter>
      <ColorCounter
        color="Green"
        OnIncrease={() => {
          setColor("green", COLOR_INCREMENT);
        }}
        OnDecrease={() => {
          setColor("green", -1 * COLOR_INCREMENT);
        }}
      ></ColorCounter>
      <ColorCounter
        color="Blue"
        OnIncrease={() => {
          setColor("blue", COLOR_INCREMENT);
        }}
        OnDecrease={() => {
          setColor("blue", -1 * COLOR_INCREMENT);
        }}
      ></ColorCounter>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      ></View>
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

export default SquareScreen;
