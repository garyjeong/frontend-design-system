import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

const Providers = dynamic(() => import('@/providers/ThemeProvider').then((mod) => ({ default: mod.Providers })), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Frontend Design System',
  description: 'A design system for individual front-end developers',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <html lang="en">
    <body>
      <Providers>
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;
