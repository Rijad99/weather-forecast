// Components
import Svg from '../../../../../../components/svg/Svg.tsx';

// Icons
import { logoIcon } from '../../../../../../shared/icons/icons.ts';

export function HeaderContent() {
    return (
        <div className="flex items-center gap-[var(--spacing-16)]">
            <Svg width="40" height="40" path={logoIcon} fill="var(--orange)" />
            <span className="max-[550px]:text-(length:--fs-16) max-[500px]:text-(length:--fs-12)">Weather Now</span>
        </div>
    );
}
