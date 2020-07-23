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
  DELETE_CRITERIA_ERROR,
  DELETE_CRITERIA_REQUEST,
  DELETE_CRITERIA_SUCCESS,
  FETCH_CRITERIA,
  FETCH_CRITERIA_ERROR,
  SET_CRITERIA,
  SET_CRITERIA_SELECTED,
} from '../../components/CriteriaDataGrid/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';

export const parseResult = pathOr([], ['data']);

export function* fetchCriteria() {
  try {
    const result = yield call(clientApi().getCriteria);

    const criteria = parseResult(result);

    yield put({ type: SET_CRITERIA, payload: criteria });

    yield put({ type: SET_CRITERIA_SELECTED, payload: [] });
  } catch (error) {
    yield put({ type: FETCH_CRITERIA_ERROR, error });
  }
}

export function* deleteCriterion(id) {
  try {
    yield call(clientApi().deleteCriterion, id);
  } catch (error) {
    const name = yield select(path(['entities', 'criteria', 'byId', id, 'name']));
    return { isSuccess: false, name, id };
  }

  return { isSuccess: true, id };
}

export function* deleteCriteria() {
  yield put({ type: PENDING_REQUEST });

  try {
    const selected = yield select(path(['navigation', 'criteria', 'selected']));

    if (selected) {
      const deletedCriteriaState = yield all(map(id => call(deleteCriterion, id), selected));
      const errors = pipe(filter(propEq('isSuccess', false)), map(prop('name')))(deletedCriteriaState);

      const hasError = !isNil(errors) && !isEmpty(errors);
      const hasMoreThanOneError = hasError && length(errors) > 1;
      if (hasError)
        yield put({
          type: DELETE_CRITERIA_ERROR,
          error: {
            errorMessage: `Echec de suppression d${hasMoreThanOneError ? 'es' : 'u'}  critère${
              hasMoreThanOneError ? 's' : ''
            } ${join(',', errors)}`,
          },
        });

      const success = pipe(filter(propEq('isSuccess', true)), map(prop('id')))(deletedCriteriaState);

      if (isNil(success) || isEmpty(success)) {
        yield put({ type: RESET_PENDING_REQUEST });
        return null;
      }

      const criteria = yield select(pipe(path(['entities', 'criteria', 'byId']), values));
      const newCriteria =
        !isNil(criteria) && criteria.filter(criterion => !contains(prop('id', criterion), success));
      yield put({ type: SET_CRITERIA, payload: newCriteria });

      yield put({ type: SET_CRITERIA_SELECTED, payload: [] });
      if (!hasError) yield put({ type: DELETE_CRITERIA_SUCCESS });
    }
  } catch (error) {
    yield put({
      type: DELETE_CRITERIA_ERROR,
      error: { errorMessage: prop('message', error) },
    });
  }

  yield put({ type: RESET_PENDING_REQUEST });
  return null;
}

export default [
  takeLatest(FETCH_CRITERIA, fetchCriteria),
  takeLatest(DELETE_CRITERIA_REQUEST, deleteCriteria),
];
