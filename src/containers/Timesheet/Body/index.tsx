import React from 'react'
import { Moment } from 'moment'

import { EventsSummary } from 'containers'
import useStyles from './style'

const Body: React.FC<{ selectedDay: Moment }> = ({ selectedDay }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.top}>
        <div className={classes.date}>
          <span className={classes.weekday}>{selectedDay.format('dddd')}</span>
          <span> {selectedDay.format('DD.MM.YYYY')}</span>
        </div>
        <div>
          <button
            onClick={(): void => alert(`Go to timesheet: ${selectedDay.format('YYYY.MM.DD')}`)}
            className={classes.button}
          >
            Go to timesheet
          </button>
        </div>
      </div>
      <EventsSummary selectedDay={selectedDay} />
    </div>
  )
}

export default Body
