import { pathOr } from 'ramda';

import {
  DELETE_RULES_ERROR,
  DELETE_RULES_SUCCESS,
  RESET_DELETE_RULES_ERROR,
  RESET_DELETE_RULES_SUCCESS,
  SET_RULES_PAGE,
  SET_RULES_ROWS_PER_PAGE,
  SET_RULES_SELECTED,
  SET_RULES_SORT,
} from '../../actions';

const initialState = {
  page: 0,
  rowsPerPage: 10,
  order: 'asc',
  orderBy: null,
  selected: [],
  deleteStatus: {},
};

export default function rulesNavigation(state = initialState, action) {
  switch (action.type) {
    case SET_RULES_PAGE:
      return { ...state, page: action.payload };
    case SET_RULES_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.payload };
    case SET_RULES_SELECTED:
      return { ...state, selected: action.payload };
    case SET_RULES_SORT:
      return { ...state, order: action.payload.order, orderBy: action.payload.orderBy };
    case DELETE_RULES_ERROR:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          errorMessage: pathOr(null, ['error', 'errorMessage'], action),
        },
      };
    case RESET_DELETE_RULES_ERROR:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          errorMessage: null,
        },
      };
    case DELETE_RULES_SUCCESS:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          rulesDeleteSuccess: true,
        },
      };
    case RESET_DELETE_RULES_SUCCESS:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          rulesDeleteSuccess: false,
        },
      };
    default:
      return state;
  }
}
