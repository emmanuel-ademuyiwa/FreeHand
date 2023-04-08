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
    paddingBottom: SIZES.xLarge,
  },
  imageFrameContainer: {
    flex: 1,
    gap: SIZES.medium,
    flexDirection: "row",
    minHeight: "14%",
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
    marginTop: SIZES.large * 2,
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

  introText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginTop: SIZES.xSmall,
  },

  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SIZES.xxLarge,
    maxHeight: 50,
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
