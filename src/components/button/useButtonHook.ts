// Types
import { ButtonSize, ButtonType } from './Button.types.ts';

// CSS
import { useCallback } from 'react';

function useButtonHook() {
    const getButtonCSS = useCallback((size: ButtonSize, type: ButtonType) => {
        let buttonSize = '';
        let buttonType = '';

        switch (size) {
            case 'SMALL':
                buttonSize = 'h-[50px] px-[var(--spacing-24)]';
                break;
            case 'MEDIUM':
                buttonSize = 'h-[50px] px-[var(--spacing-24)]';
                break;
            case 'LARGE':
                buttonSize = 'h-[50px] px-[var(--spacing-24)]';
                break;
        }

        switch (type) {
            case 'PRIMARY':
                buttonType = 'bg-[var(--blue-500)]';
                break;
            case 'SECONDARY':
                buttonType = 'bg-[var(--neutral-700)]';
                break;
        }

        return `${buttonSize} ${buttonType}`;
    }, []);

    return { getButtonCSS };
}

export default useButtonHook;
