import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const accordionVariants: (props?: {
    variant?: "default" | "filled" | "outlined";
} & import('class-variance-authority/types').ClassProp) => string;
export interface AccordionItem {
    id?: string;
    title: string;
    content: React.ReactNode;
    disabled?: boolean;
    defaultExpanded?: boolean;
}
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof accordionVariants> {
    items: AccordionItem[];
    allowMultiple?: boolean;
    defaultExpanded?: string[];
}
export declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
export default Accordion;
