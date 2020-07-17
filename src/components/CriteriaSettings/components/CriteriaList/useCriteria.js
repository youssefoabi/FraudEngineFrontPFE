import { isNilOrEmpty } from 'ramda-adjunct';
import { pathOr, prop, remove, update } from 'ramda';
import { useCallback, useState } from 'react';

export default function useCriteria({ criteria, handleChange }) {
  const [criterion, setCriterion] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState('');

  const onDelete = index => () => handleChange({ id: 'criteriaValues', value: remove(index, 1, criteria) });

  const addCriterion = useCallback(() => {
    if (isNilOrEmpty(criterion) || isNilOrEmpty(operator) || isNilOrEmpty(value)) return;

    const newItem = {
      criterion,
      operator,
      value,
    };

    handleChange({ id: 'criteriaValues', value: [...criteria, newItem] });
    setCriterion('');
    setOperator('');
    setValue('');
  }, [criteria, criterion, handleChange, operator, value]);

  const onHandleCriterion = e => setCriterion(prop('value', e));
  const onHandleOperator = e => setOperator(prop('value', e));
  const onHandleValue = e => setValue(pathOr('', ['target', 'value'], e));

  const onChangeOperator = index => e =>
    handleChange({
      id: 'criteriaValues',
      value: update(index, { ...(criteria[index] || {}), operator: prop('value', e) }, criteria),
    });

  const onChangeCriterion = index => e =>
    handleChange({
      id: 'criteriaValues',
      value: update(
        index,
        { ...(criteria[index] || {}), criterion: prop('value', e), operator: null, value: '' },
        criteria,
      ),
    });

  const onChangeValue = index => e =>
    handleChange({
      id: 'criteriaValues',
      value: update(
        index,
        { ...(criteria[index] || {}), value: pathOr('', ['target', 'value'], e) },
        criteria,
      ),
    });

  return {
    criterion,
    operator,
    value,
    onDelete,
    addCriterion,
    onChangeOperator,
    onChangeCriterion,
    onChangeValue,
    onHandleCriterion,
    onHandleOperator,
    onHandleValue,
  };
}
