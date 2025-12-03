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
*   Page files should reside in the `pages` directory.
*   Utility functions and helper files should be in the `utils` directory.
*   Styles (global and component-specific) should be in the `styles` directory.

#### Import/Dependency Management

*   Use absolute imports for internal modules (`@/components/Button` instead of relative paths like `../../components/Button`). Configure `@` alias in `jsconfig.json` or `tsconfig.json`.
*   Group imports by origin (e.g., node modules, internal modules, styles).
*   Order imports alphabetically within each group.
*   Install dependencies using `npm install` or `yarn add`.
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
*   Theme variables should be defined in `styles/theme.js`.

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
    *   Files: PascalCase or camelCase depending on the content (e.g., `Button.jsx`, `api.js`).
    *   Rationale: Consistent naming improves readability and maintainability.
*   **Component Structure**:
    *   Functional components with hooks are preferred.
    *   Separate UI logic from data fetching/processing logic.
    *   Use prop types for type checking.
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

## Example Code Snippets

### React Component

```jsx
// MUST: Example of a functional React component with props and styling
// This component displays a button with a label and handles click events.
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ label, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{label}</StyledButton>
  );
};

export default Button;
```

```jsx
// MUST NOT: Example of a component with inline styles and direct DOM manipulation
// Inline styles are difficult to manage and maintain. Direct DOM manipulation bypasses React's rendering process.
import React from 'react';

const BadButton = ({ label, onClick }) => {
  return (
    <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => {
      document.getElementById('my-element').innerHTML = 'Clicked!';
      onClick();
    }}>
      {label}
    </button>
  );
};

export default BadButton;
```

### Styled Components

```javascript
// MUST: Example of using Styled Components with theme variables
// Theme variables provide a consistent look and feel across the application.
import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: 2em;
  color: ${props => props.theme.textColor};
`;
```

### Error Handling

```javascript
// MUST: Example of using try...catch for error handling in an API call
// This ensures that errors are caught and handled gracefully.
async function fetchData() {
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

```jsx
// MUST: Example of using Context API for state management
// This allows sharing state between components without prop drilling.
import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
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

export const useTheme = () => useContext(ThemeContext);
```
