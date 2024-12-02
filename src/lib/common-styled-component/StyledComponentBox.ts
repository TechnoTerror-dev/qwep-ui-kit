import { css } from 'styled-components';
import { Hex, TypeColorScheme } from '../general/colors';
import { TypeSSBox, TypeSSLayout } from '../general/styleScheme';
import {
    TBoxDisplay,
    TBoxGapVariant,
    TBoxPaddingVariant,
    TBoxRadiusVariant,
    TBoxShadowVariant,
    TBoxWidthVariant,
} from '../types/TypeBox';
import { keyframes } from 'styled-components';

export enum Breakpoints {
    S = '767px',
    M = '1280px',
    L = '1920px',
}

export const BOX_WIDTH_VARIANT = {
    ['w-1']: (props: TypeSSBox) => css`
        max-width: ${props.boxWidth_1};
    `,
    ['w-2']: (props: TypeSSBox) => css`
        max-width: ${props.boxWidth_2};
    `,
    ['w-3']: (props: TypeSSBox) => css`
        max-width: ${props.boxWidth_3};
    `,
    ['w-4']: (props: TypeSSBox) => css`
        max-width: ${props.boxWidth_4};
    `,
    ['w-5']: (props: TypeSSBox) => css`
        max-width: ${props.boxWidth_5};
    `,
    ['w-6']: (props: TypeSSBox) => css`
        max-width: ${props.boxWidth_6};
    `,
    ['w-null']: () => css`
        width: auto;
    `,
};

export const BOX_GAP_VARIANT = {
    ['g-1']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_1};
    `,
    ['g-2']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_2};
    `,
    ['g-3']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_3};
    `,
    ['g-4']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_4};
    `,
    ['g-5']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_5};
    `,
    ['g-6']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_6};
    `,
    ['g-null']: () => css`
        gap: 0;
    `,
};

export const BOX_PADDING_VARIANT = {
    ['p-1']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_1};
    `,
    ['p-2']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_2};
    `,
    ['p-3']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_3};
    `,
    ['p-4']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_4};
    `,
    ['p-5']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_5};
    `,
    ['p-6']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_6};
    `,
    ['p-null']: () => css`
        padding: 0;
    `,
};

export const BOX_BORDER_RADIUS = {
    ['br-1']: (props: TypeSSBox) => css`
        border-radius: ${props.boxBorderRadius_1};
    `,
    ['br-2']: (props: TypeSSBox) => css`
        border-radius: ${props.boxBorderRadius_2};
    `,
    ['br-3']: (props: TypeSSBox) => css`
        border-radius: ${props.boxBorderRadius_3};
    `,
    ['br-null']: () => css`
        border-radius: 0;
    `,
};

export type StyledBoxShadowVariantProps = {
    $boxShadowColor?: Hex;
    $colors: TypeColorScheme;
    $box: TypeSSBox;
};

export const BOX_SHADOW_VARIANT = {
    ['shd-1']: (props: StyledBoxShadowVariantProps) => css`
        box-shadow: ${`${props.$box.boxShadow_1}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
    ['shd-2']: (props: StyledBoxShadowVariantProps) => css`
        box-shadow: ${`${props.$box.boxShadow_2}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
    ['shd-3']: (props: StyledBoxShadowVariantProps) => css`
        box-shadow: ${`${props.$box.boxShadow_3}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
    ['shd-null']: () => css`
        box-shadow: none;
    `,
};

export type CSSBaseBoxProps = {
    $boxWidthVariant?: TBoxWidthVariant;
    $boxPaddingVariant?: TBoxPaddingVariant;
    $boxGapVariant?: TBoxGapVariant;
    $boxDisplay?: TBoxDisplay;
    $styles: TypeSSBox;
};

export const CSSBaseBox = (props: CSSBaseBoxProps) => css`
    ${props.$boxDisplay &&
    css`
        display: ${props.$boxDisplay};
    `}
    ${props.$boxGapVariant && BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles)}
    ${props.$boxPaddingVariant && BOX_PADDING_VARIANT[props.$boxPaddingVariant](props.$styles)};
    ${props.$boxWidthVariant && BOX_WIDTH_VARIANT[props.$boxWidthVariant](props.$styles)};
`;

export type CSSSimplePropsBox = {
    $styles: TypeSSBox;
    $colors: TypeColorScheme;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TBoxShadowVariant;
    $boxRadiusVariant?: TBoxRadiusVariant;
};

export const CSSSimpleBox = (props: CSSSimplePropsBox) => css`
    ${props.$boxRadiusVariant && BOX_BORDER_RADIUS[props.$boxRadiusVariant](props.$styles)};
    ${props.$boxShadowVariant &&
    BOX_SHADOW_VARIANT[props.$boxShadowVariant]({
        $box: props.$styles,
        $colors: props.$colors,
        $boxShadowColor: props.$boxShadowColor,
    })}
    ${props.$boxBorderColor &&
    css`
        border: 1px solid ${props.$boxBorderColor};
    `}
`;

export const CSSBoxLayout = (l: TypeSSLayout) => css`
    border-radius: ${l.borderRadius};

    @media screen and (max-width: 767px) {
        max-width: ${l.width_S};
        padding: ${l.padding_S};
    }

    @media screen and (min-width: 768px) and (max-width: 1278px) {
        max-width: ${l.width_M};
        padding: ${l.padding_M};
    }

    @media screen and (min-width: 1279px) {
        width: ${l.width_L};
        padding: ${l.padding_L};
    }
`;

export const CSSBaseLayout = (l: TypeSSLayout) => css`
    @media screen and (max-width: 767px) {
        margin: ${l.margin_S};
    }

    @media screen and (min-width: 768px) and (max-width: 1278px) {
        margin: ${l.margin_M};
    }

    @media screen and (min-width: 1279px) {
        margin: ${l.margin_L};
    }
`;

const backgroundPosition_SkeletonEffect = keyframes`
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
`;

export const CSSSkeletonBox = (borderRadius: string, colors: TypeColorScheme) => css`
    border-radius: ${borderRadius};
    background-color: ${colors.system};
    overflow: hidden;
    background: linear-gradient(90deg, ${colors.system} 0%, ${colors.disabled} 50%, ${colors.system} 100%);
    background-size: 200% 100%;
    animation:
        ${backgroundPosition_SkeletonEffect} 2s infinite,
        ${opacity_BoxLayoutEffect} 0.5s ease-in-out;
    & > * {
        visibility: hidden;
    }
`;

const opacity_BoxLayoutEffect = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const CSSBaseLayoutStart = () => css`
    animation: ${opacity_BoxLayoutEffect} 0.5s ease-in-out;
`;
