# Project Code Guidelines

## 1. Project Overview

This project involves building a design system for individual front-end developers using ReactJS and NextJS. The system provides reusable UI components and design templates to enhance development productivity and ease customization.

Key architectural decisions:

*   **Framework**: NextJS for server-side rendering (SSR) and static site generation (SSG).
*   **UI Library**: ReactJS for component-based architecture.
*   **Styling**: Styled Components for CSS-in-JS.
*   **State Management**: React Context API for simple state management.

## 2. Core Principles

*   **Single Responsibility**: Each component/function should have one specific job.
*   **Reusability**: Components should be designed to be reused across the application.
*   **Maintainability**: Code should be easy to understand, modify, and debug.
*   **Performance**: Optimize for fast loading times and efficient rendering.
*   **Testability**: Code should be written in a way that makes it easy to test.

## 3. Language-Specific Guidelines

### 3.1. JavaScript (React/NextJS)

#### File Organization and Directory Structure

*   Follow the domain-driven organization strategy as outlined in the TRD.
*   Component files should be placed in relevant directories within the `components` folder.
*   Page files should reside in the `app` directory (Next.js App Router).
*   Utility functions and helper files should be in the `utils` directory.
*   Styles (global and component-specific) should be in the `styles` directory.

#### Import/Dependency Management

*   Use absolute imports for internal modules (`@/components/Button` instead of relative paths like `../../components/Button`). Configure `@` alias in `jsconfig.json` or `tsconfig.json`.
*   Group imports by origin (e.g., node modules, internal modules, styles).
*   Order imports alphabetically within each group.
*   Install dependencies using `pnpm install`.
*   Use `devDependencies` for testing libraries and build tools.

#### Error Handling Patterns

*   Use `try...catch` blocks for handling potential errors in asynchronous operations (e.g., API calls).
*   Implement error boundaries for catching errors in React component trees.
*   Log errors to the console or a dedicated logging service for debugging.
*   Display user-friendly error messages to the user.

### 3.2. CSS (Styled Components)

#### File Organization

*   Component-specific styles should be defined within the component file using Styled Components.
*   Global styles should be defined in `styles/globals.css` or using Styled Components' `createGlobalStyle`.
*   Theme variables should be defined in `styles/theme.ts`.

#### Naming Conventions

*   Use camelCase for Styled Components variable names (e.g., `StyledButton`).
*   Use semantic class names in global styles (e.g., `.button--primary`).

#### Best Practices

*   Use theme variables for consistent styling across the application.
*   Avoid using inline styles directly in components.
*   Use media queries for responsive design.
*   Use `attrs` to pass props to styled components.

## 4. Code Style Rules

### MUST Follow:

*   **Naming Conventions**:
    *   Variables: camelCase (e.g., `userName`, `productPrice`).
    *   Functions: camelCase (e.g., `getUserData`, `calculateTotal`).
    *   Components: PascalCase (e.g., `Button`, `TextField`).
    *   Files: PascalCase or camelCase depending on the content (e.g., `Button.tsx`, `api.ts`).
    *   Rationale: Consistent naming improves readability and maintainability.
*   **Component Structure**:
    *   Functional components with hooks are preferred.
    *   Separate UI logic from data fetching/processing logic.
    *   Use TypeScript types/interfaces for type checking.
    *   Rationale: Functional components are simpler to reason about and test. Separation of concerns improves maintainability.
*   **State Management**:
    *   Use React Context API for simple, localized state management.
    *   Consider Redux or Zustand for more complex global state management scenarios (if needed, but avoid over-engineering).
    *   Rationale: Context API is sufficient for this project's scope.
*   **Styling**:
    *   Use Styled Components for component-level styling.
    *   Use theme variables for consistent styling.
    *   Avoid inline styles.
    *   Rationale: Styled Components encapsulate styles and make them easier to manage.
*   **Error Handling**:
    *   Use `try...catch` blocks for error handling in asynchronous operations.
    *   Implement error boundaries for React components.
    *   Log errors to the console or a logging service.
    *   Rationale: Proper error handling prevents application crashes and provides useful debugging information.
*   **Code Formatting**:
    *   Use Prettier for code formatting.
    *   Configure ESLint for code linting.
    *   Rationale: Consistent code formatting improves readability and reduces merge conflicts.

### MUST NOT Do:

*   **Direct DOM Manipulation**:
    *   Rationale: React manages the DOM, direct manipulation can lead to inconsistencies and unexpected behavior.
*   **Mutating State Directly**:
    *   Rationale: React relies on immutability to detect changes and trigger re-renders.
*   **Ignoring ESLint/Prettier Warnings/Errors**:
    *   Rationale: ESLint and Prettier help enforce code style and prevent common errors.
*   **Over-engineering State Management**:
    *   Rationale: Start with React Context, and only move to Redux/Zustand if absolutely necessary. Avoid unnecessary complexity.
*   **Leaving Console Logs in Production Code**:
    *   Rationale: Console logs can expose sensitive information and impact performance.
*   **Writing Large, Complex Components**:
    *   Rationale: Large components are difficult to understand, test, and maintain. Break down complex components into smaller, reusable components.
*   **Using `any` Type**:
    *   Rationale: `any` defeats the purpose of TypeScript. Use specific types or interfaces whenever possible.
*   **Defining Complex State Management Pattern**:
    *   Rationale: Keep state management simple. Avoid complex patterns unless absolutely necessary.
*   **Making huge, multi responsibility module in single file**:
    *   Rationale: Follow single responsibility principle. Each module must have a single responsibility.

