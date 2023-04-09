import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.medium,
    paddingBottom: SIZES.xxLarge * 3,
  },

  jobs: {
    gap: SIZES.xxLarge,
    alignItems: "center",
  },
  jobText: (activeJob, job) => ({
    color: job === activeJob ? COLORS.secondary : COLORS.white,
    fontSize: job === activeJob ? SIZES.xLarge : SIZES.medium,
    fontFamily: job === activeJob ? FONT.bold : FONT.medium,
  }),
});

export default styles;
