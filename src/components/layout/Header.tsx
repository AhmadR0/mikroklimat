// import React from 'react';
// import { Bell, Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 z-10 sticky top-0">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-slate-100 hidden sm:block tracking-tight">MIKROLIMAT</h1>
      </div>
    </header>
  );
}
