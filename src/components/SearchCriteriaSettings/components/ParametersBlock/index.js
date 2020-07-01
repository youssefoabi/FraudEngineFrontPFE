import { Field } from '@cdiscount/backoffice-ui/dist/index-42c15b02';
import { func, number, shape } from 'prop-types';
import { Grid } from '@material-ui/core';
import { GridItem } from '@cdiscount/backoffice-ui';
import React from 'react';

import AttributesList from '../AttributesList';
import useParameters from './useParameters';

const ParametersBlock = ({ engine, handleChange, fieldId }) => {
  const {
    isAutoCompletion,
    parameters,
    handleFieldsChange,
    isValidType,
    scopeLabel,
    allParameters,
    currentInputField,
    addKey,
    key,
  } = useParameters({
    handleChange,
    engine,
    fieldId,
  });

  if (!isValidType) return null;

  return (
    <GridItem title={`${scopeLabel || ''} : Champ de saisie ${fieldId + 1}`}>
      <Grid item xs={12} md={12} lg={12}>
        {isAutoCompletion ? (
          <AttributesList
            allParameters={allParameters}
            attributes={parameters}
            handleChange={handleFieldsChange}
            engine={engine}
            currentInputField={currentInputField}
          />
        ) : (
          <Grid item xs={6} md={6} lg={6}>
            <Field
              id="parameters"
              label="Parametre lie dans l'url de recherche"
              type="select"
              onChange={addKey}
              value={key}
              selectProps={{ options: allParameters }}
            />
          </Grid>
        )}
      </Grid>
    </GridItem>
  );
};

ParametersBlock.propTypes = {
  engine: shape({}),
  handleChange: func,
  fieldId: number,
};

ParametersBlock.defaultProps = {
  engine: null,
  handleChange: Function.Prototype,
  fieldId: null,
};

export default ParametersBlock;
