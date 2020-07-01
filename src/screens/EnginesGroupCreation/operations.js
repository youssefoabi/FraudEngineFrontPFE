import { call, put, takeLatest } from 'redux-saga/effects';
import { isEmpty, isNil } from 'ramda';

import {
  CREATE_ENGINESGROUP_ERROR,
  CREATE_ENGINESGROUP_REQUEST,
  CREATE_ENGINESGROUP_SUCCESS,
} from '../../components/EnginesGroupForm/actions';
import { PENDING_REQUEST, RESET_PENDING_REQUEST } from '../../components/ServerActionBackdrop/actions';
import clientApi from '../../client-api';
import parse from './parse';

export function* createEnginesGroup({ payload }) {
  yield put({ type: PENDING_REQUEST });

  try {
    const { enginesGroup } = payload;
    if (isNil(enginesGroup) || isEmpty(enginesGroup)) return null;

    yield call(clientApi().createEnginesGroup, parse(enginesGroup));

    yield put({ type: RESET_PENDING_REQUEST });
    yield put({ type: CREATE_ENGINESGROUP_SUCCESS });
  } catch (error) {
    yield put({ type: RESET_PENDING_REQUEST });
    yield put({
      type: CREATE_ENGINESGROUP_ERROR,
      error: { errorMessage: "Erreur d'enregistrement du groupe de moteurs" },
    });
  }

  return true;
}

export default [takeLatest(CREATE_ENGINESGROUP_REQUEST, createEnginesGroup)];
