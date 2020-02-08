import React, { useCallback } from 'react'
import moment, { Moment } from 'moment'
import clsx from 'clsx'

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

  const wrapperClasses = clsx(classes.wrapper, {
    weekend: isWeekend,
    'current-day': isCurrentDay,
    'selected-day': isSelected,
    'status-ok': status && status === DayEventsSummaryStatus.ok,
    'status-wrong': status && status === DayEventsSummaryStatus.wrong,
    'status-neutral': status && status === DayEventsSummaryStatus.neutral,
  })

  return (
    <div onClick={onDateClick} className={wrapperClasses}>
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
