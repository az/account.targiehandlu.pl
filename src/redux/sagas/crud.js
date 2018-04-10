
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { refreshUserData } from '../../helpers';

import _get from 'lodash/get'

import {
  CRUD_UPDATE_SUCCESS
} from 'admin-on-rest';


function* onResourceUpdate(data) {

  switch(_get(data, "meta.resource")){

    case "companydata":

        yield call(refreshUserData);

    break

    default:

  }


}




export default function* saga() {
  yield all([
    takeEvery(CRUD_UPDATE_SUCCESS, onResourceUpdate)
  ]);
}
