import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/shared/contexts/ThemeContext';
import { Button } from '../button';
import { cn } from '@/shared/lib/utils/cn';
import themePresets from '@/shared/lib/themes/themeDefinitions';
import ThemeCustomizer from './ThemeCustomizer';

export interface ThemeToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: 'icon' | 'button';
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, variant = 'icon', showLabel = false, size = 'md', ...props }, ref) => {
    const { mode, toggleTheme, color, setThemeColor } = useTheme();
    const isDark = mode === 'dark';
    const [open, setOpen] = useState(false);

    if (variant === 'button') {
      return (
        <Button
          ref={ref}
          variant="ghost"
          size={size}
          onClick={toggleTheme}
          className={cn(className)}
          aria-label={isDark ? '라이트모드로 전환' : '다크모드로 전환'}
          {...props}
        >
          {isDark ? (
            <>
              <FaSun className="h-4 w-4" />
              {showLabel && <span>라이트 모드</span>}
            </>
          ) : (
            <>
              <FaMoon className="h-4 w-4" />
              {showLabel && <span>다크 모드</span>}
            </>
          )}
        </Button>
      );
    }

    // Icon variant (default) with compact swatch popover
    return (
      <div className={cn('relative inline-flex items-center', className)}>
        <button
          ref={ref}
          onClick={() => setOpen((s) => !s)}
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-lg text-neutral-600 transition-colors',
            'hover:bg-neutral-100 hover:text-neutral-900',
            'dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2',
          )}
          aria-label={isDark ? '라이트모드로 전환' : '다크모드로 전환'}
          {...props}
        >
          {isDark ? (
            <FaSun className="h-4 w-4 transition-transform duration-200" />
          ) : (
            <FaMoon className="h-4 w-4 transition-transform duration-200" />
          )}
        </button>

        {/* Swatch popover */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-soft p-2 z-50">
            <div className="flex items-center justify-between px-1 pb-2">
              <span className="text-xs text-neutral-600 dark:text-neutral-300">Theme</span>
              <button
                onClick={toggleTheme}
                aria-label="Toggle light/dark"
                className="text-xs text-neutral-500 hover:text-neutral-700 dark:text-neutral-400"
              >
                {isDark ? 'Light' : 'Dark'}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {(['purple','orange','green','custom'] as const).map((key) => {
                const preset = themePresets[key];
                const swatch = preset.primary?.['500'] || '#000';
                const isActive = color === key;
                return (
                  <button
                    key={key}
                    onClick={() => { setThemeColor(key as any); setOpen(false); }}
                    aria-label={`Use ${key} theme`}
                    className={cn(
                      'h-8 w-8 rounded-md border-2 transition-transform',
                      isActive ? 'ring-2 ring-primary-500' : 'border-transparent'
                    )}
                    style={{ backgroundColor: swatch }}
                  />
                );
              })}
            </div>
            <div className="pt-2">
              <ThemeCustomizer onClose={() => setOpen(false)} />
            </div>
          </div>
        )}
      </div>
    );
  }
);

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;

