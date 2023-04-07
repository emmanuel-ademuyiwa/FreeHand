import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./primaryButton.style";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants";

const PrimaryButton = ({ handleClick, text, icon }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button(icon)} onPress={handleClick}>
        {/* <Icon name={icon} size={20} color={COLORS.black} /> */}
        <View style={styles.btnContainer}>
          <Image style={styles.btnImg(20)} source={icon} resizeMode="contain" />
        </View>
        <Text style={styles.label}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
