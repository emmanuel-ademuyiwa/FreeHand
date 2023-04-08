import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./newCard.style";
import { icons, images } from "../../../constants";
import Tag from "../../Tag/Tag";
import SelectButton from "../../SelectButton/SelectButton";

const NewCard = () => {
  const selectedJob = "web";
  const item = "web";

  return (
    <TouchableOpacity style={styles.container(selectedJob, item)}>
      <View style={styles.header}>
        <Text style={styles.jobType}>UI Designer</Text>
        <Text style={styles.headerSmallText}>Rs 2-5 LPA</Text>
      </View>

      <View style={styles.nameContainer}>
        <View style={styles.logoContainer(selectedJob, item)}>
          <Image style={styles.logoImage} source={images.user} />
        </View>
        <Text style={styles.name}>Jenny Wilson</Text>
        <Tag title="Remote" icon="home-outline" />
      </View>

      <View style={styles.header}>
        <View>
          <Text style={styles.jobType}>20-99 Employees</Text>
          <Text style={[styles.headerSmallText, { marginTop: 5 }]}>
            California, USA
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Image style={styles.logoImage} source={icons.google} />
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

      <Text style={styles.infoText}>
        Create websites, Sub domains and landing page who can design a website
        for us on a contract basis
      </Text>
    </TouchableOpacity>
  );
};

export default NewCard;
