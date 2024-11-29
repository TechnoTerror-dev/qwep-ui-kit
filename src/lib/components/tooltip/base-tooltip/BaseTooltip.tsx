import { useColorScheme } from '@src/lib/general/useColorScheme';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox } from '@src/lib/general/styleScheme';
import { TMargin } from '@src/lib/types/TypeBase';
import React from 'react';
import styled from 'styled-components';
import { SBaseTooltipComponent, TBaseTooltipComponent } from './BaseTooltipComponent';

type TypeStyles = {
    box: TypeSSBox;
};

type BaseTooltipProps = {
    tooltip: React.ReactNode;
    mr?: TMargin;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    providerProps?: React.ComponentPropsWithRef<typeof Tooltip.Provider>;
    rootProps?: React.ComponentPropsWithRef<typeof Tooltip.Root>;
    triggerProps?: React.ComponentPropsWithRef<typeof Tooltip.Trigger>;
    portalProps?: React.ComponentPropsWithRef<typeof Tooltip.Portal>;
} & TBaseTooltipComponent.SContent;

const STrigger = styled(Tooltip.Trigger)<React.ComponentPropsWithRef<typeof Tooltip.Trigger>>`
    all: unset;
    display: inline-block;
`;

type SContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
} & TBaseTooltipComponent.SContent;

const SContent = styled(SBaseTooltipComponent.Content)<SContentProps>`
    background-color: ${(props) => props.$colors.backgroundTooltip};
    color: ${(props) => props.$colors.textItem};
    font-size: 13px;
    margin: 6px;
    line-height: normal;
    border-radius: ${(props) => props.$styles.box.boxBorderRadius_1};
    padding: ${(props) => props.$styles.box.boxPadding_1};
    box-shadow: ${(props) => `${props.$styles.box.boxShadow_1} ${props.$colors.shadowColor}`};
`;

export const BaseTooltip = React.memo(
    React.forwardRef<HTMLButtonElement, BaseTooltipProps>(
        ({ tooltip, providerProps, rootProps, triggerProps, portalProps, $colors, $styles, ...rest }, ref) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['box'], $styles);

            return (
                <Tooltip.Provider {...providerProps}>
                    <Tooltip.Root {...rootProps}>
                        <STrigger ref={ref} {...triggerProps}>
                            {rest.children}
                        </STrigger>
                        <Tooltip.Portal {...portalProps}>
                            <SContent $colors={colors} $styles={styles} side={'bottom'} {...rest}>
                                {tooltip}
                            </SContent>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </Tooltip.Provider>
            );
        }
    )
);

//export component
export const SBaseTooltip = {
    Provider: Tooltip.Provider,
    Root: Tooltip.Root,
    Portal: Tooltip.Portal,
    Content: SContent,
    Trigger: STrigger,
};

//export type
export namespace TBaseTooltip {
    export type Main = BaseTooltipProps;
    export type Styles = TypeStyles;
    export type SProvider = React.ComponentPropsWithRef<typeof Tooltip.Provider>;
    export type STrigger = React.ComponentPropsWithRef<typeof Tooltip.Trigger>;
    export type SRoot = React.ComponentPropsWithRef<typeof Tooltip.Root>;
    export type SPortal = React.ComponentPropsWithRef<typeof Tooltip.Portal>;
    export type SContent = SContentProps;
}
