import { pathOr } from 'ramda';

import {
  DELETE_CRITERIA_ERROR,
  DELETE_CRITERIA_SUCCESS,
  RESET_DELETE_CRITERIA_ERROR,
  RESET_DELETE_CRITERIA_SUCCESS,
  SET_CRITERIA_PAGE,
  SET_CRITERIA_ROWS_PER_PAGE,
  SET_CRITERIA_SELECTED,
  SET_CRITERIA_SORT,
} from '../../actions';

const initialState = {
  page: 0,
  rowsPerPage: 10,
  order: 'asc',
  orderBy: null,
  selected: [],
  deleteStatus: {},
};

export default function criteriaNavigation(state = initialState, action) {
  switch (action.type) {
    case SET_CRITERIA_PAGE:
      return { ...state, page: action.payload };
    case SET_CRITERIA_ROWS_PER_PAGE:
      return { ...state, rowsPerPage: action.payload };
    case SET_CRITERIA_SELECTED:
      return { ...state, selected: action.payload };
    case SET_CRITERIA_SORT:
      return { ...state, order: action.payload.order, orderBy: action.payload.orderBy };
    case DELETE_CRITERIA_ERROR:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          errorMessage: pathOr(null, ['error', 'errorMessage'], action),
        },
      };
    case RESET_DELETE_CRITERIA_ERROR:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          errorMessage: null,
        },
      };
    case DELETE_CRITERIA_SUCCESS:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          criteriaDeleteSuccess: true,
        },
      };
    case RESET_DELETE_CRITERIA_SUCCESS:
      return {
        ...state,
        deleteStatus: {
          ...state.deleteStatus,
          criteriaDeleteSuccess: false,
        },
      };
    default:
      return state;
  }
}
