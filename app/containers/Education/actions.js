import {
  LOAD_EDUCATIONS,
  LOAD_EDUCATIONS_SUCCESS,
  LOAD_EDUCATIONS_FAILURE,
} from './constants';

export const loadEducations = () => ({
  type: LOAD_EDUCATIONS,
});

export const loadEducationsSuccess = (payload) => ({
  type: LOAD_EDUCATIONS_SUCCESS,
  payload,
});

export const loadEducationsFailure = (error) => ({
  type: LOAD_EDUCATIONS_FAILURE,
  error,
});
