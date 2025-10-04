// Components
import { Card } from '../../../../../../components/card/Card.tsx';

interface TodayWeatherSpecificationCardProps {
    label: string;
    value: string;
    unit: string;
}

export function TodayWeatherSpecificationCard({ label, value, unit }: TodayWeatherSpecificationCardProps) {
    return (
        <Card additionalClasses="flex flex-col justify-between flex-1 pl-[var(--spacing-16)]">
            <span className="text-[var(--neutral-0)]">{label}</span>
            <span className="text-[var(--neutral-0)] text-(length:--fs-28)">{`${value}${unit}`}</span>
        </Card>
    );
}
