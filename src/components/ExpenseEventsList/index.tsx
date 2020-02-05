import React from 'react'

import { Event } from 'types'
import { EventsListHeader, EventsListBody } from 'components'

const ExpenseEventsList: React.FC<{ events: Array<Event> }> = ({ events }) => (
  <div>
    <EventsListHeader title="Expenses" icon="attach_money" />
    <EventsListBody
      header={['Type', 'Quantity', 'Total']}
      rows={events.map(event => [
        event.eventType,
        event.quantity,
        Math.round(event.quantity * event.price! * 100) / 100,
      ])}
    />
  </div>
)

export default ExpenseEventsList
