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
        village: string;
    };
}

export function useDetermineLocationHook() {
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            console.error('Geolocation is not supported by this browser.');
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                if (!position.coords.latitude || !position.coords.longitude) return;

                const fetchCity = async () => {
                    try {
                        const res = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
                        );
                        const locationData = await res.json();

                        setLocation(locationData);
                    } catch (error) {
                        console.error('Reverse geocoding failed:', error);
                    }
                };

                void fetchCity();
            },
            (error) => {
                console.error(error.message);
            }
        );
    }, []);

    return {
        location,
    };
}
