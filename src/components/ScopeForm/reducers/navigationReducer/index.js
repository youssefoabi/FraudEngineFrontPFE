import { pathOr } from 'ramda';

import {
  RESET_SCOPE_SAVE_ERROR,
  RESET_SCOPE_SAVE_SUCCESS,
  SAVE_CREATE_SCOPE_ERROR,
  SAVE_CREATE_SCOPE_SUCCESS,
  SAVE_EDIT_SCOPE_ERROR,
  SAVE_EDIT_SCOPE_SUCCESS,
} from '../../actions';

const initialState = {
  errorMessage: null,
  fields: null,
  isSaveSuccess: false,
  campaignId: null,
  name: null,
};

export function navigationScopeError(state = initialState, action) {
  switch (action.type) {
    case SAVE_CREATE_SCOPE_ERROR:
    case SAVE_EDIT_SCOPE_ERROR:
      return {
        ...state,
        errorMessage: pathOr(null, ['error', 'errorMessage'], action),
      };
    case RESET_SCOPE_SAVE_ERROR:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
}

export function navigationScopeSuccess(state = initialState, action) {
  switch (action.type) {
    case SAVE_CREATE_SCOPE_SUCCESS:
    case SAVE_EDIT_SCOPE_SUCCESS:
      return {
        ...state,
        scopeSaveSuccess: true,
      };
    case RESET_SCOPE_SAVE_SUCCESS:
      return {
        ...state,
        scopeSaveSuccess: false,
      };
    default:
      return state;
  }
}
