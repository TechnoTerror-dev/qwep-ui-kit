import { Root, Indicator } from '@radix-ui/react-checkbox';
import { getColor, getColorSystem } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSCheckbox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EBaseProps, TBaseProps } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    checkbox: TypeSSCheckbox;
    mr: TypeSSMR;
};

type CheckboxProps = {
    mr?: TBaseProps.Margin;
    colorVariant?: TBaseProps.VariantColor;
    sizeVariant?: TBaseProps.VariantSize;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    iconProps?: React.SVGProps<SVGSVGElement>;
    polylineProps?: React.SVGProps<SVGPolylineElement>;
    indicatorProps?: React.ComponentPropsWithRef<typeof Indicator>;
} & React.ComponentPropsWithRef<typeof Root>;

type SRootProps = {
    $color?: Hex;
    $mr?: TBaseProps.Margin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TBaseProps.VariantColor;
    $sizeVariant: TBaseProps.VariantSize;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Root>;

type SIconProps = {
    $colorVariant: TBaseProps.VariantColor;
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
        getColor({
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
    [EBaseProps.VariantSize.L]: (props: TypeSSCheckbox) => css`
        width: ${props.checkboxSize_L};
        height: ${props.checkboxSize_L};
        min-width: ${props.checkboxSize_L};
        min-height: ${props.checkboxSize_L};
    `,
    [EBaseProps.VariantSize.M]: (props: TypeSSCheckbox) => css`
        width: ${props.checkboxSize_M};
        height: ${props.checkboxSize_M};
        min-width: ${props.checkboxSize_M};
        min-height: ${props.checkboxSize_M};
    `,
};

const SRoot = styled(Root)<SRootProps>`
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
                opacity: '80',
            })};
    &[data-state='checked'] {
        border-color: ${(props) =>
            getColor({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
    }
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

export const Checkbox = React.memo(
    React.forwardRef<HTMLButtonElement, CheckboxProps>(
        (
            {
                mr,
                color,
                colorVariant = EBaseProps.VariantColor.DEFAULT,
                sizeVariant = EBaseProps.VariantSize.L,
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
                    <Indicator {...indicatorProps}>
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
                    </Indicator>
                </SRoot>
            );
        }
    )
);

//export component
export const SCheckbox = {
    Root: SRoot,
    Icon: SIcon,
    Indicator: Indicator,
};

//export type
export namespace TCheckbox {
    export type Styles = TypeStyles;
    export type Main = CheckboxProps;
    export type SRoot = SRootProps;
    export type SIndicator = React.ComponentPropsWithRef<typeof Indicator>;
    export type SIcon = SIconProps;
}
