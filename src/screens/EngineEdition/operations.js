import { call, put, takeLatest } from 'redux-saga/effects';

import {
  EDIT_ENGINE_ERROR,
  EDIT_ENGINE_REQUEST,
  EDIT_ENGINE_SUCCESS,
} from '../../components/EngineForm/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';
import parse from '../EngineCreation/parse';

export function* saveEngine({ payload }) {
  yield put({ type: PENDING_REQUEST });

  try {
    const { engine } = payload;
    if (!engine) return null;

    yield call(clientApi().updateEngine, parse(engine));
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({ type: EDIT_ENGINE_SUCCESS });
  } catch (error) {
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({
      type: EDIT_ENGINE_ERROR,
      error: { errorMessage: "Erreur d'enregistrement de moteur de recherche" },
    });
  }

  return true;
}

export default [takeLatest(EDIT_ENGINE_REQUEST, saveEngine)];
