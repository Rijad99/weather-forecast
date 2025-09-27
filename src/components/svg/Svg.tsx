// React
import { forwardRef } from 'react';

// Types
import { SvgProps } from './Svg.types';

const Svg = forwardRef<SVGSVGElement, SvgProps>(
    (
        {
            width,
            height,
            fill,
            viewBox,
            path,
            fillRule,
            clipRule,
            stroke,
            strokeWidth,
            strokeLinejoin,
            strokeLinecap,
            additionalClasses,
        }: SvgProps,
        ref
    ) => {
        return (
            <svg ref={ref} width={width} height={height} viewBox={viewBox} fill={fill} className={additionalClasses}>
                <path
                    fillRule={fillRule}
                    clipRule={clipRule}
                    d={path}
                    stroke={stroke}
                    strokeWidth={strokeWidth}
                    strokeLinejoin={strokeLinejoin}
                    strokeLinecap={strokeLinecap}
                />
            </svg>
        );
    }
);

export default Svg;
