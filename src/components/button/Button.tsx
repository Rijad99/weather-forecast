// React
import { PropsWithChildren } from 'react';

// Button hook
import useButtonHook from './useButtonHook';

// Types
import { ButtonSize } from './Button.types.ts';

export interface ButtonProps {
    size: ButtonSize;
    onClick: () => void;
    additionalClasses?: string;
}

function Button(props: PropsWithChildren<ButtonProps>) {
    const { getButtonCSS } = useButtonHook();
    const buttonStyle = getButtonCSS(props.size);

    return (
        <button
            className={`flex items-center justify-center whitespace-nowrap gap-[var(--spacing-2)] text-[var(--neutral-0)] text-(length:--fs-14) bg-[var(--blue-500)] font-(weight:--fw-medium) border border-transparent rounded-[var(--radius-16)] cursor-pointer ${props.additionalClasses} ${buttonStyle}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
