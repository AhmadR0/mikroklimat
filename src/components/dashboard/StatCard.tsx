// import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string | null;
  unit?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  colorClass: string;
}

export default function StatCard({ title, value, subtitle, unit, icon: Icon, trend, colorClass }: StatCardProps) {
  return (
    <div className="bg-zinc-950 rounded-2xl p-6 relative flex flex-col h-full shadow-[0_4px_20px_rgb(0,0,0,0.08)]">
      <div className="flex items-center justify-between mb-auto pb-4">
        <h3 className="text-zinc-400 font-medium text-xs tracking-wider uppercase">{title}</h3>
        {/* Memisahkan class warna untuk memastikan penerapan yang benar dan menggunakan sintaks opacity modern */}
        <div className={`p-2 rounded-xl ${colorClass.split(' ')[1]} bg-opacity-10`}>
          <Icon className={`w-5 h-5 ${colorClass.split(' ')[0]}`} />
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-baseline gap-1.5">
          <span className="text-4xl font-semibold text-white tracking-tight">{value}</span>
          {unit && <span className="text-zinc-500 font-medium text-sm">{unit}</span>}
        </div>
        <div className="h-6 mt-1 flex items-center"> {/* Reserve space to prevent layout shift */}
          {subtitle && <span className="text-zinc-500 font-medium">{subtitle}</span>}
        </div>
      </div>
      
      {trend && (
        <div className="mt-5 flex items-center text-xs border-t border-zinc-800/50 pt-4">
          <span className={`font-semibold px-2 py-0.5 rounded-md ${trend.isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
            {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
          </span>
          <span className="text-zinc-500 ml-2 font-medium">vs jam terakhir</span>
        </div>
      )}
    </div>
  );
}
