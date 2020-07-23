import { format } from 'date-fns';
import { isNil, map, pathOr, pipe } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

const parse = rule => {
  if (isNil(rule)) return null;

  const {
    id,
    name,
    description,
    isValidated,
    isActivated,
    priority,
    comment,
    version,
    editedAction,
    criteriaValues,
    simulations,
    createdAt,
  } = rule;

  const mapCriteriaValues = allCriteriaValues => {
    if (isNilOrEmpty(allCriteriaValues)) return null;

    return pipe(
      map(criteriaValue => {
        const operator = pathOr(null, ['operator', 'value'], criteriaValue);
        const label = pathOr(null, ['criterion', 'label'], criteriaValue);
        const value = pathOr(null, ['criterion', 'value', 'code'], criteriaValue);
        return {
          ...(criteriaValue || {}),
          operator,
          criterion: { label, value },
        };
      }),
    )(allCriteriaValues);
  };

  return {
    id,
    name,
    description,
    isValidated,
    isActivated,
    priority,
    validatedBy: 'Youssef',
    editedBy: 'Youssef',
    comment,
    version,
    editedAction,
    criteriaValues: mapCriteriaValues(criteriaValues),
    simulations,
    createdAt,
    modifiedAt: format(new Date(), 'yyyy-MM-dd'),
  };
};
export default parse;
