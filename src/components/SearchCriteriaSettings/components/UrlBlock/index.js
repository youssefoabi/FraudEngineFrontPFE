import { DataEdit, GridItem } from '@cdiscount/backoffice-ui';
import { FormLabel, Grid } from '@material-ui/core';
import { func, shape } from 'prop-types';
import { isNilOrEmpty } from 'ramda-adjunct';
import { pathOr } from 'ramda';
import React from 'react';

import { config } from './config';
import ParameterChip from './components/ParameterChip';
import ScopeUrlField from './components/ScopeUrlField';
import useUrl from './useUrl';

const UrlBlock = ({ engine, handleChange }) => {
  const { scopeId, scopeUrl, scopeLabel, allParameters, handleScopeChange } = useUrl({
    engine,
    handleChange,
  });
  const scope = pathOr(null, ['scopes', scopeId], engine);

  const renderParametersList = () => {
    if (isNilOrEmpty(allParameters)) return null;

    return allParameters.map(currentParameter => (
      <ParameterChip engine={engine} scopeId={scopeId} parameter={currentParameter} />
    ));
  };

  return (
    <GridItem title={`Gamme ${scopeLabel || ''}`}>
      <Grid container spacing={2}>
        <Grid item columns={6} xs={6} md={6} lg={6}>
          <FormLabel>Url Pattern</FormLabel>
          <ScopeUrlField scopeUrl={scopeUrl} />
        </Grid>
        <Grid item columns={6} xs={6} md={6} lg={6}>
          <DataEdit fields={config} values={scope} onChange={handleScopeChange} />
        </Grid>
      </Grid>
      <br />
      <FormLabel>Paramètres liés aux champs de saisie</FormLabel>
      <br />
      {renderParametersList()}
    </GridItem>
  );
};

UrlBlock.propTypes = {
  engine: shape({}),
  handleChange: func,
};

UrlBlock.defaultProps = {
  engine: null,
  handleChange: Function.Prototype,
};

export default UrlBlock;
