import { isEmpty, isNil, map, pathOr, prop } from 'ramda';
import { useCallback, useEffect, useMemo, useState } from 'react';

import clientApi from '../../../../client-api';

export default function useUrl({ engine, handleChange }) {
  const [scope, setScope] = useState([]);

  const { scopes, currentScope } = engine || {};

  const scopeId = pathOr({}, ['scopeId'], currentScope);
  const scopeLabel = pathOr('', [scopeId, 'name'], scopes);
  const { parameters: allParameters, urlTemplate: scopeUrl } = scope || {};

  useEffect(() => {
    if (isNil(scopeId)) return;

    clientApi()
      .getScope(scopeId)
      .then(prop('data'))
      .then(scopeById => {
        setScope(scopeById);
      });
  }, [scopeId]);

  const mapParameter = parameter => {
    if (isNil(parameter) || isEmpty(parameter)) return null;

    const { key } = parameter;
    return key;
  };

  const mapParameters = useCallback(parameters => {
    if (isNil(parameters) || isEmpty(parameters)) return null;

    return map(mapParameter, parameters);
  }, []);

  const mappedParameters = useMemo(() => mapParameters(allParameters), [allParameters, mapParameters]);

  const handleScopeChange = ({ id, value }) => {
    handleChange({
      id: 'scopes',
      value: { ...(scopes || {}), [scopeId]: { ...scopes[scopeId], [id]: value } },
    });
  };

  return {
    scopeUrl,
    scopeId,
    scopeLabel,
    allParameters: mappedParameters,
    handleScopeChange,
  };
}
