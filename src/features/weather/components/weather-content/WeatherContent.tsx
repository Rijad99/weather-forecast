// Types
import { WeatherForecastDataType } from '../../types/WeatherTypes.ts';

// Components
import { CityWeatherOverview } from './components/CityWeatherOverview.tsx';
import { CityBaseWeatherInformation } from './components/city-base-weather-information/CityBaseWeatherInformation.tsx';
import { CityDailyForecast } from './components/city-daily-forecast/CityDailyForecast.tsx';
import { CityHourlyForecast } from './components/city-hourly-forecast/CityHourlyForecast.tsx';

interface WeatherContentProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function WeatherContent({ weatherForecast }: WeatherContentProps) {
    return (
        <div className="grid grid-cols-1 min-[1480px]:grid-cols-[2fr_1fr] gap-[var(--spacing-24)] pb-[var(--spacing-22)] [@media(max-height:1080px)]:max-h-[100%]">
            <div className="grid grid-rows-[auto_auto_auto] min-[1300px]:grid-rows-[280px_auto_1fr] max-[550px]:grid-rows-[300px_auto_1fr] gap-[var(--spacing-24)] max-[550px]:gap-[var(--spacing-48)]">
                <CityWeatherOverview weatherForecast={weatherForecast} />
                <CityBaseWeatherInformation />
                <CityDailyForecast />
            </div>

            <CityHourlyForecast />
        </div>
    );
}
