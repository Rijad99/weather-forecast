// Components
import { Input } from '../../../../components/input/Input.tsx';
import Button from '../../../../components/button/Button.tsx';

// Types
import { ButtonSize } from '../../../../components/button/Button.types.ts';

// Icons
import { searchIcon } from '../../../../icons/icons.ts';

export function Search() {
    return (
        <div className="flex justify-center items-center gap-[var(--spacing-8)] max-[700px]:flex-col">
            <Input id="country-search" placeholder="Search for a place..." value={''} icon={searchIcon} additionalClasses="w-[50%] max-[700px]:w-full" />
            <Button size={ButtonSize.LARGE} onClick={() => {}} additionalClasses="max-[700px]:w-full">
                Search
            </Button>
        </div>
    );
}
