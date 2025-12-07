import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const tooltipVariants: (props?: {
    placement?: "left" | "right" | "top" | "bottom";
    visible?: boolean;
} & import('class-variance-authority/types').ClassProp) => string;
export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>, VariantProps<typeof tooltipVariants> {
    children: React.ReactElement;
    content: React.ReactNode;
    delay?: number;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export default Tooltip;
