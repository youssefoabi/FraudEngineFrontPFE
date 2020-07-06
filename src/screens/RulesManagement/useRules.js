import { path, pipe, values } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { FETCH_RULES } from '../../components/RulesDataGrid/actions';

export default function useRules() {
  const rules = useSelector(pipe(path(['entities', 'rules', 'byId']), values));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_RULES });
  }, [dispatch]);

  return { rules };
}
