import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    gap: SIZES.xSmall,
    marginTop: SIZES.xxLarge,
  },
  label: {
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    fontSize: SIZES.medium,
    textTransform: "capitalize",
  },

  inputFieldWrapper: {
    flex: 1,
    backgroundColor: COLORS.lightPrimary,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xSmall,
    height: 55,
    width: "100%",
  },
  inputField: {
    fontFamily: FONT.medium,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    color: COLORS.veryLightPrimary,
    fontSize: SIZES.medium,
  },
  btnContainer: {
    position: "absolute",
    right: 10,
    top: 13,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),

  errorContainer: {
    marginTop: 12,
    flexDirection: "row",
  },
  errorMessage: {
    color: COLORS.tertiary,
  },
});

export default styles;
