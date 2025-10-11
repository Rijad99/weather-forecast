// Types
import { WeatherForecastDataType } from '../../../types/WeatherTypes.ts';

// Components
import { SubHeader } from '../../sub-header/SubHeader.tsx';
import { Search } from '../../search/Search.tsx';
import { WeatherContent } from '../../weather-content/WeatherContent.tsx';

interface WeatherLayoutContentProps {
    isWeatherForecastError: boolean;
    weatherForecastData: WeatherForecastDataType | undefined;
}

export function WeatherLayoutContent({ isWeatherForecastError, weatherForecastData }: WeatherLayoutContentProps) {
    if (!isWeatherForecastError && weatherForecastData) {
        return (
            <>
                <SubHeader />
                <Search />
                <WeatherContent weatherForecast={weatherForecastData} />
            </>
        );
    } else {
        return null;
    }
}
