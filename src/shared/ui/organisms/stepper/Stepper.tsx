import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { FaCheck } from 'react-icons/fa';

const stepperVariants = cva(
  "flex items-center justify-between w-full",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col items-start",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

const stepVariants = cva(
  "flex items-center",
  {
    variants: {
      orientation: {
        horizontal: "flex-col text-center",
        vertical: "flex-row",
      },
      status: {
        active: "text-primary-600 dark:text-primary-400",
        completed: "text-success-600 dark:text-success-400",
        upcoming: "text-neutral-500 dark:text-neutral-400",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      status: "upcoming",
    },
  }
);

const stepIconVariants = cva(
  "flex items-center justify-center font-bold transition-all duration-200 flex-shrink-0",
  {
    variants: {
      size: {
        sm: "w-6 h-6 text-xs",
        md: "w-8 h-8 text-sm",
        lg: "w-10 h-10 text-base",
      },
      status: {
        active: "bg-primary-500 text-white",
        completed: "bg-success-500 text-white",
        upcoming: "bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300",
      },
    },
    defaultVariants: {
      size: "md",
      status: "upcoming",
    },
  }
);

export interface Step {
  label: string;
  description?: string;
}

export interface StepperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stepperVariants> {
  steps: Step[];
  currentStep: number;
  size?: VariantProps<typeof stepIconVariants>['size'];
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ steps, currentStep, orientation = 'horizontal', size = 'md', className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(stepperVariants({ orientation, className }))} {...props}>
        {steps.map((step, index) => {
          const status = index < currentStep
            ? 'completed'
            : index === currentStep
            ? 'active'
            : 'upcoming';

          const isLastStep = index === steps.length - 1;

          return (
            <React.Fragment key={index}>
              <div className={cn(stepVariants({ orientation, status }))}>
                <div className={cn(stepIconVariants({ size, status }))}>
                  {status === 'completed' ? <FaCheck className="text-white" /> : index + 1}
                </div>
                <div className={cn(
                  orientation === 'horizontal' ? "mt-2"
                  : "ml-3 text-left"
                )}>
                  <div className="font-medium text-sm">{step.label}</div>
                  {step.description && (
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{step.description}</div>
                  )}
                </div>
              </div>
              {!isLastStep && (
                <div className={cn(
                  "flex-1",
                  orientation === 'horizontal' && "h-[2px] bg-neutral-200 dark:bg-neutral-700 mx-2",
                  orientation === 'vertical' && "w-[2px] bg-neutral-200 dark:bg-neutral-700 my-2 ml-[19px]"
                )} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';

export default Stepper;
