import * as S from '@radix-ui/react-select';
import React from 'react';
import styled from 'styled-components';

type SelectGroupProps = {
    label?: string;
    labelProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.ComponentPropsWithRef<typeof S.Group>;

const SGroup = styled(S.Group)<React.ComponentPropsWithRef<typeof S.Group>>`
    padding: 10px 0;
    &:not(:last-child) {
        border-bottom: 1px solid;
    }
`;

const SLabel = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    font-size: 12px;
    padding: 2px 20px 6px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const SelectGroupRef: React.ForwardRefRenderFunction<HTMLDivElement, SelectGroupProps> = (
    { label, labelProps, ...rest },
    ref
) => {
    return (
        <SGroup ref={ref} {...rest}>
            {label && <SLabel {...labelProps}>{label}</SLabel>}
            {rest.children}
        </SGroup>
    );
};

export const SelectGroup = React.forwardRef(SelectGroupRef);

//export component
export const SSelectGroup = {
    Label: SLabel,
    Group: SGroup,
};

//export type
export namespace TSelectGroup {
    export type Main = SelectGroupProps;
    export type SGroup = SelectGroupProps;
}
