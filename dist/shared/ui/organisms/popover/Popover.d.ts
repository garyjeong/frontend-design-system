import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const popoverVariants: (props?: {
    placement?: "left" | "right" | "top" | "bottom";
    visible?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export interface PopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>, VariantProps<typeof popoverVariants> {
    children: React.ReactElement;
    content: React.ReactNode;
    arrow?: boolean;
    trigger?: 'click' | 'hover';
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;
export default Popover;
