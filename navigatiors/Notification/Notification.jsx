import { View, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="Go Notification details"
        onPress={() => {
          navigation.navigate("Notification-Details");
        }}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
