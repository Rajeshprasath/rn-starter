import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text style={styles.HeaderStyle}>Counter Screen</Text>
      <Button
        title="Increase"
        onPress={() => {
          setCount(count + 1);
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          setCount(count - 1);
        }}
      ></Button>
      <Text> Current Count: {count}</Text>
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

export default CounterScreen;
