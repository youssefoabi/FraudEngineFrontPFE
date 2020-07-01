import { fromPairs, pipe, prop, sortBy, values } from 'ramda';
import { func, shape } from 'prop-types';
import { isNilOrEmpty } from 'ramda-adjunct';
import React, { useMemo } from 'react';

import DraggableList from '../../../../../DragableList';
import EngineChip from './components/EngineChip';

const EnginesList = ({ enginesGroup, handleChange }) => {
  const { engines } = enginesGroup || {};
  const items = useMemo(() => pipe(values, sortBy(prop('order')))(engines), [engines]);

  const reorderEngine = (engine, index) => {
    if (isNilOrEmpty(engine)) return null;

    const { engineId } = engine;
    return [engineId, { ...(engines[engineId] || {}), order: index }];
  };

  const onOrderChange = newEnginesOrder => {
    if (isNilOrEmpty(newEnginesOrder)) return;

    const newEngines = newEnginesOrder.map(reorderEngine);
    handleChange({ id: 'engines', value: fromPairs(newEngines) });
  };

  const renderEngine = item => {
    if (isNilOrEmpty(item)) return null;

    const { item: currentEngine } = item;
    if (isNilOrEmpty(currentEngine)) return null;

    return (
      <EngineChip
        engineId={prop('engineId', currentEngine)}
        enginesGroup={enginesGroup}
        handleChange={handleChange}
      />
    );
  };

  if (isNilOrEmpty(items)) return null;

  return (
    <DraggableList
      droppableId="engines"
      onOrderChange={onOrderChange}
      data={items}
      renderItem={renderEngine}
      keyExtractor={prop('engineId')}
    />
  );
};

EnginesList.propTypes = {
  enginesGroup: shape({}),
  handleChange: func,
};

EnginesList.defaultProps = {
  enginesGroup: null,
  handleChange: Function.Prototype,
};

export default EnginesList;
