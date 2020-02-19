import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, OnIncrease, OnDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={OnIncrease}></Button>
      <Button title={`Decrease ${color}`} onPress={OnDecrease}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
