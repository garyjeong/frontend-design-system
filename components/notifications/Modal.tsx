'use client';

import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(50px);
    opacity: 0;
  }
`;

const Overlay = styled.div<{ $isClosing: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  animation: ${({ $isClosing }) => ($isClosing ? fadeOut : fadeIn)} 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const ModalContainer = styled.div<{ $size: string; $isClosing: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '400px';
      case 'medium':
        return '600px';
      case 'large':
        return '800px';
      case 'full':
        return '95vw';
      default:
        return '600px';
    }
  }};
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${({ $isClosing }) => ($isClosing ? slideDown : slideUp)} 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 95vw;
    max-height: 95vh;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  overflow-y: auto;
  flex: 1;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
}: ModalProps) => {
  const [isClosing, setIsClosing] = React.useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
      return;
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, closeOnEscape]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen && !isClosing) {
    return null;
  }

  return (
    <Overlay $isClosing={isClosing} onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby={title ? 'modal-title' : undefined}>
      <ModalContainer $size={size} $isClosing={isClosing}>
        {(title || showCloseButton) && (
          <ModalHeader>
            {title && <ModalTitle id="modal-title">{title}</ModalTitle>}
            {showCloseButton && (
              <CloseButton onClick={handleClose} aria-label="Close modal">
                <FaTimes />
              </CloseButton>
            )}
          </ModalHeader>
        )}
        {children && <ModalContent>{children}</ModalContent>}
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

