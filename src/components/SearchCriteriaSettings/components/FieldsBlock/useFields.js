import { pathOr, prop } from 'ramda';

const useFields = ({ handleChange, engine, fieldId }) => {
  const { currentScope } = engine || {};
  const inputFields = pathOr({}, ['inputFields'], engine);
  const currentInputField = pathOr({}, [fieldId], inputFields);

  const handleChangeType = ({ value }) => {
    const type = pathOr(null, ['value'], value);
    const currentType = pathOr({}, [fieldId, 'type', 'value'], inputFields);

    if (type !== currentType) {
      const parameters = pathOr([], ['parameters'], currentInputField);
      const newParameters = parameters.filter(
        param => prop('scopeId', param) !== prop('scopeId', currentScope),
      );
      handleChange({
        id: 'inputFields',
        value: {
          ...inputFields,
          [fieldId]: {
            ...currentInputField,
            type: value,
            parameters: newParameters,
          },
        },
      });
    }
  };

  const handleFieldsChange = ({ id, value }) => {
    handleChange({
      id: 'inputFields',
      value: { ...inputFields, [fieldId]: { ...currentInputField, [id]: value } },
    });
  };

  return { handleFieldsChange, inputFields, currentScope, handleChangeType };
};

export default useFields;
