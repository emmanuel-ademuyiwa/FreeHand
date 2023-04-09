const COLORS = {
  primary: "#2F585E",
  secondary: "#E5F309",
  tertiary: "#FCAF6C",
  lightTertiary: "#d7b69f",
  lightPrimary: "#587b8099",
  veryLightPrimary: "#B4D1D6",
  lightGreen: "#2BCF25",
  white: "#ffffff",
  red: "#F40712",
  lightWhite: "#FAFAFC",
  deepGreen: "#81b29899",
  black: "#000303",
  purple: "#6203fc",
  brown: "#f2ec91",
  transparentWhite: "rgba(242, 242, 242, .95)",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xxSmall: 10,
  xSmall: 12,
  small: 14,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  large: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 5.65,
    elevation: 6,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
