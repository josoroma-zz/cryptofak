import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  coindeskRequest: null,
  coindeskSuccess: ['response'],
  coindeskFailure: null
})

export const CoindeskTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  response: null
})

/* ------------- Reducers ------------- */

export const request = (state) =>
  state.merge({ fetching: true })

export const success = (state, action) => {
  const { response } = action
  return state.merge({ fetching: false, error: null, response: response })
}

export const failure = (state) =>
  state.merge({ fetching: false, error: true, response: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COINDESK_REQUEST]: request,
  [Types.COINDESK_SUCCESS]: success,
  [Types.COINDESK_FAILURE]: failure
})
