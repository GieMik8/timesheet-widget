import React, { useCallback } from 'react'
import moment, { Moment } from 'moment'
import { makeStyles } from '@material-ui/styles'
import queryString from 'query-string'

import Theme from 'theme'
import { Icon, DateCard } from 'components'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    // padding: '20px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 20px 10px 20px',
  },
  body: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10px',
    marginBottom: '10px',
  },
  currentDay: {
    fontWeight: 'bold',
    fontSize: theme.fontSize1,
  },
}))

type Props = {
  days: Array<Moment>
  selectedDay: Moment
  currentDay: Moment
}

const Header: React.FC<Props> = ({ days, currentDay, selectedDay }) => {
  const classes = useStyles()
  const history = useHistory()
  const onDateClick = useCallback(
    date => history.replace(`${history.location.pathname}?${queryString.stringify({ date })}`),
    [history],
  )

  return (
    <div className={classes.wrapper}>
      <div className={classes.top}>
        <span className={classes.currentDay}>{currentDay.format('MMM YYYY')}</span>
        <Icon name="calendar_today" />
      </div>
      <div className={classes.body}>
        {days.map(day => (
          <DateCard
            currentDay={day.isSame(moment(), 'day')}
            selected={selectedDay.isSame(day, 'day')}
            onClick={onDateClick}
            key={day.unix()}
            date={day}
          />
        ))}
      </div>
    </div>
  )
}

export default Header
