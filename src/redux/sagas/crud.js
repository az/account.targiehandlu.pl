
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { refreshUserData } from '../../helpers';
import slack from '../../services/slack';

import get from 'lodash/get'

import {
  CRUD_CREATE_SUCCESS,
  CRUD_UPDATE_SUCCESS
} from 'admin-on-rest';



function* handleSlackNotification({meta, payload, requestPayload}) {

  const {resource} = meta

  const userData = yield call(slack, `Updated *${resource}*`);
  // Instructing middleware to dispatch corresponding action.
  yield put({
    type: 'SLACK_NOTIFICATION_STATUS',
    userData
  });
}

function* onResourceUpdate(data) {
  switch(get(data, "meta.resource")){
    case "companydata":
      yield call(refreshUserData);
    break
    default:
  }
}


export default function* saga() {
  yield all([
    takeEvery(CRUD_UPDATE_SUCCESS, onResourceUpdate),
    takeEvery(CRUD_CREATE_SUCCESS, handleSlackNotification),
    takeEvery(CRUD_UPDATE_SUCCESS, handleSlackNotification)
  ]);
}
