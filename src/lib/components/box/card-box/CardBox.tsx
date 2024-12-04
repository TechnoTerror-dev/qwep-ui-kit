import { CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBoxProps } from '@src/lib/types/TypeBox';
import React from 'react';
import { styled } from 'styled-components';
import { SBox, TBox } from '../box/Box';

type CardBoxProps = {
    bg?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TBoxProps.BoxShadowVariant;
    boxRadiusVariant?: TBoxProps.BoxRadiusVariant;
    $colors?: TypeColorScheme;
} & TBox.Main;

type SRootProps = {
    $colors: TypeColorScheme;
    $bg?: Hex;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TBoxProps.BoxShadowVariant;
    $boxRadiusVariant?: TBoxProps.BoxRadiusVariant;
} & TBox.SRoot;

const SRoot = styled(SBox.Root)<SRootProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
            $boxShadowColor: props.$boxShadowColor,
            $boxShadowVariant: props.$boxShadowVariant,
            $boxRadiusVariant: props.$boxRadiusVariant,
            $styles: props.$styles.box,
        })};
`;

export const CardBox = React.memo(
    React.forwardRef<HTMLDivElement, CardBoxProps>(
        (
            {
                as: Component = 'div',
                mr,
                bg,
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
export const SCardBox = {
    Root: SRoot,
};

//export type
export namespace TCardBox {
    export type Main = CardBoxProps;
    export type SRoot = SRootProps;
}
