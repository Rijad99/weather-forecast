// Components
import { DailyWeatherForecastCard } from './DailyWeatherForecastCard.tsx';

// Icons
import partlyCloudyIcon from '../../../../../../shared/icons/svgs/partly-cloudy.svg';
import { breakpoints } from '../../../../../../styling/tailwind-config.ts';

export function CityDailyForecast() {
    return (
        <div className="rounded-[var(--radius-24)] flex flex-col gap-y-[var(--spacing-12)]">
            <h1 className="text-[var(--neutral-0)] text-(length:--fs-20)">Daily Forecast</h1>
            <CityDailyForecastList />
        </div>
    );
}

function CityDailyForecastList() {
    return (
        <div className={`grid grid-cols-[repeat(7,minmax(100px,1fr))] ${breakpoints.max_1480}:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-[var(--spacing-24)] h-full`}>
            <DailyWeatherForecastCard day="Tue" highestTemperature="24" lowestTemperature="16" unit="°" icon={partlyCloudyIcon} />
            <DailyWeatherForecastCard day="Tue" highestTemperature="24" lowestTemperature="16" unit="°" icon={partlyCloudyIcon} />
            <DailyWeatherForecastCard day="Tue" highestTemperature="24" lowestTemperature="16" unit="°" icon={partlyCloudyIcon} />
            <DailyWeatherForecastCard day="Tue" highestTemperature="24" lowestTemperature="16" unit="°" icon={partlyCloudyIcon} />
            <DailyWeatherForecastCard day="Tue" highestTemperature="24" lowestTemperature="16" unit="°" icon={partlyCloudyIcon} />
            <DailyWeatherForecastCard day="Tue" highestTemperature="24" lowestTemperature="16" unit="°" icon={partlyCloudyIcon} />
            <DailyWeatherForecastCard day="Tue" highestTemperature="24" lowestTemperature="16" unit="°" icon={partlyCloudyIcon} />
        </div>
    );
}
