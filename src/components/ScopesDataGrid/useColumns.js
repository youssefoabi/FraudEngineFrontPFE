import { Typography } from '@material-ui/core';
import { useStyles } from '@cdiscount/backoffice-ui';
import format from 'date-fns/format';
import React from 'react';

import styles from './styles';

export default function useColumns() {
  const classes = useStyles(styles);

  function renderInlineCell(text) {
    return <Typography className={classes.inlineText}>{text}</Typography>;
  }

  function renderInlineDateCell(date) {
    return date && <Typography className={classes.inlineText}>{format(date, 'dd/MM/yyyy HH:mm')}</Typography>;
  }

  const columns = [
    {
      id: 'name',
      label: 'Gamme',
      render: renderInlineCell,
      isSortable: true,
    },
    {
      id: 'urlTemplate',
      label: 'URL',
      render: renderInlineCell,
      isSortable: true,
    },
    {
      id: 'modifiedAt',
      label: 'Dernière modification',
      render: renderInlineDateCell,
      isSortable: true,
    },
  ];

  return { columns };
}
