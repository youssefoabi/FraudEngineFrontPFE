import { append, pluck, uniq, without } from 'ramda';
import { arrayOf, elementType, func, number, shape, string } from 'prop-types';
import { DataGrid as BuiDataGrid } from '@cdiscount/backoffice-ui';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import useReactRouter from 'use-react-router';

import useColumns from './useColumns';
import useDataGridReducer from './useDataGridReducer';

export default function DataGrid({ actions, rowCount, rows }) {
  const {
    page,
    rowsPerPage,
    order,
    orderBy,
    selected,
    setPage,
    setRowsPerPage,
    setSelected,
    setSort,
  } = useDataGridReducer();

  const { columns } = useColumns();
  const { history } = useReactRouter();

  function onSelect(id) {
    setSelected(selected.includes(id) ? without([id], selected) : append(id, selected));
  }

  function onSelectAll() {
    if (selected == null) return;

    if (selected.length) {
      setSelected([]);

      return;
    }

    const rowIds = pluck('id', rows);
    setSelected(uniq([...selected, ...rowIds]));
  }

  function onChangePage(nextPage) {
    setPage(nextPage);
    setSelected([]);
  }

  function onChangeRowsPerPage(event) {
    const nextRowsPerPage = event.target.value;

    setRowsPerPage(nextRowsPerPage);
    setPage(0);
    setSelected([]);
  }

  function onRequestSort(nextOrderBy) {
    setSort({
      order: orderBy === nextOrderBy && order === 'desc' ? 'asc' : 'desc',
      orderBy: nextOrderBy,
    });
    setSelected([]);
  }

  // eslint-disable-next-line fp/no-mutating-methods
  const redirectToEdit = ({ id }) => history.push(`/criteria/edit/${id}`);

  return (
    <BuiDataGrid
      bodyActions={[
        {
          label: 'Modifier',
          icon: EditIcon,
          onClick: redirectToEdit,
        },
      ]}
      actions={actions}
      checkbox
      columns={columns}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
      onRequestSort={onRequestSort}
      onSelect={onSelect}
      onSelectAll={onSelectAll}
      order={order}
      orderBy={orderBy}
      page={page}
      rowCount={rowCount}
      rows={rows}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[10, 15, 20]}
      selected={selected}
    />
  );
}

DataGrid.propTypes = {
  actions: arrayOf(
    shape({
      component: elementType,
      color: string,
      icon: elementType,
      label: string,
      onClick: func,
      variant: string,
    }),
  ),
  rowCount: number,
  rows: arrayOf(
    shape({
      id: string,
      code: string,
      explanation: string,
      eligibleOperators: string,
    }),
  ),
};

DataGrid.defaultProps = {
  actions: [],
  rowCount: 0,
  rows: [],
};
