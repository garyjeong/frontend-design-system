'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeMode, lightTheme, darkTheme } from '@/styles/theme';

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

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme, setTheme }}>
      {children}
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

