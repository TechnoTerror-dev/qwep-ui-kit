import { useColorScheme } from '@src/lib/general';
import { TypeColorScheme } from '@src/lib/general/colors';
import React from 'react';
import { styled } from 'styled-components';

type BaseContainerProps = {
    as?: keyof JSX.IntrinsicElements;
    background?: string;
} & React.HTMLAttributes<HTMLDivElement>;

type SContainerProps = {
    $background?: string;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SContainer = styled.div<SContainerProps>`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100vh;
    background: ${(props) => props.$background ?? props.$colors.background};
`;

export const BaseContainer = React.memo(
    React.forwardRef<HTMLDivElement, BaseContainerProps>(({ as: Component = 'div', background, ...rest }, ref) => {
        const colors = useColorScheme();
        return (
            <SContainer ref={ref} as={Component} $background={background} $colors={colors} {...rest}>
                {rest.children}
            </SContainer>
        );
    })
);

//export component
export const SBaseContainer = {
    Container: SContainer,
};

//export type
export namespace TBaseContainer {
    export type Main = BaseContainerProps;
    export type SContainer = SContainerProps;
}
