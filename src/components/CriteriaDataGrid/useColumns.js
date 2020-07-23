import { isNilOrEmpty } from 'ramda-adjunct';
import { join } from 'ramda';
import { Typography } from '@material-ui/core';
import { useStyles } from '@cdiscount/backoffice-ui';
import React from 'react';

import styles from './styles';

const parseEligibleOperators = eligibleOperators => {
  if (isNilOrEmpty(eligibleOperators)) return null;

  return join(', ', eligibleOperators);
};

export default function useColumns() {
  const classes = useStyles(styles);

  function renderInlineCell(service) {
    return <Typography className={classes.inlineText}>{service}</Typography>;
  }

  function renderEligibleOperators(eligibleOperators) {
    return (
      <div className={classes.eligibleOperatorsWrapper}>
        <Typography className={classes.eligibleOperatorsText}>
          {parseEligibleOperators(eligibleOperators)}
        </Typography>
      </div>
    );
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
      id: 'eligibleOperators',
      label: 'éligibles operateurs',
      render: renderEligibleOperators,
      isSortable: true,
      align: 'left',
    },
  ];

  return { columns };
}
