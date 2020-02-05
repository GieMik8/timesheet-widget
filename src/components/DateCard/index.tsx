import React, { useCallback } from 'react'
import moment, { Moment } from 'moment'

import { DayEventsSummaryStatus, STATE_DATE_FORMAT } from 'types'
import useStyles from './style'

type Props = {
  date: Moment
  onClick?: (date: string) => void
  isSelected?: boolean
  isCurrentDay?: boolean
  isWeekend?: boolean
  workHours?: number
  status?: DayEventsSummaryStatus | null
}

const DateCard: React.FC<Props> = ({
  date,
  onClick,
  isSelected = false,
  isCurrentDay = false,
  isWeekend = false,
  workHours = 0,
  status = null,
}) => {
  const classes = useStyles()
  const onDateClick = useCallback(() => {
    if (onClick) {
      onClick(date.format(STATE_DATE_FORMAT))
    }
  }, [onClick, date])

  const wrapperClasses = [classes.wrapper]

  if (isCurrentDay) {
    wrapperClasses.push('current-day')
  }

  if (isSelected) {
    wrapperClasses.push('selected-day')
  }

  if (isWeekend) {
    wrapperClasses.push('weekend')
  }

  if (status) {
    switch (status) {
      case DayEventsSummaryStatus.ok:
        wrapperClasses.push('status-ok')
        break
      case DayEventsSummaryStatus.wrong:
        wrapperClasses.push('status-wrong')
        break
      default:
        wrapperClasses.push('status-neutral')
    }
  }

  return (
    <div onClick={onDateClick} className={wrapperClasses.join(' ')}>
      <span className={classes.header}>{date.format('ddd')}</span>
      <span className={classes.body}>{date.format('D')}</span>
      <span className={classes.footer}>
        {workHours ? moment.utc(workHours * 1000).format('HH:mm') : '-'}
        <span className={classes.dot} />
      </span>
    </div>
  )
}

export default DateCard
