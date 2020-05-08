import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { pt, en } from './locales';

import { initReactI18next } from "react-i18next";



// the translations
// (tip move them in a JSON file and import them)
const resources = {
    pt: {
      translation: {
        navbar: {
          hello: "Olá"
        }
      }
    },
    en: {
      translation: {
        navbar: {
          hello: "Hello"
        }
      }
    },
};

console.log('res: ', resources)

// i18n
//   .use(LanguageDetector)
//   .init(options)
//   .changeLanguage('en', (err, t) => {
//     if (err) return console.log('something went wrong loading', err);
//   });

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;



// const options = {
//   interpolation: {
//     escapeValue: false, // not needed for react!!
//   },

//   debug: true,

//   // lng: 'en',

//   resources: {
//     pt: {
//       common: pt['pt-BR'],
//     },
//     en: {
//       common: en.en,
//     },
//   },

//   fallbackLng: 'en',

//   ns: ['common'],

//   defaultNS: 'common',

//   react: {
//     wait: false,
//     bindI18n: 'languageChanged loaded',
//     bindStore: 'added removed',
//     nsMode: 'default'
//   },
// };

// i18n
//   .use(LanguageDetector)
//   .init(options)
//   .changeLanguage('en', (err, t) => {
//     if (err) return console.log('something went wrong loading', err);
//   });

// export default i18n;
