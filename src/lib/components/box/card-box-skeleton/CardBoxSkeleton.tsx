import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import { CSSSkeletonBox } from '@src/lib/common-styled-component/StyledComponentBox';
import styled from 'styled-components';
import { SBox } from '../box/Box';
import { SCardBox, TCardBox } from '../card-box/CardBox';

type CardBoxSkeletonProps = {
    isSkeleton: boolean;
} & TCardBox.Main;

type SRootProps = {
    $isSkeleton: boolean;
} & TCardBox.SRoot;

const SRoot = styled(SCardBox.Root)<SRootProps>`
    ${(props) => props.$isSkeleton && CSSSkeletonBox(props.$styles.box.boxBorderRadius_M, props.$colors)};
`;

export const CardBoxSkeleton = React.memo(
    React.forwardRef<HTMLDivElement, CardBoxSkeletonProps>(
        (
            {
                as: Component = 'div',
                mr,
                bg,
                isSkeleton,
                boxWidthVariant,
                boxPaddingVariant,
                boxGapVariant,
                boxDisplay,
                boxRadiusVariant,
                boxShadowVariant,
                boxShadowColor,
                $colors,
                $styles,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['box', 'mr'], $styles);

            return (
                <SRoot
                    ref={ref}
                    as={Component}
                    $styles={styles}
                    $colors={colors}
                    $isSkeleton={isSkeleton}
                    $mr={mr}
                    $boxWidthVariant={boxWidthVariant}
                    $boxPaddingVariant={boxPaddingVariant}
                    $boxGapVariant={boxGapVariant}
                    $boxDisplay={boxDisplay}
                    $bg={bg}
                    $boxRadiusVariant={boxRadiusVariant}
                    $boxShadowVariant={boxShadowVariant}
                    $boxShadowColor={boxShadowColor}
                    {...rest}
                >
                    {rest.children}
                </SRoot>
            );
        }
    )
);

//export component
export const SCardBoxSkeleton = {
    Box: SBox,
};

//export type
export namespace TCardBoxSkeleton {
    export type Main = CardBoxSkeletonProps;
    export type SBox = SRootProps;
}
