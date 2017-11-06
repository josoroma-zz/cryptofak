import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  coinRequest: null,
  coinSuccess: ['data'],
  coinFailure: null
})

export const GithubTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  data: null
})

/* ------------- Reducers ------------- */

export const request = (state) =>
  state.merge({ fetching: true, data: null })

export const success = (state, action) => {
  const { data } = action
  return state.merge({ fetching: false, error: null, data })
}

export const failure = (state) =>
  state.merge({ fetching: false, error: true, data: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COIN_REQUEST]: request,
  [Types.COIN_SUCCESS]: success,
  [Types.COIN_FAILURE]: failure
})
