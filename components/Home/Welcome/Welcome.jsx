import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";

import styles from "./welcome.style";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../../constants";

const Welcome = ({ setSearchQuery, searchQuery }) => {
  return (
    <View style={styles.container}>
      <View style={styles.userNameContainer}>
        <Text style={styles.hello}>Hello</Text>
        <Text style={styles.userName}>Kuldeep Patel.</Text>
      </View>
      <View style={styles.searchWrapper}>
        <View style={styles.inputFieldWrapper}>
          <TextInput
            style={styles.inputField}
            placeholderTextColor={COLORS.lightTertiary}
            keyboardAppearance="dark"
            placeholder="Search...!"
          />
        </View>
        <TouchableOpacity style={styles.iconWrapper}>
          <Icon name="search-outline" size={30} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
