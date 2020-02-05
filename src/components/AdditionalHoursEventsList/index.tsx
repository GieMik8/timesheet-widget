import React from 'react'
import toJS from 'with-immutable-props-to-js'

import { Event } from 'types'
import { EventsListHeader, EventsListBody } from 'components'
import moment from 'moment'

const AdditionalHoursEventsList: React.FC<{ events: Array<Event> }> = ({ events }) => (
  <div>
    <EventsListHeader title="Additional Hours" icon="access_time" />
    <EventsListBody
      header={['Type', 'Amount']}
      rows={events.map(event => [event.eventType, moment.utc(event.quantity * 1000).format('H')])}
    />
  </div>
)

export default toJS(AdditionalHoursEventsList)
