# Style Guide

This document outlines the design system's style guidelines, including colors, typography, spacing, border-radius, shadows, breakpoints, and component usage with Tailwind CSS and Class Variance Authority (CVA).

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Border Radius](#border-radius)
5. [Shadows](#shadows)
6. [Breakpoints](#breakpoints)
7. [Layout Components](#layout-components)
8. [Theme Usage](#theme-usage)
9. [Best Practices](#best-practices)

## Color System

The design system supports both light and dark themes. Colors are organized into semantic categories for consistent usage across components. The primary color palette is teal-based.

### Primary Brand Colors (Teal-based)

| Shade | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| 50    | `#f0fdfa`  | `bg-primary-50`  | Lightest primary for backgrounds |
| 100   | `#ccfbf1`  | `bg-primary-100` | Very light primary for accents |
| 200   | `#99f6e4`  | `bg-primary-200` | Light primary |
| 300   | `#5eead4`  | `bg-primary-300` | Medium-light primary |
| 400   | `#2dd4bf`  | `bg-primary-400` | Medium primary |
| 500   | `#14b8a6`  | `bg-primary-500` | Base primary, default for buttons |
| 600   | `#0d9488`  | `bg-primary-600` | Darker primary for hover states |
| 700   | `#0f766e`  | `bg-primary-700` | Dark primary |
| 800   | `#115e59`  | `bg-primary-800` | Very dark primary |
| 900   | `#134e4a`  | `bg-primary-900` | Deepest primary for dark backgrounds |
| 950   | `#042f2e`  | `bg-primary-950` | Extra deep primary |

### Semantic Colors

| Category | Hex Code (Light) | Hex Code (Dark) | Tailwind Class (Light) | Tailwind Class (Dark) | Usage |
|----------|------------------|-----------------|------------------------|-----------------------|-------|
| Success | `#22c55e` | `#4ade80` | `bg-success-500`       | `dark:bg-success-400` | Positive actions, confirmation |
| Warning | `#f59e0b` | `#fcd34d` | `bg-warning-500`       | `dark:bg-warning-300` | Caution, non-critical alerts |
| Error | `#ef4444` | `#f87171` | `bg-error-500`         | `dark:bg-error-400`   | Negative actions, critical alerts |
| Info | `#3b82f6` | `#60a5fa` | `bg-info-500`          | `dark:bg-info-400`    | Informational messages |

### Neutral Colors (Slate)

| Shade | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| 50    | `#f8fafc`  | `bg-neutral-50`  | Lightest neutral |
| 100   | `#f1f5f9`  | `bg-neutral-100` | Very light neutral |
| 200   | `#e2e8f0`  | `bg-neutral-200` | Light neutral, default border |
| 300   | `#cbd5e1`  | `bg-neutral-300` | Medium-light neutral |
| 400   | `#94a3b8`  | `bg-neutral-400` | Medium neutral |
| 500   | `#64748b`  | `bg-neutral-500` | Base neutral, secondary text |
| 600   | `#475569`  | `bg-neutral-600` | Darker neutral |
| 700   | `#334155`  | `bg-neutral-700` | Dark neutral, dark mode border |
| 800   | `#1e293b`  | `bg-neutral-800` | Very dark neutral, dark mode background |
| 900   | `#0f172a`  | `bg-neutral-900` | Deepest neutral, main dark background |
| 950   | `#020617`  | `bg-neutral-950` | Extra deep neutral |

### Theme Specific Colors

| Category | Light Value | Dark Value | Tailwind Class (Light) | Tailwind Class (Dark) | Usage |
|----------|-------------|------------|------------------------|-----------------------|-------|
| Background Default | `#f8fafc`   | `#0f172a`  | `bg-background-light`  | `dark:bg-background-dark` | Main page background |
| Background Paper | `#ffffff`   | `#1e293b`  | `bg-background-paper-light`| `dark:bg-background-paper-dark` | Cards, modals, elevated surfaces |
| Border | `#e2e8f0`   | `#334155`  | `border-border-light`  | `dark:border-border-dark` | Component borders, dividers |
| Text Primary | `#0f172a`   | `#f8fafc`  | `text-text-primary-light`| `dark:text-text-primary-dark` | Main text content |
| Text Secondary | `#64748b`   | `#94a3b8`  | `text-text-secondary-light`| `dark:text-text-secondary-dark` | Secondary text, labels |
| Text Disabled | `#cbd5e1`   | `#475569`  | `text-text-disabled-light`| `dark:text-text-disabled-dark` | Disabled text |
| Input Background | `#ffffff`   | `#1e293b`  | `bg-white`             | `dark:bg-input-bg-dark`   | Form input background |

### Using Colors with Tailwind CSS

Colors are primarily used through Tailwind CSS utility classes. For custom CSS, CSS variables defined in `src/index.css` can be used.

```css
/* Example in src/index.css */
body {
  @apply bg-background-light dark:bg-background-dark text-neutral-900 dark:text-neutral-50;
}

.my-custom-element {
  background-color: var(--color-primary-500);
}
```

## Typography

The typography system provides consistent font sizes, weights, and families across the application. The primary font is 'Inter', with 'Roboto Mono' for monospace needs.

### Font Family

- **Display & Sans**: `Inter, sans-serif`
- **Mono**: `Roboto Mono, monospace`

### Font Sizes

Font sizes are defined in `tailwind.config.js` and correspond to Tailwind's default scale with extended values.

| Size   | Value      | Line Height | Tailwind Class | Usage |
|--------|------------|-------------|----------------|-------|
| xs     | `0.75rem`  | `1rem`      | `text-xs`      | Small labels, captions |
| sm     | `0.875rem` | `1.25rem`   | `text-sm`      | Secondary text, helper text |
| base   | `1rem`     | `1.5rem`    | `text-base`    | Body text, default size |
| lg     | `1.125rem` | `1.75rem`   | `text-lg`      | Large body text |
| xl     | `1.25rem`  | `1.75rem`   | `text-xl`      | Subheadings |
| 2xl    | `1.5rem`   | `2rem`      | `text-2xl`     | Section headings |
| 3xl    | `1.875rem` | `2.25rem`   | `text-3xl`     | Page titles |
| 4xl    | `2.25rem`  | `2.5rem`    | `text-4xl`     | Hero titles |
| 5xl    | `3rem`     | `1`         | `text-5xl`     | Large display text |
| 6xl    | `3.75rem`  | `1`         | `text-6xl`     | Extra large display text |
| 7xl    | `4.5rem`   | `1`         | `text-7xl`     | Huge display text |
| 8xl    | `6rem`     | `1`         | `text-8xl`     | Giant display text |
| 9xl    | `8rem`     | `1`         | `text-9xl`     | Max display text |

### Font Weights

Font weights are managed through Tailwind's `font-` utilities (e.g., `font-normal`, `font-bold`).

### Using Typography in Components

Typography is applied using Tailwind CSS classes or the `Typography` component for structured headings and paragraphs.

```tsx
import { Typography } from '@/components/typography';

<Typography variant="h1" className="text-primary-600">Page Title</Typography>
<Typography variant="p" className="text-neutral-700">This is a paragraph.</Typography>
```

## Spacing

The spacing system is based on an 8px grid, providing consistent values for margins, padding, and gaps, defined in `tailwind.config.js`.

| Size | Value | Tailwind Class | Usage |
|------|-------|----------------|-------|
| 0    | `0px`    | `p-0`, `m-0`   | No spacing |
| 0.5  | `2px`    | `p-0.5`, `m-0.5` | Very tight spacing |
| 1    | `4px`    | `p-1`, `m-1`   | Icon spacing |
| 2    | `8px`    | `p-2`, `m-2`   | Small gaps, compact layouts |
| ...  | ...    | ...            | ... |
| 18   | `4.5rem` (72px) | `p-18`, `m-18` | Extended spacing |
| ...  | ...    | ...            | ... |
| 144  | `36rem` (576px) | `p-144`, `m-144` | Maximum spacing |

### Using Spacing in Components

```tsx
<div className="p-4 mb-6 space-y-2">
  <Button className="mr-4">Button 1</Button>
  <Button>Button 2</Button>
</div>
```

For flexible spacing, use the `Spacer` component.

```tsx
import { Spacer } from '@/components/layout';

<Stack direction="row" align="center">
  <Button>Action 1</Button>
  <Spacer size={24} axis="horizontal" />
  <Button>Action 2</Button>
  <Spacer flex />
  <Button>Action 3</Button>
</Stack>
```

## Border Radius

Border radius values provide consistent rounded corners across components, defined in `tailwind.config.js`.

| Size | Value | Tailwind Class | Usage |
|------|-------|----------------|-------|
| none | `0px`    | `rounded-none` | Sharp corners |
| sm   | `0.125rem` (2px) | `rounded-sm`   | Smallest rounding |
| md   | `0.375rem` (6px) | `rounded-md`   | Medium rounding |
| lg   | `0.5rem` (8px) | `rounded-lg`   | Default for most components |
| xl   | `0.75rem` (12px) | `rounded-xl`   | Larger rounding |
| 2xl  | `1rem` (16px) | `rounded-2xl`  | Card-like elements |
| 3xl  | `1.5rem` (24px) | `rounded-3xl`  | More prominent rounding |
| full | `9999px` | `rounded-full` | Pills, circular elements |
| 4xl  | `2rem` (32px) | `rounded-4xl`  | Extended large rounding |

### Using Border Radius in Components

```tsx
<Button className="rounded-lg">Default Button</Button>
<div className="rounded-full p-2 bg-primary-500" />
```

## Shadows

Consistent shadow effects are defined in `tailwind.config.js`.

| Shadow       | Value                                          | Tailwind Class | Usage |
|--------------|------------------------------------------------|----------------|-------|
| soft-sm      | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                | `shadow-soft-sm` | Small elevation, subtle |
| soft         | `0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)` | `shadow-soft`    | Default elevation |
| soft-md      | `0 6px 10px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)` | `shadow-soft-md` | Medium elevation, cards |
| soft-lg      | `0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)` | `shadow-soft-lg` | Large elevation, popovers |
| soft-xl      | `0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)` | `shadow-soft-xl` | Extra large elevation, modals |

### Using Shadows in Components

```tsx
<Card variant="elevated" className="shadow-soft-md">
  ...
</Card>
```

## Breakpoints

Responsive breakpoints are inherited from Tailwind CSS and used for media queries.

| Breakpoint | Value  | Tailwind Prefix | Usage |
|------------|--------|-----------------|-------|
| sm         | `640px`  | `sm:`           | Small devices (phones) |
| md         | `768px`  | `md:`           | Medium devices (tablets) |
| lg         | `1024px` | `lg:`           | Large devices (laptops) |
| xl         | `1280px` | `xl:`           | Extra large devices (desktops) |
| 2xl        | `1536px` | `2xl:`          | Very large devices (large desktops) |

### Using Breakpoints with Tailwind CSS

```tsx
<div className="p-4 md:p-6 lg:p-8">
  Responsive padding example
</div>
```

## Layout Components

The design system provides flexible layout components for building responsive structures.

### Container

Responsive width container for consistent content alignment.

```tsx
import { Container } from '@/components/layout';

<Container variant="fixed">
  <p>Content within a fixed-width container.</p>
</Container>
<Container variant="fluid">
  <p>Content within a fluid container (full width).</p>
</Container>
```

### Grid

CSS Grid-based component for complex 2D layouts.

```tsx
import { Grid } from '@/components/layout';

<Grid cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Stack

Flexbox-based component for 1D layouts (rows or columns).

```tsx
import { Stack } from '@/components/layout';

<Stack direction="column" gap="sm">
  <Button>Item A</Button>
  <Button>Item B</Button>
</Stack>
<Stack direction="row" align="center" justify="between">
  <span>Left item</span>
  <span>Right item</span>
</Stack>
```

### Divider

Horizontal or vertical separator with optional label.

```tsx
import { Divider } from '@/components/layout';

<Divider />
<Divider label="Or" orientation="horizontal" />
<Stack direction="row" className="h-10">
  <span>Left</span>
  <Divider orientation="vertical" />
  <span>Right</span>
</Stack>
```

### Spacer

Provides flexible empty space in layouts.

```tsx
import { Spacer } from '@/components/layout';

<Stack direction="row">
  <Button>Button 1</Button>
  <Spacer size={16} axis="horizontal" />
  <Button>Button 2</Button>
  <Spacer flex />
  <Button>Button 3</Button>
</Stack>
```

## Theme Usage

### Dark Mode

The design system uses Tailwind CSS's `darkMode: 'class'` strategy. Toggling a `dark` class on the `<html>` element will switch the theme.

```html
<!-- Light Mode -->
<html>
  <body>
    <!-- ... -->
  </body>
</html>

<!-- Dark Mode -->
<html class="dark">
  <body>
    <!-- ... -->
  </body>
</html>
```

### Theme Toggle Example

You can implement a theme toggle using React state:

```tsx
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;
```

## Best Practices

### 1. Always Use Design Tokens

❌ **Don't** hardcode colors or spacing:
```tsx
const BadComponent = () => (
  <div className="text-[#212121] p-[16px]">Bad example</div>
);
```

✅ **Do** use Tailwind CSS utility classes based on defined tokens:
```tsx
const GoodComponent = () => (
  <div className="text-text-primary-light dark:text-text-primary-dark p-md">Good example</div>
);
```

### 2. Use Semantic Classes

❌ **Don't** use specific color names if it's for a semantic purpose:
```tsx
<Button className="bg-red-500">Delete</Button> // If red is only for error
```

✅ **Do** use semantic names:
```tsx
<Button variant="danger">Delete</Button>
<Alert variant="error" description="An error occurred." />
```

### 3. Maintain Consistency

- Use the same spacing values for similar elements.
- Use consistent border radius for similar component types.
- Follow the typography scale for text sizes.

### 4. Responsive Design

Always consider responsive design when using breakpoints with Tailwind's responsive prefixes:

```tsx
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive width example
</div>
```

### 5. Theme Transitions

Ensure components respect the global theme transitions defined in `src/index.css` by using Tailwind's `transition-colors` utility:

```tsx
<div className="bg-background-paper-light dark:bg-background-paper-dark text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
  Themed content
</div>
```

## Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Class Variance Authority (CVA)](https://cva.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

