'use client';

import { ThemeProvider as CustomThemeProvider } from '@/shared/contexts/ThemeContext';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
  defaultTheme?: 'light' | 'dark';
}

export const Providers = ({ children, defaultTheme }: ProvidersProps) => (
  <CustomThemeProvider defaultMode={defaultTheme}>
    {children}
  </CustomThemeProvider>
);

