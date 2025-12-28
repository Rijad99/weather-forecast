// Components
import { Card } from '../../../../../../components/card/Card.tsx';

interface HourlyForecastCardProps {
    hour: string;
    temperature: number;
    weatherIcon: string;
}

export function HourlyForecastCard({ hour, temperature, weatherIcon }: HourlyForecastCardProps) {
    return (
        <Card additionalClasses="flex justify-between items-center">
            <HourlyForecastCardContent hour={hour} temperature={temperature} weatherIcon={weatherIcon} />
        </Card>
    );
}

interface HourlyForecastCardContentProps {
    hour: string;
    temperature: number;
    weatherIcon: string;
}

function HourlyForecastCardContent({ hour, temperature, weatherIcon }: HourlyForecastCardContentProps) {
    return (
        <>
            <div className="flex items-center">
                <img src={weatherIcon} className="w-[48px]" alt={'hourly-weather-icon'} />
                <span className="text-[var(--neutral-0)]">{hour}</span>
            </div>
            <span className="text-[var(--neutral-0)]">{temperature}°</span>
        </>
    );
}