## 5. Architecture Patterns

### 5.1. Component/Module Structure Guidelines

*   **Atomic Design Principles**: Consider using Atomic Design principles (Atoms, Molecules, Organisms, Templates, Pages) to structure components.
*   **Directory Structure**: Follow the directory structure outlined in the TRD.
*   **Component Composition**: Build complex components by composing smaller, reusable components.
*   **Props**: Use props to pass data and functionality to components.
*   **Naming**: Use clear and descriptive names for components and files.

### 5.2. Data Flow Patterns

*   **Top-Down Data Flow**: Data flows from parent components to child components via props.
*   **Event Handling**: Child components can trigger events that are handled by parent components.
*   **Context API**: Use Context API for sharing data between components that are not directly related.
*   **API Calls**: Use `getServerSideProps` or `getStaticProps` in NextJS to fetch data from APIs on the server-side.

### 5.3. State Management Conventions

*   **Local Component State**: Use `useState` hook for managing local component state.
*   **Context API**: Use Context API for sharing state between components.
*   **Reducers (if needed)**: If using Redux or Zustand, use reducers to update state in a predictable manner.
*   **Immutability**: Always update state immutably.

### 5.4. API Design Standards

*   **RESTful APIs**: Design APIs following RESTful principles.
*   **Naming Conventions**: Use clear and descriptive names for API endpoints.
*   **Data Format**: Use JSON for data exchange.
*   **Error Handling**: Return appropriate HTTP status codes for errors.
*   **Authentication**: Implement authentication and authorization for secure APIs.

## 6. Clean Code Principles

### Core Principles

- **DRY** - Eliminate duplication ruthlessly
- **KISS** - Simplest solution that works
- **YAGNI** - Build only what's needed now
- **SOLID** - Apply all five principles consistently
- **Boy Scout Rule** - Leave code cleaner than found

### Naming Conventions

- Use **intention-revealing** names
- Avoid abbreviations except well-known ones (e.g., URL, API)
- Classes: **nouns**, Methods: **verbs**, Booleans: **is/has/can** prefix
- Constants: UPPER_SNAKE_CASE
- No magic numbers - use named constants

### Functions & Methods

- **Single Responsibility** - one reason to change
- Maximum 20 lines (prefer under 10)
- Maximum 3 parameters (use objects for more)
- No side effects in pure functions
- Early returns over nested conditions

### Code Structure

- **Cyclomatic complexity** < 10
- Maximum nesting depth: 3 levels
- Organize by feature, not by type
- Dependencies point inward (Clean Architecture)
- Interfaces over implementations

### Comments & Documentation

- Code should be self-documenting
- Comments explain **why**, not what
- Update comments with code changes
- Delete commented-out code immediately
- Document public APIs thoroughly

### Error Handling

- Fail fast with clear messages
- Use exceptions over error codes
- Handle errors at appropriate levels
- Never catch generic exceptions
- Log errors with context

### Testing

- **TDD** when possible
- Test behavior, not implementation
- One assertion per test
- Descriptive test names: `should_X_when_Y`
- **AAA pattern**: Arrange, Act, Assert
- Maintain test coverage > 80%

### Performance & Optimization

- Profile before optimizing
- Optimize algorithms before micro-optimizations
- Cache expensive operations
- Lazy load when appropriate
- Avoid premature optimization

### Security

- Never trust user input
- Sanitize all inputs
- Use parameterized queries
- Follow **principle of least privilege**
- Keep dependencies updated
- No secrets in code

### Version Control

- Atomic commits - one logical change
- Imperative mood commit messages
- Reference issue numbers
- Branch names: `type/description`
- Rebase feature branches before merging

### Code Reviews

- Review for correctness first
- Check edge cases
- Verify naming clarity
- Ensure consistent style
- Suggest improvements constructively

### Refactoring Triggers

- Duplicate code (Rule of Three)
- Long methods/classes
- Feature envy
- Data clumps
- Divergent change
- Shotgun surgery

### Final Checklist

Before committing, ensure:
- [ ] All tests pass
- [ ] No linting errors
- [ ] No console logs
- [ ] No commented code
- [ ] No TODOs without tickets
- [ ] Performance acceptable
- [ ] Security considered
- [ ] Documentation updated

Remember: **Clean code reads like well-written prose**. Optimize for readability and maintainability over cleverness.

## 7. Example Code Snippets

### React Component

```tsx
// MUST: Example of a functional React component with props and styling
// This component displays a button with a label and handles click events.
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  );
};

export default Button;
```

```tsx
// MUST NOT: Example of a component with inline styles and direct DOM manipulation
// Inline styles are difficult to manage and maintain. Direct DOM manipulation bypasses React's rendering process.
import React from 'react';

const BadButton = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => {
      document.getElementById('my-element')!.innerHTML = 'Clicked!';
      onClick();
    }}>
      {label}
    </button>
  );
};

export default BadButton;
```

### Styled Components

```tsx
// MUST: Example of using Styled Components with theme variables
// Theme variables provide a consistent look and feel across the application.
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ theme }) => theme.colors.text.primary};
`;
```

### Error Handling

```typescript
// MUST: Example of using try...catch for error handling in an API call
// This ensures that errors are caught and handled gracefully.
async function fetchData(): Promise<Data | null> {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Display user-friendly error message
    return null;
  }
}
```

### Context API

```tsx
// MUST: Example of using Context API for state management
// This allows sharing state between components without prop drilling.
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

