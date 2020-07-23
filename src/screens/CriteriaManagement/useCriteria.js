import { path, pipe, values } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { FETCH_CRITERIA } from '../../components/CriteriaDataGrid/actions';

export default function useCriteria() {
  const criteria = useSelector(pipe(path(['entities', 'criteria', 'byId']), values));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_CRITERIA });
  }, [dispatch]);

  return { criteria };
}
