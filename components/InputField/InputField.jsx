import { View, Text, TextInput, Image } from "react-native";
import React, { Fragment } from "react";
import { useField, ErrorMessage, Field } from "formik";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./inputField.style";
import { COLORS } from "../../constants";

const InputField = ({ name, label, secureTextEntry, ...props }) => {
  const [field, meta] = useField({ name });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <View style={styles.inputFieldWrapper}>
          <TextInput
            style={styles.inputField}
            placeholderTextColor={COLORS.veryLightPrimary}
            secureTextEntry={secureTextEntry}
            keyboardAppearance="dark"
            {...props}
          />
          {secureTextEntry && (
            <View style={styles.btnContainer}>
              <Icon
                name="lock-closed-outline"
                size={20}
                color={COLORS.veryLightPrimary}
              />
            </View>
          )}
        </View>
        {meta.touched && meta.error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorMessage}>
              <ErrorMessage component={Text} name={field.name} />
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default InputField;
