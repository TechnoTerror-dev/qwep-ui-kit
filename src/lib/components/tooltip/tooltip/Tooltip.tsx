import { useColorScheme } from '@src/lib/general/useColorScheme';
import * as T from '@radix-ui/react-tooltip';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSTooltip, TypeSSTypography } from '@src/lib/general/styleScheme';
import { TBaseProps } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';
import { STooltipComponent, TTooltipComponent } from './TooltipComponent';

type TypeStyles = {
    tooltip: TypeSSTooltip;
    typography: TypeSSTypography;
};

type TooltipProps = {
    tooltip: React.ReactNode;
    mr?: TBaseProps.Margin;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    isCustom?: boolean;
    providerProps?: React.ComponentPropsWithRef<typeof T.Provider>;
    rootProps?: React.ComponentPropsWithRef<typeof T.Root>;
    triggerProps?: React.ComponentPropsWithRef<typeof T.Trigger>;
    portalProps?: React.ComponentPropsWithRef<typeof T.Portal>;
} & TTooltipComponent.SContent;

const STrigger = styled(T.Trigger)<React.ComponentPropsWithRef<typeof T.Trigger>>`
    all: unset;
`;

type SContentProps = {
    $isCustom?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
} & TTooltipComponent.SContent;

const SContent = styled(STooltipComponent.Content)<SContentProps>`
    ${(props) => {
        if (!props.$isCustom) {
            return css`
                background-color: ${props.$colors.backgroundTooltip};
                color: ${props.$colors.textItem};
                font-size: ${props.$styles.typography.subText};
                line-height: ${props.$styles.typography.lineHeightSubText};
                border-radius: ${props.$styles.tooltip.borderRadius};
                padding: ${props.$styles.tooltip.padding};
                box-shadow: ${`${props.$styles.tooltip.boxShadow} ${props.$colors.shadowColor}`};
            `;
        }
    }}
`;

export const Tooltip = React.memo(
    React.forwardRef<HTMLButtonElement, TooltipProps>(
        (
            { tooltip, isCustom, providerProps, rootProps, triggerProps, portalProps, $colors, $styles, ...rest },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['tooltip', 'typography'], $styles);

            return (
                <T.Provider delayDuration={500} {...providerProps}>
                    <T.Root {...rootProps}>
                        <STrigger ref={ref} {...triggerProps}>
                            {rest.children}
                        </STrigger>
                        <T.Portal {...portalProps}>
                            <SContent
                                $colors={colors}
                                $styles={styles}
                                $isCustom={isCustom}
                                sideOffset={4}
                                side={'bottom'}
                                {...rest}
                            >
                                {tooltip}
                            </SContent>
                        </T.Portal>
                    </T.Root>
                </T.Provider>
            );
        }
    )
);

//export component
export const STooltip = {
    Provider: T.Provider,
    Root: T.Root,
    Portal: T.Portal,
    Content: SContent,
    Trigger: STrigger,
};

//export type
export namespace TTooltip {
    export type Main = TooltipProps;
    export type Styles = TypeStyles;
    export type SProvider = React.ComponentPropsWithRef<typeof T.Provider>;
    export type STrigger = React.ComponentPropsWithRef<typeof T.Trigger>;
    export type SRoot = React.ComponentPropsWithRef<typeof T.Root>;
    export type SPortal = React.ComponentPropsWithRef<typeof T.Portal>;
    export type SContent = SContentProps;
}
