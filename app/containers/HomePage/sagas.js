import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_GENERAL_DATA } from 'containers/App/constants';
import {
  loadGeneralDataSuccss,
  loadGeneralDataFailure,
} from 'containers/App/actions';

import request from 'utils/request';

export function* watchGeneralDataLoading() {
  yield takeLatest(LOAD_GENERAL_DATA, getGeneralData);
}

export function* getGeneralData() {
  try {
    const data = yield call(request, 'api/general');

    yield put(loadGeneralDataSuccss(data));
  } catch (err) {
    yield put(loadGeneralDataFailure(err));
  }
}

export default [watchGeneralDataLoading];
