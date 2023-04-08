import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.large,
    paddingBottom: SIZES.xxLarge,
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
    marginTop: SIZES.xLarge * 2,
    gap: SIZES.xLarge,
  },

  footerTextContainer: {
    flex: 1,
    marginTop: SIZES.xxLarge * 2,
  },
  footerText: {
    fontFamily: FONT.regular,
    color: COLORS.white,
    fontSize: SIZES.medium,
    textAlign: "center",
  },
  coloredText: {
    color: COLORS.secondary,
    fontFamily: FONT.medium,
  },
});

export default styles;
