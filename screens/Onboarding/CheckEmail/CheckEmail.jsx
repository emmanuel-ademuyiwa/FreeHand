import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import OnboardingTitle from "../../../components/OnboardingTitle/OnboardingTitle";
import InputField from "../../../components/InputField/InputField.jsx";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton.jsx";

import styles from "../SignIn/signin.style.js";
import { COLORS } from "../../../constants";

const CheckEmail = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <OnboardingTitle
          title="Check Your Email"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <View style={styles.form}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton
              text="Open Your Email"
              handleClick={() => navigation.navigate("password-reset-success")}
            />
            <PrimaryButton
              login={true}
              text="Back To Login"
              handleClick={() => navigation.navigate("sign-in")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckEmail;
