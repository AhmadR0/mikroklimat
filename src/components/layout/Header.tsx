// import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <button className="text-slate-400 hover:text-slate-100 lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-slate-100 hidden sm:block tracking-tight">System Overview</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search sensors..." 
            className="w-64 bg-slate-800 border-slate-700 text-sm text-slate-200 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all placeholder:text-slate-500 border"
          />
        </div>
        <button className="relative p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-slate-900"></span>
        </button>
      </div>
    </header>
  );
}
