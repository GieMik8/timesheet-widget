import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    display: 'flex',
    backgroundColor: theme.colors.gray1,
    padding: '8px 12px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    paddingLeft: '5px',
    color: theme.colors.gray,
    fontWeight: 'bold',
    fontSize: theme.fontSize2,
  },
  right: {},
  subtitle: {
    fontSize: theme.fontSize2,
    fontWeight: 'bold',
    color: theme.colors.gray,
  },
}))

export default useStyles
