// Types
import { Option, PreSelectedOption } from '../../../../../../components/select/components/options/Options.types.ts';
import { Units } from './UnitsSwitcher.types.ts';

export const units: Option[] = [
    {
        id: 'option-0',
        value: 'Switch to Metric',
    },
    {
        id: 'option-1',
        value: 'Switch to Imperial',
    },
];

export const preSelectedOptions: PreSelectedOption = {
    temperature: {
        divider: 'Temperature',
        options: [
            {
                id: 'preselected-option-0',
                value: 'Celsius (°C)',
                preSelected: true,
                system: Units.METRIC,
            },
            {
                id: 'preselected-option-1',
                value: 'Fahrenheit (°F)',
                preSelected: false,
                system: Units.IMPERIAL,
            },
        ],
    },
    windSpeed: {
        divider: 'Wind Speed',
        options: [
            {
                id: 'preselected-option-3',
                value: 'km/h',
                preSelected: true,
                system: Units.METRIC,
            },
            {
                id: 'preselected-option-4',
                value: 'mp/h',
                preSelected: false,
                system: Units.IMPERIAL,
            },
        ],
    },
    precipitation: {
        divider: 'Precipitation',
        options: [
            {
                id: 'preselected-option-5',
                value: 'milimeters (mm)',
                preSelected: true,
                system: Units.METRIC,
            },
            {
                id: 'preselected-option-6',
                value: 'inches (in)',
                preSelected: false,
                system: Units.IMPERIAL,
            },
        ],
    },
};
