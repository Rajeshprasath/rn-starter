import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <Text style={styles.HeaderStyle}>Square Reducer</Text>
      <ColorCounter
        color="Red"
        OnIncrease={() => {
          dispatch({ type: "change_red", payload: COLOR_INCREMENT });
        }}
        OnDecrease={() => {
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT });
        }}
      ></ColorCounter>
      <ColorCounter
        color="Green"
        OnIncrease={() => {
          dispatch({ type: "change_green", payload: COLOR_INCREMENT });
        }}
        OnDecrease={() => {
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT });
        }}
      ></ColorCounter>
      <ColorCounter
        color="Blue"
        OnIncrease={() => {
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT });
        }}
        OnDecrease={() => {
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT });
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

export default SquareReducerScreen;
