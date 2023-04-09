import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    backgroundColor: "#ffffff80",
    backgroundColor: "red",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    gap: 0,
    margin: SIZES.large,
    borderRadius: SIZES.xxLarge * 2,
  },

  tab: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 35,
  },

  activeTab: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.medium,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: SIZES.small * 3,
    gap: SIZES.xSmall / 2,
    width: "110%",
  },

  text: {
    fontFamily: FONT.bold,
    color: COLORS.white,
    fontSize: SIZES.small,
    marginLeft: 4,
  },

  shortText: {
    fontFamily: FONT.bold,
    color: COLORS.white,
    fontSize: SIZES.xxSmall,
    marginLeft: 4,
  },
});

export default styles;
