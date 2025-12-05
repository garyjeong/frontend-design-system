import { default as React } from 'react';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number | string;
    axis?: 'horizontal' | 'vertical';
    flex?: boolean;
}
export declare const Spacer: React.ForwardRefExoticComponent<SpacerProps & React.RefAttributes<HTMLDivElement>>;
export default Spacer;
