/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectEducation = (state) => state.get('educations');

const makeSelectEducation = () =>
  createSelector(selectEducation, (educations) => educations.get('items'));

export { makeSelectEducation };
