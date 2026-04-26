import { useState, useEffect } from 'react';
import { Thermometer, Droplets, CloudRainWind, Sun, AlertTriangle } from 'lucide-react';
import StatCard from './StatCard';
import SoilCard from './SoilCard';
import { getSensorData, getSoilSensorData, getLightSensorData, getRainSensorData } from '../../service/api';

// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type SensorData = { temperature: number | null; humidity: number | null };
type SoilData = {
  soilSensor1: number | null;
  soilSensor2: number | null;
  kondisiTanah: 'Kering' | 'Lembab' | 'Basah' | null;
};
type LightData = { luxValue: number | null };
type RainData = {
  intensitasCuraHujan: number | null;
  kondisiHujan: string | null;
};

export default function DashboardOverview() {
  const [sensorData, setSensorData] = useState<SensorData>({ temperature: null, humidity: null });
  const [soilData, setSoilData] = useState<SoilData>({ soilSensor1: null, soilSensor2: null, kondisiTanah: null });
  const [lightData, setLightData] = useState<LightData>({ luxValue: null });
  const [rainData, setRainData] = useState<RainData>({ intensitasCuraHujan: null, kondisiHujan: null });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const [envData, newSoilData, newLightData, newRainData] = await Promise.all([
          getSensorData(),
          getSoilSensorData(),
          getLightSensorData(),
          getRainSensorData(),
        ]);

        setSensorData(envData);
        setSoilData(newSoilData);
        setLightData(newLightData);
        setRainData(newRainData);
        setError(null); 
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Terjadi kesalahan sistem.");
        }
      }
    };

    fetchData(); 
    const intervalId = setInterval(fetchData, 3000); 
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-black/90 tracking-tight drop-shadow-sm">Gambaran Lingkungan</h2>
          <p className="text-black/60 font-semibold mt-1">Data pemantauan mikroklimat waktu-nyata</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-black"></span>
          </span>
          <span className="text-xs font-bold text-black uppercase tracking-widest">Langsung</span>
        </div>
      </div>

      {error && (
        <div className="bg-black border-l-4 border-red-500 text-white p-4 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.08)]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <p className="font-bold text-red-500">Koneksi Terputus!</p>
              <p className="text-xs mt-0.5 text-zinc-400">Gagal mengambil data dari perangkat: {error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 mb-6"> 
        <SoilCard 
          sensor1Moisture={soilData.soilSensor1} 
          sensor2Moisture={soilData.soilSensor2} 
          soilCondition={soilData.kondisiTanah} 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <StatCard 
          title="Suhu Udara" 
          value={sensorData.temperature?.toFixed(2) ?? '--'} 
          unit="°C" 
          icon={Thermometer} 
          colorClass="text-black bg-yellow-400"
        />
        <StatCard 
          title="Kelembaban" 
          value={sensorData.humidity?.toFixed(2) ?? '--'} 
          unit="%" 
          icon={Droplets} 
          colorClass="text-black bg-yellow-400"
        />
        <StatCard 
          title="Curah Hujan" 
          value={rainData.intensitasCuraHujan?.toFixed(2) ?? '--'} 
          subtitle={rainData.kondisiHujan}
          unit="mm/h" 
          icon={CloudRainWind} 
          colorClass="text-black bg-yellow-400"
        />
        <StatCard 
          title="Intensitas Cahaya" 
          value={lightData.luxValue?.toFixed(0) ?? '--'} 
          unit="lux" 
          icon={Sun} 
          colorClass="text-black bg-yellow-400"
        />
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-slate-100 mb-6">Temperature & Humidity Trends</h3>
          <h3 className="text-lg font-semibold text-slate-100 mb-6">Tren Temperatur & Kelembaban</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fb7185" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#fb7185" stopOpacity={0} />
                    <stop offset="5%" stopColor="#fb923c" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#fb923c" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorHum" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                    <stop offset="5%" stopColor="#facc15" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
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
                <Area type="monotone" dataKey="temp" stroke="#fb923c" strokeWidth={3} fillOpacity={1} fill="url(#colorTemp)" />
                <Area type="monotone" dataKey="humidity" stroke="#facc15" strokeWidth={3} fillOpacity={1} fill="url(#colorHum)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-slate-100 mb-6">System Status</h3>
          <h3 className="text-lg font-semibold text-slate-100 mb-6">Status Sistem</h3>
          <div className="space-y-4">
            {['Sensor Node 1 (Greenhouse)', 'Sensor Node 2 (Outdoor)', 'Data Logger', 'Network Gateway'].map((device, i) => (
            {['Node Sensor 1 (Rumah Kaca)', 'Node Sensor 2 (Luar Ruangan)', 'Pencatat Data', 'Gerbang Jaringan'].map((device, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-amber-400' : 'bg-emerald-400'}`}></div>
                  <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-amber-400' : 'bg-yellow-500'}`}></div>
                  <span className="text-sm font-medium text-slate-200">{device}</span>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${i === 2 ? 'bg-amber-400/10 text-amber-400' : 'bg-emerald-400/10 text-emerald-400'}`}>
                  {i === 2 ? 'Syncing' : 'Online'}
                <span className={`text-xs font-semibold px-2 py-1 rounded-md ${i === 2 ? 'bg-amber-400/10 text-amber-400' : 'bg-yellow-500/10 text-yellow-500'}`}>
                  {i === 2 ? 'Sinkronisasi' : 'Daring'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      </div>
    // </div>
  );
}
