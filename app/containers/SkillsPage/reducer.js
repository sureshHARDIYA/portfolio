import { fromJS } from 'immutable';

import {
  LOAD_SKILLS_SUCCESS,
  LOAD_SKILLS,
  LOAD_SKILLS_FAILURE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  items: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SKILLS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('items', false);
    case LOAD_SKILLS_SUCCESS:
      return state.set('items', action.payload).set('loading', false);
    case LOAD_SKILLS_FAILURE:
      return state.set('loading', false).set('error', action.error);

    default:
      return state;
  }
}

export default appReducer;
