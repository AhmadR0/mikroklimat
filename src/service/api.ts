const BASE_API = "http://10.51.153.31";

const fetchWithTimeout = async (url: string, options: RequestInit = {}) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    try {
        const response = await fetch(url, { ...options, signal: controller.signal });
        clearTimeout(id);
        return response;
    } catch (error: any) {
        clearTimeout(id);
        if (error.name === 'AbortError') {
            throw new Error('Permintaan waktu habis (Timeout). Alat mungkin terputus.');
        }
        if (error.name === 'TypeError' || error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
            throw new Error('Koneksi jaringan gagal. Pastikan alat menyala.');
        }
        throw new Error(`Terjadi kesalahan sistem (${error.message || 'Tidak diketahui'})`);
    }
};

export const getSensorData = async () => {
    const res = await fetchWithTimeout(`${BASE_API}/api/sensor`);

    if (!res.ok) {
        throw new Error(`Gagal (Status: ${res.status}). Pastikan ESP32 menyala.`);
    }

    return await res.json();
}

export const getLightSensorData = async () => {
    const res = await fetchWithTimeout(`${BASE_API}/api/sensorlux`);

    if (!res.ok) {
        throw new Error(`Gagal (Status: ${res.status}). Pastikan ESP32 menyala.`);
    }

    return await res.json();
}

export const getSoilSensorData = async () => {
    const res = await fetchWithTimeout(`${BASE_API}/api/sensorSoil`);

    if (!res.ok) {
        throw new Error(`Gagal (Status: ${res.status}). Pastikan ESP32 menyala.`);
    }

    return await res.json();
}

export const getRainSensorData = async () => {
    const res = await fetchWithTimeout(`${BASE_API}/api/sensorHujan`);

    if (!res.ok) {
        throw new Error(`Gagal (Status: ${res.status}). Pastikan ESP32 menyala.`);
    }

    return await res.json();
}