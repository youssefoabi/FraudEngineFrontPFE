import { path, pipe, values } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { FETCH_ENGINES } from '../../components/EnginesDataGrid/actions';

export default function useEngines() {
  const engines = useSelector(pipe(path(['entities', 'engines', 'byId']), values));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_ENGINES });
  }, [dispatch]);

  return { engines };
}
