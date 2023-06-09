import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 270,
    height: 290,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.xxSmall,
    backgroundColor:
      selectedJob === item.job_id ? COLORS.tertiary : COLORS.lightGreen,
    borderRadius: SIZES.xxSmall / 2,
    justifyContent: "space-between",
    ...SHADOWS.small,
    shadowColor: COLORS.lightGreen,
  }),

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobType: {
    fontFamily: FONT.bold,
    color: COLORS.white,
    fontSize: SIZES.large,
  },
  headerSmallText: {
    fontFamily: FONT.medium,
    color: COLORS.white,
    fontSize: SIZES.xSmall,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  name: {
    fontFamily: FONT.bold,
    fontSize: SIZES.medium,
    color: COLORS.white,
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

  logoContainer: (selectedJob, item) => ({
    width: 32,
    height: 32,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.medium,
  },

  selectButtonContainer: {
    flexDirection: "row",
    gap: SIZES.xxSmall / 2,
  },

  outsideScroll: {
    maxHeight: 50,
    borderBottomColor: COLORS.deepGreen,
    borderBottomWidth: 1,
    paddingBottom: 60,
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
