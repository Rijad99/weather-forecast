// Components
import { Card } from '../../../../../../components/card/Card.tsx';

// Tailwind Breakpoints
import { breakpoints } from '../../../../../../styling/tailwind-config.ts';

interface TodayWeatherSpecificationCardProps {
    label: string;
    value: string;
    unit: string;
}

export function TodayWeatherSpecificationCard({ label, value, unit }: TodayWeatherSpecificationCardProps) {
    return (
        <Card additionalClasses="flex flex-col justify-between gap-y-[var(--spacing-20)] pl-[var(--spacing-16)]">
            <span className={`text-[var(--neutral-0)] ${breakpoints.max_900}:text-(length:--fs-14) ${breakpoints.max_550}:text-(length:--fs-12) whitespace-nowrap`}>{label}</span>
            <span className={`text-[var(--neutral-0)] text-(length:--fs-28) ${breakpoints.max_900}:text-(length:--fs-18) whitespace-nowrap`}>{`${value}${unit}`}</span>
        </Card>
    );
}
