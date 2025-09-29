import { useEffect, useState } from 'react';

interface Coordinates {
    latitude?: number | undefined;
    longitude?: number | undefined;
    error: string | null;
}

export function useGetUserCoordinates() {
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setCoordinates(() => ({
                latitude: undefined,
                longitude: undefined,
                error: 'Geolocation is not supported by your browser',
            }));
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCoordinates({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        error: null,
                    });
                },
                (error) => {
                    setCoordinates(() => ({ latitude: undefined, longitude: undefined, error: error.message }));
                }
            );
        }
    }, []);

    return {
        coordinates,
    };
}
