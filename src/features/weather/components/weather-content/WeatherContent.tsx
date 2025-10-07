// Types
import { WeatherForecastDataType } from '../../types/WeatherTypes.ts';

// Components
import { CityWeatherOverview } from './components/CityWeatherOverview.tsx';
import { CityBaseWeatherInformation } from './components/city-base-weather-information/CityBaseWeatherInformation.tsx';
import { CityDailyForecast } from './components/city-daily-forecast/CityDailyForecast.tsx';
import { CityHourlyForecast } from './components/city-hourly-forecast/CityHourlyForecast.tsx';

// Tailwind Breakpoints
import { breakpoints } from '../../../../styling/tailwind-config.ts';

interface WeatherContentProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function WeatherContent({ weatherForecast }: WeatherContentProps) {
    return (
        <div className={`grid grid-cols-1 ${breakpoints.min_1480}:grid-cols-[2fr_1fr] gap-[var(--spacing-24)] pb-[var(--spacing-22)] ${breakpoints.maxHeight_1080}:max-h-[100%]`}>
            <div
                className={`grid grid-rows-[auto_auto_auto] ${breakpoints.minWidth_1300}:grid-rows-[280px_auto_1fr] ${breakpoints.max_550}:grid-rows-[300px_auto_1fr] gap-[var(--spacing-24)] ${breakpoints.max_550}:gap-[var(--spacing-48)]`}
            >
                <CityWeatherOverview weatherForecast={weatherForecast} />
                <CityBaseWeatherInformation />
                <CityDailyForecast />
            </div>

            <CityHourlyForecast />
        </div>
    );
}
