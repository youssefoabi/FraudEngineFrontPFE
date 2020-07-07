import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CREATE_RULE_REQUEST } from '../../components/RuleForm/actions';

export default function useCreateRule() {
  const dispatch = useDispatch();

  const createRule = useCallback(rule => dispatch({ type: CREATE_RULE_REQUEST, payload: { rule } }), [
    dispatch,
  ]);

  return { createRule };
}
