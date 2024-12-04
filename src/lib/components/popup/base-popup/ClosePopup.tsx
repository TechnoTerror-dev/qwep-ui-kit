import * as P from '@radix-ui/react-popover';
import React from 'react';
import { styled } from 'styled-components';

const SRoot = styled(P.Close)<React.ComponentPropsWithoutRef<typeof P.Close>>`
    all: unset;
    width: fit-content;
`;

export const ClosePopupButton = React.memo<React.ComponentPropsWithoutRef<typeof P.Close>>(({ ...rest }) => {
    return <SRoot {...rest}>{rest.children}</SRoot>;
});

//export component
export const SClosePopupButton = {
    Root: P.Root,
};

//export type
export namespace TClosePopupButton {
    export type Main = React.ComponentPropsWithoutRef<typeof P.Close>;
}
