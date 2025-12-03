'use client';

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes, FaTimesCircle } from 'react-icons/fa';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastItem {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
}

interface ToastProps extends ToastItem {
  onClose: (id: string) => void;
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const slideInTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOutTop = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const StyledToast = styled.div<{ $type: ToastType; $position: string; $isClosing: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme, $type }) => {
    switch ($type) {
      case 'success':
        return theme.colors.success;
      case 'error':
        return theme.colors.error;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.info;
    }
  }};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-width: 500px;
  animation: ${({ $position, $isClosing }) => {
    if ($isClosing) {
      return $position.includes('top') ? slideOutTop : slideOut;
    }
    return $position.includes('top') ? slideInTop : slideIn;
  }} 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 250px;
    max-width: 90vw;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  flex-shrink: 0;
`;

const Message = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.5;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background-color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.text.primary};
    outline-offset: 2px;
  }
`;

const getIcon = (type: ToastType) => {
  switch (type) {
    case 'success':
      return <FaCheckCircle />;
    case 'error':
      return <FaTimesCircle />;
    case 'warning':
      return <FaExclamationCircle />;
    default:
      return <FaInfoCircle />;
  }
};

export const Toast = ({
  id,
  message,
  type = 'info',
  duration = 5000,
  position = 'top-right',
  onClose,
}: ToastProps) => {
  const [isClosing, setIsClosing] = React.useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          onClose(id);
        }, 300);
      }, duration);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [duration, id, onClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(id);
    }, 300);
  };

  return (
    <StyledToast $type={type} $position={position} $isClosing={isClosing} role="alert">
      <IconWrapper>{getIcon(type)}</IconWrapper>
      <Message>{message}</Message>
      <CloseButton onClick={handleClose} aria-label="Close toast">
        <FaTimes />
      </CloseButton>
    </StyledToast>
  );
};

export default Toast;

