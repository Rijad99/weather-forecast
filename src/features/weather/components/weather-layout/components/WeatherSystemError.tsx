// Components
import { SystemError } from '../../../../../components/system-error/SystemError.tsx';

interface WeatherSystemErrorProps {
    isWeatherForecastError: boolean;
}

export function WeatherSystemError({ isWeatherForecastError }: WeatherSystemErrorProps) {
    if (!isWeatherForecastError) {
        return null;
    }

    return <SystemError id="weather-forecast-system-error" title="Something Went Wrong" message="We couldn't connect to the server (API error). Please try again in a few moments." />;
}
