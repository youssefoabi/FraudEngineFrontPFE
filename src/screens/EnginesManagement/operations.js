import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {
  contains,
  filter,
  isEmpty,
  isNil,
  join,
  length,
  map,
  path,
  pathOr,
  pipe,
  prop,
  propEq,
  values,
} from 'ramda';

import {
  DELETE_ENGINES_ERROR,
  DELETE_ENGINES_REQUEST,
  DELETE_ENGINES_SUCCESS,
  FETCH_ENGINES,
  FETCH_ENGINES_ERROR,
  SET_ENGINES,
  SET_ENGINES_SELECTED,
} from '../../components/EnginesDataGrid/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';

export const parseResult = pathOr([], ['data']);

export function* fetchEngines() {
  try {
    const result = yield call(clientApi().getEngines);

    const engines = parseResult(result);

    yield put({ type: SET_ENGINES, payload: engines });

    yield put({ type: SET_ENGINES_SELECTED, payload: [] });
  } catch (error) {
    yield put({ type: FETCH_ENGINES_ERROR, error });
  }
}

export function* deleteEngine(id) {
  try {
    yield call(clientApi().deleteEngine, id);
  } catch (error) {
    const name = yield select(path(['entities', 'engines', 'byId', id, 'name']));
    return { isSuccess: false, name, id };
  }

  return { isSuccess: true, id };
}

export function* deleteEngines() {
  yield put({ type: PENDING_REQUEST });

  try {
    const selected = yield select(path(['navigation', 'engines', 'selected']));

    if (selected) {
      const deletedEnginesState = yield all(map(id => call(deleteEngine, id), selected));
      const errors = pipe(filter(propEq('isSuccess', false)), map(prop('name')))(deletedEnginesState);

      const hasError = !isNil(errors) && !isEmpty(errors);
      const hasMoreThanOneError = hasError && length(errors) > 1;
      if (hasError)
        yield put({
          type: DELETE_ENGINES_ERROR,
          error: {
            errorMessage: `Echec de suppression d${hasMoreThanOneError ? 'es' : 'u'}  moteur${
              hasMoreThanOneError ? 's' : ''
            } ${join(',', errors)}`,
          },
        });

      const success = pipe(filter(propEq('isSuccess', true)), map(prop('id')))(deletedEnginesState);

      if (isNil(success) || isEmpty(success)) {
        yield put({ type: RESET_PENDING_REQUEST });
        return null;
      }

      const engines = yield select(pipe(path(['entities', 'engines', 'byId']), values));
      const newEngines = !isNil(engines) && engines.filter(engine => !contains(prop('id', engine), success));
      yield put({ type: SET_ENGINES, payload: newEngines });

      yield put({ type: SET_ENGINES_SELECTED, payload: [] });
      if (!hasError) yield put({ type: DELETE_ENGINES_SUCCESS });
    }
  } catch (error) {
    yield put({
      type: DELETE_ENGINES_ERROR,
      error: { errorMessage: prop('message', error) },
    });
  }

  yield put({ type: RESET_PENDING_REQUEST });
  return null;
}

export default [takeLatest(FETCH_ENGINES, fetchEngines), takeLatest(DELETE_ENGINES_REQUEST, deleteEngines)];
