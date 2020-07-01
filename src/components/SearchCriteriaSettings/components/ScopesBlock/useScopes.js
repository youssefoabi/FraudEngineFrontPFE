import { filter, keys, map, pathOr } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import { useCallback, useMemo } from 'react';

import useScopes from '../../../../screens/ScopesManagement/useScopes';

const useScopesList = ({ handleChange, engine }) => {
  const { scopes: allScopes } = useScopes();
  const { scopes: engineScopes, selectedScope } = engine || {};

  const handleSelectScope = ({ value }) => {
    const scope = pathOr({}, ['value'], value);
    const { name } = scope;
    handleChange({ id: 'selectedScope', value: { ...scope, label: name } });
  };

  const addScope = () => {
    if (isNilOrEmpty(selectedScope)) return;

    const scopeId = pathOr(null, ['scopeId'], selectedScope);
    handleChange({
      id: 'scopes',
      value: {
        ...(engineScopes || {}),
        [scopeId]: { scopeId, name: pathOr('', ['name'], selectedScope), order: keys(engineScopes).length },
      },
    });
  };

  const mapScope = useCallback(
    scope => {
      if (isNilOrEmpty(scope)) return null;

      const { name, id } = scope;
      const findScope = pathOr(null, [id], engineScopes);
      const isNewScope = findScope === null;
      if (!isNewScope) return null;

      return { value: { ...scope, scopeId: id }, label: name };
    },
    [engineScopes],
  );

  const scopesSelect = useMemo(() => {
    const mappedScopes = map(mapScope, allScopes);

    return filter(scope => scope !== null, mappedScopes);
  }, [allScopes, mapScope]);

  return {
    scopes: scopesSelect,
    handleSelectScope,
    addScope,
  };
};

export default useScopesList;
