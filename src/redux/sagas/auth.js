
import { put, takeEvery, all, call } from 'redux-saga/effects';
//import { push } from 'react-router-redux';
import { updatePerms } from '../../helpers';

import {  USER_CHECK } from 'admin-on-rest';

function* handleUserCheck(data) {
  
  /*

  meta:
    auth: true
    pathName: "/companydata"
  payload:
    resource: "companydata"
    route: "list"
  type: "AOR/USER_CHECK"

  */
  
  yield call(updatePerms)

}

export default function* saga() {
  yield all([
    takeEvery(USER_CHECK, handleUserCheck)
  ]);
}
