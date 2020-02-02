import { combineEpics } from 'redux-observable'

import * as appEpics from './app/epics'
import * as eventsEpics from './events/epics'

export default combineEpics(...Object.values(appEpics), ...Object.values(eventsEpics))
