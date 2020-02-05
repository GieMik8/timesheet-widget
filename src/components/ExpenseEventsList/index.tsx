import React from 'react'
import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {},
}))

const ExpenseEventsList: React.FC<{}> = () => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <span>Expense</span>
    </div>
  )
}

export default ExpenseEventsList
