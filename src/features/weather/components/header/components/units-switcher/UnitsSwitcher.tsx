// Components
import Select from '../../../../../../components/select/Select';

// Hooks
import { useUnitsSwitcherHook } from './useUnitsSwitcherHook.ts';

export function UnitsSwitcher() {
    const { currentUnit, preSelectedUnits, filteredUnits, handleUnitChange } = useUnitsSwitcherHook();

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
