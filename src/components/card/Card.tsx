// React
import { PropsWithChildren } from 'react';

interface CardProps {
    additionalClasses?: string;
}

export function Card({ children, additionalClasses }: PropsWithChildren<CardProps>) {
    return (
        <div
            className={`bg-[var(--neutral-700)] rounded-[var(--radius-12)] py-[var(--spacing-8)] pr-[var(--spacing-16)] border-[1px] border-[var(--neutral-600)] ${additionalClasses}`}
        >
            {children}
        </div>
    );
}
