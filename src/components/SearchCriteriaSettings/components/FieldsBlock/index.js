import { DataEdit, GridItem } from '@cdiscount/backoffice-ui';
import { func, number, shape } from 'prop-types';
import { Grid } from '@material-ui/core';
import { isNil, pathOr } from 'ramda';
import React from 'react';

import { ActivateFieldsConfig, PlaceholderConfig, typesOptions } from './config';
import useFields from './useFields';

const FieldsBlock = ({ engine, handleChange, fieldId }) => {
  const { handleFieldsChange, handleChangeType, inputFields } = useFields({
    engine,
    handleChange,
    fieldId,
  });

  const currentInputField = pathOr(null, [fieldId], inputFields);
  if (isNil(fieldId)) return null;

  return (
    <GridItem title={`Champ de saisie ${fieldId + 1}`}>
      <Grid item xs={12} md={12} lg={12}>
        <DataEdit fields={ActivateFieldsConfig} values={currentInputField} onChange={handleFieldsChange} />
        <DataEdit
          fields={[
            {
              columns: 6,
              id: `type`,
              type: 'select',
              label: 'Type',
              selectProps: {
                options: typesOptions,
              },
            },
          ]}
          values={currentInputField}
          onChange={handleChangeType}
        />
        <br />
        <DataEdit fields={PlaceholderConfig} values={currentInputField} onChange={handleFieldsChange} />
      </Grid>
    </GridItem>
  );
};

FieldsBlock.propTypes = {
  engine: shape({}),
  handleChange: func,
  fieldId: number,
};

FieldsBlock.defaultProps = {
  engine: null,
  handleChange: Function.Prototype,
  fieldId: null,
};

export default FieldsBlock;
