import { pathOr } from 'ramda';

import {
  DELETE_SCOPES_ERROR,
  DELETE_SCOPES_SUCCESS,
  RESET_DELETE_SCOPES_ERROR,
  RESET_DELETE_SCOPES_SUCCESS,
  SET_SCOPES_PAGE,
  SET_SCOPES_ROWS_PER_PAGE,
  SET_SCOPES_SELECTED,
  SET_SCOPES_SORT,
} from '../../actions';

const initialState = {
  page: 0,
  rowsPerPage: 10,
  order: 'asc',
  orderBy: null,
  selected: [],
  deleteStatus: {},
};

export default function scopesNavigation(state = initialState, action) {
  switch (action.type) {
    case SET_SCOPES_PAGE:
      return { ...state, page: action.payload };
    case SET_SCOPES_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.payload };
    case SET_SCOPES_SELECTED:
      return { ...state, selected: action.payload };
    case SET_SCOPES_SORT:
      return { ...state, order: action.payload.order, orderBy: action.payload.orderBy };
    case DELETE_SCOPES_ERROR:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          errorMessage: pathOr(null, ['error', 'errorMessage'], action),
        },
      };
    case RESET_DELETE_SCOPES_ERROR:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          errorMessage: null,
        },
      };
    case DELETE_SCOPES_SUCCESS:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          scopesDeleteSuccess: true,
        },
      };
    case RESET_DELETE_SCOPES_SUCCESS:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          scopesDeleteSuccess: false,
        },
      };
    default:
      return state;
  }
}
