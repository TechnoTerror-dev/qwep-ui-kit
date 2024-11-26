import styled, { css } from 'styled-components';
import { TypeSSIcon, TypeSSMR } from '../general/styleScheme';
import { getMargin } from '../common/getMargin';
import { Hex, TypeColorScheme } from '../general/colors';
import { getColor } from '../common/getColor';
import { TVariantColor, TMargin, TVariantSize, EVariantSize } from '../types/TypeBase';

export type TypeStyleIconContainer = {
    icon: TypeSSIcon;
    mr: TypeSSMR;
};

export type StyledIconContainerProps = {
    $mr?: TMargin;
    $color?: Hex;
    $disabled?: boolean;
    $_importantColor?: boolean;
    $colorVariant?: TVariantColor;
    $sizeVariant: TVariantSize;
    $colors: TypeColorScheme;
    $styles: TypeStyleIconContainer;
};

const ICON_SIZE = {
    [EVariantSize.L]: (props: StyledIconContainerProps) => css`
        width: ${props.$styles.icon.iconSize_L};
        height: ${props.$styles.icon.iconSize_L};
        min-width: ${props.$styles.icon.iconSize_L};
        min-height: ${props.$styles.icon.iconSize_L};
    `,
    [EVariantSize.M]: (props: StyledIconContainerProps) => css`
        width: ${props.$styles.icon.iconSize_M};
        height: ${props.$styles.icon.iconSize_M};
        min-width: ${props.$styles.icon.iconSize_M};
        min-height: ${props.$styles.icon.iconSize_M};
    `,
};

export const StyledIconContainer = styled.svg<StyledIconContainerProps>`
    display: block;
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    transition: all 0.3s ease-in-out;

    color: ${({ $colors, $color, $colorVariant, $disabled, $_importantColor }) =>
        `${getColor({ cs: $colors, color: $color, variant: $colorVariant, disabled: $disabled })} ${$_importantColor ? '!important' : ''}`};

    ${(props) => ICON_SIZE[props.$sizeVariant](props)}
`;
