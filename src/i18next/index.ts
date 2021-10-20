import axios from 'axios';
import XHR from 'i18next-xhr-backend';
import languageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

// eslint-disable-next-line camelcase
const loadPath = () => `${__webpack_public_path__}locales/{{lng}}.json`;

const i18NextAxios = axios.create();

const ajax = (url, opts, callback) => i18NextAxios(url).then((resp) => {
  const enrichedLocales = {
    ...resp.data,
  };
  callback(JSON.stringify(enrichedLocales), resp);
});


export const i18NextReactInitConfig = (i18next) => i18next
    .use(XHR)
    .use(initReactI18next)
    .use(languageDetector)
    .init({
      fallbackLng: 'ru',
      load: 'currentOnly',
      keySeparator: false,
      whiteList: ['ru', 'en'],
      backend: {
        loadPath,
        ajax,
      },
    });
