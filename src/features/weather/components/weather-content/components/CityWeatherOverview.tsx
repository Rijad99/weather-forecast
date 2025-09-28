// Types
import { WeatherForecastDataType } from '../../../types/WeatherTypes.ts';
import { useDetermineLocationHook } from '../../../useDetermineLocationHook.ts';

// Images
import bgHeroImage from '../../../../../images/desktop-hero-bg.svg';
import { getCurrentDate } from '../../../../../common/DateUtils.ts';

interface CityWeatherOverviewProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function CityWeatherOverview({ weatherForecast }: CityWeatherOverviewProps) {
    const { city } = useDetermineLocationHook(weatherForecast?.latitude ?? 0, weatherForecast?.longitude ?? 0);
    const date = getCurrentDate();

    return (
        <div className="relative">
            <img
                className="w-full h-full object-cover rounded-[var(--radius-24)]"
                src={bgHeroImage}
                alt="bg-hero-desktop-image"
            />
            <div className="absolute flex justify-between items-center top-0 bottom-0 left-0 right-0 p-[var(--spacing-24)]">
                <div>
                    <h1 className="text-(length:--fs-52) font-(weight:--fw-semi-bold) text-[var(--neutral-0)]">
                        {city}
                    </h1>
                    <span className="text-[var(--neutral-0)]">{date}</span>
                </div>
                <div></div>
            </div>
        </div>
    );
}
