// React
import { useState } from 'react';

// Components
import Select from '../../../../../../components/select/Select';

// Types
import { Option, PreSelectedOption } from '../../../../../../components/select/components/options/Options.types';

const units: Option[] = [
    {
        id: 0,
        value: 'Switch to Metric',
    },
    {
        id: 1,
        value: 'Switch to Imperial',
    },
];

const preSelectedOptions: PreSelectedOption = {
    temperature: {
        divider: 'Temperature',
        options: [
            {
                id: 0,
                value: 'Celsius (°C)',
                preSelected: true,
            },
            {
                id: 1,
                value: 'Fahrenheit (°F)',
                preSelected: false,
            },
        ],
    },
    windSpeed: {
        divider: 'Wind Speed',
        options: [
            {
                id: 0,
                value: 'km/h',
                preSelected: true,
            },
            {
                id: 1,
                value: 'mp/h',
                preSelected: false,
            },
        ],
    },
    precipitation: {
        divider: 'Precipitation',
        options: [
            {
                id: 0,
                value: 'milimeters (mm)',
                preSelected: true,
            },
            {
                id: 1,
                value: 'inches (in)',
                preSelected: false,
            },
        ],
    },
};

export function UnitsSwitcher() {
    const [currentUnit, setCurrentUnit] = useState<Option>(units[0]);
    const [preSelectedUnits, setPreselectedUnits] = useState<PreSelectedOption>(preSelectedOptions);

    const filteredUnits = units.filter((unit) => unit.value !== currentUnit?.value);

    const handleUnitChange = (unit: Option) => {
        setCurrentUnit(unit);

        switch (currentUnit.value) {
            case 'Switch to Metric':

            case 'Switch to Imperial':
        }
    };

    return (
        <Select
            placeholder="Units"
            options={filteredUnits}
            preSelectedOptions={preSelectedUnits}
            selectedOption={currentUnit}
            additionalClasses="w-[200px]"
            onOptionChange={handleUnitChange}
        />
    );
}
