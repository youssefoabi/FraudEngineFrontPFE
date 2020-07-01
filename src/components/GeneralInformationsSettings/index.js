import { DataEdit, ExpansionPanel, GridItem } from '@cdiscount/backoffice-ui';
import { func } from 'prop-types';
import { Grid } from '@material-ui/core';
import React from 'react';

import { config } from './config';
import { enginePropTypes } from '../EngineForm/enginePropTypes';

const GeneralInformationsSettings = ({ engine, handleChange }) => (
  <ExpansionPanel defaultExpanded title="Informations Générales">
    <Grid container direction="column">
      <GridItem title="Moteur de Recherche">
        <Grid item xs={12} md={12} lg={12}>
          <DataEdit fields={config} values={engine} onChange={handleChange} />
        </Grid>
      </GridItem>
    </Grid>
  </ExpansionPanel>
);

GeneralInformationsSettings.propTypes = {
  handleChange: func,
  engine: enginePropTypes,
};

GeneralInformationsSettings.defaultProps = {
  handleChange: Function.prototype,
  engine: null,
};

export default GeneralInformationsSettings;
