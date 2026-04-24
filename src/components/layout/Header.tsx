// import React from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-yellow-400 border-b border-black/10 flex items-center justify-between px-6 z-10 sticky top-0">
      <div className="flex items-center text-center gap-4">
        <button className="text-black/60 hover:text-black transition-colors lg:hidden">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold text-black hidden sm:block tracking-tight">System Overview</h1>
      </div>
      
    </header>
  );
}
