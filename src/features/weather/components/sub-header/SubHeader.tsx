// Tailwind Breakpoints
import { breakpoints } from '../../../../styling/tailwind-config.ts';

export function SubHeader() {
    return (
        <div className="text-center">
            <h1 className={`text-(length:--fs-52) font-(weight:--fw-bold) text-[var(--neutral-0)] ${breakpoints.max_550}:text-(length:--fs-32)`}>How's the sky looking today?</h1>
        </div>
    );
}
