import { call, put, takeLatest } from 'redux-saga/effects';
import { isNilOrEmpty } from 'ramda-adjunct';

import {
  CREATE_ENGINE_ERROR,
  CREATE_ENGINE_REQUEST,
  CREATE_ENGINE_SUCCESS,
} from '../../components/EngineForm/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';
import parse from './parse';

export function* createEngine({ payload }) {
  yield put({ type: PENDING_REQUEST });

  try {
    const { engine } = payload;
    if (isNilOrEmpty(engine)) return null;

    yield call(clientApi().createEngine, parse(engine));

    yield put({ type: RESET_PENDING_REQUEST });
    yield put({ type: CREATE_ENGINE_SUCCESS });
  } catch (error) {
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({
      type: CREATE_ENGINE_ERROR,
      error: { errorMessage: "Erreur d'enregistrement du moteur de recherche" },
    });
  }

  return true;
}

export default [takeLatest(CREATE_ENGINE_REQUEST, createEngine)];
