import { View, Text, ScrollView } from "react-native";
import React from "react";

import styles from "../New/new.style";
import TrendingCard from "../TrendingCard/TrendingCard";

const Trending = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.newTitle}>Trendings</Text>
      <ScrollView
        contentContainerStyle={styles.innerContainer}
        showsHorizontalScrollIndicator={false}
      >
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </ScrollView>
    </View>
  );
};

export default Trending;
