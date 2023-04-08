import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: SIZES.large,
    gap: SIZES.xLarge,
  },

  userNameContainer: {
    gap: SIZES.medium,
  },

  hello: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.white,
  },

  userName: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.lightTertiary,
  },

  searchWrapper: {
    height: 55,
    flexDirection: "row",
  },

  inputFieldWrapper: {
    flex: 1,
    backgroundColor: COLORS.lightPrimary,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xSmall,
    minHeight: 50,
    width: "100%",
  },
  inputField: {
    fontFamily: FONT.medium,
    width: "100%",
    minHeight: 50,
    paddingHorizontal: SIZES.medium,
    color: COLORS.veryLightPrimary,
    fontSize: SIZES.medium,
  },
  iconWrapper: {
    minHeight: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
    width: 60,
    borderRadius: SIZES.xSmall,
  },
});

export default styles;
