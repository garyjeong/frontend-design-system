import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const avatarVariants = cva(
  "inline-flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium overflow-hidden",
  {
    variants: {
      size: {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-lg",
      },
      variant: {
        circle: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-lg",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "circle",
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: string | React.ReactNode;
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, variant, src, alt, fallback, ...props }, ref) => {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
      setImageError(true);
    };

    const getInitials = () => {
      if (typeof fallback === 'string') {
        return fallback.slice(0, 2).toUpperCase();
      }
      if (alt) {
        const words = alt.trim().split(/\s+/);
        if (words.length >= 2) {
          return (words[0][0] + words[words.length - 1][0]).toUpperCase();
        }
        if (words.length === 1 && words[0].length > 0) {
          return words[0][0].toUpperCase();
        }
      }
      return '?';
    };

    const showImage = src && !imageError;
    const showInitials = !showImage && !fallback;
    const showFallback = !showImage && fallback;

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size, variant }), className)}
        role="img"
        aria-label={alt || 'Avatar'}
        {...props}
      >
        {showImage && (
          <img
            src={src}
            alt={alt}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
        )}
        {showInitials && (
          <div className="flex w-full h-full items-center justify-center uppercase select-none">
            {getInitials()}
          </div>
        )}
        {showFallback && (
          <div className="flex w-full h-full items-center justify-center">
            {typeof fallback === 'string' ? (
              <span>{fallback}</span>
            ) : (
              fallback
            )}
          </div>
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

export default Avatar;
