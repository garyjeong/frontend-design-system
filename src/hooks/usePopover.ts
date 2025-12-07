
import * as React from 'react';
import { generateId, getAriaProps } from '@/utils/a11y';
import { useFocusTrap } from '@/hooks/useFocusTrap';

interface UsePopoverProps {
  /**
   * The content of the popover.
   */
  content: React.ReactNode;
  /**
   * The interaction trigger for the popover.
   */
  trigger?: 'click' | 'hover';
  /**
   * If `true`, the popover will be open by default.
   */
  defaultOpen?: boolean;
  /**
   * If `true`, the popover will be open.
   */
  open?: boolean;
  /**
   * Callback fired when the popover is opened or closed.
   */
  onOpenChange?: (open: boolean) => void;
}

interface UsePopoverReturn {
  /**
   * Props to spread on the trigger element.
   */
  triggerProps: React.HTMLAttributes<HTMLElement>;
  /**
   * Props to spread on the popover element.
   */
  popoverProps: React.HTMLAttributes<HTMLDivElement>;
  /**
   * Wether the popover is open.
   */
  isOpen: boolean;
  /**
   * The id of the popover content.
   */
  contentId: string;
}

export const usePopover = (props: UsePopoverProps): UsePopoverReturn => {
  const { content, trigger = 'click', defaultOpen = false, open: openProp, onOpenChange } = props;

  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : isOpen;

  const contentId = React.useRef(generateId('popover')).current;
  const triggerRef = React.useRef<HTMLElement>(null);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  const handleOpen = React.useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpenChange?.(true);
  }, [isControlled, onOpenChange]);

  const handleClose = React.useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onOpenChange?.(false);
  }, [isControlled, onOpenChange]);

  const handleClick = React.useCallback(() => {
    if (trigger === 'click') {
      if (open) {
        handleClose();
      } else {
        handleOpen();
      }
    }
  }, [trigger, open, handleClose, handleOpen]);

  const handleMouseEnter = React.useCallback(() => {
    if (trigger === 'hover') {
      handleOpen();
    }
  }, [trigger, handleOpen]);

  const handleMouseLeave = React.useCallback(() => {
    if (trigger === 'hover') {
      handleClose();
    }
  }, [trigger, handleClose]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        open &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (open && trigger === 'click') {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, trigger, handleClose]);

  useFocusTrap({ enabled: open, containerRef: popoverRef });

  const triggerProps: React.HTMLAttributes<HTMLElement> = {
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    'aria-haspopup': 'dialog',
    'aria-expanded': open,
    'aria-controls': contentId,
    ref: triggerRef,
  };

  const popoverProps: React.HTMLAttributes<HTMLDivElement> = {
    ...getAriaProps(props),
    id: contentId,
    role: 'dialog',
    tabIndex: -1,
    ref: popoverRef,
  };

  return {
    triggerProps,
    popoverProps,
    isOpen: open,
    contentId,
  };
};
