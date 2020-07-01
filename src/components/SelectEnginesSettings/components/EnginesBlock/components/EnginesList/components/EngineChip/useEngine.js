import { dissoc, pathOr, prop } from 'ramda';

const useEngine = ({ engineId, handleChange, enginesGroup }) => {
  const { engines: enginesGroupEngines, currentEngine } = enginesGroup || {};
  const engine = pathOr({}, [engineId], enginesGroupEngines);
  const idCurrentEngine = pathOr({}, ['engineId'], currentEngine);

  const onDelete = index => {
    handleChange({ id: 'engines', value: dissoc(index, enginesGroupEngines) });
    if (index === idCurrentEngine) handleChange({ id: 'currentEngine', value: null });
  };

  const onClick = clickedEngine => handleChange({ id: 'currentEngine', value: clickedEngine });

  const isEnabled = prop('isEnable', engine);

  return {
    onDelete,
    onClick,
    engine,
    isEnabled,
    idCurrentEngine,
  };
};

export default useEngine;
