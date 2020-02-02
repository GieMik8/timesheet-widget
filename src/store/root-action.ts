import { routerActions } from 'react-router-redux'
import * as appActions from './app/actions'
import * as eventsActions from './events/actions'

export default {
  router: routerActions,
  app: appActions,
  events: eventsActions,
}
