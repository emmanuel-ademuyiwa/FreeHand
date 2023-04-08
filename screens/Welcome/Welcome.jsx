import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useCallback } from "react";
import { useFonts } from "expo-font";

import styles from "./welcome.style";
import { COLORS, images, icons } from "../../constants";
import { useNavigation } from "@react-navigation/native";

import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
  });

  const navigation = useNavigation();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 4000);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView
      onLayout={onLayoutRootView}
      style={{ flex: 1, backgroundColor: COLORS.primary }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageFrameContainer}>
          <View style={styles.imageFrame}>
            <Image source={images.imageOne} style={styles.imageOne} />
            <Image source={images.imageTwo} style={styles.imageTwo} />
          </View>
          <View style={styles.imageFrame}>
            <Image source={images.imageThree} style={styles.imageTwo} />
            <Image source={images.imageFour} style={styles.imageOne} />
          </View>
        </View>

        <View style={styles.introTextContainer}>
          <Text style={styles.text}>Find your</Text>
          <Text style={styles.coloredText}>Dream Job</Text>
          <Text style={styles.text}>here!</Text>

          <Text style={styles.introText}>
            Explore all most exciting job roles based on your interest and study
            major.
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btnBorder}>
            <TouchableOpacity
              style={styles.nextBtn}
              onPress={() => navigation.navigate("sign-in")}
            >
              <Image
                source={icons.arrowRight}
                resizeMode="contain"
                style={styles.arrowRight}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
