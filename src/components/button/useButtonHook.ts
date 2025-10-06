// Types
import { ButtonSize } from './Button.types.ts';

// CSS
import { useCallback } from 'react';

function useButtonHook() {
    const getButtonCSS = useCallback((size: ButtonSize) => {
        let buttonSize = '';

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

        return buttonSize;
    }, []);

    return { getButtonCSS };
}

export default useButtonHook;
