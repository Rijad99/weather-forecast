// Types
import { Option, PreSelectedOption } from '../options/Options.types';

export interface SelectedOptionProps {
    selectedOption: Option | null;
    isSelectOpen: boolean;
    selectIcon?: string;
    preSelectedOptions?: PreSelectedOption;
    placeholder?: string | undefined;
    onSelectOpen: () => void;
}
