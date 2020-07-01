import { call, put, takeLatest } from 'redux-saga/effects';
import { prop } from 'ramda';

import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import {
  SAVE_CREATE_SCOPE_ERROR,
  SAVE_CREATE_SCOPE_REQUEST,
  SAVE_CREATE_SCOPE_SUCCESS,
} from '../../components/ScopeForm/actions';
import clientApi from '../../client-api';

export function* saveScope({ payload }) {
  const { scope } = payload;
  if (!scope) return null;

  yield put({ type: PENDING_REQUEST });

  try {
    yield call(clientApi().saveCreateScope, { ...scope, scopeName: prop('name', scope) });

    yield put({ type: RESET_PENDING_REQUEST });
    yield put({ type: SAVE_CREATE_SCOPE_SUCCESS });
  } catch (error) {
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({
      type: SAVE_CREATE_SCOPE_ERROR,
      error: { errorMessage: "Erreur d'enregistrement de la gamme" },
    });
  }

  return true;
}

export default [takeLatest(SAVE_CREATE_SCOPE_REQUEST, saveScope)];
