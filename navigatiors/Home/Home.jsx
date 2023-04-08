import {
  View,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { COLORS } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./home.style";
import Welcome from "../../components/Home/Welcome/Welcome";
import New from "../../components/Home/New/New";
import Trending from "../../components/Home/Trending/Trending";

const Home = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const jobs = ["Jobs for you", "UI Designer", "Logo Designer"];
  const [activeJob, setActiveJobs] = useState(jobs[0]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Welcome searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.jobs}
        >
          {jobs.map((job, index) => (
            <TouchableOpacity key={index} onPress={() => setActiveJobs(job)}>
              <Text style={styles.jobText(activeJob, job)}>{job}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <New />
        <Trending />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
