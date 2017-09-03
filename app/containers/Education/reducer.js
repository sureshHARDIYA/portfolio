/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_EDUCATIONS_SUCCESS,
  LOAD_EDUCATIONS,
  LOAD_EDUCATIONS_FAILURE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  items: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_EDUCATIONS:
      return state.set('loading', true).set('error', false).set('items', false);
    case LOAD_EDUCATIONS_SUCCESS:
      return state.set('items', action.payload).set('loading', false);
    case LOAD_EDUCATIONS_FAILURE:
      return state.set('loading', false).set('error', action.error);

    default:
      return state;
  }
}

export default appReducer;
