/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'skmukhiya/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'skmukhiya/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'skmukhiya/App/LOAD_REPOS_ERROR';

export const LOAD_GENERAL_DATA = 'skmukhiya/App/LOAD_GENERAL_DATA';
export const LOAD_GENERAL_DATA_SUCCESS =
  'skmukhiya/App/LOAD_GENERAL_DATA_SUCCESS';
export const LOAD_GENERAL_DATA_FAILURE =
  'skmukhiya/App/LOAD_GENERAL_DATA_FAILURE';

export const DEFAULT_LOCALE = 'en';
