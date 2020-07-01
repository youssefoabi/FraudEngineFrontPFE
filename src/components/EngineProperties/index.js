import { DataEdit, GridItem } from '@cdiscount/backoffice-ui';
import { func, shape } from 'prop-types';
import { isNilOrEmpty } from 'ramda-adjunct';
import { pathOr } from 'ramda';
import React from 'react';

import { config } from './config';
import useEngineProperties from './useEngineProperties';

const EngineProperties = ({ enginesGroup, handleChange }) => {
  const { engineId, engineName, handleEngineChange } = useEngineProperties({
    enginesGroup,
    handleChange,
  });
  const engine = pathOr(null, ['engines', engineId], enginesGroup);
  const currentEngine = pathOr(null, ['currentEngine'], enginesGroup);

  if (isNilOrEmpty(currentEngine)) return null;

  return (
    <GridItem title={`Propriétés de l'onglet du moteur ${engineName || ''}`}>
      <DataEdit fields={config} values={engine} onChange={handleEngineChange} />
    </GridItem>
  );
};

EngineProperties.propTypes = {
  enginesGroup: shape({}),
  handleChange: func,
};

EngineProperties.defaultProps = {
  enginesGroup: null,
  handleChange: Function.Prototype,
};

export default EngineProperties;
