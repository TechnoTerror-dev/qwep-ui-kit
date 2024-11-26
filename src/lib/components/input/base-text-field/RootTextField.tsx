import { getColorSystem } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EVariantColor, EVariantSize, TMargin, TVariantColor, TVariantSize } from '@src/lib/types/TypeBase';
import { EInpVariant, TInpVariant } from '@src/lib/types/TypeInp';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    inp: TypeSSInp;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

type RootTextFieldProps = {
    mr?: TMargin;
    variant?: TInpVariant;
    colorVariant?: TVariantColor;
    sizeVariant?: TVariantSize;
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
    $mr?: TMargin;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TVariantColor;
    $sizeVariant: TVariantSize;
    $variant: TInpVariant;
    $blocked?: boolean;
    $_isFocused?: boolean;
    $_isActiveHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const INPUT_SIZE = {
    [EVariantSize.L]: (props: SRootProps) => css`
        height: ${props.$styles.inp.inpHeight_L};
        padding: ${`${props.$styles.inp.inpPadding_Y_L} ${props.$styles.inp.inpPadding_X_L}`};
    `,
    [EVariantSize.M]: (props: SRootProps) => css`
        height: ${props.$styles.inp.inpHeight_M};
        padding: ${`${props.$styles.inp.inpPadding_Y_M} ${props.$styles.inp.inpPadding_X_M}`};
    `,
};

const INP_VARIANT = {
    [EInpVariant.OUTLINED]: (props: SRootProps) => css`
        color: ${props.$colors.subText};
        background-color: transparent;
        border: 1px solid
            ${getColorSystem({
                cs: props.$colors,
                color: props.$color,
                disabled: props.$disabled,
                variant: props.$colorVariant,
            })};
        ${!props.$disabled &&
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
    `,
};

const SRoot = styled.div<SRootProps>`
    display: inline-block;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};

    ${(props) => INP_VARIANT[props.$variant](props)}
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
        variant = EInpVariant.OUTLINED,
        colorVariant = EVariantColor.DEFAULT,
        sizeVariant = EVariantSize.L,
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
                $variant={variant}
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
