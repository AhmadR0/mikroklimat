// import React from 'react';
import { Thermometer, Droplets, Wind, Sun } from 'lucide-react';
import StatCard from './StatCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockChartData = [
  { time: '00:00', temp: 24, humidity: 65 },
  { time: '04:00', temp: 23, humidity: 68 },
  { time: '08:00', temp: 26, humidity: 60 },
  { time: '12:00', temp: 31, humidity: 50 },
  { time: '16:00', temp: 29, humidity: 55 },
  { time: '20:00', temp: 25, humidity: 62 },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Environment Overview</h2>
          <p className="text-slate-400 mt-1">Real-time mikroklimat monitoring data</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </span>
          <span className="text-sm font-medium text-teal-400">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Temperature" 
          value="26.4" 
          unit="°C" 
          icon={Thermometer} 
          trend={{ value: 1.2, isPositive: true }}
          colorClass="text-rose-400 bg-rose-400"
        />
        <StatCard 
          title="Humidity" 
          value="62" 
          unit="%" 
          icon={Droplets} 
          trend={{ value: 0.5, isPositive: false }}
          colorClass="text-blue-400 bg-blue-400"
        />
        <StatCard 
          title="Wind Speed" 
          value="12.5" 
          unit="km/h" 
          icon={Wind} 
          trend={{ value: 2.1, isPositive: true }}
          colorClass="text-teal-400 bg-teal-400"
        />
        <StatCard 
          title="Light Level" 
          value="850" 
          unit="lux" 
          icon={Sun} 
          colorClass="text-amber-400 bg-amber-400"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-slate-100 mb-6">Temperature & Humidity Trends</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fb7185" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#fb7185" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorHum" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '0.75rem' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
                <Area type="monotone" dataKey="temp" stroke="#fb7185" strokeWidth={3} fillOpacity={1} fill="url(#colorTemp)" />
                <Area type="monotone" dataKey="humidity" stroke="#60a5fa" strokeWidth={3} fillOpacity={1} fill="url(#colorHum)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-slate-100 mb-6">System Status</h3>
          <div className="space-y-4">
            {['Sensor Node 1 (Greenhouse)', 'Sensor Node 2 (Outdoor)', 'Data Logger', 'Network Gateway'].map((device, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-amber-400' : 'bg-emerald-400'}`}></div>
                  <span className="text-sm font-medium text-slate-200">{device}</span>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${i === 2 ? 'bg-amber-400/10 text-amber-400' : 'bg-emerald-400/10 text-emerald-400'}`}>
                  {i === 2 ? 'Syncing' : 'Online'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
