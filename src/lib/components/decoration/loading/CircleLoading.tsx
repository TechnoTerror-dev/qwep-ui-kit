import { getColor } from '@src/lib/common/getColor';
import { useColorScheme, useStyleScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSIcon, TypeSSMR } from '@src/lib/general/styleScheme';
import { EVariantColor, EVariantSize, TMargin, TVariantColor, TVariantSize } from '@src/lib/types/TypeBase';
import React from 'react';
import { css, keyframes, styled } from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
    icon: TypeSSIcon;
};

type CircleLoadingProps = {
    mr?: TMargin;
    color?: Hex;
    sizeVariant?: TVariantSize;
    colorVariant?: TVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $mr?: TMargin;
    $color?: Hex;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
    $sizeVariant: TVariantSize;
    $colorVariant: TVariantColor;
} & React.HTMLAttributes<HTMLDivElement>;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const ICON_SIZE = {
    [EVariantSize.L]: (icon: TypeSSIcon) => css`
        width: ${icon.iconSize_L};
        height: ${icon.iconSize_L};
    `,
    [EVariantSize.M]: (icon: TypeSSIcon) => css`
        width: ${icon.iconSize_M};
        height: ${icon.iconSize_M};
    `,
};

const SSpinner = styled.div`
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;

const SRoot = styled.div<SRootProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    ${SSpinner} {
        border: 2px solid
            ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    variant: props.$colorVariant,
                })};
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        ${(props) => ICON_SIZE[props.$sizeVariant](props.$styles.icon)};
    }
`;

export const CircleLoading = React.memo(
    React.forwardRef<HTMLDivElement, CircleLoadingProps>(
        (
            {
                mr,
                sizeVariant = EVariantSize.L,
                colorVariant = EVariantColor.DEFAULT,
                color,
                $colors,
                $styles,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'icon'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $sizeVariant={sizeVariant}
                    $colorVariant={colorVariant}
                    $color={color}
                    $colors={colors}
                    $styles={styles}
                    $mr={mr}
                    {...rest}
                >
                    <SSpinner />
                </SRoot>
            );
        }
    )
);

// //export component
export const SCircleLoading = {
    Root: SRoot,
    Spinner: SSpinner,
};

// //export type
export namespace TCircleLoading {
    export type Main = CircleLoadingProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
