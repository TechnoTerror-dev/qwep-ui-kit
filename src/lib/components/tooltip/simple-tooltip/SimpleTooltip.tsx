import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex } from '@src/lib/general/colors';
import React from 'react';
import styled from 'styled-components';
import { TBoxGapVariant, TBoxPaddingVariant, TBoxRadiusVariant, TBoxShadowVariant } from '@src/lib/types/TypeBox';
import { CSSBaseBox, CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { TBaseTooltip, SBaseTooltip } from '../base-tooltip/BaseTooltip';
import { SBaseTooltipComponent } from '../base-tooltip/BaseTooltipComponent';

type SimpleTooltipProps = {
    boxPaddingVariant?: TBoxPaddingVariant;
    boxGapVariant?: TBoxGapVariant;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TBoxShadowVariant;
    boxRadiusVariant?: TBoxRadiusVariant;
    bg?: Hex;
} & TBaseTooltip.Main;

type SContentProps = {
    $bg?: Hex;
    $boxGapVariant?: TBoxGapVariant;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TBoxShadowVariant;
    $boxRadiusVariant: TBoxRadiusVariant;
    $boxPaddingVariant: TBoxPaddingVariant;
} & TBaseTooltip.SContent;

const SContent = styled(SBaseTooltipComponent.Content)<SContentProps>`
    ${(props) =>
        CSSBaseBox({
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
            $boxBorderColor: props.$boxBorderColor,
            $boxShadowColor: props.$boxShadowColor,
            $boxShadowVariant: props.$boxShadowVariant,
            $boxRadiusVariant: props.$boxRadiusVariant,
            $styles: props.$styles.box,
        })};
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundTooltip};
    font-size: 13px;
    margin: 6px;
    line-height: normal;
    color: ${(props) => props.$colors.textItem};
`;

export const SimpleTooltip = React.memo(
    React.forwardRef<HTMLButtonElement, SimpleTooltipProps>(
        (
            {
                bg,
                tooltip,
                boxPaddingVariant = 'p-1',
                boxGapVariant,
                boxBorderColor,
                boxShadowColor,
                boxShadowVariant = 'shd-1',
                boxRadiusVariant = 'br-1',
                $colors,
                $styles,
                providerProps,
                rootProps,
                triggerProps,
                portalProps,

                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['box'], $styles);

            return (
                <SBaseTooltip.Provider {...providerProps}>
                    <SBaseTooltip.Root {...rootProps}>
                        <SBaseTooltip.Trigger ref={ref} {...triggerProps}>
                            {rest.children}
                        </SBaseTooltip.Trigger>
                        <SBaseTooltip.Portal {...portalProps}>
                            <SContent
                                $bg={bg}
                                $colors={colors}
                                $styles={styles}
                                $boxPaddingVariant={boxPaddingVariant}
                                $boxGapVariant={boxGapVariant}
                                $boxBorderColor={boxBorderColor}
                                $boxShadowColor={boxShadowColor}
                                $boxShadowVariant={boxShadowVariant}
                                $boxRadiusVariant={boxRadiusVariant}
                                side={'bottom'}
                                {...rest}
                            >
                                {tooltip}
                            </SContent>
                        </SBaseTooltip.Portal>
                    </SBaseTooltip.Root>
                </SBaseTooltip.Provider>
            );
        }
    )
);

//export component
export const SSimpleTooltip = {
    Content: SContent,
    Provider: SBaseTooltip.Provider,
    Root: SBaseTooltip.Root,
    Portal: SBaseTooltip.Portal,
    Trigger: SBaseTooltip.Trigger,
};

//export type
export namespace TSimpleTooltip {
    export type Main = SimpleTooltipProps;
    export type SContent = SContentProps;
    export type SProvider = TBaseTooltip.SProvider;
    export type STrigger = TBaseTooltip.STrigger;
    export type SRoot = TBaseTooltip.SRoot;
    export type SPortal = TBaseTooltip.SPortal;
}
