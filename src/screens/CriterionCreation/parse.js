import { format } from 'date-fns';
import { isNil, map, pathOr } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

const parse = criterion => {
  if (isNil(criterion)) return null;

  const { id, code, explanation, createdAt } = criterion;
  const eligibleOperators = pathOr([], ['eligibleOperators'], criterion);

  const mapEligibleOperators = allEligibleOperators => {
    if (isNilOrEmpty(allEligibleOperators)) return null;

    return map(eligibleOperator => pathOr('', ['value'], eligibleOperator), allEligibleOperators);
  };

  return {
    id,
    code,
    explanation,
    eligibleOperators: mapEligibleOperators(eligibleOperators),
    createdAt,
    modifiedAt: format(new Date(), 'yyyy-MM-dd'),
  };
};
export default parse;
