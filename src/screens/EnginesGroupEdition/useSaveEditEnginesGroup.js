import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { EDIT_ENGINESGROUP_REQUEST } from '../../components/EnginesGroupForm/actions';

export default function useSaveEditEnginesGroup() {
  const dispatch = useDispatch();

  const saveEditEnginesGroup = useCallback(
    enginesGroup => dispatch({ type: EDIT_ENGINESGROUP_REQUEST, payload: { enginesGroup } }),
    [dispatch],
  );

  return { saveEditEnginesGroup };
}
