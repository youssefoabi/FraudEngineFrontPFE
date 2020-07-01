import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { EDIT_ENGINE_REQUEST } from '../../components/EngineForm/actions';

export default function useSaveEditEngine() {
  const dispatch = useDispatch();

  const saveEditEngine = useCallback(engine => dispatch({ type: EDIT_ENGINE_REQUEST, payload: { engine } }), [
    dispatch,
  ]);

  return { saveEditEngine };
}
