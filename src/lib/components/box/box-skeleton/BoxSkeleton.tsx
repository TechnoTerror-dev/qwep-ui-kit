import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { getMargin } from '@src/lib/common/getMargin';
import { useColorScheme } from '@src/lib/general';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin } from '@src/lib/types/TypeBase';
import { TBoxDisplay, TBoxGapVariant, TBoxPaddingVariant, TBoxWidthVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { css, keyframes, styled } from 'styled-components';

type TypeStyles = {
    box: TypeSSBox;
    mr: TypeSSMR;
};

export type BoxProps = {
    mr?: TMargin;
    boxWidthVariant?: TBoxWidthVariant;
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    isSkeleton: boolean;
    boxDisplay?: TBoxDisplay;
    as?: keyof JSX.IntrinsicElements;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $isSkeleton: boolean;
    $boxWidthVariant?: TBoxWidthVariant;
    $boxPaddingVariant?: TBoxPaddingVariant;
    $boxGapVariant?: TBoxGapVariant;
    $boxDisplay?: TBoxDisplay;
    $mr?: TMargin;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const waveAnimation = keyframes`
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
`;

const SRoot = styled.div<SRootProps>`
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
        props.$isSkeleton &&
        css`
            border-radius: ${props.$styles.box.boxBorderRadius_2};
            background-color: ${props.$colors.system};
            overflow: hidden;

            background: linear-gradient(
                90deg,
                ${props.$colors.system} 0%,
                ${props.$colors.disabled} 50%,
                ${props.$colors.system} 100%
            );
            background-size: 200% 100%;
            animation: ${waveAnimation} 2s infinite;

            & > * {
                visibility: hidden;
            }
        `}
`;

export const BoxSkeleton = React.memo(
    React.forwardRef<HTMLDivElement, BoxProps>(
        (
            {
                mr,
                isSkeleton,
                boxWidthVariant,
                boxDisplay,
                boxPaddingVariant,
                boxGapVariant,
                as: Component = 'div',
                $styles,
                $colors,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['box', 'mr'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $colors={colors}
                    as={Component}
                    $isSkeleton={isSkeleton}
                    $styles={styles}
                    $mr={mr}
                    $boxWidthVariant={boxWidthVariant}
                    $boxPaddingVariant={boxPaddingVariant}
                    $boxGapVariant={boxGapVariant}
                    $boxDisplay={boxDisplay}
                    {...rest}
                >
                    {rest.children}
                </SRoot>
            );
        }
    )
);

// //export component
// export const SBox = {
//     Root: SRoot,
// };

// //export type
// export namespace TBox {
//     export type Main = BoxProps;
//     export type Styles = TypeStyles;
//     export type SRoot = SRootProps;
// }
