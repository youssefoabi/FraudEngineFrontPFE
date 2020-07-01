import { pathOr } from 'ramda';

import {
  CREATE_ENGINESGROUP_ERROR,
  CREATE_ENGINESGROUP_SUCCESS,
  EDIT_ENGINESGROUP_ERROR,
  EDIT_ENGINESGROUP_SUCCESS,
  RESET_ENGINESGROUP_SAVE_ERROR,
  RESET_ENGINESGROUP_SAVE_SUCCESS,
} from '../../actions';

const initialState = {
  errorMessage: null,
  enginesGroupSaveSuccess: false,
};

export function navigationEnginesGroupError(state = initialState, action) {
  switch (action.type) {
    case CREATE_ENGINESGROUP_ERROR:
    case EDIT_ENGINESGROUP_ERROR:
      return {
        ...state,
        enginesGroupSaveSuccess: false,
        errorMessage: pathOr(null, ['error', 'errorMessage'], action),
      };
    case RESET_ENGINESGROUP_SAVE_ERROR:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
}

export function navigationEnginesGroupSuccess(state = initialState, action) {
  switch (action.type) {
    case CREATE_ENGINESGROUP_SUCCESS:
    case EDIT_ENGINESGROUP_SUCCESS:
      return {
        ...state,
        enginesGroupSaveSuccess: true,
      };
    case RESET_ENGINESGROUP_SAVE_SUCCESS:
      return {
        ...state,
        enginesGroupSaveSuccess: false,
      };
    default:
      return state;
  }
}
