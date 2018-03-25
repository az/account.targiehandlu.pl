import { put, takeEvery, all, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getToken } from '../../api/helpers';

//import slack from '../../services/slack';

import {  USER_CHECK } from 'admin-on-rest';

// function* handleFetchError(data) {
//   if ('error' in data && 'status' in data.error) {
//     if (data.error.status === 401 || data.error.status === 403) {
//         yield put(push('/login'));
//     }
//   }
// }

function* handleUserCheck(data) {
  const token = getToken();

  if (!token && 'payload' in data && 'route' in data.payload) {
    /*CUSTOM routes dont work that way!*/
    switch (data.payload.route) {
      case 'dashboard':
        break;

      default:
        yield put(push('/login'));
    }
  }
}

// function* handleSlackNotification() {
//   const userData = yield call(slack, 'User loggedin!');
//   // Instructing middleware to dispatch corresponding action.
//   yield put({
//     type: 'SLACK_NOTIFICATION_STATUS',
//     userData
//   });
// }

export default function* saga() {
  yield all([
    //  takeEvery(FETCH_ERROR, handleFetchError),
    takeEvery(USER_CHECK, handleUserCheck)
    //    takeEvery(USER_LOGIN_SUCCESS, handleSlackNotification)
  ]);
}
