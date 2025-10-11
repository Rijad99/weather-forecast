// Types
import { WeatherForecastDataType } from '../../../types/WeatherTypes.ts';

// Components
import { SubHeader } from '../../sub-header/SubHeader.tsx';
import { Search } from '../../search/Search.tsx';
import { NoData } from '../../../../../components/no-data/NoData.tsx';

interface NoWeatherDataProps {
    weatherForecastData: WeatherForecastDataType | undefined;
}

export function NoWeatherData({ weatherForecastData }: NoWeatherDataProps) {
    if (!weatherForecastData) {
        return (
            <>
                <SubHeader />
                <Search />
                <NoData id="weather-forecast-no-data" message="No search result found!" />
            </>
        );
    }

    return null;
}
