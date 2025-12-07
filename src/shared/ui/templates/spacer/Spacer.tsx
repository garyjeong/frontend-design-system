import React from 'react';
import { cn } from '@/shared/lib/utils/cn';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
  axis?: 'horizontal' | 'vertical';
  flex?: boolean;
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size = 16, axis = 'vertical', flex = false, style, ...props }, ref) => {
    const width = axis === 'horizontal' ? size : 1;
    const height = axis === 'vertical' ? size : 1;
    
    return (
      <div
        ref={ref}
        className={cn(
          "shrink-0",
          flex && "flex-1",
          className
        )}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          minWidth: axis === 'horizontal' && !flex ? (typeof width === 'number' ? `${width}px` : width) : undefined,
          minHeight: axis === 'vertical' && !flex ? (typeof height === 'number' ? `${height}px` : height) : undefined,
          ...style,
        }}
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer';

export default Spacer;


