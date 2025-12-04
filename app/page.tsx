'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@/components/buttons';
import { Card } from '@/components/data-display';
import { Layout, Header, Footer } from '@/components/templates';
import { Menu } from '@/components/navigation';
import { Avatar } from '@/components/avatars';
import { useTheme } from '@/shared/contexts/ThemeContext';
import { FaHome, FaPuzzlePiece } from 'react-icons/fa';

const HeroSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
  text-align: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary}15 0%,
    ${({ theme }) => theme.colors.secondary}15 100%
  );
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesSection = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const CTAButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
`;

const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const LogoText = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

// Fallback component for SSR
const FallbackContent = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    color: '#212121',
  }}
  >
    <header style={{ padding: '1rem', borderBottom: '1px solid #e0e0e0' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>Frontend Design System</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="/components" style={{ color: '#1976d2', textDecoration: 'none' }}>Components</a>
        </div>
      </nav>
    </header>
    <main style={{ flex: 1, padding: '4rem 1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>Frontend Design System</h1>
      <p style={{ fontSize: '1.125rem', color: '#757575' }}>Loading...</p>
    </main>
    <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #e0e0e0' }}>
      <p style={{ margin: 0, color: '#757575' }}>© 2024 Frontend Design System</p>
    </footer>
  </div>
);

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { toggleTheme, mode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show fallback during SSR and initial client render
  if (!mounted) {
    return <FallbackContent />;
  }

  const menuItems = [
    { label: 'Home', href: '/', icon: <FaHome /> },
    { label: 'Components', href: '/components', icon: <FaPuzzlePiece /> },
  ];

  return (
    <Layout
      header={
        <StyledHeader sticky>
          <HeaderContent>
            <LogoSection>
              <Avatar name="FDS" size="medium" />
              <LogoText>Frontend Design System</LogoText>
            </LogoSection>
            <HeaderActions>
              <Menu items={menuItems} />
              <Button onClick={toggleTheme} variant="outline" size="small">
                {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
              </Button>
            </HeaderActions>
          </HeaderContent>
        </StyledHeader>
      }
      footer={
        <Footer copyright="© 2024 Frontend Design System - Built for individual developers" />
      }
      maxWidth="100%"
      fullHeight
    >
      <HeroSection>
        <HeroTitle>Frontend Design System</HeroTitle>
        <HeroSubtitle>
          A comprehensive design system for individual front-end developers to rapidly create
          stylish and professional websites and applications.
        </HeroSubtitle>
        <CTAButtonWrapper>
          <Link href="/components">
            <Button variant="primary" size="large">
              Explore Components
            </Button>
          </Link>
          <Button variant="secondary" size="large">
            Get Started
          </Button>
        </CTAButtonWrapper>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Key Features</SectionTitle>
        <CardGrid>
          <Card
            title="Complete Component Library"
            subtitle="Buttons, Forms, Navigation, Data Display, Notifications, and Avatars"
            variant="elevated"
            hoverable
          >
            <p style={{ marginTop: '1rem', color: 'inherit' }}>
              Pre-built, accessible components ready to use in your projects.
            </p>
          </Card>

          <Card
            title="Design Templates"
            subtitle="Pre-built layouts with Header, Footer, and Sidebar"
            variant="elevated"
            hoverable
          >
            <p style={{ marginTop: '1rem', color: 'inherit' }}>
              Start with professional layouts and customize to your needs.
            </p>
          </Card>

          <Card
            title="Theme System"
            subtitle="Light/Dark theme support with customizable design tokens"
            variant="elevated"
            hoverable
          >
            <p style={{ marginTop: '1rem', color: 'inherit' }}>
              Easy theme customization for consistent styling across your app.
            </p>
          </Card>

          <Card
            title="TypeScript Support"
            subtitle="Full type safety and excellent developer experience"
            variant="elevated"
            hoverable
          >
            <p style={{ marginTop: '1rem', color: 'inherit' }}>
              Built with TypeScript for better code quality and IDE support.
            </p>
          </Card>

          <Card
            title="Accessibility"
            subtitle="WCAG-compliant components with proper ARIA attributes"
            variant="elevated"
            hoverable
          >
            <p style={{ marginTop: '1rem', color: 'inherit' }}>
              All components follow accessibility best practices.
            </p>
          </Card>

          <Card
            title="Responsive Design"
            subtitle="Mobile-first approach with breakpoint system"
            variant="elevated"
            hoverable
          >
            <p style={{ marginTop: '1rem', color: 'inherit' }}>
              Works seamlessly across all device sizes.
            </p>
          </Card>
        </CardGrid>

        <SectionTitle>Quick Start</SectionTitle>
        <CardGrid>
          <Card title="Installation" variant="outlined">
            <pre style={{ backgroundColor: 'transparent', padding: 0, marginTop: '1rem' }}>
              <code>pnpm install</code>
            </pre>
          </Card>

          <Card title="Run Development Server" variant="outlined">
            <pre style={{ backgroundColor: 'transparent', padding: 0, marginTop: '1rem' }}>
              <code>pnpm dev</code>
            </pre>
          </Card>

          <Card title="Build for Production" variant="outlined">
            <pre style={{ backgroundColor: 'transparent', padding: 0, marginTop: '1rem' }}>
              <code>pnpm build</code>
            </pre>
          </Card>
        </CardGrid>
      </FeaturesSection>
    </Layout>
  );
};

export default Home;