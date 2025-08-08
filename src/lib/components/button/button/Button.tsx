import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBtn, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBaseProps, EBaseProps } from '@src/lib/types/TypeBase';
import { TButtonProps, EButtonProps } from '@src/lib/types/TypeBtn';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

type ButtonProps = {
    mr?: TBaseProps.Margin;
    isRippleEffect?: boolean;
    sizeVariant?: TBaseProps.VariantSize;
    colorVariant?: TBaseProps.VariantColor;
    variant?: TButtonProps.VariantBtn;
    color?: Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type SRootProps = {
    $mr?: TBaseProps.Margin;
    $color?: Hex;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TBaseProps.VariantSize;
    $colorVariant: TBaseProps.VariantColor;
    $variant: TButtonProps.VariantBtn;
    $_isActiveHover: boolean;
    $blocked?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const BTN_SIZE = {
    [EBaseProps.VariantSize.L]: (btn: TypeSSBtn) => css`
        height: ${btn.btnHeight_L};
        padding: ${`${btn.btnPadding_Y_L} ${btn.btnPadding_X_L}`};
    `,
    [EBaseProps.VariantSize.M]: (btn: TypeSSBtn) => css`
        height: ${btn.btnHeight_M};
        padding: ${`${btn.btnPadding_Y_M} ${btn.btnPadding_X_M}`};
    `,
};

const BTN_VARIANT = {
    [EButtonProps.VariantBtn.CONTAINED]: (props: SRootProps) => css`
        color: ${props.$colors.textItem};
        background-color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        border: 0;

        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            background-color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        }
    `,
    [EButtonProps.VariantBtn.TEXT]: (props: SRootProps) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        background-color: transparent;
        border: 0;

        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        }
    `,
    [EButtonProps.VariantBtn.OUTLINED]: (props: SRootProps) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        background-color: transparent;
        border-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        border-left: 1px solid;
        border-right: 1px solid;
        border-top: 1px solid;
        border-bottom: 1px solid;

        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
            border-color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        }
    `,
};

export const SRoot = styled.button<SRootProps>`
    /* display: block; */
    box-sizing: border-box;
    user-select: none;
    position: relative;
    overflow: hidden;
    outline: 0;
    transition: background-color 300ms;
    font-size: ${({ $styles }) => $styles.typography.text};
    font-weight: ${(props) => props.$styles.typography.weightItem};
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};
    line-height: ${(props) => props.$styles.typography.lineHeightText};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) => BTN_SIZE[props.$sizeVariant](props.$styles.btn)};
    ${(props) => BTN_VARIANT[props.$variant](props)};
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const Button = React.memo(
    React.forwardRef<HTMLButtonElement, ButtonProps>(
        (
            {
                mr,
                color,
                isRippleEffect,
                sizeVariant = EBaseProps.VariantSize.L,
                colorVariant = EBaseProps.VariantColor.DEFAULT,
                variant = EButtonProps.VariantBtn.CONTAINED,
                onClick,
                blocked,
                $colors,
                $styles,
                _isActiveHover = true,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'btn', 'typography', 'mr'], $styles);

            const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
                itemRippleEffect(
                    isRippleEffect,
                    event,
                    getColor({
                        cs: colors,
                        color: variant === EButtonProps.VariantBtn.CONTAINED ? colors.alpha : color,
                        variant: colorVariant,
                        opacity: '40',
                    })
                );

                if (onClick) {
                    await onClick(event);
                }
            };

            return (
                <SRoot
                    ref={ref}
                    $colors={colors}
                    $styles={styles}
                    $sizeVariant={sizeVariant}
                    $mr={mr}
                    $color={color}
                    $colorVariant={colorVariant}
                    $variant={variant}
                    onClick={handleClick}
                    $blocked={blocked}
                    $_isActiveHover={_isActiveHover}
                    {...rest}
                >
                    {rest.children}
                </SRoot>
            );
        }
    )
);

//export component
export const SButton = {
    Root: SRoot,
};

//export type
export namespace TButton {
    export type Styles = TypeStyles;
    export type Main = ButtonProps;
    export type SRoot = SRootProps;
}
