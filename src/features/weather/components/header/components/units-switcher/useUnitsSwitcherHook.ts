// React
import { useState } from 'react';

// Types
import { Option, PreSelectedOption } from '../../../../../../components/select/components/options/Options.types.ts';
import { Units } from './UnitsSwitcher.types.ts';

// Data
import { preSelectedOptions, units } from './UnitsSwitcher.data.ts';

export function useUnitsSwitcherHook() {
    const [currentUnit, setCurrentUnit] = useState<Option>(units[0]);
    const [preSelectedUnits, setPreselectedUnits] = useState<PreSelectedOption>(preSelectedOptions);

    const filteredUnits = units.filter((unit) => unit.value !== currentUnit?.value);

    const handleUnitChange = (unit: Option) => {
        setCurrentUnit(unit);

        setPreselectedUnits((prev) => {
            const updatedPreselectedUnits: PreSelectedOption = {};

            const targetSystem = unit.value === 'Switch to Metric' ? Units.METRIC : Units.IMPERIAL;

            for (const [key, group] of Object.entries(prev)) {
                updatedPreselectedUnits[key] = {
                    ...group,
                    options: group.options.map((option) => ({
                        ...option,
                        preSelected: option.system === targetSystem,
                    })),
                };
            }

            return updatedPreselectedUnits;
        });
    };

    return {
        currentUnit,
        preSelectedUnits,
        filteredUnits,
        handleUnitChange,
    };
}
