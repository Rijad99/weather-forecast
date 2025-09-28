import { WeatherLayout } from './components/weather-layout/WeatherLayout';
import { useWeatherHook } from './useWeatherHook.tsx';

export function Weather() {
    const { weatherForecastData } = useWeatherHook();

    return <WeatherLayout weatherForecast={weatherForecastData} />;
}
