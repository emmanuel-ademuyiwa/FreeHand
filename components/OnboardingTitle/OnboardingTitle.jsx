import { View, Text } from "react-native";
import React from "react";
import styles from "./onboardingTitle.style";

const OnboardingTitle = ({ title, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default OnboardingTitle;
