import { dissoc, findIndex, flatten, isNil, map, pathOr, pipe, prop, values } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import { useEffect, useMemo, useState } from 'react';

import clientApi from '../../../../../../../../client-api';

const emptyObject = {};

const useScope = ({ id, handleChange, engine }) => {
  const { scopes: engineScopes, currentScope } = engine || {};
  const [scope, setScope] = useState({});
  const scopeEngine = pathOr({}, [id], engineScopes);
  const idCurrentScope = pathOr({}, ['scopeId'], currentScope);

  useEffect(() => {
    if (isNil(id)) return;

    clientApi()
      .getScope(id)
      .then(prop('data'))
      .then(scopeData => {
        const parameters = pathOr({}, ['parameters'], scopeData);
        setScope({ parameters, ...scopeEngine });
      });
  }, [id, scopeEngine]);

  const onDelete = index => {
    handleChange({ id: 'scopes', value: dissoc(index, engineScopes) });
    if (index === idCurrentScope) handleChange({ id: 'currentScope', value: null });
  };
  const onClick = clickedScope => handleChange({ id: 'currentScope', value: clickedScope });

  const { inputFields } = engine || emptyObject;

  const hasMissingParameters = useMemo(() => {
    if (isNilOrEmpty(inputFields) || isNilOrEmpty(scope)) return true;

    const { parameters: scopeParameters, scopeId } = scope;
    if (isNilOrEmpty(scopeParameters)) return false;

    const engineParameters = pipe(values, map(prop('parameters')), flatten)(inputFields);

    if (isNilOrEmpty(engineParameters)) return true;

    const firstDisabledPrameter = findIndex(scopeParam => {
      if (isNilOrEmpty(scopeParam)) return false;

      const { key } = scopeParam;

      return (
        findIndex(
          enginePram => key === prop('key', enginePram) && scopeId === prop('scopeId', enginePram),
          engineParameters,
        ) === -1
      );
    })(scopeParameters);

    return firstDisabledPrameter !== -1;
  }, [scope, inputFields]);

  const isEnabled = prop('isEnable', scopeEngine);

  return {
    onDelete,
    onClick,
    scope,
    isEnabled,
    hasMissingParameters,
    idCurrentScope,
  };
};

export default useScope;
