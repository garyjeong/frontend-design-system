import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';

declare const stepperVariants: (props?: {
    orientation?: "horizontal" | "vertical";
} & import('class-variance-authority/types').ClassProp) => string;
declare const stepIconVariants: (props?: {
    size?: "sm" | "md" | "lg";
    status?: "active" | "completed" | "upcoming";
} & import('class-variance-authority/types').ClassProp) => string;
export interface Step {
    label: string;
    description?: string;
}
export interface StepperProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stepperVariants> {
    steps: Step[];
    currentStep: number;
    size?: VariantProps<typeof stepIconVariants>['size'];
}
export declare const Stepper: React.ForwardRefExoticComponent<StepperProps & React.RefAttributes<HTMLDivElement>>;
export default Stepper;
