import { getColor } from '@src/lib/common/getColor';
import { TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { TVariantColor } from '@src/lib/types/TypeBase';
import React from 'react';
import styled from 'styled-components';

type TypeMessage = {
    text?: React.ReactNode;
    colorVariant?: TVariantColor;
};

type MessageBoxProps = {
    $colors?: TypeColorScheme;
    message?: TypeMessage;
} & React.HTMLAttributes<HTMLSpanElement>;

type SRootProps = {
    $colors: TypeColorScheme;
    $colorVariant: TVariantColor;
} & React.HTMLAttributes<HTMLSpanElement>;

const SRoot = styled.span<SRootProps>`
    position: absolute;
    user-select: none;
    font-size: 12px;
    top: calc(100% + 2px);
    left: 0;
    color: ${(props) =>
        getColor({
            cs: props.$colors,
            variant: props.$colorVariant,
        })};
`;

export const MessageBox = React.memo(
    React.forwardRef<HTMLSpanElement, MessageBoxProps>(({ $colors, message, ...rest }, ref) => {
        const colors = useColorScheme($colors);
        if (!message) return;
        return (
            <SRoot ref={ref} $colors={colors} $colorVariant={message.colorVariant ?? 'error'} {...rest}>
                {message.text}
            </SRoot>
        );
    })
);

//export component
export const SMessageBox = {
    Root: SRoot,
};

//export type
export namespace TMessageBox {
    export type Message = TypeMessage;
    export type Main = MessageBoxProps;
    export type SRoot = SRootProps;
}
