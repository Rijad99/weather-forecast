// Components
import Svg from '../../../../components/svg/Svg';
import { UnitsSwitcher } from './components/units-switcher/UnitsSwitcher';

// Icons
import { logoIcon } from '../../../../icons/icons';

export function Header() {
    return (
        <div className="flex items-center justify-between text-[var(--neutral-0)] text-(length:--fs-20) mt-[var(--spacing-48)]">
            <div className="flex items-center gap-[var(--spacing-16)]">
                <Svg width="40" height="40" path={logoIcon} fill="var(--orange)" />
                <span className="max-[550px]:text-(length:--fs-16) max-[500px]:text-(length:--fs-12)">Weather Now</span>
            </div>
            <UnitsSwitcher />
        </div>
    );
}
