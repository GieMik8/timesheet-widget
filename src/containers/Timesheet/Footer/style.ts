import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    backgroundColor: theme.colors.gray1,
    padding: '20px',
  },
  button: {
    backgroundColor: theme.colors.orange,
    padding: '10px 20px',
    borderRadius: '5px',
    color: theme.colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: theme.fontSize1,
    width: '100%',
  },
}))

export default useStyles
