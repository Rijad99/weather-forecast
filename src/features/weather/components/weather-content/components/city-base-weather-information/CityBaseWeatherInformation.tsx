// Components
import { TodayWeatherSpecificationCard } from './TodayWeatherSpecificationCard.tsx';

export function CityBaseWeatherInformation() {
    return (
        <div className="rounded-[var(--radius-24)] flex gap-[var(--spacing-24)] max-[550px]:flex-wrap">
            <TodayWeatherSpecificationCard label="Feels Like" value="18" unit="°" />
            <TodayWeatherSpecificationCard label="Humidity" value="46" unit="%" />
            <TodayWeatherSpecificationCard label="Wind Speed" value="14" unit=" km/h" />
            <TodayWeatherSpecificationCard label="Precipitation" value="0" unit=" mm" />
        </div>
    );
}
