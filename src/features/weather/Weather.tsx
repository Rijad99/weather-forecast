import { WeatherLayout } from './components/weather-layout/WeatherLayout';
import { useWeatherHook } from './useWeatherHook.tsx';

export function Weather() {
    const { weatherForecastData, isWeatherForecastError } = useWeatherHook();

    return <WeatherLayout weatherForecastData={weatherForecastData} isWeatherForecastError={isWeatherForecastError} />;
}
