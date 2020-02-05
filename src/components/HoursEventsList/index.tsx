import React from 'react'
import toJS from 'with-immutable-props-to-js'
import moment from 'moment'

import { Event } from 'types'
import EventsListHeader from 'components/EventsListHeader'
import { EventsListBody } from 'components'
import { getTasksInterval } from 'utils'

const HoursEventsList: React.FC<{ events: Array<Event> }> = ({ events }) => {
  const { firstTaskStart, lastTaskEnd } = getTasksInterval(events)
  const subtitle = `(${moment(firstTaskStart!).format('HH:mm')}-${moment(lastTaskEnd!).format(
    'HH:mm',
  )})`
  return (
    <div>
      <EventsListHeader title="Hours" subtitle={subtitle} icon="timer" />
      <EventsListBody
        header={['Type', 'Duration']}
        rows={events.map(event => [
          event.eventType,
          moment.utc(event.quantity * 1000).format('HH:mm'),
        ])}
      />
    </div>
  )
}

export default toJS(HoursEventsList)
