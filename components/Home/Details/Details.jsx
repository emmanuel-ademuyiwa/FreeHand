import { View, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const Details = () => {
  const navigation = useNavigation();

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//     });
//   }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Go back"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
