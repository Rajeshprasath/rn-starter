import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" }
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    ></FlatList>
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

export default ListScreen;
