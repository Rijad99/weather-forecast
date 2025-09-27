// Components
import { Header } from '../header/Header';
import { SubHeader } from '../sub-header/SubHeader';
import { WeatherContent } from '../weather-content/WeatherContent';

export function WeatherLayout() {
    return (
        <div className="grid grid-rows-[45px_60px_1fr] gap-[var(--spacing-64)] h-screen px-[var(--spacing-112)] pt-[var(--spacing-48)] pb-[var(--spacing-80)]">
            <Header />
            <SubHeader />
            <WeatherContent />
        </div>
    );
}
