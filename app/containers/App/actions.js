import {
  LOAD_GENERAL_DATA,
  LOAD_GENERAL_DATA_SUCCESS,
  LOAD_GENERAL_DATA_FAILURE,
} from './constants';

export function loadGeneralData() {
  return {
    type: LOAD_GENERAL_DATA,
  };
}

export function loadGeneralDataSuccss(data) {
  return {
    type: LOAD_GENERAL_DATA_SUCCESS,
    data,
  };
}

export function loadGeneralDataFailure(error) {
  return {
    type: LOAD_GENERAL_DATA_FAILURE,
    error,
  };
}
