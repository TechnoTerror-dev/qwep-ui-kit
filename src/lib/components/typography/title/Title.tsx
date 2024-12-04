import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBaseProps } from '@src/lib/types/TypeBase';
import { ETextProps, TTextProps } from '@src/lib/types/TypeText';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

type TitleProps = {
    children?: React.ReactNode;
    color?: Hex;
    isEllipsis?: boolean;
    mr?: TBaseProps.Margin;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    sizeVariant?: TTextProps.TitleVariant;
} & React.HTMLAttributes<HTMLElement>;

type STitleProps = {
    $mr?: TBaseProps.Margin;
    $isEllipsis?: boolean;
    $sizeVariant: TTextProps.TitleVariant;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
} & React.HTMLAttributes<HTMLElement>;

const SIZE_VARIANT = {
    [ETextProps.TitleVariant.L]: (props: TypeSSTypography) => props.title_L,
    [ETextProps.TitleVariant.M]: (props: TypeSSTypography) => props.title_M,
    [ETextProps.TitleVariant.S]: (props: TypeSSTypography) => props.title_S,
};

const SRoot = styled.h1<STitleProps>`
    font-size: ${(props) => SIZE_VARIANT[props.$sizeVariant](props.$styles.typography)};
    font-weight: ${(props) => props.$styles.typography.weightTitle};
    color: ${(props) => props.$color ?? props.$colors.title};
    line-height: normal;
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
    ${(props) =>
        props.$isEllipsis &&
        css`
            align-items: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        `};
`;

export const Title: React.FC<TitleProps> = React.memo(
    ({ mr, sizeVariant = ETextProps.TitleVariant.M, color, isEllipsis, $colors, $styles, ...rest }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['typography', 'mr'], $styles);

        return (
            <SRoot
                $sizeVariant={sizeVariant}
                $mr={mr}
                $isEllipsis={isEllipsis}
                $colors={colors}
                $styles={styles}
                $color={color}
                {...rest}
            >
                {rest.children}
            </SRoot>
        );
    }
);

//export component
export const STitle = {
    Root: SRoot,
};

//export type
export namespace TTitle {
    export type Styles = TypeStyles;
    export type Main = TitleProps;
    export type SRoot = STitleProps;
}
