// Types
import { OptionsProps } from './Options.types';

// Framer motion
import { motion } from 'framer-motion';

// Options hook
import useOptionsHook from './useOptionsHook';
import { Option } from './option/Option';

function Options(props: OptionsProps) {
    const { optionsVariant, handleOptionChange } = useOptionsHook(props.onOptionChange);

    const options = props.options.map((option, index) => {
        return (
            <div key={index} className="p-[var(--spacing-8)]">
                <Option key={option.id} id={option.id} value={option.value} icon={option.icon} onOptionChange={() => handleOptionChange(option)} />
            </div>
        );
    });

    const preSelectedOptionsKeys = props?.preSelectedOptions && Object.keys(props.preSelectedOptions);

    const preSelectedOptions = preSelectedOptionsKeys?.map((key, i) => {
        if (!props.preSelectedOptions) return;

        return (
            <div key={i} className="px-[var(--spacing-8)]">
                <div>
                    <span className="font-(weight:--fw-bold) text-(length:--fs-12) text-[var(--neutral-300)] ml-[var(--spacing-6)]">{props.preSelectedOptions[key].divider}</span>
                    {props.preSelectedOptions[key].options.map((option) => {
                        return <Option key={option.id} id={option.id} value={option.value} preSelected={option.preSelected} />;
                    })}
                    {i !== options.length + 1 ? <div className="w-[95%] h-[1px] bg-[var(--neutral-600)] m-auto"></div> : null}
                </div>
            </div>
        );
    });

    const animateSelect = props.isSelectOpen ? optionsVariant.visible : optionsVariant.hidden;

    return (
        <motion.ul
            className="w-full absolute radius-[--radius-8] p-[--spacing-4] bg-(--neutral-800) rounded-(--radius-8) border-[1px] border-[var(--neutral-600)]"
            initial={{
                opacity: 0,
                transform: 'translateY(-20px)',
            }}
            animate={animateSelect}
        >
            {options}
            {preSelectedOptions}
        </motion.ul>
    );
}

export default Options;
