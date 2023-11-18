import { DefaultTheme } from "styled-components";
import { ITheme } from "ui/types";

export const appLayoutHeights = {
  header: 60,
};

export const badgeColors = [
  "#103DDB",
  "#7315BD",
  "#DB1041",
  "#CA4A02",
  "#0F81B1",
  "#603939",
];
export const screenSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${screenSizes.mobileS})`,
  mobileM: `(min-width: ${screenSizes.mobileM})`,
  mobileL: `(min-width: ${screenSizes.mobileL})`,
  tablet: `(min-width: ${screenSizes.tablet})`,
  laptop: `(min-width: ${screenSizes.laptop})`,
  laptopL: `(min-width: ${screenSizes.laptopL})`,
  desktop: `(min-width: ${screenSizes.desktop})`,
  desktopL: `(min-width: ${screenSizes.desktop})`,
};
export const getColor = (
  { theme: { colors } }: any,
  colorName: keyof IColorScheme
) => (colors as IColorScheme)[colorName];

const colors1 = {
  primarySingle: "#166534",
  primaryBg: "#F6FFF9",
  primary: "linear-gradient(180deg, #ED5372 0%, #BD2846 100%, #E33659 100%)",
  primaryLight: "#FFF4F7",
  primaryHighlight: "#ED5372",
  accent: "#000",
};
export interface IColorScheme {
  background: string;
  bgSecondary: string;
  boxBg: string;
  textColor: string;
  highlight: string;
  textSecondary: string;
  textTertiary: string;
  borderLine: string;
  primary: string;
  primarySingle: string;
  primaryBg: string;
  primaryHighlight: string;
  bgPrimary: string;
  secondary: string;
  accent: string;
  success: string;
  fail: string;
  colorBgContainer: string;
  logoColor: string;
}
export const colorScheme: Record<ITheme, IColorScheme> = {
  dark: {
    background: "black",
    bgSecondary: colors1.primaryLight,
    highlight: "#2c2c2c",
    boxBg: "#1d1d1d",
    textColor: "#fff",
    textSecondary: "#a1a1aa",
    textTertiary: "#525252",
    borderLine: "#fff",
    primary: colors1.primary,
    primaryBg: colors1.primaryBg,
    bgPrimary: "",
    secondary: "#727A58",
    accent: colors1.accent,
    success: "#22C55E",
    fail: "#DC2626",
    colorBgContainer: "#141616",
    logoColor: "",
    primarySingle: colors1.primarySingle,
    primaryHighlight: colors1.primaryHighlight,
  },
  light: {
    primarySingle: colors1.primarySingle,
    primaryHighlight: colors1.primaryHighlight,
    background: "#fff",
    bgSecondary: colors1.primaryLight,
    highlight: colors1.primaryLight,
    boxBg: "#dfdfdf",
    textColor: "black",
    primaryBg: colors1.primaryBg,
    textSecondary: "#a1a1aa", // Zinc/400"
    textTertiary: "#9A9DA3",
    borderLine: "",
    primary: colors1.primary,
    bgPrimary: "#FFF4F7",
    secondary: "",
    accent: colors1.accent,
    success: "",
    fail: "",
    colorBgContainer: "#f4f4f4",
    logoColor: "",
  },
};

export interface AppTheme extends DefaultTheme {
  colors: IColorScheme;
}
