import { default as React } from 'react';

export interface TabItem {
    label: string;
    value: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    content?: React.ReactNode;
}
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    items: TabItem[];
    value: string;
    onValueChange: (value: string) => void;
    variant?: 'default' | 'underlined' | 'pills';
}
export declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export default Tabs;
