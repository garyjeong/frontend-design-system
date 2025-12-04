# Frontend Design System

A comprehensive design system for individual front-end developers to rapidly create stylish and professional websites and applications. Built with Next.js, React, and Styled Components.

## 🎯 Overview

This design system provides a complete set of reusable UI components, design templates, and a flexible theme system. It enables developers with limited design expertise to build modern, accessible, and responsive web applications quickly.

## ✨ Features

- **Complete Component Library**: Buttons, Forms, Navigation, Data Display, Notifications, and Avatars
- **Design Templates**: Pre-built page layouts with Header, Footer, and Sidebar
- **Theme System**: Light/Dark theme support with customizable design tokens
- **TypeScript**: Full type safety and excellent developer experience
- **Accessibility**: WCAG-compliant components with proper ARIA attributes
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Testing**: Comprehensive test coverage with Jest and React Testing Library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (install with `npm install -g pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3001](http://localhost:3001) to see the result.

### Available Scripts

```bash
pnpm dev             # Start development server
pnpm build           # Build for production
pnpm start           # Start production server
pnpm lint            # Run ESLint
pnpm test            # Run tests
pnpm test:watch      # Run tests in watch mode
pnpm test:coverage   # Run tests with coverage report
```

## 📁 Project Structure

```
frontend-design-system/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Home page
├── components/               # Reusable React components
│   ├── avatars/            # Avatar components
│   ├── buttons/             # Button components (primary, secondary, icon)
│   ├── data-display/        # Table, List, Card components
│   ├── forms/               # Form elements (TextField, Dropdown, Checkbox, Radio)
│   ├── navigation/          # Menu, Tabs, Pagination components
│   ├── notifications/       # Toast, Modal components
│   └── templates/           # Layout templates (Header, Footer, Sidebar, Layout)
├── providers/                # Context providers
│   └── ThemeProvider.tsx    # Theme context provider
├── shared/                   # Shared utilities and types
│   └── contexts/            # React contexts
├── styles/                   # Global styles and theme
│   ├── globals.css          # Global CSS styles
│   ├── theme.ts             # Theme definition (light/dark)
│   ├── GlobalStyles.ts      # Styled Components global styles
│   └── styled.d.ts          # Styled Components type definitions
├── utils/                    # Utility functions
├── public/                   # Static files (images, fonts, etc.)
└── docs/                     # Documentation
    └── STYLE_GUIDE.md       # Style guide documentation
```

## 🧩 Component Library

### Buttons

Primary, secondary, and icon button variants with size options.

```tsx
import { Button } from '@/components/buttons';
import { FaUser } from 'react-icons/fa';

<Button variant="primary" size="medium">Click me</Button>
<Button variant="secondary" size="large">Submit</Button>
<Button variant="icon" icon={FaUser} aria-label="User" />
<Button variant="primary" icon={FaUser} iconPosition="left">
  User Profile
</Button>
```

### Form Elements

Complete form components with validation and accessibility support.

```tsx
import { TextField, Dropdown, Checkbox, Radio } from '@/components/forms';

// TextField
<TextField
  label="Email"
  placeholder="Enter your email"
  error="Invalid email"
  required
/>

// Dropdown
<Dropdown
  label="Select option"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  placeholder="Choose an option"
/>

// Checkbox
<Checkbox
  label="Accept terms"
  checked={isChecked}
  onChange={handleChange}
/>

// Radio
<Radio
  label="Option 1"
  checked={selected === '1'}
  onChange={handleChange}
/>
```

### Navigation

Menu, tabs, and pagination components with Next.js Link integration.

```tsx
import { Menu, Tabs, Pagination } from '@/components/navigation';

// Menu
<Menu
  items={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
  ]}
  activeItem="/"
  orientation="horizontal"
/>

// Tabs
<Tabs
  items={[
    { label: 'Tab 1', value: 'tab1', content: <div>Content 1</div> },
    { label: 'Tab 2', value: 'tab2', content: <div>Content 2</div> },
  ]}
  defaultValue="tab1"
/>

// Pagination
<Pagination
  currentPage={3}
  totalPages={10}
  onPageChange={(page) => console.log(page)}
  showFirstLast
/>
```

### Data Display

Table, List, and Card components for displaying data.

```tsx
import { Table, List, Card } from '@/components/data-display';

// Table
<Table
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
  ]}
  data={[
    { name: 'John', age: 30 },
  ]}
  striped
  hoverable
/>

// List
<List
  items={[
    { id: '1', content: <span>Item 1</span>, avatar: <img src="..." /> },
  ]}
  variant="bordered"
/>

// Card
<Card
  title="Card Title"
  subtitle="Card Subtitle"
  image="/image.jpg"
  actions={<button>Action</button>}
  variant="elevated"
  hoverable
>
  Card Content
</Card>
```

### Notifications

Toast and Modal components for user notifications.

```tsx
import { ToastProvider, useToast, Modal } from '@/components/notifications';

// Toast (wrap app with ToastProvider)
function App() {
  return (
    <ToastProvider>
      <YourComponent />
    </ToastProvider>
  );
}

