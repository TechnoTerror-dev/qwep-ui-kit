import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { ETextProps, TTextProps } from '@src/lib/types/TypeText';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
};

type BaseTextProps = {
    color?: Hex;
    sizeVariant?: TTextProps.TextVariant;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLParagraphElement>;

type SRootProps = {
    $sizeVariant: TTextProps.TextVariant;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
} & React.HTMLAttributes<HTMLParagraphElement> &
    React.HTMLAttributes<HTMLElement>;

export const TEXT_SIZE = {
    [ETextProps.TextVariant.TEXT]: (props: TypeSSTypography) => css`
        line-height: ${props.lineHeightText};
        font-size: ${props.text};
    `,
    [ETextProps.TextVariant.SUBTEXT]: (props: TypeSSTypography) => css`
        line-height: ${props.lineHeightSubText};
        font-size: ${props.subText};
    `,
};

const SRoot = styled.p<SRootProps>`
    font-weight: ${(props) => props.$styles.typography.weightGlobal};
    color: ${(props) => props.$color ?? props.$colors.text};
    ${(props) => TEXT_SIZE[props.$sizeVariant](props.$styles.typography)};
`;

export const BaseText: React.FC<BaseTextProps> = React.memo(
    ({ sizeVariant = ETextProps.TextVariant.TEXT, color, $colors, $styles, ...rest }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['typography'], $styles);

        return (
            <SRoot $sizeVariant={sizeVariant} $colors={colors} $styles={styles} $color={color} {...rest}>
                {rest.children}
            </SRoot>
        );
    }
);

//export component
export const SBaseText = {
    Root: SRoot,
};

//export type
export namespace TBaseText {
    export type Styles = TypeStyles;
    export type Main = BaseTextProps;
    export type SRoot = SRootProps;
}
