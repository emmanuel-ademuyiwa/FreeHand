import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 50,
    gap: SIZES.xSmall,
    alignItems: "center",
  },
  label: {
    fontFamily: FONT.medium,
    color: COLORS.black,
    fontSize: SIZES.medium,
    textTransform: "capitalize",
  },
  button: (icon) => ({
    flex: 1,
    flexDirection: "row",
    gap: SIZES.xxSmall,
    backgroundColor: icon ? COLORS.white : COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xxSmall / 2,
    height: "100%",
    width: "80%",
  }),
  btnContainer: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
});

export default styles;
