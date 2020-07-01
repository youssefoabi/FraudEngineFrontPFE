import { DataEdit, GridItem } from '@cdiscount/backoffice-ui';
import { func, number, shape, string } from 'prop-types';
import React from 'react';

import { config } from './config';

const ScopeDataEdit = ({ scope, handleChange }) => (
  <GridItem title="Caractéristiques de la gamme">
    <DataEdit fields={config} values={scope} onChange={handleChange} />
  </GridItem>
);

export const scopeShape = shape({
  id: number,
  modifiedAt: number,
  name: string,
  urlTemplate: string,
});

ScopeDataEdit.propTypes = {
  handleChange: func,
  scope: scopeShape,
};

ScopeDataEdit.defaultProps = {
  handleChange: Function.prototype,
  scope: null,
};

export default ScopeDataEdit;
