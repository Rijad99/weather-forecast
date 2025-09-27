// Types
import { Option } from './components/options/Options.types';
import { PreSelectedOption } from './components/options/Options.types';

export interface SelectProps {
    selectedOption: Option | null;
    placeholder?: string | undefined;
    options: Option[];
    preSelectedOptions?: PreSelectedOption;
    additionalClasses?: string;
    onOptionChange: (option: Option) => void;
}
