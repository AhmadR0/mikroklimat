// import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  unit?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  colorClass: string;
}

export default function StatCard({ title, value, unit, icon: Icon, trend, colorClass }: StatCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-400 font-medium text-sm tracking-wide">{title}</h3>
        <div className={`p-2.5 rounded-xl ${colorClass} bg-opacity-10 text-current`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-slate-50 tracking-tight">{value}</span>
        {unit && <span className="text-slate-400 font-medium">{unit}</span>}
      </div>
      
      {trend && (
        <div className="mt-4 flex items-center text-sm">
          <span className={`font-semibold ${trend.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
          </span>
          <span className="text-slate-500 ml-2">vs last hour</span>
        </div>
      )}
    </div>
  );
}
