import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, FONT, SIZES } from "../../constants";

const Tag = ({ title, icon }) => {
  return (
    <View style={styles.tag}>
      <Icon name={icon} size={12} color={COLORS.veryLightPrimary} />
      <Text style={styles.tagText}>{title}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  tag: {
    backgroundColor: COLORS.purple,
    // width: 80,
    height: SIZES.xLarge,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xxLarge,
    gap: SIZES.xxSmall / 2,
    paddingHorizontal: SIZES.xxSmall,
  },
  tagText: {
    color: COLORS.white,
    fontSize: SIZES.xSmall,
    fontFamily: FONT.bold,
  },
});
