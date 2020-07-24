import { isEmpty, isNil, map, pathOr } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import { useCallback, useMemo } from 'react';

import useCriteria from '../../screens/CriteriaManagement/useCriteria';

export default function useCriteriaSettings({ rule }) {
  const ruleCriteriaValues = pathOr([], ['criteriaValues'], rule);

  const { criteria: allCriteria } = useCriteria();

  const mapCriterion = criterion => {
    if (isNilOrEmpty(criterion)) return null;

    const { code, explanation } = criterion;

    if (isNil(code)) return null;

    return { value: criterion, label: explanation };
  };

  const mapCriteria = useCallback(allcriteria => {
    if (isNil(allcriteria) || isEmpty(allcriteria)) return null;

    return map(mapCriterion, allcriteria);
  }, []);

  const mappedCriteria = useMemo(() => mapCriteria(allCriteria), [allCriteria, mapCriteria]);

  return {
    criteria: ruleCriteriaValues,
    allCriteria: mappedCriteria,
    mapCriteria,
  };
}
