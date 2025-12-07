import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const drawerVariants: (props?: {
    open?: boolean;
    position?: "left" | "right" | "top" | "bottom";
} & import('class-variance-authority/types').ClassProp) => string;
export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof drawerVariants> {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}
export declare const Drawer: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDivElement>>;
export default Drawer;
