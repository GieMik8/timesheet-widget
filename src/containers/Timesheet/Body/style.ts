import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    padding: '10px 20px 20px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  weekday: {
    fontWeight: 'bold',
    fontSize: theme.fontSize2,
  },
  date: {
    fontSize: theme.fontSize2,
  },
  button: {
    borderWidth: 0,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: theme.colors.orange,
    fontSize: theme.fontSize2,
    padding: '5px',
    borderRadius: '3px',

    '&:hover': {
      backgroundColor: theme.colors.orange,
      color: theme.colors.white,
      cursor: 'pointer',
    },
  },
}))

export default useStyles
