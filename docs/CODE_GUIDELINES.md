# 코드 가이드라인

## 핵심 원칙

- **Single Responsibility**: 각 컴포넌트/함수는 하나의 명확한 책임을 가집니다.
- **Reusability**: 컴포넌트는 재사용 가능하도록 설계됩니다.
- **Maintainability**: 코드는 이해, 수정, 디버깅이 쉬워야 합니다.
- **Performance**: 빠른 로딩 시간과 효율적인 렌더링을 최적화합니다.

## 파일 구조

### FSD + Atomic Design

- **FSD Layers**: `shared` (공통), `entities` (도메인), `features` (기능), `widgets` (위젯), `app` (앱)
- **Atomic Design**: `atoms` (기본 요소), `molecules` (복합 요소), `organisms` (복잡한 요소), `templates` (레이아웃)
- 컴포넌트는 `src/shared/ui/{atoms|molecules|organisms|templates}/{component-name}/` 구조로 배치

### Import 규칙

- 절대 경로 사용: `@/shared/ui/atoms/button`
- Barrel exports 활용: `import { Button } from '@/shared/ui'`
- Import 그룹화: node modules → internal modules → styles

## 네이밍 규칙

- **Variables**: camelCase (`userName`, `productPrice`)
- **Functions**: camelCase (`getUserData`, `calculateTotal`)
- **Components**: PascalCase (`Button`, `TextField`)
- **Files**: PascalCase for components (`Button.tsx`), camelCase for utils (`api.ts`)
- **Constants**: UPPER_SNAKE_CASE

## 컴포넌트 구조

### 필수 사항

- Functional components with hooks
- `React.forwardRef` 사용 (ref 전달 지원)
- TypeScript types/interfaces 사용
- UI 로직과 데이터 로직 분리

### 스타일링

- Tailwind 유틸리티 + CVA variants
- `cn()` 헬퍼로 클래스 병합
- 다크 모드는 `dark` 클래스 토글 전략
- 인라인 스타일 금지

## 상태 관리

- **Local State**: `useState` hook
- **Global State**: React Context API (최소 사용, 테마 등 경량 상태만)
- **Props**: 상향식 데이터 흐름 우선
- **Immutability**: 항상 불변성 유지

## 에러 처리

- `try...catch` 블록 사용 (비동기 작업)
- Error boundaries 구현 (React 컴포넌트)
- 사용자 친화적인 에러 메시지 표시

## 금지 사항

- ❌ Direct DOM manipulation
- ❌ State mutation
- ❌ Hardcoded colors/spacing
- ❌ Inline styles
- ❌ Console logs in production
- ❌ `any` 타입 사용
- ❌ 복잡한 상태 관리 패턴 (필요시에만)

## Clean Code 원칙

- **DRY**: 중복 제거
- **KISS**: 가장 간단한 해결책
- **YAGNI**: 지금 필요한 것만 구현
- **SOLID**: 5가지 원칙 준수
- **Single Responsibility**: 함수는 최대 20줄 (10줄 이하 권장)
- **Early Returns**: 중첩 조건보다 조기 반환

## 테스트

- **TDD**: 가능한 경우 TDD 적용
- **Test Behavior**: 구현이 아닌 동작 테스트
- **Coverage**: 80% 이상 유지
- **AAA Pattern**: Arrange, Act, Assert
