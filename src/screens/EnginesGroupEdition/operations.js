import { call, put, takeLatest } from 'redux-saga/effects';

import {
  EDIT_ENGINESGROUP_ERROR,
  EDIT_ENGINESGROUP_REQUEST,
  EDIT_ENGINESGROUP_SUCCESS,
} from '../../components/EnginesGroupForm/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';
import parse from '../EnginesGroupCreation/parse';

export function* saveEnginesGroup({ payload }) {
  yield put({ type: PENDING_REQUEST });

  try {
    const { enginesGroup } = payload;
    if (!enginesGroup) return null;
    yield call(clientApi().updateEnginesGroup, parse(enginesGroup));

    yield put({ type: RESET_PENDING_REQUEST });
    yield put({ type: EDIT_ENGINESGROUP_SUCCESS });
  } catch (error) {
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({
      type: EDIT_ENGINESGROUP_ERROR,
      error: { errorMessage: "Erreur d'enregistrement du groupe de moteurs" },
    });
  }

  return true;
}

export default [takeLatest(EDIT_ENGINESGROUP_REQUEST, saveEnginesGroup)];
