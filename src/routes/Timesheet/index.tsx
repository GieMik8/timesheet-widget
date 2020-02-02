import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'

import Main from './Main'

const TimesheetPage: React.FC = () => {
  const match = useRouteMatch()

  return (
    <div>
      <h1>Timesheet widget</h1>
      <Switch>
        <Route path={match.path}>
          <Main />
        </Route>
      </Switch>
    </div>
  )
}

export default TimesheetPage
