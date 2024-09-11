import enUS from "antd/es/locale/en_US";
import faIR from "antd/es/locale/fa_IR";

import { LanguageName } from "src/constants/language";

export const AntLocales: { [key in LanguageName]: any } = {
  en: enUS,
  fa: faIR,
};
