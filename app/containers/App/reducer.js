import { fromJS } from 'immutable';

import {
  LOAD_GENERAL_DATA,
  LOAD_GENERAL_DATA_SUCCESS,
  LOAD_GENERAL_DATA_FAILURE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  general: {
    data: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GENERAL_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['general', 'data'], false);
    case LOAD_GENERAL_DATA_SUCCESS:
      return state
        .setIn(['general', 'data'], action.data)
        .set('loading', false);
    case LOAD_GENERAL_DATA_FAILURE:
      return state.set('error', action.error).set('loading', false);

    default:
      return state;
  }
}

export default appReducer;
