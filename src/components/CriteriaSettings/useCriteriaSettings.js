import { isEmpty, isNil, map, pathOr, prop } from 'ramda';
import { isNilOrEmpty } from 'ramda-adjunct';
import { useCallback, useMemo, useState } from 'react';

import clientApi from '../../client-api';

export default function useCriteriaSettings({ rule }) {
  const [allCriteria, setCriteria] = useState([]);

  const ruleCriteriaValues = pathOr([], ['criteriaValues'], rule);

  clientApi()
    .getCriteria()
    .then(prop('data'))
    .then(criteria => {
      setCriteria(criteria);
    });

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
