import React, { useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { TextField } from '@/shared/ui/atoms/input';
import { FaSearch, FaTimes } from 'react-icons/fa';

const searchBarVariants = cva(
  "relative w-full",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SearchBarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value'> {
  onSearch?: (value: string) => void;
  onClear?: () => void;
  clearable?: boolean;
  size?: VariantProps<typeof searchBarVariants>['size'];
  placeholder?: string;
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      className,
      onSearch,
      onClear,
      clearable = true,
      size,
      placeholder = "Search...",
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onSearch?.(newValue);
    };

    const handleClear = () => {
      setValue('');
      onSearch?.('');
      onClear?.();
    };

    return (
      <div className={cn(searchBarVariants({ size }), className)}>
        <TextField
          ref={ref}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          icon={FaSearch}
          iconPosition="left"
          {...(props as React.ComponentProps<typeof TextField>)}
        />
        {clearable && value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            aria-label="Clear search"
          >
            <FaTimes className="text-lg" />
          </button>
        )}
      </div>
    );
  },
);

SearchBar.displayName = 'SearchBar';

export default SearchBar;

