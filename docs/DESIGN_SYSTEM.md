# Frontend Design System - 통합 가이드

> 개인 프로젝트를 위한 경량 디자인 시스템 문서

## 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [디자인 토큰](#디자인-토큰)
3. [컴포넌트 개발 가이드](#컴포넌트-개발-가이드)
4. [아키텍처](#아키텍처)
5. [개발 워크플로우](#개발-워크플로우)

---

## 프로젝트 개요

### 목적
개인 개발자를 위한 경량 디자인 시스템으로, React 19 + Vite + Tailwind CSS + CVA 기반의 재사용 가능한 UI 컴포넌트 라이브러리를 제공합니다.

### 핵심 원칙
- **최소 변경 원칙 (MCP)**: 기존 로직 보존, 변경 범위 최소화
- **문서 우선**: 코딩 전 프로젝트 규칙 및 로컬 문서 참조 필수
- **디자인 토큰 기반**: 색상, 타이포그래피, 스페이싱 등 규칙성 우선
- **Atomic Design**: Atoms → Molecules → Organisms → Templates → Pages

### 기술 스택
- **Framework**: React 19
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4 + Class Variance Authority (CVA)
- **Language**: TypeScript 5 (Strict Mode)
- **Docs**: Storybook 8
- **Testing**: Vitest + React Testing Library

---

## 디자인 토큰

> ⚠️ **중요**: 모든 디자인 토큰은 `tailwind.config.js`에 정의되어 있으며, 하드코딩 대신 Tailwind 클래스를 사용해야 합니다.

### 1. 색상 시스템

#### Primary Brand Colors (Indigo/Violet)
프로젝트의 기본 브랜드 색상입니다.

| Shade | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| 50    | `#eef2ff` | `bg-primary-50` | Lightest primary for backgrounds |
| 100   | `#e0e7ff` | `bg-primary-100` | Very light primary for accents |
| 200   | `#c7d2fe` | `bg-primary-200` | Light primary |
| 300   | `#a5b4fc` | `bg-primary-300` | Medium-light primary |
| 400   | `#818cf8` | `bg-primary-400` | Medium primary |
| 500   | `#6366f1` | `bg-primary-500` | **Base primary, default for buttons** |
| 600   | `#4f46e5` | `bg-primary-600` | Darker primary for hover states |
| 700   | `#4338ca` | `bg-primary-700` | Dark primary |
| 800   | `#3730a3` | `bg-primary-800` | Very dark primary |
| 900   | `#312e81` | `bg-primary-900` | Deepest primary for dark backgrounds |
| 950   | `#1e1b4b` | `bg-primary-950` | Extra deep primary |

**기본값**: `primary-500` (`#6366f1`)

#### Semantic Colors
의미론적 색상으로 상태와 액션을 표현합니다.

| Category | Light (500) | Dark (400) | Tailwind Class (Light) | Tailwind Class (Dark) | Usage |
|----------|-------------|------------|------------------------|-----------------------|-------|
| Success | `#22c55e` | `#4ade80` | `bg-success-500` | `dark:bg-success-400` | Positive actions, confirmation |
| Warning | `#f59e0b` | `#fcd34d` | `bg-warning-500` | `dark:bg-warning-300` | Caution, non-critical alerts |
| Error | `#ef4444` | `#f87171` | `bg-error-500` | `dark:bg-error-400` | Negative actions, critical alerts |
| Info | `#3b82f6` | `#60a5fa` | `bg-info-500` | `dark:bg-info-400` | Informational messages |

#### Neutral Colors (Zinc)
텍스트, 배경, 경계선 등에 사용되는 중립 색상입니다.

| Shade | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| 50    | `#fafafa` | `bg-neutral-50` | Lightest neutral |
| 100   | `#f4f4f5` | `bg-neutral-100` | Very light neutral |
| 200   | `#e4e4e7` | `bg-neutral-200` | Light neutral, default border |
| 300   | `#d4d4d8` | `bg-neutral-300` | Medium-light neutral |
| 400   | `#a1a1aa` | `bg-neutral-400` | Medium neutral |
| 500   | `#71717a` | `bg-neutral-500` | Base neutral, secondary text |
| 600   | `#52525b` | `bg-neutral-600` | Darker neutral |
| 700   | `#3f3f46` | `bg-neutral-700` | Dark neutral, dark mode border |
| 800   | `#27272a` | `bg-neutral-800` | Very dark neutral, dark mode background |
| 900   | `#18181b` | `bg-neutral-900` | Deepest neutral, main dark background |
| 950   | `#09090b` | `bg-neutral-950` | Extra deep neutral |

#### Theme Specific Colors
라이트/다크 모드별로 정의된 테마 색상입니다.

| Category | Light Value | Dark Value | Tailwind Class (Light) | Tailwind Class (Dark) | Usage |
|----------|-------------|------------|------------------------|-----------------------|-------|
| Background Default | `#f8fafc` | `#0f172a` | `bg-background-light` | `dark:bg-background-dark` | Main page background |
| Background Paper | `#ffffff` | `#1e293b` | `bg-background-paper-light` | `dark:bg-background-paper-dark` | Cards, modals, elevated surfaces |
| Border | `#e2e8f0` | `#334155` | `border-border-light` | `dark:border-border-dark` | Component borders, dividers |
| Text Primary | `#0f172a` | `#f8fafc` | `text-text-primary-light` | `dark:text-text-primary-dark` | Main text content |
| Text Secondary | `#64748b` | `#94a3b8` | `text-text-secondary-light` | `dark:text-text-secondary-dark` | Secondary text, labels |
| Text Disabled | `#cbd5e1` | `#475569` | `text-text-disabled-light` | `dark:text-text-disabled-dark` | Disabled text |
| Input Background | `#ffffff` | `#1e293b` | `bg-white` | `dark:bg-input-bg-dark` | Form input background |

#### 색상 사용 규칙

❌ **금지**: 하드코딩된 색상 값
```tsx
<div className="text-[#212121] bg-[#f5f5f5]">Bad</div>
```

✅ **권장**: Tailwind 클래스 사용
```tsx
<div className="text-text-primary-light dark:text-text-primary-dark bg-background-paper-light dark:bg-background-paper-dark">
  Good
</div>
```

✅ **의미론적 사용**: 색상 이름 대신 의미 사용
```tsx
<Button variant="danger">Delete</Button>  // ✅ Good
<Button className="bg-red-500">Delete</Button>  // ❌ Bad (의미가 명확하지 않음)
```

### 2. 타이포그래피

#### Font Family
- **Display & Sans**: `Inter, sans-serif` (`font-display`, `font-sans`)
- **Mono**: `Roboto Mono, monospace` (`font-mono`)

#### Font Sizes
8px 그리드 기반 크기 체계입니다.

| Size   | Value      | Line Height | Tailwind Class | Usage |
|--------|------------|-------------|----------------|-------|
| xs     | `0.75rem`  | `1rem`      | `text-xs`      | Small labels, captions |
| sm     | `0.875rem` | `1.25rem`   | `text-sm`      | Secondary text, helper text |
| base   | `1rem`     | `1.5rem`    | `text-base`    | Body text, default size |
| lg     | `1.125rem` | `1.75rem`   | `text-lg`      | Large body text |
| xl     | `1.25rem`  | `1.75rem`   | `text-xl`      | Subheadings |
| 2xl    | `1.5rem`   | `2rem`      | `text-2xl`     | Section headings |
| 3xl    | `1.875rem` | `2.25rem`   | `text-3xl`     | Page titles |
| 4xl    | `2.25rem`  | `2.5rem`    | `text-4xl`     | Hero titles |
| 5xl    | `3rem`     | `1`         | `text-5xl`     | Large display text |
| 6xl    | `3.75rem`  | `1`         | `text-6xl`     | Extra large display text |
| 7xl    | `4.5rem`   | `1`         | `text-7xl`     | Huge display text |
| 8xl    | `6rem`     | `1`         | `text-8xl`     | Giant display text |
| 9xl    | `8rem`     | `1`         | `text-9xl`     | Max display text |

#### Font Weights
Tailwind의 `font-` 유틸리티를 사용합니다.
- `font-normal` (400)
- `font-medium` (500)
- `font-semibold` (600)
- `font-bold` (700)
- `font-black` (900)

#### Typography 컴포넌트 사용
```tsx
import { Typography } from '@/components/typography';

<Typography variant="h1" color="primary">Page Title</Typography>
<Typography variant="p" color="secondary">This is a paragraph.</Typography>
```

### 3. 스페이싱

8px 그리드 기반 스페이싱 시스템입니다.

| Size | Value | Tailwind Class | Usage |
|------|-------|----------------|-------|
| 0    | `0px`    | `p-0`, `m-0`   | No spacing |
| 0.5  | `2px`    | `p-0.5`, `m-0.5` | Very tight spacing |
| 1    | `4px`    | `p-1`, `m-1`   | Icon spacing |
| 2    | `8px`    | `p-2`, `m-2`   | Small gaps, compact layouts |
| 3    | `12px`   | `p-3`, `m-3`   | Small-medium spacing |
| 4    | `16px`   | `p-4`, `m-4`   | Default spacing |
| 6    | `24px`   | `p-6`, `m-6`   | Medium spacing |
| 8    | `32px`   | `p-8`, `m-8`   | Large spacing |
| 12   | `48px`   | `p-12`, `m-12` | Extra large spacing |
| 16   | `64px`   | `p-16`, `m-16` | Huge spacing |
| 18   | `72px`   | `p-18`, `m-18` | Extended spacing |
| 144  | `576px`  | `p-144`, `m-144` | Maximum spacing |

#### Spacer 컴포넌트
```tsx
import { Spacer } from '@/components/layout';

<Stack direction="row" align="center">
  <Button>Action 1</Button>
  <Spacer size={24} axis="horizontal" />
  <Button>Action 2</Button>
  <Spacer flex />
  <Button>Action 3</Button>
</Stack>
```

### 4. Border Radius

| Size | Value | Tailwind Class | Usage |
|------|-------|----------------|-------|
| none | `0px`    | `rounded-none` | Sharp corners |
| sm   | `0.125rem` (2px) | `rounded-sm`   | Smallest rounding |
| md   | `0.375rem` (6px) | `rounded-md`   | Medium rounding |
| lg   | `0.5rem` (8px) | `rounded-lg`   | **Default for most components** |
| xl   | `0.75rem` (12px) | `rounded-xl`   | Larger rounding |
| 2xl  | `1rem` (16px) | `rounded-2xl`  | Card-like elements |
| 3xl  | `1.5rem` (24px) | `rounded-3xl`  | More prominent rounding |
| 4xl  | `2rem` (32px) | `rounded-4xl`  | Extended large rounding |
| full | `9999px` | `rounded-full` | Pills, circular elements |

### 5. Shadows

부드러운 그림자 효과입니다.

| Shadow       | Value                                          | Tailwind Class | Usage |
|--------------|------------------------------------------------|----------------|-------|
| soft-sm      | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                | `shadow-soft-sm` | Small elevation, subtle |
| soft         | `0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)` | `shadow-soft`    | **Default elevation** |
| soft-md      | `0 6px 10px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)` | `shadow-soft-md` | Medium elevation, cards |
| soft-lg      | `0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)` | `shadow-soft-lg` | Large elevation, popovers |
| soft-xl      | `0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)` | `shadow-soft-xl` | Extra large elevation, modals |

### 6. Breakpoints

반응형 디자인을 위한 브레이크포인트입니다.

| Breakpoint | Value  | Tailwind Prefix | Usage |
|------------|--------|-----------------|-------|
| sm         | `640px`  | `sm:`           | Small devices (phones) |
| md         | `768px`  | `md:`           | Medium devices (tablets) |
| lg         | `1024px` | `lg:`           | Large devices (laptops) |
| xl         | `1280px` | `xl:`           | Extra large devices (desktops) |
| 2xl        | `1536px` | `2xl:`          | Very large devices (large desktops) |

#### 반응형 사용 예시
```tsx
<div className="p-4 md:p-6 lg:p-8">
  Responsive padding example
</div>
```

### 7. 다크 모드

Tailwind CSS의 `darkMode: 'class'` 전략을 사용합니다.

#### 다크 모드 토글
`<html>` 요소에 `dark` 클래스를 추가/제거하여 테마를 전환합니다.

```tsx
// ThemeProvider 사용 예시
import { ThemeProvider, useTheme } from '@/providers/ThemeProvider';

const MyApp = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

// 테마 토글
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};
```

#### 다크 모드 클래스 사용
```tsx
<div className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark transition-colors duration-300">
  Themed content
</div>
```

---

## 컴포넌트 개발 가이드

> ⚠️ **중요**: 모든 컴포넌트는 CVA(Class Variance Authority) 패턴을 사용하여 변이를 관리합니다.

### 컴포넌트 개발 체크리스트

새 컴포넌트를 개발할 때 다음 단계를 순서대로 진행하세요.

#### ✅ Step 1: 파일 구조 생성
```
src/components/[category]/
  ├── ComponentName.tsx      # 컴포넌트 구현
  ├── ComponentName.test.tsx # 테스트 (선택)
  └── index.ts               # export
```

#### ✅ Step 2: CVA Variants 정의
```tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const componentVariants = cva(
  // 기본 클래스 (모든 변이에 공통)
  "base-classes-here transition-all duration-200",
  {
    variants: {
      variant: {
        default: "classes-for-default",
        primary: "bg-primary-500 text-white",
        // ... 다른 variant들
      },
      size: {
        small: "text-xs h-8 px-3",
        medium: "text-sm h-10 px-4",
        large: "text-base h-12 px-6",
      },
      // ... 다른 variant 타입들
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);
```

**체크리스트**:
- [ ] 기본 클래스에 `transition-all duration-200` 포함 (애니메이션)
- [ ] 다크 모드 클래스 포함 (`dark:bg-*`, `dark:text-*`)
- [ ] 포커스 상태 처리 (`focus-visible:outline-none focus-visible:ring-*`)
- [ ] 비활성화 상태 처리 (`disabled:opacity-50 disabled:cursor-not-allowed`)
- [ ] `defaultVariants` 정의

#### ✅ Step 3: Props 인터페이스 정의
```tsx
export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,  // 또는 적절한 HTML 요소
    VariantProps<typeof componentVariants> {
  // 추가 props
  isLoading?: boolean;
  icon?: IconType;
}
```

**체크리스트**:
- [ ] 적절한 HTML 요소 타입 확장 (`HTMLDivElement`, `HTMLButtonElement` 등)
- [ ] `VariantProps<typeof componentVariants>` 확장
- [ ] 추가 props 타입 정의

#### ✅ Step 4: 컴포넌트 구현
```tsx
export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      >
        {/* 컴포넌트 내용 */}
      </div>
    );
  }
);

Component.displayName = "Component";
```

**체크리스트**:
- [ ] `React.forwardRef` 사용 (ref 전달 지원)
- [ ] `cn()` 헬퍼로 클래스 병합
- [ ] `componentVariants()` 호출로 변이 적용
- [ ] `className` prop으로 추가 클래스 허용
- [ ] `displayName` 설정
- [ ] 접근성 속성 추가 (`aria-*`, `role` 등)

#### ✅ Step 5: Export
```tsx
// index.ts
export { Component, componentVariants } from './Component';
export type { ComponentProps } from './Component';
```

**체크리스트**:
- [ ] 컴포넌트 export
- [ ] variants export (필요시)
- [ ] Props 타입 export

#### ✅ Step 6: 다크 모드 테스트
- [ ] 라이트 모드에서 정상 동작 확인
- [ ] 다크 모드에서 정상 동작 확인
- [ ] 테마 전환 시 부드러운 전환 확인

#### ✅ Step 7: 접근성 검증
- [ ] 키보드 네비게이션 지원
- [ ] 스크린 리더 지원 (`aria-*` 속성)
- [ ] 포커스 표시 명확함
- [ ] 색상 대비 비율 충족 (WCAG AA 이상)

### CVA 패턴 예시: Button 컴포넌트

```tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

// Step 1: CVA Variants 정의
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400",
        secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700",
        outline: "bg-transparent text-primary-600 border border-primary-500 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/20",
        ghost: "bg-transparent text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
      },
      size: {
        small: "text-xs h-8 px-3",
        medium: "text-sm h-10 px-4",
        large: "text-base h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

// Step 2: Props 인터페이스
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

// Step 3: 컴포넌트 구현
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? 'Loading...' : children}
      </button>
    );
  }
);

Button.displayName = "Button";
```

### 컴포넌트 카테고리별 가이드

#### Atoms (기본 요소)
- Button, Input, Icon, Avatar, Badge 등
- **원칙**: 단일 책임, 재사용 가능, props로 제어

#### Molecules (복합 요소)
- FormField (Label + Input + Error), SearchBar, Card 등
- **원칙**: Atoms 조합, 독립적 기능

#### Organisms (복잡한 요소)
- Header, Footer, Sidebar, Modal, Table 등
- **원칙**: Molecules + Atoms 조합, 비즈니스 로직 포함 가능

#### Templates (레이아웃)
- Layout, Dashboard, Page 등
- **원칙**: Organisms 조합, 페이지 구조 정의

---

## 아키텍처

### 프로젝트 구조
```
frontend-design-system/
├── src/
│   ├── components/          # Atomic Design 분류 컴포넌트
│   │   ├── atoms/          # Button, Input, Icon 등
│   │   ├── molecules/      # FormField, SearchBar 등
│   │   ├── organisms/      # Header, Modal, Table 등
│   │   ├── templates/      # Layout, Dashboard 등
│   │   └── index.ts        # 통합 export
│   ├── dev/                 # Vite 데모/플레이그라운드
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── shared/contexts/     # ThemeContext 등
│   ├── utils/               # cn 등 유틸리티
│   └── index.ts             # 라이브러리 진입점
├── providers/
│   └── ThemeProvider.tsx    # 테마 제공자
├── styles/
│   └── globals.css          # 전역 스타일
├── tailwind.config.js       # Tailwind 설정
├── vite.config.ts           # Vite + dts 설정
└── docs/                    # 문서
```

### 빌드 시스템

#### Vite 라이브러리 모드
- **Entry**: `src/index.ts`
- **Output**: `dist/frontend-design-system.{es,umd}.js` + 타입 정의
- **External**: `react`, `react-dom` (peer dependencies)

#### 번들 최적화
- 트리셰이킹 지원
- ESM/UMD 이중 타깃
- 타입 정의 자동 생성 (`vite-plugin-dts`)

### 스타일링 아키텍처

#### Tailwind CSS + CVA
- **Tailwind**: 유틸리티 클래스 기반 스타일링
- **CVA**: 컴포넌트 변이 관리
- **cn()**: 클래스 병합 헬퍼 (`clsx` + `tailwind-merge`)

#### 다크 모드 전략
- `darkMode: 'class'` (Tailwind 설정)
- `ThemeProvider`가 `document.documentElement`에 `dark` 클래스 토글
- 모든 컴포넌트는 `dark:` 접두사로 다크 모드 스타일 정의

### 상태 관리

#### React Context API (최소 사용)
- **ThemeContext**: 테마 토글만 담당
- 나머지는 props 기반 단방향 데이터 흐름

### 데이터 흐름

```
사용자 상호작용
  ↓
Vite Dev / Storybook
  ↓
React Components
  ↓
Tailwind + CVA (스타일)
  ↓
Theme Context (다크 모드)
```

---

## 개발 워크플로우

### 필수 단계 (EXPLAIN → PLAN → DESIGN → IMPLEMENT → TEST → VERIFY)

#### 1. EXPLAIN (문제 정의)
- 변경 목적 명확화
- 영향 범위 분석
- 디자인 토큰 영향 확인

#### 2. PLAN (계획 수립)
- 변경 파일 목록
- 단계별 작업 계획
- 테스트 계획

#### 3. DESIGN (설계)
- CVA variants 구조 설계
- Props 인터페이스 설계
- 접근성 고려사항

#### 4. IMPLEMENT (구현)
- 컴포넌트 개발 체크리스트 따라 구현
- 디자인 토큰 준수
- 코드 스타일 일관성 유지

#### 5. TEST (테스트)
- 단위 테스트 작성 (Vitest)
- 다크 모드 테스트
- 접근성 테스트

#### 6. VERIFY (검증)
- 린트 통과 (`pnpm lint`)
- 타입 체크 통과 (`tsc`)
- Storybook에서 시각적 확인

### 개발 명령어

```bash
# 개발 서버 실행
pnpm dev

# 라이브러리 빌드
pnpm build

# 린트
pnpm lint

# 테스트
pnpm test
pnpm test:ui
pnpm test:coverage

# Storybook
pnpm storybook
pnpm build-storybook
```

### 코드 스타일 규칙

#### MUST Follow
- **Naming**: 
  - Components: PascalCase (`Button.tsx`)
  - Functions/Vars: camelCase (`handleClick`)
  - Constants: UPPER_SNAKE_CASE
- **Component Structure**: Functional components with hooks
- **Styling**: Tailwind utility + CVA variants
- **TypeScript**: Strict mode, `any` 금지
- **Error Handling**: try-catch, error boundaries

#### MUST NOT Do
- ❌ Direct DOM manipulation
- ❌ State mutation
- ❌ Hardcoded colors/spacing
- ❌ Inline styles
- ❌ Console logs in production
- ❌ Large, complex components (분리 필요)

### 커밋 규칙

```
<type>(<scope>): <요약>

예시:
feat(button): primary variant에 hover 효과 추가
fix(modal): 다크 모드에서 배경색 수정
refactor(card): CVA variants 구조 개선
```

---

## 추가 리소스

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Class Variance Authority (CVA)](https://cva.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Storybook Documentation](https://storybook.js.org/docs)

---

## 변경 이력

이 문서는 프로젝트의 통합 가이드로, 다음 문서들을 통합했습니다:
- `PRD.md` (제품 요구사항)
- `ARCHITECTURE.md` (기술 아키텍처)
- `CODE_GUIDELINES.md` (코드 가이드라인)
- `STYLE_GUIDE.md` (스타일 가이드)
- `DEVELOPMENT_GUIDE.md` (개발 프로세스)

**최종 업데이트**: 2024년 (프로젝트 기준)

