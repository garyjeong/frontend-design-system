'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

export type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  shape?: 'circle' | 'square';
  fallback?: React.ReactNode;
}

interface StyledAvatarProps {
  $size: AvatarSize;
  $shape: 'circle' | 'square';
}

const getSizeValue = (size: AvatarSize, theme: any) => {
  switch (size) {
    case 'small':
      return theme.spacing.xl;
    case 'medium':
      return '48px';
    case 'large':
      return '64px';
    case 'xlarge':
      return '96px';
    default:
      return '48px';
  }
};

const StyledAvatar = styled.div<StyledAvatarProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size, theme }) => getSizeValue($size, theme)};
  height: ${({ $size, theme }) => getSizeValue($size, theme)};
  border-radius: ${({ $shape, theme }) => ($shape === 'circle' ? theme.borderRadius.full : theme.borderRadius.md)};
  background-color: ${({ theme }) => theme.colors.background.default};
  border: 2px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  flex-shrink: 0;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const AvatarInitials = styled.div<{ $size: AvatarSize }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${({ $size, theme }) => {
    switch ($size) {
      case 'small':
        return theme.typography.fontSize.sm;
      case 'medium':
        return theme.typography.fontSize.base;
      case 'large':
        return theme.typography.fontSize.lg;
      case 'xlarge':
        return theme.typography.fontSize.xl;
      default:
        return theme.typography.fontSize.base;
    }
  }};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-transform: uppercase;
  user-select: none;
`;

const AvatarFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Avatar = ({
  src,
  alt,
  initials,
  size = 'medium',
  shape = 'circle',
  fallback,
  ...props
}: AvatarProps) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const getInitials = () => {
    if (initials) {
      return initials.slice(0, 2);
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
  const showInitials = !showImage && !fallback && getInitials();
  const showFallback = !showImage && fallback;

  return (
    <StyledAvatar $size={size} $shape={shape} {...props} role="img" aria-label={alt || 'Avatar'}>
      {showImage && (
        <AvatarImage
          src={src}
          alt={alt}
          onError={handleImageError}
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
      )}
      {showInitials && <AvatarInitials $size={size}>{getInitials()}</AvatarInitials>}
      {showFallback && <AvatarFallback>{fallback}</AvatarFallback>}
    </StyledAvatar>
  );
};

export default Avatar;

