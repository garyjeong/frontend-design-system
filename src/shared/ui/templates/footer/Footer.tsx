import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

const footerVariants = cva(
  "bg-white dark:bg-neutral-800",
  {
    variants: {
      variant: {
        default: "py-8 px-6 border-t border-neutral-200 dark:border-neutral-700",
        minimal: "py-4 px-6 border-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> {
  links?: Array<{ label: string; href: string }>; // kept for legacy tests
  copyright?: string;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, variant, links, copyright, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(footerVariants({ variant }), className)}
        role="contentinfo"
        {...props}
      >
        {links && links.length > 0 && (
          <div className="flex flex-wrap items-center gap-6 mb-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-primary-800 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        {copyright && (
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {copyright}
          </div>
        )}
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

export default Footer;
