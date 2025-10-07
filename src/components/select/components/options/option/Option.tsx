// Types
import { OptionProps } from './Option.types';

// Icons
import { checkmarkIcon } from '../../../../../shared/icons/icons.ts';

// Components
import Svg from '../../../../svg/Svg';

export function Option({ id, value, icon, preSelected, onOptionChange }: OptionProps) {
    const renderIcon = icon && <img src={icon} />;
    const preSelectedIcon = preSelected && <Svg width="20" height="12" path={checkmarkIcon} fill="var(--neutral-0)" />;

    return (
        <li
            key={id}
            className={`h-[30px] flex items-center justify-between mb-[var(--spacing-8)] text-[var(--neutral-0)] text-(length:--fs-14) font-(weight:--fw-medium) pl-[var(--spacing-8)] rounded-(--radius-6) cursor-pointer transition-all ease-in duration-200 hover:bg-[var(--neutral-700)] ${preSelected && 'bg-[var(--neutral-700)]'}`}
            onClick={onOptionChange}
        >
            {renderIcon} {value} {preSelectedIcon}
        </li>
    );
}
