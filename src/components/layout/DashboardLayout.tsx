import  { ReactNode } from 'react';
// import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden text-slate-50 selection:bg-teal-500/30">
      {/* <div className="hidden lg:block">
        <Sidebar />
      </div> */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
