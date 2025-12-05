import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const drawerVariants: (props?: ({
    open?: boolean | null | undefined;
    position?: "left" | "right" | "bottom" | "top" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof drawerVariants> {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}
export declare const Drawer: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDivElement>>;
export default Drawer;
