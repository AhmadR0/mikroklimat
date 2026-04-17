// import React from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 z-10 sticky top-0">
      <div className="flex items-center text-center gap-4">
        <button className="text-slate-400 hover:text-slate-100 lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl  font-semibold text-slate-100 hidden sm:block tracking-tight">System Overview</h1>
      </div>
      
    </header>
  );
}
