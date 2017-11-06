import { put, select } from 'redux-saga/effects'
import CoindeskActions from '../Redux/CoindeskRedux'
import { is } from 'ramda'

// exported to make available for tests
export const selectResponse = (state) => state.coindesk.response

// process STARTUP actions
export function * startup (action) {
  const response = yield select(selectResponse)

  if (__DEV__ && console.tron) {
    console.tron.log('Dev Startup Action')
  }

  if (!is(Object, response)) {
    if (__DEV__ && console.tron) {
      console.tron.log('Dev Startup Action - CoindeskActions.coindeskRequest()')
    }

    yield put(CoindeskActions.coindeskRequest())
  }
}

