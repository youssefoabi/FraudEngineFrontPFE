import { anyPass, equals, filter, isEmpty, isNil, last, map, pathOr, prop, propEq } from 'ramda';
import { useCallback, useEffect, useMemo, useState } from 'react';

import clientApi from '../../../../client-api';
import useFields from '../FieldsBlock/useFields';

export default function useParameters({ handleChange, engine, fieldId }) {
  const [allPrameters, setParameters] = useState([]);

  const { inputFields, currentScope } = engine || {};
  const currentType = pathOr({}, ['inputFields', fieldId, 'type'], engine);

  const currentTypeValue = pathOr(null, ['value'], currentType);
  const { handleFieldsChange } = useFields({ handleChange, engine, fieldId });

  const currentInputField = pathOr(null, [fieldId], inputFields);
  const { scopeId } = currentScope || {};
  const scopeLabel = pathOr({}, [scopeId, 'name'], prop('scopes', engine));
  const engineParameters = pathOr([], ['parameters'], currentInputField);
  const isAutoCompletion = currentTypeValue === 'Address';
  const isValidType =
    !isNil(currentTypeValue) &&
    !isNil(currentScope) &&
    (isAutoCompletion || anyPass([equals('Alphanumeric'), equals('Numeric')])(currentTypeValue));

  useEffect(() => {
    if (isNil(scopeId)) return;

    clientApi()
      .getScope(scopeId)
      .then(prop('data'))
      .then(scope => {
        const newParams = pathOr([], ['parameters'], scope);
        setParameters(newParams);
      });
  }, [scopeId]);

  const addKey = e => {
    const { key } = pathOr({}, ['value', 'value'], e);
    if (isEmpty(key)) return;

    const newParameters = engineParameters.filter(
      param => prop('scopeId', param) !== prop('scopeId', currentScope),
    );

    const newItem = {
      label: key,
      externalCodeId: 0,
      key,
      scopeId,
    };

    handleChange({
      id: 'inputFields',
      value: {
        ...inputFields,
        [fieldId]: { ...currentInputField, parameters: [...newParameters, newItem] },
      },
    });
  };

  const mapParameter = parameter => {
    if (isNil(parameter) || isEmpty(parameter)) return null;

    const { key } = parameter;
    if (isNil(key)) return null;

    return { value: parameter, label: key };
  };

  const mapParameters = useCallback(allParameters => {
    if (isNil(allParameters) || isEmpty(allParameters)) return null;

    return map(mapParameter, allParameters);
  }, []);

  const mappedParameters = useMemo(() => mapParameters(allPrameters), [allPrameters, mapParameters]);
  const currentScopeId = prop('scopeId', currentScope);
  const scopesParameters = useMemo(() => filter(propEq('scopeId', currentScopeId), engineParameters || []), [
    engineParameters,
    currentScopeId,
  ]);

  const parameter = last(scopesParameters) || null;
  const key = parameter !== null ? { label: pathOr(null, ['key'], parameter) } : null;

  return {
    isAutoCompletion,
    parameters: scopesParameters,
    handleFieldsChange,
    isValidType,
    scopeLabel,
    allParameters: mappedParameters,
    currentInputField,
    addKey,
    mapParameters,
    currentScopeId,
    key,
  };
}
