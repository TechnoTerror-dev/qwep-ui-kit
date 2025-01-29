import { css } from 'styled-components';
import { Hex, TypeColorScheme } from '../general/colors';
import { TypeSSBox, TypeSSLayout } from '../general/styleScheme';
import { EBoxProps, TBoxProps } from '../types/TypeBox';
import { keyframes } from 'styled-components';

export const BOX_WIDTH_VARIANT = {
    [EBoxProps.BoxWidthVariant.FIT_CONTENT]: (props: TypeSSBox) => css`
        width: ${props.boxWidth_fit_content};
    `,
    [EBoxProps.BoxWidthVariant.MAX]: (props: TypeSSBox) => css`
        width: ${props.boxWidth_max};
    `,
    [EBoxProps.BoxWidthVariant.S]: (props: TypeSSBox) => css`
        width: ${props.boxWidth_S};
    `,
    [EBoxProps.BoxWidthVariant.M]: (props: TypeSSBox) => css`
        width: ${props.boxWidth_M};
    `,
    [EBoxProps.BoxWidthVariant.L]: (props: TypeSSBox) => css`
        width: ${props.boxWidth_L};
    `,
};

export const BOX_GAP_VARIANT = {
    [EBoxProps.BoxGapVariant.G1]: (props: TypeSSBox) => css`
        gap: ${props.boxGap_1};
    `,
    [EBoxProps.BoxGapVariant.G2]: (props: TypeSSBox) => css`
        gap: ${props.boxGap_2};
    `,
    [EBoxProps.BoxGapVariant.G3]: (props: TypeSSBox) => css`
        gap: ${props.boxGap_3};
    `,
    [EBoxProps.BoxGapVariant.G4]: (props: TypeSSBox) => css`
        gap: ${props.boxGap_4};
    `,
    [EBoxProps.BoxGapVariant.G5]: (props: TypeSSBox) => css`
        gap: ${props.boxGap_5};
    `,
    [EBoxProps.BoxGapVariant.G6]: (props: TypeSSBox) => css`
        gap: ${props.boxGap_6};
    `,
    [EBoxProps.BoxGapVariant.Null]: () => css`
        gap: 0;
    `,
};

export const BOX_PADDING_VARIANT = {
    [EBoxProps.BoxPaddingVariant.P1]: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_1};
    `,
    [EBoxProps.BoxPaddingVariant.P2]: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_2};
    `,
    [EBoxProps.BoxPaddingVariant.P3]: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_3};
    `,
    [EBoxProps.BoxPaddingVariant.P4]: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_4};
    `,
    [EBoxProps.BoxPaddingVariant.P5]: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_5};
    `,
    [EBoxProps.BoxPaddingVariant.P6]: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_6};
    `,
    [EBoxProps.BoxPaddingVariant.Null]: () => css`
        padding: 0;
    `,
};

export const BOX_BORDER_RADIUS = {
    [EBoxProps.BoxRadiusVariant.BrS]: (props: TypeSSBox) => css`
        border-radius: ${props.boxBorderRadius_S};
    `,
    [EBoxProps.BoxRadiusVariant.BrM]: (props: TypeSSBox) => css`
        border-radius: ${props.boxBorderRadius_M};
    `,
    [EBoxProps.BoxRadiusVariant.BrL]: (props: TypeSSBox) => css`
        border-radius: ${props.boxBorderRadius_L};
    `,
    [EBoxProps.BoxRadiusVariant.Null]: () => css`
        border-radius: 0;
    `,
};

export type StyledBoxShadowVariantProps = {
    $boxShadowColor?: Hex;
    $colors: TypeColorScheme;
    $box: TypeSSBox;
};

export const BOX_SHADOW_VARIANT = {
    [EBoxProps.BoxShadowVariant.ShdS]: (props: StyledBoxShadowVariantProps) => css`
        box-shadow: ${`${props.$box.boxShadow_S}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
    [EBoxProps.BoxShadowVariant.ShdM]: (props: StyledBoxShadowVariantProps) => css`
        box-shadow: ${`${props.$box.boxShadow_M}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
    [EBoxProps.BoxShadowVariant.ShdL]: (props: StyledBoxShadowVariantProps) => css`
        box-shadow: ${`${props.$box.boxShadow_L}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
    [EBoxProps.BoxShadowVariant.Null]: () => css`
        box-shadow: none;
    `,
};

export type CSSBaseBoxProps = {
    $boxWidthVariant?: TBoxProps.BoxWidthVariant;
    $boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    $boxGapVariant?: TBoxProps.BoxGapVariant;
    $boxDisplay?: TBoxProps.BoxDisplay;
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
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TBoxProps.BoxShadowVariant;
    $boxRadiusVariant?: TBoxProps.BoxRadiusVariant;
};

export const CSSSimpleBox = (props: CSSSimplePropsBox) => css`
    ${props.$boxRadiusVariant && BOX_BORDER_RADIUS[props.$boxRadiusVariant](props.$styles)};
    ${props.$boxShadowVariant &&
    BOX_SHADOW_VARIANT[props.$boxShadowVariant]({
        $box: props.$styles,
        $colors: props.$colors,
        $boxShadowColor: props.$boxShadowColor,
    })}
`;

export const CSSBoxLayout = (l: TypeSSLayout) => css`
    border-radius: ${l.borderRadius};

    @media screen and (max-width: 767px) {
        max-width: ${l.width_S};
        padding: ${l.padding_S};
    }

    @media screen and (min-width: 768px) and (max-width: 1278px) {
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
    overflow: hidden;
    background: linear-gradient(
        90deg,
        ${colors.backgroundBox} 0%,
        ${colors.disabled} 50%,
        ${colors.backgroundBox} 100%
    );

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

export type CSSBlurEffectProps = {
    $blurCount?: string;
};

export const CSSBlurEffect = ({ $blurCount }: CSSBlurEffectProps) => css`
    backdrop-filter: blur(${$blurCount && !isNaN(Number($blurCount)) ? `${$blurCount}px` : '8px'}) saturate(110%);
    -webkit-backdrop-filter: blur(${$blurCount && !isNaN(Number($blurCount)) ? `${$blurCount}px` : '8px'})
        saturate(110%);
`;
