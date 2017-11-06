import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import CoindeskActions from '../Redux/CoindeskRedux'

export function * getCurrentPrice (api, action) {
  // make the call to the api
  const response = yield call(api.getCurrentPrice)

  if (response.ok) {
    // do data conversion here if needed
    yield put(CoindeskActions.coindeskSuccess(response.data))
  } else {
    yield put(CoindeskActions.coindeskFailure())
  }
}
