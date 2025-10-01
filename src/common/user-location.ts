export interface UserLocation {
    latitude: number;
    longitude: number;
}

export async function getCurrentLocation(): Promise<UserLocation> {

    if (!navigator.geolocation) {
        throw new Error("Geolocation is not supported by this browser.");
    }

    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => reject(error)
        );
    });
}
