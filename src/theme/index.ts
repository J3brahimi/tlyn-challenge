import darkTheme from "./darkTheme.ts";
import defaultTheme from "./defaultTheme.ts";

const themes = { light: defaultTheme, dark: darkTheme };

export type ThemeName = keyof typeof themes;

export default themes;
