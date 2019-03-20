import React from 'react'
import { put, takeEvery, all, call } from 'redux-saga/effects';
import {
  CRUD_CREATE_SUCCESS,
  CRUD_UPDATE_SUCCESS,
  showNotification
} from 'admin-on-rest';
import { push } from 'react-router-redux';
import get from 'lodash/get'



import { refreshUserData } from '../../helpers';

import {
  PURCHASE_CREATE_SUCCESS,
  PURCHASE_UPDATE_SUCCESS
} from '../types'

import {showModal} from '../actions';
import slack from '../../services/slack';
import ConfirmationBox from '../../views/upgrades/ConfirmationBox'


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

function* onPurchaseCreateSuccess({payload}){

  yield put(showNotification('common.statuses.success'));
  yield put(push('/upgrades'));
  yield put(showModal({
    title : "Status",
    body : <ConfirmationBox action="buy" data={payload} />
  }))
}

function* onPurchaseUpdateSuccess({payload}){

  yield put(showNotification('common.statuses.success'));
  yield put(push('/upgrades'));
  yield put(showModal({
    title : "Status",
    body : <ConfirmationBox action="remove" data={payload} />
  }))
}

export default function* saga() {
  yield all([

    takeEvery(PURCHASE_CREATE_SUCCESS, onPurchaseCreateSuccess),
    takeEvery(PURCHASE_UPDATE_SUCCESS, onPurchaseUpdateSuccess),

    takeEvery(CRUD_UPDATE_SUCCESS, onResourceUpdate),
    takeEvery(CRUD_CREATE_SUCCESS, handleSlackNotification),
    takeEvery(CRUD_UPDATE_SUCCESS, handleSlackNotification)
  ]);
}
