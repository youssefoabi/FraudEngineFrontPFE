import { call, put, takeLatest } from 'redux-saga/effects';
import { isNilOrEmpty } from 'ramda-adjunct';

import {
  CREATE_RULE_ERROR,
  CREATE_RULE_REQUEST,
  CREATE_RULE_SUCCESS,
} from '../../components/RuleForm/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';
import parse from './parse';

export function* createRule({ payload }) {
  yield put({ type: PENDING_REQUEST });

  try {
    const { rule } = payload;
    if (isNilOrEmpty(rule)) return null;

    yield call(clientApi().createRule, parse(rule));

    yield put({ type: RESET_PENDING_REQUEST });
    yield put({ type: CREATE_RULE_SUCCESS });
  } catch (error) {
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({
      type: CREATE_RULE_ERROR,
      error: { errorMessage: "Erreur d'enregistrement de la règle" },
    });
  }

  return true;
}

export default [takeLatest(CREATE_RULE_REQUEST, createRule)];
