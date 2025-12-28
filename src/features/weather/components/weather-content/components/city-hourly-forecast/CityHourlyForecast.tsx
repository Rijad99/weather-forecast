// Icons
import clearSunnySvgIcon from '../../../../../../shared/icons/svgs/clear-sunny.svg';

// Components
import { HourlyForecastByDaySelect } from './HourlyForecastByDaySelect.tsx';
import { HourlyForecastCard } from './HourlyForecastCard.tsx';
import { WeatherForecastDataType } from '../../../../types/WeatherTypes.ts';

interface CityHourlyForecastProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

export function CityHourlyForecast({ weatherForecast }: CityHourlyForecastProps) {
    return (
        <div className="bg-[var(--neutral-800)] rounded-[var(--radius-24)] py-[var(--spacing-24)] pl-[var(--spacing-24)] pb-[var(--spacing-24)] flex flex-col gap-[var(--spacing-20)]">
            <div className="flex justify-between items-center pr-[var(--spacing-24)]">
                <h1 className="text-[var(--neutral-0)] text-(length:--fs-18) font-(weight:--fw-semi-bold)">Hourly Forecast</h1>
                <HourlyForecastByDaySelect />
            </div>
            <CityHourlyForecastList weatherForecast={weatherForecast} />
        </div>
    );
}

interface CityHourlyForecastListProps {
    weatherForecast: WeatherForecastDataType | undefined;
}

function CityHourlyForecastList({ weatherForecast }: CityHourlyForecastListProps) {
    const NUMBER_OF_HOURLY_TEMPERATURES = 10;

    const times = weatherForecast!.hourly.time.slice(0, NUMBER_OF_HOURLY_TEMPERATURES);
    const temperatures = weatherForecast!.hourly.temperature_2m.slice(0, NUMBER_OF_HOURLY_TEMPERATURES);

    return (
        <div className="flex flex-col gap-[var(--spacing-16)] max-h-[550px] overflow-x-hidden overflow-y-auto pr-[var(--spacing-24)]">
            {times?.map((time, index) => {
                const hour = time.substring(time.length, time.length - 5);
                const temperature = Math.round(temperatures[index]);

                return <HourlyForecastCard key={index} weatherIcon={clearSunnySvgIcon} hour={hour} temperature={temperature} />;
            })}
        </div>
    );
}
