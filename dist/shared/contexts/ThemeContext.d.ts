import { ReactNode } from 'react';

export type ThemeMode = 'light' | 'dark';
interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
    setTheme: (mode: ThemeMode) => void;
}
interface ThemeProviderProps {
    children: ReactNode;
    defaultMode?: ThemeMode;
}
export declare const ThemeProvider: ({ children, defaultMode }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
