import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { SAVE_CREATE_SCOPE_REQUEST } from '../../components/ScopeForm/actions';

export default function useSaveCreateScope() {
  const dispatch = useDispatch();

  const saveCreateScope = useCallback(
    scope => dispatch({ type: SAVE_CREATE_SCOPE_REQUEST, payload: { scope } }),
    [dispatch],
  );

  return { saveCreateScope };
}
