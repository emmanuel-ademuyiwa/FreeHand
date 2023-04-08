import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import OnboardingTitle from "../../../components/OnboardingTitle/OnboardingTitle";
import InputField from "../../../components/InputField/InputField.jsx";
import RememberMe from "../../../components/RememberMe/RememberMe";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton.jsx";

import { Formik } from "formik";
import * as Yup from "yup";

import styles from "./signin.style.js";
import { COLORS, icons } from "../../../constants";

const SignIn = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <OnboardingTitle
          title="Welcome Back"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email address is required"),
            password: Yup.string()
              .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+,.\\/;':"-]).{8,}$/,
                "Must At Least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
              )
              .required("Password is required"),
          })}
          onSubmit={(values, { resetForm }) => {
            resetForm("");
            navigation.navigate("home-screen");
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
              <InputField
                name="password"
                label="Password"
                value={values.password}
                onChangeText={handleChange("password")}
                placeholder="• • • • • • • • • •"
                secureTextEntry={true}
              />

              <View style={styles.infoAction}>
                <RememberMe />

                <TouchableOpacity
                  onPress={() => navigation.navigate("forgot-password")}
                >
                  <Text style={styles.label}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.buttonWrapper}>
                <PrimaryButton text="Login" handleClick={handleSubmit} />
                <PrimaryButton
                  icon={icons.google}
                  text="Login With Google"
                  handleClick={() => navigation.navigate("home-screen")}
                />
                <PrimaryButton
                  icon={icons.apple}
                  text="Login With Apple"
                  handleClick={() => navigation.navigate("home-screen")}
                />
              </View>
            </View>
          )}
        </Formik>

        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>
            You don't have an account yet?{"  "}
            <TouchableOpacity onPress={() => navigation.navigate("sign-up")}>
              <Text style={styles.coloredText}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
