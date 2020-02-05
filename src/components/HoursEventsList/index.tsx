import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {},
}))

const HoursEventsList: React.FC<{}> = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <span>Hours</span>
    </div>
  )
}

export default HoursEventsList
