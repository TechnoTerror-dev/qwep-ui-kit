import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR, TypeSSPopup, TypeSSTypography } from '@src/lib/general/styleScheme';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SBasePopup, TBasePopup } from '../base-popup/BasePopup';
import { CSSBaseBox, CSSSimpleBox, CSSBlurEffect } from '@src/lib/common-styled-component/StyledComponentBox';
import { EBoxProps, TBoxProps } from '@src/lib/types/TypeBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
    popup: TypeSSPopup;
};

type PopupProps = {
    isBlur?: boolean;
    boxShadowColor?: Hex;
    boxShadowVariant?: TBoxProps.BoxShadowVariant;
    boxRadiusVariant?: TBoxProps.BoxRadiusVariant;
    boxWidthVariant?: TBoxProps.BoxWidthVariant;
    boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    boxGapVariant?: TBoxProps.BoxGapVariant;
    boxDisplay?: TBoxProps.BoxDisplay;
    maxHeight?: string;
    color?: Hex;
    $styles?: TypeStyles;
    headerProps?: React.HTMLAttributes<HTMLDivElement>;
    cardProps?: React.HTMLAttributes<HTMLDivElement>;
} & TBasePopup.Main;

type SContentProps = {
    $isBlur?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $bg?: Hex;
    $width?: string;
    $height?: string;
    $maxHeight?: string;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TBoxProps.BoxShadowVariant;
    $boxRadiusVariant?: TBoxProps.BoxRadiusVariant;
    $boxWidthVariant?: TBoxProps.BoxWidthVariant;
    $boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    $boxGapVariant?: TBoxProps.BoxGapVariant;
    $boxDisplay?: TBoxProps.BoxDisplay;
} & TBasePopup.SContent;

const opacity_SContentEffect = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const SContent = styled(SBasePopup.Content)<SContentProps>`
    overflow: hidden;
    background-color: ${({ $styles, $colors, $bg }) =>
        $bg ?? `${$colors.backgroundBox}${$styles.popup.backgroundOpacity}`};
    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
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
    animation: ${opacity_SContentEffect} 0.3s ease-in-out;

    ${(props) => {
        if (props.$isBlur) {
            return CSSBlurEffect({ $blurCount: props.$styles.popup.blurCount });
        }
    }};
`;

export const Popup = React.memo(
    React.forwardRef<HTMLButtonElement, PopupProps>(
        (
            {
                trigger,
                isBlur,
                bg,
                boxShadowColor,
                boxWidthVariant,
                boxShadowVariant = EBoxProps.BoxShadowVariant.ShdM,
                boxRadiusVariant = EBoxProps.BoxRadiusVariant.BrM,
                boxPaddingVariant = EBoxProps.BoxPaddingVariant.P3,
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
            const styles = useStyleScheme(['mr', 'box', 'typography', 'popup'], $styles);

            return (
                <SBasePopup.Root {...rest}>
                    <SBasePopup.Trigger ref={ref} {...triggerProps}>
                        {trigger}
                    </SBasePopup.Trigger>
                    <SBasePopup.Portal {...portalProps}>
                        <SContent
                            $isBlur={isBlur}
                            $colors={colors}
                            $styles={styles}
                            $bg={bg}
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
