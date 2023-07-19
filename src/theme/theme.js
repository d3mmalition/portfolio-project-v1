import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Self-hosted fonts
import PoppinsMedium from './fonts/Poppins-Medium.ttf';
import PoppinsRegular from './fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf';

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E90FF',
    },
    secondary: {
      main: '#129277',
    },
    info: {
      main: '#FFAABE',
    },
    error: {
      main: '#ff1744',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#129277',
    },
    // divider: 'rgba(253,81,12,0.4)',
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '3.25rem',
      letterSpacing: 1,
    },
    h2: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      letterSpacing: 1,
    },
    h3: {
      fontFamily: 'Poppins',
      letterSpacing: 1,
      fontWeight: 400,
      fontSize: '1rem',
    },
    h4: {
      fontFamily: 'Poppins',
      letterSpacing: 1,
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: 'Poppins',
      fontWeight: 300,
      letterSpacing: 0.75,
    },
    jobTitle: {
      fontFamily: 'Poppins',
      fontSize: '1.5rem',
      color: 'primary',
      // fontWeight: 'bold',
    },
    repositoryLanguage: {
      fontFamily: 'Poppins',
      textTransform: 'uppercase',
    },
    repositoryDate: {
      // fontFamily: 'PoppinsSemiBold',
      textTransform: 'uppercase',
    },
  },
});

let darkTheme = createTheme(lightTheme, {
  palette: {
    mode: 'dark',
    primary: {
      main: '#1E90FF',
    },
    secondary: {
      main: '#129277',
    },
    info: {
      main: '#FFAABE',
    },
    error: {
      main: '#ff1744',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#129277',
    },
    // divider: 'rgba(253,81,12,0.4)',
  },
  // Additional overrides specific to the dark mode
});

lightTheme = responsiveFontSizes(lightTheme);
darkTheme = responsiveFontSizes(darkTheme);

export { lightTheme, darkTheme };
