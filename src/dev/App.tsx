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
            Dashboard
          </Typography>
          <Typography variant="p" className="text-neutral-500 dark:text-neutral-400">
            Overview of your project performance and activities.
          </Typography>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Download Report</Button>
          <Button variant="primary">New Project</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <Grid cols={1} gap="lg" className="md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Total Revenue', value: '$45,231.89', trend: '+20.1%', trendUp: true, icon: FaChartLine },
          { title: 'Active Users', value: '2,350', trend: '+180.1%', trendUp: true, icon: FaUsers },
          { title: 'Bounce Rate', value: '12.23%', trend: '-4.5%', trendUp: false, icon: FaMousePointer },
          { title: 'Avg. Session', value: '2m 45s', trend: '+8.2%', trendUp: true, icon: FaClock },
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
                {stat.trend} <span className="text-neutral-400 font-normal">from last month</span>
              </span>
            </div>
          </Card>
        ))}
      </Grid>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card variant="default" padding="none" className="lg:col-span-2" title="Recent Activity" headerAction={<Button variant="ghost" size="small">View All</Button>}>
          <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
                <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                  <FaUser size={12} />
                </div>
                <div className="flex-1">
                  <Typography variant="small" className="font-medium text-neutral-900 dark:text-white">
                    New user registered
                  </Typography>
                  <Typography variant="caption" className="text-neutral-500">
                    2 minutes ago
                  </Typography>
                </div>
                <Button variant="ghost" size="icon" className="text-neutral-400">
                  <FaEllipsisH />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card variant="default" padding="lg" title="Quick Actions">
          <Stack direction="column" gap="md">
            <Button variant="outline" fullWidth className="justify-start" icon={FaEnvelope}>
              Send Email Campaign
            </Button>
            <Button variant="outline" fullWidth className="justify-start" icon={FaUsers}>
              Manage Users
            </Button>
            <Button variant="outline" fullWidth className="justify-start" icon={FaCog}>
              System Settings
            </Button>
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <Typography variant="caption" className="mb-2 block text-neutral-500">Storage Usage</Typography>
              <Progress value={75} variant="primary" size="sm" />
              <div className="flex justify-between mt-1">
                <span className="text-xs text-neutral-500">75GB Used</span>
                <span className="text-xs text-neutral-500">100GB Total</span>
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
            Component Library
          </Typography>
          <Typography variant="p" color="muted">
            Explore our comprehensive suite of UI components.
          </Typography>
        </div>
      </div>

      <Card id="layout" title="Layout Components" variant="glass" padding="lg">
        <Stack direction="column" gap="lg" fullWidth>
          <Typography variant="h4">Grid System</Typography>
          <Grid cols={3} gap="md">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex h-24 items-center justify-center rounded-xl bg-primary-50/50 border border-primary-100 text-primary-700 shadow-sm dark:bg-primary-900/20 dark:border-primary-800 dark:text-primary-100"
              >
                <Typography variant="small">{`Col ${item}`}</Typography>
              </div>
            ))}
          </Grid>
          <Divider label="Stack & Spacer" />
          <Stack direction="row" gap="md" align="center" justify="center">
            <Button variant="secondary">Stack Item 1</Button>
            <Button variant="outline">Stack Item 2</Button>
            <Spacer flex />
            <Button variant="primary">Right Aligned</Button>
          </Stack>
        </Stack>
      </Card>

      <Card id="buttons" title="Buttons" variant="glass" padding="lg">
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="primary" rounded="full">Rounded</Button>
          <Button icon={FaUser} iconPosition="left">
            With Icon
          </Button>
          <Button
            variant="primary"
            onClick={() => showToast({ message: 'This is a success toast!', type: 'success' })}
          >
            Trigger Toast
          </Button>
          <Button isLoading>Loading</Button>
        </div>
      </Card>

      <Card id="forms" title="Form Elements" variant="glass" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Stack direction="column" gap="md" fullWidth>
            <TextField
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={FaEnvelope}
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={FaLock}
            />
            <Switch
              label="Enable Notifications"
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
              label="Message"
              placeholder="Type your message here..."
              value={textAreaValue}
              onChange={(e) => setTextAreaValue(e.target.value)}
              rows={3}
            />
            <FileUpload
              label="Upload Files"
              multiple
              onFileChange={setSelectedFiles}
            />
          </Stack>
        </div>
      </Card>

      <Card id="feedback" title="Feedback & Overlay" variant="glass" padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Stack direction="column" gap="md">
            <Alert variant="info" title="Information" description="System update scheduled for tonight." closable />
            <Alert variant="success" description="Changes saved successfully." showIcon />
            <div className="flex gap-4 items-center">
               <Skeleton variant="circle" className="h-12 w-12" />
               <div className="space-y-2 flex-1">
                 <Skeleton width="3/4" height="sm" />
                 <Skeleton width="1/2" height="sm" />
               </div>
            </div>
          </Stack>
          <Stack direction="column" gap="md" align="start">
             <Tooltip content="This is a helpful tooltip" placement="top">
                <Button variant="secondary">Hover me (Tooltip)</Button>
              </Tooltip>
              <Popover
                open={isPopoverOpen}
                onOpenChange={setIsPopoverOpen}
                content={
                  <div className="p-4 text-sm w-64">
                    <Typography variant="h6" className="mb-2">Popover Title</Typography>
                    <Typography variant="p" className="mb-4 text-slate-500">Here is some content for the popover. It can contain anything.</Typography>
                    <Button size="small" fullWidth onClick={() => setIsPopoverOpen(false)}>Close</Button>
                  </div>
                }
                placement="right"
                trigger="click"
              >
                <Button variant="outline">Click me (Popover)</Button>
              </Popover>
              <Button onClick={() => setIsDrawerOpen(true)}>Open Drawer</Button>
              <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Component Drawer" position="right">
                <div className="p-6 space-y-4">
                  <Typography variant="p">This is a drawer component. It slides in from the edge of the screen.</Typography>
                  <Button onClick={() => setIsDrawerOpen(false)} fullWidth>Close Drawer</Button>
                </div>
              </Drawer>
          </Stack>
        </div>
      </Card>
      
      <Card id="navigation" title="Navigation" variant="glass" padding="lg">
         <Stack direction="column" gap="lg">
            <Breadcrumb
                items={[
                  { label: 'Home', href: '#' },
                  { label: 'Components', href: '#' },
                  { label: 'Navigation' },
                ]}
              />
            <Stepper steps={[
                { label: 'Step 1', description: 'Details' },
                { label: 'Step 2', description: 'Settings' },
                { label: 'Step 3', description: 'Review' },
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
      { label: 'Dashboard', href: '#dashboard', icon: FaHome },
      { label: 'Components', href: '#components', icon: FaLayerGroup },
      { label: 'Layout', href: '#layout', icon: FaThList },
      { label: 'Buttons', href: '#buttons', icon: FaMousePointer },
      { label: 'Forms', href: '#forms', icon: FaFont },
      { label: 'Feedback', href: '#feedback', icon: FaEnvelope }, // Using FaEnvelope for Feedback
      { label: 'Navigation', href: '#navigation', icon: FaSearch }, // Placeholder
      { label: 'Settings', href: '#settings', icon: FaCog },
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
                Vooster
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
            <div className="relative hidden md:block max-w-md w-full">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="h-9 w-full rounded-md border border-neutral-200 bg-neutral-50 pl-9 pr-4 text-sm text-neutral-900 placeholder-neutral-500 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
             <Button variant="ghost" size="icon" className="text-neutral-500">
               <FaEnvelope />
             </Button>
             <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium text-sm">
               GJ
             </div>
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
                label: 'Dashboard', 
                value: 'dashboard', 
                icon: <FaHome className="mr-1" />,
                content: <DashboardView />
              },
              { 
                label: 'Components', 
                value: 'components', 
                icon: <FaLayerGroup className="mr-1" />,
                content: <ComponentsView />
              },
              { 
                label: 'Settings', 
                value: 'settings', 
                icon: <FaCog className="mr-1" />,
                content: (
                  <Card variant="glass" padding="lg" title="Settings">
                    <Typography variant="p">Settings panel placeholder.</Typography>
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
