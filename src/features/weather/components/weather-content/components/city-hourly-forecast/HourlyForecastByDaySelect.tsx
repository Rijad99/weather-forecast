// React
import { useEffect, useState } from 'react';

// Types
import { Option } from '../../../../../../components/select/components/options/Options.types.ts';

// Utils
import { getCurrentDate } from '../../../../../../common/date-utils.ts';

// Data
import { days } from './city-hourly-forecast.data.ts';

// Components
import Select from '../../../../../../components/select/Select.tsx';

export function HourlyForecastByDaySelect() {
    const [currentDay, setCurrentDay] = useState<Option | null>(null);

    useEffect(() => {
        const currentDay = getCurrentDate().split(',')[0];
        const dayOptionToBeSelected = days.filter((day) => day.value === currentDay)[0];

        setCurrentDay(dayOptionToBeSelected);
    }, []);

    const handleDayChange = (day: Option) => {
        setCurrentDay(day);
    };

    return (
        <Select
            placeholder="Tuesday"
            selectedOption={currentDay}
            options={days}
            onOptionChange={handleDayChange}
            additionalClasses="w-[150px] bg-[var(--neutral-600)]"
        />
    );
}
