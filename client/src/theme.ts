import { createTheme } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    // you have something called mode which is light by default can be changed to dark
    // for dark mode
    primary: {
      light: grey.A400,
      main: '#F27C35', // there is light, dark and contrast text
    },
    secondary: {
      main: '#52428B',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['"Ubuntu"', 'sans-serif'].join(','),
  },
});

export default theme;
