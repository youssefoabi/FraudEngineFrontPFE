import { DataEdit, GridItem } from '@cdiscount/backoffice-ui';
import { func } from 'prop-types';
import { Grid } from '@material-ui/core';
import React from 'react';

import { Config } from './config';
import { criterionPropTypes } from '../CriterionForm/criterionPropTypes';

const CriterionInformationsSettings = ({ criterion, handleChange }) => (
  <GridItem title="Informations du critère">
    <Grid item xs={12} md={12} lg={12}>
      <DataEdit fields={Config} values={criterion} onChange={handleChange} />
    </Grid>
  </GridItem>
);

CriterionInformationsSettings.propTypes = {
  handleChange: func,
  criterion: criterionPropTypes,
};

CriterionInformationsSettings.defaultProps = {
  handleChange: Function.prototype,
  criterion: null,
};

export default CriterionInformationsSettings;
