import { Button, useStyles } from '@cdiscount/backoffice-ui';
import { isEmpty, isNil, join, map, pipe, prop } from 'ramda';
import { Typography } from '@material-ui/core';
import Cancel from '@material-ui/icons/Cancel';
import CheckCircle from '@material-ui/icons/CheckCircle';
import format from 'date-fns/format';
import React from 'react';

import styles from './styles';

const parseScope = scopes => {
  if (isNil(scopes) || isEmpty(scopes)) return null;

  return pipe(map(prop('name')), join(', '))(scopes);
};

export default function useColumns() {
  const classes = useStyles(styles);

  function renderInlineCell(service) {
    return <Typography className={classes.inlineText}>{service}</Typography>;
  }

  function renderScopes(scopes) {
    return (
      <div className={classes.scopesWrapper}>
        <Typography className={classes.scopesText}>{parseScope(scopes)}</Typography>
      </div>
    );
  }

  function renderInlineDateCell(date) {
    return date && <Typography className={classes.inlineText}>{format(date, 'dd/MM/yyyy HH:mm')}</Typography>;
  }
  function renderEnabledCell(isEnabled) {
    return (
      <Button
        disableRipple
        color={isEnabled ? 'secondary' : 'quaternary'}
        size="large"
        icon={isEnabled ? CheckCircle : Cancel}
        label={isEnabled ? 'Actif' : 'Inactif'}
      />
    );
  }

  const columns = [
    {
      id: 'scopes',
      label: 'GAMMES',
      render: renderScopes,
      isSortable: true,
      align: 'left',
    },
    {
      id: 'id',
      label: 'ID',
      render: renderInlineCell,
      isSortable: true,
    },
    {
      id: 'name',
      label: 'NOM',
      render: renderInlineCell,
      isSortable: true,
      align: 'left',
    },
    {
      id: 'modifiedAt',
      label: 'Dernière modif.',
      render: renderInlineDateCell,
      isSortable: true,
    },
    {
      id: 'isEnable',
      label: 'STATUT',
      render: renderEnabledCell,
      isSortable: true,
    },
  ];

  return { columns };
}
