import { Typography } from '@material-ui/core';
import { useStyles } from '@cdiscount/backoffice-ui';
import React from 'react';

import styles from './styles';

export default function useColumns() {
  const classes = useStyles(styles);

  function renderInlineCell(service) {
    return <Typography className={classes.inlineText}>{service}</Typography>;
  }

  const columns = [
    {
      id: 'id',
      label: 'ID',
      render: renderInlineCell,
      isSortable: true,
    },
    {
      id: 'explanation',
      label: 'Critère',
      render: renderInlineCell,
      isSortable: true,
      align: 'left',
    },
    {
      id: 'code',
      label: 'Code',
      render: renderInlineCell,
      isSortable: true,
      align: 'left',
    },
    {
      id: 'type',
      label: 'Type',
      render: renderInlineCell,
      isSortable: true,
      align: 'left',
    },
  ];

  return { columns };
}
