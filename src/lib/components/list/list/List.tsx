import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBaseProps } from '@src/lib/types/TypeBase';
import { TBoxProps } from '@src/lib/types/TypeBox';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type ListProps = {
    mr?: TBaseProps.Margin;
    height?: string;
    boxWidthVariant?: TBoxProps.BoxWidthVariant;
    boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    boxGapVariant?: TBoxProps.BoxGapVariant;
    boxDisplay?: TBoxProps.BoxDisplay;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLUListElement>;

type SRootProps = {
    $mr?: TBaseProps.Margin;
    $height?: string;
    $boxWidthVariant?: TBoxProps.BoxWidthVariant;
    $boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    $boxGapVariant?: TBoxProps.BoxGapVariant;
    $boxDisplay?: TBoxProps.BoxDisplay;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
} & React.ButtonHTMLAttributes<HTMLUListElement>;

export const SRoot = styled.ul<SRootProps>`
    box-sizing: border-box;
    list-style-type: none;
    position: relative;
    overflow-y: auto;
    height: ${(props) => props.$height ?? 'auto'};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
            $boxDisplay: props.$boxDisplay,
        })};
    ${(props) =>
        StyledScrollbarItem({
            $colors: props.$colors,
        })}
`;

export const List = React.memo(
    React.forwardRef<HTMLUListElement, ListProps>(
        (
            {
                mr,

                height,
                $colors,
                $styles,

                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'box'], $styles);

            return (
                <SRoot ref={ref} $colors={colors} $height={height} $styles={styles} $mr={mr} {...rest}>
                    {rest.children}
                </SRoot>
            );
        }
    )
);

//export component
export const SList = {
    Root: SRoot,
};

//export type
export namespace TList {
    export type Styles = TypeStyles;
    export type Main = ListProps;
    export type SRoot = SRootProps;
}
