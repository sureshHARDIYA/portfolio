import { createSelector } from 'reselect';

const selectSkills = (state) => state.get('skills');

const makeSelectSkills = () =>
  createSelector(selectSkills, (skills) => skills.get('items'));

export { makeSelectSkills };
