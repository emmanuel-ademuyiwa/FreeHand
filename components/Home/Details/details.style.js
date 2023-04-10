import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: COLORS.primary,
    height: "100%",
  },

  lowerHeaderBg: {
    position: "absolute",
    width: "100%",
    height: "35%",
    backgroundColor: "transparent",
    borderBottomLeftRadius: SIZES.large,
    borderBottomRightRadius: SIZES.large,
    marginTop: SIZES.large * 2 - 2,
    displayDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  lowerBgInner: {
    position: "absolute",
    bottom: 0,
    width: "90%",
    height: "35%",
    backgroundColor: COLORS.lightSecondary,
    borderBottomLeftRadius: SIZES.large,
    borderBottomRightRadius: SIZES.large,
  },

  headerContainer: {
    width: "100%",
    height: "100%",
    marginTop: "-135%",
    backgroundColor: COLORS.secondary,
    borderBottomLeftRadius: SIZES.large,
    borderBottomRightRadius: SIZES.large,
  },

  headerContent: {
    position: "absolute",
    bottom: 10,
    height: 250,
    width: "100%",
    paddingHorizontal: SIZES.medium,
  },

  headerDetailsContainer: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: SIZES.xLarge,
    marginTop: -10,
    gap: SIZES.large,
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
  },
  iconContainer: {
    width: 82,
    height: 82,
    padding: SIZES.medium,
    backgroundColor: COLORS.brown,
    borderRadius: SIZES.xxLarge * 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,
  },
  jobType: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    marginTop: 4,
  },

  companyInfo: {
    gap: SIZES.xxLarge,
    justifyContent: "center",
  },
  flexCompanyInfo: {
    flexDirection: "row",
    gap: SIZES.large,
    alignItems: "center",
    justifyContent: "center",
  },

  dot: {
    width: SIZES.xxSmall / 2,
    height: SIZES.xxSmall / 2,
    borderRadius: SIZES.xxSmall / 2,
    backgroundColor: COLORS.black,
  },

  text: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },

  flexButtonContainer: {
    marginTop: SIZES.xLarge,
    flexDirection: "row",
    padding: SIZES.medium,
    gap: SIZES.xLarge * 2,
  },

  btn: (tab, activeTab) => ({
    paddingHorizontal: SIZES.medium,
    backgroundColor: tab === activeTab ? COLORS.secondary : COLORS.white,
    height: SIZES.xLarge * 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.xxSmall / 2,
  }),

  tabText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
  },
});

export default styles;
