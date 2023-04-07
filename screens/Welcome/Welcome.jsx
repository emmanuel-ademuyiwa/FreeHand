import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import styles from "./welcome.style";
import { COLORS, images, icons } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView
        style={{ paddingBottom: 40 }}
        contentContainerStyle={styles.container}
      >
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
          <Text style={styles.text}>
            Find your <Text style={styles.coloredText}>Dream Job</Text> Here
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btnBorder}>
            <TouchableOpacity
              style={styles.nextBtn}
              onPress={() => navigation.navigate("SignIn")}
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
