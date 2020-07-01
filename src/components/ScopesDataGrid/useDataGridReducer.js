import { path } from 'ramda';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SET_SCOPES_PAGE, SET_SCOPES_ROWS_PER_PAGE, SET_SCOPES_SELECTED, SET_SCOPES_SORT } from './actions';

export default function useDataGridReducer() {
  const page = useSelector(path(['navigation', 'scopes', 'page']));
  const rowsPerPage = useSelector(path(['navigation', 'scopes', 'rowsPerPage']));
  const selected = useSelector(path(['navigation', 'scopes', 'selected']));
  const order = useSelector(path(['navigation', 'scopes', 'order']));
  const orderBy = useSelector(path(['navigation', 'scopes', 'orderBy']));

  const dispatch = useDispatch();
  const setPage = useCallback(nextPage => dispatch({ type: SET_SCOPES_PAGE, payload: nextPage }), [dispatch]);
  const setSort = useCallback(nextSort => dispatch({ type: SET_SCOPES_SORT, payload: nextSort }), [dispatch]);
  const setRowsPerPage = useCallback(
    nextRowsPerPage => dispatch({ type: SET_SCOPES_ROWS_PER_PAGE, payload: nextRowsPerPage }),
    [dispatch],
  );
  const setSelected = useCallback(
    nextSelected => dispatch({ type: SET_SCOPES_SELECTED, payload: nextSelected }),
    [dispatch],
  );

  return { page, rowsPerPage, order, orderBy, selected, setPage, setRowsPerPage, setSort, setSelected };
}
