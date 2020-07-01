import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { PREVIEW_ENGINE } from '../../components/EngineForm/actions';

export default function usePreviewEngine() {
  const dispatch = useDispatch();

  const previewEngine = useCallback(id => dispatch({ type: PREVIEW_ENGINE, payload: { id } }), [dispatch]);

  return { previewEngine };
}
