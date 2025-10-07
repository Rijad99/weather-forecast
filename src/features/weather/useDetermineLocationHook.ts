// React
import { useEffect, useState } from 'react';

// Utils
import { getCurrentLocation } from '../../shared/utils/user-location.ts';

interface Location {
    address: {
        city_district: string;
        country: string;
        county: string;
        postcode: string;
        state: string;
        state_district: string;
        village: string;
    };
}

export function useDetermineLocationHook() {
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        const fetchCity = async () => {
            const { latitude, longitude } = await getCurrentLocation();

            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
                const locationData = await res.json();

                setLocation(locationData);
            } catch (error) {
                console.error('Reverse geocoding failed:', error);
            }
        };

        void fetchCity();
    }, []);

    return {
        location,
    };
}
