import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { SAVE_EDIT_SCOPE_REQUEST } from '../../components/ScopeForm/actions';

export default function useSaveEditScope() {
  const dispatch = useDispatch();

  const saveEditScope = useCallback(
    scope => dispatch({ type: SAVE_EDIT_SCOPE_REQUEST, payload: { scope } }),
    [dispatch],
  );

  return { saveEditScope };
}
