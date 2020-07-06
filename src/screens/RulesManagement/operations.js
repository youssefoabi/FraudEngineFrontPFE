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
  DELETE_RULES_ERROR,
  DELETE_RULES_REQUEST,
  DELETE_RULES_SUCCESS,
  FETCH_RULES,
  FETCH_RULES_ERROR,
  SET_RULES,
  SET_RULES_SELECTED,
} from '../../components/RulesDataGrid/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';

export const parseResult = pathOr([], ['data']);

export function* fetchRules() {
  try {
    const result = yield call(clientApi().getRules);

    const rules = parseResult(result);

    yield put({ type: SET_RULES, payload: rules });

    yield put({ type: SET_RULES_SELECTED, payload: [] });
  } catch (error) {
    yield put({ type: FETCH_RULES_ERROR, error });
  }
}

export function* deleteRule(id) {
  try {
    yield call(clientApi().deleteRule, id);
  } catch (error) {
    const name = yield select(path(['entities', 'rules', 'byId', id, 'name']));
    return { isSuccess: false, name, id };
  }

  return { isSuccess: true, id };
}

export function* deleteRules() {
  yield put({ type: PENDING_REQUEST });

  try {
    const selected = yield select(path(['navigation', 'rules', 'selected']));

    if (selected) {
      const deletedRulesState = yield all(map(id => call(deleteRule, id), selected));
      const errors = pipe(filter(propEq('isSuccess', false)), map(prop('name')))(deletedRulesState);

      const hasError = !isNil(errors) && !isEmpty(errors);
      const hasMoreThanOneError = hasError && length(errors) > 1;
      if (hasError)
        yield put({
          type: DELETE_RULES_ERROR,
          error: {
            errorMessage: `Echec de suppression d${hasMoreThanOneError ? 'es' : 'u'}  moteur${
              hasMoreThanOneError ? 's' : ''
            } ${join(',', errors)}`,
          },
        });

      const success = pipe(filter(propEq('isSuccess', true)), map(prop('id')))(deletedRulesState);

      if (isNil(success) || isEmpty(success)) {
        yield put({ type: RESET_PENDING_REQUEST });
        return null;
      }

      const rules = yield select(pipe(path(['entities', 'rules', 'byId']), values));
      const newRules = !isNil(rules) && rules.filter(rule => !contains(prop('id', rule), success));
      yield put({ type: SET_RULES, payload: newRules });

      yield put({ type: SET_RULES_SELECTED, payload: [] });
      if (!hasError) yield put({ type: DELETE_RULES_SUCCESS });
    }
  } catch (error) {
    yield put({
      type: DELETE_RULES_ERROR,
      error: { errorMessage: prop('message', error) },
    });
  }

  yield put({ type: RESET_PENDING_REQUEST });
  return null;
}

export default [takeLatest(FETCH_RULES, fetchRules), takeLatest(DELETE_RULES_REQUEST, deleteRules)];
