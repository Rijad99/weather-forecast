// Components
import { Header } from '../header/Header';
import { SubHeader } from '../sub-header/SubHeader';
import { WeatherContent } from '../weather-content/WeatherContent';
import { Search } from '../search/Search.tsx';

// Types
import { WeatherForecastDataType } from '../../types/WeatherTypes.ts';

// Tailwind Breakpoints
import { breakpoints } from '../../../../styling/tailwind-config.ts';

interface WeatherLayoutProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function WeatherLayout({ weatherForecast }: WeatherLayoutProps) {
    return (
        <div className={`h-screen ${breakpoints.minHeight_1080}:[place-content:center_center]`}>
            <div
                className={`grid ${breakpoints.max_700}:grid-rows-[45px_auto_auto_1fr] grid-rows-[45px_auto_50px_1fr] gap-[var(--spacing-64)] h-screen ${breakpoints.minHeight_1080_minWidth_1480}:h-[1080px] px-[var(--spacing-112)] ${breakpoints.minHeight_1080_minWidth_1480}:pt-0 ${breakpoints.max_900}:px-[var(--spacing-16)] ${breakpoints.min_1920}:max-w-[1920px] ${breakpoints.min_1920}:m-auto`}
            >
                <Header />
                <SubHeader />
                <Search />
                <WeatherContent weatherForecast={weatherForecast} />
            </div>
        </div>
    );
}
