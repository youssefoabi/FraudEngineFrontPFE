import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { EDIT_RULE_REQUEST } from '../../components/RuleForm/actions';

export default function useSaveEditRule() {
  const dispatch = useDispatch();

  const saveEditRule = useCallback(rule => dispatch({ type: EDIT_RULE_REQUEST, payload: { rule } }), [
    dispatch,
  ]);

  return { saveEditRule };
}
