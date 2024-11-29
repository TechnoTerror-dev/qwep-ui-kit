import { CSSSkeletonBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { useColorScheme } from '@src/lib/general';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import { styled } from 'styled-components';
import { SBox, TBox } from '../box/Box';

type TypeStyles = {
    box: TypeSSBox;
    mr: TypeSSMR;
};

export type BoxSkeletonProps = {
    isSkeleton: boolean;
    $colors?: TypeColorScheme;
} & TBox.Main;

type SRootProps = {
    $isSkeleton: boolean;
    $colors: TypeColorScheme;
} & TBox.SRoot;

const SRoot = styled(SBox.Root)<SRootProps>`
    ${(props) => props.$isSkeleton && CSSSkeletonBox(props.$styles.box.boxBorderRadius_2, props.$colors)};
`;

export const BoxSkeleton = React.memo(
    React.forwardRef<HTMLDivElement, BoxSkeletonProps>(
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

//export component
export const SBoxSkeleton = {
    Root: SRoot,
};

//export type
export namespace TBoxSkeleton {
    export type Main = BoxSkeletonProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
