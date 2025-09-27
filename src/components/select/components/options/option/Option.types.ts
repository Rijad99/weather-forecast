export interface OptionProps {
    id: string | number | null;
    value: string;
    preSelected?: boolean;
    icon?: string | undefined;
    onOptionChange?: () => void;
}
