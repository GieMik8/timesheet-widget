import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {},
}))

const AdditionalHoursEventsList: React.FC<{}> = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <span>Additional Hours</span>
    </div>
  )
}

export default AdditionalHoursEventsList
