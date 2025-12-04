'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '@/components/buttons';
import { Card } from '@/components/data-display';
import { TextField } from '@/components/forms';
import { useTheme } from '@/shared/contexts/ThemeContext';

const PageContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Header = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  margin-right: ${({ theme }) => theme.spacing.lg};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FallbackContent = () => (
  <div style={{
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#ffffff',
    color: '#212121',
  }}
  >
    <h1>Components</h1>
    <p>Loading...</p>
  </div>
);

const ComponentsPage = () => {
  const [mounted, setMounted] = useState(false);
  const { toggleTheme, mode } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <FallbackContent />;
  }

  return (
    <PageContainer>
      <Header>
        <nav style={{ marginBottom: '2rem' }}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/components">Components</NavLink>
          <Button onClick={toggleTheme} variant="secondary" size="small">
            {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
          </Button>
        </nav>
        <Title>Component Gallery</Title>
        <Description>
          Explore all available components in the design system
        </Description>
      </Header>

      <Section>
        <SectionTitle>Buttons</SectionTitle>
        <ComponentGrid>
          <Card title="Primary Button">
            <Button variant="primary">Primary Button</Button>
          </Card>
          <Card title="Secondary Button">
            <Button variant="secondary">Secondary Button</Button>
          </Card>
          <Card title="Outline Button">
            <Button variant="outline">Outline Button</Button>
          </Card>
        </ComponentGrid>
      </Section>

      <Section>
        <SectionTitle>Forms</SectionTitle>
        <ComponentGrid>
          <Card title="Text Field">
            <TextField
              label="Email"
              placeholder="Enter your email"
              type="email"
            />
          </Card>
          <Card title="Text Field with Error">
            <TextField
              label="Password"
              type="password"
              error="Password is required"
            />
          </Card>
        </ComponentGrid>
      </Section>
    </PageContainer>
  );
};

export default ComponentsPage;

