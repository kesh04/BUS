import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Primarycolor1 } from "../style/stylesheet";

export default function Button({
  onPress,
  text,
  type = "PRIMARY",
  bgcolor,
  fgcolor,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        style.container,
        style[`container_${type}`],
        bgcolor ? { backgroundColor: bgcolor } : {},
      ]}
    >
      <Text
        style={[
          style.text,
          style[`text_${type}`], // corrected this line
          fgcolor ? { color: fgcolor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    width: "90%",
    padding: 10,
    marginVertical: 25,
    alignItems: "center",
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: Primarycolor1,
  },
  container_TERITIARY: {},
  text_TERITIARY: {
    color: "gray", // corrected this line
  },
});
