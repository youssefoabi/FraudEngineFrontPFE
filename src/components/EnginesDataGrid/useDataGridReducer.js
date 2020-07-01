import { pathOr } from 'ramda';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ENGINE_VIEW,
  SET_ENGINES_PAGE,
  SET_ENGINES_ROWS_PER_PAGE,
  SET_ENGINES_SELECTED,
  SET_ENGINES_SORT,
} from './actions';

export default function useDataGridReducer() {
  const engines = useSelector(pathOr({}, ['navigation', 'engines']));
  const { page, rowsPerPage, selected, order, orderBy } = engines;
  const dispatch = useDispatch();
  const setPage = useCallback(nextPage => dispatch({ type: SET_ENGINES_PAGE, payload: nextPage }), [
    dispatch,
  ]);
  const setSort = useCallback(nextSort => dispatch({ type: SET_ENGINES_SORT, payload: nextSort }), [
    dispatch,
  ]);
  const setRowsPerPage = useCallback(
    nextRowsPerPage => dispatch({ type: SET_ENGINES_ROWS_PER_PAGE, payload: nextRowsPerPage }),
    [dispatch],
  );
  const setSelected = useCallback(
    nextSelected => dispatch({ type: SET_ENGINES_SELECTED, payload: nextSelected }),
    [dispatch],
  );

  const engineView = useCallback(({ id }) => dispatch({ type: ENGINE_VIEW, payload: { id } }), [dispatch]);

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
    engineView,
  };
}
