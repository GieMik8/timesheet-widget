import React from 'react'

import Theme from 'theme'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { makeStyles, useTheme } from '@material-ui/styles'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderColor: theme.colors.gray1,
  },
  body: {
    flexGrow: 1,
    overflow: 'scroll',
  },
  footer: {},
}))

const Timesheet: React.FC<{}> = () => {
  const theme = useTheme()
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.body}>
        <Body />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Timesheet
