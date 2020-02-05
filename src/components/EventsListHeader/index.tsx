import React from 'react'

import useStyles from './style'
import { Icon } from 'components'

type Props = {
  icon?: string
  title: string
  subtitle?: string
}

const EventsListHeader: React.FC<Props> = ({ icon, title, subtitle = null }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        {icon && <Icon name={icon} />}
        <span className={classes.title}>{title}</span>
      </div>
      <div className={classes.right}>
        <span className={classes.subtitle}>{subtitle}</span>
      </div>
    </div>
  )
}

export default EventsListHeader
