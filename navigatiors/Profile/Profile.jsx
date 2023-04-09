import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
