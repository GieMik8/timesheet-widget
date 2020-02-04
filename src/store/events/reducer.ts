import { Map, List } from 'immutable'
import { createReducer } from 'typesafe-actions'

import * as Actions from './actions'

const defaultState = {
  list: List(),
  eventsByDate: Map(),
}

export const eventsReducer = createReducer(
  Map(defaultState) as Map<string, any>,
).handleAction(Actions.getEventsAsync.success, (state, { payload }) =>
  state.set('list', payload.eventsList).set('eventsByDate', payload.eventsByDate),
)

export default eventsReducer
export type EventState = ReturnType<typeof eventsReducer>
