// Icons
import { systemErrorIcon, refreshIcon } from '../../shared/icons/icons.ts';

// Types
import { ButtonSize, ButtonType } from '../button/Button.types.ts';

// Components
import Svg from '../svg/Svg.tsx';
import Button from '../button/Button.tsx';

interface SystemErrorProps {
    id: string;
    title: string;
    message: string;
}

export function SystemError({ id, title, message }: SystemErrorProps) {
    return (
        <div id={id} className="flex flex-col justify-center items-center gap-[var(--spacing-24)]">
            <Svg width="20" height="20" path={systemErrorIcon} fill="var(--neutral-0)" additionalClasses="scale-200" />
            <h1 className="text-(length:--fs-52) font-(weight:--fw-bold) text-[var(--neutral-0)] max-[768px]:text-(length:--fs-32) max-[500px]:text-(length:--fs-28)">{title}</h1>
            <p className="text-(length:--fs-16) text-[var(--neutral-0)] w-[50%] text-center max-[768px]:w-[80%] max-[550px]:w-[100%] max-[500px]:text-(length:--fs-14)">{message}</p>
            <Button size={ButtonSize.LARGE} type={ButtonType.SECONDARY} onClick={() => {}}>
                <Svg width="24" height="22" path={refreshIcon} stroke="var(--neutral-0)" fill="none" additionalClasses="mr-[var(--spacing-8)]" />
                Retry
            </Button>
        </div>
    );
}
