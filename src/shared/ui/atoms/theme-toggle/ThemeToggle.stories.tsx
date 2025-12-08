import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@/shared/contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';
import { Card } from '@/shared/ui/molecules/card';
import { Button } from '@/shared/ui/atoms/button';
import themePresets from '@/shared/lib/themes/themeDefinitions';
import { useTheme } from '@/shared/contexts/ThemeContext';

const meta: Meta = {
  title: 'Atoms/ThemeToggle',
  component: ThemeToggle,
  decorators: [
    (Story) => (
      <ThemeProvider defaultMode="light" defaultColor="purple">
        <div style={{ padding: 20 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

const DemoContent = () => {
  const { mode, color, setThemeColor, toggleTheme } = useTheme();
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <div className="flex gap-2">
          {(['purple','orange','green','custom'] as const).map((k) => (
            <button
              key={k}
              onClick={() => setThemeColor(k)}
              className={`h-8 w-8 rounded-md border-2 ${color === k ? 'ring-2 ring-primary-500' : 'border-transparent'}`}
              style={{ backgroundColor: themePresets[k].primary?.['500'] }}
              aria-label={`Select ${k}`}
            />
          ))}
        </div>
        <Button variant="outline" onClick={toggleTheme}>Toggle Mode ({mode})</Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card variant="elevated">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Sample Card</h3>
            <p className="text-sm">This card reflects the current theme colors.</p>
            <Button variant="primary">Primary action</Button>
          </div>
        </Card>
        <Card variant="flat">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Flat Card</h3>
            <p className="text-sm">Use this to verify foreground/background contrast.</p>
            <Button variant="outline">Secondary action</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const Playground: Story = {
  render: () => <DemoContent />,
};


