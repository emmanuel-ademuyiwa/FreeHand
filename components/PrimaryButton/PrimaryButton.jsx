import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import styles from "./primaryButton.style";

const PrimaryButton = ({ handleClick, text, icon, login }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button(icon, login)}
        onPress={handleClick}
      >
        {icon && (
          <View style={styles.btnContainer}>
            <Image
              style={styles.btnImg(26)}
              source={icon}
              resizeMode="contain"
            />
          </View>
        )}
        <Text style={styles.label(login)}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
