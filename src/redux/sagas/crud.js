
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { refreshUserData } from '../../helpers';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import get from 'lodash/get'
import {UPGRADE_CREATE_SUCCESS} from '../types'

import slack from '../../services/slack';


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

function* onUpgradeCreateSuccess(data){
  yield put(showNotification('common.statuses.success'));
  yield put(push('/upgrades'));
}

export default function* saga() {
  yield all([
    takeEvery(UPGRADE_CREATE_SUCCESS, onUpgradeCreateSuccess),
    takeEvery(CRUD_UPDATE_SUCCESS, onResourceUpdate),
    takeEvery(CRUD_CREATE_SUCCESS, handleSlackNotification),
    takeEvery(CRUD_UPDATE_SUCCESS, handleSlackNotification)
  ]);
}
