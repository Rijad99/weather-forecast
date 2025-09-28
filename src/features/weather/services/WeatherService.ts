const weatherForecastApiUrl = import.meta.env.VITE_WEATHER_FORECAST_API_KEY;

class WeatherServiceImpl {
    async getWeatherData() {
        const response = await fetch(`${weatherForecastApiUrl}?latitude=52.52&longitude=13.41&hourly=temperature_2m`);

        return await response.json();
    }
}

export const WeatherService = new WeatherServiceImpl();
