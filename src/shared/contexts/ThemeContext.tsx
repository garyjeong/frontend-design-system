'use client';

import { createContext, useContext, useEffect, useMemo, useState, useCallback, ReactNode } from 'react';
import themePresets, { ThemeColorKey, ThemePreset, ColorScale } from '@/shared/lib/themes/themeDefinitions';

export type ThemeMode = 'light' | 'dark';
type ThemeColor = ThemeColorKey;

const THEME_STORAGE_KEY = 'theme_mode';
const THEME_COLOR_KEY = 'theme_color';
const THEME_CUSTOM_KEY = 'theme_custom_palette';

interface ThemeContextType {
  mode: ThemeMode;
  color: ThemeColor;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
  setThemeColor: (color: ThemeColor) => void;
  applyThemePreset: (preset: ThemePreset) => void;
  setCustomPalette: (palette: Partial<ColorScale>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultMode?: ThemeMode;
  defaultColor?: ThemeColor;
}

const applyPresetToRoot = (preset: ThemePreset, mode: ThemeMode) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  // apply primary scale vars
  const primary = preset.primary;
  Object.entries(primary).forEach(([k, v]) => {
    if (!v) return;
    root.style.setProperty(`--theme-primary-${k}`, v);
  });
  // simple background/text tokens (can be extended)
  if (mode === 'light') {
    root.style.setProperty('--theme-background-default', 'var(--theme-background-default, #f8fafc)');
    root.style.setProperty('--theme-text-primary', '#0f172a');
  } else {
    root.style.setProperty('--theme-background-default', 'var(--theme-background-dark, #0f172a)');
    root.style.setProperty('--theme-text-primary', '#f8fafc');
  }
  root.style.setProperty('--theme-foreground', preset.foreground || '#ffffff');
};

const applyCustomPaletteToRoot = (palette: Partial<ColorScale>, mode: ThemeMode) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  Object.entries(palette).forEach(([k, v]) => {
    if (!v) return;
    root.style.setProperty(`--theme-primary-${k}`, v as string);
  });
  // ensure some defaults for background/text when using custom
  if (mode === 'light') {
    root.style.setProperty('--theme-background-default', 'var(--theme-background-default, #f8fafc)');
    root.style.setProperty('--theme-text-primary', '#0f172a');
  } else {
    root.style.setProperty('--theme-background-default', 'var(--theme-background-dark, #0f172a)');
    root.style.setProperty('--theme-text-primary', '#f8fafc');
  }
};

export const ThemeProvider = ({ children, defaultMode = 'light', defaultColor = 'purple' }: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const [color, setColor] = useState<ThemeColor>(defaultColor);

  const applyThemePreset = useCallback((preset: ThemePreset) => {
    applyPresetToRoot(preset, mode);
    localStorage.setItem(THEME_COLOR_KEY, preset.name);
  }, [mode]);

  const setThemeColor = useCallback((newColor: ThemeColor) => {
    setColor(newColor);
    const preset = themePresets[newColor] || themePresets.purple;
    applyPresetToRoot(preset, mode);
    localStorage.setItem(THEME_COLOR_KEY, newColor);
  }, [mode]);

  const setCustomPalette = useCallback((palette: Partial<ColorScale>) => {
    // persist and apply immediately
    localStorage.setItem(THEME_CUSTOM_KEY, JSON.stringify(palette));
    applyCustomPaletteToRoot(palette, mode);
    // switch to custom color key
    setColor('custom');
    localStorage.setItem(THEME_COLOR_KEY, 'custom');
  }, [mode]);

  const setThemeMode = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.classList.toggle('dark', newMode === 'dark');
      localStorage.setItem(THEME_STORAGE_KEY, newMode);
    }
    // re-apply current preset so tokens that depend on mode update
    const preset = themePresets[color] || themePresets.purple;
    applyPresetToRoot(preset, newMode);
  }, [color]);

  const toggleTheme = useCallback(() => {
    setThemeMode(mode === 'light' ? 'dark' : 'light');
  }, [mode, setThemeMode]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const savedMode = (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode) || defaultMode;
    const savedColor = (localStorage.getItem(THEME_COLOR_KEY) as ThemeColor) || defaultColor;
    setMode(savedMode);
    setColor(savedColor);
    // apply class for dark
    const root = document.documentElement;
    root.classList.toggle('dark', savedMode === 'dark');
    // apply preset tokens
    if (savedColor === 'custom') {
      const savedCustom = localStorage.getItem(THEME_CUSTOM_KEY);
      if (savedCustom) {
        try {
          const palette = JSON.parse(savedCustom) as Partial<ColorScale>;
          applyCustomPaletteToRoot(palette, savedMode);
        } catch {
          const preset = themePresets.purple;
          applyPresetToRoot(preset, savedMode);
        }
      } else {
        const preset = themePresets.purple;
        applyPresetToRoot(preset, savedMode);
      }
    } else {
      const preset = themePresets[savedColor] || themePresets.purple;
      applyPresetToRoot(preset, savedMode);
    }
  }, [defaultMode, defaultColor]);

  const value = useMemo(() => ({ mode, color, toggleTheme, setThemeMode, setThemeColor, applyThemePreset, setCustomPalette }), [mode, color, toggleTheme, setThemeMode, setThemeColor, applyThemePreset, setCustomPalette]);

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
