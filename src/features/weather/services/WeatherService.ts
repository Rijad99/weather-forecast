// Utils
import { getCurrentLocation } from '../../../common/user-location.ts';

const weatherForecastApiUrl = import.meta.env.VITE_WEATHER_FORECAST_API_KEY;

class WeatherServiceImpl {
    async getWeatherData() {
        const { latitude, longitude } = await getCurrentLocation();

        const response = await fetch(
            `${weatherForecastApiUrl}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
        );

        return await response.json();
    }
}

export const WeatherService = new WeatherServiceImpl();
