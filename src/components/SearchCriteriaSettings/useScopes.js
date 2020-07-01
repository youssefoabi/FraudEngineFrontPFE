import { isEmpty, isNil, map } from 'ramda';
import { useMemo } from 'react';

import useScopes from '../../screens/ScopesManagement/useScopes';

const useScopesSearchCriteriaSettings = () => {
  const { scopes } = useScopes();
  const mapScope = scope => {
    if (isNil(scope) || isEmpty(scope)) return null;

    const { name, id } = scope;

    return { value: { ...scope, scopeId: id }, label: name };
  };

  const scopesSelect = useMemo(() => map(mapScope, scopes), [scopes]);

  return { scopes: scopesSelect };
};

export default useScopesSearchCriteriaSettings;
