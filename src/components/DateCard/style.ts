import { makeStyles } from '@material-ui/styles'

import Theme from 'theme'

const useStyles = makeStyles((theme: typeof Theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px',
    transition: '.2s',

    '&:hover': {
      backgroundColor: theme.colors.gray1,
      cursor: 'pointer',
    },

    '&.weekend': {
      color: theme.colors.gray,
    },
  },
  header: {
    fontSize: theme.fontSize2,
    marginBottom: '5px',
  },
  body: {
    fontSize: theme.fontSize2,
    fontWeight: 'bold',
    marginBottom: 'px',
    borderWidth: '1px',
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderRadius: '3px',
    padding: '4px',
    transition: '.2s',

    '.current-day &': {
      borderColor: theme.colors.orange,
    },

    '.selected-day &': {
      borderColor: theme.colors.orange,
      backgroundColor: theme.colors.orange,
      color: theme.colors.white,
    },

    '.selected-day.weekend &': {
      borderColor: theme.colors.gray2,
      backgroundColor: theme.colors.gray2,
    },
  },
  footer: {
    fontSize: theme.fontSize3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  dot: {
    display: 'block',
    width: '4px',
    height: '4px',
    borderRadius: '2px',
    backgroundColor: 'transparent',
    marginTop: '3px',

    '.status-ok &': {
      backgroundColor: theme.colors.green,
    },

    '.status-wrong &': {
      backgroundColor: theme.colors.red,
    },

    '.status-neutral &': {
      backgroundColor: theme.colors.gray2,
    },
  },
}))

export default useStyles
