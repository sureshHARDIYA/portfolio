import {
  LOAD_SKILLS,
  LOAD_SKILLS_SUCCESS,
  LOAD_SKILLS_FAILURE,
} from './constants';

export const loadSkills = () => ({
  type: LOAD_SKILLS,
});

export const loadSkillsSuccess = (payload) => ({
  type: LOAD_SKILLS_SUCCESS,
  payload,
});

export const loadSkillsFailure = (error) => ({
  type: LOAD_SKILLS_FAILURE,
  error,
});
