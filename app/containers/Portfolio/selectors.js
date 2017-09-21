import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('portfolio');

const makeSelectLoading = () =>
  createSelector(selectGlobal, (globalState) => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, (globalState) => globalState.get('error'));

const makeSelectRepos = () =>
  createSelector(selectGlobal, (globalState) =>
    globalState.getIn(['userData', 'repositories'])
  );

export { selectGlobal, makeSelectLoading, makeSelectError, makeSelectRepos };
