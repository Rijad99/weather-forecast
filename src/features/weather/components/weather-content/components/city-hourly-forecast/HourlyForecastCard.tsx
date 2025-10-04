// Components
import { Card } from '../../../../../../components/card/Card.tsx';

interface HourlyForecastCardProps {
    time: string;
    temperature: number;
    weatherIcon: string;
}

export function HourlyForecastCard({ time, temperature, weatherIcon }: HourlyForecastCardProps) {
    return (
        <Card additionalClasses="flex justify-between items-center">
            <div className="flex items-center">
                <img src={weatherIcon} className="w-[48px]" alt={'hourly-weather-icon'} />
                <span className="text-[var(--neutral-0)]">{time}</span>
            </div>
            <span className="text-[var(--neutral-0)]">{temperature}°</span>
        </Card>
    );
}
