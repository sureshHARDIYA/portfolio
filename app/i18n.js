import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import neLocaleData from 'react-intl/locale-data/ne';
import hiLocaleData from 'react-intl/locale-data/hi';
import noLocaleData from 'react-intl/locale-data/no';

import { DEFAULT_LOCALE } from '../app/containers/App/constants';

import enTranslationMessages from './translations/en.json';
import neTranslationMessages from './translations/ne.json';
import hiTranslationMessages from './translations/hi.json';
import noTranslationMessages from './translations/no.json';

addLocaleData(enLocaleData);
addLocaleData(neLocaleData);
addLocaleData(hiLocaleData);
addLocaleData(noLocaleData);

export const appLocales = ['en', 'ne', 'hi', 'no'];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  ne: formatTranslationMessages('ne', neTranslationMessages),
  hi: formatTranslationMessages('hi', hiTranslationMessages),
  no: formatTranslationMessages('no', noTranslationMessages),
};
