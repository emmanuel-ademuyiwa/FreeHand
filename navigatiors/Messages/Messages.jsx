import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const Messages = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Text>Messages</Text>
    </SafeAreaView>
  );
};

export default Messages;
