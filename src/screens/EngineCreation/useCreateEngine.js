import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CREATE_ENGINE_REQUEST } from '../../components/EngineForm/actions';

export default function useCreateEngine() {
  const dispatch = useDispatch();

  const createEngine = useCallback(engine => dispatch({ type: CREATE_ENGINE_REQUEST, payload: { engine } }), [
    dispatch,
  ]);

  return { createEngine };
}
