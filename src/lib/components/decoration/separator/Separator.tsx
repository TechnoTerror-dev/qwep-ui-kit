import { getMargin } from '@src/lib/common/getMargin';
import { useColorScheme, useStyleScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR } from '@src/lib/general/styleScheme';
import { EBaseProps, TBaseProps } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
};

type SeparatorProps = {
    mr?: TBaseProps.Margin;
    orientation?: TBaseProps.OrientationContent;
    color?: Hex;
    length?: string;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $mr?: TBaseProps.Margin;
    $color?: Hex;
    $length: string;
    $orientation: TBaseProps.OrientationContent;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const ORIENTATION = {
    [EBaseProps.OrientationContent.HORIZONTAL]: (length: string) => css`
        width: ${length};
        height: 1px;
    `,
    [EBaseProps.OrientationContent.VERTICAL]: (length: string) => css`
        width: 1px;
        height: ${length};
    `,
};

const SRoot = styled.div<SRootProps>`
    position: relative;
    background-color: ${(props) => props.$color ?? props.$colors.system};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
    ${(props) => ORIENTATION[props.$orientation](props.$length)};
`;

export const Separator = React.memo(
    React.forwardRef<HTMLDivElement, SeparatorProps>(
        (
            {
                mr,
                length = '100%',
                color,
                orientation = EBaseProps.OrientationContent.HORIZONTAL,
                $colors,
                $styles,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $orientation={orientation}
                    $color={color}
                    $colors={colors}
                    $styles={styles}
                    $mr={mr}
                    $length={length}
                    {...rest}
                />
            );
        }
    )
);

//export component
export const SSeparator = {
    Root: SRoot,
};

//export type
export namespace TSeparator {
    export type Main = SeparatorProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
