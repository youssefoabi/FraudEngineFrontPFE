import { find, isEmpty, pathOr, prop, remove, update } from 'ramda';
import { useCallback, useEffect, useMemo, useState } from 'react';

import useParameters from '../ParametersBlock/useParameters';

export default function useAttributes({ attributes, handleChange, engine, currentInputField }) {
  const [key, setKey] = useState('');
  const [externalCodeId, setExternalCodeId] = useState('');

  const { mapParameters } = useParameters({ handleChange });
  const scopeId = pathOr(null, ['currentScope', 'scopeId'], engine);
  const engineParameters = pathOr([], ['parameters'], currentInputField);

  const mappedAttributes = useMemo(() => mapParameters(attributes), [attributes, mapParameters]);

  const onDelete = index => () =>
    handleChange({ id: 'parameters', value: remove(index, 1, engineParameters) });

  const onChangeExternalCodeId = index => e =>
    handleChange({
      id: 'parameters',
      value: update(
        index,
        { ...(attributes[index] || {}), externalCodeId: pathOr('', ['value', 'value', 'externalCode'], e) },
        attributes,
      ),
    });

  const addAttribute = useCallback(() => {
    if (isEmpty(key) || isEmpty(externalCodeId)) return;

    const newItem = {
      key: pathOr(null, ['label'], key),
      externalCodeId: pathOr(null, ['value', 'externalCode'], externalCodeId),
      scopeId,
    };

    const parameter =
      find(
        param =>
          prop('key', newItem) === prop('key', param) &&
          prop('externalCodeId', newItem) === prop('externalCodeId', param) &&
          scopeId === prop('scopeId', param),
        engineParameters,
      ) || null;

    const isNewItem = parameter === null;
    if (!isNewItem) return;

    handleChange({ id: 'parameters', value: [...engineParameters, newItem] });
    setKey('');
    setExternalCodeId('');
  }, [key, externalCodeId, scopeId, engineParameters, handleChange]);

  useEffect(() => {
    addAttribute();
  }, [key, externalCodeId, addAttribute]);

  const onHandleKey = e => setKey(prop('value', e));
  const onHandleExternalKey = e => setExternalCodeId(prop('value', e));

  const onHandleAttribute = index => e =>
    handleChange({
      id: 'parameters',
      value: update(
        index,
        { ...attributes[index], key: pathOr('', ['value', 'value', 'key'], e) },
        attributes,
      ),
    });

  return {
    mappedAttributes,
    key,
    externalCodeId,
    addAttribute,
    onChangeExternalCodeId,
    onDelete,
    onHandleKey,
    onHandleExternalKey,
    onHandleAttribute,
  };
}
