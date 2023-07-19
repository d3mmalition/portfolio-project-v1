import React from 'react';
// Custom Theme
import { lightTheme, darkTheme } from './theme/theme';
import { ThemeProvider } from '@mui/material/styles';
// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, CssBaseline } from '@mui/material';
// Components
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
// CSS
import './App.css';

export default function App() {
  const isIpadScreenLess = useMediaQuery(lightTheme.breakpoints.down('md'));
  const headerFooterConfigs = {
    sx: { marginY: 4 },
  };
  const sectionConfigs = {
    component: 'section',
    sx: { marginY: 12, display: 'inline-block' },
  };
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Container fixed sx={{ fontFamily: 'Poppins' }}>
        <Header configs={headerFooterConfigs} />
        <main>
          <Intro
            configs={sectionConfigs}
            id="intro-section"
            isIpadScreenLess={isIpadScreenLess}
          />
          <Projects configs={sectionConfigs} id="projects-section" />
        </main>
        <Footer configs={headerFooterConfigs} />
      </Container>
    </ThemeProvider>
  );
}