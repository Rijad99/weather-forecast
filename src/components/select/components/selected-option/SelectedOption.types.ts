// Types
import { Option, PreSelectedOption } from '../options/Options.types';

export interface SelectedOptionProps {
    selectedOption: Option | null;
    isSelectOpen: boolean;
    preSelectedOptions?: PreSelectedOption;
    placeholder?: string | undefined;
    onSelectOpen: () => void;
}
