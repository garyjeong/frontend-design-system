import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@/shared/ui/atoms/button';
import { TextField, Switch, Slider, TextArea } from '@/shared/ui/atoms';
import { FileUpload } from '@/shared/ui/molecules/file-upload';
import { Card } from '@/shared/ui/molecules/card';
import { Typography } from '@/shared/ui/atoms/typography';
import { Alert, Progress, Skeleton } from '@/shared/ui/organisms';
import { Tooltip } from '@/shared/ui/atoms/tooltip';
import { Popover } from '@/shared/ui/organisms/popover';
import { Grid, Stack, Divider, Spacer } from '@/shared/ui/templates';
import { Breadcrumb, Stepper, Drawer, Modal, Accordion, Tabs, Menu, Pagination, List, Table } from '@/shared/ui/organisms';
import { Badge } from '@/shared/ui/atoms/badge';
import { Avatar } from '@/shared/ui/atoms/avatar';
import { ToastProvider, useToast } from '@/shared/ui/organisms/toast';
import { Sidebar, type SidebarNavItem } from '@/shared/ui/templates/sidebar';
import { ThemeProvider } from '@/shared/contexts/ThemeContext';
import { ThemeToggle } from '@/shared/ui/atoms/theme-toggle';
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaCog,
  FaHome,
  FaLayerGroup,
  FaThList,
  FaShapes,
  FaFont,
  FaSearch,
  FaChartLine,
  FaUsers,
  FaMousePointer,
  FaClock,
  FaEllipsisH,
  FaCreditCard,
  FaComment,
  FaProjectDiagram,
  FaKeyboard,
  FaTable,
  FaList,
  FaExclamationCircle,
  FaSpinner,
  FaWindowMaximize,
  FaSquare,
  FaAlignLeft,
} from 'react-icons/fa';

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isDesktop;
};

// --- Mock Data ---
const MOCK_STATS = [
  { title: '총 수익', value: '$45,231.89', trend: '+20.1%', trendUp: true, icon: FaChartLine },
  { title: '활성 사용자', value: '2,350', trend: '+180.1%', trendUp: true, icon: FaUsers },
  { title: '이탈률', value: '12.23%', trend: '-4.5%', trendUp: false, icon: FaMousePointer },
  { title: '평균 세션', value: '2m 45s', trend: '+8.2%', trendUp: true, icon: FaClock },
] as const;

const MOCK_ACTIVITIES = [
  { icon: FaUser, title: '새로운 사용자 등록', time: '2분 전' },
  { icon: FaCreditCard, title: '결제 완료', time: '15분 전' },
  { icon: FaComment, title: '새로운 댓글 작성', time: '1시간 전' },
  { icon: FaProjectDiagram, title: '프로젝트 생성', time: '3시간 전' },
] as const;

// --- Sub-components for Views ---

