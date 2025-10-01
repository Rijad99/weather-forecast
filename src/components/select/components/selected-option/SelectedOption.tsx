// React
import { useCallback } from 'react';

// Icons
import { arrowIcon } from '../../../../icons/icons';

// Types
import { SelectedOptionProps } from './SelectedOption.types';

// Components
import Svg from '../../../svg/Svg';
import { SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../svg/Svg.types';

function SelectedOption({
    selectedOption,
    isSelectOpen,
    placeholder,
    selectIcon,
    preSelectedOptions,
    onSelectOpen,
}: SelectedOptionProps) {
    const handleSelectOpen = useCallback(() => {
        onSelectOpen();
    }, [onSelectOpen]);

    const renderSelectIcon = selectIcon && <Svg path={selectIcon} width="16" height="16" fill="var(--neutral-0)" />;
    const renderOptionIcon = selectedOption?.icon && <img src={selectedOption.icon} alt={selectedOption.icon} />;
    const renderValue = preSelectedOptions ? placeholder : selectedOption?.value;

    return (
        <div
            className="flex items-center h-[50px] pl-[var(--spacing-8)] pr-[var(--spacing-16)] rounded-[var(--radius-8)] cursor-pointer"
            onClick={handleSelectOpen}
        >
            <div className="w-full flex items-center justify-between whitespace-nowrap">
                <div className="flex items-center gap-[var(--spacing-4)]">
                    {renderSelectIcon}
                    <div className="flex items-center ml-[var(--spacing-6)] text-(length:--fs-14) font-(weight:--fw-medium)">
                        {renderOptionIcon}
                        {renderValue}
                    </div>
                </div>
                <Svg
                    path={arrowIcon}
                    width="8"
                    height="6"
                    strokeWidth="1.5"
                    viewBox="0 0 12 7"
                    fill="var(--neutral-0)"
                    strokeLinecap={SvgStrokeLineCap.ROUND}
                    strokeLinejoin={SvgStrokeLineJoin.ROUND}
                    additionalClasses={`transition-all duration-200 linear ${isSelectOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </div>
        </div>
    );
}

export default SelectedOption;
