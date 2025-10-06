// Components
import { Header } from '../header/Header';
import { SubHeader } from '../sub-header/SubHeader';
import { WeatherContent } from '../weather-content/WeatherContent';
import { Search } from '../search/Search.tsx';

// Types
import { WeatherForecastDataType } from '../../types/WeatherTypes.ts';

interface WeatherLayoutProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function WeatherLayout({ weatherForecast }: WeatherLayoutProps) {
    return (
        <div className="h-screen [@media(min-height:1080px)]:[place-content:center_center]">
            <div className="grid max-[700px]:grid-rows-[45px_auto_auto_1fr] grid-rows-[45px_auto_50px_1fr] gap-[var(--spacing-64)] h-screen [@media(min-height:1080px)_and_(min-width:1480px)]:h-[1080px] px-[var(--spacing-112)] [@media(min-height:1080px)_and_(min-width:1480px)]:pt-0 max-[900px]:px-[var(--spacing-16)] pt-[var(--spacing-48)] min-[1920px]:max-w-[1920px] min-[1920px]:m-auto">
                <Header />
                <SubHeader />
                <Search />
                <WeatherContent weatherForecast={weatherForecast} />
            </div>
        </div>
    );
}