function YourComponent() {
  const { showToast } = useToast();
  
  const handleClick = () => {
    showToast({
      message: 'Success!',
      type: 'success',
      duration: 3000,
    });
  };
  
  return <button onClick={handleClick}>Show Toast</button>;
}

// Modal
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="medium"
>
  <p>Modal Content</p>
</Modal>
```

### Avatars

Avatar component with image, initials, and fallback support.

```tsx
import { Avatar } from '@/components/avatars';

<Avatar src="/user.jpg" alt="John Doe" size="large" />
<Avatar initials="JD" size="medium" />
<Avatar alt="John Doe" size="small" /> {/* Auto-generates initials */}
<Avatar src="/invalid.jpg" fallback={<span>👤</span>} />
```

### Layout Templates

Pre-built page layouts with Header, Footer, and Sidebar.

```tsx
import { Layout, Header, Footer, Sidebar } from '@/components/templates';
import { Menu } from '@/components/navigation';

<Layout
  header={
    <Header
      logo={<span>Logo</span>}
      navigation={<Menu items={menuItems} />}
      actions={<button>Login</button>}
      sticky
    />
  }
  footer={
    <Footer
      copyright="© 2024"
      links={<a href="/about">About</a>}
    />
  }
  sidebar={
    <Sidebar position="left" width="280px">
      <Menu items={sidebarItems} orientation="vertical" />
    </Sidebar>
  }
  maxWidth="1200px"
  fullHeight
>
  <div>Main Content</div>
</Layout>
```

## 🎨 Theme System

The design system includes a comprehensive theme system with light and dark modes.

### Theme Structure

```typescript
interface Theme {
  mode: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
    warning: string;
    info: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    background: {
      default: string;
      paper: string;
    };
  };
  typography: {
    fontFamily: string;
    fontSize: { ... };
    fontWeight: { ... };
  };
  spacing: { ... };
  borderRadius: { ... };
  breakpoints: { ... };
}
```

### Using the Theme

```tsx
import { useTheme } from '@/shared/contexts/ThemeContext';

function MyComponent() {
  const { theme, mode, toggleTheme } = useTheme();
  
  return (
    <div style={{ color: theme.colors.primary }}>
      Current theme: {mode}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### Theme Provider Setup

```tsx
// app/layout.tsx
import { Providers } from '@/providers/ThemeProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

## 🛠 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Styled Components 6
- **Language**: TypeScript 5
- **Icons**: React Icons 5
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint with Airbnb style guide
- **Build Tool**: Next.js built-in bundler

## 📚 Documentation

- [Style Guide](./docs/STYLE_GUIDE.md) - Design tokens, typography, spacing, and color system
- Component documentation is available in each component's file with JSDoc comments

## 🧪 Testing

The project includes comprehensive test coverage using Jest and React Testing Library.

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Generate coverage report
pnpm test:coverage
```

## 🎯 Design Principles

- **Accessibility First**: All components follow WCAG guidelines
- **Mobile First**: Responsive design with mobile-first approach
- **Type Safety**: Full TypeScript support for better developer experience
- **Performance**: Optimized components with minimal bundle size
- **Customizable**: Easy to customize through theme system
- **Consistent**: Unified design language across all components

## 📦 Component Status

| Component | Status | Features |
|-----------|--------|----------|
| Button | ✅ Complete | Primary, Secondary, Icon variants; Sizes; Disabled state |
| TextField | ✅ Complete | Label, Error, Helper text; Validation; Accessibility |
| Dropdown | ✅ Complete | Options, Placeholder; Disabled options |
| Checkbox | ✅ Complete | Label, Error; Keyboard navigation |
| Radio | ✅ Complete | Label, Error; Keyboard navigation |
| Menu | ✅ Complete | Horizontal/Vertical; Active state; Icons |
| Tabs | ✅ Complete | Default/Pills variant; Controlled/Uncontrolled |
| Pagination | ✅ Complete | Page numbers; Ellipsis; First/Last buttons |
| Table | ✅ Complete | Columns; Custom render; Striped/Hoverable |
| List | ✅ Complete | Avatar; Actions; Variants |
| Card | ✅ Complete | Title, Subtitle, Image, Actions; Variants |
| Toast | ✅ Complete | Types; Auto-close; Positions |
| Modal | ✅ Complete | Overlay; ESC key; Sizes |
| Avatar | ✅ Complete | Image; Initials; Fallback; Sizes |
| Layout | ✅ Complete | Header, Footer, Sidebar; Rest/Slot pattern |
| Header | ✅ Complete | Logo, Navigation, Actions; Sticky |
| Footer | ✅ Complete | Copyright, Links, Social; Variants |
| Sidebar | ✅ Complete | Left/Right; Collapsible; Responsive |

## 🚧 Roadmap

- [ ] Additional component variants
- [ ] More layout templates
- [ ] Animation library integration
- [ ] Storybook documentation
- [ ] Component playground
- [ ] Design tokens export

## 📝 License

This project is private and intended for internal use.

## 🤝 Contributing

This is a design system project. For contributions, please follow the project guidelines and ensure all tests pass.

## 📞 Support

For questions or issues, please refer to the project documentation or create an issue in the project repository.
