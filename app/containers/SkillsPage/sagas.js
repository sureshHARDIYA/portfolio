import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { LOAD_SKILLS } from './constants';
import { loadSkillsSuccess, loadSkillsFailure } from './actions';

export function* skillsData() {
  yield takeLatest(LOAD_SKILLS, getSkills);
}

export function* getSkills() {
  try {
    const payload = yield call(request, 'api/skills');
    yield put(loadSkillsSuccess(payload));
  } catch (err) {
    yield put(loadSkillsFailure(err));
  }
}

export default [skillsData];
