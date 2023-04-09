import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../constants";

const SelectButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SelectButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.transparentWhite,
    height: SIZES.xLarge,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
    paddingHorizontal: SIZES.xSmall,
    height: 40,
  },

  text: {
    fontSize: SIZES.xSmall - 0.9,
    fontFamily: FONT.medium,
  },
});
