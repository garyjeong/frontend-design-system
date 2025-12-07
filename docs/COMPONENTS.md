# 컴포넌트 구현 현황

이 문서는 MUI Base 컴포넌트 목록과 현재 프로젝트의 컴포넌트 구현 상태를 체크리스트 형식으로 정리합니다.

> **참고**: [MUI Base Components](https://v6.mui.com/base-ui/all-components/)를 기준으로 작성되었습니다.

---

## 📋 MUI Base 컴포넌트 목록

### Inputs

- [x] **Button** - `src/shared/ui/atoms/button/Button.tsx`
- [x] **Checkbox** - `src/shared/ui/atoms/checkbox/Checkbox.tsx`
- [x] **Input** (TextField) - `src/shared/ui/atoms/input/TextField.tsx`
- [x] **Autocomplete** - `src/shared/ui/atoms/autocomplete/Autocomplete.tsx`
- [x] **Number Input** - `src/shared/ui/atoms/number-input/NumberInput.tsx`
- [x] **Radio Group** (Radio) - `src/shared/ui/atoms/radio/Radio.tsx`
- [x] **Select** (Dropdown) - `src/shared/ui/atoms/select/Dropdown.tsx`
- [x] **Slider** - `src/shared/ui/atoms/slider/Slider.tsx`
- [x] **Switch** - `src/shared/ui/atoms/switch/Switch.tsx`
- [ ] **Toggle Button Group** - 미구현
- [ ] **Rating** - 미구현

### Data Display

- [x] **Badge** - `src/shared/ui/atoms/badge/Badge.tsx`
- [x] **Tooltip** - `src/shared/ui/atoms/tooltip/Tooltip.tsx`

### Feedback

- [x] **Snackbar** (Toast) - `src/shared/ui/organisms/toast/Toast.tsx`

### Surfaces

- [x] **Accordion** - `src/shared/ui/organisms/accordion/Accordion.tsx`

### Navigation

- [x] **Drawer** - `src/shared/ui/organisms/drawer/Drawer.tsx`
- [x] **Menu** - `src/shared/ui/organisms/menu/Menu.tsx`
- [x] **Pagination** - `src/shared/ui/organisms/pagination/Pagination.tsx`
- [x] **Table Pagination** - `src/shared/ui/organisms/table-pagination/TablePagination.tsx`
- [x] **Tabs** - `src/shared/ui/organisms/tabs/Tabs.tsx`

### Utils

- [x] **Click-Away Listener** - `src/shared/lib/hooks/useClickAway.ts`
- [x] **Focus Trap** - `src/shared/lib/hooks/useFocusTrap.ts`
- [x] **Form Control** - `src/shared/ui/molecules/form-control/FormControl.tsx`
- [x] **Modal** - `src/shared/ui/organisms/modal/Modal.tsx`
- [ ] **No-SSR** - 미구현
- [x] **Popper** - `src/shared/lib/utils/popper.ts`
- [x] **Portal** - `src/shared/lib/utils/portal.ts`
- [x] **Textarea** - `src/shared/ui/atoms/textarea/TextArea.tsx`
- [x] **Textarea Autosize** - `src/shared/ui/atoms/textarea-autosize/TextareaAutosize.tsx`

---

## 🎨 프로젝트 전용 컴포넌트

### Atoms (기본 요소)

- [x] **Avatar** - `src/shared/ui/atoms/avatar/Avatar.tsx`
- [x] **Button** - `src/shared/ui/atoms/button/Button.tsx`
- [x] **Typography** - `src/shared/ui/atoms/typography/Typography.tsx`

### Molecules (복합 요소)

#### Forms (Atoms)
- [x] **TextField** - `src/shared/ui/atoms/input/TextField.tsx`
- [x] **TextArea** - `src/shared/ui/atoms/textarea/TextArea.tsx`
- [x] **Checkbox** - `src/shared/ui/atoms/checkbox/Checkbox.tsx`
- [x] **Radio** - `src/shared/ui/atoms/radio/Radio.tsx`
- [x] **Switch** - `src/shared/ui/atoms/switch/Switch.tsx`
- [x] **Slider** - `src/shared/ui/atoms/slider/Slider.tsx`
- [x] **Dropdown** - `src/shared/ui/atoms/select/Dropdown.tsx`
- [x] **Autocomplete** - `src/shared/ui/atoms/autocomplete/Autocomplete.tsx`
- [x] **NumberInput** - `src/shared/ui/atoms/number-input/NumberInput.tsx`
- [x] **TextareaAutosize** - `src/shared/ui/atoms/textarea-autosize/TextareaAutosize.tsx`

#### Molecules
- [x] **Card** - `src/shared/ui/molecules/card/Card.tsx`
- [x] **FileUpload** - `src/shared/ui/molecules/file-upload/FileUpload.tsx`
- [x] **FormField** - `src/shared/ui/molecules/form-field/FormField.tsx`
- [x] **FormControl** - `src/shared/ui/molecules/form-control/FormControl.tsx`
- [x] **SearchBar** - `src/shared/ui/molecules/search-bar/SearchBar.tsx`

#### Data Display (Organisms)
- [x] **Table** - `src/shared/ui/organisms/table/Table.tsx`
- [x] **List** - `src/shared/ui/organisms/list/List.tsx`
- [x] **Badge** - `src/shared/ui/atoms/badge/Badge.tsx` (Atom)

### Organisms (복잡한 요소)

#### Navigation (Organisms)
- [x] **Menu** - `src/shared/ui/organisms/menu/Menu.tsx`
- [x] **Tabs** - `src/shared/ui/organisms/tabs/Tabs.tsx`
- [x] **Pagination** - `src/shared/ui/organisms/pagination/Pagination.tsx`
- [x] **TablePagination** - `src/shared/ui/organisms/table-pagination/TablePagination.tsx`
- [x] **Breadcrumb** - `src/shared/ui/organisms/breadcrumb/Breadcrumb.tsx`
- [x] **Drawer** - `src/shared/ui/organisms/drawer/Drawer.tsx`
- [x] **Stepper** - `src/shared/ui/organisms/stepper/Stepper.tsx`
- [x] **Accordion** - `src/shared/ui/organisms/accordion/Accordion.tsx`

#### Feedback (Organisms)
- [x] **Alert** - `src/shared/ui/organisms/alert/Alert.tsx`
- [x] **Banner** - `src/shared/ui/organisms/banner/Banner.tsx`
- [x] **Progress** - `src/shared/ui/organisms/progress/Progress.tsx`
- [x] **Skeleton** - `src/shared/ui/organisms/skeleton/Skeleton.tsx`

#### Overlay (Organisms)
- [x] **Tooltip** - `src/shared/ui/atoms/tooltip/Tooltip.tsx` (Atom)
- [x] **Popover** - `src/shared/ui/organisms/popover/Popover.tsx`
- [x] **Modal** - `src/shared/ui/organisms/modal/Modal.tsx`
- [x] **Toast** - `src/shared/ui/organisms/toast/Toast.tsx`
- [x] **ToastProvider** - `src/shared/ui/organisms/toast/ToastProvider.tsx`

### Templates (레이아웃)

- [x] **Layout** - `src/shared/ui/templates/layout/Layout.tsx`
- [x] **Header** - `src/shared/ui/templates/header/Header.tsx`
- [x] **Footer** - `src/shared/ui/templates/footer/Footer.tsx`
- [x] **Sidebar** - `src/shared/ui/templates/sidebar/Sidebar.tsx`
- [x] **Container** - `src/shared/ui/templates/container/Container.tsx`
- [x] **Grid** - `src/shared/ui/templates/grid/Grid.tsx`
- [x] **Stack** - `src/shared/ui/templates/stack/Stack.tsx`
- [x] **Divider** - `src/shared/ui/templates/divider/Divider.tsx`
- [x] **Spacer** - `src/shared/ui/templates/spacer/Spacer.tsx`

---

## 🛠 유틸리티 & Hooks

### Hooks

- [x] **useButton** - `src/shared/lib/hooks/useButton.ts`
- [x] **useCard** - `src/shared/lib/hooks/useCard.ts`
- [x] **useClickAway** - `src/shared/lib/hooks/useClickAway.ts`
- [x] **useFocusRestore** - `src/shared/lib/hooks/useFocusRestore.ts`
- [x] **useFocusTrap** - `src/shared/lib/hooks/useFocusTrap.ts`
- [x] **useFocusVisible** - `src/shared/lib/hooks/useFocusVisible.ts`
- [x] **useInput** - `src/shared/lib/hooks/useInput.ts`
- [x] **usePopover** - `src/shared/lib/hooks/usePopover.ts`
- [x] **useTooltip** - `src/shared/lib/hooks/useTooltip.ts`

### Utils

- [x] **cn** (클래스 병합) - `src/shared/lib/utils/cn.ts`
- [x] **a11y** (접근성 유틸) - `src/shared/lib/utils/a11y.ts`
- [x] **portal** (Portal 컴포넌트) - `src/shared/lib/utils/portal.ts`
- [x] **popper** (위치 계산 유틸) - `src/shared/lib/utils/popper.ts`

---

## 📊 구현 현황 요약

### MUI Base 컴포넌트

```
✅ 구현 완료: 18개 (90%)
❌ 미구현: 2개 (10%)
```

**구현 완료 (18개)**
- Button, Checkbox, Input (TextField), Radio, Select (Dropdown), Slider, Switch
- Autocomplete, Number Input
- Badge, Tooltip
- Snackbar (Toast)
- Accordion
- Drawer, Menu, Pagination, Table Pagination, Tabs
- Focus Trap, Click-Away Listener, Form Control, Portal, Popper
- Textarea, Textarea Autosize

**미구현 (2개)**
- Toggle Button Group
- Rating
- No-SSR (낮은 우선순위)

### 프로젝트 전용 컴포넌트

```
✅ 구현 완료: 30+ 개
```

프로젝트는 MUI Base보다 더 많은 컴포넌트를 제공하며, 특히 Layout, Feedback, Templates 카테고리에서 추가 컴포넌트를 제공합니다.

---

## 🎯 우선순위별 구현 권장 사항

### 구현 완료 (높은 우선순위)

1. ✅ **Autocomplete** - 자동완성 입력 필드
2. ✅ **Number Input** - 숫자 전용 입력 필드
3. ✅ **Click-Away Listener** - 외부 클릭 감지 유틸리티

### 구현 완료 (중간 우선순위)

4. ✅ **Form Control** - 폼 상태 관리 래퍼 컴포넌트
5. ✅ **Table Pagination** - 테이블 전용 페이지네이션
6. ✅ **Popper** - 고급 위치 계산 유틸리티
7. ✅ **Textarea Autosize** - 자동 높이 조절 Textarea
8. ✅ **Accordion** - 아코디언 컴포넌트

### 낮은 우선순위 (미구현)

9. **Toggle Button Group** - 토글 버튼 그룹
10. **Rating** - 별점 평가 컴포넌트
11. **No-SSR** - SSR 제외 컴포넌트 (SSR 환경이 아닌 경우 불필요)

---

## 📝 참고 사항

- 모든 컴포넌트는 **CVA (Class Variance Authority)** 패턴을 사용하여 변이를 관리합니다.
- **Tailwind CSS** 유틸리티 클래스를 사용하며, 하드코딩된 색상/스페이싱은 사용하지 않습니다.
- **다크 모드**는 Tailwind `dark` 클래스 전략을 사용합니다.
- **접근성**은 WCAG 2.1 AA 레벨 이상을 준수합니다.
- 컴포넌트는 **TypeScript Strict Mode**로 작성되었습니다.

---

## 🔄 업데이트 이력

- **2024년**: 초기 문서 작성
- MUI Base 컴포넌트 목록 기준으로 구현 현황 정리

---

**마지막 업데이트**: 프로젝트 기준

