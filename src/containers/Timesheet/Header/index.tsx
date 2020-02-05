import React, { useCallback } from 'react'
import moment, { Moment } from 'moment'
import { Map } from 'immutable'
import queryString from 'query-string'

import { Icon, DateCard } from 'components'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { STATE_DATE_FORMAT, DayEventsSummaryStatus } from 'types'
import useStyles from './style'

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

  const onCurrentDateClick = useCallback(
    () =>
      history.replace(
        `${history.location.pathname}?${queryString.stringify({
          date: currentDay.format(STATE_DATE_FORMAT),
        })}`,
      ),
    [history, currentDay],
  )

  const events: Map<string, any> = useSelector((store: any) => store.events.get('eventsByDate'))

  return (
    <div className={classes.wrapper}>
      <div className={classes.top}>
        <span className={classes.currentDay}>{selectedDay.format('MMMM YYYY')}</span>
        <Icon name="calendar_today" onClick={onCurrentDateClick} />
      </div>
      <div className={classes.body}>
        {days.map(day => {
          const daySummary = events?.get(day.format(STATE_DATE_FORMAT))?.toJS()
          let status = null
          if (daySummary?.rejectedTasks) {
            status = DayEventsSummaryStatus.wrong
          } else if (daySummary?.tasksCount) {
            status = !daySummary?.tasksNotApproved
              ? DayEventsSummaryStatus.ok
              : DayEventsSummaryStatus.neutral
          }
          return (
            <DateCard
              isWeekend={[6, 7].includes(day.isoWeekday())}
              isCurrentDay={day.isSame(moment(), 'day')}
              isSelected={selectedDay.isSame(day, 'day')}
              onClick={onDateClick}
              key={day.unix()}
              workHours={daySummary?.workHours || 0}
              date={day}
              status={status}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Header
