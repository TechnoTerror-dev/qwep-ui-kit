import { getColorSystem } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EBaseProps, TBaseProps } from '@src/lib/types/TypeBase';

import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    inp: TypeSSInp;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

type RootTextFieldProps = {
    mr?: TBaseProps.Margin;
    colorVariant?: TBaseProps.VariantColor;
    sizeVariant?: TBaseProps.VariantSize;
    color?: Hex;
    disabled?: boolean;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isFocused?: boolean;
    _isActiveHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $color?: Hex;
    $mr?: TBaseProps.Margin;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TBaseProps.VariantColor;
    $sizeVariant: TBaseProps.VariantSize;
    $blocked?: boolean;
    $_isFocused?: boolean;
    $_isActiveHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const INPUT_SIZE = {
    [EBaseProps.VariantSize.L]: (props: SRootProps) => css`
        height: ${props.$styles.inp.inpHeight_L};
        padding: ${`${props.$styles.inp.inpPadding_Y_L} ${props.$styles.inp.inpPadding_X_L}`};
    `,
    [EBaseProps.VariantSize.M]: (props: SRootProps) => css`
        height: ${props.$styles.inp.inpHeight_M};
        padding: ${`${props.$styles.inp.inpPadding_Y_M} ${props.$styles.inp.inpPadding_X_M}`};
    `,
};

const SRoot = styled.div<SRootProps>`
    display: inline-block;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};

    color: ${(props) => props.$colors.subText};
    background-color: transparent;
    border: 1px solid
        ${(props) =>
            getColorSystem({
                cs: props.$colors,
                color: props.$color,
                disabled: props.$disabled,
                variant: props.$colorVariant,
                opacity: '80',
            })};
    ${(props) =>
        !props.$disabled &&
        css`
            &:hover {
                transition: all 0.3s ease-in-out;
                border-color: ${getColorSystem({
                    cs: props.$colors,
                    color: props.$color,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
            }
            ${props.$_isFocused &&
            css`
                box-shadow: 0px 0px 0px 2px
                    ${getColorSystem({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                        opacity: '40',
                    })};
                border-color: ${getColorSystem({
                    cs: props.$colors,
                    color: props.$color,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
            `}
        `}
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) => INPUT_SIZE[props.$sizeVariant](props)};

    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const RootTextField: React.FC<RootTextFieldProps> = React.memo(
    ({
        mr,
        color,
        disabled,
        blocked,
        colorVariant = EBaseProps.VariantColor.DEFAULT,
        sizeVariant = EBaseProps.VariantSize.L,
        _isFocused,
        _isActiveHover = true,
        $colors,
        $styles,
        ...rest
    }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['base', 'inp', 'typography', 'mr'], $styles);

        return (
            <SRoot
                $mr={mr}
                $colors={colors}
                $styles={styles}
                $color={color}
                $disabled={disabled}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $blocked={blocked}
                $_isFocused={_isFocused}
                $_isActiveHover={_isActiveHover}
                {...rest}
            >
                {rest.children}
            </SRoot>
        );
    }
);

//export component
export const SRootTextField = {
    Root: SRoot,
};

//export type
export namespace TRootTextField {
    export type Main = RootTextFieldProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
