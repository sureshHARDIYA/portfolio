/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import {
  CHANGE_LOCALE,
} from './constants';
import {
  DEFAULT_LOCALE,
} from '../App/constants';

import { appLocales } from '../../i18n';
const localeInStore = localStorage.getItem('currentLocale');
const locale = appLocales.includes(localeInStore) ? localeInStore : DEFAULT_LOCALE;

const initialState = fromJS({ locale });

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;