const DashboardView = () => {
  const { showToast } = useToast();
  
  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <Typography variant="h1" className="font-bold tracking-tight text-neutral-900 dark:text-white">
            대시보드
          </Typography>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => showToast({ message: '보고서 다운로드가 시작되었습니다.', type: 'info' })}>
            보고서 다운로드
          </Button>
          <Button variant="primary" onClick={() => showToast({ message: '새 프로젝트를 생성합니다.', type: 'success' })}>
            새 프로젝트
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <Grid cols={1} gap="md" className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {MOCK_STATS.map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-2">
              <Typography variant="small" className="text-neutral-500 font-medium text-xs">
                {stat.title}
              </Typography>
              <stat.icon className="text-neutral-400" size={14} />
            </div>
            <div className="space-y-0.5">
              <Typography variant="h3" className="font-bold text-neutral-900 dark:text-white text-xl">
                {stat.value}
              </Typography>
              <span className={`text-xs font-medium ${stat.trendUp ? 'text-success-500' : 'text-error-500'}`}>
                {stat.trend} <span className="text-neutral-400 font-normal">지난달 대비</span>
              </span>
            </div>
          </div>
        ))}
      </Grid>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
            <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
              최근 활동
            </Typography>
            <Button 
              variant="ghost" 
              size="small" 
              className="h-7 text-xs"
              onClick={() => showToast({ message: '모든 활동을 표시합니다.', type: 'info' })}
            >
              모두 보기
            </Button>
          </div>
          <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {MOCK_ACTIVITIES.map((activity, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                <div className="h-7 w-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 flex-shrink-0">
                  <activity.icon size={11} />
                </div>
                <div className="flex-1 min-w-0">
                  <Typography variant="small" className="font-medium text-neutral-900 dark:text-white text-sm leading-tight">
                    {activity.title}
                  </Typography>
                  <Typography variant="caption" className="text-neutral-500 text-xs">
                    {activity.time}
                  </Typography>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-neutral-400 flex-shrink-0 h-6 w-6"
                  onClick={() => showToast({ message: `${activity.title} 옵션`, type: 'info' })}
                >
                  <FaEllipsisH size={10} />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:shadow-md transition-shadow duration-200 overflow-hidden">
          <div className="px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
            <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
              빠른 작업
            </Typography>
          </div>
          <div className="p-3 space-y-1.5">
            <Button 
              variant="outline" 
              fullWidth 
              className="justify-start text-sm h-8" 
              icon={FaEnvelope}
              onClick={() => showToast({ message: '이메일 캠페인 전송을 시작합니다.', type: 'info' })}
            >
              이메일 캠페인 전송
            </Button>
            <Button 
              variant="outline" 
              fullWidth 
              className="justify-start text-sm h-8" 
              icon={FaUsers}
              onClick={() => showToast({ message: '사용자 관리 페이지로 이동합니다.', type: 'info' })}
            >
              사용자 관리
            </Button>
            <Button 
              variant="outline" 
              fullWidth 
              className="justify-start text-sm h-8" 
              icon={FaCog}
              onClick={() => showToast({ message: '시스템 설정 페이지로 이동합니다.', type: 'info' })}
            >
              시스템 설정
            </Button>
            <div className="pt-2.5 mt-2.5 border-t border-neutral-100 dark:border-neutral-800">
              <Typography variant="caption" className="mb-1.5 block text-neutral-500 text-xs">저장 공간 사용량</Typography>
              <Progress value={75} variant="primary" size="sm" />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-neutral-500">75GB 사용됨</span>
                <span className="text-xs text-neutral-500">100GB 총계</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComponentsView = () => {
  const { showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [_selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isInfoAlertVisible, setIsInfoAlertVisible] = useState(true);

  return (
    <div className="space-y-6 animate-fade-in">
       <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between" id="overview">
        <div className="space-y-1.5">
          <Typography variant="h1" className="font-bold">
            컴포넌트 라이브러리
          </Typography>
          <Typography variant="p" color="muted">
            UI 컴포넌트의 포괄적인 제품군을 살펴보세요.
          </Typography>
        </div>
      </div>

      <div id="layout" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            레이아웃 컴포넌트
          </Typography>
        </div>
        <div className="p-4">
          <Stack direction="column" gap="sm" fullWidth>
            <Typography variant="h3" className="text-base font-semibold">그리드 시스템</Typography>
            <div className="mt-3 space-y-4">
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">3열 그리드</Typography>
              <Grid cols={3} gap="sm">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex h-20 items-center justify-center bg-primary-50/50 border border-primary-100 text-primary-700 shadow-sm dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-100"
                  >
                    <Typography variant="small" className="text-xs">{`열 ${item}`}</Typography>
                  </div>
                ))}
              </Grid>
            </div>
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">반응형 그리드 (모바일: 1열, 태블릿: 2열, 데스크톱: 4열)</Typography>
              <Grid cols={1} gap="sm" className="md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex h-16 items-center justify-center bg-primary-50/50 border border-primary-100 text-primary-700 shadow-sm dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-100"
                  >
                    <Typography variant="small" className="text-xs">{`열 ${item}`}</Typography>
                  </div>
                ))}
              </Grid>
            </div>
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">6열 그리드</Typography>
              <Grid cols={6} gap="xs">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="flex h-14 items-center justify-center rounded bg-primary-50/50 border border-primary-100 text-primary-700 shadow-sm dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-100"
                  >
                    <Typography variant="small" className="text-xs">{item}</Typography>
                  </div>
                ))}
              </Grid>
            </div>
          </div>
          <Divider label="스택 및 스페이서" className="my-3" />
          <div className="space-y-4">
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">가로 스택 (중앙 정렬)</Typography>
              <Stack direction="row" gap="sm" align="center" justify="center">
                <Button variant="secondary" size="small">스택 항목 1</Button>
                <Button variant="outline" size="small">스택 항목 2</Button>
                <Button variant="primary" size="small">스택 항목 3</Button>
              </Stack>
            </div>
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">가로 스택 (양쪽 정렬)</Typography>
              <Stack direction="row" gap="sm" align="center" justify="between">
                <Button variant="secondary" size="small">왼쪽</Button>
                <Button variant="outline" size="small">중앙</Button>
                <Spacer flex />
                <Button variant="primary" size="small">오른쪽</Button>
              </Stack>
            </div>
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">세로 스택</Typography>
              <Stack direction="column" gap="xs" align="stretch">
                <Button variant="secondary" size="small">항목 1</Button>
                <Button variant="outline" size="small">항목 2</Button>
                <Button variant="primary" size="small">항목 3</Button>
              </Stack>
            </div>
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">다양한 간격 옵션</Typography>
              <Stack direction="row" gap="xs" align="center">
                <Button variant="outline" size="small">xs</Button>
                <Button variant="outline" size="small">sm</Button>
                <Button variant="outline" size="small">md</Button>
                <Button variant="outline" size="small">lg</Button>
              </Stack>
            </div>
          </div>
        </Stack>
        </div>
      </div>

      <div id="buttons" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            버튼
          </Typography>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <Typography variant="small" className="text-neutral-500 mb-2 block font-medium text-xs">Variant</Typography>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" size="small">기본</Button>
              <Button variant="secondary" size="small">보조</Button>
              <Button variant="outline" size="small">윤곽선</Button>
              <Button variant="ghost" size="small">고스트</Button>
              <Button variant="danger" size="small">위험</Button>
            </div>
          </div>
          <div>
            <Typography variant="small" className="text-neutral-500 mb-2 block font-medium text-xs">Shape & Style</Typography>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" rounded="full" size="small">둥근</Button>
              <Button icon={FaUser} iconPosition="left" size="small">
                아이콘 포함
              </Button>
            </div>
          </div>
          <div>
            <Typography variant="small" className="text-neutral-500 mb-2 block font-medium text-xs">States</Typography>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="primary"
                size="small"
                onClick={() => showToast({ message: '성공 토스트입니다!', type: 'success' })}
              >
                토스트 트리거
              </Button>
              <Button loading size="small">로딩 중</Button>
            </div>
          </div>
        </div>
      </div>

      <div id="forms" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            폼 요소
          </Typography>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Form submission logic can be added here
          }}
          className="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
        >
          <Stack direction="column" gap="sm" fullWidth>
            <TextField
              label="이메일 주소"
              type="email"
              placeholder="이름@예시.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={FaEnvelope}
            />
            <TextField
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={FaLock}
            />
            <Switch
              label="알림 활성화"
              checked={switchChecked}
              onChange={(e) => setSwitchChecked(e.target.checked)}
            />
          </Stack>
          <Stack direction="column" gap="sm" fullWidth>
            <Slider
              min={0}
              max={100}
              step={1}
              value={sliderValue}
              onChange={setSliderValue}
              className="mt-2"
            />
            <TextArea
              label="메시지"
              placeholder="여기에 메시지를 입력하세요..."
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.target.value)}
              rows={3}
            />
            <FileUpload
              label="파일 업로드"
              multiple
              onFileChange={setSelectedFiles}
            />
          </Stack>
        </form>
      </div>

      <div id="feedback" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            피드백 및 오버레이
          </Typography>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Stack direction="column" gap="sm">
            {isInfoAlertVisible && (
              <Alert 
                variant="info" 
                title="정보" 
                description="오늘 밤 시스템 업데이트가 예정되어 있습니다." 
                closable 
                onClose={() => setIsInfoAlertVisible(false)}
              />
            )}
            <Alert variant="success" description="변경사항이 성공적으로 저장되었습니다." showIcon />
            <div className="flex gap-3 items-center">
               <Skeleton variant="circle" className="h-10 w-10" />
               <div className="space-y-1.5 flex-1">
                 <Skeleton width="3/4" height="sm" />
                 <Skeleton width="1/2" height="sm" />
               </div>
            </div>
          </Stack>
          <Stack direction="column" gap="sm" align="start">
             <Tooltip content="이것은 유용한 툴팁입니다" placement="top">
                <Button variant="secondary">여기에 마우스를 올리세요 (툴팁)</Button>
              </Tooltip>
              <Popover
                open={isPopoverOpen}
                onOpenChange={setIsPopoverOpen}
                trigger="click"
                placement="right"
                content={
                  <div className="p-3 text-sm w-64">
                    <Typography variant="h6" className="mb-1.5 text-sm">팝오버 제목</Typography>
                    <Typography variant="p" className="mb-3 text-slate-500 text-xs">여기에 팝오버 내용이 있습니다. 무엇이든 포함할 수 있습니다.</Typography>
                    <Button size="small" fullWidth onClick={() => setIsPopoverOpen(false)}>닫기</Button>
                  </div>
                }
              >
                <Button variant="outline" size="small">여기를 클릭하세요 (팝오버)</Button>
              </Popover>
              <Button onClick={() => setIsDrawerOpen(true)} size="small">드로어 열기</Button>
              <Button onClick={() => setIsModalOpen(true)} size="small">모달 열기</Button>
              <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="컴포넌트 드로어" position="right">
                <div className="p-4 space-y-3">
                  <Typography variant="p" className="text-sm">이것은 드로어 컴포넌트입니다. 화면 가장자리에서 슬라이드됩니다.</Typography>
                  <Button onClick={() => setIsDrawerOpen(false)} fullWidth size="small">드로어 닫기</Button>
                </div>
              </Drawer>
              <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} size="md">
                <Modal.Header>
                  <Modal.Title>모달 제목</Modal.Title>
                  <Modal.CloseButton />
                </Modal.Header>
                <Modal.Content>
                  <Typography variant="p" className="text-sm">
                    이것은 모달 컴포넌트입니다. 오버레이를 클릭하거나 ESC 키를 눌러 닫을 수 있습니다.
                  </Typography>
                </Modal.Content>
                <Modal.Footer>
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>취소</Button>
                  <Button variant="primary" onClick={() => {
                    setIsModalOpen(false);
                    showToast({ message: '모달에서 확인을 클릭했습니다.', type: 'success' });
                  }}>
                    확인
                  </Button>
                </Modal.Footer>
              </Modal>
          </Stack>
        </div>
      </div>
      
      <div id="navigation" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            탐색
          </Typography>
        </div>
        <div className="p-4 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-1 rounded-full bg-primary-500"></div>
                <Typography variant="small" className="text-neutral-700 dark:text-neutral-300 text-xs font-semibold uppercase tracking-wide">
                  Breadcrumb
                </Typography>
              </div>
              <div className="pl-3">
                <Breadcrumb
                  items={[
                    { label: '홈', href: '#', onClick: () => showToast({ message: '홈으로 이동', type: 'info' }) },
                    { label: '컴포넌트', href: '#', onClick: () => showToast({ message: '컴포넌트로 이동', type: 'info' }) },
                    { label: '탐색' },
                  ]}
                />
              </div>
            </div>
            
            <Divider />
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-1 rounded-full bg-primary-500"></div>
                <Typography variant="small" className="text-neutral-700 dark:text-neutral-300 text-xs font-semibold uppercase tracking-wide">
                  Stepper
                </Typography>
              </div>
              <div className="pl-3">
                <Stepper steps={[
                  { label: '1단계', description: '세부 정보' },
                  { label: '2단계', description: '설정' },
                  { label: '3단계', description: '검토' },
                ]} currentStep={1} />
              </div>
            </div>
            
            <Divider />
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-1 rounded-full bg-primary-500"></div>
                <Typography variant="small" className="text-neutral-700 dark:text-neutral-300 text-xs font-semibold uppercase tracking-wide">
                  Accordion
                </Typography>
              </div>
              <div className="pl-3">
                <Accordion
                  items={[
                    {
                      title: '첫 번째 항목',
                      content: (
                        <div className="space-y-3">
                          <Typography variant="p" className="text-sm text-neutral-600 dark:text-neutral-400">
                            이것은 첫 번째 아코디언 항목의 내용입니다. 여러 줄의 텍스트와 버튼을 포함할 수 있습니다.
                          </Typography>
                          <Button size="small" variant="outline" onClick={() => showToast({ message: '첫 번째 항목의 액션', type: 'info' })}>
                            액션 버튼
                          </Button>
                        </div>
                      ),
                    },
                    {
                      title: '두 번째 항목',
                      content: (
                        <Typography variant="p" className="text-sm text-neutral-600 dark:text-neutral-400">
                          이것은 두 번째 아코디언 항목의 내용입니다. 간단한 텍스트만 포함되어 있습니다.
                        </Typography>
                      ),
                    },
                    {
                      title: '세 번째 항목 (비활성화)',
                      content: (
                        <Typography variant="p" className="text-sm text-neutral-500 dark:text-neutral-500">
                          이 항목은 비활성화되어 있습니다.
                        </Typography>
                      ),
                      disabled: true,
                    },
                  ]}
                  allowMultiple={false}
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

