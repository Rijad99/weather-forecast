// Components
import { Card } from '../../../../../../components/card/Card.tsx';

// Icons
import partlyCloudyIcon from '../../../../../../shared/icons/svgs/partly-cloudy.svg';
import { breakpoints } from '../../../../../../styling/tailwind-config.ts';

interface DailyWeatherForecastCardProps {
    day: string;
    highestTemperature: string;
    lowestTemperature: string;
    unit: string;
    icon?: string;
}

export function DailyWeatherForecastCard({ day, highestTemperature, lowestTemperature, unit }: DailyWeatherForecastCardProps) {
    return (
        <Card additionalClasses={`flex h-full items-center flex-col justify-between basis-1/4 flex-1 pl-[var(--spacing-16)] ${breakpoints.max_550}:h-auto`}>
            <span className="text-[var(--neutral-0)]">{day}</span>
            <img src={partlyCloudyIcon} alt="daily-weather-icon" />
            <LowestAndHighestTemperature highestTemperature={highestTemperature} lowestTemperature={lowestTemperature} unit={unit} />
        </Card>
    );
}

interface LowestAndHighestTemperatureProps {
    highestTemperature: string;
    lowestTemperature: string;
    unit: string;
}

function LowestAndHighestTemperature({ highestTemperature, lowestTemperature, unit }: LowestAndHighestTemperatureProps) {
    return (
        <div className="w-full flex justify-between">
            <span className="text-[var(--neutral-0)]">{`${highestTemperature}${unit}`}</span>
            <span className="text-[var(--neutral-0)]">{`${lowestTemperature}${unit}`}</span>
        </div>
    );
}
