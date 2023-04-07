import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    gap: SIZES.large,
    paddingVertical: SIZES.xxLarge,
  },
  title: {
    fontFamily: FONT.bold,
    color: COLORS.secondary,
    fontSize: SIZES.xxLarge,
  },
  text: {
    fontFamily: FONT.regular,
    color: COLORS.white,
    fontSize: SIZES.medium,
    width: "100%",
    textAlign: "center",
  },
});

export default styles;
