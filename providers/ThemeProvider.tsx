'use client';

import { ThemeProvider as CustomThemeProvider } from '@/shared/contexts/ThemeContext';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => (
  <CustomThemeProvider>
    {children}
  </CustomThemeProvider>
);

