import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { EDIT_CRITERION_REQUEST } from '../../components/CriterionForm/actions';

export default function useSaveEditCriterion() {
  const dispatch = useDispatch();

  const saveEditCriterion = useCallback(
    criterion => dispatch({ type: EDIT_CRITERION_REQUEST, payload: { criterion } }),
    [dispatch],
  );

  return { saveEditCriterion };
}
