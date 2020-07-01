import { filter, keys, map, pathOr } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import { useCallback, useMemo } from 'react';

import useEngines from '../../../../screens/EnginesManagement/useEngines';

const useEnginesList = ({ handleChange, enginesGroup }) => {
  const { engines: allEngines } = useEngines();
  const { engines: enginesGroupEngines, selectedEngine } = enginesGroup || {};

  const handleSelectEngine = ({ value }) => {
    const engine = pathOr({}, ['value'], value);
    const { name } = engine;
    handleChange({ id: 'selectedEngine', value: { ...engine, label: name } });
  };

  const addEngine = () => {
    if (isNilOrEmpty(selectedEngine)) return;

    const engineId = pathOr(null, ['id'], selectedEngine);

    handleChange({
      id: 'engines',
      value: {
        ...(enginesGroupEngines || {}),
        [engineId]: {
          engineId,
          engineName: pathOr('', ['name'], selectedEngine),
          order: keys(enginesGroupEngines).length,
        },
      },
    });
  };

  const mapEngine = useCallback(
    engine => {
      if (isNilOrEmpty(engine)) return null;

      const { name, id } = engine;
      const findEngine = pathOr(null, [id], enginesGroupEngines);
      const isNewEngine = findEngine === null;
      if (!isNewEngine) return null;

      return { value: { ...engine, engineId: id }, label: name };
    },
    [enginesGroupEngines],
  );

  const enginesSelect = useMemo(() => {
    const mappedEngines = map(mapEngine, allEngines);

    return filter(engine => engine !== null, mappedEngines);
  }, [allEngines, mapEngine]);

  return {
    engines: enginesSelect,
    handleSelectEngine,
    addEngine,
  };
};

export default useEnginesList;
