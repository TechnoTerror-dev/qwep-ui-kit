import * as S from '@radix-ui/react-slider';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSSlider } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EBaseProps, TBaseProps } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
    slider: TypeSSSlider;
};

type SliderProps = {
    mr?: TBaseProps.Margin;
    colorVariant?: TBaseProps.VariantColor;
    sizeVariant?: TBaseProps.VariantSize;
    length?: string;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    trackProps?: React.ComponentPropsWithRef<typeof S.Track>;
    rangeProps?: React.ComponentPropsWithRef<typeof S.Range>;
    thumbProps?: React.ComponentPropsWithRef<typeof S.Thumb>;
} & React.ComponentPropsWithRef<typeof S.Root>;

type SRootProps = {
    $mr?: TBaseProps.Margin;
    $color?: Hex;
    $length?: string;
    $blocked?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TBaseProps.VariantColor;
    $sizeVariant: TBaseProps.VariantSize;
} & React.ComponentPropsWithRef<typeof S.Root>;

const STrack = styled(S.Track)<React.ComponentPropsWithRef<typeof S.Track>>`
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    &[data-orientation='vertical'] {
        width: 1px;
    }
    &[data-orientation='horizontal'] {
        height: 1px;
    }
`;

const SRange = styled(S.Range)<React.ComponentPropsWithRef<typeof S.Range>>`
    position: absolute;
    border-radius: 9999px;
    &[data-orientation='vertical'] {
        width: 2px;
    }
    &[data-orientation='horizontal'] {
        height: 2px;
    }
`;

const SThumb = styled(S.Thumb)<React.ComponentPropsWithRef<typeof S.Thumb>>`
    display: block;
    border-radius: 50%;
`;

const THUMB_SIZE = {
    [EBaseProps.VariantSize.L]: (props: TypeSSSlider) => props.thumbSize_L,
    [EBaseProps.VariantSize.M]: (props: TypeSSSlider) => props.thumbSize_M,
};

const SRoot = styled(S.Root)<SRootProps>`
    position: relative;
    outline: none;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    ${(props) => getMargin(props.$styles?.mr, props.$mr)}
    &[data-orientation='vertical'] {
        flex-direction: column;
        width: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
        height: ${(props) => props.$length ?? '200px'};
    }
    &[data-orientation='horizontal'] {
        width: ${(props) => props.$length ?? '200px'};
        height: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
    }
    ${STrack} {
        background-color: ${(props) => props.$colors.disabled};
    }
    ${SRange} {
        background-color: ${(props) =>
            getColor({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
            })};
    }
    ${SThumb} {
        background-color: ${(props) => (props.disabled ? props.$colors.disabled : props.$colors.backgroundBox)};
        width: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
        height: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
        border: 1px solid ${(props) => props.$colors.disabled};
        &:not([disabled]):focus {
            outline: none;
            border: 2px solid
                ${(props) =>
                    getColor({
                        cs: props.$colors,
                        disabled: props.disabled,
                        color: props.$color,
                        variant: props.$colorVariant,
                        hover: true,
                    })};
        }
    }
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const Slider = React.memo(
    React.forwardRef<HTMLSpanElement, SliderProps>(
        (
            {
                mr,
                color,
                length,
                blocked,
                colorVariant = EBaseProps.VariantColor.DEFAULT,
                sizeVariant = EBaseProps.VariantSize.L,
                $colors,
                $styles,
                trackProps,
                rangeProps,
                thumbProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['slider', 'mr'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $color={color}
                    $mr={mr}
                    $length={length}
                    $colors={colors}
                    $styles={styles}
                    $blocked={blocked}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    {...rest}
                >
                    <STrack {...trackProps}>
                        <SRange {...rangeProps} />
                    </STrack>
                    {rest.defaultValue &&
                        rest.defaultValue.map((_, idx) => {
                            return <SThumb key={idx} {...thumbProps} />;
                        })}
                </SRoot>
            );
        }
    )
);

//export component
export const SSlider = {
    Root: SRoot,
    Thumb: SThumb,
    Range: SRange,
    Track: STrack,
};

//export type
export namespace TSlider {
    export type Main = SliderProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
    export type STrack = React.ComponentPropsWithRef<typeof S.Track>;
    export type SRange = React.ComponentPropsWithRef<typeof S.Range>;
    export type SThumb = React.ComponentPropsWithRef<typeof S.Thumb>;
}
