import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const popoverVariants: (props?: ({
    placement?: "left" | "right" | "bottom" | "top" | null | undefined;
    visible?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>, VariantProps<typeof popoverVariants> {
    children: React.ReactNode;
    content: React.ReactNode;
    trigger?: 'click' | 'hover';
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    arrow?: boolean;
}
export declare const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;
export default Popover;
