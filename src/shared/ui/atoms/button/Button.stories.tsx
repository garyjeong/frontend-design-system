import type { Meta, StoryObj } from '@storybook/react';
import { FaReact } from 'react-icons/fa';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'link', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    rounded: {
      control: 'select',
      options: ['default', 'full', 'none', 'sm'],
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    children: {
      control: 'text',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary Button',
    disabled: false,
    loading: false,
    fullWidth: false,
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="link">Link</Button>
      <Button {...args} variant="danger">Danger</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <Button {...args} size="small">Small</Button>
      <Button {...args} size="medium">Medium</Button>
      <Button {...args} size="large">Large</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    children: 'React Icon',
    icon: FaReact,
  },
};

export const IconOnly: Story = {
  args: {
    ...Primary.args,
    children: '',
    icon: FaReact,
    size: 'icon',
  },
};

export const Loading: Story = {
    args: {
      ...Primary.args,
      children: 'Loading...',
      loading: true,
    },
    render: (args) => (
        <div className="flex items-center gap-4">
          <Button {...args} variant="primary" loading>Primary</Button>
          <Button {...args} variant="secondary" loading>Secondary</Button>
          <Button {...args} variant="outline" loading icon={FaReact}>Outline</Button>
          <Button {...args} variant="danger" loading size="small" />
        </div>
      ),
};

export const Disabled: Story = {
    args: {
      ...Primary.args,
      children: 'Disabled',
      disabled: true,
    },
    render: (args) => (
        <div className="flex flex-wrap items-center gap-4">
          <Button {...args} variant="primary">Primary</Button>
          <Button {...args} variant="secondary">Secondary</Button>
          <Button {...args} variant="outline">Outline</Button>
          <Button {...args} variant="ghost">Ghost</Button>
          <Button {...args} variant="link">Link</Button>
          <Button {...args} variant="danger">Danger</Button>
          <Button {...args} variant="primary" icon={FaReact}>With Icon</Button>
        </div>
      ),
};

