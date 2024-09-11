import * as enTranslation from "assets/locales/en";
import * as faTranslation from "assets/locales/fa";

export const LanguageResources = {
  en: {
    translation: enTranslation,
  },
  fa: {
    translation: faTranslation,
  },
};

export type LanguageName = keyof typeof LanguageResources;

export const SupportedLanguageList: {
  label: string;
  key: LanguageName;
  direction: "rtl" | "ltr";
}[] = [
  {
    label: "English",
    key: "en",
    direction: "ltr",
  },
  {
    label: "فارسی",
    key: "fa",
    direction: "rtl",
  },
];
