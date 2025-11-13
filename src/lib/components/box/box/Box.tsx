import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBaseProps } from '@src/lib/types/TypeBase';
import { TBoxProps } from '@src/lib/types/TypeBox';
import React from 'react';
import { JSX } from 'react/jsx-runtime';
import styled from 'styled-components';

type TypeStyles = {
    box: TypeSSBox;
    mr: TypeSSMR;
};

export type BoxProps = {
    mr?: TBaseProps.Margin;
    boxWidthVariant?: TBoxProps.BoxWidthVariant;
    boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    boxGapVariant?: TBoxProps.BoxGapVariant;
    boxDisplay?: TBoxProps.BoxDisplay;
    as?: keyof JSX.IntrinsicElements;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $boxWidthVariant?: TBoxProps.BoxWidthVariant;
    $boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    $boxGapVariant?: TBoxProps.BoxGapVariant;
    $boxDisplay?: TBoxProps.BoxDisplay;
    $mr?: TBaseProps.Margin;
    $styles: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SRootProps>`
    box-sizing: border-box;
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
            {
                mr,
                boxWidthVariant,
                boxDisplay,
                boxPaddingVariant,
                boxGapVariant,
                as: Component = 'div',
                $styles,
                ...rest
            },
            ref
        ) => {
            const styles = useStyleScheme(['box', 'mr'], $styles);

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
    Root: SRoot,
};

//export type
export namespace TBox {
    export type Main = BoxProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
