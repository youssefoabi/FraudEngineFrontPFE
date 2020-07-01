import { findIndex, flatten, map, pipe, prop, values } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import { useMemo } from 'react';

const emptyObject = {};

const useParameter = ({ scopeId, engine, parameter }) => {
  const { inputFields } = engine || emptyObject;

  const isLinkedParameter = useMemo(() => {
    if (isNilOrEmpty(inputFields)) return false;

    const engineParameters = pipe(values, map(prop('parameters')), flatten)(inputFields);

    if (isNilOrEmpty(engineParameters)) return false;

    const foundParameter =
      findIndex(
        enginePram => parameter === prop('key', enginePram) && scopeId === prop('scopeId', enginePram),
      )(engineParameters) !== -1;

    return foundParameter;
  }, [inputFields, scopeId, parameter]);

  return {
    isLinkedParameter,
  };
};

export default useParameter;
