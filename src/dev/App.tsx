import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/buttons';
import { TextField, Switch, Slider, TextArea, FileUpload } from '@/components/forms';
import { Card } from '@/components/data-display';
import { Typography } from '@/components/typography';
import { Alert, Progress, Skeleton } from '@/components/feedback';
import { Tooltip, Popover } from '@/components/overlay';
import { Grid, Stack, Divider, Spacer } from '@/components/layout';
import { Breadcrumb, Stepper, Drawer, Tabs } from '@/components/navigation';
import { ToastProvider, useToast } from '@/components/notifications';
import { Sidebar, type SidebarNavItem } from '@/components/templates';
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

// --- Sub-components for Views ---

const DashboardView = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <Typography variant="h2" className="font-bold tracking-tight text-neutral-900 dark:text-white">
            대시보드
          </Typography>
          <Typography variant="p" className="text-neutral-500 dark:text-neutral-400">
            프로젝트 성과 및 활동 개요.
          </Typography>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">보고서 다운로드</Button>
          <Button variant="primary">새 프로젝트</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <Grid cols={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: '총 수익', value: '$45,231.89', trend: '+20.1%', trendUp: true, icon: FaChartLine },
          { title: '활성 사용자', value: '2,350', trend: '+180.1%', trendUp: true, icon: FaUsers },
          { title: '이탈률', value: '12.23%', trend: '-4.5%', trendUp: false, icon: FaMousePointer },
          { title: '평균 세션', value: '2m 45s', trend: '+8.2%', trendUp: true, icon: FaClock },
        ].map((stat, idx) => (
          <Card key={idx} variant="default" padding="lg" className="hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-4">
              <Typography variant="small" className="text-neutral-500 font-medium">
                {stat.title}
              </Typography>
              <stat.icon className="text-neutral-400" size={16} />
            </div>
            <div className="space-y-1">
              <Typography variant="h3" className="font-bold text-neutral-900 dark:text-white">
                {stat.value}
              </Typography>
              <span className={`text-xs font-medium ${stat.trendUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stat.trend} <span className="text-neutral-400 font-normal">지난달 대비</span>
              </span>
            </div>
          </Card>
        ))}
      </Grid>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card variant="default" padding="lg" className="lg:col-span-2 hover:shadow-md transition-shadow duration-200" title="최근 활동" headerAction={<Button variant="ghost" size="small">모두 보기</Button>}>
          <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                  <FaUser size={12} />
                </div>
                <div className="flex-1">
                  <Typography variant="small" className="font-medium text-neutral-900 dark:text-white">
                    새로운 사용자 등록
                  </Typography>
                  <Typography variant="caption" className="text-neutral-500">
                    2분 전
                  </Typography>
                </div>
                <Button variant="ghost" size="icon" className="text-neutral-400">
                  <FaEllipsisH />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="default" padding="lg" title="빠른 작업">
          <Stack direction="column" gap="md" fullWidth>
            <Button variant="outline" fullWidth className="justify-start" icon={FaEnvelope}>
              이메일 캠페인 전송
            </Button>
            <Button variant="outline" fullWidth className="justify-start" icon={FaUsers}>
              사용자 관리
            </Button>
            <Button variant="outline" fullWidth className="justify-start" icon={FaCog}>
              시스템 설정
            </Button>
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <Typography variant="caption" className="mb-2 block text-neutral-500">저장 공간 사용량</Typography>
              <Progress value={75} variant="primary" size="sm" />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-neutral-500">75GB 사용됨</span>
                <span className="text-xs text-neutral-500">100GB 총계</span>
              </div>
            </div>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

const ComponentsView = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [_selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="space-y-8 animate-fade-in">
       <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between" id="overview">
        <div className="space-y-3">
          <Typography variant="h2" className="font-bold">
            컴포넌트 라이브러리
          </Typography>
          <Typography variant="p" color="muted">
            UI 컴포넌트의 포괄적인 제품군을 살펴보세요.
          </Typography>
        </div>
      </div>

      <Card id="layout" title="레이아웃 컴포넌트" variant="glass" padding="lg">
        <Stack direction="column" gap="md" fullWidth>
          <Typography variant="h4" className="mt-1">그리드 시스템</Typography>
          <Grid cols={3} gap="md">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex h-24 items-center justify-center rounded-xl bg-primary-50/50 border border-primary-100 text-primary-700 shadow-sm dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-100"
              >
                <Typography variant="small">{`열 ${item}`}</Typography>
              </div>
            ))}
          </Grid>
          <Divider label="스택 및 스페이서" />
          <Stack direction="row" gap="md" align="center" justify="center">
            <Button variant="secondary">스택 항목 1</Button>
            <Button variant="outline">스택 항목 2</Button>
            <Spacer flex />
            <Button variant="primary">오른쪽 정렬</Button>
          </Stack>
        </Stack>
      </Card>

      <Card id="buttons" title="버튼" variant="glass" padding="lg">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">기본</Button>
          <Button variant="secondary">보조</Button>
          <Button variant="outline">윤곽선</Button>
          <Button variant="ghost">고스트</Button>
          <Button variant="danger">위험</Button>
          <Button variant="primary" rounded="full">둥근</Button>
          <Button icon={FaUser} iconPosition="left">
            아이콘 포함
          </Button>
          <Button
            variant="primary"
            onClick={() => showToast({ message: '성공 토스트입니다!', type: 'success' })}
          >
            토스트 트리거
          </Button>
          <Button isLoading>로딩 중</Button>
        </div>
      </Card>

      <Card id="forms" title="폼 요소" variant="glass" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Stack direction="column" gap="md" fullWidth>
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
          <Stack direction="column" gap="md" fullWidth>
            <Slider
              min={0}
              max={100}
              step={1}
              value={sliderValue}
              onChange={setSliderValue}
              className="mt-4"
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
        </div>
      </Card>

      <Card id="feedback" title="피드백 및 오버레이" variant="glass" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Stack direction="column" gap="md">
            <Alert variant="info" title="정보" description="오늘 밤 시스템 업데이트가 예정되어 있습니다." closable />
            <Alert variant="success" description="변경사항이 성공적으로 저장되었습니다." showIcon />
            <div className="flex gap-4 items-center">
               <Skeleton variant="circle" className="h-12 w-12" />
               <div className="space-y-2 flex-1">
                 <Skeleton width="3/4" height="sm" />
                 <Skeleton width="1/2" height="sm" />
               </div>
            </div>
          </Stack>
          <Stack direction="column" gap="md" align="start">
             <Tooltip content="이것은 유용한 툴팁입니다" placement="top">
                <Button variant="secondary">여기에 마우스를 올리세요 (툴팁)</Button>
              </Tooltip>
              <Popover
                open={isPopoverOpen}
                onOpenChange={setIsPopoverOpen}
                content={
                  <div className="p-4 text-sm w-64">
                    <Typography variant="h6" className="mb-2">팝오버 제목</Typography>
                    <Typography variant="p" className="mb-4 text-slate-500">여기에 팝오버 내용이 있습니다. 무엇이든 포함할 수 있습니다.</Typography>
                    <Button size="small" fullWidth onClick={() => setIsPopoverOpen(false)}>닫기</Button>
                  </div>
                }
                placement="right"
                trigger="click"
              >
                <Button variant="outline">여기를 클릭하세요 (팝오버)</Button>
              </Popover>
              <Button onClick={() => setIsDrawerOpen(true)}>드로어 열기</Button>
              <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="컴포넌트 드로어" position="right">
                <div className="p-6 space-y-4">
                  <Typography variant="p">이것은 드로어 컴포넌트입니다. 화면 가장자리에서 슬라이드됩니다.</Typography>
                  <Button onClick={() => setIsDrawerOpen(false)} fullWidth>드로어 닫기</Button>
                </div>
              </Drawer>
          </Stack>
        </div>
      </Card>
      
      <Card id="navigation" title="탐색" variant="glass" padding="lg">
         <Stack direction="column" gap="lg">
            <Breadcrumb
                items={[
                  { label: '홈', href: '#' },
                  { label: '컴포넌트', href: '#' },
                  { label: '탐색' },
                ]}
              />
            <Stepper steps={[
                { label: '1단계', description: '세부 정보' },
                { label: '2단계', description: '설정' },
                { label: '3단계', description: '검토' },
              ]} currentStep={1} />
         </Stack>
      </Card>
    </div>
  );
};

// --- Main App Component ---

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useIsDesktop();
  const isSidebarOpen = isDesktop ? true : sidebarOpen;

  const [activeTab, setActiveTab] = useState('dashboard');

  const handleSidebarNavigate = (href: string) => {
    const targetId = href.replace('#', '');
    
    // Map sidebar items to tabs
    if (['dashboard', 'components', 'settings'].includes(targetId)) {
      setActiveTab(targetId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Assume it's a section within components
      setActiveTab('components');
      // Wait for tab switch then scroll
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    
    if (!isDesktop) {
      setSidebarOpen(false);
    }
  };

  const sidebarItems: SidebarNavItem[] = useMemo(
    () => [
      { label: '대시보드', href: '#dashboard', icon: FaHome },
      { label: '컴포넌트', href: '#components', icon: FaLayerGroup },
      { label: '레이아웃', href: '#layout', icon: FaThList },
      { label: '버튼', href: '#buttons', icon: FaMousePointer },
      { label: '폼', href: '#forms', icon: FaFont },
      { label: '피드백', href: '#feedback', icon: FaEnvelope },
      { label: '탐색', href: '#navigation', icon: FaSearch },
      { label: '설정', href: '#settings', icon: FaCog },
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
          <div className="flex items-center gap-3 px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white shadow-sm">
              <FaShapes className="text-sm" />
            </div>
            <div>
              <Typography variant="h6" className="font-bold leading-none tracking-tight text-neutral-900 dark:text-white">
                부스터
              </Typography>
            </div>
          </div>
        }
      />

      {/* Main Content - Scrollable */}
      <main className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* Top Navigation Bar - Sticky */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-neutral-200 bg-white/80 px-6 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
          <div className="flex items-center gap-4 flex-1">
            {!isDesktop && (
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
                <FaThList />
              </Button>
            )}
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full space-y-8">
          <Tabs
            variant="default"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
            items={[
              { 
                label: '대시보드', 
                value: 'dashboard', 
                icon: <FaHome className="mr-1" />,
                content: <DashboardView />
              },
              { 
                label: '컴포넌트', 
                value: 'components', 
                icon: <FaLayerGroup className="mr-1" />,
                content: <ComponentsView />
              },
              { 
                label: '설정', 
                value: 'settings', 
                icon: <FaCog className="mr-1" />,
                content: (
                  <Card variant="glass" padding="lg" title="설정">
                    <Typography variant="p">설정 패널 플레이스홀더.</Typography>
                  </Card>
                )
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;
