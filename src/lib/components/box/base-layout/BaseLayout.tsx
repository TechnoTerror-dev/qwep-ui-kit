import React from 'react';
import { styled } from 'styled-components';

type BaseLayoutProps = {
    children?: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;

const SWrapper = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    margin: 0 auto;
    height: 100%;
    @media screen and (min-width: 1281px) {
        max-width: 1800px;
    }
    @media screen and (max-width: 1280px) {
        max-width: 100%;
    }
`;

const SRoot = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    position: relative;
    width: 100%;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    padding: 0 30px;
    @media screen and (max-width: 767px) {
        padding: 0 15px;
    }
`;

export const BaseLayout = React.memo(
    React.forwardRef<HTMLDivElement, BaseLayoutProps>(({ as: Component = 'div', rootProps, ...rest }, ref) => {
        return (
            <SRoot ref={ref} as={Component} {...rootProps}>
                <SWrapper {...rest}>{rest.children}</SWrapper>
            </SRoot>
        );
    })
);

//export component
export const SBaseLayout = {
    Root: SRoot,
    Layout: SWrapper,
};

//export type
export namespace TBaseLayout {
    export type Main = BaseLayoutProps;
    export type SRoot = React.HTMLAttributes<HTMLDivElement>;
    export type SWrapper = React.HTMLAttributes<HTMLDivElement>;
}
