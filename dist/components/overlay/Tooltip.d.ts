import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const tooltipVariants: (props?: ({
    placement?: "left" | "right" | "bottom" | "top" | null | undefined;
    visible?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'>, VariantProps<typeof tooltipVariants> {
    children: React.ReactNode;
    content: React.ReactNode;
    delay?: number;
}
export declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export default Tooltip;
