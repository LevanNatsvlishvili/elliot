import { createTheme } from '@material-ui/core';


export default createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          scrollBehavior: 'smooth',

        },
      },
    },
  },
  colors: {
    blue: '#1565C0',
    darkBlue: '#2C3E50',
    white: '#fff',
    black: '#000',
    transparent: 'transparent',
  },
});
