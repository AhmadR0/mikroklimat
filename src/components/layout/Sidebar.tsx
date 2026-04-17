// import React from 'react';
import { Home, Activity, Settings, AlertTriangle, Users } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col h-full font-sans transition-all duration-300">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <Activity className="w-6 h-6 text-teal-400 mr-3" />
        <span className="text-lg font-semibold text-slate-100 tracking-tight">MikroKlimat</span>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="pl-4 pr-3 space-y-1">
          <a href="#" className="flex items-center px-3 py-2.5 bg-slate-800/50 text-teal-400 rounded-lg group transition-colors">
            <Home className="w-5 h-5 mr-3" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 text-slate-400 rounded-lg hover:bg-slate-800/40 hover:text-slate-100 transition-colors">
            <Activity className="w-5 h-5 mr-3" />
            <span className="font-medium">Sensors</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 text-slate-400 rounded-lg hover:bg-slate-800/40 hover:text-slate-100 transition-colors">
            <AlertTriangle className="w-5 h-5 mr-3" />
            <span className="font-medium">Alerts</span>
            <span className="ml-auto bg-rose-500/10 text-rose-400 py-0.5 px-2 rounded-full text-xs font-semibold">3</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 text-slate-400 rounded-lg hover:bg-slate-800/40 hover:text-slate-100 transition-colors">
            <Users className="w-5 h-5 mr-3" />
            <span className="font-medium">Users</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2.5 text-slate-400 rounded-lg hover:bg-slate-800/40 hover:text-slate-100 transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            <span className="font-medium">Settings</span>
          </a>
        </nav>
      </div>
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
            <span className="text-sm font-semibold text-teal-400">AD</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-slate-200">Admin User</span>
            <span className="text-xs text-slate-500">admin@mikroklimat.id</span>
          </div>
        </div>
      </div>
    </div>
  );
}
