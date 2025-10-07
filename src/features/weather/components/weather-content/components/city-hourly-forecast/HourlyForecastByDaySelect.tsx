// Components
import Select from '../../../../../../components/select/Select.tsx';

// Custom Hooks
import { useHourlyForecastByDaySelectHook } from './useHourlyForecastByDaySelectHook.ts';

export function HourlyForecastByDaySelect() {
    const { days, currentDay, handleDayChange } = useHourlyForecastByDaySelectHook();

    return <Select placeholder="Tuesday" selectedOption={currentDay} options={days} onOptionChange={handleDayChange} additionalClasses="w-[150px] bg-[var(--neutral-600)]" />;
}
