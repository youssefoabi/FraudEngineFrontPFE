import { pathOr } from 'ramda';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  SET_CRITERIA_PAGE,
  SET_CRITERIA_ROWS_PER_PAGE,
  SET_CRITERIA_SELECTED,
  SET_CRITERIA_SORT,
} from './actions';

export default function useDataGridReducer() {
  const criteria = useSelector(pathOr({}, ['navigation', 'criteria']));
  const { page, rowsPerPage, selected, order, orderBy } = criteria;
  const dispatch = useDispatch();
  const setPage = useCallback(nextPage => dispatch({ type: SET_CRITERIA_PAGE, payload: nextPage }), [
    dispatch,
  ]);
  const setSort = useCallback(nextSort => dispatch({ type: SET_CRITERIA_SORT, payload: nextSort }), [
    dispatch,
  ]);
  const setRowsPerPage = useCallback(
    nextRowsPerPage => dispatch({ type: SET_CRITERIA_ROWS_PER_PAGE, payload: nextRowsPerPage }),
    [dispatch],
  );
  const setSelected = useCallback(
    nextSelected => dispatch({ type: SET_CRITERIA_SELECTED, payload: nextSelected }),
    [dispatch],
  );

  return {
    page,
    rowsPerPage,
    order,
    orderBy,
    selected,
    setPage,
    setRowsPerPage,
    setSort,
    setSelected,
  };
}
