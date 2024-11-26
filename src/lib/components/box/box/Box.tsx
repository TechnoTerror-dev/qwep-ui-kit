import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TMargin } from '@src/lib/types/TypeBase';
import { TBoxDisplay, TBoxGapVariant, TBoxPaddingVariant, TBoxWidthVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { styled } from 'styled-components';

type TypeStyles = {
    box: TypeSSBox;
    mr: TypeSSMR;
};

type BoxProps = {
    mr?: TMargin;
    boxWidthVariant?: TBoxWidthVariant;
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    boxDisplay?: TBoxDisplay;
    as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLDivElement>;

type SBoxProps = {
    $boxWidthVariant?: TBoxWidthVariant;
    $boxPaddingVariant?: TBoxPaddingVariant;
    $boxGapVariant?: TBoxGapVariant;
    $boxDisplay?: TBoxDisplay;
    $mr?: TMargin;
    $styles: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SBoxProps>`
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
            $boxDisplay: props.$boxDisplay,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const Box = React.memo(
    React.forwardRef<HTMLDivElement, BoxProps>(
        (
            { mr, boxWidthVariant, boxDisplay, boxPaddingVariant, boxGapVariant, as: Component = 'div', ...rest },
            ref
        ) => {
            const styles = useStyleScheme(['box', 'mr']);

            return (
                <SRoot
                    ref={ref}
                    as={Component}
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
export const SBox = {
    Box: SRoot,
};

//export type
export namespace TBox {
    export type Main = BoxProps;
    export type Styles = TypeStyles;
    export type SBox = SBoxProps;
}
