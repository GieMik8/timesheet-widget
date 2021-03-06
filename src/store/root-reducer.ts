import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import appReducer from './app/reducer'
import eventsReducer from './events/reducer'
import entitiesReducer from './entities/reducer'

const createRootReducer = (history: History): Reducer =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer,
    events: eventsReducer,
    entities: entitiesReducer,
  })

export default createRootReducer
