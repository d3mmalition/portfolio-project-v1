import React from 'react';
import { useState } from 'react';

const ThemeModeContext = React.createContext();

export default function ThemeModeProvider({ children }) {
  const [themeMode, setThemeMode] = useState('light');

  function toggleDarkMode() {
    setThemeMode((prevMode) => {
      return prevMode === 'light' ? 'dark' : 'light';
    });
  }

  return (
    <ThemeModeContext.Provider value={{ themeMode, toggleDarkMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export const ThemeModeConsumer = ThemeModeContext.Consumer;
