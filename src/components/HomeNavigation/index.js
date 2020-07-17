import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '@cdiscount/backoffice-ui';
import AppsIcon from '@material-ui/icons/Apps';
import BallotIcon from '@material-ui/icons/Ballot';
import Button from '@material-ui/core/Button';
import React from 'react';

import styles from './styles';

function HomeNavigation() {
  const classes = useStyles(styles);

  return (
    <Grid
      alignItems="center"
      className={classes.homeNavigationGrid}
      container
      direction="row"
      justify="space-around"
    >
      <Button
        className={classes.homeNavigationButton}
        href="/rules"
        startIcon={<BallotIcon style={{ fontSize: 60 }} />}
      >
        <Typography style={{ fontSize: 15 }}>Gestion des règles</Typography>
      </Button>
      <Button
        className={classes.homeNavigationButton}
        href="/criteria"
        startIcon={<AppsIcon style={{ fontSize: 60 }} />}
      >
        <Typography style={{ fontSize: 15 }}>Gestion des critères</Typography>
      </Button>
    </Grid>
  );
}

export default HomeNavigation;
