import { pathOr } from 'ramda';

import {
  DELETE_ENGINES_ERROR,
  DELETE_ENGINES_SUCCESS,
  RESET_DELETE_ENGINES_ERROR,
  RESET_DELETE_ENGINES_SUCCESS,
  SET_ENGINES_PAGE,
  SET_ENGINES_ROWS_PER_PAGE,
  SET_ENGINES_SELECTED,
  SET_ENGINES_SORT,
} from '../../actions';

const initialState = {
  page: 0,
  rowsPerPage: 10,
  order: 'asc',
  orderBy: null,
  selected: [],
  deleteStatus: {},
};

export default function enginesNavigation(state = initialState, action) {
  switch (action.type) {
    case SET_ENGINES_PAGE:
      return { ...state, page: action.payload };
    case SET_ENGINES_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.payload };
    case SET_ENGINES_SELECTED:
      return { ...state, selected: action.payload };
    case SET_ENGINES_SORT:
      return { ...state, order: action.payload.order, orderBy: action.payload.orderBy };
    case DELETE_ENGINES_ERROR:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          errorMessage: pathOr(null, ['error', 'errorMessage'], action),
        },
      };
    case RESET_DELETE_ENGINES_ERROR:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          errorMessage: null,
        },
      };
    case DELETE_ENGINES_SUCCESS:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          enginesDeleteSuccess: true,
        },
      };
    case RESET_DELETE_ENGINES_SUCCESS:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          enginesDeleteSuccess: false,
        },
      };
    default:
      return state;
  }
}
