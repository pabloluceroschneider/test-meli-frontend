import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from './dictionaries/es.json';

// the translations
const resources = {
  es:{
    translation : es
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;