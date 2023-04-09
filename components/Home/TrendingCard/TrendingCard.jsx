import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./trendingCard.style";
import { icons, images } from "../../../constants";
import Tag from "../../Tag/Tag";
import SelectButton from "../../SelectButton/SelectButton";
import { useNavigation } from "@react-navigation/native";

const TrendingCard = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("details")}
      style={styles.container}
    >
      <View style={styles.flexHeader}>
        <View style={styles.innerFlexHeader}>
          <View style={styles.header}>
            <Text style={styles.jobType}>UI Designer</Text>
          </View>

          <View style={styles.nameContainer}>
            <View style={styles.logoContainer}>
              <Image style={styles.logoImage} source={images.user} />
            </View>
            <Text style={styles.name}>Jenny Wilson</Text>
            <Tag title="Remote" icon="home-outline" />
          </View>
        </View>

        <View style={styles.iconHolder}>
          <View style={styles.iconContainer}>
            <Image style={styles.logoImage} source={icons.google} />
          </View>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.selectButtonContainer}
        style={styles.outsideScroll}
      >
        <SelectButton text="0-1 Year" />
        <SelectButton text="Contract" />
        <SelectButton text="Web Designer" />
      </ScrollView>
    </TouchableOpacity>
  );
};

export default TrendingCard;
