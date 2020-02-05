import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Moment } from 'moment'

import Theme from 'theme'
import { EventsSummary } from 'containers'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    padding: '20px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  weekday: {
    fontWeight: 'bold',
    fontSize: theme.fontSize2,
  },
  date: {
    fontSize: theme.fontSize2,
  },
  button: {
    borderWidth: 0,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.colors.orange,
    fontSize: theme.fontSize2,
    padding: '5px',
    borderRadius: '3px',

    '&:hover': {
      backgroundColor: theme.colors.orange,
      color: theme.colors.white,
      cursor: 'pointer',
    },
  },
}))

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
          <button className={classes.button}>Go to timesheet</button>
        </div>
      </div>
      <EventsSummary selectedDay={selectedDay} />
    </div>
  )
}

export default Body
