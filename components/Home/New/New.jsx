import { View, Text, ScrollView } from "react-native";
import React from "react";

import styles from "./new.style";
import NewCard from "../NewCard/NewCard";

const New = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.newTitle}>New</Text>
      <ScrollView
        contentContainerStyle={styles.innerContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <NewCard />
        <NewCard />
      </ScrollView>
    </View>
  );
};

export default New;
