'use client';

import { createContext, useContext, useEffect, useMemo, useState, useCallback, ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';

interface ThemeContextType {
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

  const applyMode = useCallback((nextMode: ThemeMode) => {
    setMode(nextMode);
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.toggle('dark', nextMode === 'dark');
      localStorage.setItem(THEME_STORAGE_KEY, nextMode);
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const savedMode = (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || defaultMode;
    applyMode(savedMode);
  }, [defaultMode, applyMode]);

  const toggleTheme = useCallback(() => {
    const newMode: ThemeMode = mode === 'light' ? 'dark' : 'light';
    applyMode(newMode);
  }, [mode, applyMode]);

  const setTheme = useCallback((newMode: ThemeMode) => {
    applyMode(newMode);
  }, [applyMode]);

  const value = useMemo(() => ({ mode, toggleTheme, setTheme }), [mode, toggleTheme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
