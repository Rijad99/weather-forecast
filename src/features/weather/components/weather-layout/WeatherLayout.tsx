// Components
import { Header } from '../header/Header';
import { WeatherLayoutContent } from './components/WeatherLayoutContent.tsx';
import { NoWeatherData } from './components/NoWeatherData.tsx';
import { WeatherSystemError } from './components/WeatherSystemError.tsx';

// Types
import { WeatherForecastDataType } from '../../types/WeatherTypes.ts';

// Custom Hooks
import { useWeatherLayoutHook } from './useWeatherLayoutHook.ts';

interface WeatherLayoutProps {
    weatherForecastData: WeatherForecastDataType | undefined;
    isWeatherForecastError: boolean;
}

export function WeatherLayout({ weatherForecastData, isWeatherForecastError }: WeatherLayoutProps) {
    const { determineGridLayout } = useWeatherLayoutHook();

    return (
        <div className="h-screen [@media(min-height:1080px)]:[place-content:center_center]">
            <div
                className={`grid ${determineGridLayout(isWeatherForecastError)} gap-[var(--spacing-64)] h-screen [@media(min-height:1080px)_and_(min-width:1480px)]:h-[1080px] px-[var(--spacing-112)] [@media(min-height:1080px)_and_(min-width:1480px)]:pt-0 max-[900px]:px-[var(--spacing-16)] min-[1920px]:max-w-[1920px] min-[1920px]:m-auto`}
            >
                <Header />
                <NoWeatherData weatherForecastData={weatherForecastData} />
                <WeatherSystemError isWeatherForecastError={isWeatherForecastError} />
                <WeatherLayoutContent isWeatherForecastError={isWeatherForecastError} weatherForecastData={weatherForecastData} />
            </div>
        </div>
    );
}
