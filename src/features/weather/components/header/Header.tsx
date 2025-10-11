// Components
import { HeaderContent } from './components/header-content/HeaderContent.tsx';
import { UnitsSwitcher } from './components/units-switcher/UnitsSwitcher';

export function Header() {
    return (
        <div className="flex items-center justify-between text-[var(--neutral-0)] text-(length:--fs-20) mt-[var(--spacing-48)]">
            <HeaderContent />
            <UnitsSwitcher />
        </div>
    );
}
