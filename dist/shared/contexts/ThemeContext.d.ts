import { ReactNode } from 'react';
import { ThemeColorKey, ThemePreset, ColorScale } from '../lib/themes/themeDefinitions';

export type ThemeMode = 'light' | 'dark';
type ThemeColor = ThemeColorKey;
interface ThemeContextType {
    mode: ThemeMode;
    color: ThemeColor;
    toggleTheme: () => void;
    setThemeMode: (mode: ThemeMode) => void;
    setThemeColor: (color: ThemeColor) => void;
    applyThemePreset: (preset: ThemePreset) => void;
    setCustomPalette: (palette: Partial<ColorScale>) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    defaultMode?: ThemeMode;
    defaultColor?: ThemeColor;
}
export declare const ThemeProvider: ({ children, defaultMode, defaultColor }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
