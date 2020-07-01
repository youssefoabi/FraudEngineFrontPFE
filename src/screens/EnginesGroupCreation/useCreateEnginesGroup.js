import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CREATE_ENGINESGROUP_REQUEST } from '../../components/EnginesGroupForm/actions';

export default function useCreateEnginesGroup() {
  const dispatch = useDispatch();

  const createEnginesGroup = useCallback(
    enginesGroup => dispatch({ type: CREATE_ENGINESGROUP_REQUEST, payload: { enginesGroup } }),
    [dispatch],
  );

  return { createEnginesGroup };
}
