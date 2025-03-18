import * as S from '@radix-ui/react-switch';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSSwitch } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EBaseProps, TBaseProps } from '@src/lib/types/TypeBase';

import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    switch: TypeSSSwitch;
    mr: TypeSSMR;
};

type SwitchProps = {
    mr?: TBaseProps.Margin;
    colorVariant?: TBaseProps.VariantColor;
    sizeVariant?: TBaseProps.VariantSize;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    thumbProps?: React.ComponentPropsWithRef<typeof S.Thumb>;
} & React.ComponentPropsWithRef<typeof S.Root>;

export type SRootProps = {
    $color?: Hex;
    $mr?: TBaseProps.Margin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TBaseProps.VariantColor;
    $sizeVariant: TBaseProps.VariantSize;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof S.Root>;

export type SThumbProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TBaseProps.VariantSize;
} & React.ComponentPropsWithoutRef<typeof S.Thumb>;

const SWITCH_THUMB_SIZE = {
    [EBaseProps.VariantSize.L]: (props: TypeSSSwitch) => css`
        width: ${props.switchThumbSize_L};
        height: ${props.switchThumbSize_L};
    `,
    [EBaseProps.VariantSize.M]: (props: TypeSSSwitch) => css`
        width: ${props.switchThumbSize_M};
        height: ${props.switchThumbSize_M};
    `,
};

const SWITCH_THUMB_TRANSLATE = {
    [EBaseProps.VariantSize.L]: (props: TypeSSSwitch) => css`
        transform: translateX(${props.switchThumbTranslateX_L});
    `,
    [EBaseProps.VariantSize.M]: (props: TypeSSSwitch) => css`
        transform: translateX(${props.switchThumbTranslateX_M});
    `,
};
const SWITCH_SIZE = {
    [EBaseProps.VariantSize.L]: (props: TypeSSSwitch) => css`
        width: ${props.switchSize_X_L};
        height: ${props.switchSize_Y_L};
    `,
    [EBaseProps.VariantSize.M]: (props: TypeSSSwitch) => css`
        width: ${props.switchSize_X_M};
        height: ${props.switchSize_Y_M};
    `,
};

const SThumb = styled(S.Thumb)<SThumbProps>`
    display: block;
    background-color: ${(props) => props.$colors.textItem};
    border-radius: 9999px;
    transition: transform 100ms;
    transform: translateX(1px);
    will-change: transform;
    &[data-state='checked'] {
        ${(props) => SWITCH_THUMB_TRANSLATE[props.$sizeVariant](props.$styles.switch)}
    }
    ${(props) => SWITCH_THUMB_SIZE[props.$sizeVariant](props.$styles.switch)}
`;

const SRoot = styled(S.Root)<SRootProps>`
    all: unset;
    background-color: ${(props) =>
        getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.disabled,
            variant: props.$colorVariant,
        })};
    border-radius: 9999px;
    position: relative;
    &[data-state='checked'] {
        background-color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
    }

    ${(props) => SWITCH_SIZE[props.$sizeVariant](props.$styles.switch)}
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const Switch: React.FC<SwitchProps> = React.memo(
    React.forwardRef<HTMLButtonElement, SwitchProps>(
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
                thumbProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['switch', 'mr'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $color={color}
                    $mr={mr}
                    $blocked={blocked}
                    $colors={colors}
                    $styles={styles}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $_isActiveHover={_isActiveHover}
                    {...rest}
                >
                    <SThumb $colors={colors} $styles={styles} $sizeVariant={sizeVariant} {...thumbProps} />
                </SRoot>
            );
        }
    )
);

//export component
export const SSwitch = {
    Root: SRoot,
    Thumb: SThumb,
};

//export type
export namespace TSwitch {
    export type Main = SwitchProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
    export type SThumb = SThumbProps;
}
