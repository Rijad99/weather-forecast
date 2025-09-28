// Types
import { WeatherForecastDataType } from '../../types/WeatherTypes.ts';

// Components
import { CityWeatherOverview } from './components/CityWeatherOverview.tsx';
import { CityBaseWeatherInformation } from './components/CityBaseWeatherInformation.tsx';
import { CityDailyForecast } from './components/CityDailyForecast.tsx';
import { CityHourlyForecast } from './components/CityHourlyForecast.tsx';

interface WeatherContentProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function WeatherContent({ weatherForecast }: WeatherContentProps) {
    return (
        <div className="grid grid-cols-[2fr_1fr] gap-4">
            <div className="grid grid-rows-[280px_135px_calc(100vh-855px)] gap-4">
                <CityWeatherOverview weatherForecast={weatherForecast} />
                <CityBaseWeatherInformation />
                <CityDailyForecast />
            </div>

            <CityHourlyForecast />
        </div>
    );
}
