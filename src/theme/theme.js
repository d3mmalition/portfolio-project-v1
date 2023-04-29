import {createTheme, responsiveFontSizes} from '@mui/material/styles';

// Seft-hosted fonts
import PoppinsMedium from './fonts/Poppins-Medium.ttf';
import PoppinsRegular from './fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from './fonts/Poppins-SemiBold.ttf';

// import {ThemeModeConsumer} from './ThemeModeContext';

// Default CSS
// import '../App.css';

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
      textTransformation: 'uppercase',
    },
    repositoryDate: {
      // fontFamily: 'PoppinsSemiBold',
      textTransformation: 'uppercase',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Poppins';
            src: url(${PoppinsMedium}) format('truetype'),
                 url(${PoppinsRegular}) format('truetype'),
                 url(${PoppinsSemiBold}) format('truetype');
            font-weight: normal;
            font-style: normal;
          }
        `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontFamily: 'Poppins',
          letterSpacing: 0.75,
        },
      },
    },
  },
});

export default lightTheme = responsiveFontSizes(lightTheme);