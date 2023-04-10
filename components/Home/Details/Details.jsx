import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import styles from "./details.style";
import { COLORS, icons } from "../../../constants";
import Icon from "react-native-vector-icons/Ionicons";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

const Details = () => {
  const navigation = useNavigation();
  const tabs = ["About Us", "Job Description"];
  const [activeTab, setActiveTab] = useState(tabs[1]);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.lowerHeaderBg}>
          <View style={styles.lowerBgInner}></View>
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.headerContent}>
            <TouchableOpacity
              style={{ width: 25 }}
              onPress={() => navigation.navigate("home-screen")}
            >
              <Icon name="arrow-back-outline" size={25} color={COLORS.black} />
            </TouchableOpacity>
            <View style={styles.headerDetailsContainer}>
              <View style={styles.logoContainer}>
                <View style={styles.iconContainer}>
                  <Image style={styles.logoImage} source={icons.google} />
                </View>
                <Text style={styles.jobType}>UI Designer</Text>
              </View>

              <View style={styles.companyInfo}>
                <View style={styles.flexCompanyInfo}>
                  <Text style={styles.text}>Google</Text>
                  <View style={styles.dot}></View>
                  <Text style={styles.text}>California</Text>
                  <View style={styles.dot}></View>
                  <Text style={styles.text}>4 Days</Text>
                </View>

                <Text style={styles.text}>Salary: 2500$</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.flexButtonContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.btn(tab, activeTab)}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={styles.tabText}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;
