// React
import { useEffect, useState } from 'react';

interface Location {
    address: {
        city_district: string;
        country: string;
        county: string;
        postcode: string;
        state: string;
        state_district: string;
    };
}

export function useDetermineLocationHook(latitude: number | undefined, longitude: number | undefined) {
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        if (!latitude || !longitude) return;

        const fetchCity = async () => {
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                );
                const locationData = await res.json();

                setLocation(locationData);
            } catch (error) {
                console.error('Reverse Geocode Failed:', error);
            }
        };

        void fetchCity();
    }, [latitude, longitude]);

    return {
        location,
    };
}
