import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    // padding: '20px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 20px 6px 20px',
  },
  body: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10px',
    marginBottom: '10px',
  },
  currentDay: {
    fontWeight: 'bold',
    fontSize: theme.fontSize1,
  },
}))

export default useStyles
