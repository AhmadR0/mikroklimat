import { Droplets } from 'lucide-react'; // Menggunakan ikon Droplets untuk kelembaban tanah

interface SoilCardProps {
  sensor1Moisture: number | null;
  sensor2Moisture: number | null;
  soilCondition: 'Kering' | 'Lembab' | 'Basah' | null;
}

export default function SoilCard({ sensor1Moisture, sensor2Moisture, soilCondition }: SoilCardProps) {
  // Menentukan warna teks berdasarkan kondisi tanah
  let conditionColorClass = 'text-zinc-400';
  if (soilCondition === 'Basah') {
    conditionColorClass = 'text-yellow-300';
  } else if (soilCondition === 'Lembab') {
    conditionColorClass = 'text-yellow-400';
  } else if (soilCondition === 'Kering') {
    conditionColorClass = 'text-amber-500';
  }

  return (
    <div className="bg-zinc-950 rounded-2xl p-6 relative flex flex-col h-full shadow-[0_4px_20px_rgb(0,0,0,0.08)]">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-zinc-400 font-medium text-xs tracking-wider uppercase">Kelembaban Tanah</h3>
        <div className="p-2 rounded-xl text-amber-400 bg-amber-400/10"> {/* Menggunakan sintaks opacity modern */}
          <Droplets className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6"> {/* Menggunakan grid responsif untuk nilai-nilai */}
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Sensor 1</span>
          <span className="text-3xl font-semibold text-white">{sensor1Moisture?.toFixed(0) ?? '--'}%</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Sensor 2</span>
          <span className="text-3xl font-semibold text-white">{sensor2Moisture?.toFixed(0) ?? '--'}%</span>
        </div>
        <div className="flex flex-col border-t border-zinc-800/50 sm:border-t-0 sm:border-l sm:pl-6 pt-4 sm:pt-0">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Kondisi</span>
          <span className={`text-3xl font-bold tracking-tight ${conditionColorClass}`}>{soilCondition ?? '--'}</span>
        </div>
      </div>
    </div>
  );
}