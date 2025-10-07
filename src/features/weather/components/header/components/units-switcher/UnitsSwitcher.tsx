// Components
import Select from '../../../../../../components/select/Select';

// Icons
import { gearIcon } from '../../../../../../shared/icons/icons.ts';

// Hooks
import { useUnitsSwitcherHook } from './useUnitsSwitcherHook.ts';

export function UnitsSwitcher() {
    const { currentUnit, preSelectedUnits, filteredUnits, handleUnitChange } = useUnitsSwitcherHook();

    return (
        <Select
            placeholder="Units"
            options={filteredUnits}
            selectIcon={gearIcon}
            preSelectedOptions={preSelectedUnits}
            selectedOption={currentUnit}
            additionalClasses="w-[200px] z-[20]"
            onOptionChange={handleUnitChange}
        />
    );
}
