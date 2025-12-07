import React, { useState, useRef, useCallback, useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { useClickAway } from '@/shared/lib/hooks/useClickAway';
import { TextField } from '@/shared/ui/atoms/input';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

export const autocompleteVariants = cva(
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

export const dropdownVariants = cva(
  "absolute z-50 w-full mt-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-soft-lg max-h-60 overflow-auto",
);

export const optionVariants = cva(
  "px-4 py-2 cursor-pointer transition-colors",
  {
    variants: {
      selected: {
        true: "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400",
        false: "hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-900 dark:text-neutral-100",
      },
      highlighted: {
        true: "bg-neutral-100 dark:bg-neutral-700",
        false: "",
      },
    },
    defaultVariants: {
      selected: false,
      highlighted: false,
    },
  }
);

export interface AutocompleteOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface AutocompleteProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value' | 'defaultValue' | 'type' | 'onSelect'> {
  options: AutocompleteOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSelect?: (option: AutocompleteOption) => void;
  filterFn?: (option: AutocompleteOption, inputValue: string) => boolean;
  size?: VariantProps<typeof autocompleteVariants>['size'];
  placeholder?: string;
  clearable?: boolean;
  label?: string;
  error?: string;
  helperText?: string;
}

const defaultFilterFn = (option: AutocompleteOption, inputValue: string): boolean => {
  return option.label.toLowerCase().includes(inputValue.toLowerCase());
};

export const Autocomplete = React.forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      className,
      options,
      value: controlledValue,
      defaultValue = '',
      onChange,
      onSelect,
      filterFn = defaultFilterFn,
      size,
      placeholder = "Type to search...",
      clearable = true,
      label,
      error,
      helperText,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : uncontrolledValue;

    const containerRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const inputId = useId();

    const filteredOptions = value
      ? options.filter((option) => filterFn(option, value))
      : options;

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onChange?.(newValue);
      setIsOpen(true);
      setHighlightedIndex(-1);
    }, [isControlled, onChange]);

    const handleSelect = useCallback((option: AutocompleteOption) => {
      if (option.disabled) return;
      const newValue = option.value;
      if (!isControlled) {
        setUncontrolledValue(newValue);
      }
      onChange?.(newValue);
      onSelect?.(option);
      setIsOpen(false);
      setHighlightedIndex(-1);
    }, [isControlled, onChange, onSelect]);

    const handleClear = useCallback(() => {
      if (!isControlled) {
        setUncontrolledValue('');
      }
      onChange?.('');
      setIsOpen(false);
      setHighlightedIndex(-1);
    }, [isControlled, onChange]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen || filteredOptions.length === 0) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          setIsOpen(true);
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
            handleSelect(filteredOptions[highlightedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
      }
    }, [isOpen, filteredOptions, highlightedIndex, handleSelect]);

    useClickAway({
      ref: containerRef as React.RefObject<HTMLElement>,
      handler: () => setIsOpen(false),
      enabled: isOpen,
    });

    // const selectedOption = options.find((opt) => opt.value === value);

    return (
      <div ref={containerRef} className={cn(autocompleteVariants({ size }), className)}>
        <div className="relative">
          <TextField
            ref={ref}
            id={inputId}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            label={label}
            error={error}
            helperText={helperText}
            disabled={disabled}
            icon={FaChevronDown}
            iconPosition="right"
            {...props}
          />
          {clearable && value && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-10 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              aria-label="Clear"
            >
              <FaTimes className="text-sm" />
            </button>
          )}
        </div>
        {isOpen && filteredOptions.length > 0 && (
          <div
            ref={dropdownRef}
            className={dropdownVariants()}
            role="listbox"
            aria-labelledby={inputId}
          >
            {filteredOptions.map((option, index) => (
              <div
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                className={cn(
                  optionVariants({
                    selected: option.value === value,
                    highlighted: index === highlightedIndex,
                  }),
                  option.disabled && "opacity-50 cursor-not-allowed"
                )}
                onClick={() => !option.disabled && handleSelect(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
        {isOpen && filteredOptions.length === 0 && value && (
          <div className={cn(dropdownVariants(), "p-4 text-center text-neutral-500 dark:text-neutral-400")}>
            No options found
          </div>
        )}
      </div>
    );
  }
);

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;

