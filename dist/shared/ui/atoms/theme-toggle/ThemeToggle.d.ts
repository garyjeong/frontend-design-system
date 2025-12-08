import { default as React } from 'react';

export interface ThemeToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    variant?: 'icon' | 'button';
    showLabel?: boolean;
    size?: 'sm' | 'md' | 'lg';
}
export declare const ThemeToggle: React.ForwardRefExoticComponent<ThemeToggleProps & React.RefAttributes<HTMLButtonElement>>;
export default ThemeToggle;
