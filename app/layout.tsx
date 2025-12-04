import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

// Use dynamic import to ensure Providers only render on client side
// This prevents SSR hydration mismatches with styled-components
const Providers = dynamic(
  () => import('@/providers/ThemeProvider').then((mod) => ({ default: mod.Providers })),
  { ssr: false },
);

export const metadata: Metadata = {
  title: 'Frontend Design System',
  description: 'A design system for individual front-end developers',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body suppressHydrationWarning>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;
