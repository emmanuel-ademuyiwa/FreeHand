import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import OnboardingTitle from "../../../components/OnboardingTitle/OnboardingTitle";
import InputField from "../../../components/InputField/InputField.jsx";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton.jsx";

import { Formik } from "formik";
import * as Yup from "yup";

import styles from "../SignIn/signin.style.js";
import { COLORS } from "../../../constants";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <OnboardingTitle
          title="Forget Password"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email address is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            resetForm("");
            navigation.navigate("check-email");
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <View style={styles.form}>
              <InputField
                name="email"
                label="Email"
                value={values.email}
                secureTextEntry={false}
                onChangeText={handleChange("email")}
                placeholder="info.freehand@gmail.com"
              />

              <View style={styles.buttonWrapper}>
                <PrimaryButton
                  text="Reset Password"
                  handleClick={handleSubmit}
                />
                <PrimaryButton
                  login={true}
                  text="Back To Login"
                  handleClick={() => navigation.navigate("sign-in")}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
