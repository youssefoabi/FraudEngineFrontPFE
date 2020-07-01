import { ExpansionPanel, GridItem } from '@cdiscount/backoffice-ui';
import { func } from 'prop-types';
import { Grid } from '@material-ui/core';
import { isNil, pathOr } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import React from 'react';

import { enginePropTypes } from '../EngineForm/enginePropTypes';
import { FieldsBlock, ParametersBlock, ScopesBlock, UrlBlock } from './components';
import useScopes from '../../screens/ScopesManagement/useScopes';

const SearchCriteriaSettings = ({ engine, handleChange }) => {
  const { scopes: allScopes } = useScopes();

  const currentScope = pathOr(null, ['currentScope'], engine);
  const currentType1 = pathOr(null, ['inputFields', 0, 'type'], engine);
  const currentType2 = pathOr(null, ['inputFields', 1, 'type'], engine);

  if (isNilOrEmpty(allScopes)) return null;

  return (
    <ExpansionPanel title="Gestion des critères de recherches">
      <Grid container direction="column">
        <Grid container spacing={2}>
          <GridItem item xs={12} sm={12} md={6} xl={6}>
            <FieldsBlock fieldId={0} engine={engine} handleChange={handleChange} />
          </GridItem>
          <GridItem item xs={12} sm={12} md={6} xl={6}>
            <FieldsBlock fieldId={1} engine={engine} handleChange={handleChange} />
          </GridItem>
        </Grid>
        <br />
        <ScopesBlock handleChange={handleChange} engine={engine} />
        {isNil(currentScope) ? null : (
          <>
            <UrlBlock handleChange={handleChange} engine={engine} />
            <Grid container spacing={2}>
              {isNil(currentType1) ? null : (
                <GridItem item xs={12} sm={12} md={6} xl={6}>
                  <ParametersBlock fieldId={0} engine={engine} handleChange={handleChange} />
                </GridItem>
              )}
              {isNil(currentType2) ? null : (
                <GridItem item xs={12} sm={12} md={6} xl={6}>
                  <ParametersBlock fieldId={1} engine={engine} handleChange={handleChange} />
                </GridItem>
              )}
            </Grid>
          </>
        )}
      </Grid>
    </ExpansionPanel>
  );
};

SearchCriteriaSettings.propTypes = {
  handleChange: func,
  engine: enginePropTypes,
};

SearchCriteriaSettings.defaultProps = {
  handleChange: Function.prototype,
  engine: null,
};

export default SearchCriteriaSettings;
