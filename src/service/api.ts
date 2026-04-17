
const BASE_API = "http://10.51.153.31";


export const getSensorData = async () => {
    const res = await fetch(`${BASE_API}/api/sensor`);

    if (!res.ok) {
        throw new Error(`Gagal mengambil data sensor. Status: ${res.status}. Pastikan ESP32 menyala dan terhubung ke jaringan yang sama.`);
    }

    return await res.json();
}