import { type VariantProps } from 'class-variance-authority';
import { buttonVariants, Button, type ButtonProps } from './Button';

export { Button, type ButtonProps, buttonVariants };
export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

export { Button as default } from './Button';
