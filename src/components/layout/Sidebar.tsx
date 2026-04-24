// import React from 'react';
import { Home, Activity, Settings, AlertTriangle, Users } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-yellow-400 border-r border-black/10 flex flex-col h-full font-sans transition-all duration-300">
      <div className="h-16 flex items-center px-6 border-b border-black/10">
        <Activity className="w-5 h-5 text-black mr-3" />
        <span className="text-lg font-bold text-black tracking-tight">MikroKlimat</span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="pl-4 pr-3 space-y-1">
          <a href="#" className="flex items-center px-3 py-2.5 bg-black text-yellow-400 rounded-lg group transition-colors">
            <Home className="w-4 h-4 mr-3" />
            <span className="font-semibold text-sm">Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 text-black/70 rounded-lg hover:bg-black/5 hover:text-black transition-colors">
            <Activity className="w-5 h-5 mr-3" />
            <span className="font-medium">Sensors</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 text-black/70 rounded-lg hover:bg-black/5 hover:text-black transition-colors">
            <AlertTriangle className="w-5 h-5 mr-3" />
            <span className="font-medium">Alerts</span>
            <span className="ml-auto bg-rose-500/10 text-rose-400 py-0.5 px-2 rounded-full text-xs font-semibold">3</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 text-black/70 rounded-lg hover:bg-black/5 hover:text-black transition-colors">
            <Users className="w-5 h-5 mr-3" />
            <span className="font-medium">Users</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 text-black/70 rounded-lg hover:bg-black/5 hover:text-black transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            <span className="font-medium">Settings</span>
          </a>
        </nav>
      </div>
      <div className="p-4 border-t border-black/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
            <span className="text-xs font-bold text-yellow-400">AD</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-black">Admin User</span>
            <span className="text-xs font-medium text-black/60">admin@mikroklimat.id</span>
          </div>
        </div>
      </div>
    </div>
  );
}
