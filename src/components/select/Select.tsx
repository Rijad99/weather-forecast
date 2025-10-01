// Components
import SelectedOption from './components/selected-option/SelectedOption';
import Options from './components/options/Options';

// Types
import { SelectProps } from './Select.types';

// Select hook
import useSelectHook from './useSelectHook';

function Select({
    selectedOption,
    placeholder,
    options,
    selectIcon,
    preSelectedOptions,
    additionalClasses,
    onOptionChange,
}: SelectProps) {
    const { selectRef, isSelectOpen, handleSelectOpen, handleOptionChange } = useSelectHook(onOptionChange);

    return (
        <div ref={selectRef} className={`relative bg-(--neutral-800) z-10 rounded-(--radius-8) ${additionalClasses}`}>
            <SelectedOption
                isSelectOpen={isSelectOpen}
                selectedOption={selectedOption}
                selectIcon={selectIcon}
                preSelectedOptions={preSelectedOptions}
                placeholder={placeholder}
                onSelectOpen={handleSelectOpen}
            />
            <Options
                isSelectOpen={isSelectOpen}
                options={options}
                preSelectedOptions={preSelectedOptions}
                onOptionChange={handleOptionChange}
            />
        </div>
    );
}

export default Select;
