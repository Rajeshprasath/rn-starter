import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

COLOR_INCREMENT = 20;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <Text style={styles.HeaderStyle}>Square Screen</Text>
      <ColorCounter
        color="Red"
        OnIncrease={() => {
          setRed(red + COLOR_INCREMENT);
        }}
        OnDecrease={() => {
          setRed(red - COLOR_INCREMENT);
        }}
      ></ColorCounter>
      <ColorCounter
        color="Green"
        OnIncrease={() => {
          setGreen(green + COLOR_INCREMENT);
        }}
        OnDecrease={() => {
          setGreen(green - COLOR_INCREMENT);
        }}
      ></ColorCounter>
      <ColorCounter
        color="Blue"
        OnIncrease={() => {
          setBlue(blue + COLOR_INCREMENT);
        }}
        OnDecrease={() => {
          setBlue(blue - COLOR_INCREMENT);
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
