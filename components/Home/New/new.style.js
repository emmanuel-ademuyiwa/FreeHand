import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: SIZES.medium,
    gap: SIZES.small,
    marginTop: SIZES.xxSmall,
  },

  newTitle: {
    fontFamily: FONT.bold,
    color: COLORS.white,
    fontSize: SIZES.large,
  },
  innerContainer: {
    gap: SIZES.xLarge,
  },
});

export default styles;
