import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const stepperVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const stepIconVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    status?: "active" | "completed" | "upcoming" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
