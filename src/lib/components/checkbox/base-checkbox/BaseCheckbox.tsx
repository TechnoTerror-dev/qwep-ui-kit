import * as Checkbox from '@radix-ui/react-checkbox';
import { getColor, getColorIcon, getColorSystem } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSCheckbox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EVariantColor, EVariantSize, TMargin, TVariantColor, TVariantSize } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    checkbox: TypeSSCheckbox;
    mr: TypeSSMR;
};

type BaseCheckboxProps = {
    mr?: TMargin;
    colorVariant?: TVariantColor;
    sizeVariant?: TVariantSize;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    iconProps?: React.SVGProps<SVGSVGElement>;
    polylineProps?: React.SVGProps<SVGPolylineElement>;
    indicatorProps?: React.ComponentPropsWithRef<typeof Checkbox.Indicator>;
} & React.ComponentPropsWithRef<typeof Checkbox.Root>;

type SRootProps = {
    $color?: Hex;
    $mr?: TMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TVariantColor;
    $sizeVariant: TVariantSize;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Checkbox.Root>;

type SIconProps = {
    $colorVariant: TVariantColor;
    $colors: TypeColorScheme;
    $color?: Hex;
    $disabled?: boolean;
} & React.SVGProps<SVGSVGElement>;

const SIcon = styled.svg<SIconProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    fill: none;
    stroke: ${(props) =>
        getColorIcon({
            cs: props.$colors,
            disabled: props.$disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
`;

const SIZE_CHECKBOX = {
    [EVariantSize.L]: (props: TypeSSCheckbox) => css`
        width: ${props.checkboxSize_L};
        height: ${props.checkboxSize_L};
        min-width: ${props.checkboxSize_L};
        min-height: ${props.checkboxSize_L};
    `,
    [EVariantSize.M]: (props: TypeSSCheckbox) => css`
        width: ${props.checkboxSize_M};
        height: ${props.checkboxSize_M};
        min-width: ${props.checkboxSize_M};
        min-height: ${props.checkboxSize_M};
    `,
};

const SRoot = styled(Checkbox.Root)<SRootProps>`
    position: relative;
    background-color: transparent;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    border: 1px solid
        ${(props) =>
            getColorSystem({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
            })};

    &:not([disabled]):hover {
        border-color: ${(props) =>
            getColorSystem({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};

        background-color: ${(props) =>
            getColor({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
                opacity: '20',
            })};
        ${SIcon} {
            stroke: ${(props) =>
                getColorSystem({
                    cs: props.$colors,
                    disabled: props.disabled,
                    color: props.$color,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
        }
    }
    ${(props) => SIZE_CHECKBOX[props.$sizeVariant](props.$styles.checkbox)};
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseCheckbox = React.memo(
    React.forwardRef<HTMLButtonElement, BaseCheckboxProps>(
        (
            {
                mr,
                color,
                colorVariant = EVariantColor.DEFAULT,
                sizeVariant = EVariantSize.L,
                blocked,
                $colors,
                $styles,
                _isActiveHover = true,
                indicatorProps,
                iconProps,
                polylineProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['base', 'checkbox', 'mr'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $color={color}
                    $mr={mr}
                    $colors={colors}
                    $blocked={blocked}
                    $styles={styles}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $_isActiveHover={_isActiveHover}
                    {...rest}
                >
                    <Checkbox.Indicator {...indicatorProps}>
                        <SIcon
                            $colors={colors}
                            $colorVariant={colorVariant}
                            $disabled={rest.disabled}
                            $color={color}
                            viewBox="0 0 24 24"
                            {...iconProps}
                        >
                            <polyline points="20 6 9 17 4 12" {...polylineProps} />
                        </SIcon>
                    </Checkbox.Indicator>
                </SRoot>
            );
        }
    )
);

//export component
export const SBaseCheckbox = {
    Root: SRoot,
    Icon: SIcon,
    Indicator: Checkbox.Indicator,
};

//export type
export namespace TBaseCheckbox {
    export type Styles = TypeStyles;
    export type Main = BaseCheckboxProps;
    export type SRoot = SRootProps;
    export type SIndicator = React.ComponentPropsWithRef<typeof Checkbox.Indicator>;
    export type SIcon = SIconProps;
}
