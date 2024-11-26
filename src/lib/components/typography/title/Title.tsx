import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin } from '@src/lib/types/TypeBase';
import { ETitleVariant, TTitleVariant } from '@src/lib/types/TypeText';
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
    mr?: TMargin;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    sizeVariant?: TTitleVariant;
} & React.HTMLAttributes<HTMLElement>;

type STitleProps = {
    $mr?: TMargin;
    $isEllipsis?: boolean;
    $sizeVariant: TTitleVariant;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
} & React.HTMLAttributes<HTMLElement>;

const SIZE_VARIANT = {
    [ETitleVariant.L]: (props: TypeSSTypography) => props.title_L,
    [ETitleVariant.M]: (props: TypeSSTypography) => props.title_M,
    [ETitleVariant.S]: (props: TypeSSTypography) => props.title_S,
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
    ({ mr, sizeVariant = ETitleVariant.M, color, isEllipsis, ...rest }) => {
        const colors = useColorScheme();
        const styles = useStyleScheme(['typography', 'mr']);

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
