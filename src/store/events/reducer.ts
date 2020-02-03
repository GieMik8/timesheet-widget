import { Map, List } from 'immutable'
import { createReducer } from 'typesafe-actions'

const defaultState = {
  events: [],
  eventsById: Map(),
  eventsList: List(),
}

export const appReducer = createReducer(Map(defaultState) as Map<string, any>)

export default appReducer
export type AppState = ReturnType<typeof appReducer>
