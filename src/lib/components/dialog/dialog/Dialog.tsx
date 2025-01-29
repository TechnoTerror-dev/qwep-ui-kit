import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSDialog } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';
import * as D from '@radix-ui/react-dialog';
import { TBoxProps, EBoxProps } from '@src/lib/types/TypeBox';
import { CSSBaseBox, CSSSimpleBox, CSSBlurEffect } from '@src/lib/common-styled-component/StyledComponentBox';
import { SDialogComponent, TDialogComponent } from './DialogComponents';

type TypeStyles = {
    box: TypeSSBox;
    dialog: TypeSSDialog;
};

type DialogProps = {
    isBlur?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    bg?: Hex;
    boxShadowColor?: Hex;
    boxDisplay?: TBoxProps.BoxDisplay;
    boxShadowVariant?: TBoxProps.BoxShadowVariant;
    boxRadiusVariant?: TBoxProps.BoxRadiusVariant;
    boxWidthVariant?: TBoxProps.BoxWidthVariant;
    boxPaddingVariant?: TBoxProps.BoxPaddingVariant;
    boxGapVariant?: TBoxProps.BoxGapVariant;
    overlayColor?: Hex;
    contentWidth?: string;
    portalProps?: React.ComponentPropsWithoutRef<typeof D.Portal>;
    overlayProps?: TDialogComponent.SOverlay;
    contentProps?: TDialogComponent.SContent;
} & React.ComponentPropsWithoutRef<typeof D.Root>;

type SOverlayProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $overlayColor?: Hex;
} & TDialogComponent.SOverlay;

const SOverlay = styled(SDialogComponent.Overlay)<SOverlayProps>`
    background-color: ${(props) =>
        getColor({ cs: props.$colors, color: props.$overlayColor ?? props.$colors.omega, opacity: '90' })};
`;

type SContentProps = {
    $isBlur?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $contentWidth?: string;
    $boxDisplay?: TBoxProps.BoxDisplay;
    $boxPaddingVariant: TBoxProps.BoxPaddingVariant;
    $boxShadowVariant?: TBoxProps.BoxShadowVariant;
    $boxRadiusVariant: TBoxProps.BoxRadiusVariant;
    $boxShadowColor?: Hex;
    $boxWidthVariant?: TBoxProps.BoxWidthVariant;
    $boxGapVariant?: TBoxProps.BoxGapVariant;
    $bg?: Hex;
} & TDialogComponent.SContent;

const SContent = styled(SDialogComponent.Content)<SContentProps>`
    position: relative;
    background-color: ${(props) =>
        props.$bg ?? `${props.$colors.backgroundBox}${props.$styles.dialog.backgroundOpacity}`};
    width: calc(100vw - 60px);
    max-width: ${(props) => props.$contentWidth ?? '768px'};
    overflow-x: 'hidden';
    overflow-y: auto;

    ${(props) =>
        StyledScrollbarItem({
            $colors: props.$colors,
        })}
    ${(props) =>
        CSSBaseBox({
            $boxDisplay: props.$boxDisplay,
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
            $boxShadowColor: props.$boxShadowColor,
            $boxShadowVariant: props.$boxShadowVariant,
            $boxRadiusVariant: props.$boxRadiusVariant,
            $styles: props.$styles.box,
        })};

    ${(props) => {
        if (props.$isBlur) {
            return CSSBlurEffect({ $blurCount: props.$styles.dialog.blurCount });
        }
    }};
`;

export const Dialog = React.memo(
    React.forwardRef<HTMLDivElement, DialogProps>(
        (
            {
                bg,
                isBlur,
                boxShadowColor,
                boxShadowVariant,
                boxDisplay,
                boxRadiusVariant = EBoxProps.BoxRadiusVariant.BrM,
                boxPaddingVariant = EBoxProps.BoxPaddingVariant.P4,
                contentWidth,
                boxWidthVariant,
                boxGapVariant,
                overlayColor,
                $colors,
                $styles,
                overlayProps,
                portalProps,
                contentProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['box', 'dialog'], $styles);

            return (
                <D.Root {...rest}>
                    <D.Portal {...portalProps}>
                        <SOverlay $colors={colors} $styles={styles} $overlayColor={overlayColor} {...overlayProps}>
                            <SContent
                                ref={ref}
                                $isBlur={isBlur}
                                $colors={colors}
                                $styles={styles}
                                $boxPaddingVariant={boxPaddingVariant}
                                $bg={bg}
                                $boxDisplay={boxDisplay}
                                $contentWidth={contentWidth}
                                $boxShadowColor={boxShadowColor}
                                $boxShadowVariant={boxShadowVariant}
                                $boxRadiusVariant={boxRadiusVariant}
                                $boxWidthVariant={boxWidthVariant}
                                $boxGapVariant={boxGapVariant}
                                {...contentProps}
                            >
                                {rest.children}
                            </SContent>
                        </SOverlay>
                    </D.Portal>
                </D.Root>
            );
        }
    )
);

//export component
export const SDialog = {
    Root: D.Root,
    Overlay: SOverlay,
    Content: SContent,
    Portal: D.Portal,
};

//export type
export namespace TDialog {
    export type Main = DialogProps;
    export type Styles = TypeStyles;
    export type SRoot = React.ComponentPropsWithoutRef<typeof D.Root>;
    export type SPortal = React.ComponentPropsWithoutRef<typeof D.Portal>;
    export type SOverlay = SOverlayProps;
    export type SContent = SContentProps;
}
