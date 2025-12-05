import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface TabItem {
    label: string;
    value: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    content?: React.ReactNode;
}
export interface TabsProps {
    items: TabItem[];
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    variant?: 'default' | 'pills';
    fullWidth?: boolean;
    className?: string;
}
export declare const Tabs: ({ items, defaultValue, value: controlledValue, onChange, variant, fullWidth, className, }: TabsProps) => import("react/jsx-runtime").JSX.Element;
export default Tabs;