// --- Unified Page View ---
const UnifiedPageView = () => {
  const { showToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [_selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isInfoAlertVisible, setIsInfoAlertVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('tab1');
  const [activeMenuItem, setActiveMenuItem] = useState('1');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Dashboard Section */}
      <div id="dashboard" className="space-y-10 scroll-mt-24">
        {/* Header Section */}
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <Typography variant="h1" className="font-bold tracking-tight text-neutral-900 dark:text-white">
              대시보드
            </Typography>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => showToast({ message: '보고서 다운로드가 시작되었습니다.', type: 'info' })}>
              보고서 다운로드
            </Button>
            <Button variant="primary" onClick={() => showToast({ message: '새 프로젝트를 생성합니다.', type: 'success' })}>
              새 프로젝트
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <Grid cols={1} gap="md" className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {MOCK_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-4 hover:shadow-md transition-shadow duration-200">
              <div className="flex justify-between items-start mb-2">
                <Typography variant="small" className="text-neutral-500 font-medium text-xs">
                  {stat.title}
                </Typography>
                <stat.icon className="text-neutral-400" size={14} />
              </div>
              <div className="space-y-0.5">
                <Typography variant="h3" className="font-bold text-neutral-900 dark:text-white text-xl">
                  {stat.value}
                </Typography>
                <span className={`text-xs font-medium ${stat.trendUp ? 'text-success-500' : 'text-error-500'}`}>
                  {stat.trend} <span className="text-neutral-400 font-normal">지난달 대비</span>
                </span>
              </div>
            </div>
          ))}
        </Grid>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
              <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
                최근 활동
              </Typography>
              <Button 
                variant="ghost" 
                size="small" 
                className="h-7 text-xs"
                onClick={() => showToast({ message: '모든 활동을 표시합니다.', type: 'info' })}
              >
                모두 보기
              </Button>
            </div>
            <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
              {MOCK_ACTIVITIES.map((activity, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                  <div className="h-7 w-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400 flex-shrink-0">
                    <activity.icon size={11} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Typography variant="small" className="font-medium text-neutral-900 dark:text-white text-sm leading-tight">
                      {activity.title}
                    </Typography>
                    <Typography variant="caption" className="text-neutral-500 text-xs">
                      {activity.time}
                    </Typography>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-neutral-400 flex-shrink-0 h-6 w-6"
                    onClick={() => showToast({ message: `${activity.title} 옵션`, type: 'info' })}
                  >
                    <FaEllipsisH size={10} />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
              <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
                빠른 작업
              </Typography>
            </div>
            <div className="p-3 space-y-1.5">
              <Button 
                variant="outline" 
                fullWidth 
                className="justify-start text-sm h-8" 
                icon={FaEnvelope}
                onClick={() => showToast({ message: '이메일 캠페인 전송을 시작합니다.', type: 'info' })}
              >
                이메일 캠페인 전송
              </Button>
              <Button 
                variant="outline" 
                fullWidth 
                className="justify-start text-sm h-8" 
                icon={FaUsers}
                onClick={() => showToast({ message: '사용자 관리 페이지로 이동합니다.', type: 'info' })}
              >
                사용자 관리
              </Button>
              <Button 
                variant="outline" 
                fullWidth 
                className="justify-start text-sm h-8" 
                icon={FaCog}
                onClick={() => showToast({ message: '시스템 설정 페이지로 이동합니다.', type: 'info' })}
              >
                시스템 설정
              </Button>
              <div className="pt-2.5 mt-2.5 border-t border-neutral-100 dark:border-neutral-800">
                <Typography variant="caption" className="mb-1.5 block text-neutral-500 text-xs">저장 공간 사용량</Typography>
                <Progress value={75} variant="primary" size="sm" />
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-neutral-500">75GB 사용됨</span>
                  <span className="text-xs text-neutral-500">100GB 총계</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout - Grid Section */}
      <div id="layout-grid" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Grid
          </Typography>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">3열 그리드</Typography>
              <Grid cols={3} gap="sm">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex h-20 items-center justify-center bg-primary-50/50 border border-primary-100 text-primary-700 shadow-sm dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-100"
                  >
                    <Typography variant="small" className="text-xs">{`열 ${item}`}</Typography>
                  </div>
                ))}
              </Grid>
            </div>
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">반응형 그리드 (모바일: 1열, 태블릿: 2열, 데스크톱: 4열)</Typography>
              <Grid cols={1} gap="sm" className="md:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex h-16 items-center justify-center bg-primary-50/50 border border-primary-100 text-primary-700 shadow-sm dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-100"
                  >
                    <Typography variant="small" className="text-xs">{`열 ${item}`}</Typography>
                  </div>
                ))}
              </Grid>
            </div>
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">6열 그리드</Typography>
              <Grid cols={6} gap="xs">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="flex h-14 items-center justify-center bg-primary-50/50 border border-primary-100 text-primary-700 shadow-sm dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-100"
                  >
                    <Typography variant="small" className="text-xs">{item}</Typography>
                  </div>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </div>

      {/* Layout - Stack Section */}
      <div id="layout-stack" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Stack
          </Typography>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">가로 스택 (중앙 정렬)</Typography>
              <Stack direction="row" gap="sm" align="center" justify="center">
                <Button variant="secondary" size="small">스택 항목 1</Button>
                <Button variant="outline" size="small">스택 항목 2</Button>
                <Button variant="primary" size="small">스택 항목 3</Button>
              </Stack>
            </div>
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">가로 스택 (양쪽 정렬)</Typography>
              <Stack direction="row" gap="sm" align="center" justify="between">
                <Button variant="secondary" size="small">왼쪽</Button>
                <Button variant="outline" size="small">중앙</Button>
                <Spacer flex />
                <Button variant="primary" size="small">오른쪽</Button>
              </Stack>
            </div>
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">세로 스택</Typography>
              <Stack direction="column" gap="xs" align="stretch">
                <Button variant="secondary" size="small">항목 1</Button>
                <Button variant="outline" size="small">항목 2</Button>
                <Button variant="primary" size="small">항목 3</Button>
              </Stack>
            </div>
            <div>
              <Typography variant="small" className="text-neutral-500 mb-1.5 block text-xs">다양한 간격 옵션</Typography>
              <Stack direction="row" gap="xs" align="center">
                <Button variant="outline" size="small">xs</Button>
                <Button variant="outline" size="small">sm</Button>
                <Button variant="outline" size="small">md</Button>
                <Button variant="outline" size="small">lg</Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>

      {/* Layout - Divider Section */}
      <div id="layout-divider" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Divider
          </Typography>
        </div>
        <div className="p-4 space-y-4">
          <Divider />
          <Divider label="레이블이 있는 구분선" />
          <Divider label="왼쪽 정렬" labelPosition="left" />
          <Divider label="오른쪽 정렬" labelPosition="right" />
        </div>
      </div>

      {/* Typography Section */}
      <div id="typography" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Typography
          </Typography>
        </div>
        <div className="p-4 space-y-4">
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="h4">Heading 4</Typography>
          <Typography variant="h5">Heading 5</Typography>
          <Typography variant="h6">Heading 6</Typography>
          <Typography variant="p">Paragraph text</Typography>
          <Typography variant="small">Small text</Typography>
          <Typography variant="caption">Caption text</Typography>
        </div>
      </div>

      {/* Buttons Section */}
      <div id="buttons" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            버튼
          </Typography>
        </div>
        <div className="p-4 space-y-4">
          <div>
            <Typography variant="small" className="text-neutral-500 mb-2 block font-medium text-xs">Variant</Typography>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" size="small">기본</Button>
              <Button variant="secondary" size="small">보조</Button>
              <Button variant="outline" size="small">윤곽선</Button>
              <Button variant="ghost" size="small">고스트</Button>
              <Button variant="danger" size="small">위험</Button>
            </div>
          </div>
          <div>
            <Typography variant="small" className="text-neutral-500 mb-2 block font-medium text-xs">Shape & Style</Typography>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" rounded="full" size="small">둥근</Button>
              <Button icon={FaUser} iconPosition="left" size="small">
                아이콘 포함
              </Button>
            </div>
          </div>
          <div>
            <Typography variant="small" className="text-neutral-500 mb-2 block font-medium text-xs">States</Typography>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="primary"
                size="small"
                onClick={() => showToast({ message: '성공 토스트입니다!', type: 'success' })}
              >
                토스트 트리거
              </Button>
              <Button loading size="small">로딩 중</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Forms - TextField Section */}
      <div id="forms-textfield" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            TextField
          </Typography>
        </div>
        <div className="p-4 space-y-4">
            <TextField
              label="이메일 주소"
              type="email"
              placeholder="이름@예시.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={FaEnvelope}
            />
            <TextField
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={FaLock}
            />
          <TextField
            label="일반 입력"
            placeholder="텍스트를 입력하세요"
          />
        </div>
      </div>

      {/* Forms - TextArea Section */}
      <div id="forms-textarea" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            TextArea
          </Typography>
        </div>
        <div className="p-4">
          <TextArea
            label="메시지"
            placeholder="여기에 메시지를 입력하세요..."
            value={textAreaValue}
            onChange={(e) => setTextAreaValue(e.target.value)}
            rows={3}
          />
        </div>
      </div>

      {/* Forms - Switch Section */}
      <div id="forms-switch" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Switch
          </Typography>
        </div>
        <div className="p-4 space-y-4">
            <Switch
              label="알림 활성화"
              checked={switchChecked}
              onChange={(e) => setSwitchChecked(e.target.checked)}
            />
          <Switch
            label="비활성화된 스위치"
            checked={false}
            disabled
          />
        </div>
      </div>

      {/* Forms - Slider Section */}
      <div id="forms-slider" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Slider
          </Typography>
        </div>
        <div className="p-4">
            <Slider
              min={0}
              max={100}
              step={1}
              value={sliderValue}
              onChange={setSliderValue}
              className="mt-2"
            />
          <Typography variant="small" className="text-neutral-500 mt-2 text-xs">값: {sliderValue}</Typography>
        </div>
      </div>

      {/* Forms - FileUpload Section */}
      <div id="forms-fileupload" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            FileUpload
          </Typography>
        </div>
        <div className="p-4">
            <FileUpload
              label="파일 업로드"
              multiple
              onFileChange={setSelectedFiles}
            />
        </div>
      </div>

      {/* Data Display - Card Section */}
      <div id="data-card" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Card
          </Typography>
        </div>
        <div className="p-4">
          <Card variant="default" padding="md">
            <Typography variant="h6">카드 제목</Typography>
            <Typography variant="p" className="mt-2">카드 내용입니다.</Typography>
          </Card>
        </div>
      </div>

      {/* Data Display - Badge Section */}
      <div id="data-badge" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Badge
          </Typography>
        </div>
        <div className="p-4 space-x-2">
          <Badge variant="default">기본</Badge>
          <Badge variant="secondary">보조</Badge>
          <Badge variant="destructive">위험</Badge>
          <Badge variant="outline">윤곽선</Badge>
          <Badge variant="success">성공</Badge>
          <Badge variant="warning">경고</Badge>
        </div>
      </div>

      {/* Data Display - Avatar Section */}
      <div id="data-avatar" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Avatar
          </Typography>
        </div>
        <div className="p-4 space-x-2 flex items-center">
          <Avatar size="xs" fallback="A" />
          <Avatar size="sm" fallback="B" />
          <Avatar size="md" fallback="C" />
          <Avatar size="lg" fallback="D" />
          <Avatar size="xl" fallback="E" />
        </div>
      </div>

      {/* Data Display - Table Section */}
      <div id="data-table" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Table
          </Typography>
        </div>
        <div className="p-4">
          <Table
            columns={[
              { key: 'name', label: '이름' },
              { key: 'age', label: '나이' },
              { key: 'city', label: '도시' },
            ]}
            data={[
              { name: '홍길동', age: 30, city: '서울' },
              { name: '김철수', age: 25, city: '부산' },
              { name: '이영희', age: 28, city: '대구' },
            ]}
          />
        </div>
      </div>

      {/* Data Display - List Section */}
      <div id="data-list" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            List
          </Typography>
        </div>
        <div className="p-4">
          <List
            items={[
              { 
                id: '1', 
                content: (
                  <div>
                    <Typography variant="p" className="font-medium">리스트 항목 1</Typography>
                    <Typography variant="small" className="text-neutral-500">설명 1</Typography>
                  </div>
                )
              },
              { 
                id: '2', 
                content: (
                  <div>
                    <Typography variant="p" className="font-medium">리스트 항목 2</Typography>
                    <Typography variant="small" className="text-neutral-500">설명 2</Typography>
                  </div>
                )
              },
              { 
                id: '3', 
                content: (
                  <div>
                    <Typography variant="p" className="font-medium">리스트 항목 3</Typography>
                    <Typography variant="small" className="text-neutral-500">설명 3</Typography>
                  </div>
                )
              },
            ]}
          />
        </div>
      </div>

      {/* Navigation - Breadcrumb Section */}
      <div id="navigation-breadcrumb" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
                  Breadcrumb
                </Typography>
              </div>
        <div className="p-4">
                <Breadcrumb
                  items={[
                    { label: '홈', href: '#', onClick: () => showToast({ message: '홈으로 이동', type: 'info' }) },
                    { label: '컴포넌트', href: '#', onClick: () => showToast({ message: '컴포넌트로 이동', type: 'info' }) },
                    { label: '탐색' },
                  ]}
                />
              </div>
            </div>
            
      {/* Navigation - Stepper Section */}
      <div id="navigation-stepper" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
                  Stepper
                </Typography>
              </div>
        <div className="p-4">
                <Stepper steps={[
                  { label: '1단계', description: '세부 정보' },
                  { label: '2단계', description: '설정' },
                  { label: '3단계', description: '검토' },
                ]} currentStep={1} />
              </div>
            </div>
            
      {/* Navigation - Pagination Section */}
      <div id="navigation-pagination" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Pagination
          </Typography>
        </div>
        <div className="p-4">
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      {/* Navigation - Tabs Section */}
      <div id="navigation-tabs" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Tabs
          </Typography>
        </div>
        <div className="p-4">
          <Tabs
            items={[
              { label: '탭 1', value: 'tab1', content: <Typography variant="p">탭 1 내용</Typography> },
              { label: '탭 2', value: 'tab2', content: <Typography variant="p">탭 2 내용</Typography> },
              { label: '탭 3', value: 'tab3', content: <Typography variant="p">탭 3 내용</Typography> },
            ]}
            value={activeTab}
            onValueChange={setActiveTab}
          />
        </div>
      </div>

      {/* Navigation - Menu Section */}
      <div id="navigation-menu" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Menu
          </Typography>
        </div>
        <div className="p-4">
          <Menu
            items={[
              { id: '1', label: '메뉴 항목 1', icon: FaHome },
              { id: '2', label: '메뉴 항목 2', icon: FaUser },
              { id: '3', label: '메뉴 항목 3', icon: FaCog },
            ]}
            activeItem={activeMenuItem}
            onItemClick={(item) => setActiveMenuItem(item.id)}
          />
        </div>
      </div>

      {/* Navigation - Accordion Section */}
      <div id="navigation-accordion" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
                  Accordion
                </Typography>
              </div>
        <div className="p-4">
                <Accordion
                  items={[
                    {
                      title: '첫 번째 항목',
                      content: (
                        <div className="space-y-3">
                          <Typography variant="p" className="text-sm text-neutral-600 dark:text-neutral-400">
                            이것은 첫 번째 아코디언 항목의 내용입니다. 여러 줄의 텍스트와 버튼을 포함할 수 있습니다.
                          </Typography>
                          <Button size="small" variant="outline" onClick={() => showToast({ message: '첫 번째 항목의 액션', type: 'info' })}>
                            액션 버튼
                          </Button>
                        </div>
                      ),
                    },
                    {
                      title: '두 번째 항목',
                      content: (
                        <Typography variant="p" className="text-sm text-neutral-600 dark:text-neutral-400">
                          이것은 두 번째 아코디언 항목의 내용입니다. 간단한 텍스트만 포함되어 있습니다.
                        </Typography>
                      ),
                    },
                    {
                      title: '세 번째 항목 (비활성화)',
                      content: (
                        <Typography variant="p" className="text-sm text-neutral-500 dark:text-neutral-500">
                          이 항목은 비활성화되어 있습니다.
                        </Typography>
                      ),
                      disabled: true,
                    },
                  ]}
                  allowMultiple={false}
                />
              </div>
            </div>

      {/* Feedback - Alert Section */}
      <div id="feedback-alert" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Alert
          </Typography>
        </div>
        <div className="p-4 space-y-4">
            {isInfoAlertVisible && (
              <Alert 
                variant="info" 
                title="정보" 
                description="오늘 밤 시스템 업데이트가 예정되어 있습니다." 
                closable 
                onClose={() => setIsInfoAlertVisible(false)}
              />
            )}
            <Alert variant="success" description="변경사항이 성공적으로 저장되었습니다." showIcon />
          <Alert variant="warning" description="주의가 필요한 작업입니다." showIcon />
          <Alert variant="error" description="오류가 발생했습니다." showIcon />
        </div>
      </div>

      {/* Feedback - Progress Section */}
      <div id="feedback-progress" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Progress
          </Typography>
        </div>
        <div className="p-4 space-y-4">
          <Progress value={75} variant="primary" />
          <Progress value={50} variant="success" />
          <Progress value={25} variant="warning" />
          <Progress value={90} variant="error" showLabel />
        </div>
      </div>

      {/* Feedback - Skeleton Section */}
      <div id="feedback-skeleton" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Skeleton
          </Typography>
        </div>
        <div className="p-4 space-y-4">
            <div className="flex gap-3 items-center">
               <Skeleton variant="circle" className="h-10 w-10" />
               <div className="space-y-1.5 flex-1">
                 <Skeleton width="3/4" height="sm" />
                 <Skeleton width="1/2" height="sm" />
               </div>
            </div>
          <Skeleton variant="rectangle" width="full" height="md" />
          <Skeleton variant="text" width="3/4" />
        </div>
      </div>

      {/* Feedback - Toast Section */}
      <div id="feedback-toast" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Toast
          </Typography>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="small" onClick={() => showToast({ message: '성공 토스트입니다!', type: 'success' })}>
              성공 토스트
            </Button>
            <Button variant="primary" size="small" onClick={() => showToast({ message: '정보 토스트입니다!', type: 'info' })}>
              정보 토스트
            </Button>
            <Button variant="primary" size="small" onClick={() => showToast({ message: '경고 토스트입니다!', type: 'warning' })}>
              경고 토스트
            </Button>
            <Button variant="primary" size="small" onClick={() => showToast({ message: '오류 토스트입니다!', type: 'error' })}>
              오류 토스트
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay - Modal Section */}
      <div id="overlay-modal" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Modal
          </Typography>
        </div>
        <div className="p-4">
          <Button onClick={() => setIsModalOpen(true)} size="small">모달 열기</Button>
              <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} size="md">
                <Modal.Header>
                  <Modal.Title>모달 제목</Modal.Title>
                  <Modal.CloseButton />
                </Modal.Header>
                <Modal.Content>
                  <Typography variant="p" className="text-sm">
                    이것은 모달 컴포넌트입니다. 오버레이를 클릭하거나 ESC 키를 눌러 닫을 수 있습니다.
                  </Typography>
                </Modal.Content>
                <Modal.Footer>
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>취소</Button>
                  <Button variant="primary" onClick={() => {
                    setIsModalOpen(false);
                    showToast({ message: '모달에서 확인을 클릭했습니다.', type: 'success' });
                  }}>
                    확인
                  </Button>
                </Modal.Footer>
              </Modal>
        </div>
      </div>
      
      {/* Overlay - Popover Section */}
      <div id="overlay-popover" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Popover
          </Typography>
        </div>
        <div className="p-4">
          <Popover
            open={isPopoverOpen}
            onOpenChange={setIsPopoverOpen}
            trigger="click"
            placement="right"
            content={
              <div className="p-4">
                <Typography variant="h6" className="mb-2 text-sm font-semibold text-neutral-900 dark:text-white">팝오버 제목</Typography>
                <Typography variant="p" className="mb-4 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">여기에 팝오버 내용이 있습니다. 무엇이든 포함할 수 있습니다.</Typography>
                <Button size="small" fullWidth onClick={() => setIsPopoverOpen(false)}>닫기</Button>
              </div>
            }
          >
            <Button variant="outline" size="small">여기를 클릭하세요 (팝오버)</Button>
          </Popover>
        </div>
      </div>

      {/* Overlay - Tooltip Section */}
      <div id="overlay-tooltip" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Tooltip
          </Typography>
        </div>
        <div className="p-4 space-y-2">
          <Tooltip content="이것은 유용한 툴팁입니다" placement="top">
            <Button variant="secondary">여기에 마우스를 올리세요 (툴팁)</Button>
          </Tooltip>
        </div>
      </div>

      {/* Overlay - Drawer Section */}
      <div id="overlay-drawer" className="bg-white/70 backdrop-blur-2xl border border-neutral-200/60 shadow-soft-lg ring-1 ring-black/5 dark:bg-neutral-900/70 dark:border-neutral-800/60 dark:ring-white/5 hover:shadow-md transition-shadow duration-200 overflow-hidden scroll-mt-24">
        <div className="flex items-center justify-between px-4 pt-3 pb-2.5 border-b border-neutral-200 dark:border-neutral-700">
          <Typography variant="h6" className="font-bold text-neutral-900 dark:text-white text-base">
            Drawer
          </Typography>
        </div>
        <div className="p-4">
          <Button onClick={() => setIsDrawerOpen(true)} size="small">드로어 열기</Button>
          <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="컴포넌트 드로어" position="right">
            <div className="p-4 space-y-3">
              <Typography variant="p" className="text-sm">이것은 드로어 컴포넌트입니다. 화면 가장자리에서 슬라이드됩니다.</Typography>
              <Button onClick={() => setIsDrawerOpen(false)} fullWidth size="small">드로어 닫기</Button>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useIsDesktop();
  const isSidebarOpen = isDesktop ? true : sidebarOpen;

  const handleSidebarNavigate = useCallback((href: string) => {
    const targetId = href.replace('#', '');
    
    // Scroll to section
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        // Get the main content area to scroll within
        const mainContent = document.querySelector('main');
        if (mainContent) {
          // Get header element to calculate its height
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 64;
          const offset = 20; // Additional offset
          
          // Calculate absolute position of element relative to document
          let elementTop = 0;
          let currentElement: HTMLElement | null = element;
          
          // Traverse up the DOM tree to calculate absolute position
          while (currentElement && currentElement !== mainContent) {
            elementTop += currentElement.offsetTop;
            currentElement = currentElement.offsetParent as HTMLElement | null;
          }
          
          // Calculate target scroll position
          // elementTop is relative to mainContent's top
          // We need to subtract header height and add offset
          const targetScroll = elementTop - headerHeight - offset;
          
          mainContent.scrollTo({ 
            top: Math.max(0, targetScroll), 
            behavior: 'smooth' 
          });
        } else {
          // Fallback to window scroll
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 64;
          
          // Use offsetTop for more accurate positioning
          let elementTop = 0;
          let currentElement: HTMLElement | null = element;
          
          while (currentElement) {
            elementTop += currentElement.offsetTop;
            currentElement = currentElement.offsetParent as HTMLElement | null;
          }
          
          window.scrollTo({ 
            top: elementTop - headerHeight - 20, 
            behavior: 'smooth' 
          });
        }
      }
    }, 100);
    
    if (!isDesktop) {
      setSidebarOpen(false);
    }
  }, [isDesktop]);

  const sidebarItems: SidebarNavItem[] = useMemo(
    () => [
      {
        label: '개요',
        icon: FaHome,
        children: [
      { label: '대시보드', href: '#dashboard', icon: FaHome },
        ],
      },
      {
        label: '레이아웃',
        icon: FaThList,
        children: [
          { label: '그리드', href: '#layout-grid', icon: FaThList },
          { label: '스택', href: '#layout-stack', icon: FaAlignLeft },
          { label: '구분선', href: '#layout-divider', icon: FaSquare },
        ],
      },
      {
        label: '타이포그래피',
        icon: FaFont,
        children: [
          { label: '타이포그래피', href: '#typography', icon: FaFont },
        ],
      },
      {
        label: '입력',
        icon: FaMousePointer,
        children: [
      { label: '버튼', href: '#buttons', icon: FaMousePointer },
          { label: '텍스트 필드', href: '#forms-textfield', icon: FaKeyboard },
          { label: '텍스트 영역', href: '#forms-textarea', icon: FaFont },
          { label: '스위치', href: '#forms-switch', icon: FaCog },
          { label: '슬라이더', href: '#forms-slider', icon: FaMousePointer },
          { label: '파일 업로드', href: '#forms-fileupload', icon: FaEnvelope },
        ],
      },
      {
        label: '데이터 표시',
        icon: FaTable,
        children: [
          { label: '카드', href: '#data-card', icon: FaSquare },
          { label: '배지', href: '#data-badge', icon: FaShapes },
          { label: '아바타', href: '#data-avatar', icon: FaUser },
          { label: '테이블', href: '#data-table', icon: FaTable },
          { label: '리스트', href: '#data-list', icon: FaList },
        ],
      },
      {
        label: '네비게이션',
        icon: FaSearch,
        children: [
          { label: '브레드크럼', href: '#navigation-breadcrumb', icon: FaSearch },
          { label: '스테퍼', href: '#navigation-stepper', icon: FaProjectDiagram },
          { label: '페이지네이션', href: '#navigation-pagination', icon: FaEllipsisH },
          { label: '탭', href: '#navigation-tabs', icon: FaThList },
          { label: '메뉴', href: '#navigation-menu', icon: FaLayerGroup },
          { label: '아코디언', href: '#navigation-accordion', icon: FaLayerGroup },
        ],
      },
      {
        label: '피드백',
        icon: FaExclamationCircle,
        children: [
          { label: '알림', href: '#feedback-alert', icon: FaExclamationCircle },
          { label: '진행률', href: '#feedback-progress', icon: FaSpinner },
          { label: '스켈레톤', href: '#feedback-skeleton', icon: FaSquare },
          { label: '토스트', href: '#feedback-toast', icon: FaEnvelope },
        ],
      },
      {
        label: '오버레이',
        icon: FaWindowMaximize,
        children: [
          { label: '모달', href: '#overlay-modal', icon: FaWindowMaximize },
          { label: '팝오버', href: '#overlay-popover', icon: FaSquare },
          { label: '툴팁', href: '#overlay-tooltip', icon: FaMousePointer },
          { label: '드로어', href: '#overlay-drawer', icon: FaThList },
        ],
      },
    ],
    []
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-neutral-50 text-slate-900 dark:bg-neutral-950 dark:text-slate-50">
      {/* Sidebar - Fixed Left */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsible={!isDesktop}
        items={sidebarItems}
        onNavigate={handleSidebarNavigate}
        className="z-50 border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
        header={
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white shadow-sm">
              <FaShapes className="text-sm" />
            </div>
            <div>
              <Typography variant="h6" className="font-bold leading-none tracking-tight text-neutral-900 dark:text-white">
                GaryUI
              </Typography>
            </div>
          </div>
        }
        showThemeToggle={true}
      />

      {/* Main Content - Scrollable */}
      <main className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Top Navigation Bar - Sticky */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-neutral-200 bg-white/80 px-6 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
          <div className="flex items-center gap-4 flex-1">
            {!isDesktop && (
              <>
                <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
                  <FaThList />
                </Button>
                <Typography variant="h6" className="font-semibold text-neutral-900 dark:text-white">
                  GaryUI
                </Typography>
              </>
            )}
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 lg:p-10 lg:max-w-7xl xl:max-w-8xl mx-auto w-full space-y-10">
          <UnifiedPageView />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
