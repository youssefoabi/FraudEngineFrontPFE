import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CREATE_CRITERION_REQUEST } from '../../components/CriterionForm/actions';

export default function useCreateCriterion() {
  const dispatch = useDispatch();

  const createCriterion = useCallback(
    criterion => dispatch({ type: CREATE_CRITERION_REQUEST, payload: { criterion } }),
    [dispatch],
  );

  return { createCriterion };
}
