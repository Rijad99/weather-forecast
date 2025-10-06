// React
import { ChangeEvent } from 'react';

// Components
import Svg from '../svg/Svg.tsx';

export interface InputProps {
    id: string;
    placeholder?: string;
    value: string;
    icon?: string;
    additionalClasses?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ id, placeholder, value, icon, additionalClasses, onChange }: InputProps) {
    const displayIcon = icon ? <Svg path={icon} width="21" height="19" fill="var(--neutral-0)" viewBox="0 -0.5 19 19" /> : null;

    return (
        <div className={`flex items-center h-[50px] bg-[var(--neutral-800)] shadow-[0_0_10px_rgba(0,0,0,0.075)] rounded-[var(--radius-16)] pl-[var(--spacing-16)] ${additionalClasses}`}>
            {displayIcon}
            <input
                id={id}
                className="w-full text-(length:--fs-14) border-0 text-[var(--neutral-0)] outline-none rounded-[var(--radius-16)] placeholder:text-[var(--neutral-200)] pl-[var(--spacing-16)]"
                placeholder={placeholder}
                value={value}
                spellCheck="false"
                autoComplete="off"
                onChange={onChange}
            />
        </div>
    );
}
