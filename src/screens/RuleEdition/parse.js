import { isNil, map, pathOr } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

const toTimestamp = date => (date ? Number(new Date(date)) : null);

const parseRule = rule => {
  if (isNil(rule)) return null;

  const {
    id,
    name,
    description,
    isValidated,
    isActivated,
    priority,
    validatedBy,
    editedBy,
    comment,
    version,
    editedAction,
    criteriaValues,
    simulations,
    createdAt,
    modifiedAt,
  } = rule;

  const mapCriteriaValues = allCriteriaValues => {
    if (isNilOrEmpty(allCriteriaValues)) return null;

    return map(criteriaValue => {
      const operator = pathOr(null, ['operator'], criteriaValue);
      return { ...(criteriaValue || {}), operator: { label: operator, value: operator } };
    }, allCriteriaValues);
  };

  return {
    id,
    name,
    description,
    isValidated,
    isActivated,
    priority,
    validatedBy,
    editedBy,
    comment,
    version,
    editedAction,
    criteriaValues: mapCriteriaValues(criteriaValues),
    simulations,
    createdAt,

    modifiedAt: toTimestamp(modifiedAt),
  };
};
export default parseRule;
