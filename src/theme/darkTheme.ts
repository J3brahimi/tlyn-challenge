import type { ThemeConfig } from "antd";
import { theme } from "antd";

const defaultTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgBase: "#000",
    colorBgContainer: "#001628",
    wireframe: true,
    colorPrimary: "#3356A6",
    colorText: "#546E7A",
    colorBorder: "#ECEFF1",
    borderRadius: 16,
    borderRadiusLG: 16,
    colorBorderSecondary: "#CFD8DC",
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
    Menu: {
      colorBgContainer: "#001628",
      subMenuItemBg: "#001628",
    },
  },
};

export default defaultTheme;
