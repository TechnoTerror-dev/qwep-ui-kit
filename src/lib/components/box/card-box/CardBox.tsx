import { CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TBoxRadiusVariant, TBoxShadowVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { styled } from 'styled-components';
import { SBox, TBox } from '../box/Box';

type SimpleBoxProps = {
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TBoxShadowVariant;
    boxRadiusVariant?: TBoxRadiusVariant;
    $colors?: TypeColorScheme;
} & TBox.Main;

type SRootProps = {
    $colors: TypeColorScheme;
    $bg?: Hex;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TBoxShadowVariant;
    $boxRadiusVariant?: TBoxRadiusVariant;
} & TBox.SRoot;

const SRoot = styled(SBox.Root)<SRootProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
            $boxBorderColor: props.$boxBorderColor,
            $boxShadowColor: props.$boxShadowColor,
            $boxShadowVariant: props.$boxShadowVariant,
            $boxRadiusVariant: props.$boxRadiusVariant,
            $styles: props.$styles.box,
        })};
`;

export const CardBox = React.memo(
    React.forwardRef<HTMLDivElement, SimpleBoxProps>(
        (
            { as: Component = 'div', bg, boxBorderColor, boxRadiusVariant, boxShadowVariant, boxShadowColor, ...rest },
            ref
        ) => {
            const colors = useColorScheme();
            const styles = useStyleScheme(['box', 'mr']);

            return (
                <SRoot
                    ref={ref}
                    as={Component}
                    $styles={styles}
                    $colors={colors}
                    $mr={rest.mr}
                    $boxWidthVariant={rest.boxWidthVariant}
                    $boxPaddingVariant={rest.boxPaddingVariant}
                    $boxGapVariant={rest.boxGapVariant}
                    $boxDisplay={rest.boxDisplay}
                    $bg={bg}
                    $boxBorderColor={boxBorderColor}
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
    Box: SBox,
};

//export type
export namespace TCardBox {
    export type Main = SimpleBoxProps;
    export type SBox = SRootProps;
}
