# Style Guide

This document outlines the design system's style guidelines, including colors, typography, spacing, and other design tokens.

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Border Radius](#border-radius)
5. [Breakpoints](#breakpoints)
6. [Theme Usage](#theme-usage)
7. [Best Practices](#best-practices)

## Color System

The design system supports both light and dark themes. Colors are organized into semantic categories for consistent usage across components.

### Light Theme Colors

| Category | Color | Hex Code | Usage |
|----------|-------|----------|-------|
| Primary | Blue | `#1976d2` | Main actions, links, primary buttons |
| Secondary | Pink | `#dc004e` | Secondary actions, accents |
| Success | Green | `#4caf50` | Success messages, positive feedback |
| Warning | Orange | `#ff9800` | Warning messages, caution states |
| Error | Red | `#f44336` | Error messages, destructive actions |
| Info | Blue | `#2196f3` | Informational messages |
| Text Primary | Dark Gray | `#212121` | Main text content |
| Text Secondary | Gray | `#757575` | Secondary text, labels |
| Text Disabled | Light Gray | `#bdbdbd` | Disabled text |
| Background Default | White | `#ffffff` | Main background |
| Background Paper | Light Gray | `#f5f5f5` | Card, panel backgrounds |
| Border | Light Gray | `#e0e0e0` | Borders, dividers |

### Dark Theme Colors

| Category | Color | Hex Code | Usage |
|----------|-------|----------|-------|
| Primary | Light Blue | `#42a5f5` | Main actions, links, primary buttons |
| Secondary | Light Pink | `#f48fb1` | Secondary actions, accents |
| Success | Light Green | `#66bb6a` | Success messages, positive feedback |
| Warning | Light Orange | `#ffa726` | Warning messages, caution states |
| Error | Light Red | `#ef5350` | Error messages, destructive actions |
| Info | Light Blue | `#42a5f5` | Informational messages |
| Text Primary | White | `#ffffff` | Main text content |
| Text Secondary | Light Gray | `#b0b0b0` | Secondary text, labels |
| Text Disabled | Gray | `#757575` | Disabled text |
| Background Default | Dark | `#121212` | Main background |
| Background Paper | Dark Gray | `#1e1e1e` | Card, panel backgrounds |
| Border | Dark Gray | `#424242` | Borders, dividers |

### Using Colors in Components

```tsx
import styled from 'styled-components';
import { useTheme } from '@/shared/contexts/ThemeContext';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;
```

## Typography

The typography system provides consistent font sizes, weights, and families across the application.

### Font Family

- **Primary**: `Arial, Helvetica, sans-serif`

### Font Sizes

| Size | Value | Usage |
|------|-------|-------|
| xs | `0.75rem` (12px) | Small labels, captions |
| sm | `0.875rem` (14px) | Secondary text, helper text |
| base | `1rem` (16px) | Body text, default size |
| lg | `1.125rem` (18px) | Large body text |
| xl | `1.25rem` (20px) | Subheadings |
| 2xl | `1.5rem` (24px) | Section headings |
| 3xl | `1.875rem` (30px) | Page titles |
| 4xl | `2.25rem` (36px) | Hero titles |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| light | `300` | Light text, subtle emphasis |
| normal | `400` | Default body text |
| medium | `500` | Medium emphasis |
| semibold | `600` | Strong emphasis |
| bold | `700` | Headings, strong emphasis |

### Using Typography in Components

```tsx
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;
```

## Spacing

The spacing system provides consistent spacing values for margins, padding, and gaps.

| Size | Value | Usage |
|------|-------|-------|
| xs | `0.25rem` (4px) | Tight spacing, icon padding |
| sm | `0.5rem` (8px) | Small gaps, compact layouts |
| md | `1rem` (16px) | Default spacing, standard gaps |
| lg | `1.5rem` (24px) | Large gaps, section spacing |
| xl | `2rem` (32px) | Extra large gaps, major sections |
| 2xl | `3rem` (48px) | Very large gaps, page sections |
| 3xl | `4rem` (64px) | Maximum spacing, hero sections |

### Using Spacing in Components

```tsx
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.sm};
`;
```

## Border Radius

Border radius values provide consistent rounded corners across components.

| Size | Value | Usage |
|------|-------|-------|
| sm | `0.25rem` (4px) | Small buttons, inputs |
| md | `0.5rem` (8px) | Default buttons, cards |
| lg | `0.75rem` (12px) | Large cards, panels |
| xl | `1rem` (16px) | Extra large elements |
| full | `9999px` | Pills, circular elements |

### Using Border Radius in Components

```tsx
import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const StyledPill = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;
```

## Breakpoints

Responsive breakpoints for media queries and responsive design.

| Breakpoint | Value | Usage |
|------------|-------|-------|
| sm | `640px` | Small devices (phones) |
| md | `768px` | Medium devices (tablets) |
| lg | `1024px` | Large devices (laptops) |
| xl | `1280px` | Extra large devices (desktops) |
| 2xl | `1536px` | Very large devices (large desktops) |

### Using Breakpoints in Components

```tsx
import styled from 'styled-components';

const StyledContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;
```

## Theme Usage

### Setting Up Theme Provider

The theme provider is already set up in `app/layout.tsx`. All components within the app have access to the theme.

### Using Theme in Components

#### With Styled Components

```tsx
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.md};
`;
```

#### With useTheme Hook

```tsx
import { useTheme } from '@/shared/contexts/ThemeContext';

const MyComponent = () => {
  const { theme, mode, toggleTheme } = useTheme();

  return (
    <div style={{ color: theme.colors.primary }}>
      <p>Current theme: {mode}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
```

### Theme Toggle

Users can toggle between light and dark themes:

```tsx
import { useTheme } from '@/shared/contexts/ThemeContext';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {mode === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};
```

## Best Practices

### 1. Always Use Theme Values

❌ **Don't** hardcode colors or spacing:
```tsx
const BadComponent = styled.div`
  color: #212121;
  padding: 16px;
`;
```

✅ **Do** use theme values:
```tsx
const GoodComponent = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing.md};
`;
```

### 2. Use Semantic Color Names

❌ **Don't** use specific color names:
```tsx
color: ${({ theme }) => theme.colors.primary}; // If it's actually for error
```

✅ **Do** use semantic names:
```tsx
color: ${({ theme }) => theme.colors.error};
```

### 3. Maintain Consistency

- Use the same spacing values for similar elements
- Use consistent border radius for similar component types
- Follow the typography scale for text sizes

### 4. Responsive Design

Always consider responsive design when using breakpoints:

```tsx
const ResponsiveComponent = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;
```

### 5. Theme Transitions

The global styles include smooth transitions for theme changes. Ensure your components respect these transitions:

```tsx
const ThemedComponent = styled.div`
  background-color: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
`;
```

## Examples

### Complete Component Example

```tsx
import styled from 'styled-components';
import { useTheme } from '@/shared/contexts/ThemeContext';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
`;

const Card = ({ title, children }) => {
  return (
    <StyledCard>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{children}</StyledText>
    </StyledCard>
  );
};

export default Card;
```

## Additional Resources

- [Styled Components Documentation](https://styled-components.com/docs)
- [Material Design Guidelines](https://material.io/design)
- [Ant Design Principles](https://ant.design/docs/spec/introduce)

