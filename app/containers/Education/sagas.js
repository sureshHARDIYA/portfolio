import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { LOAD_EDUCATIONS } from './constants';
import { loadEducationsSuccess, loadEducationsFailure } from './actions';

export function* educationData() {
  yield takeLatest(LOAD_EDUCATIONS, getEducations);
}

export function* getEducations() {
  try {
    const payload = yield call(request, 'api/education');
    yield put(loadEducationsSuccess(payload));
  } catch (err) {
    yield put(loadEducationsFailure(err));
  }
}

// Bootstrap sagas
export default [educationData];
