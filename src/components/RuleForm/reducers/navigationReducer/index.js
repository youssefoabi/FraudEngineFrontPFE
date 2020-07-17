import { pathOr } from 'ramda';

import {
  CREATE_RULE_ERROR,
  CREATE_RULE_SUCCESS,
  EDIT_RULE_ERROR,
  EDIT_RULE_SUCCESS,
  RESET_RULE_SAVE_ERROR,
  RESET_RULE_SAVE_SUCCESS,
} from '../../actions';

const initialState = {
  errorMessage: null,
  ruleSaveSuccess: false,
};

export function navigationRuleError(state = initialState, action) {
  switch (action.type) {
    case CREATE_RULE_ERROR:
    case EDIT_RULE_ERROR:
      return {
        ...state,
        ruleSaveSuccess: false,
        errorMessage: pathOr(null, ['error', 'errorMessage'], action),
      };
    case RESET_RULE_SAVE_ERROR:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
}

export function navigationRuleSuccess(state = initialState, action) {
  switch (action.type) {
    case CREATE_RULE_SUCCESS:
    case EDIT_RULE_SUCCESS:
      return {
        ...state,
        ruleSaveSuccess: true,
      };
    case RESET_RULE_SAVE_SUCCESS:
      return {
        ...state,
        ruleSaveSuccess: false,
      };
    default:
      return state;
  }
}
