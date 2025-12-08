import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/shared/contexts/ThemeContext';
import { Button } from '../button';
import { cn } from '@/shared/lib/utils/cn';
import themePresets from '@/shared/lib/themes/themeDefinitions';
import { Portal } from '@/shared/lib/utils/portal';

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
    const [menuStyle, setMenuStyle] = useState<React.CSSProperties>();
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const buttonSizeMap = { sm: 'small', md: 'medium', lg: 'large' } as const;
    const buttonSize = buttonSizeMap[size] ?? 'medium';

    const recalcPosition = useCallback(() => {
      const anchor = anchorRef.current;
      if (!anchor) return;
      const rect = anchor.getBoundingClientRect();
      const width = 192; // matching w-48
      const gutter = 12;
      const gap = 8; // 버튼과 팝오버 사이 간격
      // 버튼 우측에 말풍선 모양으로 배치
      const left = rect.right + gap;
      const top = rect.top;
      // 화면 밖으로 나가지 않도록 조정
      const adjustedLeft = Math.min(left, window.innerWidth - width - gutter);
      const adjustedTop = Math.max(gutter, Math.min(top, window.innerHeight - 200 - gutter));
      setMenuStyle({ position: 'fixed', top: adjustedTop, left: adjustedLeft, width });
    }, []);

    useLayoutEffect(() => {
      if (!open) return;
      recalcPosition();
    }, [open, recalcPosition]);

    useEffect(() => {
      if (!open) return;
      const handler = () => recalcPosition();
      window.addEventListener('resize', handler);
      window.addEventListener('scroll', handler, true);
      return () => {
        window.removeEventListener('resize', handler);
        window.removeEventListener('scroll', handler, true);
      };
    }, [open, recalcPosition]);

    if (variant === 'button') {
      return (
        <Button
          ref={ref}
          variant="ghost"
          size={buttonSize}
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
          ref={(node) => {
            anchorRef.current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          }}
          onClick={() => setOpen((s) => !s)}
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200/70 bg-white/80 text-neutral-600 shadow-sm transition-all duration-200',
            'hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md hover:text-neutral-900',
            'dark:border-neutral-700/70 dark:bg-neutral-800/80 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-neutral-100',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-900',
            open && 'ring-2 ring-primary-500/50 shadow-lg',
          )}
          aria-label={isDark ? '라이트모드로 전환' : '다크모드로 전환'}
          aria-pressed={open}
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
          <Portal>
            <div
              style={menuStyle}
              className="relative rounded-xl border border-neutral-200/80 bg-white/90 p-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur-xl dark:border-neutral-700/80 dark:bg-neutral-900/90 dark:ring-white/5 z-50"
            >
              {/* 말풍선 화살표 - 테두리 (라이트) */}
              <div 
                className="absolute left-0 top-3 -translate-x-full pointer-events-none dark:hidden"
                style={{ 
                  width: 0, 
                  height: 0, 
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  borderRight: '8px solid rgb(229 231 235 / 0.8)',
                }}
              />
              {/* 말풍선 화살표 - 테두리 (다크) */}
              <div 
                className="absolute left-0 top-3 -translate-x-full pointer-events-none hidden dark:block"
                style={{ 
                  width: 0, 
                  height: 0, 
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  borderRight: '8px solid rgb(64 64 64 / 0.8)',
                }}
              />
              {/* 말풍선 화살표 - 배경 (라이트) */}
              <div 
                className="absolute left-0 top-3 -translate-x-[calc(100%-1px)] pointer-events-none dark:hidden"
                style={{ 
                  width: 0, 
                  height: 0, 
                  borderTop: '7px solid transparent',
                  borderBottom: '7px solid transparent',
                  borderRight: '7px solid rgba(255, 255, 255, 0.9)',
                }}
              />
              {/* 다크모드 말풍선 화살표 - 배경 */}
              <div 
                className="absolute left-0 top-3 -translate-x-[calc(100%-1px)] pointer-events-none hidden dark:block"
                style={{ 
                  width: 0, 
                  height: 0, 
                  borderTop: '7px solid transparent',
                  borderBottom: '7px solid transparent',
                  borderRight: '7px solid rgb(23 23 23 / 0.9)',
                }}
              />
            <div className="flex items-center justify-between px-1 pb-3 border-b border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-200">테마 모드</span>
              </div>
              <button
                onClick={toggleTheme}
                aria-label="Toggle light/dark"
                className={cn(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2",
                  isDark ? "bg-primary-600" : "bg-neutral-300"
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200",
                    isDark ? "translate-x-[22px]" : "translate-x-[2px]"
                  )}
                >
                  {isDark ? (
                    <FaMoon className="h-3 w-3 text-primary-600" />
                  ) : (
                    <FaSun className="h-3 w-3 text-amber-500" />
                  )}
                </span>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2 pt-2">
              {(['purple','orange','green','blue'] as const).map((key) => {
                const preset = themePresets[key];
                // primary['500'] 직접 접근 - 타입 안전하게 처리
                const primary = preset?.primary;
                let primary500: string | undefined;
                if (primary && typeof primary === 'object') {
                  primary500 = (primary as Record<string, string | undefined>)['500'];
                }
                // fallback 색상
                const fallbackColors: Record<typeof key, string> = {
                  purple: '#7c3aed',
                  orange: '#f97316',
                  green: '#22c55e',
                  blue: '#3b82f6',
                };
                const swatch = primary500 || fallbackColors[key];
                const isActive = color === key;
                return (
                  <button
                    key={key}
                    onClick={() => { setThemeColor(key); }}
                    aria-label={`${key} 테마 사용`}
                    className={cn(
                      'relative h-9 w-9 rounded-lg border border-neutral-200/80 transition-all duration-150',
                      'hover:-translate-y-0.5 hover:shadow-sm hover:border-neutral-300',
                      'dark:border-neutral-700/80 dark:hover:border-neutral-600',
                      isActive ? 'ring-2 ring-primary-500 shadow-md' : 'ring-0'
                    )}
                    style={{ backgroundColor: swatch }}
                  >
                    <span className="sr-only">{key} theme</span>
                    {isActive && (
                      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-white drop-shadow-sm">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
          </Portal>
        )}
      </div>
    );
  }
);

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;

