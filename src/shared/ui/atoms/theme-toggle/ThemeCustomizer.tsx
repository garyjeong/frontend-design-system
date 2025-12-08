import React, { useState } from 'react';
import { useTheme } from '@/shared/contexts/ThemeContext';
import { Button } from '../button';

interface ThemeCustomizerProps {
  onClose?: () => void;
}

export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ onClose }) => {
  const { color, setCustomPalette, setThemeColor } = useTheme();
  // default to current primary 500 computed from CSS var if available
  const getCurrentPrimary = () => {
    if (typeof window === 'undefined') return '#000000';
    const computed = getComputedStyle(document.documentElement).getPropertyValue('--theme-primary-500') || '';
    return computed.trim() || '#000000';
  };

  const [primary500, setPrimary500] = useState(getCurrentPrimary());

  const apply = () => {
    setCustomPalette({ 500: primary500 });
    setThemeColor('custom');
    if (onClose) onClose();
  };

  return (
    <div className="space-y-3 p-3">
      <div className="text-sm text-neutral-700 dark:text-neutral-300">Customize primary color</div>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={primary500}
          onChange={(e) => setPrimary500(e.target.value)}
          aria-label="Primary color"
          className="w-10 h-10 p-0 border rounded"
        />
        <input
          type="text"
          value={primary500}
          onChange={(e) => setPrimary500(e.target.value)}
          className="text-sm px-2 py-1 border rounded bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
        />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="primary" size="small" onClick={apply}>Apply</Button>
        <Button variant="ghost" size="small" onClick={() => { if (onClose) onClose(); }}>Cancel</Button>
      </div>
    </div>
  );
};

export default ThemeCustomizer;


