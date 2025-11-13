import * as S from '@radix-ui/react-select';
import React from 'react';
import styled from 'styled-components';

// content
type SIconProps = React.ComponentPropsWithRef<typeof S.Icon>;
const SIcon = styled(S.Icon)`
    margin-left: 4px;
    svg {
        width: 15px;
        height: 15px;
        min-width: 15px;
        min-height: 15px;
    }
`;

// item
type SItemProps = React.ComponentPropsWithRef<typeof S.Item>;
const SItem = styled(S.Item)`
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    outline: none;
    line-height: normal;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

//export component
export const SSelectComponent = {
    Icon: SIcon,
    Item: SItem,
};

//export type
export namespace TSelectComponent {
    export type SIcon = SIconProps;
    export type SItem = SItemProps;
}
