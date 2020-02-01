import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import { ConnectedRouter as Router } from 'connected-react-router'
import { makeStyles, ThemeProvider } from '@material-ui/styles'

import './App.scss'
import * as Routes from './routes'
import store, { history } from './store'

const theme = {
  orangeColor: 'red',
}

const useStyles = makeStyles({
  header: {
    backgroundColor: 'red',
  },
  main: {
    backgroundColor: 'green',
  },
})

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router history={history}>
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/about">About</Link>
            <main className={classes.main}>
              <div />
              <Switch>
                <Route path="/about">
                  <Routes.About />
                </Route>
                <Route path="/" exact>
                  <Routes.Home />
                </Route>
                <Route path="/settings">
                  <Routes.Settings />
                </Route>
              </Switch>
            </main>
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  )
}

export default App
