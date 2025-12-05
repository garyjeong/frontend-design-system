import { default as React } from '../../../node_modules/.pnpm/react@19.2.1/node_modules/react';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number | string;
    axis?: 'horizontal' | 'vertical';
    flex?: boolean;
}
export declare const Spacer: React.ForwardRefExoticComponent<SpacerProps & React.RefAttributes<HTMLDivElement>>;
export default Spacer;
