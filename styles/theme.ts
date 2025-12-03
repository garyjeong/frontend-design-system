/**
 * Design System Theme Configuration
 *
 * This file defines the theme variables for the design system.
 * Inspired by Material Design and Ant Design principles.
 */

export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  background: {
    default: string;
    paper: string;
  };
  border: string;
}

export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}

const lightColors: ThemeColors = {
  primary: '#1976d2',
  secondary: '#dc004e',
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  info: '#2196f3',
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#bdbdbd',
  },
  background: {
    default: '#ffffff',
    paper: '#f5f5f5',
  },
  border: '#e0e0e0',
};

const darkColors: ThemeColors = {
  primary: '#42a5f5',
  secondary: '#f48fb1',
  success: '#66bb6a',
  warning: '#ffa726',
  error: '#ef5350',
  info: '#42a5f5',
  text: {
    primary: '#ffffff',
    secondary: '#b0b0b0',
    disabled: '#757575',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  border: '#424242',
};

const baseTheme = {
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

export const lightTheme: Theme = {
  mode: 'light',
  colors: lightColors,
  ...baseTheme,
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: darkColors,
  ...baseTheme,
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export default lightTheme;

