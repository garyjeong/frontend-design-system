
import * as React from 'react';
import { generateId, getAriaProps } from '@/utils/a11y';

interface UseTooltipProps {
  /**
   * The delay in milliseconds before the tooltip appears.
   */
  delay?: number;
  /**
   * The content of the tooltip.
   */
  content: React.ReactNode;
  /**
   * If `true`, the tooltip will be open by default.
   */
  defaultOpen?: boolean;
  /**
   * If `true`, the tooltip will be open.
   */
  open?: boolean;
  /**
   * Callback fired when the tooltip is opened or closed.
   */
  onOpenChange?: (open: boolean) => void;
}

interface UseTooltipReturn {
  /**
   * Props to spread on the trigger element.
   */
  triggerProps: React.HTMLAttributes<HTMLElement>;
  /**
   * Props to spread on the tooltip element.
   */
  tooltipProps: React.HTMLAttributes<HTMLDivElement>;
  /**
   * Wether the tooltip is visible.
   */
  isVisible: boolean;
  /**
   * The id of the tooltip content.
   */
  contentId: string;
}

export const useTooltip = (props: UseTooltipProps): UseTooltipReturn => {
  const { delay = 300, content, defaultOpen = false, open: openProp, onOpenChange } = props;

  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : isOpen;

  const contentId = React.useRef(generateId('tooltip')).current;
  const triggerRef = React.useRef<HTMLElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleOpen = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (!isControlled) {
        setIsOpen(true);
      }
      onOpenChange?.(true);
    }, delay);
  }, [delay, isControlled, onOpenChange]);

  const handleClose = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (!isControlled) {
      setIsOpen(false);
    }
    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  const commonProps = {
    onMouseEnter: handleOpen,
    onMouseLeave: handleClose,
    onFocus: handleOpen,
    onBlur: handleClose,
    onKeyDown: (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
  };

  const triggerProps: React.HTMLAttributes<HTMLElement> = {
    ...commonProps,
    'aria-describedby': open ? contentId : undefined,
    ref: triggerRef,
  };

  const tooltipProps: React.HTMLAttributes<HTMLDivElement> = {
    ...getAriaProps(props),
    id: contentId,
    role: 'tooltip',
  };

  return {
    triggerProps,
    tooltipProps,
    isVisible: open,
    contentId,
  };
};
