import * as P from '@radix-ui/react-popover';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import React from 'react';
import styled from 'styled-components';
import { TMargin } from '@src/lib/types/TypeBase';

type BasePopupProps = {
    trigger: React.ReactNode;
    mr?: TMargin;
    bg?: Hex;
    $colors?: TypeColorScheme;
    triggerProps?: React.ComponentPropsWithRef<typeof P.Trigger>;
    portalProps?: React.ComponentPropsWithRef<typeof P.Portal>;
    contentProps?: React.ComponentPropsWithRef<typeof P.Content>;
} & React.ComponentPropsWithRef<typeof P.Root>;

const STrigger = styled(P.Trigger)<React.ComponentPropsWithRef<typeof P.Trigger>>`
    all: unset;
    width: fit-content;
`;

const SContent = styled(P.Content)<React.ComponentPropsWithRef<typeof P.Content>>`
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
`;

export const BasePopup = React.memo(
    React.forwardRef<HTMLButtonElement, BasePopupProps>(
        ({ trigger, triggerProps, portalProps, contentProps, ...rest }, ref) => {
            return (
                <P.Root {...rest}>
                    <STrigger ref={ref} {...triggerProps}>
                        {trigger}
                    </STrigger>
                    <P.Portal {...portalProps}>
                        <SContent sideOffset={8} {...contentProps}>
                            {rest.children}
                        </SContent>
                    </P.Portal>
                </P.Root>
            );
        }
    )
);

//export component
export const SBasePopup = {
    Root: P.Root,
    Portal: P.Portal,
    Content: SContent,
    Trigger: STrigger,
};

//export type
export namespace TBasePopup {
    export type Main = BasePopupProps;
    export type SContent = React.ComponentPropsWithRef<typeof P.Content>;
    export type SRoot = React.ComponentPropsWithRef<typeof P.Root>;
    export type SPortal = React.ComponentPropsWithRef<typeof P.Portal>;
    export type STrigger = React.ComponentPropsWithRef<typeof P.Trigger>;
}
