import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import request from 'utils/request';

import { LOAD_REPOS } from './constants';
import { reposLoaded, repoLoadingError } from './actions';

export function* getRepos() {
  // Select username from store
  const username = 'sureshHARDIYA';
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

export function* githubData() {
  const watcher = yield takeLatest(LOAD_REPOS, getRepos);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [githubData];
