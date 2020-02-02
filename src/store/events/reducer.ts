import { Map, List } from 'immutable'
import { createReducer } from 'typesafe-actions'

// import * as Actions from './actions'

const defaultState = {
  events: [],
  eventsById: Map(),
  eventsList: List(),
}

export const appReducer = createReducer(Map(defaultState) as Map<string, any>)
// .handleAction(getApiVersionAsync.success, (state, action) => state.set('version', action.payload))
// .handleAction([getApiVersionAsync.request, getApiVersionAsync.failure], state => state.set('version', 'unknown'))

export default appReducer
export type AppState = ReturnType<typeof appReducer>
