import { fromPairs, pipe, prop, sortBy, values } from 'ramda';
import { func, shape } from 'prop-types';
import { isNilOrEmpty } from 'ramda-adjunct';
import React, { useMemo } from 'react';

import DraggableList from '../../../../../DragableList';
import ScopeChip from './components/ScopeChip';

const ScopesList = ({ engine, handleChange }) => {
  const { scopes } = engine || {};
  const items = useMemo(() => pipe(values, sortBy(prop('order')))(scopes), [scopes]);

  const reorderScope = (scope, index) => {
    if (isNilOrEmpty(scope)) return null;

    const { scopeId } = scope;
    return [scopeId, { ...(scopes[scopeId] || {}), order: index }];
  };

  const onOrderChange = newScopesOrder => {
    if (isNilOrEmpty(newScopesOrder)) return;

    const newScopes = newScopesOrder.map(reorderScope);
    handleChange({ id: 'scopes', value: fromPairs(newScopes) });
  };

  const renderScope = item => {
    if (isNilOrEmpty(item)) return null;

    const { item: currentScope } = item;
    if (isNilOrEmpty(currentScope)) return null;

    return <ScopeChip id={prop('scopeId', currentScope)} engine={engine} handleChange={handleChange} />;
  };

  if (isNilOrEmpty(items)) return null;

  return (
    <DraggableList
      droppableId="scopes"
      onOrderChange={onOrderChange}
      data={items}
      renderItem={renderScope}
      keyExtractor={prop('scopeId')}
    />
  );
};

ScopesList.propTypes = {
  engine: shape({}),
  handleChange: func,
};

ScopesList.defaultProps = {
  engine: null,
  handleChange: Function.Prototype,
};

export default ScopesList;
