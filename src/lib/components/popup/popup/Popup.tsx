import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { SBasePopup, TBasePopup } from '../base-popup/BasePopup';
import { CSSBaseBox, CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import {
    TBoxDisplay,
    TBoxGapVariant,
    TBoxPaddingVariant,
    TBoxRadiusVariant,
    TBoxShadowVariant,
    TBoxWidthVariant,
} from '@src/lib/types/TypeBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};

type PopupProps = {
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TBoxShadowVariant;
    boxRadiusVariant?: TBoxRadiusVariant;
    boxWidthVariant?: TBoxWidthVariant;
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    boxDisplay?: TBoxDisplay;
    maxHeight?: string;
    color?: Hex;
    $styles?: TypeStyles;
    headerProps?: React.HTMLAttributes<HTMLDivElement>;
    cardProps?: React.HTMLAttributes<HTMLDivElement>;
} & TBasePopup.Main;

type SContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $bg?: Hex;
    $width?: string;
    $height?: string;
    $maxHeight?: string;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TBoxShadowVariant;
    $boxRadiusVariant?: TBoxRadiusVariant;
    $boxWidthVariant?: TBoxWidthVariant;
    $boxPaddingVariant?: TBoxPaddingVariant;
    $boxGapVariant?: TBoxGapVariant;
    $boxDisplay?: TBoxDisplay;
} & TBasePopup.SContent;

const SContent = styled(SBasePopup.Content)<SContentProps>`
    overflow: hidden;
    background-color: ${({ $colors, $bg }) => $bg ?? $colors.backgroundBox};
    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
            $boxBorderColor: props.$boxBorderColor,
            $boxShadowColor: props.$boxShadowColor,
            $boxShadowVariant: props.$boxShadowVariant,
            $boxRadiusVariant: props.$boxRadiusVariant,
            $styles: props.$styles.box,
        })};
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
            $boxDisplay: props.$boxDisplay,
        })};
`;

export const Popup = React.memo(
    React.forwardRef<HTMLButtonElement, PopupProps>(
        (
            {
                trigger,
                bg,

                boxBorderColor,
                boxShadowColor,
                boxShadowVariant = 'shd-2',
                boxRadiusVariant = 'br-2',
                boxWidthVariant,
                boxPaddingVariant = 'p-3',
                boxGapVariant,
                boxDisplay,

                $colors,
                $styles,
                triggerProps,
                portalProps,
                contentProps,

                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'box', 'typography'], $styles);

            return (
                <SBasePopup.Root {...rest}>
                    <SBasePopup.Trigger ref={ref} {...triggerProps}>
                        {trigger}
                    </SBasePopup.Trigger>
                    <SBasePopup.Portal {...portalProps}>
                        <SContent
                            $colors={colors}
                            $styles={styles}
                            $bg={bg}
                            $boxBorderColor={boxBorderColor}
                            $boxShadowColor={boxShadowColor}
                            $boxShadowVariant={boxShadowVariant}
                            $boxRadiusVariant={boxRadiusVariant}
                            $boxWidthVariant={boxWidthVariant}
                            $boxPaddingVariant={boxPaddingVariant}
                            $boxGapVariant={boxGapVariant}
                            $boxDisplay={boxDisplay}
                            sideOffset={8}
                            {...contentProps}
                        >
                            {rest.children}
                        </SContent>
                    </SBasePopup.Portal>
                </SBasePopup.Root>
            );
        }
    )
);

//export component
export const SPopup = {
    Root: SBasePopup.Root,
    Trigger: SBasePopup.Trigger,
    Portal: SBasePopup.Portal,
    Content: SContent,
};

//export type
export namespace TPopup {
    export type Styles = TypeStyles;
    export type Main = PopupProps;
    export type SRoot = TBasePopup.SRoot;
    export type SPortal = TBasePopup.SPortal;
    export type STrigger = TBasePopup.STrigger;
    export type SContent = SContentProps;
}
