'use client';

import { ThemeProvider as CustomThemeProvider, useTheme } from '@/shared/contexts/ThemeContext';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { ReactNode, useEffect, useState } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

const ThemedContent = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <StyledThemeProvider theme={theme}>
      {mounted && <GlobalStyles theme={theme} />}
      {children}
    </StyledThemeProvider>
  );
};

export const Providers = ({ children }: ProvidersProps) => (
  <CustomThemeProvider>
    <ThemedContent>{children}</ThemedContent>
  </CustomThemeProvider>
);

