import { DataEdit, GridItem } from '@cdiscount/backoffice-ui';
import { func } from 'prop-types';
import { Grid } from '@material-ui/core';
import globalConfig from 'react-global-configuration';
import React from 'react';

import { config, idConfig } from './config';
import { enginesGroupPropTypes } from '../EnginesGroupForm/enginesGroupPropTypes';
import EnginesBlock from './components/EnginesBlock';

const SelectEnginesSettings = ({ enginesGroup, handleChange }) => (
  <Grid container direction="column">
    <GridItem title="Choix des onglets à afficher">
      <Grid container>
        <Grid item xs={8} md={8} lg={8}>
          <DataEdit fields={config} values={enginesGroup} onChange={handleChange} />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          {globalConfig.get('IsCodeEnginesGroupFieldActivated') ? null : (
            <DataEdit fields={idConfig} values={enginesGroup} onChange={handleChange} />
          )}
        </Grid>
      </Grid>
      <br />
      <EnginesBlock enginesGroup={enginesGroup} handleChange={handleChange} />
    </GridItem>
  </Grid>
);

SelectEnginesSettings.propTypes = {
  handleChange: func,
  enginesGroup: enginesGroupPropTypes,
};

SelectEnginesSettings.defaultProps = {
  handleChange: Function.prototype,
  enginesGroup: null,
};

export default SelectEnginesSettings;
