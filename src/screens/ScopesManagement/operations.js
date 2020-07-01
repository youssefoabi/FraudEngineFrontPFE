import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { path, pathOr, pipe } from 'ramda';

import {
  DELETE_SCOPES_ERROR,
  DELETE_SCOPES_REQUEST,
  DELETE_SCOPES_SUCCESS,
  FETCH_SCOPES,
  SET_SCOPES,
  SET_SCOPES_SELECTED,
} from '../../components/ScopesDataGrid/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';
import parse from './parse';

export const parseResult = pipe(pathOr([], ['data']), parse);

export function* fetchScopes() {
  const result = yield call(clientApi().getScopes);

  const scopes = parseResult(result);

  yield put({ type: SET_SCOPES, payload: scopes });

  yield put({ type: SET_SCOPES_SELECTED, payload: [] });
}

export function* deleteScope(id) {
  try {
    yield call(clientApi().deleteScope, id);
  } catch (error) {
    const name = yield select(path(['entities', 'scopes', 'byId', id, 'name']));

    yield put({
      type: DELETE_SCOPES_ERROR,
      error: { errorMessage: `Echec de suppression de la gamme ${name}` },
    });
    return false;
  }
  return true;
}

export function* deleteScopes() {
  const selected = yield select(path(['navigation', 'scopes', 'selected']));

  yield put({ type: PENDING_REQUEST });

  if (selected) {
    if (!(yield all(selected.map(deleteScope))).includes(false)) {
      yield put({ type: DELETE_SCOPES_SUCCESS });
    }
  }
  yield put({ type: RESET_PENDING_REQUEST });
  yield call(fetchScopes);
}

export default [takeLatest(FETCH_SCOPES, fetchScopes), takeLatest(DELETE_SCOPES_REQUEST, deleteScopes)];
