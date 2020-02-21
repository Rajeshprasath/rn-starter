import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text style={styles.HeaderStyle}>Text Screen</Text>
      <TextInput
        style={styles.InputStyle}
        placeholder="Enter the Name"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={name => {
          setName(name);
        }}
      ></TextInput>
      <Text>My Name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderStyle: {
    fontSize: 45
  },
  InputStyle: {
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
