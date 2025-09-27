export interface OptionsProps {
    options: Option[];
    preSelectedOptions?: PreSelectedOption;
    isSelectOpen: boolean;
    onOptionChange: (option: Option) => void;
}

export interface Option {
    id: string | number;
    value: string;
    icon?: string;
    preSelected?: boolean;
}

export interface PreSelectedOption {
    [key: string]: {
        divider: string;
        options: Option[];
    };
}
