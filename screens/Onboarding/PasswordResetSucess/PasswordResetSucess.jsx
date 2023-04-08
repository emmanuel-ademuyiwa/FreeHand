import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import OnboardingTitle from "../../../components/OnboardingTitle/OnboardingTitle.jsx";

import styles from "../SignIn/signin.style.js";
import { COLORS } from "../../../constants/index.js";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton.jsx";

const PasswordResetSuccess = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <OnboardingTitle
          title="Successfully"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <View style={styles.form}>
          <View style={styles.buttonWrapper}>
            <PrimaryButton
              text="Continue"
              handleClick={() => navigation.navigate("home-screen")}
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

export default PasswordResetSuccess;
