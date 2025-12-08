// Theme presets: purple, orange, green
export type ThemeColorKey = 'purple' | 'orange' | 'green' | 'custom';

export type ColorScale = {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  950?: string;
};

export interface ThemePreset {
  name: ThemeColorKey;
  primary: ColorScale;
  foreground?: string;
}

export const themePresets: Record<ThemeColorKey, ThemePreset> = {
  purple: {
    name: 'purple',
    primary: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#7c3aed',
      600: '#6d28d9',
      700: '#5b21b6',
      800: '#4c1d95',
      900: '#3b0764',
      950: '#2c0335',
    },
    foreground: '#ffffff',
  },
  orange: {
    name: 'orange',
    primary: {
      50: '#fff7ed',
      100: '#fff1e6',
      200: '#ffe7cc',
      300: '#ffd59a',
      400: '#ffb86b',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d0a',
      950: '#4b1c06',
    },
    foreground: '#ffffff',
  },
  green: {
    name: 'green',
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
      950: '#052e16',
    },
    foreground: '#ffffff',
  },
  custom: {
    name: 'custom',
    primary: {
      500: '#74b9ff',
    },
    foreground: '#ffffff',
  },
};

export default themePresets;


