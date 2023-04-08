import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: SIZES.large,
    gap: SIZES.xLarge,
    marginTop: SIZES.xSmall,
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
