import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    padding: SIZES.small,
    justifyContent: "center",
  },
  imageFrameContainer: {
    flex: 1,
    gap: SIZES.medium,
    flexDirection: "row",
    minHeight: "39%",
    margin: "auto",
  },
  imageFrame: {
    flex: 1,
    alignItems: "center",
    gap: SIZES.medium,
    maxHeight: "100%",
  },

  imageOne: {
    width: "100%",
    height: "45%",
    borderRadius: SIZES.xxSmall / 2,
  },
  imageTwo: {
    width: "100%",
    height: "55%",
    borderRadius: SIZES.xxSmall / 2,
  },
  introTextContainer: {
    flex: 1,
    marginTop: SIZES.xLarge * 2,
  },
  text: {
    fontFamily: FONT.bold,
    color: COLORS.white,
    fontSize: width / SIZES.xxSmall,
  },
  coloredText: {
    color: COLORS.secondary,
    fontSize: width / SIZES.xxSmall,
    fontFamily: FONT.bold,
  },

  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnBorder: {
    padding: 10,
    borderLeftWidth: 2,
    borderRadius: 200,
    borderColor: COLORS.secondary,
  },
  nextBtn: {
    width: 60,
    height: 60,
    padding: SIZES.medium,
    borderRadius: 100,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowRight: {
    width: "50%",
    height: "50%",
  },
});

export default styles;
