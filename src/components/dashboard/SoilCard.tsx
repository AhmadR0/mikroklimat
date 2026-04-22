import { Droplets } from 'lucide-react'; // Menggunakan ikon Droplets untuk kelembaban tanah

interface SoilCardProps {
  sensor1Moisture: number | null;
  sensor2Moisture: number | null;
  soilCondition: 'Kering' | 'Lembab' | 'Basah' | null;
}

export default function SoilCard({ sensor1Moisture, sensor2Moisture, soilCondition }: SoilCardProps) {
  // Menentukan warna teks berdasarkan kondisi tanah
  let conditionColorClass = 'text-slate-400';
  if (soilCondition === 'Basah') {
    conditionColorClass = 'text-blue-400';
  } else if (soilCondition === 'Lembab') {
    conditionColorClass = 'text-emerald-400';
  } else if (soilCondition === 'Kering') {
    conditionColorClass = 'text-amber-400';
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all hover:border-slate-700 hover:shadow-lg hover:shadow-slate-900/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-400 font-medium text-sm tracking-wide">Kelembaban Tanah</h3>
        <div className="p-2.5 rounded-xl text-blue-400 bg-blue-400 bg-opacity-10"> {/* Styling ikon konsisten dengan StatCard */}
          <Droplets className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6"> {/* Menggunakan grid responsif untuk nilai-nilai */}
        <div className="flex flex-col">
          <span className="text-sm text-slate-400">Sensor 1</span>
          <span className="text-3xl font-bold text-slate-50 tracking-tight">{sensor1Moisture?.toFixed(0) ?? '--'}%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-slate-400">Sensor 2</span>
          <span className="text-3xl font-bold text-slate-50 tracking-tight">{sensor2Moisture?.toFixed(0) ?? '--'}%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-slate-400">Kondisi</span>
          <span className={`text-3xl font-bold tracking-tight ${conditionColorClass}`}>{soilCondition ?? '--'}</span>
        </div>
      </div>
    </div>
  );
}