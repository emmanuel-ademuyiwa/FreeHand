import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    gap: SIZES.xxSmall,
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    width: SIZES.xLarge,
    height: SIZES.xLarge,
    backgroundColor: COLORS.deepGreen,
    borderRadius: SIZES.xxSmall / 2,
    alignItems: "center",
  },

  label: {
    fontFamily: FONT.medium,
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});

export default styles;
