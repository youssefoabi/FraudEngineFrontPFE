import { isNil, map, pathOr } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';

const parseCriterion = criterion => {
  if (isNil(criterion)) return null;

  const { id, code, explanation } = criterion;
  const eligibleOperators = pathOr([], ['eligibleOperators'], criterion);

  const mapEligibleOperators = allEligibleOperators => {
    if (isNilOrEmpty(allEligibleOperators)) return null;

    return map(
      eligibleOperator => ({ label: eligibleOperator, value: eligibleOperator }),
      allEligibleOperators,
    );
  };

  return {
    previousId: id,
    id,
    code,
    explanation,
    eligibleOperators: mapEligibleOperators(eligibleOperators),
  };
};
export default parseCriterion;
