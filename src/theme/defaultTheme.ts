import type { ThemeConfig } from "antd";
import { theme } from "antd";

const textColor = "#000C2F";

const defaultTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm, // use theme.darkAlgorithm for dark mode
  token: {
    wireframe: true,
    colorPrimary: "#3356A6",
    colorBgContainer: "#FFFFFF",
    colorText: "#546E7A",
    colorTextBase: textColor,
    colorBorder: "#ECEFF1",
    borderRadius: 16,
    borderRadiusLG: 16,
    colorBorderSecondary: "#CFD8DC",
    colorBgBase: "#F8F9FF",
    colorError: "#FF5252",
    controlHeight: 50,
    fontFamily: "'Vazirmatn', sans-serif",
    fontSize: 14,
    fontSizeHeading1: 48,
    fontSizeHeading2: 32,
    fontSizeHeading3: 24,
    fontSizeHeading4: 16,
  },
  components: {
    Layout: {
      colorBgHeader: "#FCFCFC",
    },
    Table: {
      colorTextHeading: "#90A4AE",
      colorFillAlter: "#FAFAFA",
      borderRadius: 16,
      colorBorderSecondary: "#ECEFF1",
      fontSize: 14,
      lineHeight: 1.7,
    },
    Menu: {
      colorBgContainer: "#FCFCFC",
      itemColor: textColor,
      itemHoverColor: textColor,
      subMenuItemBg: "#FCFCFC",
      itemSelectedBg: "rgba(28, 88, 255, 0.04)",
      itemSelectedColor: "#3356A6",
    },
    Pagination: {
      itemSizeSM: 24,
      itemActiveBg: "#3356A6",
    },
  },
};

export default defaultTheme;
