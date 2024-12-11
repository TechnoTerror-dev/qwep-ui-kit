import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { TBaseProps } from '@src/lib/types/TypeBase';
import { getMargin } from '@src/lib/common/getMargin';
import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { TBoxProps } from '@src/lib/types/TypeBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type TypeSize = {
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string;
};

type ScrollAreaProps = {
    mr?: TBaseProps.Margin;
    boxWidthVariant?: TBoxProps.BoxWidthVariant;
    boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    boxGapVariant?: TBoxProps.BoxGapVariant;
    boxDisplay?: TBoxProps.BoxDisplay;
    thumbColor?: Hex;
    children?: React.ReactNode;
    size?: TypeSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $mr?: TBaseProps.Margin;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
    $size?: TypeSize;
    $thumbColor?: Hex;
    $boxWidthVariant?: TBoxProps.BoxWidthVariant;
    $boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    $boxGapVariant?: TBoxProps.BoxGapVariant;
    $boxDisplay?: TBoxProps.BoxDisplay;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SRootProps>`
    overflow-y: auto;
    ${(props) => props.$size}
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
            $boxDisplay: props.$boxDisplay,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
    ${(props) =>
        StyledScrollbarItem({
            $colors: props.$colors,
            $color: props.$thumbColor ?? props.$colors.primaryItem,
        })}
`;

export const ScrollArea = React.memo(
    React.forwardRef<HTMLDivElement, ScrollAreaProps>(
        (
            {
                mr,
                children,
                boxWidthVariant,
                boxDisplay,
                boxPaddingVariant,
                boxGapVariant,
                thumbColor,
                size,
                $colors,
                $styles,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'box'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $mr={mr}
                    $colors={colors}
                    $thumbColor={thumbColor}
                    $styles={styles}
                    $size={size}
                    $boxWidthVariant={boxWidthVariant}
                    $boxPaddingVariant={boxPaddingVariant}
                    $boxGapVariant={boxGapVariant}
                    $boxDisplay={boxDisplay}
                    {...rest}
                >
                    {children}
                </SRoot>
            );
        }
    )
);

//export component
export const SScrollArea = {
    Root: SRoot,
};

//export type
export namespace TScrollArea {
    export type Styles = TypeStyles;
    export type Main = ScrollAreaProps;
    export type SRoot = SRootProps;
}
