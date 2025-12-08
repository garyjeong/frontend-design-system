import React, { InputHTMLAttributes, useRef, useState, useCallback } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';
import { FaUpload, FaTimesCircle, FaFileAlt } from 'react-icons/fa';

const fileUploadVariants = cva(
  "w-full border-2 border-dashed bg-neutral-50 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        default: "flex flex-col items-center justify-center px-4 py-6",
        drag: "flex flex-col items-center justify-center px-4 py-6",
      },
      size: {
        sm: "px-3 py-4",
        md: "px-4 py-6",
        lg: "px-6 py-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface FileUploadProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'size'>,
    VariantProps<typeof fileUploadVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  multiple?: boolean;
  accept?: string;
  onFileChange?: (files: File[]) => void;
}

export const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      variant,
      size,
      multiple = false,
      accept,
      onFileChange,
      id,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const fileInputId = id || generatedId;
    const errorId = error ? `${fileInputId}-error` : undefined;
    const helperId = helperText ? `${fileInputId}-helper` : undefined;
    const describedBy = [errorId, helperId, ariaDescribedBy].filter(Boolean).join(' ') || undefined;

    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);
      setSelectedFiles(files);
      onFileChange?.(files);
    }, [onFileChange]);

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const files = Array.from(event.dataTransfer.files);
      setSelectedFiles(files);
      onFileChange?.(files);
    }, [onFileChange]);

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
    }, []);

    const handleRemoveFile = useCallback((fileToRemove: File) => {
      setSelectedFiles((prevFiles) => {
        const newFiles = prevFiles.filter((file) => file !== fileToRemove);
        onFileChange?.(newFiles);
        return newFiles;
      });
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    }, [onFileChange]);

    return (
      <div className={cn("flex flex-col w-full", className)}>
        {label && (
          <label
            htmlFor={fileInputId}
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5 block"
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            fileUploadVariants({ variant, size }),
            error && "border-error-500 hover:border-error-500",
            className
          )}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => inputRef.current?.click()}
        >
          <input
            id={fileInputId}
            ref={(el) => {
              if (typeof ref === 'function') ref(el);
              (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
            }}
            type="file"
            multiple={multiple}
            accept={accept}
            onChange={handleFileChange}
            className="sr-only"
            aria-label={ariaLabel || label}
            aria-describedby={describedBy}
            {...props}
          />
          <FaUpload className="text-primary-800 text-3xl mb-3" />
          <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center">
            <span className="font-semibold text-primary-800 dark:text-primary-400">Click to upload</span> or drag and drop
          </p>
          {helperText && !error && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 text-center">{helperText}</p>
          )}
        </div>

        {selectedFiles.length > 0 && (
          <div className="mt-4 space-y-2">
            {selectedFiles.map((file, index) => (
              <div
                key={file.name + index}
                className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
              >
                <div className="flex items-center gap-2">
                  <FaFileAlt className="text-neutral-500 dark:text-neutral-400" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300 truncate">{file.name}</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">({(file.size / 1024).toFixed(2)} KB)</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFile(file)}
                  className="text-neutral-500 hover:text-error-500 transition-colors"
                  aria-label={`Remove ${file.name}`}
                >
                  <FaTimesCircle className="text-lg" />
                </button>
              </div>
            ))}
          </div>
        )}

        {error && (
          <span id={errorId} role="alert" className="text-xs font-medium text-error-500 mt-1.5 flex items-center gap-1 animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </span>
        )}
        {helperText && error && (
          <span id={helperId} className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 block">
            {helperText}
          </span>
        )}
      </div>
    );
  },
);

FileUpload.displayName = 'FileUpload';

export default FileUpload;
