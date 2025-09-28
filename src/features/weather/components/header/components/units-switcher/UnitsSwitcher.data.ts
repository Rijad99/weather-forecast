// Types
import { Option, PreSelectedOption } from '../../../../../../components/select/components/options/Options.types.ts';
import { Units } from './UnitsSwitcher.types.ts';

export const units: Option[] = [
    {
        id: 0,
        value: 'Switch to Metric',
    },
    {
        id: 1,
        value: 'Switch to Imperial',
    },
];

export const preSelectedOptions: PreSelectedOption = {
    temperature: {
        divider: 'Temperature',
        options: [
            {
                id: 0,
                value: 'Celsius (°C)',
                preSelected: true,
                system: Units.METRIC,
            },
            {
                id: 1,
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
                id: 0,
                value: 'km/h',
                preSelected: true,
                system: Units.METRIC,
            },
            {
                id: 1,
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
                id: 0,
                value: 'milimeters (mm)',
                preSelected: true,
                system: Units.METRIC,
            },
            {
                id: 1,
                value: 'inches (in)',
                preSelected: false,
                system: Units.IMPERIAL,
            },
        ],
    },
};
