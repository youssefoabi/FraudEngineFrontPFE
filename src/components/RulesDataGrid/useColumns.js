import { Button, useStyles } from '@cdiscount/backoffice-ui';
import { Typography } from '@material-ui/core';
import Cancel from '@material-ui/icons/Cancel';
import CheckCircle from '@material-ui/icons/CheckCircle';
import format from 'date-fns/format';
import React from 'react';

import styles from './styles';

export default function useColumns() {
  const classes = useStyles(styles);

  function renderInlineCell(service) {
    return <Typography className={classes.inlineText}>{service}</Typography>;
  }

  function renderInlineDateCell(date) {
    return (
      date && <Typography className={classes.inlineText}>{format(new Date(date), 'dd/MM/yyyy')}</Typography>
    );
  }
  function renderActivatedCell(isEnabled) {
    return (
      <Button
        disableRipple
        color={isEnabled ? 'secondary' : 'quaternary'}
        size="large"
        icon={isEnabled ? CheckCircle : Cancel}
        label={isEnabled ? 'Active' : 'Inactive'}
      />
    );
  }
  function renderValidatedCell(isEnabled) {
    return (
      <Button
        disableRipple
        color={isEnabled ? 'secondary' : 'quaternary'}
        size="large"
        icon={isEnabled ? CheckCircle : Cancel}
        label={isEnabled ? 'Valide' : 'InInvalide'}
      />
    );
  }

  const columns = [
    {
      id: 'name',
      label: 'NOM',
      render: renderInlineCell,
      isSortable: true,
      align: 'left',
    },
    {
      id: 'description',
      label: 'Description',
      render: renderInlineCell,
      isSortable: true,
      align: 'left',
    },
    {
      id: 'isValidated',
      label: 'Etat',
      render: renderValidatedCell,
      isSortable: true,
    },
    {
      id: 'isActivated',
      label: 'Production',
      render: renderActivatedCell,
      isSortable: true,
    },
    {
      id: 'priority',
      label: 'Priorité',
      render: renderInlineCell,
      isSortable: true,
    },
    {
      id: 'modifiedAt',
      label: 'Dernière modif.',
      render: renderInlineDateCell,
      isSortable: true,
    },
    {
      id: 'nbPendingOrders',
      label: 'Commandes en attente',
      render: renderInlineCell,
      isSortable: true,
    },
  ];

  return { columns };
}
