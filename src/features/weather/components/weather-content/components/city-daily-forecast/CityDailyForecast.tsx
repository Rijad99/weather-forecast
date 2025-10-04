// Components
import { Card } from '../../../../../../components/card/Card.tsx';

// Icons
import partlyCloudyIcon from '../../../../../../icons/svgs/partly-cloudy.svg';

export function CityDailyForecast() {
    return (
        <div className="rounded-[var(--radius-24)] flex flex-col gap-y-[var(--spacing-12)]">
            <h1 className="text-[var(--neutral-0)] text-(length:--fs-20)">Daily Forecast</h1>
            <div className="flex gap-[var(--spacing-24)] h-full max-[550px]:flex-wrap">
                <DailyWeatherForecastCard
                    day="Tue"
                    highestTemperature="24"
                    lowestTemperature="16"
                    unit="°"
                    icon={partlyCloudyIcon}
                />
                <DailyWeatherForecastCard
                    day="Tue"
                    highestTemperature="24"
                    lowestTemperature="16"
                    unit="°"
                    icon={partlyCloudyIcon}
                />
                <DailyWeatherForecastCard
                    day="Tue"
                    highestTemperature="24"
                    lowestTemperature="16"
                    unit="°"
                    icon={partlyCloudyIcon}
                />
                <DailyWeatherForecastCard
                    day="Tue"
                    highestTemperature="24"
                    lowestTemperature="16"
                    unit="°"
                    icon={partlyCloudyIcon}
                />
                <DailyWeatherForecastCard
                    day="Tue"
                    highestTemperature="24"
                    lowestTemperature="16"
                    unit="°"
                    icon={partlyCloudyIcon}
                />
                <DailyWeatherForecastCard
                    day="Tue"
                    highestTemperature="24"
                    lowestTemperature="16"
                    unit="°"
                    icon={partlyCloudyIcon}
                />
                <DailyWeatherForecastCard
                    day="Tue"
                    highestTemperature="24"
                    lowestTemperature="16"
                    unit="°"
                    icon={partlyCloudyIcon}
                />
            </div>
        </div>
    );
}

interface DailyWeatherForecastCardProps {
    day: string;
    highestTemperature: string;
    lowestTemperature: string;
    unit: string;
    icon?: string;
}

export function DailyWeatherForecastCard({
    day,
    highestTemperature,
    lowestTemperature,
    unit,
}: DailyWeatherForecastCardProps) {
    return (
        <Card additionalClasses="flex h-full items-center flex-col justify-between basis-1/4 flex-1 pl-[var(--spacing-16)] max-[550px]:h-auto">
            <span className="text-[var(--neutral-0)]">{day}</span>
            <img src={partlyCloudyIcon} alt="daily-weather-icon" />
            <div className="w-full flex justify-between">
                <span className="text-[var(--neutral-0)]">{`${highestTemperature}${unit}`}</span>
                <span className="text-[var(--neutral-0)]">{`${lowestTemperature}${unit}`}</span>
            </div>
        </Card>
    );
}
