import { call, put, takeLatest } from 'redux-saga/effects';
import { isNilOrEmpty } from 'ramda-adjunct';

import {
  CREATE_CRITERION_ERROR,
  CREATE_CRITERION_REQUEST,
  CREATE_CRITERION_SUCCESS,
} from '../../components/CriterionForm/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';
import parse from './parse';

export function* createCriterion({ payload }) {
  yield put({ type: PENDING_REQUEST });

  try {
    const { criterion } = payload;
    if (isNilOrEmpty(criterion)) return null;

    yield call(clientApi().createCriterion, parse(criterion));

    yield put({ type: RESET_PENDING_REQUEST });
    yield put({ type: CREATE_CRITERION_SUCCESS });
  } catch (error) {
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({
      type: CREATE_CRITERION_ERROR,
      error: { errorMessage: "Erreur d'enregistrement du critère" },
    });
  }

  return true;
}

export default [takeLatest(CREATE_CRITERION_REQUEST, createCriterion)];
