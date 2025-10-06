// Icons
import clearSunnySvgIcon from '../../../../../../icons/svgs/clear-sunny.svg';

// Components
import { HourlyForecastByDaySelect } from './HourlyForecastByDaySelect.tsx';
import { HourlyForecastCard } from './HourlyForecastCard.tsx';

export function CityHourlyForecast() {
    return (
        <div className="bg-[var(--neutral-800)] rounded-[var(--radius-24)] py-[var(--spacing-24)] pl-[var(--spacing-24)] pb-[var(--spacing-24)] flex flex-col gap-[var(--spacing-20)]">
            <div className="flex justify-between items-center pr-[var(--spacing-24)]">
                <h1 className="text-[var(--neutral-0)] text-(length:--fs-18) font-(weight:--fw-semi-bold)">Hourly Forecast</h1>
                <HourlyForecastByDaySelect />
            </div>
            <div className="flex flex-col gap-[var(--spacing-16)] max-h-[550px] overflow-x-hidden overflow-y-auto pr-[var(--spacing-24)]">
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
                <HourlyForecastCard time="3 PM" temperature={20} weatherIcon={clearSunnySvgIcon} />
            </div>
        </div>
    );
}
