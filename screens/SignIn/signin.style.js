import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.large,
  },
  form: {
    marginTop: -SIZES.large,
  },
  infoAction: {
    width: "100%",
    marginTop: SIZES.xLarge,
    flexDirection: "row",
  },
  label: {
    fontFamily: FONT.medium,
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
  buttonWrapper: {
    marginTop: SIZES.xxLarge,
    gap: SIZES.large,
  },
});

export default styles;
