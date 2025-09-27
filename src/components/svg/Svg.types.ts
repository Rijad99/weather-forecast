export interface SvgProps {
    width: string;
    height: string;
    fill: string;
    viewBox?: string;
    path: string;
    clipRule?: string | number | undefined;
    fillRule?: 'inherit' | 'evenodd' | 'nonzero' | undefined;
    stroke?: string;
    strokeWidth?: string;
    strokeLinecap?: 'inherit' | 'round' | 'butt' | 'square' | undefined;
    strokeLinejoin?: 'inherit' | 'miter' | 'round' | 'bevel' | undefined;
    additionalClasses?: string;
}

export enum SvgFillRule {
    INHERIT = 'inherit',
    EVENODD = 'evenodd',
    NONZERO = 'nonzero',
}

export enum SvgClipRule {
    EVENODD = 'evenodd',
}

export enum SvgStrokeLineCap {
    INHERIT = 'inherit',
    ROUND = 'round',
    BUTT = 'butt',
    SQUARE = 'square',
}

export enum SvgStrokeLineJoin {
    INHERIT = 'inherit',
    MITER = 'miter',
    ROUND = 'round',
    BEVEL = 'bevel',
}
