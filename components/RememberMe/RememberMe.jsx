import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import styles from "./rememberMe.style";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants";

const RememberMe = () => {
  const [check, setCheck] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkBox}
        onPress={() => setCheck(!check)}
      >
        {check && (
          <Icon
            style={styles.check}
            name="checkmark-done-outline"
            size={20}
            color={COLORS.white}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.label}>Remember me</Text>
    </View>
  );
};

export default RememberMe;
