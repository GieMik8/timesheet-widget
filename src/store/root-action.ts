import { routerActions } from 'react-router-redux'
import * as appActions from './app/actions'
import * as eventsActions from './events/actions'
import * as entitiesActions from './entities/actions'

export default {
  router: routerActions,
  app: appActions,
  events: eventsActions,
  entities: entitiesActions,
}
