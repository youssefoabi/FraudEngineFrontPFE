import { call, put, takeLatest } from 'redux-saga/effects';

import {
  EDIT_CRITERION_ERROR,
  EDIT_CRITERION_REQUEST,
  EDIT_CRITERION_SUCCESS,
} from '../../components/CriterionForm/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';
import parse from '../CriterionCreation/parse';

export function* saveCriterion({ payload }) {
  yield put({ type: PENDING_REQUEST });

  try {
    const { criterion } = payload;
    if (!criterion) return null;

    yield call(clientApi().updateCriterion, parse(criterion));
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({ type: EDIT_CRITERION_SUCCESS });
  } catch (error) {
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({
      type: EDIT_CRITERION_ERROR,
      error: { errorMessage: "Erreur d'enregistrement de moteur de recherche" },
    });
  }

  return true;
}

export default [takeLatest(EDIT_CRITERION_REQUEST, saveCriterion)];
