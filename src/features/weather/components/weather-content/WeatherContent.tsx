// Types
import { WeatherForecastDataType } from '../../types/WeatherTypes.ts';

// Components
import { CityWeatherOverview } from './components/CityWeatherOverview.tsx';
import { CityBaseWeatherInformation } from './components/CityBaseWeatherInformation.tsx';
import { CityDailyForecast } from './components/CityDailyForecast.tsx';
import { CityHourlyForecast } from './components/city-hourly-forecast/CityHourlyForecast.tsx';

interface WeatherContentProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function WeatherContent({ weatherForecast }: WeatherContentProps) {
    return (
        <div className="grid grid-cols-1 min-[1200px]:grid-cols-[2fr_1fr] gap-4">
            <div className="grid grid-rows-[auto_auto_auto] min-[1300px]:grid-rows-[280px_255px_calc(100vh-975px)] gap-4">
                <CityWeatherOverview weatherForecast={weatherForecast} />
                <CityBaseWeatherInformation />
                <CityDailyForecast />
            </div>

            <CityHourlyForecast />
        </div>
    );
}
