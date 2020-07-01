import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import { pathOr } from 'ramda';
import { useSelector } from 'react-redux';
import React from 'react';

import styles from './styles';

const useStyles = makeStyles(() => styles);

const ServerActionBackdrop = () => {
  const pendingRequest = useSelector(pathOr(false, ['navigation', 'pendingRequest', 'pendingRequest']));

  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={pendingRequest}>
      <CircularProgress />
    </Backdrop>
  );
};

export default ServerActionBackdrop;
