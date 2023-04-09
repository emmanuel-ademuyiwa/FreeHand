import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.xxSmall,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.xxSmall / 2,
    justifyContent: "space-between",
    ...SHADOWS.small,
    shadowColor: COLORS.lightGreen,
    gap: SIZES.large,
  },

  flexHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  innerFlexHeader: {
    gap: SIZES.small,
    flex: 7,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobType: {
    fontFamily: FONT.bold,
    color: COLORS.black,
    fontSize: SIZES.large,
  },
  headerSmallText: {
    fontFamily: FONT.regular,
    color: COLORS.black,
    fontSize: SIZES.xxSmall,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  iconHolder: {
    flex: 2.5,
    alignItems: "flex-end",
  },

  iconContainer: {
    width: 42,
    height: 42,
    padding: SIZES.xxSmall,
    backgroundColor: COLORS.brown,
    borderRadius: SIZES.xxLarge,
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    width: 32,
    height: 32,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    },
  
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,
  },

  selectButtonContainer: {
    flexDirection: "row",
    gap: SIZES.xxSmall,
  },

  outsideScroll: {
    maxHeight: 50,
  },

  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },

  infoText: {
    fontSize: SIZES.xxSmall,
    color: COLORS.white,
  },
});

export default styles;
