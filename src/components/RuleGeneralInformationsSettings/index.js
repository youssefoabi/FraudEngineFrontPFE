import { Button, DataEdit, GridItem, useStyles } from '@cdiscount/backoffice-ui';
import { func } from 'prop-types';
import { Grid } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import React from 'react';
import RefreshIcon from '@material-ui/icons/Refresh';

import { config } from './config';
import { rulePropTypes } from '../RuleForm/rulePropTypes';
import styles from './styles';

const RuleGeneralInformationsSettings = ({ rule, handleChange, resetRule }) => {
  const classes = useStyles(styles);
  console.log('ruleeee', rule);
  return (
    <GridItem title="Informations Générales">
      <Grid item xs={12} md={12} lg={12}>
        <DataEdit fields={config} values={rule} onChange={handleChange} />
        <Grid container spacing={3}>
          <GridItem xs={6} md={6} lg={6}>
            <Button
              className={classes.ButtonWrapper}
              size="large"
              icon={RefreshIcon}
              color="tertiary"
              variant="contained"
              label="Réinitialiser"
              onClick={resetRule}
            />
          </GridItem>
          <GridItem xs={6} md={6} lg={6}>
            <Button
              className={classes.ButtonWrapper}
              size="large"
              icon={CancelIcon}
              color="tertiary"
              variant="contained"
              label="Annuler"
              href="/rules"
            />
          </GridItem>
        </Grid>
      </Grid>
    </GridItem>
  );
};

RuleGeneralInformationsSettings.propTypes = {
  handleChange: func,
  resetRule: func,
  rule: rulePropTypes,
};

RuleGeneralInformationsSettings.defaultProps = {
  handleChange: Function.prototype,
  resetRule: Function.prototype,
  rule: null,
};

export default RuleGeneralInformationsSettings;
