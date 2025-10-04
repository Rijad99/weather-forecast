// Icons
import clearSunnySvgIcon from '../../../../../../icons/svgs/clear-sunny.svg';

// Components
import { HourlyForecastByDaySelect } from './HourlyForecastByDaySelect.tsx';
import { HourlyForecastCard } from './HourlyForecastCard.tsx';

export function CityHourlyForecast() {
    return (
        <div className="bg-[var(--neutral-800)] rounded-[var(--radius-24)] p-[var(--spacing-24)] flex flex-col gap-[var(--spacing-20)]">
            <div className="flex justify-between items-center">
                <h1 className="text-[var(--neutral-0)] text-(length:--fs-18) font-(weight:--fw-semi-bold)">
                    Hourly Forecast
                </h1>
                <HourlyForecastByDaySelect />
            </div>
            <div className="flex flex-col gap-[var(--spacing-16)]">
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
            </div>
        </div>
    );
}
