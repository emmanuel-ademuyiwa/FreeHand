import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 270,
    height: 290,
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.xxSmall,
    backgroundColor:
      selectedJob === item.job_id ? COLORS.lightGreen : COLORS.tertiary,
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
    fontFamily: FONT.regular,
    color: COLORS.white,
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

  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

export default styles;
