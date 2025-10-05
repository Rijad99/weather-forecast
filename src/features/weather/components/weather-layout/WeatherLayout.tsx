// Components
import { Header } from '../header/Header';
import { SubHeader } from '../sub-header/SubHeader';
import { WeatherContent } from '../weather-content/WeatherContent';
import { Search } from '../Search.tsx';

// Types
import { WeatherForecastDataType } from '../../types/WeatherTypes.ts';

interface WeatherLayoutProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function WeatherLayout({ weatherForecast }: WeatherLayoutProps) {
    return (
        <div className="grid grid-rows-[45px_60px_45px_1fr] gap-[var(--spacing-64)] h-screen px-[var(--spacing-112)] max-[550px]:px-[var(--spacing-16)] pt-[var(--spacing-48)] min-[1920px]:max-w-[1920px] min-[1920px]:m-auto">
            <Header />
            <SubHeader />
            <Search />
            <WeatherContent weatherForecast={weatherForecast} />
        </div>
    );
}
