import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";

const resources = {
  // English translations
  en: {
    translation: en,
  },

  // French translations
  fr: {
    translation: fr,
  },
};

// Initialize i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass to react-i18next
  .init({
    resources,
    fallbackLng: "en", // Default language if detection fails
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
