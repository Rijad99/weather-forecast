// React
import { useEffect, useState } from 'react';

export function useDetermineLocationHook(latitude: number, longitude: number) {
    const [city, setCity] = useState<string | null>(null);

    useEffect(() => {
        if (latitude === 0 || longitude === 0) return;

        const fetchCity = async () => {
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                );

                const json = await res.json();
                const addr = json.address;
                const cityName = addr.city;

                setCity(cityName);
            } catch (error) {
                console.error('Reverse Geocode Failed:', error);

                setCity('Unknown Location');
            }
        };

        void fetchCity();
    }, [latitude, longitude]);

    return {
        city,
    };
}
