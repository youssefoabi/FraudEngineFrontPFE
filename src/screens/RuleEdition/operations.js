import { call, put, takeLatest } from 'redux-saga/effects';

import { EDIT_RULE_ERROR, EDIT_RULE_REQUEST, EDIT_RULE_SUCCESS } from '../../components/RuleForm/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';
import parse from '../RuleCreation/parse';

export function* saveRule({ payload }) {
  yield put({ type: PENDING_REQUEST });

  try {
    const { rule } = payload;
    if (!rule) return null;

    yield call(clientApi().updateRule, parse(rule));
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({ type: EDIT_RULE_SUCCESS });
  } catch (error) {
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({
      type: EDIT_RULE_ERROR,
      error: { errorMessage: "Erreur d'enregistrement de moteur de recherche" },
    });
  }

  return true;
}

export default [takeLatest(EDIT_RULE_REQUEST, saveRule)];
