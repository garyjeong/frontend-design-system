'use client';

import { createContext, useContext, useEffect, useMemo, useState, useCallback, ReactNode } from 'react';
import themePresets, { ThemeColorKey, ThemePreset, ColorScale } from '@/shared/lib/themes/themeDefinitions';
import { contrastRatio } from '@/shared/lib/accessibility/contrast';

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
  // --- accessibility: ensure preset produces accessible darker variants ---
  const normalizeHex = (hex: string) => {
    const h = (hex || '').trim();
    if (h.startsWith('rgb')) return h;
    if (!h.startsWith('#')) return h;
    if (h.length === 4) {
      return '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
    }
    return h;
  };
  const darkenHex = (hex: string, amount: number) => {
    try {
      const h = normalizeHex(hex);
      if (h.startsWith('rgb')) return h;
      const int = parseInt(h.slice(1), 16);
      let r = (int >> 16) & 255;
      let g = (int >> 8) & 255;
      let b = int & 255;
      r = Math.max(0, Math.floor(r * (1 - amount)));
      g = Math.max(0, Math.floor(g * (1 - amount)));
      b = Math.max(0, Math.floor(b * (1 - amount)));
      const out = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      return out;
    } catch {
      return hex;
    }
  };
  const fgWhite = '#ffffff';
  const fgDarkText = '#0f172a';
  const primary500 = primary['500'] || getComputedStyle(root).getPropertyValue('--theme-primary-500') || '';
  let candidate = normalizeHex(primary500 as string) || '';
  if (candidate) {
    let ratioWhite = contrastRatio(fgWhite, candidate);
    let ratioDark = contrastRatio(fgDarkText, candidate);
    let step = 0;
    while ((ratioWhite < 4.5 || ratioDark < 4.5) && step < 10) {
      step += 1;
      const amt = 0.06 * step;
      candidate = darkenHex(candidate, amt);
      ratioWhite = contrastRatio(fgWhite, candidate);
      ratioDark = contrastRatio(fgDarkText, candidate);
    }
    root.style.setProperty('--theme-primary-700', candidate);
    // prepare an even darker primary-800 for strong accents/buttons
    let chosen800 = candidate;
    let ratio800 = contrastRatio(fgWhite, chosen800);
    let step800 = 0;
    while (ratio800 < 4.5 && step800 < 10) {
      step800 += 1;
      const amt800 = 0.06 * (step800 + 1);
      chosen800 = darkenHex(chosen800, amt800);
      ratio800 = contrastRatio(fgWhite, chosen800);
    }
    root.style.setProperty('--theme-primary-800', chosen800);
    // ensure primary-500 remains set (use normalized original or the candidate)
    root.style.setProperty('--theme-primary-500', normalizeHex(primary['500'] || '') || candidate);
  }
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
  // compute accessible darker variant for primary-700 if needed
  const primary500 = palette['500'] || getComputedStyle(root).getPropertyValue('--theme-primary-500') || '';
  const normalizeHex = (hex: string) => {
    const h = hex.trim();
    if (h.startsWith('rgb')) return h; // leave rgb as-is
    if (!h.startsWith('#')) return h;
    if (h.length === 4) {
      return '#' + h[1] + h[1] + h[2] + h[2] + h[3] + h[3];
    }
    return h;
  };
  const darkenHex = (hex: string, amount: number) => {
    try {
      const h = normalizeHex(hex);
      if (h.startsWith('rgb')) return h;
      const int = parseInt(h.slice(1), 16);
      let r = (int >> 16) & 255;
      let g = (int >> 8) & 255;
      let b = int & 255;
      r = Math.max(0, Math.floor(r * (1 - amount)));
      g = Math.max(0, Math.floor(g * (1 - amount)));
      b = Math.max(0, Math.floor(b * (1 - amount)));
      const out = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      return out;
    } catch {
      return hex;
    }
  };
  const fgWhite = '#ffffff';
  const fgDarkText = '#0f172a';
  let candidate = normalizeHex(primary500 as string) || '';
  let chosen = candidate;
  if (candidate) {
    // Ensure candidate meets contrast against white (for white foreground on buttons)
    // and against dark text on light backgrounds (for accent text/links when applicable).
    let ratioWhite = contrastRatio(fgWhite, candidate);
    let ratioDark = contrastRatio(fgDarkText, candidate);
    let step = 0;
    // Darken until both constraints satisfied or we hit a safety cap
    while ((ratioWhite < 4.5 || ratioDark < 4.5) && step < 10) {
      step += 1;
      const amt = 0.06 * step;
      candidate = darkenHex(candidate, amt);
      ratioWhite = contrastRatio(fgWhite, candidate);
      ratioDark = contrastRatio(fgDarkText, candidate);
    }
    chosen = candidate;
    // Set primary-700 to this accessible variant
    root.style.setProperty('--theme-primary-700', chosen);

    // create an even darker variant for --theme-primary-800 (used by buttons/strong accents)
    let chosen800 = chosen;
    let ratio800 = contrastRatio(fgWhite, chosen800);
    let step800 = 0;
    while (ratio800 < 4.5 && step800 < 10) {
      step800 += 1;
      const amt800 = 0.06 * (step800 + 1);
      chosen800 = darkenHex(chosen800, amt800);
      ratio800 = contrastRatio(fgWhite, chosen800);
    }
    root.style.setProperty('--theme-primary-800', chosen800);
    // Ensure --theme-primary-500 still exists (user-provided or computed)
    root.style.setProperty('--theme-primary-500', normalizeHex(primary500 as string) || chosen);
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
    localStorage.setItem(THEME_COLOR_KEY, newColor);
    // Theme will be re-applied by useEffect when color changes
  }, []);

  const setCustomPalette = useCallback((palette: Partial<ColorScale>) => {
    // persist custom palette
    localStorage.setItem(THEME_CUSTOM_KEY, JSON.stringify(palette));
    // switch to custom color key - useEffect will re-apply theme
    setColor('custom');
    localStorage.setItem(THEME_COLOR_KEY, 'custom');
  }, []);

  const setThemeMode = useCallback((newMode: ThemeMode) => {
    setMode(newMode);
    localStorage.setItem(THEME_STORAGE_KEY, newMode);
    // Theme will be re-applied by useEffect when mode changes
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeMode(mode === 'light' ? 'dark' : 'light');
  }, [mode, setThemeMode]);

  // Initialize theme from localStorage on mount
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

  // Re-apply theme when mode or color changes
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.classList.toggle('dark', mode === 'dark');
    
    if (color === 'custom') {
      const savedCustom = localStorage.getItem(THEME_CUSTOM_KEY);
      if (savedCustom) {
        try {
          const palette = JSON.parse(savedCustom) as Partial<ColorScale>;
          applyCustomPaletteToRoot(palette, mode);
        } catch {
          const preset = themePresets.purple;
          applyPresetToRoot(preset, mode);
        }
      } else {
        const preset = themePresets.purple;
        applyPresetToRoot(preset, mode);
      }
    } else {
      const preset = themePresets[color] || themePresets.purple;
      applyPresetToRoot(preset, mode);
    }
  }, [mode, color]);

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
