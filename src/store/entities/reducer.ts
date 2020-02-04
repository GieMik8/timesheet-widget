import { Map } from 'immutable'
import { createReducer } from 'typesafe-actions'

import { updateEntities } from './actions'

export const entitiesReducer = createReducer(Map() as Map<string, any>).handleAction(
  updateEntities,
  (state, action) => state.mergeDeep(action.payload),
)

export default entitiesReducer
export type EntitiesState = ReturnType<typeof entitiesReducer>
