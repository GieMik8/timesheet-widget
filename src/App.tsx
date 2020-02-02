import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'connected-react-router'
import { makeStyles, ThemeProvider } from '@material-ui/styles'

import './App.scss'
import * as Routes from './routes'
import store, { history } from './store'
import theme from './theme'

const useStyles = makeStyles({
  main: {
    backgroundColor: theme.colors.background,
    display: 'flex',
    minHeight: '100vh',
    justifyContent: 'center',
  },
  wrapper: {
    width: '1000px',
    maxWidth: '100%',
    marginBottom: '100px',
  },
})

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <main className={classes.main}>
            <div className={`${classes.wrapper} container-fluid`}>
              <Switch>
                <Route path="/" exact>
                  <Routes.Timesheet />
                </Route>
              </Switch>
            </div>
          </main>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default App
