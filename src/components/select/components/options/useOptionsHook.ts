// React
import { useCallback } from 'react';

// Types
import { Option } from './Options.types';

function useOptionsHook(onOptionChange: (option: Option) => void) {
    const handleOptionChange = useCallback(
        (option: Option) => {
            onOptionChange(option);
        },
        [onOptionChange]
    );

    const optionsVariant = {
        visible: {
            display: 'unset',
            opacity: 1,
            transform: 'translateY(5px) scale(1)',
            transition: {
                duration: 0.25,
            },
        },
        hidden: {
            display: 'none',
            opacity: 0,
            transform: 'translateY(-10px) scale(0.8)',
            transition: {
                duration: 0.25,
            },
        },
    };

    return {
        optionsVariant,
        handleOptionChange,
    };
}

export default useOptionsHook;
