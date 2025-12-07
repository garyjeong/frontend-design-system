# Frontend Design System

개인 개발자를 위한 경량 디자인 시스템입니다. Vite + React 19 + TypeScript + Tailwind CSS(+CVA) 기반으로 빠르게 구성 요소를 탐색하고 재사용할 수 있습니다. Storybook과 Vitest를 통해 문서화와 테스트를 병행합니다.

## 🎯 Overview

- React 19 / Vite 번들링
- Tailwind CSS + Class Variance Authority(CVA)로 변이(variant) 관리
- 다크 모드: Tailwind `dark` 클래스 전략
- Storybook 8 문서화, Vitest + Testing Library 테스트

## ✨ Features

- **Complete Component Library**: Buttons, Forms, Navigation, Data Display, Notifications, Avatars, Templates
- **Design Templates**: Layout, Header, Footer, Sidebar 등
- **Theme System**: Tailwind `dark` 클래스 기반 라이트/다크 모드
- **TypeScript**: 엄격 모드, ES2020 타깃
- **Accessibility**: WCAG 고려 ARIA 적용
- **Responsive**: Tailwind 기반 반응형 유틸리티

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installation & Scripts

```bash
pnpm install              # 의존성 설치
pnpm dev                  # Vite 개발 서버 (http://localhost:5173)
pnpm build                # 라이브러리 빌드 (ESM/UMD + dts)
pnpm preview              # 빌드 결과 미리보기
pnpm lint                 # ESLint
pnpm test                 # Vitest
pnpm test:ui              # Vitest UI
pnpm test:coverage        # 커버리지
pnpm storybook            # Storybook (http://localhost:6006)
pnpm build-storybook      # Storybook 정적 빌드
```

## 📁 Project Structure

```
frontend-design-system/
├── src/
│   ├── shared/              # FSD Shared 레이어
│   │   ├── ui/              # UI 컴포넌트 (Atomic Design)
│   │   │   ├── atoms/      # 기본 요소 (Button, Input, Avatar 등)
│   │   │   ├── molecules/  # 복합 요소 (Card, FormField 등)
│   │   │   ├── organisms/  # 복잡한 요소 (Table, Modal, Menu 등)
│   │   │   └── templates/ # 레이아웃 템플릿 (Layout, Header 등)
│   │   ├── lib/             # 유틸리티, hooks
│   │   │   ├── hooks/      # 커스텀 훅
│   │   │   ├── utils/      # 유틸리티 함수
│   │   │   └── constants/  # 상수
│   │   ├── api/             # API 관련 (확장 가능)
│   │   └── config/          # 설정
│   │       └── theme/      # 테마 설정
│   ├── entities/            # 도메인 엔티티 (필요시 확장)
│   ├── features/            # 복합 기능 (필요시 확장)
│   ├── widgets/             # 복합 위젯 (필요시 확장)
│   └── app/                  # 앱 레벨
│       └── dev/              # Dev playground
├── providers/ThemeProvider.tsx
├── styles/                  # Tailwind 전역 스타일 (globals.css 등)
├── docs/                    # 문서 (PRD, ARCHITECTURE, CODE_GUIDELINES 등)
├── tailwind.config.js       # Tailwind 설정 (darkMode: 'class')
├── vite.config.ts           # Vite + dts 설정 (라이브러리 모드)
└── src/index.ts             # 라이브러리 진입점 (exports)
```

## 🧩 Component Library (요약)

- Buttons: variant/size/fullWidth/rounded + icon, loading 상태
- Forms: TextField, TextArea, Checkbox, Radio, Switch, Slider, FileUpload
- Navigation: Menu, Tabs, Pagination, Breadcrumb, Drawer, Stepper
- Data Display: Card, Table, List, Badge
- Feedback: Alert, Banner, Progress, Skeleton
- Overlay: Tooltip, Popover, Modal, Toast + ToastProvider
- Templates: Layout, Header, Footer, Sidebar
- Typography: 다양한 heading/body 스타일

## 🎨 Theme System

- Tailwind `darkMode: 'class'` 기반
- `ThemeContext`는 `localStorage`에 `light/dark` 모드를 저장하고, `document.documentElement`에 `dark` 클래스를 토글
- 전역 스타일은 `src/index.css`와 `styles/globals.css`의 Tailwind `@layer base`로 관리

## 🛠 Technology Stack

- **Framework/Build**: Vite 5 (React 19, TS 5)
- **Styling**: Tailwind CSS 3.4, CVA, clsx/tailwind-merge
- **Docs**: Storybook 8
- **Testing**: Vitest + @testing-library/react + jsdom
- **Linting**: ESLint (@typescript-eslint, react-hooks, react-refresh)

## 🧪 Testing

Vitest + Testing Library 기반으로 컴포넌트 동작을 검증합니다.

```bash
pnpm test
pnpm test:ui
pnpm test:coverage
```

## 🎯 Design Principles

- Accessibility First (WCAG)
- Mobile First, Responsive
- Type Safety (TS strict)
- Variant-driven UI (CVA + Tailwind)
- Dark mode 지원

## 📚 Documentation & Playground

- Storybook: `pnpm storybook` (컴포넌트 문서/데모)
- Vite Dev Playground: `pnpm dev` → `src/app/dev/App.tsx`에서 전체 컴포넌트 탐색
- Style Guide: `docs/STYLE_GUIDE.md`
- Architecture: `docs/ARCHITECTURE.md` (FSD + Atomic Design 구조)
- Components: `docs/COMPONENTS.md` (구현 현황)

## 🚧 Roadmap

- [ ] 추가 컴포넌트 변이 및 템플릿
- [ ] 사이드바 기반 구성요소 탐색 강화
- [ ] 디자인 토큰 정리/추출
- [ ] 애니메이션/모션 프리셋 추가

## 📝 License

Private repository (internal use)

## 🤝 Contributing

기여 시 PR 전에 테스트/린트 통과 및 문서 업데이트를 확인해주세요.
