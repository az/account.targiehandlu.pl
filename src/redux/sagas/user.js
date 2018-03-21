import {takeEvery, all, call} from 'redux-saga/effects';
import {
  CHANGE_LOCALE
} from 'admin-on-rest';

import {lsSet} from '../../api/helpers'

function* saveLocalePreference(actionData)
{
  yield call(lsSet, "locale", actionData.payload)
}

export default function* saga() {
  yield all([
    takeEvery(CHANGE_LOCALE, saveLocalePreference)
  ]);
}
