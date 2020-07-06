import { pathOr } from 'ramda';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SET_RULES_PAGE, SET_RULES_ROWS_PER_PAGE, SET_RULES_SELECTED, SET_RULES_SORT } from './actions';

export default function useDataGridReducer() {
  const rules = useSelector(pathOr({}, ['navigation', 'rules']));
  const { page, rowsPerPage, selected, order, orderBy } = rules;
  const dispatch = useDispatch();
  const setPage = useCallback(nextPage => dispatch({ type: SET_RULES_PAGE, payload: nextPage }), [dispatch]);
  const setSort = useCallback(nextSort => dispatch({ type: SET_RULES_SORT, payload: nextSort }), [dispatch]);
  const setRowsPerPage = useCallback(
    nextRowsPerPage => dispatch({ type: SET_RULES_ROWS_PER_PAGE, payload: nextRowsPerPage }),
    [dispatch],
  );
  const setSelected = useCallback(
    nextSelected => dispatch({ type: SET_RULES_SELECTED, payload: nextSelected }),
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
