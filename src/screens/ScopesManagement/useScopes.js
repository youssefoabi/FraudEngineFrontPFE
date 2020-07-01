import { path, pipe, values } from 'ramda';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { FETCH_SCOPES } from '../../components/ScopesDataGrid/actions';

export default function useScopes() {
  const scopes = useSelector(pipe(path(['entities', 'scopes', 'byId']), values));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_SCOPES });
  }, [dispatch]);

  return { scopes };
}
