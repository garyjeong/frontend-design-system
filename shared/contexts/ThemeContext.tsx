'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import type { Theme, ThemeMode } from '../../styles/theme';
import { GlobalStyles } from '../../styles/GlobalStyles';

// Import themes - use require to avoid Next.js module resolution issues
// eslint-disable-next-line @typescript-eslint/no-require-imports
const themeModule = require('../../styles/theme');
const lightTheme = themeModule.lightTheme || themeModule.default;
const darkTheme = themeModule.darkTheme || (themeModule.themes && themeModule.themes.dark);

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
}

export const ThemeProvider = ({ children, defaultMode = 'light' }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to light mode
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      const savedMode = (localStorage.getItem('theme') as ThemeMode) || defaultMode;
      setMode(savedMode);
    }
  }, [defaultMode]);

  const toggleTheme = () => {
    const newMode: ThemeMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newMode);
    }
  };

  const setTheme = (newMode: ThemeMode) => {
    setMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newMode);
    }
  };

  // Always provide a theme, even during SSR
  // This ensures styled-components ThemeProvider always has a theme prop
  const currentTheme = useMemo(() => {
    return mode === 'light' ? lightTheme : darkTheme;
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, mode, toggleTheme, setTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

