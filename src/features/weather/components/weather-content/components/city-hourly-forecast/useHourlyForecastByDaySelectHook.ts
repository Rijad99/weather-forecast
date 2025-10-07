// React
import { useEffect, useState } from 'react';

// Types
import { Option } from '../../../../../../components/select/components/options/Options.types.ts';

// Utils
import { getCurrentDate } from '../../../../../../shared/utils/date-utils.ts';

// Data
import { days } from './city-hourly-forecast.data.ts';

export function useHourlyForecastByDaySelectHook() {
    const [currentDay, setCurrentDay] = useState<Option | null>(null);

    useEffect(() => {
        const currentDay = getCurrentDate().split(',')[0];
        const dayOptionToBeSelected = days.filter((day) => day.value === currentDay)[0];

        setCurrentDay(dayOptionToBeSelected);
    }, []);

    const handleDayChange = (day: Option) => {
        setCurrentDay(day);
    };

    return {
        days,
        currentDay,
        handleDayChange,
    };
}
