import React from 'react'
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { refreshUserData } from '../../helpers';
import { push } from 'react-router-redux';
import { showNotification } from 'admin-on-rest';
import get from 'lodash/get'
import {UPGRADE_CREATE_SUCCESS} from '../types'
import {showModal} from '../actions';
import slack from '../../services/slack';
import ConfirmationBox from '../../views/upgrades/ConfirmationBox'

import {
  CRUD_CREATE_SUCCESS,
  CRUD_UPDATE_SUCCESS
} from 'admin-on-rest';


function* handleSlackNotification({meta, payload, requestPayload}) {

  const {resource} = meta

  try {
    const userData = yield call(slack, `Updated *${resource}*`);
    // Instructing middleware to dispatch corresponding action.
    yield put({
      type: 'SLACK_NOTIFICATION_STATUS',
      userData
    });
  } catch (error) {
    console.log("check slack config!")
  }
  
}

function* onResourceUpdate(data) {
  switch(get(data, "meta.resource")){
    case "companydata":
      yield call(refreshUserData);
    break
    default:
  }
}

function* onUpgradeCreateSuccess({payload}){

  yield put(showNotification('common.statuses.success'));
  yield put(push('/upgrades'));
  yield put(showModal({
    title : "Status",
    body : <ConfirmationBox data={payload} />
  }))
}

export default function* saga() {
  yield all([
    takeEvery(UPGRADE_CREATE_SUCCESS, onUpgradeCreateSuccess),
    takeEvery(CRUD_UPDATE_SUCCESS, onResourceUpdate),
    takeEvery(CRUD_CREATE_SUCCESS, handleSlackNotification),
    takeEvery(CRUD_UPDATE_SUCCESS, handleSlackNotification)
  ]);
}
