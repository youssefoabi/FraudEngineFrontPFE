import { pathOr } from 'ramda';

import {
  CREATE_ENGINE_ERROR,
  CREATE_ENGINE_SUCCESS,
  EDIT_ENGINE_ERROR,
  EDIT_ENGINE_SUCCESS,
  RESET_ENGINE_SAVE_ERROR,
  RESET_ENGINE_SAVE_SUCCESS,
} from '../../actions';

const initialState = {
  errorMessage: null,
  engineSaveSuccess: false,
};

export function navigationEngineError(state = initialState, action) {
  switch (action.type) {
    case CREATE_ENGINE_ERROR:
    case EDIT_ENGINE_ERROR:
      return {
        ...state,
        engineSaveSuccess: false,
        errorMessage: pathOr(null, ['error', 'errorMessage'], action),
      };
    case RESET_ENGINE_SAVE_ERROR:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
}

export function navigationEngineSuccess(state = initialState, action) {
  switch (action.type) {
    case CREATE_ENGINE_SUCCESS:
    case EDIT_ENGINE_SUCCESS:
      return {
        ...state,
        engineSaveSuccess: true,
      };
    case RESET_ENGINE_SAVE_SUCCESS:
      return {
        ...state,
        engineSaveSuccess: false,
      };
    default:
      return state;
  }
}
