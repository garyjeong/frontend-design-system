# 디자인 시스템 가이드

개인 개발자를 위한 경량 디자인 시스템 문서입니다.

## 프로젝트 개요

### 목적
React 19 + Vite + Tailwind CSS + CVA 기반의 재사용 가능한 UI 컴포넌트 라이브러리입니다.

### 핵심 원칙
- **최소 변경 원칙 (MCP)**: 기존 로직 보존, 변경 범위 최소화
- **디자인 토큰 기반**: 색상, 타이포그래피, 스페이싱 등 규칙성 우선
- **Atomic Design**: Atoms → Molecules → Organisms → Templates

### 기술 스택
- **Framework**: React 19
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4 + Class Variance Authority (CVA)
- **Language**: TypeScript 5 (Strict Mode)
- **Docs**: Storybook 8
- **Testing**: Vitest + React Testing Library

## 디자인 토큰

> ⚠️ **중요**: 모든 디자인 토큰은 `tailwind.config.js`에 정의되어 있으며, 하드코딩 대신 Tailwind 클래스를 사용해야 합니다.

### 색상 시스템

#### Primary Brand Colors (Indigo/Violet)
| Shade | Tailwind Class | Usage |
|-------|----------------|-------|
| 500   | `bg-primary-500` | **Base primary, default for buttons** |
| 600   | `bg-primary-600` | Darker primary for hover states |

#### Semantic Colors
| Category | Tailwind Class (Light) | Tailwind Class (Dark) | Usage |
|----------|------------------------|-----------------------|-------|
| Success | `bg-success-500` | `dark:bg-success-400` | Positive actions |
| Warning | `bg-warning-500` | `dark:bg-warning-300` | Caution alerts |
| Error | `bg-error-500` | `dark:bg-error-400` | Critical alerts |
| Info | `bg-info-500` | `dark:bg-info-400` | Informational messages |

#### Theme Specific Colors
| Category | Tailwind Class (Light) | Tailwind Class (Dark) | Usage |
|----------|------------------------|-----------------------|-------|
| Background Default | `bg-background-light` | `dark:bg-background-dark` | Main page background |
| Background Paper | `bg-background-paper-light` | `dark:bg-background-paper-dark` | Cards, modals |
| Text Primary | `text-text-primary-light` | `dark:text-text-primary-dark` | Main text content |
| Text Secondary | `text-text-secondary-light` | `dark:text-text-secondary-dark` | Secondary text |

### 타이포그래피

- **Font Family**: `Inter, sans-serif` (Display & Sans), `Roboto Mono, monospace` (Mono)
- **Font Sizes**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`
- **Font Weights**: `font-normal` (400), `font-medium` (500), `font-semibold` (600), `font-bold` (700)

### 스페이싱

8px 그리드 기반: `p-0`, `p-1`, `p-2`, `p-3`, `p-4`, `p-6`, `p-8`, `p-12`, `p-16` 등

### Border Radius

`rounded-none`, `rounded-sm`, `rounded-md`, `rounded-lg` (default), `rounded-xl`, `rounded-2xl`, `rounded-full`

### Shadows

`shadow-soft-sm`, `shadow-soft` (default), `shadow-soft-md`, `shadow-soft-lg`, `shadow-soft-xl`

### Breakpoints

`sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px)

### 다크 모드

Tailwind CSS의 `darkMode: 'class'` 전략 사용. `<html>` 요소에 `dark` 클래스를 추가/제거하여 테마 전환.

## 컴포넌트 개발 가이드

### CVA 패턴 사용

```tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/lib/utils/cn';

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400",
        secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200",
      },
      size: {
        sm: "text-xs h-8 px-3",
        md: "text-sm h-10 px-4",
        lg: "text-base h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
```

### 개발 체크리스트

- [ ] CVA variants 정의 (기본 클래스, 다크 모드, 포커스, 비활성화 상태 포함)
- [ ] `React.forwardRef` 사용
- [ ] `cn()` 헬퍼로 클래스 병합
- [ ] 접근성 속성 추가 (`aria-*`, `role` 등)
- [ ] 다크 모드 테스트
- [ ] 접근성 검증

## 아키텍처

### 프로젝트 구조

```
src/
├── shared/
│   ├── ui/              # UI 컴포넌트 (Atomic Design)
│   │   ├── atoms/       # Button, Input, Avatar 등
│   │   ├── molecules/  # Card, FormField 등
│   │   ├── organisms/  # Table, Modal, Menu 등
│   │   └── templates/  # Layout, Header 등
│   ├── lib/
│   │   ├── hooks/       # 커스텀 훅
│   │   ├── utils/       # 유틸리티 함수
│   │   └── contexts/    # ThemeContext 등
│   └── config/          # 설정
└── app/
    └── dev/             # Dev playground
```

### 빌드 시스템

- **Entry**: `src/index.ts`
- **Output**: `dist/frontend-design-system.{es,umd}.js` + 타입 정의
- **External**: `react`, `react-dom` (peer dependencies)

## 개발 워크플로우

### 필수 단계

1. **EXPLAIN**: 문제 정의, 영향 범위 분석
2. **PLAN**: 변경 파일 목록, 단계별 작업 계획
3. **DESIGN**: CVA variants 구조 설계, Props 인터페이스 설계
4. **IMPLEMENT**: 컴포넌트 개발 체크리스트 따라 구현
5. **TEST**: 단위 테스트 작성, 다크 모드 테스트, 접근성 테스트
6. **VERIFY**: 린트 통과, 타입 체크 통과, Storybook 확인

### 개발 명령어

```bash
pnpm dev          # 개발 서버 실행
pnpm build        # 라이브러리 빌드
pnpm lint         # 린트
pnpm test         # 테스트
pnpm storybook    # Storybook 실행
```

### 코드 스타일 규칙

**MUST Follow:**
- Components: PascalCase (`Button.tsx`)
- Functions/Vars: camelCase (`handleClick`)
- Tailwind utility + CVA variants
- TypeScript Strict mode, `any` 금지

**MUST NOT Do:**
- ❌ Direct DOM manipulation
- ❌ State mutation
- ❌ Hardcoded colors/spacing
- ❌ Inline styles
- ❌ Console logs in production

## 추가 리소스

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Class Variance Authority (CVA)](https://cva.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Storybook Documentation](https://storybook.js.org/docs)
