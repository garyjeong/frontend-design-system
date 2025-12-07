import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../buttons/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Data Display/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'flat', 'glass', 'premium'],
    },
    hoverable: {
      control: 'boolean',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    interactive: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>카드 제목</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>카드 내용이 여기에 표시됩니다. 다양한 정보를 담을 수 있습니다.</p>
        </Card.Content>
        <Card.Footer>
          <Button variant="secondary" size="small">취소</Button>
          <Button variant="primary" size="small">확인</Button>
        </Card.Footer>
      </>
    ),
  },
};

export const OutlinedCard: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <Card.Header>
          <Card.Title>아웃라인 카드</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>이 카드는 테두리가 있는 아웃라인 스타일입니다.</p>
        </Card.Content>
      </>
    ),
  },
};

export const ElevatedCard: Story = {
  args: {
    variant: 'elevated',
    children: (
      <>
        <Card.Header>
          <Card.Title>입체 카드</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>이 카드는 그림자 효과가 있는 입체 스타일입니다.</p>
        </Card.Content>
      </>
    ),
  },
};

export const FlatCard: Story = {
  args: {
    variant: 'flat',
    children: (
      <>
        <Card.Header>
          <Card.Title>플랫 카드</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>이 카드는 배경색이 있는 플랫 스타일입니다.</p>
        </Card.Content>
      </>
    ),
  },
};

export const GlassCard: Story = {
  args: {
    variant: 'glass',
    children: (
      <>
        <Card.Header>
          <Card.Title>유리 카드</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>이 카드는 블러 효과가 있는 유리 스타일입니다.</p>
        </Card.Content>
      </>
    ),
  },
};

export const PremiumCard: Story = {
  args: {
    variant: 'premium',
    children: (
      <>
        <Card.Header>
          <Card.Title>프리미엄 카드</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>이 카드는 그라디언트 배경과 블러 효과가 있는 프리미엄 스타일입니다.</p>
        </Card.Content>
      </>
    ),
  },
};

export const HoverableCard: Story = {
  args: {
    hoverable: true,
    children: (
      <>
        <Card.Header>
          <Card.Title>호버 가능 카드</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>이 카드는 마우스 오버 시 효과가 나타납니다.</p>
        </Card.Content>
      </>
    ),
  },
};

export const InteractiveCard: Story = {
  args: {
    interactive: true,
    children: (
      <>
        <Card.Header>
          <Card.Title>인터랙티브 카드</Card.Title>
        </Card.Header>
        <Card.Content>
          <p>이 카드는 키보드 포커스 및 클릭 상호작용이 가능합니다.</p>
          <Button>클릭</Button>
        </Card.Content>
      </>
    ),
  },
};

export const NoPaddingCard: Story = {
  args: {
    padding: 'none',
    children: (
      <>
        <Card.Header padding="none">
          <Card.Title>패딩 없는 카드</Card.Title>
        </Card.Header>
        <Card.Content padding="none">
          <p>이 카드는 내부 패딩이 없습니다.</p>
        </Card.Content>
        <Card.Footer padding="none">
          <Button variant="secondary" size="small">닫기</Button>
        </Card.Footer>
      </>
    ),
  },
};
