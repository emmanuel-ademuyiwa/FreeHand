import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 50,
    gap: SIZES.xSmall,
    alignItems: "center",
    justifyContent: "center",
  },
  label: (login) => ({
    fontFamily: FONT.medium,
    color: login ? COLORS.white : COLORS.black,
    fontSize: SIZES.medium,
    textTransform: "capitalize",
  }),
  button: (icon, login) => ({
    flex: 1,
    flexDirection: "row",
    gap: SIZES.xxSmall,
    backgroundColor: icon
      ? COLORS.white
      : login
      ? COLORS.deepGreen
      : COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xxSmall / 2,
    height: "100%",
    width: "85%",
  }),
  btnContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
});

export default styles;
