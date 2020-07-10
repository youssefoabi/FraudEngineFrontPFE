import { pathOr } from 'ramda';

import {
  CREATE_CRITERION_ERROR,
  CREATE_CRITERION_SUCCESS,
  EDIT_CRITERION_ERROR,
  EDIT_CRITERION_SUCCESS,
  RESET_CRITERION_SAVE_ERROR,
  RESET_CRITERION_SAVE_SUCCESS,
} from '../../actions';

const initialState = {
  errorMessage: null,
  criterionSaveSuccess: false,
};

export function navigationCriterionError(state = initialState, action) {
  switch (action.type) {
    case CREATE_CRITERION_ERROR:
    case EDIT_CRITERION_ERROR:
      return {
        ...state,
        criterionSaveSuccess: false,
        errorMessage: pathOr(null, ['error', 'errorMessage'], action),
      };
    case RESET_CRITERION_SAVE_ERROR:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
}

export function navigationCriterionSuccess(state = initialState, action) {
  switch (action.type) {
    case CREATE_CRITERION_SUCCESS:
    case EDIT_CRITERION_SUCCESS:
      return {
        ...state,
        criterionSaveSuccess: true,
      };
    case RESET_CRITERION_SAVE_SUCCESS:
      return {
        ...state,
        criterionSaveSuccess: false,
      };
    default:
      return state;
  }
}
