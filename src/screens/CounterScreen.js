import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { ...state, count: state.count + action.payload };
    case "Decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Text style={styles.HeaderStyle}>Counter Screen</Text>
      <Button
        title="Increase"
        onPress={() => {
          //setCount(count + 1);
          dispatch({ type: "Increase", payload: 5 });
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          //setCount(count - 1);
          dispatch({ type: "Decrease", payload: 5 });
        }}
      ></Button>
      <Text> Current Count: {state.count}</Text>
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
